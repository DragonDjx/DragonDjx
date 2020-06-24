import React, { useState, useEffect } from 'react';
import { FaAngleDown, FaSearch, FaUser, FaShoppingCart, FaPlus } from 'react-icons/fa';

import Header from '../partials/Header';

import api from '../../services/api';
import './styles.css';

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get('products').then(response => {
            setProducts(response.data);
        })
    });

    return (
        <div className="home-page">
            <Header />

            <div className="content">
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            <img src={product.image} alt="Imagem" />

                            <h4>{product.title}</h4>

                            <p className="value">{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.value)} à vista</p>

                            <p className="parceled">12x de R$ 24,90 sem juros</p>

                            <div className="buttons">
                                <button>
                                    <FaPlus size={10} color="#08acf8" />
                                    Detalhes
                                </button>

                                <button>
                                    <FaShoppingCart size={10} color="#08acf8" />
                                    Comprar
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};