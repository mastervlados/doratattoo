import ButtonContactMe from '../ButtonContactMe'
import IconInstagram from '../ui/IconInstagram'
import IconTelegram from '../ui/IconTelegram'
import IconVK from '../ui/IconVK'
import styles from './ContactInfoButtons.module.scss'

function ContactInfoButtons(){
    const vkButtonProps = {
        type: 'vk',
        href: 'https://vk.ru/doraholod',
        alt: 'Страница тату-мастера Вконтакте',
        text: 'Напишите Вконтакте',
        icon: <IconVK width={20} height={20} color={'#212529'}/>
    }

    const igButtonProps = {
        type: 'ig',
        href: 'https://www.instagram.com/dora_tattoo_/',
        alt: 'Instagram тату-мастера',
        text: 'Оставьте DM в Instagram',
        icon: <IconInstagram  width={20} height={20} color={'#212529'}/>
    }

    const tgButtonProps = {
        type: 'tg',
        href: 'https://t.me/Doratats',
        alt: 'Продолжить в Telegram мессенджере',
        text: 'Продолжим в Telegram',
        icon: <IconTelegram  width={19} height={19} color={'#212529'}/>
    }
  return (
    <div className={styles.container}>
        <ButtonContactMe {...tgButtonProps}/>
        <ButtonContactMe {...igButtonProps}/>
        <ButtonContactMe {...vkButtonProps}/>
    </div>
  )
}

export default ContactInfoButtons