import Address from '../Address'
import styles from './Author.module.scss'

function Author(){
  return (
    <div>
        <h2 className={styles.position}>Тату-мастер</h2>
        <h1 className={styles.heading}>Дарья Холод</h1>
        <p className={styles.addressPosition}><Address/></p>
        <p className={[styles.slugPosition, styles.slug].join(' ')}>Создаю тату с характером — сюжетные, глубокие, графичные</p>
        <p>Работаю по индивидуальным эскизам, с чистой проработкой деталей и вниманием к каждому клиенту</p>
    </div>
  )
}

export default Author