import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';

const Register = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        const {email, password} = Object.fromEntries(new FormData(e.currentTarget));

        authService.register(email, password)
            .then(authData => {
                login(authData);

                navigate('/');
            });
    };

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={registerSubmitHandler}>
                <div className="container">
                    <article className="brand-logo-container">
                        <img className="brand-logo" src="/images/VapeManiacsLogo-nobg.png" alt="logo" />
                    </article>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com" />

                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <Link className="here" to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
};

export default Register;