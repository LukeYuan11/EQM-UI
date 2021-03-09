import React from 'react'
import { Table,Select,} from 'antd'
import { Helmet } from 'react-helmet'
import table from './data.json'
// import { times } from 'lodash'

const { Option, OptGroup } = Select

class EcommerceOrders extends React.Component {
  render() {
    const columns = [
      // {
      //   title: 'ID',
      //   dataIndex: 'id',
      //   key: 'id',
      //   render: text => (
      //     <a className="btn btn-sm btn-light" href="#" onClick={e => e.preventDefault()}>
      //       {text}
      //     </a>
      //   ),
      //   sorter: (a, b) => a.id - b.id,
      // },
      {
        title: '學員名稱',
        dataIndex: 'customer',
        key: 'customer',
        // sorter: (a, b) => a.name.length - b.name.length,
        render: text => (
          <a className="btn btn-sm btn-light" href="#" onClick={e => e.preventDefault()}>
            {text}
          </a>
        ),
      },
      {
        title: 'CellPhone',
        dataIndex: 'customer',
        key: 'customer',
        // sorter: (a, b) => a.name.length - b.name.length,
        render: text => (
          <a className="btn btn-sm btn-light" href="#" onClick={e => e.preventDefault()}>
            {text}
          </a>
        ),
      },
      {
        title: '繳費金額',
        dataIndex: 'total',
        key: 'total',
        render: text => <span>{`$${text}`}</span>,
        sorter: (a, b) => a.total - b.total,
      },
      {
        title: '繳費狀態',
        dataIndex: 'status',
        key: 'status',
        render: text => (
          <span
            className={
              text === 'Processing'
                ? 'font-size-12 badge badge-default'
                : 'font-size-12 badge badge-success'
            }
          >
            {text === 'Processing'
                ? '-'
                : '已完款'}
          </span>
        ),
        sorter: (a, b) => a.status.length - b.status.length,
      },
      {
        title: '報到狀態',
        dataIndex: 'status',
        key: 'status',
        render: text => (
          <span
            className={
              text === 'Processing'
                ? 'font-size-12 badge badge-default'
                : 'font-size-12 badge badge-success'
            }
          >
            {text === 'Processing'
                ? '-'
                : Date.now()}
          </span>
        ),
        sorter: (a, b) => a.status.length - b.status.length,
      },
      
      {
        title: 'Action',
        key: 'action',
        render: () => (
          <span>
            <a href="#" onClick={e => e.preventDefault()} className="btn btn-sm btn-default">
              <small>
                <i className="fe fe-trash mr-2" />
              </small>
              繳費
            </a>
            <a href="#" onClick={e => e.preventDefault()} className="btn btn-sm btn-default">
              <small>
                <i className="fe fe-trash mr-2" />
              </small>
              報到
            </a>
            <a href="#" onClick={e => e.preventDefault()} className="btn btn-sm btn-light mr-2">
              <i className="fe fe-edit mr-2" />
              作業與考試
            </a>
          </span>
        ),
      },
    ]

    return (
      <div>
        <Helmet title="Ecommerce: Orders" />
        <div className="cui__utils__heading">
          <h5>選擇活動中之課程</h5>
          <div className="d-inline-block mb-3 mr-3">
            <Select defaultValue="lucy" style={{ width: 160 }}>
              <OptGroup label="Manager">
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
              </OptGroup>
              <OptGroup label="Engineer">
                <Option value="Yiminghe">yiminghe</Option>
              </OptGroup>
            </Select>
          </div>
          <div className="d-inline-block mb-3 mr-3">
            <Select defaultValue="lucy" style={{ width: 160 }}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
          <div className="d-inline-block mb-3 mr-3">
            <a className="btn btn-primary" href="#" onClick={e => e.preventDefault()}>
              搜尋
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-header card-header-flex">
            <div className="d-flex flex-column justify-content-center mr-auto">
              <h5 className="mb-0">ＸＸＸＸ媒體課</h5>
            </div>

          </div>
          <div className="card-body">
            <div className="text-nowrap">
              <Table columns={columns} dataSource={table.data} onChange={this.handleTableChange} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EcommerceOrders
