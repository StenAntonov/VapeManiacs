import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { types, NotificationContext } from '../../contexts/NotificationContext';

import * as vapeService from '../../services/vapeService';

const Create = () => {
    const { user } = useContext(AuthContext);
    const { showNotification } = useContext(NotificationContext);
    const navigate = useNavigate();

    const onVapeCreate = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let maker = formData.get('maker');
        let model = formData.get('model');
        let battery = formData.get('battery');
        let imageUrl = formData.get('imageUrl');
        let description = formData.get('description');

        if (maker === '' || model === '' || battery === '' || imageUrl === '' || description === '') {
            return showNotification('All fields are required!', types.warning);
        }

        vapeService.create({
            maker,
            model,
            battery,
            imageUrl,
            description
        }, user.accessToken)
            .then(result => {
                showNotification('Vape successfully created!', types.success);
                navigate('/catalog');
            });

    };

    return (
        <section id="create-page" className="auth">
        <form id="create" onSubmit={onVapeCreate}>
            <div className="container">
                <h1>Create Vape</h1>
                <label htmlFor="maker">Maker:</label>
                <input type="text" id="maker" name="maker" placeholder="Enter vape maker..." />

                <label htmlFor="model">Model:</label>
                <input type="text" id="model" name="model" placeholder="Enter vape model..." />

                <label htmlFor="battery">Battery:</label>
                <input type="text" id="battery" name="battery" placeholder="External" />

                <label htmlFor="game-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                <label htmlFor="description">Description:</label>
                <textarea name="description" id="description"></textarea>
                <input className="btn submit" type="submit" value="Create" />
            </div>
        </form>
    </section>
    );
};

export default Create;