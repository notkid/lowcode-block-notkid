import {ReactNode} from 'react';


type PermissionProps = {
    children: ReactNode
    code: string
    hasPermission: (code: string) => boolean
}

const defaultHasPermission = () => false

const Permission = (props: PermissionProps) => {
    const { children, hasPermission = defaultHasPermission, code } = props;
    if(!code) {
        return children
    }
    if(code && hasPermission(code)) {
        return children
    }
    return null
}

export {Permission} 