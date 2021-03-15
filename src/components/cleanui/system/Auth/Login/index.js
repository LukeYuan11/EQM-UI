import React from 'react'
import { connect } from 'react-redux'
import { Input, Button, Form } from 'antd'
import { Link } from 'react-router-dom'
import style from '../style.module.scss'

const Login = ({ dispatch, user, logo }) => {
  const onFinish = values => {
    dispatch({
      type: 'user/LOGIN',
      payload: values,
    })
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
      <div className='text-center mb-5'>
        <h1 className='mb-5 px-3'>
          <strong>{logo}</strong>
        </h1>
        <p>初版、供教會弟兄姐妹裝備課程報名報到繳費紀錄使用.</p>
      </div>
      <div className={`card ${style.container}`}>
        <div className='text-dark font-size-24 mb-3'>
          <strong>Sign in to your account</strong>
        </div>

        <Form
          layout='vertical'
          hideRequiredMark
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className='mb-4'
          initialValues={{ email: '', password: '' }}
        >
          <Form.Item
            name='email'
            rules={[{ required: true, message: 'Please input your e-mail address' }]}
          >
            <Input size='large' placeholder='Email' />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your password' }]}
          >
            <Input size='large' type='password' placeholder='Password' />
          </Form.Item>
          <Button
            type='primary'
            size='large'
            className='text-center w-100'
            htmlType='submit'
            loading={user.loading}
          >
            <strong>Sign in</strong>
          </Button>
        </Form>
      </div>
      <div className='text-center pt-2 mb-auto'>
        <span className='mr-2'>Don&#39;t have an account?</span>
        <Link to='/auth/register' className='kit__utils__link font-size-16'>
          Sign up
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = ({ user, settings, dispatch }) => ({
  dispatch,
  user,
  authProvider: settings.authProvider,
  logo: settings.logo,
})

export default connect(mapStateToProps)(Login)
