import { Link, useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { useAuthContext } from '../../contexts/AuthContext.js';
import { types, NotificationContext } from '../../contexts/NotificationContext';

import { useNavigate } from 'react-router-dom';
import * as vapeService from '../../services/vapeService.js';
import Modal from '../../utils/Modal/Modal.js';

const Details = () => {
    const navigate = useNavigate();
    const { showNotification } = useContext(NotificationContext);
    const { user } = useAuthContext();
    const { id } = useParams();
    const [vape, setVape] = useState({});
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    useEffect(() => {
        vapeService.getOne(id)
            .then(result =>
                setVape(result)
            );
    }, [id]);

    const deleteHandler = (e) => {
        e.preventDefault();

        vapeService.del(vape._id, user.accessToken)
            .then(() => {
                setShowDeleteDialog(false);
                showNotification('Vape successfully deleted!', types.success);
                navigate('/catalog');
            });

    };

    const deleteClickHandler = (e) => {
        e.preventDefault();

        setShowDeleteDialog(true);
    };

    return (
        <>
            <section id="vape-details" className='modal-vape-details'>
                <h1>Vape Details</h1>

                {showDeleteDialog
                    ? <>
                    <Modal vape={vape} onClose={() => setShowDeleteDialog(false)} onConfirm={deleteHandler} />
                        <p className='filler'></p>
                    </>
                    : <div className="info-section">
                        <div className="vape-header">
                            <img className="vape-img" src={vape.imageUrl} alt="vape" />
                            <h1 className='vape-details-h1'>{vape.maker}</h1>
                            <h2 className='vape-details-h2'>{vape.model}</h2>
                            <p className="type">Battery:</p>
                            <span className="batteries">{vape.battery}</span>
                        </div>
                        <p className="text">{vape.description}</p>

                        {user._id && user._id === vape._ownerId ?
                            <div className="buttons">
                                <Link to={`/edit/${id}`} className="button-edit">Edit</Link>
                                <Link to="/delete" onClick={deleteClickHandler} className="button-delete">Delete</Link>
                            </div>
                            : ''
                        }
                    </div>
                }
            </section>
        </>
    );
};

export default Details;