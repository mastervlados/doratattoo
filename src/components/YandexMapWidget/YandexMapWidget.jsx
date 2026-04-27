import styles from './YandexMapWidget.module.css'

function YandexMapWidget() {
    return (
        <address className={styles.container}>
            <a href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps"
                target="_blank" 
                className={styles.link}>Улица Салова, 37А</a>
            <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=30.382496%2C59.893453&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzQzNjgyNRJK0KDQvtGB0YHQuNGPLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0YPQu9C40YbQsCDQodCw0LvQvtCy0LAsIDM30JAiCg1cD_NBFeWSb0I%2C&z=17.05"
                frameBorder="0" 
                allowFullscreen="true" 
                className={styles.iframe}/>
        </address>
    )
}

export default YandexMapWidget
