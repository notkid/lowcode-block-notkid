import { Button, ConfigProvider, Modal } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import React, { Children, ReactNode, useRef, useState} from 'react';


type ImportDialogButtonProps = {
    modalTitle: string
    buttonText: string
    children: ReactNode
    downloadExcelUrl: string
    uploadExcelUrl: string
}

const ImportDialogButton = (props: ImportDialogButtonProps) => {
    const [visible, setVisible] = useState(false)
    const { modalTitle, buttonText, children, downloadExcelUrl, uploadExcelUrl } = props
    const showModal = () => {
        setVisible(true)
    }

    const handleCancel = () => {
        setVisible(false)
    }

    const handleDownload = () => {
        window.request(downloadExcelUrl,{
            getResponse: true,
        }).then(res=>res.blob()).then(file => {
            let eleLink = document.createElement('a')
            eleLink.download = '111'
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

    return (<ConfigProvider>
        <Button type="primary" onClick={showModal} >
            {buttonText}
        </Button>
        <Modal title={modalTitle} {...props} visible={visible} onCancel={handleCancel} okText="确认" cancelText="取消">
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
    </ConfigProvider>)
}

export { ImportDialogButton }