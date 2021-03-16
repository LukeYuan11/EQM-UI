import React from 'react'
import { Button } from 'reactstrap'

const IsFee = ({ classId }) => {
  const myId = classId
  console.log(myId)
  return (
    <Button block color='success' className='btn-rounded'>
      我要報到
    </Button>
  )
}

export default IsFee
