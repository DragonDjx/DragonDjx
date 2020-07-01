import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaAngleDown, FaSearch, FaUser, FaUserPlus, FaUserLock, FaShoppingCart, FaArrowAltCircleRight, FaTrash } from 'react-icons/fa';

import './styles.css';

import logo from '../../../assets/logo.svg';

export default function Header() {
    const history = useHistory();
    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState([]);

    if (localStorage.getItem('cart') == null) localStorage.setItem('cart', "[]");

    function getCart() {
        setCart(JSON.parse(localStorage.getItem('cart')));
    }

    function listCart() {
        if (cart != null && cart.length !== 0) {return cart.map(product => (
            <li key={product.id} id={product.id}>
                <img src={product.image.url} alt="Produto"/>

                <h4 className="title">{product.title}</h4>

                <p className="value">{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</p>
                
                <FaTrash size={14} onClick={e => {e.preventDefault(); removeProduct(product.id);}}/>
            </li>
        ))} else {
            return (
                <li id="emptyCart">
                    <h4>Seu Carrinho Está Vazio</h4>
                </li>
            )
        };
    };

    function removeProduct(id) {
        const item = document.getElementById(id);
        item.classList.add("fade-out");

        setTimeout(function() {
            const newCart = cart.filter(product => product.id !== id);

            localStorage.setItem('cart', JSON.stringify(newCart));
            setCart(newCart);
        }, 200);
    };

    function handleSearch(e) {
        e.preventDefault();

        history.push(`/result?search=${search}`);
    }

    function handleMouseOut(e) {
        e.preventDefault();
    };

    function handleClick(e) {
        e.preventDefault();

        const id = e.target.id;

        if (id === "home-button") {
            history.push('/');
        }
        else {
            history.push(`/${ id }`);
        }

    };

    return (
        <header>
            <a href="/" id="home-button"  onClick={ handleClick }>
                <img src={logo} alt="DragonDjx" />
                DragonDjx
            </a>

            <div id="menu" className="header-list" onMouseOut={ handleMouseOut }>
                <p id="produtos" onClick={ handleClick }>
                    Categorias
                    <FaAngleDown size={20} />
                </p>

                <ul className="fade">
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

            <form id="search" action="/result" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Pesquisar Produto"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <button type="submit"><FaSearch size={12} color="#000" /></button>
            </form>

            <div id="user" className="header-list" onMouseOut={ handleMouseOut }>
                <p>
                    <FaUser size={14} />
                    Minha Conta
                </p>

                <ul className="fade">
                    <li id="register" onClick={ handleClick }>
                        <FaUserPlus size={12} color="333"/>
                        Registrar
                    </li>
                    <li id="login" onClick={ handleClick }>
                        <FaUserLock size={12} color="333"/>
                        Entrar
                    </li>
                </ul>
            </div>

            <div id="cart" className="header-list" onMouseOut={ handleMouseOut }>
                <p id="cart" onClick={ handleClick }  onMouseOver={getCart}>
                    <FaShoppingCart size={14} />
                    Carrinho
                </p>

                <ul className="fade">
                    {listCart()}
                </ul>
            </div>
        </header>
    )
}









