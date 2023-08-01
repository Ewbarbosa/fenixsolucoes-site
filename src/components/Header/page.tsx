"use client"

import { useState } from 'react'

import logo from '../../../public/logo.png'
import Image from 'next/image'

// import para usar links com react
import Link from 'next/link'

import { FaBars, FaTimes } from 'react-icons/fa'
import style from './style.module.scss'

export function Header() {

  const [menu, setMenu] = useState(true);

  const showMenu = () => {
    setMenu(!menu);
    //alert(menu);
  }

  return (
    <div className={style.container}>

      <Link href='/'>
        <Image className={style.logo} src={logo} alt='Logo Fenix Soluções' />
      </Link>      

      {
        menu ?
        <FaBars className={style.bars} onClick={showMenu} size={24} />
        : <FaTimes className={style.bars} onClick={showMenu} size={24} />
      }      

      {/* foi usado template string pra alterar o comportamento da classe */}
      <ul className={`${style.listMenu} ${menu ? style.show : ""}`}>
        <li onClick={showMenu}>
          <Link href='/'>
            Home
          </Link>
        </li>

        <li onClick={showMenu}>
          <Link href='/productsservices'>
            Produtos e Serviços
          </Link>
        </li>

        <li onClick={showMenu}>
          <Link href='/clients'>
            Clientes
          </Link>
        </li>

        <li onClick={showMenu}>
          <Link href='/about'>
            Sobre nós
          </Link>
        </li>

        <li onClick={showMenu}>
          <Link href='/contact'>
            Contate-nos
          </Link>
        </li>

      </ul>

    </div>
  )
}