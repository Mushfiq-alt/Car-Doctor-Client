import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {title, img, price, _id} = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <p className="text-xl" style={{ color: '#FF3811', fontWeight: 'bold' }}>Price: ${price}</p>
                <div className="card-actions">
                    <Link to={`/book/${_id}`}>
                        <button className="btn" style={{ backgroundColor: '#FF3811', color: 'white', border: 'none' }}>Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;