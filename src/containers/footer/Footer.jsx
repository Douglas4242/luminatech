import React from 'react'
import './footer.css'
import logo from '../../assets/Logo.png'

const Footer = () => {
    return (
        <div className='lt__footer section__padding' id='about'>
            <div className="lt__footer-heading">
                <h1>A LuminaTech é líder em soluções de energia sustentável, oferecendo tecnologias inovadoras e eficientes para residências e empresas,</h1>
                <h2>promovendo um futuro mais sustentável e ajudando os clientes a reduzir sua pegada ambiental e economizar energia.</h2>
            </div>
            <div className='lt__footer-links'>
                <div className='lt__footer-links_logo'>
                    <img src={logo} />
                    <h3>Empoderando um futuro brilhante, <br /> juntos</h3>
                </div>
                <div className='lt__footer-links_div'>
                    <h4>Endereço</h4>
                    <p>Rua Energia Limpa, 123</p>
                    <p>Cidade Sustentável, Estado Verde</p>
                    <p>CEP: 12345-678</p>
                </div>
                <div className='lt__footer-links_div'>
                    <h4>Contato</h4>
                    <p>+55 (12) 3456-7890</p>
                    <p>info@luminatech.com</p>
                    <p>Segunda a sexta-feira: 9h às 18h</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
