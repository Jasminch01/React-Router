import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name}=user;

    const navigate = useNavigate()

    const gobackHandler = () => {
        navigate(-1)
    }

    return (
        <div>
            <h1>This is details : {name}</h1>
            <button onClick={gobackHandler}>Go Back</button>
        </div>
    );
};

export default UserDetails;