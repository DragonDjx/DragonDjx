import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

function Login() {
    function validaForm (frm) {

        frm.preventDefault()
        /*
        o parâmetro frm desta função significa: this.form,
        pois a chamada da função - validaForm(this) foi
        definida na tag form.

        The param frm means: this.form,
        because the function call - validaForm(this) was 
        defined in the tag form
        */

        //Verifica se o campo nome foi preenchido e
        //contém no mínimo três caracteres.


        //o campo e-mail precisa de conter: "@", "." e não pode estar vazio
        //the input e-mail must have: "@", "." and not empty
        if(frm.target.email.value.indexOf("@") === -1 ||
        frm.target.email.value.indexOf(".") === -1 ||
        frm.target.email.value === "" ||
        frm.target.email.value === null) {
            alert("Por favor, indique um e-mail válido.");
            frm.target.email.focus();
            return false;
        }
        
        if(frm.target.psw.value === "" || frm.target.psw.value === null || frm.target.psw.value.lenght < 3) {
            //É mostrado um alerta, caso o campo esteja vazio.
            // Show an alert, if the input is empty
            alert("Por favor, indique a sua senha.");
            //Foi definido um focus no campo.
            //Was defined a focus on input
            frm.target.psw.focus();
            //o form não é enviado.
            //The form isn´t sent
            return false;
        }


        else {
            alert('teste')
        }
    }

    return(
        <div className="login-page">
            <div className="content-login">

                <div className="login-form">
                    <form onSubmit={e => validaForm(e)}>
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