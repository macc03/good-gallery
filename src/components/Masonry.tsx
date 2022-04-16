import { useState } from "react"
import MasonryItem from "./MasonryItem"
import '../styles/masonry.css'
const Masonry = (props: any) => {
  const tempData = [
    {
      img: '../assets/1.jpg',
      title: 'title',
    },
    {
      img: '../assets/2.jpg',
      title: 'title',
    },
    {
      img: '../assets/3.jpg',
      title: 'title',
    },
    {
      img: '../assets/4.jpg',
      title: 'title',
    },
    {
      img: '../assets/5.jpg',
      title: 'title',
    },
    {
      img: '../assets/6.jpg',
      title: 'title',
    },
    {
      img: '../assets/7.jpg',
      title: 'title',
    },
    {
      img: '../assets/8.jpg',
      title: 'title',
    },
    {
      img: '../assets/9.jpg',
      title: 'title',
    },
    {
      img: '../assets/10.jpg',
      title: 'title',
    },
    {
      img: '../assets/11.jpg',
      title: 'title',
    },
  ]

  const [imageList, setImageList] = useState(tempData)
  return (
    <div className="masonry">
      {
        imageList.map((item, index) => (
          <MasonryItem key={index} image={item}/>
        ))
      }
    </div>
  )
}

export default Masonry