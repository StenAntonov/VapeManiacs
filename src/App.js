import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Blog from './components/Blog';
import Catalog from './components/VapeCatalog';
import Create from './components/Create';
import MyVapes from './components/MyVapes';
import Details from './components/Details';
import Edit from './components/Edit';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Register from './components/Register';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';

function App() {
    const [user, setUser] = useState({
        _id: '',
        email: '',
        accessToken: ''
    });

    const login = (authData => {
        setUser(authData);
    });

    return (
        <AuthContext.Provider value={{user, login}}>
        <div id="container">
            <Header />

            <main id="site-content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/edit" element={<Edit />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/my-vapes" element={<MyVapes />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            
            <Footer />
        </div>
        </AuthContext.Provider>
    );
}

export default App;
