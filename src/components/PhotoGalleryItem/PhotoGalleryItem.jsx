import styles from './PhotoGalleryItem.module.scss'

function PhotoGalleryItem({ key, src, alt }){
  return (
    <div key={key} className={styles.container}>
      <img src={src} alt={alt} className={styles.image}/>
    </div>
  )
}

export default PhotoGalleryItem