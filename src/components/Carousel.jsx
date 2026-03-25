import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import '../styles/Style.css'

function CarouselHome() {
    return (
        <div className="carousel-wrapper">
            <Carousel 
                autoPlay 
                infiniteLoop 
                showThumbs={false} 
                showStatus={false}
                showArrows={true}
                interval={5000}
                className="vocational-carousel"
            >
                <div className="carousel-slide">
                    <img src="/Imagens/sav.png" alt="Diocese de Nova Iguaçu" />
                    <p className="legend">Diocese de Nova Iguaçu - SAV</p>
                </div>
                <div className="carousel-slide">
                    <img src="/Imagens/sacerdotes.jpg" alt="Vocação Sacerdotal" />
                    <p className="legend">Chamados ao Serviço Sacerdotal</p>
                </div>
                <div className="carousel-slide">
                    <img src="/Imagens/religiosa.jpg" alt="Vida Religiosa" />
                    <p className="legend">Vida Consagrada: Entrega Total a Deus</p>
                </div>
            </Carousel>
        </div>
    )
}

export default CarouselHome