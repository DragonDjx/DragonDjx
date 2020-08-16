import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import './styles.css';

export default function Footer() {

    return (

        <footer>
            <div className="footer-info">

                <ul className="faq">
                    <li><h2>FAQ</h2></li>

                    <li><Link to="/">Como comprar</Link></li>
                    <li><Link to="/">Formas de pagamento</Link></li>
                    <li><Link to="/">Prazos e entregas</Link></li>
                    <li><Link to="/">Segurança</Link></li>
                </ul>
                
                <ul className="about">
                    
                    <li><h2>Sobre nós</h2></li>
                    <li><Link to="/">Termos e condições</Link></li>
                    <li><Link to="/">Sobre nós</Link></li>
                    <li><Link to="/">Trocas e devoluções</Link></li>
                    <li><Link to="/">TESTE</Link></li>
                    
                </ul>
            </div>
            

            <div className="copyright">Copyright © 2020 | Todos os direitos reservados

                <div className="icons">
                    <span className="face"><FaFacebookF /></span>
                    <span className="insta"><FaInstagram /></span>
                </div>
            </div>
        </footer>
    )
};