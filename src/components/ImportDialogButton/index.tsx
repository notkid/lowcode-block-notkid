import { Button, ConfigProvider, Modal, message } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import React, { Children, ReactNode, useMemo, useRef, useState } from 'react';
import { request as innerRequest } from '../../request'
import { defineGetterProperties, isPlainObj } from '../../shared/index'



let request = window?.request


type ImportDialogButtonProps = {
    modalTitle: string
    children: ReactNode
    downloadExcelUrl: string
    importExcelUrl: string
    type: string
    valueEnum: {string: object}
    id: string,
}

const ImportDialogButton = (props: ImportDialogButtonProps) => {
    const [visible, setVisible] = useState(false)
    const { downloadExcelUrl, importExcelUrl, valueEnum={}, type } = props
    const showModal = () => {
        setVisible(true)
    }
    const handleCancel = () => {
        setVisible(false)
    }
    const typeName =  valueEnum[type]?.text || ''

    const columns = valueEnum[type]?.columns|| []

    const handleDownload = () => {
        request(downloadExcelUrl, {
            method: 'GET',
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

    const handleImportExcel = () => {
        window?._utils?.importExcel([], (res: any) => {
            const [{data}] = res
            const result = Object.keys(data).reduce((sum: any, key) => {
                const column = columns.find((v:any)=>v.label==key)
                if(column) {
                    sum[column.prop] = data[key]
                }
            },{})
            window.request(importExcelUrl, {
                method: 'POST',
                data: result
            }).then(res=> {
                if(res?.payload?.msg) {
                    
                    message.error(res?.payload?.msg)
                }
            })
        });
      }

    return (
        <>

            <a onClick={(e) => {
                e.preventDefault();
                showModal()
            }}>
                导入
            </a>

            <Modal title={`${typeName}导入`} {...props} footer={null} visible={visible} onCancel={handleCancel} okText="确认" cancelText="取消" maskClosable={true}>
                <p>第一步：下载{typeName}导入初始化模板</p>
                <div>{typeName}初始化模板模板.xls<Button type="link" onClick={handleDownload}>下载</Button></div>
                <p>第二步：导入填写完成的Excel文件</p>
                <div onClick={handleImportExcel} style={{border: '1px dashed #ddd', borderRadius: '4px'}}>
                    <p className="ant-upload-drag-icon">
                        {/* <Inbox /> */}
                    </p>
                    <p className="ant-upload-text">上传 excel{typeName}导入初始化表</p>
                    <p className="ant-upload-hint">
                        上传 excel {typeName}导入初始化表<Button type="link">点击上传</Button>
                    </p>
                </div>
            </Modal>
        </>
    )
}

export { ImportDialogButton }