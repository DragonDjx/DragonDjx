import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import './styles.css';
import './responsive.css';

import linhaGamer from '../../assets/linha-gamer.jpg';
import linhaHome from '../../assets/linha-home.jpg';
import linhaMonte from '../../assets/linha-monte.jpg';

import ProductList from '../partials/ProductList';

export default function Home() {
    const [bestSellers, setBestSellers] = useState([]);

    useEffect(() => {
        api.get('products/bestSellers?limit=5').then(response => {
            setBestSellers(response.data);
        })
    });

    return (
        <div className="home-page">
            <div className="pc-build">
                <h2>Escolha sua linha e comece sua jornada</h2>

                <ul className="build-list">
                    <li className="linha-home">
                        <img src={linhaHome} alt="Linha home"/>
                        <h3 className="home">Linha Home</h3>
                        <p className="home fade-down">Melhore a sua experiência casual</p>
                    </li>
                    <li className="linha-gamer">
                        <img src={linhaGamer} alt="Linha gamer"/>
                        <h3 className="gamer">Linha Gamer</h3>
                        <p className="gamer fade-down">Destrua seus oponentes com potência</p>
                    </li>
                    <li className="linha-monte">
                        <img src={linhaMonte} alt="Linha monte seu pc"/>
                        <h3 className="monte">Monte Seu Pc</h3>
                        <p className="monte fade-down">Monte um monstro de acordo com seu gosto</p>
                    </li>
                </ul>
            </div>

            <div className="best-sellers">
                <h2>PRODUTOS MAIS VENDIDOS</h2>

                {ProductList(bestSellers)}
            </div>
        </div>
    )
};