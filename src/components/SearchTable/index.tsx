import * as React from 'react'
import { Component, createRef } from 'react'
import {
  ProTable as OriginalProTable,
  ActionType,
  ProColumnType
} from '@ant-design/pro-components'
import type { ProFormInstance } from '@ant-design/pro-components'
import type { TablePaginationConfig } from 'antd'
import { Tag, ConfigProvider, Modal } from 'antd'
import zhCNIntl from 'antd/es/locale/zh_CN'
import enUSIntl from 'antd/es/locale/en_US'
import { defineGetterProperties, isPlainObj } from '../../shared/index'
import { FormProps } from 'rc-field-form/lib/Form'

interface IValueEnum {
  text: string
  value: string
  status: string
}

type IExtendsColType = ProColumnType & {
  valueEnum?: IValueEnum[]
  renderTag?: boolean
}

export type IProTableProps = React.ComponentProps<typeof OriginalProTable> & {
  columns?: IExtendsColType
  intl?: string
  onValuesChange?: FormProps['onValuesChange']
  dataUrl?: string
}

const intlMap = {
  zhCNIntl,
  enUSIntl
}

class SearchTable extends Component<IProTableProps, any> {
  // pro-table 未对批量操作进行封装，自己封了
  state = {
    selectedRowKeys: (this.props.rowSelection as any)?.selectedRowKeys ?? [],
    selectedRows: [],
    collapsed:
      this.props.search === false
        ? undefined
        : this.props.search?.defaultCollapsed // 之前设置的this.props.search.collapsed会失效，但问题不大
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
    } = this.props

    const { selectedRowKeys, collapsed } = this.state

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
    columns?.map((item) => {
      if (isPlainObj(item.valueEnum) && (item as any).renderTag === true) {
        item.render = (_, record) => {
          const colValue = record[item.dataIndex as string]

          const target = item.valueEnum[colValue]

          return target?.text ? (
            <Tag color={target?.status?.toLowerCase()}>{target?.text}</Tag>
          ) : (
            '-'
          )
        }
      }
    })

    if (showOption) {
      const options = {
        title: '操作',
        dataIndex: 'option',
        valueType: 'option',
        render: (text, record) => [
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
        <OriginalProTable
          {...this.props}
          search={
            typeof this.props.search === 'boolean'
              ? this.props.search
              : {
                ...this.props.search,
                collapsed,
                onCollapse: () => {
                  if (this.props.search === false) return
                  this.setState({
                    collapsed: !collapsed
                  })
                  if (this.props.search.onCollapse) {
                    // 如果设置了函数则继续执行
                    this.props.search.onCollapse(!collapsed)
                  }
                }
              }
          }
          rowSelection={
            rowSelection
              ? {
                ...rowSelection,
                defaultSelectedRowKeys: selectedRowKeys,
                selectedRowKeys,
                onChange: (...args) => {
                  rowSelection?.onChange?.(...args)
                  this.onSelectRowsChange(...args)
                }
              }
              : false
          }
          // expandable={expandable}
          columns={columns}
          actionRef={this.actionRef}
          formRef={this.formRef}
          form={{ onValuesChange }}
          request={finalRequest}
        />
      </ConfigProvider>
    )
  }
}

export {
  SearchTable
}