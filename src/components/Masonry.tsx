import { useState } from "react"
import styles from '../styles/masonry.module.css'

const Masonry = (props: any) => {
  const [imageList, setImageList] = useState([])
  return (
    <div className={styles.masonry}>
      {/* {
        imageList.map((item, index) => (
          <MasonryItem key={index} image={item}/>
        ))
      } */}
      <div className={styles.item}>
        <img src={require('@/assets/1.jpg')} alt="" />
      </div>
      <div className={styles.item}>
        <img src={require('@/assets/2.jpg')} alt="" />
      </div>
      <div className={styles.item}>
        <img src={require('@/assets/3.jpg')} alt="" />
      </div>
      <div className={styles.item}>
        <img src={require('@/assets/4.jpg')} alt="" />
      </div>
      <div className={styles.item}>
        <img src={require('@/assets/5.jpg')} alt="" />
      </div>
      <div className={styles.item}>
        <img src={require('@/assets/6.jpg')} alt="" />
      </div>
      <div className={styles.item}>
        <img src={require('@/assets/7.jpg')} alt="" />
      </div>
      <div className={styles.item}>
        <img src={require('@/assets/8.jpg')} alt="" />
      </div>
      <div className={styles.item}>
        <img src={require('@/assets/9.jpg')} alt="" />
      </div>
      <div className={styles.item}>
        <img src={require('@/assets/10.jpg')} alt="" />
      </div>
      <div className={styles.item}>
        <img src={require('@/assets/11.jpg')} alt="" />
      </div>
    </div>
  )
}

export default Masonry