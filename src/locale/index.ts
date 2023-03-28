import zhCn from './zh-Cn'
import zhCNIntl from 'antd/es/locale/zh_CN';
import enUSIntl from 'antd/es/locale/en_US'
import idIDIntl from 'antd/es/locale/id_ID'

const intlMap: any =  {
    zhCNIntl: {
        ...zhCNIntl,
        ...zhCn
    },
    enUSIntl: {
        ...enUSIntl,
    },
    idIDIntl,
}

export default intlMap