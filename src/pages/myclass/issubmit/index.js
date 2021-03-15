import React, { useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'

const ClassFlow = () => {
  const dispatch = useDispatch()
  const { myclass } = useSelector(state => state.myClass)
  console.log('myclass list', myclass)

  useEffect(() => {
    dispatch({
      type: 'GET_CLASS_DATA',
      payload: {
        StartDate: moment()
          .add(-30, 'Days')
          .format('YYYY/MM/DD'),
        EndDate: moment()
          .add(30, 'Days')
          .format('YYYY/MM/DD'),
      },
    })
    console.log('useEffect list')
  }, [dispatch])

  if (!myclass.length) {
    return (
      <div className='row'>
        <div className='col-sm-12'>
          <Card>
            <div className='row'>
              <div className='col-lg-5' style={{ padding: '30px 30px 30px 45px' }}>  </div>
              <div className='col-lg-7'>
                <CardHeader> </CardHeader>
                <CardBody>
                  <CardSubtitle className='text-muted'> </CardSubtitle>
                  <CardText> </CardText>
                  <CardSubtitle className='text-muted'> </CardSubtitle>
                  <CardText> </CardText>
                  <CardText> </CardText>
                  <CardFooter className='text-center'> </CardFooter>
                </CardBody>
              </div>
            </div>
          </Card>
        </div>
      </div>
    )
  }
  return (
    <div>
      {myclass.map(data => (
        <div className='row' key={data.activityId}>
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
                    <CardText>{`${moment(data.classes[0].startDate).format('YYYY-MM-DD HH:mm:ss',)} ${data.classes[0].className}`}</CardText>
                    <CardText>{`${data.classes[0].classAddress} ${data.classes[0].classRoom}`}</CardText>
                    <CardText>{`${data.classes[0].description} ${data.classes[0].teacher}`}</CardText>
                    <CardFooter className='text-center'>
                      <div className='row center'>
                        <div className='col-sm-3 mb-2'>
                          <Button disabled block color='success' className='btn-rounded'>
                            已經報名
                          </Button>
                        </div>
                        <div className='col-sm-3 mb-2'>
                          <Button block color='success' className='btn-rounded'>
                            我要報到
                          </Button>
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
      ))}
      <div className='row'>
        <div className='col-sm-12'>
          <Card>
            <div className='row'>
              <div className='col-lg-5' style={{ padding: '30px 30px 30px 45px' }}>
                <CardImg
                  top
                  width='100%'
                  height='100%'
                  src='https://images.unsplash.com/photo-1528701202755-cf9158dc3da6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1039&q=80'
                  alt='Card cap'
                />
              </div>
              <div className='col-lg-7'>
                <CardHeader>2021新世代媒體課</CardHeader>
                <CardBody>
                  <CardSubtitle className='text-muted'>課程簡介</CardSubtitle>
                  <CardText>
                    這是新世代媒體課的簡介。這是新世代媒體課的簡介。這是新世代媒體課的簡介。這是新世代媒體課的簡介。
                    這是新世代媒體課的簡介。這是新世代媒體課的簡介。這是新世代媒體課的簡介。這是新世代媒體課的簡介。
                    這是新世代媒體課的簡介。這是新世代媒體課的簡介。這是新世代媒體課的簡介。這是新世代媒體課的簡介。
                  </CardText>
                  <CardSubtitle className='text-muted'>下次上課資訊</CardSubtitle>
                  <CardText>2021-01-08 08:30 媒體課入門</CardText>
                  <CardText>台北市大安區仁愛路109號4段3樓 新生命小組教會 第三教室</CardText>
                  <CardFooter className='text-center'>
                    <div className='row center'>
                      <div className='col-sm-3 mb-2'>
                        <Button disabled block color='success' className='btn-rounded'>
                          已經報名
                        </Button>
                      </div>
                      <div className='col-sm-3 mb-2'>
                        <Button block color='success' className='btn-rounded'>
                          我要報到
                        </Button>
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
      <div className='row'>
        <div className='col-sm-12'>
          <Card>
            <div className='row'>
              <div className='col-lg-5' style={{ padding: '30px 30px 30px 45px' }}>
                <CardImg
                  top
                  width='100%'
                  height='100%'
                  src='https://images.unsplash.com/photo-1470686164816-830d3688f62c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80'
                  alt='Card cap'
                />
              </div>
              <div className='col-lg-7'>
                <CardHeader>
                  舊約概論(二)<span className='badge badge-warning text-right'>3 學分</span>
                </CardHeader>
                <CardBody>
                  <CardSubtitle className='text-muted'>課程簡介</CardSubtitle>
                  <CardText>
                    這是舊約概論課的簡介。這是舊約概論課的簡介。這是舊約概論課的簡介。這是舊約概論課的簡介。
                    這是舊約概論課的簡介。這是舊約概論課的簡介。這是舊約概論課的簡介。這是舊約概論課的簡介。
                    這是舊約概論課的簡介。這是舊約概論課的簡介。這是舊約概論課的簡介。這是舊約概論課的簡介。
                  </CardText>
                  <CardSubtitle className='text-muted'>下次上課資訊</CardSubtitle>
                  <CardText>2021-01-15 08:30 人論</CardText>
                  <CardText>台北市大安區仁愛路109號4段3樓 新生命小組教會 第四教室</CardText>
                  <CardFooter className='text-center'>
                    <div className='row center'>
                      <div className='col-sm-3 mb-2'>
                        <Button disabled block color='success' className='btn-rounded'>
                          已經報名
                        </Button>
                      </div>
                      <div className='col-sm-3 mb-2'>
                        <Button block color='success' className='btn-rounded'>
                          我要報到
                        </Button>
                      </div>
                      <div className='col-sm-3 mb-2'>
                        <Button disabled block color='secondary' className='btn-rounded'>
                          已經繳費
                        </Button>
                      </div>
                      <div className='col-sm-3 mb-2'>
                        <Link to='/managerclass/activitydetail/2'>
                          <Button block color='primary' className='btn-rounded'>
                            課程詳情
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardFooter>
                </CardBody>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ClassFlow
