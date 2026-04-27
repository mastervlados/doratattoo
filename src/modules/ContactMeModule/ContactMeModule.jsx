import ContactInfo from '../../components/ContactInfo'
import ContactInfoButtons from '../../components/ContactInfoButtons'
import styles from './ContactMeModule.module.scss'

function ContactMeModule(){
  return (
    <section className={'alt-section-bg'}>
        <div className={`wrap ${styles.container}`}>
            <ContactInfo/>
            <div className={styles.buttonsPosition}>
                <ContactInfoButtons/>
            </div>  
        </div>
    </section>
  )
}

export default ContactMeModule