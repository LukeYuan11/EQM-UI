import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
// import { InboxOutlined } from '@ant-design/icons'
import { 
  Input, 
  // Slider, 
  // Cascader, 
  // Upload, 
  // message, 
  // Checkbox, 
  Select, 
  Button, 
  Form 
} from 'antd'

// const { Dragger } = Upload
const { Option } = Select

const AdvancedFormExamples = () => {
  const [confirmDirty, setConfirmDirty] = useState(false)

  const handleConfirmBlur = e => {
    const { value } = e.target
    setConfirmDirty(confirmDirty || !!value)
  }

  // const opts = {
  //   name: 'file',
  //   multiple: true,
  //   action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  //   onChange(info) {
  //     const { status } = info.file
  //     if (status !== 'uploading') {
  //       console.log(info.file, info.fileList)
  //     }
  //     if (status === 'done') {
  //       message.success(`${info.file.name} file uploaded successfully.`)
  //     } else if (status === 'error') {
  //       message.error(`${info.file.name} file upload failed.`)
  //     }
  //   },
  // }

  // const formItemLayout = {
  //   labelCol: {
  //     xs: { span: 24 },
  //     sm: { span: 4 },
  //   },
  //   wrapperCol: {
  //     xs: { span: 24 },
  //     sm: { span: 12 },
  //   },
  // }

  // const marks = {
  //   0: '0',
  //   10: '10',
  //   20: '20',
  //   30: '30',
  //   40: '40',
  //   50: '50',
  //   60: '60',
  //   70: '70',
  //   80: '80',
  //   90: '90',
  //   100: '100',
  // }

  // const residences = [
  //   {
  //     value: 'zhejiang',
  //     label: 'Zhejiang',
  //     children: [
  //       {
  //         value: 'hangzhou',
  //         label: 'Hangzhou',
  //         children: [
  //           {
  //             value: 'xihu',
  //             label: 'West Lake',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     value: 'jiangsu',
  //     label: 'Jiangsu',
  //     children: [
  //       {
  //         value: 'nanjing',
  //         label: 'Nanjing',
  //         children: [
  //           {
  //             value: 'zhonghuamen',
  //             label: 'Zhong Hua Men',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ]

  return (
    <div>
      <Helmet title="Advanced / Form Examples" />
      <div className="kit__utils__heading">
        <h5>Form Examples</h5>
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
                  <Form.Item name="fullname" label="Username">
                    <Input />
                  </Form.Item>
                  <Form.Item name="gender" label="Gender">
                    <Select placeholder="Select a option and change input text above">
                      <Option value="male">male</Option>
                      <Option value="female">female</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item name="email" label="E-mail">
                    <Input />
                  </Form.Item>
                  <Form.Item name="password" label="Password" hasFeedback>
                    <Input.Password />
                  </Form.Item>
                  <Form.Item name="confirm" label="Confirm Password" hasFeedback>
                    <Input.Password onBlur={handleConfirmBlur} />
                  </Form.Item>
                  <div className="border-top pt-4">
                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        Submit
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
