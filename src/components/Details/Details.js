import { Link } from 'react-router-dom';

const Details = (id) => {
    return (
        <section id="vape-details">
            <h1>Vape Details</h1>
            <div className="info-section">
                <div className="vape-header">
                    <img className="vape-img" src="/images/arcfox_prism_rainbow_1.jpg" />
                    <h1>Bright</h1>
                    <span className="levels">MaxLevel: 4</span>
                    <p className="type">Action, Crime, Fantasy</p>
                </div>
                <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam leo ut orci luctus interdum. Nulla ipsum arcu, sagittis eget convallis id, auctor vel nulla. Morbi eu magna quam. Fusce dignissim consequat massa, ac tempus nisi tincidunt at. Cras pulvinar nisi nec consequat auctor. Donec pretium diam at lectus gravida sodales. Quisque et mi luctus, tincidunt odio vitae, molestie ex. Sed eros justo, cursus sit amet consequat id, mollis quis mi. Etiam bibendum quam nisi, sit amet consectetur nulla rutrum non. Aliquam volutpat porta convallis. 
                </p>

                <div className="buttons">
                    <Link to="/edit" className="button">Edit</Link>
                    <Link to="/delete" className="button">Delete</Link>
                </div>
            </div>
        </section>
    );
};

export default Details;