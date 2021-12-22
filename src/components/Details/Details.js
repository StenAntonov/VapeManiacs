import { Link, useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext.js';
import { types, NotificationContext } from '../../contexts/NotificationContext';

import { useNavigate } from 'react-router-dom';
import * as vapeService from '../../services/vapeService.js';

const Details = () => {
    const navigate = useNavigate();
    const { showNotification } = useContext(NotificationContext);
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [vape, setVape] = useState({});

    useEffect(() => {
        vapeService.getOne(id)
            .then(result =>
                setVape(result)
            );
    }, [id]);

    const deleteHandler = (e) => {
        e.preventDefault();
        // eslint-disable-next-line no-restricted-globals
        const confirmation = confirm('Are you sure want to delete this vape?');
        if (confirmation) {
            vapeService.del(vape._id, user.accessToken)
                .then(() => {
                    showNotification('Vape successfully deleted!', types.success);
                    navigate('/catalog');
                });
        };
    };

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

                {user._id && user._id === vape._ownerId ?
                    <div className="buttons">
                        <Link to={`/edit/${id}`} className="button-edit">Edit</Link>
                        <Link to="/delete" onClick={deleteHandler} className="button-delete">Delete</Link>
                    </div>
                    : ''
                }
            </div>
        </section>
    );
};

export default Details;