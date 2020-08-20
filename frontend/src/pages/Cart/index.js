import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaShoppingCart, FaTrash, FaMinus, FaPlus, FaTruck, FaCreditCard, FaBarcode, FaArrowRight} from 'react-icons/fa';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

function Cart() {
    const [cart, setCart] = useState('');
    
    if (cart === '') {
        if (localStorage.getItem('cart') == null) {
            localStorage.setItem('cart', "[]");
        } else {
            setCart(JSON.parse(localStorage.getItem('cart')));
        }
    }

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
                    <li>Subtotal <span className="price">R$ 366,67</span></li>
                    <li>Frete <span className="price">R$ 000</span></li>
                    <li>Total <span className="price">R$ 366,67</span></li>

                    <li> <span><FaCreditCard /></span>12x de R$ 69,91 <br />
                    s/ juros</li>

                    <li><span><FaBarcode /></span>R$ 729,90 <br />
                    com desconto à vista</li>

                </ul>

                <ul className="shipping">
                    <li>
                        <FaTruck className="truckIcon" />
                        <p>Calcular Frete</p>
                        <input type="text" placeholder="CEP"  maxLength="8" autoComplete="off"/>
                        <button type="submit">Calcular</button>
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