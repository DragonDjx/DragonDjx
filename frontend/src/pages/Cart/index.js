import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaShoppingCart, FaTrash, FaMinus, FaPlus, FaTruck, FaCreditCard, FaBarcode, FaArrowRight} from 'react-icons/fa';
import { FiArrowLeft } from 'react-icons/fi';

import calcPrecoPrazo from '../../services/correios';

import './styles.css';

function Cart() {
    const [cart, setCart] = useState('');
    const [cartTotal, setCartTotal] = useState('');
    const [cep, setCep] = useState('');
    
    if (cart === '') {
        if (localStorage.getItem('cart') == null) {
            localStorage.setItem('cart', "[]");
        } else {
            setCart(JSON.parse(localStorage.getItem('cart')));
        }
    }

    function getCartTotal() {
        if (cart.length !== 0 || cart !== '') {
            if (cartTotal === '' || cartTotal.total === 0) {
                let [subtotal, subtotalParceled, frete, total, totalParceled] = [0, 0, 0, 0, 0];
                
                cart.forEach(product => {
                    subtotal += product.price;
                    subtotalParceled += product.parceled;
                });
    
                total = subtotal + frete;
                totalParceled = subtotalParceled + frete;
    
                setCartTotal({subtotal, subtotalParceled, frete, total, totalParceled});
            };
        };
    };

    async function getFrete(e) {
        e.preventDefault();

        let {subtotal, subtotalParceled, frete, total, totalParceled} = cartTotal;
        
        const origin = "13480010";
        const correiosResponse = await calcPrecoPrazo(origin, cep);
        
        frete = correiosResponse.Valor;
        total = cartTotal.subtotal + frete;
        totalParceled = cartTotal.subtotalParceled + frete;
        
        setCartTotal({subtotal, subtotalParceled, frete, total, totalParceled});
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

    function renderCart() {
        if (cart.length === 0) {
            return (
                <div className="cartEmpty">
                    <p>Desculpa, não encontramos nenhum item em seu carrinho {":("} </p>

                    <Link to="/" className="backButton">
                        <span>
                            <FiArrowLeft/>
                        </span>
                        <strong>Voltar ao inicio</strong>
                    </Link>
                </div>
            )
        } else {
            getCartTotal();

            return (
                <div className="shop-info">
                    <ul className="shop-table">
                        {cart.map( product => (
                            <li key={product.id} id={product.id}>
                                <img src={product.image.url} alt="Produto"/>
        
                                <h4 className="title">{product.title}</h4>
        
                                <p className="value">{
                                    Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(product.price)
                                }</p>

                                <div className="quantity">
                                    <FaMinus />
                                    <p>1</p>
                                    <FaPlus />
                                </div>
                            
                                <FaTrash size={14} className="trashIcon" onClick={e => removeProduct(e, product.id)}/>
                            </li>
                        ))}
                    </ul>

                <ul className="price-table">
                    <li>
                        <h4>Subtotal</h4>
                        <p className="price">{
                            Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(cartTotal.subtotalParceled)
                        }</p>
                    </li>

                    <li>
                        <h4>Frete</h4>
                        <p className="price">{
                            Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(cartTotal.frete)
                        }</p>
                    </li>

                    <li>
                        <h4>Total</h4>
                        <p className="price">{
                            Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(cartTotal.totalParceled)
                        }</p>
                    </li>

                    <li>
                        <h3>
                            <FaCreditCard />
                            12x de {
                                Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(cartTotal.totalParceled /12)
                            }<br />
                            s/ juros
                        </h3>
                    </li>

                    <li>
                        <h3>
                            <FaBarcode />{
                                Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(cartTotal.total)
                            }<br />
                            com desconto à vista
                        </h3>
                    </li>
                </ul>

                <ul className="shipping">
                    <li>
                        <FaTruck className="truckIcon" />
                        <p>Calcular Frete</p>
                        <form id="cep" onSubmit={ getFrete }>
                            <input
                                type="text"
                                placeholder="CEP"
                                maxLength="8"
                                autoComplete="off"
                                value={cep}
                                onChange={e => setCep(e.target.value)}
                            />
                            <button type="submit">Calcular</button>
                        </form>
                    </li>

                </ul>

                <ul className="finalize">
                    <li>
                        <button>
                            <FaArrowRight size={24} className="arrowRight" />
                            Finalizar Compra
                        </button>
                    </li>
                </ul>
            </div>
            )
        }
    }

    return (
        <div className="cart-page">
            <div className="cart-shop">
                <h1><FaShoppingCart /> Carrinho de compras</h1>
            </div>
            {renderCart()}
        </div>
    )
}

export default Cart;