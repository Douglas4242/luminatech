import React from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/Logo.png'

const Navbar = () => {
    return (
        <div className='lt__navbar'>
            <div className='lt__navbar-links'>
                <div className='lt__navbar-links_logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='lt__navbar-links_container'>
                    <p><a href='#home'>Home</a></p>
                    <p><a href='#products'>Produtos</a></p>
                    <p><a href='#tech'>Tecnologia</a></p>
                    <p><a href='#solutions'>Soluções</a></p>
                    <p><a href='#about'>Sobre</a></p>
                </div>
            </div>
            <div className='lt__navbar-sign'>
                <p>Entrar</p>
                <button type='button'>Cadastrar</button>

            </div>
        </div>
    )
}

export default Navbar