import style from './style.module.scss'

import Image from 'next/image'
import serviceNetwork from '../../../public/image/serviceNetwork.jpg'
import serviceHardware from '../../../public/image/serviceHardware.jpg'
import pdv from '../../../public/image/pdv.jpg'

export function ListProductsServices() {

  const services = [
    {
      id: 1,
      title: 'Soluções para Comércio',
      text: 'Softwares personalizados que atendem às demandas do comércio moderno. Desde sistemas de ponto de venda (PDV) e gestão de estoque até integração de vendas online e offline, nossas soluções de software são projetadas para melhorar a produtividade, otimizar processos e aumentar a satisfação do cliente.',
      img: pdv
    },
    {
      id: 2,
      title: 'Rede e Infraestrutura',
      text: 'Fornecemos soluções completas de infraestrutura e rede para garantir que as operações comerciais ocorram sem interrupções. Isso inclui a implementação e configuração de redes locais, , servidores, estações de trabalho e outros equipamentos necessários para suportar as atividades comerciais e garantir uma conexão segura e estável.',
      img: serviceNetwork
    },
    {
      id: 3,
      title: 'Suporte Técnico e Manutenção',
      text: 'O suporte pós-implementação é fundamental para o sucesso contínuo de nossos clientes. Por isso, oferecemos suporte técnico abrangente e serviços de manutenção para garantir que os sistemas estejam funcionando de maneira confiável e sem interrupções. Nossa equipe dedicada está pronta para solucionar problemas, fornecer assistência remota ou no local e realizar atualizações regulares para manter a eficiência dos sistemas.',
      img: serviceHardware
    }
  ]

  return (
    <>
      <div className={style.containerBox}>

        {services.map((service) => (
          <div className={style.box} key={service.id}>
            <Image className={style.imgService} src={service.img} alt={service.title} />
            <div className={style.content}>
              <p>{service.title}</p>
              <article>
                {service.text}
              </article>
            </div>
          </div>
        ))}

      </div>
    </>
  )
}