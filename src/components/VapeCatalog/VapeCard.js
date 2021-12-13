import { Link } from 'react-router-dom';


const VapeCard = ({
    vape
}) => {
    return (
        <div className="allVapes">
            <div className="allVapes-info">
                <img src={vape.imageUrl} alt="vape"/>
                <h2>{vape.maker}</h2>
                <h4>{vape.model}</h4>
                <Link to={`/details/${vape._id}`} className="details-button">Details</Link>
            </div>
        </div>
    );
};

export default VapeCard;