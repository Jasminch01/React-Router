import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/footer";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;