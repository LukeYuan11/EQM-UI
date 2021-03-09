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

function addDays (date, days) {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

const ClassFlow = () => {
  const dispatch = useDispatch()
  const store = useSelector(state => state)
  console.log('class store', store)

  useEffect(() => {
    dispatch({
      type: 'GET_CLASS_DATA',
      payload: {
        StartDate: addDays(Date.now(), -30).toLocaleDateString(),
        EndDate: addDays(Date.now(), 30).toLocaleDateString(),
      },
    })
  }, [dispatch])

  return (
    <div>
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
