import { Link } from 'react-router-dom';
import Carousel from './Carousel/Carousel';

const HomePage = () => {
    return (
        <>
            <section className="smoking-dead">
                <article className="smoking-dead-message">
                    <h2>Smoking is <span className="dead">Dead</span></h2>
                    <h3>Vaping is the future</h3>
                </article>
                <article className="blog-pic">
                    {/* <img className="blog-pic-pic" src="/images/Smoking Kills Main.png" alt="background" /> */}
                    <Carousel />
                </article>
                <p className="read-more">Read more in the <Link to="/blog" className="read-more-blog">BLOG</Link> section...</p>

                <div className='video'>
                <iframe width="1100" height="500" src="https://www.youtube.com/embed/njHSRqE8rUI?start=41" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div id="home-page-vapes">
                    <h1 className="latest-models">Latest Models</h1>
                    <section className='vapes'>
                    <div className="vape">
                        <div className="image-wrap">
                            <img src="/images/arcfox_prism_rainbow_1.jpg" />
                        </div>
                        <h3>Prism</h3>
                        <div className="vape-model">
                            <h4>Rainbow</h4>
                        </div>
                        <div className="data-buttons">
                            <Link to="/details" className="btn details-btn">Details</Link>
                        </div>
                    </div>
                    <div className="vape">
                        <div className="image-wrap">
                            <img src="/images/obs-engine-100w-gunmetal-puzzle-purple_1.jpg" alt="smoking kills"/>
                        </div>
                        <h3>Drag</h3>
                        <div className="rating">
                            <h4>Max</h4>
                        </div>
                        <div className="data-buttons">
                            <Link to="/details" className="btn details-btn">Details</Link>
                        </div>
                    </div>
                    <div className="vape">
                        <div className="image-wrap">
                            <img src="/images/geekvape-aegis-legend-2-rainbow_1.jpg" />
                        </div>
                        <h3>Obs</h3>
                        <div className="rating">
                            <h4>Engine</h4>
                        </div>
                        <div className="data-buttons">
                            <Link to="/details" className="btn details-btn">Details</Link>
                        </div>
                    </div>
                    {/* <p className="no-articles">No games yet</p> */}
                    </section>
                </div>
            </section >
        </>
    );
};

export default HomePage;