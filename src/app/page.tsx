import style from './page.module.scss'

import { Header } from '../components/Header/page'
import { Footer } from '../components/Footer/page'
import { Button } from '../components/Button/page'

export default function Home() {
  return (
    <div className={style.container}>
      <Header />

      <div className={style.contents}>

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
            <article>Capaz de atender aos requisitos específicos do seu setor, tamanho e fluxo de trabalho,</article>
          </div>

          <div className={style.card}>
            <p>Facilidade</p>
            <article>Interface intuitiva e amigável, nosso ERP é fácil e acessível para todos os usuários.</article>
          </div>

          <div className={style.card}>
            <p>Custo</p>
            <article>Preço diferenciado do mercado. Pague pelo número de pontos de venda</article>
          </div>

        </div>

        <div className={style.metrics}>
          <p>Com o Fênix ERP nossos clientes realizam diariamente</p><br/>
          <p>+25000 Vendas CFE/SAT</p>
          <p>+3000 Pedidos de Vendas</p>
          <p>+1000 Recebimento de Notas Fiscais Compras</p>
          <p>+15000 Transações TEF</p><br/><br/><br/>

          <p>Clique em Saiba Mais e agenda uma demonstração</p>
        </div>

        <div className={style.buttonInfo}>
          <form action='/contact' method="get">
            <Button>
              Saiba mais
            </Button>
          </form>
        </div>

      </div>

      <div className={style.containerReports}>
        <p className={style.titleReport}>Sabia o que nossos clientes acham</p>

        <div className={style.report}>
          <article>
            <i>Usando Fênix ERP para o nosso comercio, conseguimos uma gestão de todos departamentos interligados Pedido de compras , notas de entrada , coletor de dados, contas à pagar, precificação, eliminando erros de preço, estoque, ruptura.
              Tempo de resposta rápido, ficamos muito satisfeitos com o resultado final!</i>
          </article><br />
          <p> - Depósito Santa Terezinha</p>
        </div>

        <div className={style.report}>
          <article><i>
            O sistema ERP simplifica nossos processos internos, tornando a gestão de estoque e as operações de vendas mais rápidas e eficientes.
            Além disso, a empresa oferece um excelente suporte, respondendo prontamente a todas as nossas dúvidas.
            Estamos extremamente satisfeitos com os resultados.</i>
          </article><br />
          <p> - Supermercado Primatus</p>
        </div>

        <div className={style.report}>
          <article><i>
            Realizam manutenções em nossos caixas sempre que precisamos, a equipe resolve os problemas de forma rápida, garantindo que o sistema voltasse a funcionar o quanto antes.
            Estamos satisfeitos com o serviço prestado. Recomendamos seus serviços de manutenção com confiança.</i>
          </article><br />
          <p> - Muvuca Variedades</p>
        </div>

      </div>

      <Footer />
    </div >
  )
}
