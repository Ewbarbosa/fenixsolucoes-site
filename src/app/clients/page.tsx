import style from './style.module.scss'

import { Header } from '../../components/Header/page'
import { Footer } from '@/components/Footer/page'
import { Slider } from '../../components/Slider/page'

export default function Clients() {    

  return (
    <>
      <Header />
      <div className={style.container}>
        <p className={style.title}>
          Nossos clientes
        </p>

        <Slider />    

      </div>
      <Footer />
    </>
  )
}