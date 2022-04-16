interface MasonryItemProps {
  image: {
    img: string,
    title: string
  }
}

const MasonryItem = ({ image }: MasonryItemProps) => {
  console.log(image.img)
  return (
    <div className="masonry-item">
      {/* <img src={require('@/assets/' + image.img).default} alt={image.title} /> */}
      <p>{image.title}</p>
    </div>
  )
}

export default MasonryItem