import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="">
            <h1 className="my-5">Header</h1>
            <Link to= '/'> <button className="">Home</button></Link>
            <Link to= '/about'> <button className="ms-3">About</button></Link>
            <Link to= '/contact'><button className="ms-3">Contact</button></Link>
            <Link to= '/users'><button className="ms-3">Users</button></Link>

        </div>
    );
};

export default Navbar;