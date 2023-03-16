import { Button, ConfigProvider, Modal } from 'antd';
import React, { Children, ReactNode, useRef, useState } from 'react';
import { Permission } from '../Permission'
import Context from '../SearchTable/context';


type ButtonType = 'url' | 'request' | 'export' | 'modal'

type PermissionButtonProps = {
    buttonText: string
    code: string
    url: string
    buttonType: ButtonType
}

const PermissionButton = (props: PermissionButtonProps) => {
    const { buttonText, code, url, buttonType } = props


    const jump = () => {
        const history = window?._utils?.History
        history.push(url)
    }

    const handleClick = (value: any) => {
        const {formRef} = value
        const formData = formRef?.current?.getFieldsFormatValue?.()
        if (buttonType === 'url') {
            jump()
        }else if (buttonType === 'request') {
            if (window?.request) {
                window.request(url)
            }
        } else if (buttonType === 'export') {
            if (window?.request) {
                window.request(url, {
                    data: formData
                })
            }
        }
        else if (buttonType === 'modal') {

        }
    }

    return (<ConfigProvider>
        <Context.Consumer>
            {
                value => {
                    return (
                        <Permission code={code} hasPermission={window?._utils?.hasPermission}>
                        <Button type="primary" onClick={() =>handleClick(value)} >
                            {buttonText}
                        </Button>
                    </Permission>
                    )
                }
            }
        </Context.Consumer>
       

    </ConfigProvider>)
}

export { PermissionButton }