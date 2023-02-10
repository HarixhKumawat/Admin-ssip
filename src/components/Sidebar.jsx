import { BiQrScan } from "react-icons/bi";
import { RiGroupFill, RiQuestionAnswerFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useNavigate } from 'react-router-dom';

function SideBar() {
    const navigate = useNavigate();

    return (
        <div className="top-0 left-0 w-[4vw] shadow-[-20px_10px_40px_20px_#374f6b] p-1 pt-[4vw] text-white fixed h-full">
            <div className=" pt-5 grid justify-self-auto justify-center grid-cols-1 gap-2">
                <IconContext.Provider value={{ color: "#374f6b", className: "global-class-name" }}>
                    <button onClick={()=>{navigate('/')}} className={"flex text-[2.5vw] hover:text-[2.7vw] rounded-2xl pt-2 pb-2 justify-center ease-in-out duration-100\n" }><FaHome/></button>
                    <button onClick={()=>{navigate('/feedbacks')}} className={"flex text-[2.5vw] hover:text-[2.7vw] rounded-2xl pt-2 pb-2 justify-center ease-in-out duration-100\n" }><RiQuestionAnswerFill/></button>
                    <button onClick={()=>{navigate('/compare')}} className={"flex text-[2.5vw] hover:text-[2.7vw] rounded-2xl pt-2 pb-2 justify-center ease-in-out duration-100\n" }><RiGroupFill/></button>
                    <button onClick={()=>{navigate('/qrcode')}} className={"flex text-[2.5vw] hover:text-[2.7vw] rounded-2xl pt-2 pb-2 justify-center ease-in-out duration-100\n" }><BiQrScan/></button>
                </IconContext.Provider>
            </div>
        </div>
    )
}
export default SideBar;