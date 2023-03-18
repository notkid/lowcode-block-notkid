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

    const onUploadAreaDrop =(e) => {
        e.preventDefault()
        window?._utils?.parseExcel(e.dataTransfer.files[0], [], res => {
            debugger

        })
    }

    const  onUploadAreaDragOver= (e: any) => e.preventDefault()

    const handleImportExcel = () => {
        debugger
        window?._utils?.importExcel([], (res: any) => {
            debugger
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
                <div onDrop={onUploadAreaDrop} onDragOver={onUploadAreaDragOver} onClick={handleImportExcel} style={{border: '1px dashed #ddd', borderRadius: '4px'}}>
                    <img data-v-39c3d220="" alt="icon" src="data:image/jpeg;base64,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" class="upload-area-icon" />
                    <p style={{fontWeight: 'bold'}}>上传 excel{typeName}导入初始化表</p>
                    <p className="ant-upload-hint">
                        上传 excel {typeName}导入初始化表<Button type="link">点击上传</Button>
                    </p>
                </div>
            </Modal>
        </>
    )
}

export { ImportDialogButton }