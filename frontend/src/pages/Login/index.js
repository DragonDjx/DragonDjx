import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

function Login() {

    return(
        <div className="login-page">
            <div className="content-login">

                <div class="login-form">
                    <form>
                        <h1>Login</h1>
                        <div class="form-group">
                            <input type="email" name="email" placeholder="E-mail" />
                            <span class="input-icon"><i class="fa fa-envelope"></i></span>
                        </div>
                        <div class="form-group">
                            <input type="password" name="psw" placeholder="Senha" />
                            <span class="input-icon"><i class="fa fa-lock"></i></span>
                        </div>      
                        <button type="submit" class="login-btn">Login</button>      
                        <Link to="/esquecer" class="reset-psw">Esqueceu sua senha?</Link>
                        <div class="seperator"><b>ou</b></div>
                        <Link to="/registrar" class="reset-psw">Crie sua conta</Link>
                        
            
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;