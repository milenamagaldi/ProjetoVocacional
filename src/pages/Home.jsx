import CarouselHome from "../components/Carousel"
import Card from "../components/Card"
import { useNavigate } from 'react-router-dom'
import '../styles/Style.css'

function Home() {
  const navigate = useNavigate()

  // const vocacoes = [
  //   { titulo: "Vocação Sacerdotal", texto: "O chamado para servir ao Povo de Deus como presbítero.", imagem: "/Imagens/sacerdotal.jpg", path: "/sav" },
  //   { titulo: "Vida Religiosa", texto: "A entrega total a Deus através dos conselhos evangélicos.", imagem: "/Imagens/religiosa.jpg", path: "/sav" },
  //   { titulo: "Vida Laical", texto: "O chamado para viver no mundo, dedicando-se aos valores cristãos.", imagem: "/Imagens/laical.jpg", path: "/sav" },
  //   { titulo: "Discernimento", texto: "Como descobrir a vontade de Deus para sua vida.", imagem: "/Imagens/vocacoes-banner.png", path: "/sav" }
  // ]
  const vocacoes = [
    { titulo: "Vocação Sacerdotal", texto: "O chamado para servir ao Povo de Deus como presbítero.", imagem: "/Imagens/sacerdotal.jpg", path: "/sav" },
    { titulo: "Vida Religiosa", texto: "A entrega total a Deus através dos conselhos evangélicos.", imagem: "/Imagens/religiosa.jpg", path: "/sav" },
    { titulo: "Vida Laical", texto: "O chamado para viver no mundo, dedicando-se aos valores cristãos.", imagem: "/Imagens/laical.jpg", path: "/sav" },
    /* Altere o path de "/sav" para "/discernimento" na linha abaixo: */
    { titulo: "Discernimento", texto: "Como descobrir a vontade de Deus para sua vida.", imagem: "/Imagens/vocacoes-banner.png", path: "/discernimento" }
  ]

  return (
    <div className="container">
      <CarouselHome />
      
      <div className="hero">
        <h1>Serviço de Animação Vocacional</h1>
        <p>Descubra o chamado de Deus</p>
      </div>

      <h2>Vocações em Destaque</h2>
      <div className="grid">
        {vocacoes.map((voc, index) => (
          <Card
            key={index}
            titulo={voc.titulo}
            texto={voc.texto}
            imagem={voc.imagem}
            onClick={() => navigate(voc.path)}
          />
        ))}
      </div>

      <div className="info-box">
        <h2>Como Iniciar o Discernimento?</h2>
        <p>
          O Serviço de Animação Vocacional (SAV) da Diocese de Nova Iguaçu oferece acompanhamento espiritual,
          encontros de formação e retiros para jovens que desejam descobrir sua vocação.
        </p>
        <button onClick={() => navigate('/contato')}>Entre em Contato</button>
      </div>
    </div>
  )
}

export default Home