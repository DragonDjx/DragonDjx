import React from 'react';
import { FaShoppingCart, FaPlus } from 'react-icons/fa';

import './styles.css';

export default function ProductList(products) {
    function handleClick(e) {
        e.preventDefault();
    };

    function addToCart(product) {
        const cart = JSON.parse(localStorage.getItem('cart'));

        cart.push(product);

        localStorage.setItem('cart', JSON.stringify(cart));
    };

    return (
        <ul className="product-list">
            {products.map(product => (
                <li key={product.id}>
                    <img src={`http://192.168.0.10:3333/files/${product.image.key}`} alt="Produto" />

                    <h4>{product.title}</h4>

                    <p className="value">{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)} à vista</p>

                    <p className="parceled">
                        12x de {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.parceled / 12)} sem juros</p>

                    <div className="buttons">
                        <button>
                            <FaPlus size={10} color="#08acf8" />
                            Detalhes
                        </button>

                        <button onClick={(e) => { handleClick(e); addToCart(product); }}>
                            <FaShoppingCart size={10} color="#08acf8" />
                            Comprar
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}






