import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as vapeService from '../../services/vapeService.js';

const Details = () => {
    const vapeId = window.location.pathname.split('/').pop();
    const [vape, setVape] = useState({});

    useEffect(async () => {
        let result = await vapeService.getOne(vapeId);

        setVape(result);
    }, []);


    return (
        <section id="vape-details">
            <h1>Vape Details</h1>
            <div className="info-section">
                <div className="vape-header">
                    <img className="vape-img" src={vape.imageUrl} alt="vapo" />
                    <h1 className='vape-details-h1'>{vape.maker}</h1>
                    <h2 className='vape-details-h2'>{vape.model}</h2>
                    <p className="type">Battery:</p>
                    <span className="batteries">{vape.battery}</span>
                </div>
                <p className="text">{vape.description}</p>

                <div className="buttons">
                    <Link to="/edit" className="button-edit">Edit</Link>
                    <Link to="/delete" className="button-delete">Delete</Link>
                </div>
            </div>
        </section>
    );
};

export default Details;