import { Link } from 'react-router-dom';

const LatestCard = ({
    vape
}) => {
    return (
        <div className="vape">
            <div className="image-wrap">
                <img src={vape.imageUrl} alt="vapes" />
            </div>
            <h3>{vape.maker}</h3>
            <div className="rating">
                <h4>{vape.model}</h4>
            </div>
            <div className="data-buttons">
                <Link to={`/details/${vape._id}`} className="btn details-btn">Details</Link>
            </div>
        </div>
    );
};

export default LatestCard;