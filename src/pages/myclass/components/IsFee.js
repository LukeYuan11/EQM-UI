import React, {
  useState,
  useRef,
  // forwardRef
  // , useEffect
} from 'react'
import QRCode from 'react-qr-code'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input } from 'reactstrap'
import store from 'store'

// const CustomComponent = forwardRef(({ innerABCRef }, ref) => {
//   console.log('ref', ref)
//   console.log('innerABCRef', innerABCRef)
//   return (
//     <div ref={ref}>
//       <div>123</div>
//     </div>
//   )
// })
const TheQrcode = ({ myvalue }) => {
  // console.log(myvalue)
  return (
    <div style={{ textAlign: 'center' }}>
      <QRCode value={myvalue} />
    </div>
  )
}

const IsFee = ({ classId }) => {
  // console.log(classId)
  const inputRef = useRef(null)
  // const ref = useRef()
  // const innerRef = useRef()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [qrcode, setQrcode] = useState('')

  const toggle = () => setModalIsOpen(!modalIsOpen)
  const createQRCode = () => {
    const QRJSON = JSON.stringify({
      accessToken: store.get('accessToken'),
      classId,
      fee: inputRef.current.value,
    })
    setQrcode(QRJSON)
  }
  const handleOpen = () => {
    inputRef.current.focus()
  }
  // This will work too
  // useEffect(() => {
  //   if (modalIsOpen) {
  //     setTimeout(() => inputRef.current.focus(), 0);
  //   }
  // }, [modalIsOpen]);
  // console.log('IsFree inputRef', inputRef)
  return (
    <div>
      <div>
        <Button block color='success' className='btn-rounded' onClick={() => setModalIsOpen(true)}>
          我要付費
        </Button>
        <Modal isOpen={modalIsOpen} toggle={toggle} onOpened={handleOpen}>
          <ModalHeader toggle={toggle}>請輸入欲繳費用</ModalHeader>
          <ModalBody>
            Fee:
            <Input innerRef={inputRef} />
            {qrcode !== '' && <TheQrcode myvalue={qrcode} />}
            {/* <CustomComponent ref={ref} innerABCRef={innerRef} /> */}
          </ModalBody>
          <ModalFooter>
            <Button onClick={createQRCode}>產生QRCode</Button>
            <Button
              onClick={() => {
                toggle()
                setQrcode('')
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  )
}

export default IsFee
