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

        history.push(`/produtos?search=${search}`);
    };

    return (
        <header>
            <Link to="/" id="home-button">
                <img src={logo} alt="DragonDjx" />
                DragonDjx
            </Link>

            <div id="menu" className="header-list">
                <Link to="/produtos" id="products" className="header-list-title">
                    Categorias
                    <FaAngleDown size={20} className="svg-angle-down"/>
                    <FiMenu className="svg-menu"/>
                </Link>

                <ul className="fade">
                    <li className="hover-me">
                        <Link to="/promocoes" className="linkClass">Promoções</Link>
                    </li>

                    <li className="hover-me">
                        <Link to="/gabinetes" className="linkClass">Gabinetes</Link>
                    </li>

                    <li className="hover-me">
                        <Link to="/pc-gamer" className="linkClass">
                            Pc gamer
                            <FaArrowAltCircleRight className="menu-arrow-right" />
                        </Link>

                        <div className="menu-2">
                            <ul>
                                <li><Link to="/pc-gamer/linha-home" className="linkClass">Linha Home</Link></li>
                                <li><Link to="/pc-gamer/linha-gamer" className="linkClass">Linha Gamer</Link></li>
                                <li><Link to="/pc-gamer/monte-seu-pc" className="linkClass">Monte seu PC</Link></li>
                            </ul>
                        </div>
                    </li>

                    <li className="hover-me">
                        <Link to="/hardware" className="linkClass">
                            Hardware
                            <FaArrowAltCircleRight className="menu-arrow-right" />
                        </Link>

                        <div className="menu-2">
                            <ul>
                                <li><Link to="/hardware/placa-de-video" className="linkClass">Placa de Vídeo</Link></li>
                                <li><Link to="/hardware/processador" className="linkClass">Processador</Link></li>
                                <li><Link to="/hardware/memoria-ram" className="linkClass">Memórias</Link></li>
                                <li><Link to="/hardware/hard-disk" className="linkClass">Hard Disk</Link></li>
                                <li><Link to="/hardware/fontes" className="linkClass">Fontes</Link></li>
                                <li><Link to="/hardware/placa-mae" className="linkClass">Placa-mãe</Link></li>
                                <li className="finalLink"><Link to="/hardware" className="finalLink">Ver todos</Link></li>
                            </ul>
                        </div>

                    </li>
                    <li className="hover-me">
                        <Link to="/perifericos" className="linkClass">
                            Periféricos
                            <FaArrowAltCircleRight className="menu-arrow-right" />
                        </Link>

                        <div className="menu-2">
                            <ul>
                                <li><Link to="/perifericos/teclado" className="linkClass">Teclado</Link></li>
                                <li><Link to="/perifericos/mouse" className="linkClass">Mouse</Link></li>
                                <li><Link to="/perifericos/mousepad" className="linkClass">Mouse Pad</Link></li>
                                <li><Link to="/perifericos/fones" className="linkClass">Fones</Link></li>
                                <li><Link to="/perifericos/web-cam" className="linkClass">Web Cam</Link></li>

                                <li className="finalLink"><Link to="/perifericos" className="finalLink">Ver todos</Link></li>
                            </ul>
                        </div>
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
                <Link to="/dashboard" className="header-list-title">
                    <FaUser size={14} />
                    Minha Conta
                </Link>

                <ul className="fade">
                    <li>
                        <Link to="/register" className="linkClass">
                            <FaUserPlus size={12} color="333"/>
                            Registrar
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="linkClass">
                            <FaUserLock size={12} color="333"/>
                            Entrar
                        </Link>
                    </li>
                </ul>
            </div>

            <div id="cart" className="header-list" onMouseOver={getCart}>
                <Link to="/cart" className="header-list-title">
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
