import React from 'react'
import './technology.css'
import { Tech } from '../../components'

const Technology = () => {
    return (
        <div className='lt__technology section__padding' id='technology'>
            <div className='lt__technology-heading'>
                <h1>Na LuminaTech, estamos comprometidos em fornecer soluções de tecnologia sustentável que ajudem nossos clientes a adotar práticas mais responsáveis e reduzir seu impacto ambiental. Junte-se a nós nessa jornada em direção a um futuro mais sustentável e descubra como a tecnologia pode ser uma aliada na preservação do nosso planeta.</h1>
            </div>
            <div className='lt__technology-tech'>
                <Tech title="Energia Limpa e Renovável:"
                    text="Utilizamos painéis solares para capturar a luz solar e convertê-la em eletricidade limpa e renovável. Isso reduz a dependência de fontes não renováveis e diminui as emissões de gases de efeito estufa." />
                <Tech title="Eficiência Energética:"
                    text="Nossos produtos são projetados para maximizar a eficiência energética, incluindo painéis solares, sistemas de armazenamento e iluminação LED. Essas tecnologias ajudam a otimizar o desempenho e reduzir o consumo de energia, economizando nas contas de eletricidade." />
                <Tech title="Redução de Desperdícios e Impacto Ambiental:"
                    text="Adotamos práticas de produção sustentáveis, usando materiais recicláveis e de baixo impacto ambiental. Buscamos minimizar a geração de resíduos através da reutilização e reciclagem, garantindo processos de fabricação eficientes e alinhados com altos padrões ambientais." />
                <Tech title="Inovação Tecnológica Contínua:"
                    text="Investimos em pesquisa e desenvolvimento para melhorar nossas soluções e criar novas abordagens sustentáveis. Colaboramos com parceiros estratégicos e exploramos tecnologias emergentes para oferecer produtos mais eficientes e sustentáveis." />

            </div>
        </div>
    )
}

export default Technology
