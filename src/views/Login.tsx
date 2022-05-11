import styles from '@/styles/login.module.css'
import { Form, Input, Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const Login = (props: any) => {
  const navigate = useNavigate()

  const onFinish = (values: any) => {
    console.log('Success:', values);
    navigate('/')
  }

  return (
    <div className={`${styles.loginWrapper} flex flex-column center`}>
      <h1 className="textCenter">登录</h1>
      <p className='textCenter'>欢迎回来</p>
      <Button className='br-5 flex justify-center items-center' type="primary">
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1901" width="16" height="16"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" p-id="1902"></path></svg>
        通过QQ登录
      </Button>
      <Form
        name='loginForm'
        labelCol={{ span: 3 }}
        labelAlign='right'
        layout='vertical'
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          className='mt-15'
          label='邮箱'
          name='email'
          rules={[{ required: true, message: '请输入您的邮箱', }, { type: 'email', message: '请输入合法的邮箱' }]}
        >
          <Input type="email" placeholder='Email' />
        </Form.Item>
        <Form.Item
          className='mt-15 mb-0'
          style={{ width: '100%', marginBottom: 0 }}
          name='password'
          label='密码'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input type="password" placeholder='Password' />
        </Form.Item>
        <Form.Item className='mb-0'>
          <Button className='f-right' type='link'>忘记密码?</Button>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Button className='w-full' type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Button className='w-full' type="primary" htmlType="submit">
            还没有账号？立即注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login