import Address from '../../components/Address'
import YandexMapWidget from '../../components/YandexMapWidget'
import styles from './LocationModule.module.scss'

function LocationModule(){
  return (
    <section>
        <div className={'wrap'}>
            <h2 className={'section-heading'}>
                Как добраться
            </h2>
            <Address/>
            <YandexMapWidget/>
        </div>
    </section>
  )
}

export default LocationModule