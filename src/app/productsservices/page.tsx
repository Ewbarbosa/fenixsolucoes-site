"use client"

import style from './style.module.scss'

import { ListProductsServices } from '../../components/ListProductsServices/page'
import { Header } from '../../components/Header/page'
import { Footer } from '../../components/Footer/page'
import { Loading } from '../../components/Loading/page'

import { useState, useEffect } from 'react'

export default function ProductsServices() {

  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    setRemoveLoading(true);
  }, [])

  return (
    <>
      <Header />
      <div className={style.container}>

        <p className={style.title}>
          Nossos principais serviços englobam:
        </p>

        <ListProductsServices />
      </div>

      {!removeLoading && <Loading />}

      <Footer />
    </>
  )
}