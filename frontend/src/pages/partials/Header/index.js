import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaAngleDown, FaSearch, FaUser, FaUserPlus, FaUserLock, FaShoppingCart, FaArrowAltCircleRight, FaTrash } from 'react-icons/fa';
import { FiMenu }  from 'react-icons/fi';

import './styles.css';
import './responsive.css';

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
        if (cart != null && cart.length !== 0) {
            return cart.map(product => (
                <li key={product.id} id={product.id}>
                    <img src={product.image.url} alt="Produto"/>

                    <h4 className="title">{product.title}</h4>

                    <p className="value">{
                        Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(product.price)
                    }</p>
                    
                    <FaTrash size={14} onClick={e => removeProduct(e, product.id)}/>
                </li>
        ))} else {
            return (
                <li id="emptyCart">
                    <h4>Seu Carrinho Está Vazio</h4>
                </li>
            )
        };
    };

    function removeProduct(e, productId) {
        e.preventDefault();
        
        const item = document.getElementById(productId);
        item.classList.add("fade-out");

        setTimeout(function() {
            const newCart = cart.filter(product => product.id !== productId);

            localStorage.setItem('cart', JSON.stringify(newCart));
            setCart(newCart);
        }, 200);
    };

    function handleSearch(e) {
        e.preventDefault();

        history.push(`/produtos?search=${search}`);
    }

    function getPage(e, route) {
        e.preventDefault();

        history.push(route);
    };

    return (
        <header>
            <Link to="/" id="home-button" onClick={ e => getPage(e, '/') }>
                <img src={logo} alt="DragonDjx" />
                DragonDjx
            </Link>

            <div id="menu" className="header-list">
                <Link to="produtos" id="products">
                    Categorias
                    <FaAngleDown size={20} className="svg-angle-down"/>
                    <FiMenu className="svg-menu"/>
                </Link>

                <ul className="fade">
                    <li onClick={ e => getPage(e, '/produtos/teste-1') }>
                        TESTE 1
                        <FaArrowAltCircleRight size={12} color="333"/>
                    </li>
                    <li onClick={ e => getPage(e, '/produtos/teste-2') }>
                        TESTE 2
                        <FaArrowAltCircleRight size={12} color="333"/>
                    </li>
                    <li onClick={ e => getPage(e, '/produtos/teste-3') }>
                        TESTE 3
                        <FaArrowAltCircleRight size={12} color="333"/>
                    </li>
                </ul>
            </div>

            <form id="search" onSubmit={ handleSearch }>
                <input
                    type="text"
                    placeholder="Pesquisar Produto"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <button type="submit"><FaSearch size={12} color="#333" /></button>
            </form>

            <div id="user" className="header-list">
                <Link to="/dashboard">
                    <FaUser size={14} />
                    Minha Conta
                </Link>

                <ul className="fade">
                    <li onClick={ e => getPage(e, 'registrar')}>
                        <FaUserPlus size={12} color="333"/>
                        Registrar
                    </li>
                    <li onClick={ e => getPage(e, 'login')}>
                        <FaUserLock size={12} color="333"/>
                        Entrar
                    </li>
                </ul>
            </div>

            <div id="cart" className="header-list" onMouseOver={getCart}>
                <Link to="/cart">
                    <FaShoppingCart size={14} />
                    Carrinho
                </Link>

                <ul className="fade">
                    {listCart()}
                </ul>
            </div>
        </header>
    )
}









