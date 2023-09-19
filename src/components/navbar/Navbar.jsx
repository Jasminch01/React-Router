import { NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="nav">
            <h1 className="my-5">Header</h1>
            <NavLink to= '/'> <button className="">Home</button></NavLink>
            <NavLink to= '/about'> <button className="ms-3">About</button></NavLink>
            <NavLink to= '/contact'><button className="ms-3">Contact</button></NavLink>
            <NavLink to= '/users'><button className="ms-3">Users</button></NavLink>

        </div>
    );
};

export default Navbar;