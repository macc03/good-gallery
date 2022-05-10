import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import styles from '../styles/scroll-menu.module.css'

const ScrollMenu = (props: any) => {
  const menus = ['Featured \nEntrepreneur', 'Current Events', 'Wallpapers', '3D Renders', 'Textures & Patterns', 'Experimental', 'Architecture', 'Business & Work', 'Current Events', 'Textures & Patterns', 'Experimental', 'Architecture']
  const [currentIndex, setIndex] = useState(0)
  const [distance, setDistance] = useState(0)
  const scrollMenu: any = useRef(null)
  const menu: any = useRef(null)

  const scroll = (size: number) => {
    const scroll_menu_width = parseInt(getComputedStyle(scrollMenu.current).width)
    const menus_width = parseInt(getComputedStyle(menu.current).width)

    if ((distance + size) > 0) {
      setDistance(0)
    } else if (distance + size <= -(scroll_menu_width - menus_width)) {
      setDistance(-(scroll_menu_width - menus_width + 45))
    } else {
      setDistance(distance + size)
    }
  }
  return (
    <div className={styles.scrollMenu}>
      <div className={styles.left}>
        <Link to={`/`} className={currentIndex === 0 ? styles.active : ''} onClick={e => setIndex(0)}>Editorial</Link>
      </div>
      <div className={styles.line}></div>
      <div className={styles.right}>
        <div className={styles.menus} ref={menu}>
          <div className={styles.scrollMenus} ref={scrollMenu} style={{ transform: `translateX(${distance}px)`, transition: '.5s' }}>
            {
              menus.map((item, index) => (
                <Link className={`${styles.menuLink} ${currentIndex === index + 1 ? styles.active : ''}`} onClick={e => setIndex(index + 1)} to={`/t/${item.replace(' ', '-')}`} key={index}> {item} </Link>
              ))
            }
          </div>
        </div>
        <div className={styles.leftBtn} onClick={e => scroll(150)}> {`<`} </div>
        <div className={styles.rightBtn} onClick={e => scroll(-150)}>{`>`} </div>
      </div>
    </div>
  )
}


export default ScrollMenu