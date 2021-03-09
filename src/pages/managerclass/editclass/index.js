import React, 
{ 
  // useState
} from 'react'

import { Helmet } from 'react-helmet'
// import { InboxOutlined } from '@ant-design/icons'
import { UploadOutlined } from '@ant-design/icons'
import { 
  Input, 
  // Slider, 
  // Cascader, 
  Upload, 
  // message, 
  // Checkbox, 
  Select, 
  Button, 
  Form,
  DatePicker, 
  TimePicker,
  Switch,
} from 'antd'

// const { Dragger } = Upload
// const { Option } = Select
const { Option, OptGroup  } = Select
const { TextArea } = Input

// const props = {
//   name: 'file',
//   action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
//   headers: {
//     authorization: 'authorization-text',
//   },
//   onChange(info) {
//     if (info.file.status !== 'uploading') {
//       console.log(info.file, info.fileList)
//     }
//     if (info.file.status === 'done') {
//       message.success(`${info.file.name} file uploaded successfully`)
//     } else if (info.file.status === 'error') {
//       message.error(`${info.file.name} file upload failed.`)
//     }
//   },
// }
const normFile = (e) => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const AdvancedFormExamples = () => {
  return (

    <div>
      <Helmet title="Advanced / Form Examples" />
      <div className="kit__utils__heading">
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
        <div className="d-inline-block mb-3 mr-3">
          <a className="btn btn-primary" href="#" onClick={e => e.preventDefault()}>
            新增
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="mb-4">
            <strong>Validation & Background</strong>
          </h5>
          <div className="bg-light rounded-lg p-5">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <Form layout="vertical">
                  <Form.Item name="fullName" label="課程名稱">
                    <Input />
                  </Form.Item>
                  <Form.Item name="classDec" label="課程簡介">
                    <TextArea rows={4} />
                  </Form.Item>
                  
                  <Form.Item name="teacherName" label="老師名稱">
                    <Input />
                  </Form.Item>
                  <Form.Item name="teacherTitle" label="老師頭銜">
                    <Input />
                  </Form.Item>           

                  {/* <Form.Item name="" label="老師頭像(建議正方形圖片)">
                    <Upload {...props}>
                      <Button>
                        <UploadOutlined /> Click to Upload
                      </Button>
                    </Upload>
                  </Form.Item>    */}
                  <Form.Item
                    name="uploadTeacherPic"
                    label="老師頭像"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    extra="建議正方形圖片"
                  >
                    <Upload name="logo" action="/upload.do" listType="picture">
                      <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                  </Form.Item>    
                  
                  <Form.Item name="" label="上課時間">
                    <DatePicker />
                    <t />
                    <TimePicker />
                  </Form.Item>
                  
                  <Form.Item name="" label="下課時間">
                    <DatePicker />
                    <t />
                    <TimePicker />
                  </Form.Item>
                  
                  <Form.Item name="gender" label="上架">
                    <Switch
                      className="component-col"
                      checkedChildren="Off"
                      unCheckedChildren="On"
                      defaultChecked
                    />
                  </Form.Item>
                  <div className="border-top pt-4">
                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        儲存
                      </Button>
                    </Form.Item>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvancedFormExamples
