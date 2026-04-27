import IconPlace from '../ui/IconPlace'
import styles from './Address.module.scss'

function Address(){
  return (
    <p className={styles.container}>
        <IconPlace width={20} height={20} color='#F5F5F7'/>
        <address className={styles.address}>Санкт-Петербург, улица Салова, 37А</address>
    </p>
  )
}

export default Address