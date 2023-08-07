import style from './style.module.scss'
import imgAbout from '../../../public/image/imageAbout.jpg'
import Image from 'next/image'
import { Header } from '../../components/Header/page'
import { Footer } from '../../components/Footer/page'

export default function About() {
  return (
    <>
      <Header />
      <div className={style.content}>

        <div className={style.contentBody}>
          <p>Quem somos</p>

          <article>
            A Fenix Soluções Inteligentes é uma renomada empresa de automação comercial sediada em São Paulo, com uma sólida presença de mercado de 10 anos.
            Somos especializados em fornecer soluções inovadoras e inteligentes para empresas de diversos segmentos, ajudando-as a otimizar suas operações e alcançar um desempenho excepcional.

            <br />Nossa missão é capacitar nossos clientes por meio da automação, oferecendo serviços e produtos de alta qualidade que impulsionam a eficiência e o crescimento.
            Combinamos nossa vasta experiência no setor com as últimas tecnologias para oferecer soluções personalizadas, adaptadas às necessidades específicas de cada negócio.

            <br /><br />Na Fenix Soluções Inteligentes, estamos comprometidos em fornecer soluções de automação comercial de ponta que agregam valor aos negócios de nossos clientes.
            Nossa equipe altamente experiente e dedicada está pronta para enfrentar desafios e criar soluções sob medida, impulsionando o crescimento e o sucesso dos nossos parceiros de negócios.
          </article>
        </div>
        <Image className={style.imgAbout} src={imgAbout} alt="Sobre a Fenix" />

      </div>
      <Footer />
    </>

  )
}