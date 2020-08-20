import React, { useState, useEffect } from 'react';
import {FaCheck, FaCreditCard, FaBarcode, FaTruck, FaShoppingCart} from 'react-icons/fa';
import {BsAward} from 'react-icons/bs';

import api from '../../services/api';

import './styles.css';

function Products(props) {
    const productName = props.match.params.productName;
    const [product, setProduct] = useState('');
    const [images, setImages] = useState([]);

    useEffect( () => {
        if (product === '') {
            api.post('/products/info', { title: productName }).then(response => {
                setProduct(response.data);
                setImages(response.data.images);
            });
        };
    });

    const [imageSlide, setImageSlide] = useState([]);

    function setTheImageSlide(event) {
        setImageSlide(event.target.src);
    };

    return(
        <div className="products-page">
            <div className="product-build">
                
                <div className="productInfo">

                    <div className="slide-show">
                        <ul>
                            {images.slice(0, 4).map(image => (
                                <li key={image.id}>
                                    <img src={image.url} alt="" onClick={e => setTheImageSlide(e)} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="showProduct">
                        <ul>
                            {/* Não tira o ID "myImage" */}
                            <li className="zoom" ><img id="myImage" src={imageSlide != null && imageSlide.length !== 0 ? imageSlide : images.slice(0, 1).map(image => image.url)} alt="" /></li>

                        </ul>
                    </div>
 
                    <div className="productDescription">
                        <ul>
                            <li className="productTitle infoProduct">{ product.title }</li>

                            <li className="productDisp infoProduct">
                                <span className="iconClass">
                                    <FaCheck />
                                </span>
                                Produto Disponível
                            </li>

                            <li className="productPrice infoProduct">
                                <span className="iconClass">
                                    <FaCreditCard />
                                </span>
                                <span className="price">{
                                    Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(product.parceled)
                                } no cartão
                                </span> <br />
                                <span className="price">
                                    12x de {
                                        Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(product.price)
                                    }
                                </span>
                                sem juros no cartão
                                <button className="buyButton">
                                    <span className="arrowRight">
                                        <FaShoppingCart />
                                    </span>
                                    Comprar
                                </button>
                            </li>
                            
                            <li className="productPriceCard infoProduct">
                                <span className="iconClass">
                                    <FaBarcode />
                                </span>{
                                    Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(product.price)
                                } à vista
                            </li>
                        </ul>

                        <ul>
                            <li className="shipping"><span className="truckIcon"><FaTruck /></span> <span>Calcular Frete</span> <input type="text" placeholder="CEP"  maxLength="8" autoComplete="off"/> <button type="submit">Calcular</button></li>
                        </ul>

                        <ul>
                            <li className="garanted"><span className="iconClass"><BsAward /></span> Garantia de 1 ano</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Products;