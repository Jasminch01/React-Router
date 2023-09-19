import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/footer";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1>This is my home</h1>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;