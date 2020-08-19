import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';

function Register() {

    function validaForm (frm) {

        frm.preventDefault()
        /*
        o parâmetro frm desta função significa: this.form,
        pois a chamada da função - validaForm(this) foi
        definida na tag form.
        */
        //Verifica se o campo nome foi preenchido e
        //contém no mínimo três caracteres.
        if(frm.target.user.value === "" || frm.target.user.value === null || frm.target.user.value.lenght < 3) {
            //É mostrado um alerta, caso o campo esteja vazio.
            alert("Por favor, indique o seu nome.");
            //Foi definido um focus no campo.
            frm.target.user.focus();
            //o form não é enviado.
            return false;
        }

        //o campo e-mail precisa de conter: "@", "." e não pode estar vazio
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
            alert("Por favor, indique o sua senha.");
            //Foi definido um focus no campo.
            frm.target.psw.focus();
            //o form não é enviado.
            return false;
        }

        if(frm.target.cpsw.value === "" || frm.target.cpsw.value === null || frm.target.cpsw.value.lenght < 3) {
            //É mostrado um alerta, caso o campo esteja vazio.
            alert("Por favor, confirme sua senha.");
            //Foi definido um focus no campo.
            frm.target.cpsw.focus();
            //o form não é enviado.
            return false;
        }

        else {
            alert('teste')
        }
    }

    return(

        <div className="register-page">
            <div className="register-content">
                <div className="register-form">
                    <form onSubmit={e => validaForm(e)}>
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
                            <input type="password" name="cpsw" placeholder="Confirmar senha" />
                            <span className="input-icon"><i className="fa fa-lock"></i></span>
                        </div>      
                        <button type="submit" className="register-btn" >Registrar</button>      
                        <Link to="/login" className="reset-psw">Já tem uma conta?</Link>
                        
            
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;