import styles from '@/styles/login.module.css'
import ChForm from '@components/common/chForm/ch-form'
import ChInput from '@components/common/chInput/ch-input'
import ChButton from '@components/common/chButton/ch-button'
import ChFormItem from '@components/common/chForm/chFormItem/ch-form-item'

const Login = () => {
  return (
    <div className={`${styles.loginWrapper} flex flex-column center`}>
      <h1 className="textCenter">Login</h1>
      <p className='textCenter'>Welcome back</p>
      <ChButton type='info'>
      <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1255" width="16" height="16"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" p-id="1256" fill="#2c2c2c"></path></svg>
        Login with QQ
      </ChButton>
      <ChForm rules={[{ required: true, message: 'Please input your email!' }]}>
        <ChFormItem label='Email' prop='email'>
          <ChInput type='email' placeholder='Enter Email' />
        </ChFormItem>
        <ChFormItem label='Password' prop='password'>
          <ChInput type='email' placeholder='Enter Email' />
        </ChFormItem>
          <a className='text-12 blue f-right mb-8'>忘记密码？</a>
        <ChButton type='primary'>Login</ChButton>
      </ChForm>
    </div>
  )
}

export default Login