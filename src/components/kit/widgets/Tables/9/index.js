import React from 'react'
import { Table } from 'antd'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import data from './data.json'
import style from './style.module.scss'


class BootstrapModalsExample extends React.Component {
  constructor(props) {
    super(props)
    // console.log(props);
    this.state = {
      modalCentered: false,
      word:props.children,
    }

    this.toggleCentered = this.toggleCentered.bind(this)
  }

  toggleCentered() {
    this.setState(prevState => ({
      modalCentered: !prevState.modalCentered,
    }))
  }

  render() {
    const {modalCentered,word } = this.state
    return (
      <div>
        <div className="">
          <Button className="btn btn-light" onClick={this.toggleCentered}>
            {word}
          </Button>
          <Modal
            isOpen={modalCentered}
            toggle={this.toggleCentered}
            className="modal-dialog-centered"
          >
            <ModalHeader toggle={this.toggleCentered}>Vertically centered modal</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="light" onClick={this.toggleCentered}>
                Cancel
              </Button>{' '}
              <Button color="primary" onClick={this.toggleCentered}>
                Do Something
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    )
  }
}

const columns = [
  {
    dataIndex: 'avatar',
    key: 'avatar',
    className: 'bg-transparent text-gray-6 width-50',
    render: text => {
      return (
        <div>
          <div className="kit__utils__avatar">
            <img src={text} alt="User avatar" />
          </div>
        </div>
      )
    },
  },
  {
    title: 'TEACHER',
    dataIndex: 'Teacher',
    key: 'Teacher',
    className: 'bg-transparent text-gray-6',
    render: text => {
      return (
        <div>
          <div>{text.name}</div>
          <div className="text-gray-4">{text.position}</div>
        </div>
      )
    },
  },
  {
    title: 'DESCRIPTION',
    dataIndex: 'description',
    key: 'description',
    className: 'bg-transparent text-gray-6',
    render: text => {
      return (
        <div className="text-wrap width-300">
          <div className="text-dark mb-3">{text.title}</div>
          <div>{text.content}</div>
        </div>
      )
    },
  },
  {
    title: 'LOCATION',
    dataIndex: 'location',
    key: 'location',
    className: 'bg-transparent text-gray-6',
    render: text => {
      return <a className="text-blue">{text}</a>
    },
  },
  {
    dataIndex: 'action',
    key: 'action',
    className: 'bg-transparent text-right',



    render: () => {
      return (
        <div className="text-nowrap">
          <BootstrapModalsExample>作業/考試</BootstrapModalsExample>
          {/* <button type="button" className="btn btn-light">
            <span className="text-blue"></span>
          </button> */}
        </div>
      )
    },
  },
]

const Table9 = () => {
  return (
    <div>
      <div className="text-nowrap text-dark font-size-50 font-weight-bold">
        <h1>舊約概論(二)</h1>
        $3,200 <sup className="text-uppercase text-gray-6 font-size-30">已付費</sup>
      </div>
      <div className={style.table}>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    </div>
  )
}

export default Table9
