import { Link } from 'react-router-dom';

const Login = () => {
    
    return (
        <section id="login-page" className="auth">
            <form id="login">
                <div className="container">
                    <article className="brand-logo-container">
                        <img className="brand-logo" src="../images/VapeManiacsLogo-nobg.png" alt="logo" />
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