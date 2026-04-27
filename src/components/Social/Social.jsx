import ButtonRounded from '../ui/ButtonRounded'
import IconInstagram from '../ui/IconInstagram'
import IconTelegram from '../ui/IconTelegram'
import IconVK from '../ui/IconVK'
import styles from './Social.module.scss'

function Social(){
  return (
    <div className={styles.container}>
        <div className={styles.insideContainer}>
            <h3 className={styles.heading}>Подпишись:</h3>
            <div className={styles.buttonsContainer}>
                <ButtonRounded icon={() => <IconTelegram width={19} height={19} color="#FFFFFF"/>} href={'https://t.me/doratatt'}/>
                <ButtonRounded icon={() => <IconInstagram width={19} height={19} color="#FFFFFF"/>} href={'https://www.instagram.com/dora_tattoo_/'}/>
                <ButtonRounded icon={() => <IconVK width={19} height={19} color="#FFFFFF"/>} href={'https://vk.com/doratatts'}/>
            </div>
        </div>
    </div>
  )
}

export default Social