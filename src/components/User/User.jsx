import PropTypes from 'prop-types';

const User = ({user}) => {
    const {name, email, website, address, phone} = user;
    return (
        <div className="p-5 border-2 border-green-300 rounded-lg">
            <h1 className="text-2xl">{name}</h1>
            <p>{email}</p>
            <p>{website}</p>
            <p>Phone : {phone}</p>
            <p>Address : {address.street}, {address.suite}, {address.city}</p>
        </div>
    );
};

User.propTypes = {
    user : PropTypes.object.isRequired,
}

export default User;