import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {

    return (

        <footer>
            <div className="footer-info">

                <ul className="faq">
                    <li><h2>FAQ</h2></li>

                    <li><Link>Como comprar</Link></li>
                    <li><Link>Formas de pagamento</Link></li>
                    <li><Link>Prazos e entregas</Link></li>
                    <li><Link>Segurança</Link></li>
                </ul>
                
                <ul className="about">
                    
                    <li><h2>Sobre nós</h2></li>
                    <li><Link>Termos e condições</Link></li>
                    <li><Link>Sobre nós</Link></li>
                    <li><Link>Trocas e devoluções</Link></li>
                    <li><Link>TESTE</Link></li>
                    
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