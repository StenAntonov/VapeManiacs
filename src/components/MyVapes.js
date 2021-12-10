import { Link } from 'react-router-dom';

const MyVapes = () => {
    return (
        <section id="catalog-page">
            <h1>All Vapes</h1>
            {/* <!-- Display div: with information about every game (if any) --> */}
            <div className="allVapes">
                <div className="allVapes-info">
                    <img src="/images/arcfox_prism_rainbow_1.jpg" />
                    <h2>Prism</h2>
                    <Link to="/details" className="details-button">Details</Link>
                </div>

            </div>
            <div className="allVapes">
                <div className="allVapes-info">
                    <img src="/images/obs-engine-100w-gunmetal-puzzle-purple_1.jpg" />
                    <h2>Drag</h2>
                    <Link to="/details" className="details-button">Details</Link>
                </div>

            </div>
            <div className="allVapes">
                <div className="allVapes-info">
                    <img src="/images/geekvape-aegis-legend-2-rainbow_1.jpg" />
                    <h2>Obs</h2>
                    <Link to="/details" className="details-button">Details</Link>
                </div>
            </div>

            {/* <!-- Display paragraph: If there is no games  --> */}
            {/* <h3 className="no-articles">No articles yet</h3> */}
        </section>
    );
};

export default MyVapes;