import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import notFoundImage from '../../assets/notFoundImage.png';
import logo from '../../assets/logo.svg';

import './styles.css';

export default function NotFoundPage() {
    
    function addCloredImage() {

        const imageName = document.querySelector('#imageNotFound');

        imageName.setAttribute('src', `${logo}`);
        imageName.style.width = '225px';
        imageName.style.height = '225px';

        return imageName;
    }

    function delCloredImage() {

        const imageName = document.querySelector('#imageNotFound');

        imageName.setAttribute('src', `${notFoundImage}`);
        
        return imageName;
    }

    return (
        <div className="notFoundPage">
            <div className="advertment">
                <h1><span id="emphasis">Ops !!</span> Página não encontrada, houve um erro :(</h1>
            

                <div onMouseOver={() => addCloredImage()} onMouseLeave={() => delCloredImage()}><img id="imageNotFound" src={notFoundImage} alt="Page Not Found"/></div>


                <h3>A página que você está tentando acessar não foi encontrada, verifique o link ou então volte a navegar </h3>

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