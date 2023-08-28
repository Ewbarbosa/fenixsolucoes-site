"use client"

import React, { useState, useEffect } from 'react'

import style from './style.module.scss'

import Image from 'next/image'

import adonai from '../../../public/image/clients/adonai.png'
import arturAlvim from '../../../public/image/clients/arturAlvim.jpg'
import barreto from '../../../public/image/clients/barreto.bmp'
import contrugil from '../../../public/image/clients/contrugil.png'
import bengala from '../../../public/image/clients/bengala.png'
import joy from '../../../public/image/clients/joy.png'
import isabela from '../../../public/image/clients/isabela.png'
import muvuca from '../../../public/image/clients/muvuca.jpg'
import primatus from '../../../public/image/clients/primatus.jpg'
import vivene from '../../../public/image/clients/vivene.jpg'
import santaTerezinha from '../../../public/image/clients/santaTerezinha.jpg'
import centreville from '../../../public/image/clients/centreville.png'
import diniz from '../../../public/image/clients/diniz.png'


// imports relacionados ao Swiper

import { register } from 'swiper/element/bundle'
register();

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar'
// imports relacionados ao Swiper

export function Slider() {

  const [slidePreview, setSlidePreview] = useState(3);

  useEffect(() => {

    function handleResize() {
      if (window.innerWidth < 768) {
        setSlidePreview(2)
      } else {
        setSlidePreview(3);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }

  }, [])

  const data = [
    { id: 1, img: adonai },
    { id: 2, img: arturAlvim },
    { id: 3, img: barreto },
    { id: 5, img: contrugil },
    { id: 6, img: bengala },
    { id: 7, img: joy },
    { id: 8, img: isabela },
    { id: 9, img: muvuca },
    { id: 10, img: primatus },
    { id: 11, img: vivene },
    { id: 12, img: santaTerezinha },
    { id: 13, img: centreville },
    { id: 14, img: diniz }
  ]

  return (
    <>
      <Swiper
        className={style.swiper}
        spaceBetween={10}
        slidesPerView={slidePreview}
        pagination={{ clickable: true }}
        navigation
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Image
              src={item.img}
              alt='Clientes'
              className={style.imgClient} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}