import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import { types, NotificationContext } from '../../contexts/NotificationContext';
import * as authService from '../../services/authService';

const Register = () => {
    const navigate = useNavigate();
    const { showNotification } = useContext(NotificationContext);
    const { login } = useAuthContext();

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        const {email, password, repass} = Object.fromEntries(new FormData(e.currentTarget));

        if (email === '' || password === '' || repass === '') {
            return showNotification('All fields are required!', types.warning);
        }else if (password !== repass) {
            return showNotification('Passwords don\'t match!', types.warning);
        }

        authService.register(email, password)
            .then(authData => {
                login(authData);
                showNotification('You signed up successfully!', types.success);
                navigate('/');
            });
    };

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={registerSubmitHandler}>
                <div className="container">
                    <article className="brand-logo-container">
                        <img className="brand-logo" src="https://res.cloudinary.com/raggae/image/upload/v1639958298/VapeManiacs/VapeManiacsLogo-nobg_i9tetz.png" alt="logo" />
                    </article>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com" />

                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="repass" id="repass" />

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