import { ConfigProvider } from "antd"
import React from 'react'
import { getValueByPath } from "../../shared"

const FormatMessage =  ({id}) => {
   const Context = ConfigProvider.ConfigContext


   return <Context.Consumer>
    {
        (value) => {
            const {locale} = value
            debugger
            const message = getValueByPath(locale, id)
            return (
                <div>{message|| id}</div>
            )
        }
    }
   </Context.Consumer>
}

export default FormatMessage