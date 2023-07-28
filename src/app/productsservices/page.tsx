import style from './style.module.scss'

import { ListProductsServices } from '../../components/ListProductsServices/page'
import { Header } from '../../components/Header/page'
import { Footer } from '../../components/Footer/page'

export default function ProductsServices() {

  return (
    <>
      <Header />
      <div className={style.container}>

        <p className={style.title}>
          Nossos principais serviços englobam:
        </p>

        <ListProductsServices />

      </div>
      <Footer />
    </>
  )
}