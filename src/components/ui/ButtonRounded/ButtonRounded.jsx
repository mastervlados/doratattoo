import styles from './ButtonRounded.module.scss'

function ButtonRounded({ icon: Icon, href }){
  return (
    <a href={href} target='_blank' className={styles.container}>
        {Icon && <Icon/>}
    </a>
  )
}

export default ButtonRounded