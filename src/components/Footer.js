import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <article className="social-media">
                <article className="icons">
                    <a href="https://www.facebook.com/groups/1120140004818933"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com/beardvapeco"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.pinterest.com/trilogyfarm/vaping/"><i class="fab fa-pinterest"></i></a>
                    <a href="https://www.youtube.com/c/RiPTrippers1"><i className="fab fa-youtube"></i></a>
                    <a href="https://www.instagram.com/riptrippers/?hl=bg"><i className="fab fa-instagram"></i></a>
                </article>
                <ul className="footer-ul">
                    <li className="footer-ul-li"><Link className="footer-ul-li-a" to="/">VapeManiacs</Link></li>
                    <li className="footer-ul-li"><Link className="footer-ul-li-a-aboutus" to="about-us">About Us</Link></li>
                    <li className="footer-ul-li"><Link className="footer-ul-li-a" to="/contacts">Contacts</Link></li>
                </ul>
            </article>
        </footer>
    );
};

export default Footer;