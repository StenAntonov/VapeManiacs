import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import VapeCard from './VapeCard';

const VapeCatalog = () => {
    const [vapes, setVapes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc')
        .then(res => res.json())
        .then(result => {
            setVapes(result)
        });
    },[]);


    return (
        <section id="catalog-page">
            <h1>Vapes Catalog</h1>

            <section className="catalog-page-vapes">
            { vapes.map(x => <VapeCard vape={x} />)}
            </section>
           
            {/* <!-- Display paragraph: If there is no games  --> */}
            {/* <h3 className="no-articles">No articles yet</h3> */}
        </section>
    );
};

export default VapeCatalog;