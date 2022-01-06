import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import * as vapeService from '../../services/vapeService.js';
import MyVapeCard from './MyVapeCard';

const MyVapes = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const [vapes, setVapes] = useState([]);

    useEffect(() => {
        vapeService.getMyVapes(user._id)
        .then(result => {
            setVapes(result);
        });
    },[user._id]);


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