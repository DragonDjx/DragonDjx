import React from 'react';
import { FaAngleDown, FaSearch, FaUser, FaUserPlus, FaUserLock, FaShoppingCart, FaArrowAltCircleRight } from 'react-icons/fa';

import './styles.css';

import logo from '../../../assets/logo.png';

export default function Header() {
    function hideContent(e) {
        e.preventDefault()
    }

    return (
        <header>
            <a href="/" className="home-button">
                <img src={logo} alt="DragonDjx" />
                DragonDjx
            </a>

            <div className="menu" onMouseOut={hideContent}>
                <p>
                    Categorias
                    <FaAngleDown size={20} />
                </p>

                <ul>
                    <li>
                        TESTE 1
                        <FaArrowAltCircleRight size={12} color="333"/>
                    </li>
                    <li>
                        TESTE 2
                        <FaArrowAltCircleRight size={12} color="333"/>
                    </li>
                    <li>
                        TESTE 3
                        <FaArrowAltCircleRight size={12} color="333"/>
                    </li>
                </ul>
            </div>

            <form action="#">
                <input type="text" placeholder="Pesquisar Produto" />
                <button type="submit"><FaSearch size={12} color="#000" /></button>
            </form>

            <div className="user" onMouseOut={hideContent}>
                <p>
                    <FaUser size={14} />
                    Minha Conta
                </p>

                <ul>
                    <li>
                        <FaUserPlus size={12} color="333"/>
                        Registrar
                    </li>
                    <li>
                        <FaUserLock size={12} color="333"/>
                        Entrar
                    </li>
                </ul>
            </div>

            <div className="cart" onMouseOut={hideContent}>
                <p>
                    <FaShoppingCart size={14} />
                    Carrinho
                </p>

                <ul>
                    <li>TESTE</li>
                </ul>
            </div>
        </header>
    )
}









