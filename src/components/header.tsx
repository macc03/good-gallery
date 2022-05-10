import logo from '../logo.svg';
import styles from '../styles/header.module.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <Link to={`/`}>  <img className={styles.logo} src={logo} alt="logo" /></Link>
      </div>
      <div className={styles.searchInput}>
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2059" width="16" height="16"><path d="M966.4 924.8l-230.4-227.2c60.8-67.2 96-156.8 96-256 0-217.6-176-390.4-390.4-390.4-217.6 0-390.4 176-390.4 390.4 0 217.6 176 390.4 390.4 390.4 99.2 0 188.8-35.2 256-96l230.4 227.2c9.6 9.6 28.8 9.6 38.4 0C979.2 950.4 979.2 934.4 966.4 924.8zM102.4 441.6c0-185.6 150.4-339.2 339.2-339.2s339.2 150.4 339.2 339.2c0 89.6-35.2 172.8-92.8 233.6-3.2 0-3.2 3.2-6.4 3.2-3.2 3.2-3.2 3.2-3.2 6.4-60.8 57.6-144 92.8-233.6 92.8C256 780.8 102.4 627.2 102.4 441.6z" p-id="2060" fill="#515151"></path></svg>
        <input type="text" placeholder='search photos' />
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4310" width="16" height="16"><path d="M864 128H160c-52.93 0-96 43.07-96 96v352.49c0 17.67 14.33 32 32 32 9.69 0 18.36-4.31 24.23-11.11l198.09-169.79 279.55 279.55c6.25 6.25 14.44 9.37 22.63 9.37s16.38-3.12 22.63-9.37c12.5-12.5 12.5-32.76 0-45.25L582 600.75l81.38-70.11 228.99 228.99c1.15 1.15 2.36 2.19 3.63 3.12V800c0 17.64-14.36 32-32 32H160c-17.65 0-32-14.36-32-32v-31c0-17.67-14.33-32-32-32s-32 14.33-32 32v31c0 52.93 43.07 96 96 96h704c52.93 0 96-43.07 96-96V224c0-52.93-43.07-96-96-96zM689.63 466.37c-0.35-0.35-0.72-0.7-1.08-1.03-11.64-12.67-31.31-13.9-44.43-2.59l-107.49 92.61-193-192.99c-0.13-0.13-0.26-0.24-0.38-0.36-11.65-12.33-31.05-13.46-44.07-2.3L128 506.43V224c0-17.65 14.35-32 32-32h704c17.64 0 32 14.35 32 32v448.74L689.63 466.37z" p-id="4311" fill="#515151"></path><path d="M768 320m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" p-id="4312" fill="#515151"></path></svg>
      </div>
      <Link to={`/t/about`}>Explore</Link>
      <Link to={`/`}>Advertise</Link>
      <Link to={`/`}>Blog</Link>
      <div className={styles.line}></div>
      <Link to={`/login`}>Login in </Link>
      <Link to={`/`}>Sign up</Link>
      <Link to={`/`}>Submit a photo</Link>
      <Link to={`/`}>三</Link>
    </div>
  )
}

export default Header