import style from './style.module.scss'

//import para usar links no react
import Link from 'next/link'

import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export function Footer() {
  return (
    <footer>
      <div className={style.footerContainer}>
        <div className={style.footerContent}>
          <div className={style.mediaSocial}>

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