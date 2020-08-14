import React from 'react';
import {FaShoppingCart, FaTrash, FaMinus, FaPlus, FaTruck, FaCreditCard, FaBarcode, FaArrowRight} from 'react-icons/fa'
import imgExample from '../../assets/linha-gamer.jpg'
import './styles.css'

function Cart() {
    return(
        <div className="cart-page">
            <div className="cart-shop">

                <h1><span><FaShoppingCart /></span>Carrinho de compras</h1>
            </div>

            <div className="shop-info">

                <ul className="shop-table">
                    <li><img src={imgExample} alt="Item do Carrinho"/><span className="productName">Mouse Gamer Motospeed V40 FMSMS0004PTOM 4000 DPI RGB Preto</span><span><a><FaMinus/></a> <span>1</span> <a><FaPlus /></a></span> <span>R$ 366,67</span> <span className="trashIcon"><a><FaTrash /></a></span></li>

                    <li><img src={imgExample} alt="Item do Carrinho"/><span className="productName">Mouse Gamer Motospeed V40 FMSMS0004PTOM 4000 DPI RGB Preto</span><span><a><FaMinus/></a> <span>1</span>  <a><FaPlus /></a></span> <span>R$ 366,67</span> <span className="trashIcon"><a><FaTrash /></a></span></li>

                    <li><img src={imgExample} alt="Item do Carrinho"/><span className="productName">Mouse Gamer Motospeed V40 FMSMS0004PTOM 4000 DPI RGB Preto</span><span><a><FaMinus/></a> <span>1</span>  <a><FaPlus /></a></span> <span>R$ 366,67</span> <span className="trashIcon"><a><FaTrash /></a></span></li>

                    <li><img src={imgExample} alt="Item do Carrinho"/><span className="productName">Mouse Gamer Motospeed V40 FMSMS0004PTOM 4000 DPI RGB Preto</span><span><a><FaMinus/></a> <span>1</span>  <a><FaPlus /></a></span> <span>R$ 366,67</span> <span className="trashIcon"><a><FaTrash /></a></span></li>
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
                    <li><span className="truckIcon"><FaTruck /></span> <span>Calcular Frete</span> <input type="text" placeholder="CEP"/> <button type="submit">Calcular</button></li>
                </ul>

                <ul className="finalize">
                    <li><button><span className="arrowRight"><FaArrowRight /></span> Finalizar Compra</button></li>
                </ul>
            </div>
        </div>
    );
}

export default Cart;