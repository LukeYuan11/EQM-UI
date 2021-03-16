import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardSubtitle,
  Button,
  CardHeader,
  CardFooter,
} from 'reactstrap'
import moment from 'moment'
import IsFee from './IsFee'

const Activity = ({ data, isSubmit }) => {
  return (
    <div className='row'>
      <div className='col-sm-12'>
        <Card>
          <div className='row'>
            <div className='col-lg-5' style={{ padding: '30px 30px 30px 45px' }}>
              <CardImg top width='100%' height='100%' src={data.pictureUrl} alt='Card cap' />
            </div>
            <div className='col-lg-7'>
              <CardHeader>{data.activityName}</CardHeader>
              <CardBody>
                <CardSubtitle className='text-muted'>課程簡介</CardSubtitle>
                <CardText>{data.description}</CardText>
                <CardSubtitle className='text-muted'>下次上課資訊</CardSubtitle>
                <CardText>{`${moment(data.classes[0].startDate).format('YYYY-MM-DD HH:mm:ss')} ${data.classes[0].className}`}</CardText>
                <CardText>{`${data.classes[0].classAddress} ${data.classes[0].classRoom}`}</CardText>
                <CardText>{`${data.classes[0].description} ${data.classes[0].teacher}`}</CardText>
                <CardFooter className='text-center'>
                  <div className='row center'>
                    <div className='col-sm-3 mb-2'>
                      {!isSubmit ? (
                        <Button disabled block color='success' className='btn-rounded'>
                          已經報名
                        </Button>
                      ) : (
                        <Button block color='success' className='btn-rounded'>
                          我要報名
                        </Button>
                      )}
                    </div>
                    <div className='col-sm-3 mb-2'>
                      <IsFee classId={data.classes[0].classId} />
                    </div>
                    <div className='col-sm-3 mb-2'>
                      <Button block color='secondary' className='btn-rounded'>
                        我要繳費
                      </Button>
                    </div>
                    <div className='col-sm-3 mb-2'>
                      <Button block color='primary' className='btn-rounded'>
                        課程詳情
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </CardBody>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Activity
