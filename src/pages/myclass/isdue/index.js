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

class BootstrapCardExample extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <Card>
              <div className="row">
                <div className="col-lg-5" style={{padding: "30px 30px 30px 45px"}}>
                  <CardImg
                    top
                    width="100%"
                    height="100%"
                    src="https://images.unsplash.com/photo-1605108722563-fe1f69c5366f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                    alt="Card cap"
                  />
                </div>
                <div className="col-lg-7">
                  <CardHeader>
                    摩西五經
                  </CardHeader>
                  <CardBody>
                    <CardSubtitle className="text-muted">課程簡介</CardSubtitle>
                    <CardText>
                      這是摩西五經課程的簡介。這是摩西五經課程的簡介。這是摩西五經課程的簡介。這是摩西五經課程的簡介。
                      這是摩西五經課程的簡介。這是摩西五經課程的簡介。這是摩西五經課程的簡介。這是摩西五經課程的簡介。
                      這是摩西五經課程的簡介。這是摩西五經課程的簡介。這是摩西五經課程的簡介。這是摩西五經課程的簡介。
                    </CardText>
                    <CardSubtitle className="text-muted">下次上課資訊</CardSubtitle>
                    <CardText>
                      2021-01-04 08:30 媒體課入門 
                    </CardText>
                    <CardText>
                      台北市大安區仁愛路109號4段3樓 新生命小組教會 第三教室
                    </CardText>
                    <CardFooter className="text-center">
                      <div className="row center">
                        <div className="col-sm-3 mb-2">
                          <Button disabled block color="success" className="btn-rounded">已經報名</Button>
                        </div>
                        <div className="col-sm-3 mb-2">
                          <Button disabled block color="success" className="btn-rounded">已經過期</Button>
                        </div>
                        <div className="col-sm-3 mb-2">
                          <Button block color="secondary" className="btn-rounded">我要繳費</Button>
                        </div>
                        <div className="col-sm-3 mb-2">
                          <Button block color="primary" className="btn-rounded">課程詳情</Button>
                        </div>
                      </div>
                    </CardFooter>
                  </CardBody>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Card>
              <div className="row">
                <div className="col-lg-5" style={{padding: "30px 30px 30px 45px"}}>
                  <CardImg
                    top
                    width="100%"
                    height="100%"
                    src="https://images.unsplash.com/photo-1605975063003-e70e62b768cc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80"
                    alt="Card cap"
                  />
                </div>
                <div className="col-lg-7">
                  <CardHeader>
                    舊約概論(二)
                  </CardHeader>
                  <CardBody>
                    <CardSubtitle className="text-muted">課程簡介</CardSubtitle>
                    <CardText>
                      這是舊約概論課的簡介。這是舊約概論課的簡介。這是舊約概論課的簡介。這是舊約概論課的簡介。
                      這是舊約概論課的簡介。這是舊約概論課的簡介。這是舊約概論課的簡介。這是舊約概論課的簡介。
                      這是舊約概論課的簡介。這是舊約概論課的簡介。這是舊約概論課的簡介。這是舊約概論課的簡介。
                    </CardText>
                    <CardSubtitle className="text-muted">下次上課資訊</CardSubtitle>
                    <CardText>
                      2021-01-15 08:30 人論
                    </CardText>
                    <CardText>
                      台北市大安區仁愛路109號4段3樓 新生命小組教會 第四教室
                    </CardText>
                    <CardFooter className="text-center">
                      <div className="row center">
                        <div className="col-sm-3 mb-2">
                          <Button disabled block color="success" className="btn-rounded">已經報名</Button>
                        </div>
                        <div className="col-sm-3 mb-2">
                          <Button disabled block color="success" className="btn-rounded">已經過期</Button>
                        </div>
                        <div className="col-sm-3 mb-2">
                          <Button disabled block color="secondary" className="btn-rounded">已經繳費</Button>
                        </div>
                        <div className="col-sm-3 mb-2">
                          <Button block color="primary" className="btn-rounded">課程詳情</Button>
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
}

export default BootstrapCardExample

