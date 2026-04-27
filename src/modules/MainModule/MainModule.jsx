import styles from './MainModule.module.scss'
import Author from '../../components/Author'
import ContactInfo from '../../components/ContactInfo'
import ContactInfoButtons from '../../components/ContactInfoButtons'

function MainModule(){
  return (
    <main className={styles.container}>
      <div className={styles.mask}/>
      <div className={`wrap ${styles.insideContainer}`}>
        <header className={styles.headerContainer}>
          <div className={styles.dummyDiv}/>
          <div className={styles.descriptionContainer}>
            <Author/>
            <ContactInfo/>
            <div className={styles.buttonsPosition}>
              <ContactInfoButtons/>
            </div>
          </div>
        </header>
      </div>
    </main>
  )
}

export default MainModule