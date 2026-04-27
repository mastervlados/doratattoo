import styles from './PortfolioModule.module.scss'

function PortfolioModule(){
  return (
    <section className={styles.container}>
      <div className={'wrap'}>
        <h2 className={'section-heading'}>
            Мое вдохновение и ваши идеи
        </h2>
      </div>
    </section>
  )
}

export default PortfolioModule