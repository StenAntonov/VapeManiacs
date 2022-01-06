import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { types, NotificationContext } from '../../contexts/NotificationContext';

import * as authService from '../../services/authService';

const Login = () => {
    const { showNotification } = useContext(NotificationContext);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');

        if (email === '' || password === '') {
            return showNotification('All fields are required!', types.warning);
        }
        
        authService.login(email,password)
            .then((authData) => {
                console.log('login');
                console.log(authData);
                
                login(authData);
                showNotification('You logged in successfully!', types.success);
                navigate('/');
            })
            .catch(err => {
                return showNotification('Username and password don\'t match!', types.error);
            });

        };

    return (
        <section id="login-page" className="auth">
            <form onSubmit={onLoginHandler} id="login">
                <div className="container">
                    <article className="brand-logo-container">
                        <img className="brand-logo" src="https://res.cloudinary.com/raggae/image/upload/v1639958298/VapeManiacs/VapeManiacsLogo-nobg_i9tetz.png" alt="logo" />
                    </article>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="example@gmail.com" />
                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <Link className="here" to="/register">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
};

export default Login;