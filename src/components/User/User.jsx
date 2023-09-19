import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const User = ({user}) => {
    const {id, name, email, website, address, phone} = user;
    const navigate = useNavigate();
    const detalisHandler = ()=>{
        navigate(`/users/${id}`)
    }
    return (
        <div className="p-5 border-2 border-green-300 rounded-lg">
            <h1 className="text-2xl">{name}</h1>
            <p>{email}</p>
            <p>{website}</p>
            <p>Phone : {phone}</p>
            <p>Address : {address.street}, {address.suite}, {address.city}</p>
            <Link to={`/users/${id}`}><button className='my-3'>Show Details</button></Link>
            <button onClick={detalisHandler}>Details</button>
        </div>
    );
};

User.propTypes = {
    user : PropTypes.object.isRequired,
}

export default User;