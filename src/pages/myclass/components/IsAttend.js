import React, {
  useState,
  useRef,
  // , useEffect
} from 'react'
import QRCode from 'react-qr-code'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import store from 'store'

const TheQrcode = ({ myvalue }) => {
  return (
    <div style={{ 'textAlign': 'center' }}>
      <QRCode value={myvalue} />
    </div>
  )
}

const IsAttend = ({ classId }) => {
  const QRJSON = JSON.stringify({
    accessToken: store.get('accessToken'),
    classId,
  })
  const inputRef = useRef(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const toggle = () => setModalIsOpen(!modalIsOpen)
  const handleOpen = () => {
    console.log('qqqddd')
  }

  // This will work too
  // useEffect(() => {
  //   if (modalIsOpen) {
  //     setTimeout(() => inputRef.current.focus(), 0);
  //   }
  // }, [modalIsOpen]);

  return (
    <div>
      <div>
        <Button block color='success' className='btn-rounded' onClick={() => setModalIsOpen(true)}>
          我要報到
        </Button>
        <Modal isOpen={modalIsOpen} toggle={toggle} onOpened={handleOpen}>
          <ModalHeader toggle={toggle}>我的報到QRCode</ModalHeader>
          <ModalBody>
            <TheQrcode myvalue={QRJSON} innerRef={inputRef} />
          </ModalBody>
          <ModalFooter>
            <Button>Save</Button>
            <Button onClick={toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  )
}

export default IsAttend
