"use client"

import style from './page.module.scss'

import santaTerezinha from '../../public/image/clients/santaTerezinha.jpg'
import primatus from '../../public/image/clients/primatus.jpg'
import muvuca from '../../public/image/clients/muvuca.jpg'

import { Header } from '../components/Header/page'
import { Footer } from '../components/Footer/page'
import { Button } from '../components/Button/page'
import { Loading } from '../components/Loading/page'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {

  const coments = [
    {
      id: 1,
      text: 'Usando Fênix ERP para o nosso comercio, conseguimos uma gestão de todos departamentos interligados Pedido de compras , notas de entrada , coletor de dados, contas à pagar, precificação, eliminando erros de preço, estoque, ruptura. Tempo de resposta rápido, ficamos muito satisfeitos com o resultado final!',
      autor: 'Depósito Santa Terezinha',
      img: santaTerezinha
    },
    {
      id: 2,
      text: 'O sistema ERP simplifica nossos processos internos, tornando a gestão de estoque e as operações de vendas mais rápidas e eficientes. Além disso, a empresa oferece um excelente suporte, respondendo prontamente a todas as nossas dúvidas. Estamos extremamente satisfeitos com os resultados.',
      autor: 'Supermercado Primatus',
      img: primatus
    },
    {
      id: 3,
      text: 'Realizam manutenções em nossos caixas sempre que precisamos, a equipe resolve os problemas de forma rápida, garantindo que o sistema voltasse a funcionar o quanto antes. Estamos satisfeitos com o serviço prestado. Recomendamos seus serviços de manutenção com confiança.',
      autor: 'Muvuca Variedades',
      img: muvuca
    }
  ]

  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    setRemoveLoading(true);
  }, [])

  return (
    <div className={style.container}>
      <Header />

      <div className={style.content}>

        <div className={style.content_A}>
          <p>Conheça a Solução Fênix ERP</p>
          <article>
            Aumente a eficiência e a produtividade da sua empresa com nosso sistema ERP integrado. Simplifique a gestão de estoque, controle as vendas e gerencie finança.
            Com uma visão unificada e em tempo real de todas as operações, você poderá tomar decisões informadas e estratégicas.
            Otimize seus processos e impulsione o crescimento do seu negócio com nossa solução confiável de ERP.
          </article>
        </div>

        <div className={style.containerCard}>

          <div className={style.card}>
            <p>Dinâmico</p>
            <article>Capaz de atender aos requisitos específicos do seu setor, tamanho e fluxo de trabalho.</article>
          </div>

          <div className={style.card}>
            <p>Facilidade</p>
            <article>Interface intuitiva e amigável, nosso ERP é fácil e acessível para todos os usuários.</article>
          </div>

          <div className={style.card}>
            <p>Custo</p>
            <article>Preço diferenciado do mercado. Pague pelo número de pontos de venda.</article>
          </div>

        </div>

        <div className={style.metrics}>
          <p>Nossos clientes realizam diariamente</p><br />
          <p>+25000 Vendas CFE/SAT</p>
          <p>+3000 Pedidos de Vendas</p>
          <p>+1000 Recebimento de Notas</p>
          <p>+15000 Transações TEF</p><br /><br /><br />
        </div>

        <div className={style.buttonInfo}>
          <p>Quer saber mais?</p>
          <p>Clique no botão abaixo e fale conosco</p>
          <form action='/contact' method="get">
            <Button>
              Saiba mais
            </Button>
          </form>
        </div>

      </div>

      <div className={style.containerReports}>
        <p className={style.titleReport}>Sabia o que nossos clientes acham</p>

        {coments.map((coments) => (
          <div className={style.report} key={coments.id}>
            <div className={style.profile}>
              <Image className={style.imgAutor} src={coments.img} alt='Comentários' />
              <p>{coments.autor}</p>
            </div>
            <article>
              <i>{coments.text}</i>
            </article><br />
          </div>
        ))}
      </div>

      {!removeLoading && <Loading />}

      <Footer />
    </div >
  )
}