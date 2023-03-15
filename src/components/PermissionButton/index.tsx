import { Button, ConfigProvider, Modal } from 'antd';
import React, { Children, ReactNode, useRef, useState } from 'react';
import { Permission } from '../Permission'


type PermissionButtonProps = {
    buttonText: string
    code: string
    url: string
}

const PermissionButton = (props: PermissionButtonProps) => {
    const { buttonText, code, url } = props


    const jump = () => {
        const history = window?._utils?.History
        history.push(url)
    }

    return (<ConfigProvider>
        <Permission code={code} hasPermission={window?._utils?.hasPermission}>
            <Button type="primary" onClick={jump} >
                {buttonText}
            </Button>
        </Permission>

    </ConfigProvider>)
}

export { PermissionButton }