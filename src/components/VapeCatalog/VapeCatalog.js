import { useEffect } from 'react';
import { useState } from 'react';
import VapeCard from './VapeCard';
import * as vapeService from '../../services/vapeService.js';

const VapeCatalog = () => {
    const [vapes, setVapes] = useState([]);

    useEffect(() => {
        vapeService.getAll()
        .then(result => {
            setVapes(result);
        });
    },[]);


    return (
        <section id="catalog-page">
            <h1>Vapes Catalog</h1>

            <section className="catalog-page-vapes">
            { vapes.length > 0 
            ? vapes.map(x => <VapeCard vape={x} key={x._id}/>) 
            : <h3 className="no-articles">No vapes yet</h3>
            }   
            </section>
           
        </section>
    );
};

export default VapeCatalog;