import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1>This is my home</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;