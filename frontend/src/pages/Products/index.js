import React, { useState } from 'react';
import {FaCheck, FaCreditCard, FaBarcode, FaTruck, FaShoppingCart} from 'react-icons/fa'
import {BsAward} from 'react-icons/bs'
import imgExample from '../../assets/linha-gamer.jpg';
import imgExample2 from '../../assets/linha-home.jpg';
import imgExample3 from '../../assets/linha-monte.jpg';

import './styles.css';

function Products() {
    
    const [imageSlide, setImageSlide] = useState([])


    function setTheImageSlide(event) {

        setImageSlide(event.target.src)
    }

   
    return(
        <div className="products-page">
            <div className="product-build">
                
                <div className="productInfo">

                    <div className="slide-show">
                        <ul>
                            <li><img src={imgExample} alt="" onClick={e => setTheImageSlide(e)} /></li>
                            <li><img src={imgExample2} alt="" onClick={e => setTheImageSlide(e)} /></li>
                            <li><img src={imgExample3} alt="" onClick={e => setTheImageSlide(e)} /></li>
                            <li><img src={imgExample} alt="" onClick={e => setTheImageSlide(e)} /></li>
                        </ul>
                    </div>

                    <div className="showProduct">
                        <ul>
                            {/* Não tira o ID "myImage" */}
                            <li className="zoom" ><img id="myImage" src={imageSlide != null && imageSlide.length !== 0 ? imageSlide : imgExample} alt="" /></li>

                        </ul>
                    </div>
 
                    <div className="productDescription">
                        <ul>
                            <li className="productTitle infoProduct">GABINETE GAMER COUGAR MX410-T VIDRO TEMP, 385VM60.0003</li>

                            <li className="productDisp infoProduct"><span className="iconClass"><FaCheck /></span>Produto Disponível</li>
                            <li className="productPrice infoProduct"><span className="iconClass"><FaCreditCard /></span><span className="price">R$340,80</span> <br /><span className="price">10x de R$34,08</span>sem juros no cartão <button className="buyButton"><span className="arrowRight"><FaShoppingCart /></span>Comprar</button> </li>
                            <li className="productPriceCard infoProduct"><span className="iconClass"><FaBarcode /></span>à vista R$299,90</li>
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