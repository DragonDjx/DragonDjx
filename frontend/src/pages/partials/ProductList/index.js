import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaShoppingCart, FaPlus } from 'react-icons/fa';

import './styles.css';
import './responsive.css';

export default function ProductList(products) {
    const history = useHistory();
    
    function productDetails(e, product) {
        console.log(e.type)
        e.preventDefault();

        const productName = product.title;
        history.push(`/produtos/${productName}`);
    };

    function addToCart(e, product) {
        e.preventDefault();

        const cart = JSON.parse(localStorage.getItem('cart'));
        cart.push(product);

        localStorage.setItem('cart', JSON.stringify(cart));
    };

    return (
        <ul className="product-list">
            {products.map(product => (
                <li className="product" key={product.id}>
                    <img
                        className="product-img"
                        src={product.image.url}
                        alt="Produto"
                        onClick={e => productDetails(e, product)}
                    />

                    <h4 className="product-name" onClick={e => productDetails(e, product)}>{product.title}</h4>

                    <p className="value">{
                        Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(product.price)
                    } à vista</p>

                    <p className="parceled">
                        12x de {
                            Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(product.parceled / 12)
                        } sem juros</p>

                    <div className="buttons">
                        <button className="details" onClick={e => productDetails(e, product)}>
                            <FaPlus size={14} color="#08acf8" />
                            Detalhes
                        </button>

                        <button className="purchase" onClick={e => addToCart(e, product)}>
                            <FaShoppingCart size={14} color="#08acf8" />
                            Comprar
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}






