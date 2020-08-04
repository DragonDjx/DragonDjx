import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import {FaShoppingCart} from "react-icons/fa";
import { FiArrowLeft } from 'react-icons/fi';

export default function CartEmpty() {

    return (
        <div className="cartEmpty">
            <div className="advertment">
                
                <h1><span><FaShoppingCart /></span> Carrinho de compras</h1>

                <p>Desculpa, não encontramos nenhum item em seu carrinho :( </p>


                <Link to="/">
                    <span>
                        <FiArrowLeft/>
                    </span>
                    <strong>Voltar ao inicio</strong>
                </Link>
            </div>

            
        </div>
    )
};