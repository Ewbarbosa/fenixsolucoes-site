import style from './style.module.scss'

//import para usar links no react
import Link from 'next/link'

import { FaFacebookSquare, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { BsTelephone } from 'react-icons/bs'
import { MdMyLocation, MdEmail } from 'react-icons/md'

export function Footer() {
  return (
    <footer>
      <div className={style.footerContainer}>
        <div className={style.footerContent}>

          <div className={style.contact}>
            <section>
              <BsTelephone size={22} />
              <p>11 99153-9492 | 11 3567-3512</p>
            </section>

            <section>
              <MdEmail size={22} />
              <p>contato@fenixme.com.br</p>
            </section>

            <section>
              <MdMyLocation size={22} />
              <p>Av. das Nações, 673 - Parque Novo Oratório</p>                            
            </section>
            <p>Santo André - SP, 09260-000</p>
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

          <div className={style.siteInfo}>
            <p>
              FenixME 2023 &copy;
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}