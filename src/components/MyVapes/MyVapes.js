import { useState } from 'react';
import { useEffect } from 'react';
import * as vapeService from '../../services/vapeService.js';
import MyVapeCard from './MyVapeCard';

const MyVapes = () => {
    const userId = sessionStorage.getItem('userId');
    const [vapes, setVapes] = useState([]);

    useEffect(() => {
        vapeService.getMyVapes(userId)
        .then(result => {
            setVapes(result);
        });
    },[]);


    return (
        <section className="my-vapes-page">
            <h1>My Vapes</h1>

            <section className="catalog-page-vapes">
            { vapes.length > 0 
            ? vapes.map(x => <MyVapeCard vape={x} key={x._id}/>) 
            : <h3 className="no-articles">No vapes yet</h3>
            }   
            </section>
           
        </section>
    );
};

export default MyVapes;