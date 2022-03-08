import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import '../styles/scroll-menu.css'


const ScrollMenu = () => {
  const [distance, setDistance] = useState(0)
  const scrollMenu: any = useRef(null)
  const menus: any = useRef(null)
  
  const scroll = (size: number) => {
    const scroll_menu_width = parseInt(getComputedStyle(scrollMenu.current).width)
    const menus_width = parseInt(getComputedStyle(menus.current).width)

    if ((distance + size) > 0) {
      setDistance(0)
    } else if (distance + size <= -(scroll_menu_width - menus_width)) {
      setDistance(-(scroll_menu_width - menus_width + 45))
    } else {
      setDistance(distance + size)
    }
  }
  return (
    <div className="scroll-menu">
      <div className="left">
        <Link to={``}>Editorial</Link>
      </div>
      <div className='line'></div>
      <div className="right">
        <div className="menus" ref={menus}>
          <div className="scroll-menus" ref={scrollMenu} style={{ transform: `translateX(${distance}px)`, transition: '.5s' }}>
            <Link to={``}><small>Featured</small><br />Entrepreneur</Link>
            <Link to={``}>Current Events</Link>
            <Link to={``}>Wallpapers</Link>
            <Link to={``}>3D Renders</Link>
            <Link to={``}>Textures & Patterns</Link>
            <Link to={``}>Experimental</Link>
            <Link to={``}>Architecture</Link>
            <Link to={``}>Business & Work</Link>
            <Link to={``}>Current Events</Link>
            <Link to={``}>Wallpapers</Link>
            <Link to={``}>3D Renders</Link>
            <Link to={``}>Textures & Patterns</Link>
            <Link to={``}>Experimental</Link>
            <Link to={``}>Architecture</Link>
            <Link to={``}>Business & Work</Link>
          </div>
        </div>
        <div className="left-btn" onClick={e => scroll(150)}> {`<`} </div>
        <div className="right-btn" onClick={e => scroll(-150)}>{`>`} </div>
      </div>
    </div>
  )
}


export default ScrollMenu