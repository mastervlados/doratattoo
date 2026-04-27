import Social from '../../components/Social'
import styles from './FooterModule.module.scss'

function FooterModule(){
  return (
    <footer>
        <div className={`wrap ${styles.container}`}>
            <Social/>
        </div>
    </footer>
  )
}

export default FooterModule