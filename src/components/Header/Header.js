import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Header = () => {
    const { user } = useContext(AuthContext);

    let guestNavigation = (
        <div id="guest">
            <li className="header-nav-ul-li-btn"><Link to="/login"><button className="header-nav-btn">Login / Register</button></Link></li>
        </div>
    );

    let userNavigation = (
        <div id="user">
            <li className="header-nav-ul-li"><Link to="/create" className="header-nav-ul-li-a">Create</Link></li>
            <li className="header-nav-ul-li"><Link to="/my-vapes" className="header-nav-ul-li-a">My Vapes</Link></li>
            <li className="header-nav-ul-li-btn"><Link to="/logout"><button className="header-nav-btn">Logout</button></Link></li>
        </div>
    );
    return (
        <header className="header">
            <article className="header-logo">
                <Link to="/"><img className="header-logo-img" src="/images/VapeManiacsNoBG.png" alt="VapeManiacs" /></Link>
            </article>
            <nav className="header-nav">
                <ul className="header-nav-ul">
                    <li className="header-nav-ul-li"><Link to="/" className="header-nav-ul-li-a">Home</Link></li>
                    <li className="header-nav-ul-li"><Link to="/blog" className="header-nav-ul-li-a">Blog</Link></li>
                    <li className="header-nav-ul-li"><Link to="/catalog" className="header-nav-ul-li-a">Catalog</Link></li>

                    {user.email 
                    ? userNavigation
                    : guestNavigation}

                </ul>
            </nav>
        </header>
    );
};

export default Header;