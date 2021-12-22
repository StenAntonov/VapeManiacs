import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import * as vapeService from '../../services/vapeService';

const Edit = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [vape, setVape] = useState({});
    
    useEffect(() => {
        vapeService.getOne(id)
            .then(result =>
                setVape(result)
            );
    }, [id]);
    
    console.log(vape);
    const onVapeEdit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let maker = formData.get('maker');
        let model = formData.get('model');
        let battery = formData.get('battery');
        let imageUrl = formData.get('imageUrl');
        let description = formData.get('description');
        
        if (maker === '' || model === '' || battery === '' || imageUrl === '' || description === '') {
            alert('All fields are required!');
            return;
        }

        vapeService.edit({
            maker,
            model,
            battery,
            imageUrl,
            description
        }, user.accessToken, id)
            .then(() => {
                navigate(`/details/${id}`);
            });
    };


    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onVapeEdit}>
                <div className="container">
                <h1>Edit Vape</h1>
                <label htmlFor="maker">Maker:</label>
                <input type="text" id="maker" name="maker" placeholder="Enter vape maker..." defaultValue={vape.maker}/>

                <label htmlFor="model">Model:</label>
                <input type="text" id="model" name="model" placeholder="Enter vape model..." defaultValue={vape.model}/>

                <label htmlFor="battery">Battery:</label>
                <input type="text" id="battery" name="battery" placeholder="External" defaultValue={vape.battery}/>

                <label htmlFor="game-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." defaultValue={vape.imageUrl}/>

                <label htmlFor="description">Description:</label>
                <textarea name="description" id="description" defaultValue={vape.description}></textarea>
                <input className="btn submit" type="submit" value="Edit" />
                </div>
            </form>
        </section>
    );
};

export default Edit;