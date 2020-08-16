import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';

function Register() {
    return(

        <div className="register-page">
            <div className="register-content">
                <div class="register-form">
                    <form>
                        <h1>Registrar</h1>

                        <div class="form-group">
                            <input type="text" name="user" placeholder="Nome completo" />
                            <span class="input-icon"><i class="fa fa-user"></i></span>
                        </div>

                        <div class="form-group">
                            <input type="email" name="email" placeholder="E-mail" />
                            <span class="input-icon"><i class="fa fa-envelope"></i></span>
                        </div>
                        <div class="form-group">
                            <input type="password" name="psw" placeholder="Senha" />
                            <span class="input-icon"><i class="fa fa-lock"></i></span>
                        </div>      
                        <div class="form-group">
                            <input type="password" name="psw" placeholder="Confirmar senha" />
                            <span class="input-icon"><i class="fa fa-lock"></i></span>
                        </div>      
                        <button type="submit" class="register-btn">Registrar</button>      
                        <Link to="/login" class="reset-psw">Já tem uma conta?</Link>
                        
            
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;