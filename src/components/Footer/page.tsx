import style from './style.module.scss'

//import para usar links no react
import Link from 'next/link'

import { FaFacebookSquare, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { BsTelephone } from 'react-icons/bs'
import { MdMyLocation, MdEmail } from 'react-icons/md'

export function Footer() {
  return (
    <footer>

      <div className={style.content}>

        <div className={style.siteInfo}>
          <p>Atendimento:</p>
          <p>Segunda à Sábado das 8:00 às 18:00</p>
          <p>Domingo Plantão PDV</p>
        </div>

        <div className={style.contact}>
          <section>
            <BsTelephone size={22} />
            <p>11 99153-9492 | 11 3567-3512</p>
          </section>

          <section>
            <MdEmail size={22} />
            <p>contato@fenixme.com.br</p>
          </section>

          {/*
          <section>
            <MdMyLocation size={22} />
            <p>Av. das Nações, 673 - Parque Novo Oratório</p>
          </section>
          <p>Santo André - SP, 09260-000</p>
          */}
        </div>

        <div className={style.mediaSocial}>
          <Link href='https://wa.me/message/HVZ3XEWUPKDGG1' target='_blank'>
            <FaWhatsapp size={22} />
          </Link>

          <Link href='https://www.facebook.com/fenixsolucoesinteligentes' target="_blank">
            <FaFacebookSquare size={22} />
          </Link>

          <Link href='https://www.instagram.com/_fenixme_/' target="_blank">
            <FaInstagram size={22} />
          </Link>

          <FaLinkedinIn size={22} />
        </div>
        
      </div>
    </footer>
  )
}