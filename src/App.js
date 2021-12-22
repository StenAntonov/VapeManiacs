import { Routes, Route } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';
import useLocalStorage from './hooks/useLocalStorage';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Blog from './components/Blog';
import Blog2 from './components/Blog/Blog2';
import Blog3 from './components/Blog/pages/Blog3';
import Blog4 from './components/Blog/pages/Blog4';
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
import Logout from './components/Logout';

const initialAuthState = {
    _id: '',
    email: '',
    accessToken: ''
};

function App() {
    const [user, setUser] = useLocalStorage('user', initialAuthState);

    const login = (authData => {
        setUser(authData);
    });

    const logout = () => {
        setUser(initialAuthState);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            <div id="container">
                <Header />

                <main id="site-content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/blog" element={<Blog />}/>
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/edit/:id" element={<Edit />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
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
