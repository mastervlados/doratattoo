import ButtonContactMe from '../ButtonContactMe'
import IconInstagram from '../ui/IconInstagram'
import IconTelegram from '../ui/IconTelegram'
import IconVK from '../ui/IconVK'
import styles from './ContactInfo.module.scss'

function ContactInfo(){
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
    <div>
        <ul>
            <h3>Индивидуальный подход</h3>
            <h3>Эскизы — под ваш запрос и авторские</h3>
            <h3>Четкие идеальные линии</h3>
            <h3>Чистота  исполнения и безопасность</h3>
            <h3>Работаю только по предварительной записи:</h3>
        </ul>
        <div>
            <ButtonContactMe {...tgButtonProps}/>
            <ButtonContactMe {...igButtonProps}/>
            <ButtonContactMe {...vkButtonProps}/>
        </div>
    </div>
  )
}

export default ContactInfo