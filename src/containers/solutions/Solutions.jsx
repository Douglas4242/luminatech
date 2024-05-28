import React from 'react'
import './solutions.css'

const Solutions = () => {
    return (
        <div className='lt__solutions section__padding' id='solutions'>
            <div className="lt__solutions-container">
                <div className="lt__solutions-container-title">
                    <h1>Soluções Residenciais e Comerciais</h1>
                </div>
                <div className="lt__solutions-container-text">
                    <p>Na LuminaTech, entendemos a importância de fornecer soluções de energia sustentável tanto para residências quanto para empresas. Nossas soluções residenciais atendem às necessidades individuais de cada lar, garantindo eficiência energética, economia de custos e uma pegada ambiental reduzida. Da mesma forma, nossas soluções comerciais ajudam as empresas a reduzir os custos de energia, aumentar a sustentabilidade e promover uma imagem corporativa responsável. Aqui estão algumas das soluções que oferecemos para ambos os setores.</p>
                </div>
                <div className="lt__solutions-container-list">
                    <ul>
                        <li>Instalação de Painéis Solares</li>
                        <li>Sistemas de Armazenamento de Energia</li>
                        <li>Iluminação LED</li>
                        <li>Gerenciamento Inteligente de Energia</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Solutions
