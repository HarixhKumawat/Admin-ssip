import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import QrCOde from "./QrCode";
import Feedbacks from "./Feedbacks";
import Compare from "./Compare";

const Home = () => {
    return (
        <Router>

            <div className={"ml-[5vw] mt-[5vw] mb-[1vw] relative "}>
                <Routes>
                    <Route path={"/"} element={<Dashboard/>}></Route>
                    <Route path={"/feedbacks"} element={<Feedbacks/>}></Route>
                    <Route path={"/compare"} element={<Compare/>}></Route>
                    <Route path={"/qrcode"} element={<QrCOde/>}></Route>
                </Routes>
            </div>
            <Sidebar/>
            <Navbar/>
        </Router>
    )
}

export default Home;