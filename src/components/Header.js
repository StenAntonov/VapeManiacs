import { Link } from 'react-router-dom';
// import * as vapeService from '../services/vapeService.js';

const Header = () => {
    // const onLogout = () => {
    //     await vapeService.logout();
    // };

    return (
        <header className="header">
            <article className="header-logo">
                <Link to="/"><img className="header-logo-img" src="/images/VapeManiacsNoBG.png" alt="VapeManiacs" /></Link>
            </article>
            <nav className="header-nav">
                <ul className="header-nav-ul">
                    <li className="header-nav-ul-li"><Link to="/blog" className="header-nav-ul-li-a">Blog</Link></li>
                    <li className="header-nav-ul-li"><Link to="/catalog" className="header-nav-ul-li-a">Catalog</Link></li>
                    <li className="header-nav-ul-li"><Link to="/create" className="header-nav-ul-li-a">Create</Link></li>
                    <li className="header-nav-ul-li"><Link to="/my-vapes" className="header-nav-ul-li-a">My Vapes</Link></li>
                    <li className="header-nav-ul-li"><Link to="/about-us" className="header-nav-ul-li-a">About Us</Link></li>
                    <li className="header-nav-ul-li-btn"><Link to="/login"><button className="header-nav-btn">Login / Register</button></Link></li>
                    <li className="header-nav-ul-li-btn"><Link to="/login"><button className="header-nav-btn">Logout</button></Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;