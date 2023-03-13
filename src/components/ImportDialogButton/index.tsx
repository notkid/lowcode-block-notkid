import { Button, ConfigProvider, Modal } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import React, { Children, ReactNode, useRef, useState } from 'react';
import { request as innerRequest } from '../../request'

let request = window.request || innerRequest;


type ImportDialogButtonProps = {
    modalTitle: string
    buttonText: string
    children: ReactNode
    downloadExcelUrl: string
    uploadExcelUrl: string
    label: string
}

const ImportDialogButton = (props: ImportDialogButtonProps) => {
    const [visible, setVisible] = useState(false)
    const { modalTitle, buttonText, children, downloadExcelUrl, uploadExcelUrl } = props
    const showModal = () => {
        setVisible(true)
    }
    const handleCancel = () => {
        debugger
        setVisible(false)
    }

    const handleDownload = () => {
        request(downloadExcelUrl, {
            method: 'POST',
            getResponse: true,
            data: { "tenantId": "default_tenant", "appId": 1196271598647115800, "userId": "2477", "merchantId": 82, "merchantName": "18770084902商户", "id": 195, "remark": null, "createdTime": 1656986330000, "updatedTime": 1656986330000, "createdBy": 2477, "updatedBy": 2477, "createdByName": "18770084902法人姓名", "updatedByName": "18770084902法人姓名", "bookName": "mtest", "type": 7, "bookId": 195, "responseType": "arraybuffer" }
        }).then(res => res.blob()).then(file => {

            let eleLink = document.createElement('a')
            eleLink.download = '1.xls'
            eleLink.style.display = 'none'
            // 字符内容转变成blob地址
            let blob = new Blob([file])
            eleLink.href = URL.createObjectURL(blob)
            // 触发点击
            document.body.appendChild(eleLink)
            eleLink.click()
            // 然后移除
            document.body.removeChild(eleLink)

        })
    }

    const uploadProps: any = {
        name: 'file',
        multiple: true,
        action: uploadExcelUrl,
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                // message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                // message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    return (
        <>

            <a onClick={(e) => {
                e.preventDefault();
                showModal()
            }}>
                导入

            </a>

            <Modal title={modalTitle} {...props} visible={visible} onCancel={handleCancel} okText="确认" cancelText="取消" maskClosable={true}>
                <p>第一步：下载银行账号导入初始化模板</p>
                <div>模板.xls<Button type="text" onClick={handleDownload}>下载</Button></div>
                <p>第二步：导入填写完成的Excel文件</p>
                <div>
                    <Dragger {...uploadProps}>
                        <p className="ant-upload-drag-icon">
                            {/* <Inbox /> */}
                        </p>
                        <p className="ant-upload-text">上传 excel 银行账号导入初始化表</p>
                        <p className="ant-upload-hint">
                            上传 excel 银行账号导入初始化表点击上传
                        </p>
                    </Dragger>
                </div>

            </Modal>
        </>


    )
}

export { ImportDialogButton }