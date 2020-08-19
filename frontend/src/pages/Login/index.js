import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

function Login() {

    return(
        <div className="login-page">
            <div className="content-login">

                <div className="login-form">
                    <form>
                        <h1>Login</h1>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="E-mail" />
                            <span className="input-icon"><i className="fa fa-envelope"></i></span>
                        </div>
                        <div className="form-group">
                            <input type="password" name="psw" placeholder="Senha" />
                            <span className="input-icon"><i className="fa fa-lock"></i></span>
                        </div>      
                        <button type="submit" className="login-btn">Login</button>      
                        <Link to="/esquecer" className="reset-psw">Esqueceu sua senha?</Link>
                        <div className="seperator"><b>ou</b></div>
                        <Link to="/registrar" className="reset-psw">Crie sua conta</Link>
                        
            
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;