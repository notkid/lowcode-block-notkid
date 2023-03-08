import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button, ConfigProvider, Dropdown, Modal, Space, Tag } from 'antd';
import * as React from 'react';
import { useRef } from 'react';
import { request } from '../../request';

type GithubIssueItem = {
  url: string;
  id: number;
  number: number;
  title: string;
  labels: {
    name: string;
    color: string;
  }[];
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: string;
};

// export type IProTableProps = React.ComponentProps<typeof ProTable> & {
//   columns?: IExtendsColType
//   intl?: string
//   onValuesChange?: FormProps['onValuesChange']
//   dataUrl?: string
// }


const EditTable = (props: any) => {
  const actionRef = useRef<ActionType>();

  const { dataUrl, saveUrl, columns, searchForm = [], showAdd, addPath, viewPath, pushUrl, showEnable, extraButtons = [], headerButtons = [] } = props

  const view = (record: GithubIssueItem) => {
    history.go(`${viewPath}?id=${record.id}`)
  }

  const newColumns = [
    ...searchForm.map(v => {
      return {
        ...v,
        hideInTable: true,
        fieldProps: {
        }
      }
    }),
    ...columns.map(v => {
      return {
        ...v,
        hideInSearch: true,
      }
    }),
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      width: "200px",
      render: (text, record, _, action) => extraButtons.filter(v => v).map((button: any) => {
        const buttonText = button.buttonType === "enable" ? (record[button.enableField] ? '禁用' : '启用') : button.label
        return <a onClick={(e) => {
          e.preventDefault();
          if (button.buttonType === 'url') {
            button.url && history.pushState({}, {}, `${button.url}?id=${record.id}`)
          } else if (button.buttonType === "request") {
            if (button.needConfirm) {
              Modal.confirm({
                content: `确认${button.label}吗?`,
                onOk: () => {
                  button.url && request(button.url, record).then(res => {
                    actionRef.current.reload()
                  })
                },
              })
            }

          } else if (button.buttonType === "editInline") {
            action?.startEditable?.(record.id);
          } else if (button.buttonType === "enable") {
            if (button.needConfirm) {
              Modal.confirm({
                content: `确认${button.label}吗?`,
                onOk: () => {
                  button.url && request(`${button.url}/${record.id}`,'POST', {
                    userId: record.id,
                    [button.enableField]: Number(!record[button.enableField])
                  }).then(res => {
                    actionRef.current.reload()
                  })
                },
              })
            }
          }
          return false
        }} rel="noopener noreferrer">
          {buttonText || ''}
        </a>
      })
      // [
      //   extraButtons.map(button => {

      //   })
      //       < a onClick={() => view(record)} target = "_blank" rel = "noopener noreferrer" key = "view" >
      //         查看
      //       </a >,
      // <a
      //   key="editable"
      //   onClick={() => {
      //     action?.startEditable?.(record.id);
      //   }}
      // >
      //   编辑
      // </a>
      // ],
    },
  ]

  const goToAdd = () => {
    window.history.go(addPath)
  }

  return (
    <ConfigProvider>
      <ProTable<GithubIssueItem>
        columns={newColumns}
        actionRef={actionRef}
        cardBordered
        request={async (params = {}, sort, filter) => {
          console.log(sort, filter);
          if (dataUrl) {
            return request<{
              data: GithubIssueItem[];
            }>(dataUrl, 'GET', params).then(res => {
              return {
                data: res.payload.content,
                // success 请返回 true，
                // 不然 table 会停止解析数据，即使有数据
                // success: msg.code === '0',
                success: true,
                // 不传会使用 data 的长度，如果是分页一定要传
                total: res.payload.totalElement,
              };
            });
          }

        }}
        // dataSource={dataSource}
        editable={{
          type: 'single',
          onSave: (key: any, row: any) => {
            console.log(row)
            if (row.id) {
              return request(saveUrl, row)
            }
            return Promise.reject()
          }
        }}
        columnsState={{
          persistenceKey: 'pro-table-singe-demos',
          persistenceType: 'localStorage',
          onChange(value) {
            console.log('value: ', value);
          },
        }}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        options={{
          setting: {
            listsHeight: 400,
          },
        }}
        form={{
          // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
          syncToUrl: (values, type) => {
            if (type === 'get') {
              return {
                ...values,
                created_at: [values.startTime, values.endTime],
              };
            }
            return values;
          },
        }}
        pagination={{
          pageSize: 5,
          onChange: (page) => console.log(page),
        }}
        dateFormatter="string"
        headerTitle="高级表格"
        options={false}
        toolBarRender={() => showAdd ? [
          <Button key="button" icon={<PlusOutlined />} type="primary" onClick={goToAdd}>
            新建
          </Button>
        ] : []}
      />
    </ConfigProvider>
  );
};

export { EditTable };