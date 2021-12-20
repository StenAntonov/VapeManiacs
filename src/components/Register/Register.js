import { Link } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

    function registerSubmitHandler(e) {
        e.preventDefault();

        const serverUrl = 'http://localhost:3030';

       fetch(`${serverUrl}/users/Register`, {
            method: 'POST',
            headers: {
             'Content-Type': 'application/json'
             },
            body: JSON.stringify({email, password})
        })
        .then(res => res.json());
        // const fetchAPI = {
        //     post: (url, data) => {
        //         return fetch(url, {
        //             method: 'POST',
        //             credentials: 'include',
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify(data)
        //         })
        //             .then(res => res.json());
        //     },};
        // const UserService = {
        //     register: (userData) => fetchAPI.post(`${serverUrl}/users/register` , userData),
        // };
        // UserService
        //         .register({ email, password })
        //         .then(res => {
        //             if (res.err) {throw new Error(res.message);};
        //             console.log(res);
        //         })
        //         .catch(console.error);
    }

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={registerSubmitHandler}>
                <div className="container">
                    <article className="brand-logo-container">
                        <img className="brand-logo" src="../images/VapeManiacsLogo-nobg.png" alt="logo" />
                    </article>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email"
                        id="email" 
                        name="email" 
                        placeholder="maria@email.com"
                        onChange={(e) => setEmail(e.target.value)}
                     />

                    <label htmlFor="pass">Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="register-password" 
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" />

                    <input 
                    className="btn submit" 
                    type="submit" 
                    value="Register" 
                    />

                    <p className="field">
                        <span>If you already have profile click <Link className="here" to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
};

export default Register;