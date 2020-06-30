import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaPlus } from 'react-icons/fa';

import api from '../../services/api';
import './styles.css';

import linhaGamer from '../../assets/linha-gamer.jpg';
import linhaHome from '../../assets/linha-home.jpg';
import linhaMonte from '../../assets/linha-monte.jpg';

export default function Home() {
    const [bestSellers, setBestSellers] = useState([]);

    useEffect(() => {
        api.get('products/bestSellers').then(response => {
            setBestSellers(response.data);
        })
    });

    function handleClick(e) {
        e.preventDefault();
    }

    function addToCart(product) {
        const cart = JSON.parse(localStorage.getItem('cart'));

        cart.push(product);

        localStorage.setItem('cart', JSON.stringify(cart));
    }

    return (
        <div className="home-page">
            <div className="pc-build">
                <h2>Escolha sua linha e comece sua jornada</h2>

                <ul>
                    <li>
                        <img src={linhaHome} alt="Linha home"/>
                        <h3 className="home">Linha Home</h3>
                        <p className="home fade-down">Melhore a sua experiência casual</p>
                    </li>
                    <li>
                        <img src={linhaGamer} alt="Linha gamer"/>
                        <h3 className="gamer">Linha Gamer</h3>
                        <p className="gamer fade-down">Destrua seus oponentes com potência</p>
                    </li>
                    <li>
                        <img src={linhaMonte} alt="Linha monte seu pc"/>
                        <h3 className="monte">Monte Seu Pc</h3>
                        <p className="monte fade-down">Monte um monstro de acordo com seu gosto</p>
                    </li>
                </ul>
            </div>

            <div className="best-sellers">
                <h2>PRODUTOS MAIS VENDIDOS</h2>
            </div>
            
            <ul>
                {bestSellers.map(product => (
                    <li key={product.id}>
                        <img src={product.image.url} alt="Produto" />

                        <h4>{product.title}</h4>

                        <p className="value">{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)} à vista</p>

                        <p className="parceled">
                            12x de {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.parceled / 12)} sem juros</p>

                        <div className="buttons">
                            <button>
                                <FaPlus size={10} color="#08acf8" />
                                Detalhes
                            </button>

                            <button onClick={(e) => {handleClick(e);addToCart(product);}}>
                                <FaShoppingCart size={10} color="#08acf8" />
                                Comprar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
};