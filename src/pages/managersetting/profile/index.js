// import React, { useState } from 'react'
import React from 'react'
import { Helmet } from 'react-helmet'
// import { Tabs, Input, Button, Upload, Form } from 'antd'
// import General1 from 'components/kit/widgets/General/1'
import General10v1 from 'components/kit/widgets/General/10v1'
import General12v1 from 'components/kit/widgets/General/12v1'
// import General14 from 'components/kit/widgets/General/14'
// import General15 from 'components/kit/widgets/General/15'
// import List19 from 'components/kit/widgets/Lists/19'

// const { TabPane } = Tabs

const AppsProfile = () => {
  // const [tabKey, setTabKey] = useState('1')

  // const changeTab = key => {
  //   setTabKey(key)
  // }

  return (
    <div>
      <Helmet title="Profile" />
      <div className="row">
        <div className="col-xl-4 col-lg-12">
          <div className="card">
            <div className="card-body">
              <General10v1 />
            </div>
          </div>
          <div className="card text-white bg-primary">
            <General12v1 />
          </div>
        </div>
        <div className="col-xl-8 col-lg-12">
          <div className="card">
            <div className="card-header card-header-flex flex-column">
              <div className="d-flex flex-wrap border-bottom pt-3 pb-4 mb-3">
                <div className="mr-5">
                  <div className="text-dark font-size-18 font-weight-bold">David Beckham</div>
                  <div className="text-gray-6">@david100</div>
                </div>
                <div className="mr-5 text-center">
                  <div className="text-dark font-size-18 font-weight-bold">100</div>
                  <div className="text-gray-6">Posts</div>
                </div>
                <div className="mr-5 text-center">
                  <div className="text-dark font-size-18 font-weight-bold">17,256</div>
                  <div className="text-gray-6">Followers</div>
                </div>
              </div>
            </div>
            <div className="card-body">
              aaa
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppsProfile
