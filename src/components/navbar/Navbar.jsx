import React from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/Logo.png'
import { useState } from 'react'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    const Menu = () => (
        <>
            <p><a href='#home'>Home</a></p>
            <p><a href='#products'>Produtos</a></p>
            <p><a href='#tech'>Tecnologia</a></p>
            <p><a href='#solutions'>Soluções</a></p>
            <p><a href='#about'>Sobre</a></p>
        </>
    )

    return (
        <div className='lt__navbar'>
            <div className='lt__navbar-links'>
                <div className='lt__navbar-links_logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='lt__navbar-links_container'>
                    <Menu />
                </div>
            </div>
            <div className='lt__navbar-sign'>
                <p>Entrar</p>
                <button type='button'>Cadastrar</button>
            </div>
            <div className='lt__navbar-menu'>
                {toggleMenu
                    ? (< RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />)
                    : (<RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />)
                }
                {toggleMenu && (
                    <div className='lt__navbar-menu_container scale-up-center'>
                        <div className='lt__navbar-menu_container-links'>
                            <Menu />
                            <div className='lt__navbar-menu_container-links-sign'>
                                <p>Entrar</p>
                                <button type='button'>Cadastrar</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar