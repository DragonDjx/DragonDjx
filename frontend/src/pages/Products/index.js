import React, { useState, useEffect } from 'react';
import {FaCheck, FaCreditCard, FaBarcode, FaTruck, FaShoppingCart} from 'react-icons/fa';
import {BsAward} from 'react-icons/bs';

import api from '../../services/api';

import './styles.css';

function Products(props) {
    const productName = props.match.params.productName;
    const [product, setProduct] = useState('');
    const [images, setImages] = useState([]);

    const [currentImage, setCurrentImage] = useState('');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect( () => {
        setCurrentImage(images[currentImageIndex]);

        if (product === '') {
            api.post('/products/info', { title: productName }).then(response => {
                setProduct(response.data);
                setImages(response.data.images);
            });
        };
    }, [images, currentImageIndex, product, productName]);

    function toggleHide(e) {
        e.classList.toggle("hide");
    }
    
    function imageZoom(imgID, resultID) {
        var img, lens, result, cx, cy;
        img = document.getElementById(imgID);
        result = document.getElementById(resultID);
        
        if (img !== null && result !== null) {
            toggleHide(result);
            /*create lens:*/
            if (document.querySelectorAll("div.img-zoom-lens").length === 0) {
                lens = document.createElement("DIV");
                lens.setAttribute("class", "img-zoom-lens");
                /*insert lens:*/
                img.parentElement.insertBefore(lens, img);
            } else {
                lens = document.querySelector("div.img-zoom-lens");
            };
            /*calculate the ratio between result DIV and lens:*/
            cx = result.offsetWidth / lens.offsetWidth;
            cy = result.offsetHeight / lens.offsetHeight;
            /*set background properties for the result DIV:*/
            result.style.backgroundImage = "url('" + img.src + "')";
            result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
            /*execute a function when someone moves the cursor over the image, or the lens:*/
            lens.addEventListener("mousemove", moveLens);
            img.addEventListener("mousemove", moveLens);
            /*and also for touch screens:*/
            lens.addEventListener("touchmove", moveLens);
            img.addEventListener("touchmove", moveLens);
        };

        function moveLens(e) {
          var pos, x, y;
          /*prevent any other actions that may occur when moving over the image:*/
          e.preventDefault();
          /*get the cursor's x and y positions:*/
          pos = getCursorPos(e);
          /*calculate the position of the lens:*/
          x = pos.x - (lens.offsetWidth / 2);
          y = pos.y - (lens.offsetHeight / 2);
          /*prevent the lens from being positioned outside the image:*/
          if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
          if (x < 0) {x = 0;}
          if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
          if (y < 0) {y = 0;}
          /*set the position of the lens:*/
          lens.style.left = x + "px";
          lens.style.top = y + "px";
          /*display what the lens "sees":*/
          result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
        }
        function getCursorPos(e) {
          var a, x = 0, y = 0;
          e = e || window.event;
          /*get the x and y positions of the image:*/
          a = img.getBoundingClientRect();
          /*calculate the cursor's x and y coordinates, relative to the image:*/
          x = e.pageX - a.left;
          y = e.pageY - a.top;
          /*consider any page scrolling:*/
          x = x - window.pageXOffset;
          y = y - window.pageYOffset;
          return {x : x, y : y};
        }
    }

    return(
        <div className="products-page">
            <div className="product-build">
                
                <div className="productInfo">

                    <div className="slide-show">
                        <ul>
                            {images.slice(0, 4).map(image => (
                                <li key={image.id}>
                                    <img src={image.url} alt="" onClick={e => {
                                        setCurrentImageIndex(images.indexOf(image))
                                    }} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="showProduct">
                        <img
                            id="myImage"
                            src={ currentImage !== undefined ? currentImage.url : "" }
                            alt={ images.slice(0, 1).map(image => image.url) }
                            onMouseOver={() => imageZoom('myImage', 'myresult')}
                            onMouseOut={ () => {
                                const element = document.getElementById("myresult");
                                toggleHide(element)
                            }}
                        />
                    </div>
 
                    <div className="productDescription">
                        <div id="myresult" className="img-zoom-result hide" />
                        
                        <ul>
                            <li className="productTitle">{ product.title }</li>

                            <li className="productDisp infoProduct">
                                <h2>
                                    <FaCheck className="iconClass" />
                                    Produto Disponível
                                </h2>
                            </li>

                            <li className="productPrice infoProduct">
                                <h4>
                                    <FaCreditCard className="iconClass" />
                                    <p className="price">{
                                        Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(product.parceled)
                                    } no cartão
                                    </p>
                                </h4>
                                <h4>
                                    <p className="price">
                                        12x de {
                                            Intl.NumberFormat('pt-BR', {
                                                style: 'currency',
                                                currency: 'BRL'
                                            }).format(product.price)
                                        }
                                    </p>
                                    sem juros no cartão
                                </h4>
                                <div className="buyButton">
                                    <button>
                                        <FaShoppingCart className="arrowRight" />
                                        Comprar
                                    </button>
                                </div>
                            </li>

                            <li className="productPriceCard infoProduct">
                                <h4>
                                    <FaBarcode className="iconClass" />{
                                        Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(product.price)
                                    } à vista
                                </h4>
                            </li>
                        </ul>

                        <ul>
                            <li className="shipping">
                                <h4>
                                    <FaTruck className="truckIcon" />
                                    <p>Calcular Frete</p>
                                </h4>
                                <input type="text" placeholder="CEP"  maxLength="8" autoComplete="off"/>
                                <button type="submit">Calcular</button>
                            </li>
                        </ul>

                        <ul>
                            <li className="garanted">
                                <BsAward className="iconClass" />
                                Garantia de 1 ano
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Products;