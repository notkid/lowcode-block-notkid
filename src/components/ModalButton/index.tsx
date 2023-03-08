import { Button, ConfigProvider, Modal } from 'antd';
import React, { Children, ReactNode, useRef, useState } from 'react';


type ModalButtonProps = {
    modalTitle: string
    buttonText: string
    children: ReactNode
}

const ModalButton = (props: ModalButtonProps) => {
    const [visible, setVisible] = useState(false)
    const { modalTitle, buttonText, children } = props
    const showModal = () => {
        setVisible(true)
    }

    const handleCancel = () => {
        setVisible(false)
    }

    return (<ConfigProvider>
        <Button type="primary" onClick={showModal} >
            {buttonText}
        </Button>
        <Modal {...props} title={modalTitle} visible={visible} onCancel={handleCancel} okText="确认" cancelText="取消">
            {children}
        </Modal>
    </ConfigProvider>)
}

export { ModalButton }