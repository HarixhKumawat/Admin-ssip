import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {useEffect, useState} from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Compare = () => {

    const [suggestion, setSuggestion] = useState([]);

    useEffect(() => {
        setSuggestion(["You should maintain more cleanliness around the police station And call \"PEST CONTROL\"", "Fans are not working properly, should maintain appliances and electronic devices"])
    }, [])

    const Graphs = (imgSrc) => {
        return (
            <div  className={"flex pl-4 h-5/6 items-center justify-center"}>
                <img className={"flex rounded-2xl"} src={imgSrc}/>
            </div>
        )
    }

    const renderLineChart = (data) => {
        return (
            <LineChart width={600} height={400} data={data} margin={{top: 5, right: 20, bottom: 5, left: 0}}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
            </LineChart>
        )
    };

    return (
        <div className="grid grid-cols-4 grid-rows-4 gap-4 mr-2">
            <div className={'col-span-1'}></div>
            <div className={"col-span-1 w-fit"}>
                <div className={" text-gray-700  border-1 h-[20vw] p-2 rounded-2xl text-2xl font-extrabold shadow-[20px_0px_90px_20px_#F0E68C]"}>
                     Drop downs            
                </div>
            </div>
            <div className={"col-span-1 w-fit"}>
                <div className={" text-gray-700  border-1 h-[20vw] p-2 rounded-2xl text-2xl font-extrabold shadow-[20px_0px_90px_20px_#F0E68C]"}>
                    Drop downs 
                </div>
            </div>
            <div className={'col-span-1'}></div>
            <div className={"col-span-4 row-span-2"}>
                <div className={"flex justify-center items-center border-1 h-full p-2 rounded-2xl font-bold shadow-[0_0_90px_30px_#F0E68C]"}>
                Graph
                </div>
            </div>
            <div className={"col-span-2"}>
                <div className={"flex justify-center items-center border-1 h-full p-2 rounded-2xl font-bold shadow-[0_0_90px_30px_#F0E68C]"}>
                Graph
                </div>
            </div>
            <div className={"col-span-2"}>
                <div className={"flex justify-center items-center border-1 h-full p-2 rounded-2xl font-bold shadow-[0_0_90px_30px_#F0E68C]"}>
                    Graph
                </div>
            </div>
            
        </div>
    )
}

export default Compare;