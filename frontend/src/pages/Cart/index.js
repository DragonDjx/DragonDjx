import React from 'react';
import { Link } from 'react-router-dom';
import {FaShoppingCart, FaTrash, FaMinus, FaPlus, FaTruck, FaCreditCard, FaBarcode, FaArrowRight} from 'react-icons/fa';

import imgExample from '../../assets/linha-gamer.jpg';

import './styles.css';

function Cart() {
    return(
        <div className="cart-page">
            <div className="cart-shop">

                <h1><span><FaShoppingCart /></span>Carrinho de compras</h1>
            </div>

            <div className="shop-info">

                <ul className="shop-table">
                    <li>
                        <img src={imgExample} alt="Item do Carrinho"/>
                        <span className="productName">Mouse Gamer Motospeed V40 FMSMS0004PTOM 4000 DPI RGB Preto</span>
                        <span>
                            <Link to="/"><FaMinus/></Link>
                            <span>1</span>
                            <Link to="/"><FaPlus /></Link>
                        </span>
                        <span>R$ 366,67</span>
                        <span className="trashIcon">
                            <Link to="/"><FaTrash /></Link>
                        </span>
                    </li>

                    <li>
                        <img src={imgExample} alt="Item do Carrinho"/>
                        <span className="productName">Mouse Gamer Motospeed V40 FMSMS0004PTOM 4000 DPI RGB Preto</span>
                        <span>
                            <Link to="/"><FaMinus/></Link>
                            <span>1</span>
                            <Link to="/"><FaPlus /></Link>
                        </span>
                        <span>R$ 366,67</span>
                        <span className="trashIcon">
                            <Link to="/"><FaTrash /></Link>
                        </span>
                    </li>

                    <li>
                        <img src={imgExample} alt="Item do Carrinho"/>
                        <span className="productName">Mouse Gamer Motospeed V40 FMSMS0004PTOM 4000 DPI RGB Preto</span>
                        <span>
                            <Link to="/"><FaMinus/></Link>
                            <span>1</span>
                            <Link to="/"><FaPlus /></Link>
                        </span>
                        <span>R$ 366,67</span>
                        <span className="trashIcon">
                            <Link to="/"><FaTrash /></Link>
                        </span>
                    </li>

                    <li>
                        <img src={imgExample} alt="Item do Carrinho"/>
                        <span className="productName">Mouse Gamer Motospeed V40 FMSMS0004PTOM 4000 DPI RGB Preto</span>
                        <span>
                            <Link to="/"><FaMinus/></Link>
                            <span>1</span>
                            <Link to="/"><FaPlus /></Link>
                        </span>
                        <span>R$ 366,67</span>
                        <span className="trashIcon">
                            <Link to="/"><FaTrash /></Link>
                        </span>
                    </li>
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
                    <li><span className="truckIcon"><FaTruck /></span> <span>Calcular Frete</span> <input type="text" placeholder="CEP"  maxlength="8" autocomplete="off"/> <button type="submit">Calcular</button></li>

                </ul>

                <ul className="finalize">
                    <li><button><span className="arrowRight"><FaArrowRight /></span> Finalizar Compra</button></li>
                </ul>
            </div>
        </div>
    );
}

export default Cart;