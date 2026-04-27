import PhotoGallery from '../../components/PhotoGallery'
import styles from './PortfolioModule.module.scss'

function PortfolioModule(){
  return (
    <section className={'alt-section-bg'}>
      <div className={`wrap ${styles.insideContainer}`}>
        <h2 className={'section-heading'}>
            Мое вдохновение и ваши идеи
        </h2>
      </div>
      <PhotoGallery/>
    </section>
  )
}

export default PortfolioModule