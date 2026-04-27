import styles from './MainModule.module.scss'
import Author from '../../components/Author'
import ContactInfo from '../../components/ContactInfo'

function MainModule(){
  return (
    <main className={styles.container}>
      <div className={'wrap'}>
        <header className={styles.headerContainer}>
          <div className={styles.dummyDiv}/>
          <Author/>
          <ContactInfo/>
        </header>
      </div>
    </main>
  )
}

export default MainModule