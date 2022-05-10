import styles from '@/styles/masonry.module.css'

interface MasonryItemProps {
  image: {
    img: string,
    title: string
  }
}

const MasonryItem = ({ image }: MasonryItemProps) => {
  console.log(image.img)
  return (
    <div className={styles.masonryItem}>
      <img src={require('@/assets/1.jpg')} alt={image.title} />
      <p>{image.title}</p>
    </div>
  )
}

export default MasonryItem