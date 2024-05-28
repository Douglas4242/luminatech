import React from 'react'
import './header.css'
import renderImage from '../../assets/Render.png'

const Header = () => {
    return (
        <div className='lt__header section__padding' id='home'>
            <div className='lt__header-content'>
                <h1>Empoderando um futuro brilhante, juntos!</h1>
                <p>A LuminaTech é uma empresa líder no setor de tecnologia sustentável, dedicada a fornecer soluções de energia limpa e eficiente para residências e empresas. Nosso objetivo é ser uma referência global em inovação tecnológica, promovendo um futuro sustentável, onde a energia renovável seja acessível e amplamente adotada.</p>
                <h3>Nossa Missão:</h3>
                <p>Nossa missão é fornecer soluções de energia sustentável acessíveis e de alta qualidade, impulsionadas pela inovação tecnológica. Queremos capacitar nossos clientes a adotar práticas mais sustentáveis, reduzindo seu impacto ambiental e contribuindo para a construção de um futuro mais verde.</p>
                <div className='lt__header-content-lists'>
                    <div>
                        <h3>Nossos Valores:</h3>
                        <ul>
                            <li> Sustentabilidade</li>
                            <li> Inovação</li>
                            <li> Qualidade</li>
                            <li> Parceria</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='lt__header-image'>
                <img src={renderImage} />
            </div>
        </div>
    )
}

export default Header
