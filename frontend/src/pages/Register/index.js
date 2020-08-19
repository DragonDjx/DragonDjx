import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';

function Register() {
    return(

        <div className="register-page">
            <div className="register-content">
                <div className="register-form">
                    <form>
                        <h1>Registrar</h1>

                        <div className="form-group">
                            <input type="text" name="user" placeholder="Nome completo" />
                            <span className="input-icon"><i className="fa fa-user"></i></span>
                        </div>

                        <div className="form-group">
                            <input type="email" name="email" placeholder="E-mail" />
                            <span className="input-icon"><i className="fa fa-envelope"></i></span>
                        </div>
                        <div className="form-group">
                            <input type="password" name="psw" placeholder="Senha" />
                            <span className="input-icon"><i className="fa fa-lock"></i></span>
                        </div>      
                        <div className="form-group">
                            <input type="password" name="psw" placeholder="Confirmar senha" />
                            <span className="input-icon"><i className="fa fa-lock"></i></span>
                        </div>      
                        <button type="submit" className="register-btn">Registrar</button>      
                        <Link to="/login" className="reset-psw">Já tem uma conta?</Link>
                        
            
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;