import FooterModule from '../../modules/FooterModule/FooterModule'
import LocationModule from '../../modules/LocationModule'
import MainModule from '../../modules/MainModule'
import PortfolioModule from '../../modules/PortfolioModule'
import styles from './App.module.scss'

function App(){
  return (
    <>
      <MainModule/>
      <PortfolioModule/>
      <LocationModule/>
      <FooterModule/>
    </>
  )
}

export default App