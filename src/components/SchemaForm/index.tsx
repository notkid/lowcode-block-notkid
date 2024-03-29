import * as React from 'react'
import { Component, createRef } from 'react'
import {
  BetaSchemaForm as OriginalBetaSchemaForm,
  ProForm as OriginalProForm,
  ActionType,
  ProColumnType,
  FooterToolbar
} from '@ant-design/pro-components'
import type { ProFormInstance } from '@ant-design/pro-components'
import { Button, DatePicker, message, Select, TablePaginationConfig } from 'antd'
import { Tag, ConfigProvider, Modal } from 'antd'
import zhCNIntl from 'antd/es/locale/zh_CN'
import { request as innerRequest } from '../../request'
import enUSIntl from 'antd/es/locale/en_US'
import { defineGetterProperties, isPlainObj } from '../../shared/index'
import { FormProps } from 'rc-field-form/lib/Form'
import { RemoteSelect } from './components/RemoteSelect'
import {SupplierSelect} from './components/SupplierSelect'
import {SingleSelect} from './components/SingleSelect'
import {BillTypeSelect} from './components/BillTypeSelect'
import { Permission } from '../Permission'
import { PermissionButton } from '../PermissionButton'
import Context from '../SearchTable/context';

let request = window.request || innerRequest

interface IValueEnum {
  text: string
  value: string
  status: string
}

export type FormLayout = 'horizontal' | 'inline' | 'vertical';
export type FormLayoutType = 'ProForm' | 'ModalForm';
export type FormLayoutMode = 'edit' | 'view';

type IExtendsColType = ProColumnType & {
  valueEnum?: IValueEnum[]
  renderTag?: boolean
}

export type IBetaSchemaFormProps = React.ComponentProps<typeof OriginalBetaSchemaForm> & {
  layout: FormLayout
  layoutType: any
  mode: FormLayoutMode,
  columns?: IExtendsColType
  intl?: string
  onValuesChange?: FormProps['onValuesChange']
  detailUrl?: any
  submitUrl?: string
  editUrl?: any
  modalFormTitle?:string
  modalFormButtonText?: string
  width?: string
  editPermissionCode?: string
  includePath?:string
  needCacheName?:string
  needTransform?:string
  addUrl?: string
  editIsLive?: string
}

const intlMap = {
  zhCNIntl,
  enUSIntl
}

class SchemaForm extends Component<IBetaSchemaFormProps, any> {
  // pro-table 未对批量操作进行封装，自己封了
  state = {
    selectedRowKeys: (this.props.rowSelection as any)?.selectedRowKeys ?? [],
    selectedRows: [],
    defaultValue: {},
    open: false,
    collapsed: true
  }

  actionRef = createRef<ActionType>()

  formRef = createRef<ProFormInstance>()

  onSelectRowsChange = (selectedRowKeys, selectedRows) => {
    this.setState({
      selectedRowKeys,
      selectedRows
    })
  }

  getSelectedRowKeys() {
    return this.state.selectedRowKeys
  }

  getSelectedRows() {
    return this.state.selectedRows
  }

  setSelectedRowKeys(selectedRowKeys) {
    this.setState({
      selectedRowKeys: Array.isArray(selectedRowKeys)
        ? selectedRowKeys
        : [selectedRowKeys]
    })
  }

  componentDidMount() {
    // 把操作方法挂载到 class instance 上，可通过 this.$ 调用
    defineGetterProperties(this, [this.actionRef, this.formRef])
  
    this.getInitData()

  }

  getInitData() {
    const { mode, detailUrl, includePath, needCacheName, needTransform } = this.props
    if (mode === 'edit' || mode === 'view') {
      let method = 'post'
      let url = ''
      if (detailUrl?.method) {
        method = detailUrl.method
      }
      if (detailUrl?.url) {
        url = detailUrl?.url
      }
      if (window?.request) {
        window?.request(`${url}${(window?._utils?.params?.id)?('/'+window?._utils?.params?.id):(includePath?sessionStorage.getItem('bookId'):'')}`, {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
        }, {}).then((res: any) => {
          if(needTransform) {
            this.formRef?.current?.setFieldsValue(Object.keys(res.payload).reduce((acc, val) => {
              if(Array.isArray(acc[val])) {
                acc[val] = acc[val].map(v=>{
                  return {
                    ...v,
                    label: v.businessName,
                    value: v.businessCode
                  }
                })
              }
              return acc
            }, res.payload))
          }else {
            this.formRef?.current?.setFieldsValue(res.payload)
          }

        })
      }
    }else if(needCacheName) {
      this.formRef?.current?.setFieldsValue({
        name: sessionStorage.getItem('bookName'),
        consumerName: sessionStorage.getItem('consumerName'),
        consumerId: sessionStorage.getItem('consumerId')
      })
      this.setState({
        defaultValue: {
          name: sessionStorage.getItem('bookName'),
          consumerName: sessionStorage.getItem('consumerName'),
          consumerId: sessionStorage.getItem('consumerId')
        }
      })
    } else {
      this.formRef?.current?.resetFields()
    }
  }

  async deleteItem(item, dataUrl) {
    let method = 'POST'
    if (dataUrl?.method) {
      method = dataUrl.method
    }

    let url = dataUrl
    if (dataUrl?.url) {
      url = dataUrl.url
    }
    const msg = await window.request(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        ...item
      },
    }, {})
  }

  onFinish = (values: any, data: any) => {
    const {actionRef} = data|| {}
    const id = this.formRef.current.getFieldValue('id')
    const { submitUrl, addUrl, needBack } = this.props
    return window.request(id?submitUrl:(addUrl||submitUrl), {
      method: 'POST',
      data: values
    }).then((res: any)=>{
      if(res.code=='0') {
        if(needBack) {
          window?._utils?.goBack()
        }
        this.setState({open: false})
        message.success('保存成功')
        actionRef?.current?.reload()
      }else {
        message.error(res?.msg)
      }

    })
  }

  handleEdit = (item) => {
    const history = window?._utils?.History
    const {editUrl} = this.props
    let url = editUrl
    if (url?.indexOf('{') > 0) {
      url = url.replace(/{(\w+)}/, (match, $1) => {
        return window?._utils?.params?.id || ''
      })
    }
    console.log(history, url)
    if(url && history?.push) {
      history.push(url)
    }

  }

  render() {
    const {
      columns,
      rowSelection,
      intl,
      onValuesChange,
      dataUrl,
      request,
      showOption,
      deleteUrl,
      treeRenderField,
      extraButtons = [],
      layout = 'inline',
      layoutType = "ProForm",
      mode,
      modalFormTitle,
      modalFormButtonText,
      width,
      editPermissionCode,
      editUrl,
      showEditButton=true,
    } = this.props

    const { selectedRowKeys, collapsed, open,       defaultValue, } = this.state

    let finalRequest = request

    if (dataUrl) {
      finalRequest = async (
        // 第一个参数 params 查询表单和 params 参数的结合
        // 第一个参数中一定会有 pageSize 和  current ，这两个参数是 antd 的规范
        params
      ) => {
        // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
        // 如果需要转化参数可以在这里进行修改
        const { current, pageSize, dateRange, ...rest } = params;
        const query: {
          page?: number | undefined;
          size?: number | undefined;
          createdTimeFrom?: string | undefined;
          createdTimeTo?: string | undefined;
        } = {
          page: current,
          size: pageSize,
        };
        let method = 'POST'
        if (dataUrl?.method) {
          method = dataUrl.method
        }

        let url = dataUrl
        if (dataUrl?.url) {
          url = dataUrl.url
        }
        const msg = await window.request(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
          data: {
            ...rest,
            ...query,
          },
        }, {})
        let data = msg.payload?.content
        if (treeRenderField) {
          data = data.map(item => {
            return {
              ...item,
              children: item[treeRenderField] || []
            }
          })
        }

        return {
          data,
          // success 请返回 true，
          // 不然 table 会停止解析数据，即使有数据
          // success: msg.code === '0',
          success: true,
          // 不传会使用 data 的长度，如果是分页一定要传
          total: msg.payload?.totalElements,
        };
      }
    }
    // 劫持渲染标签类型的列
    const newColumns = columns?.map((item: any) => {
      if (item.valueType === 'remote') {
        return {
          ...item,
          // renderFormItem: () => <DatePicker.RangePicker />,
          renderFormItem: (schema, config, form) => {
            return (
              <RemoteSelect url={item.url} />
            )
          }
        }
      }
      if (item.valueType === 'singleRemote') {
        return {
          ...item,
          // renderFormItem: () => <DatePicker.RangePicker />,
          renderFormItem: (schema, config, form) => {
            return (
              <SingleSelect url={item.url} />
            )
          }
        }
      }
      if (item.valueType === 'supplier') {
        return {
          ...item,
          // renderFormItem: () => <DatePicker.RangePicker />,
          renderFormItem: (schema, config, form) => {
            return (
              <SupplierSelect url={item.url} />
            )
          }
        }
      }
      if(item.valueType === 'billType') {
        return {
          ...item,
          // renderFormItem: () => <DatePicker.RangePicker />,
          renderFormItem: (schema, config, form) => {
            return (
              <BillTypeSelect {...schema} {...config} {...form} />
            )
          }
        }
      }
      return item
    })

    if (showOption) {
      console.log(showOption)
      const options = {
        title: '操作',
        dataIndex: 'option',
        valueType: 'option',
        key: 'option',
        render: (text, record) => [
          // alert(extraButtons);
          ...extraButtons.filter(v => v).map((button: any) => {
            console.log(extraButtons)
            return <a onClick={(e) => {
              e.preventDefault();
              if (button.buttonType === 'url') {
                button.url && history.pushState({}, {}, `${button.url}?id=${record.id}`)
              } else if (button.buttonType === "request") {
                button.url && request(button.url, record)
              }
              return false
            }} rel="noopener noreferrer">
              {button.label || ''}
            </a>
          }),
          // <a
          //   key="detailApp"
          //   onClick={() => {
          //     getClientDetail({ clientId: record?.clientId });
          //     handleSecretModalVisible(true);
          //   }}
          // >
          //   查看秘钥
          // </a>,
          // <a
          //   key="editApp"
          //   onClick={() => {
          //     handleUpdateModalVisible(true);
          //     setCurrentApp(record);
          //   }}
          // >
          //   编辑
          // </a>,
          deleteUrl && <a
            key="deleteApp"
            onClick={() => {
              Modal.confirm({
                title: '删除平台',
                content: '确定删除吗？',
                okText: '确认',
                cancelText: '取消',
                onOk: () => this.deleteItem({ id: record.id }, deleteUrl),
              });
            }}
          >
            删除
          </a>,
        ],
      }
      columns.push(options)
    }

    const pagination = this.props.pagination as TablePaginationConfig

    // current 让用户自己配置的话，用户需要自己监听 onChange 事件去修改，对低代码平台不友好
    if (typeof pagination?.current === 'number') {
      delete pagination.current
    }

    if (typeof pagination?.total === 'number') {
      delete pagination.total
    }

    // const expandable = {
    //   childrenColumnName: 'distributeList',
    //   rowExpandable(record) {
    //     return true;
    //   }
    // }
    // if (treeRenderField) {
    //   expandable = {
    //     childrenColumnName: treeRenderField,
    //     rowExpandable(record) {
    //       return !!record?.[treeRenderField]?.length;
    //     },
    //   }
    // }

    return (
      <ConfigProvider locale={intlMap[intl || 'zhCNIntl']}>
         <Context.Consumer>
            {
                value => {
                    return (
                      <div
                      style={{
                        // margin: 24,
                        padding: layoutType==='ModalForm'? '0px':'20px',
                        width: width|| '100%',
                        backgroundColor: '#fff',
                        ...(layoutType==='ModalForm'?{display: 'flex', alignItems: 'center',justifyContent: 'center'}: {})
                      }}
                    >  <OriginalBetaSchemaForm
                        trigger={
                          <Button type="primary" onClick={() => {
                            this.setState({
                              open: true
                            })
                          }}>
                            {modalFormButtonText}
                          </Button>
                        }
                        title={modalFormTitle}
                        layout={layout}
                        disabled={mode === 'view'}
                        layoutType={layoutType}
                        // {...this.props}
                        columns={newColumns}
                        actionRef={this.actionRef}
                        defaultValue={defaultValue}
                        initialValues={defaultValue}
                        formRef={this.formRef}
                        // form={{ onValuesChange }}
                        request={finalRequest}
                        onFinish={(values) => this.onFinish(values, value)}
                        destroyOnClose
                        open={open}
                        onOpenChange={value=> {
                          this.setState({open: value});
                          this.getInitData();
                        }}
                        submitter={{
                          render: (_: any, dom: any) => {
            
                            if (mode === 'view') {
                              return null
                            } else {
                              return dom
                            }
                          },
                        }}
                      />
                      {(mode==='view' && showEditButton)&& (
                        <PermissionButton buttonText='编辑' url={editUrl} buttonType="url" code={editPermissionCode} >
                        </PermissionButton>
                      )}
            
                    </div>
                    )
                }
            }
        </Context.Consumer>
       

      </ConfigProvider>
    )
  }
}

export {
  SchemaForm
}
