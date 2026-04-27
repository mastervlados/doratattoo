import styles from './ButtonContactMe.module.scss'

function ButtonContactMe({ type, href, alt, icon: Icon, text }) {

  return (
    <a 
        href={href} 
        className={[
            styles.button,
            styles.contactButton,
            type === 'tg' ? styles.tgButton : null
        ].filter(Boolean).join(' ')}
        target="_blank"
        alt={alt}
    >
        <p className={styles.insideContainer}>
            <span className={styles.iconContainer}>{ Icon }</span>
            <span className={styles.buttonText}>{ text }</span>
        </p>
    </a>
  )
}

export default ButtonContactMe