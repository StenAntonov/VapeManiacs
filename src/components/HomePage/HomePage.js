import { useState } from 'react';
import { useEffect } from 'react';
import * as vapeService from '../../services/vapeService.js';
import { Link } from 'react-router-dom';
import LatestCard from './LatestCard';
import Carousel from '../Carousel/Carousel';

const HomePage = () => {
    const [latest, setLatest] = useState([]);

    useEffect(() => {
        vapeService.getLatest()
            .then(result => {
                setLatest(result);
            });
    },[]);

    return (
        <>
            <section className="smoking-dead">
                <article className="smoking-dead-message">
                    <h2>Smoking is <span className="dead">Dead</span></h2>
                    <h3>Vaping is the future</h3>
                </article>
                <article className="blog-pic">
                    <Carousel />
                </article>
                <p className="read-more">Read more in the <Link to="/blog" className="read-more-blog">BLOG</Link> section...</p>

                <div className='video'>
                    <iframe width="1100" height="500" src="https://www.youtube.com/embed/njHSRqE8rUI?start=41" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

                <div id="home-page-vapes">
                    <h1 className="latest-models">Latest Models</h1>
                    <section className='vapes'>
                        {latest.length > 0
                            ? latest.map(x => <LatestCard vape={x} key={x._id} />)
                            : <h3 className="no-articles">No vapes yet</h3>
                        };
                    </section>
                </div>
            </section >
        </>
    );
};

export default HomePage;