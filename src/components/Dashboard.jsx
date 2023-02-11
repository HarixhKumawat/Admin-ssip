import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {useEffect, useState} from "react";
import { PieChart, Pie, Sector, BarChart, Bar, Cell, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import Feedbacks from "./Feedbacks";
import axios from "axios";

const Dashboard = () => {

    const [suggestion, setSuggestion] = useState([]);
    const [data, dataAagaya] = useState([])

    useEffect(() => {
        const dam = async()=>{
            const pid = sessionStorage.getItem("pid")
            await axios.get(process.env.REACT_APP_SERVER_URL+`/feedback/overViewDetails/${pid}`).then((e)=>{
                console.log(e.data[0])
                dataAagaya(e.data[0])
                // setSuggestion(e)
            })
        }
        dam()
        setSuggestion(["You should maintain more cleanliness around the police station And call \"PEST CONTROLL\"", "Fans are not working properly, should maintain appliances and electronic devices"])
    }, [])


    const Graphs = (imgSrc) => {
        return (
            <div  className={"flex pl-4 h-full h-5/6 items-center justify-center"}>
                <img className={"flex rounded-2xl"} src={imgSrc}/>
            </div>
        )
    }

    const renderLineChart = (data) => {
        return (
            <LineChart width={400} height={300} data={data} margin={{top: 20, right: 20, bottom: 5, left: 0}}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
            </LineChart>
        )
    };

    const renderBarChart = (data) => {
        return <BarChart
                width={400}
                height={300}
                data={data}
                margin={{top: 20, right: 20, bottom: 5, left: 0}}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#8884d8" />
                <Line type="monotone" dataKey="amt" stroke="#8884d8"/>

        </BarChart>
    }

    const renderPieChart = (data) => {
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
        const RADIAN = Math.PI / 180;
        const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
                <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                    {`${(percent * 100).toFixed(0)}%`}
                </text>
            );
        };
        return (
            <PieChart width={400} height={300}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={150}
                    innerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        )
    };


    return (
        <div className="grid grid-cols-3 grid-rows-4 gap-4 mr-2">
            <div className={"col-span-3"}>
                <div className={"flex  border-1 h-full p-2 rounded-2xl justify-center items-center font-bold shadow-lg" }>
                    <Swiper
                        slidesPerView={3}
                        slidesPerGroup={3}
                        spaceBetween={30}
                        centeredSlides={false}
                        slidesPerGroupSkip={2}
                        pagination={{
                            type: "bullets",
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div  className={"flex ml-12 pt-6 h-5/6 items-center justify-center rounded-2xl shadow-inner shadow-black"}>
                                {renderLineChart([{name: 'Page A', uv: 400},{name: 'Page B', uv: 600}])}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div  className={"flex pl-4 pt-6 h-5/6 items-center justify-center  rounded-2xl shadow-inner shadow-black"}>
                                {renderBarChart([
                                    {
                                        name: 'Page A',
                                        pv: 2400,
                                        uv: 3000,
                                        amt: 2100
                                    },
                                    {
                                        name: 'Page B',
                                        uv: 3000,
                                        pv: 1398,
                                        amt: 2210,
                                    },
                                    {
                                        name: 'Page C',
                                        uv: 2000,
                                        pv: 9800,
                                        amt: 2290,
                                    },
                                    {
                                        name: 'Page D',
                                        uv: 2780,
                                        pv: 3908,
                                        amt: 2000,
                                    },
                                    {
                                        name: 'Page E',
                                        uv: 1890,
                                        pv: 4800,
                                        amt: 2181,
                                    },
                                    {
                                        name: 'Page F',
                                        uv: 2390,
                                        pv: 3800,
                                        amt: 2500,
                                    },
                                    {
                                        name: 'Page G',
                                        uv: 3490,
                                        pv: 4300,
                                        amt: 2100,
                                    },
                                ])}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div  className={"flex mr-12 pt-6 h-5/6 items-center justify-center  rounded-2xl shadow-inner shadow-black"}>
                                {renderPieChart([
                                    { name: 'Group A', value: 400 },
                                    { name: 'Group B', value: 300 },
                                    { name: 'Group C', value: 300 },
                                ])}
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className={"col-span-2"}>
                <div className={" text-gray-700  border-1 h-[20vw] p-2 rounded-2xl text-2xl font-extrabold shadow-lg"}>

                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper h-full"
                    >
                        {suggestion.map((data, index) => {
                            return (
                                <SwiperSlide>
                                    <div  className={"flex pl-4 w-full h-5/6 items-center justify-center"}>
                                        {index+1} - {data}
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
            <div className={"row-span-2"}>
                <div className={"flex pl-8 items-center border-1 h-full p-2 rounded-2xl font-bold shadow-lg"}>
                    <div className="grid grid-rows-4 grid-flow-col gap-11">
                        <div>
                            <div className={"text-2xl font-extrabold pb-6 text-[#374f6b]"}>Today's : </div>
                            <div>Total Feedbacks: {data.todayFe}</div>
                            <div>Average Response time: 5mins</div>
                        </div>

                        <div>
                            <div className={"text-2xl font-extrabold pb-6 text-[#374f6b]"}>This Week's : </div>
                            <div>Total Feedbacks: {data.weekFe}</div>
                            <div>Average Response time: 30mins</div>
                        </div>

                        <div>
                            <div className={"text-2xl font-extrabold pb-6 text-[#374f6b]"}>This Month's : </div>
                            <div>Total Feedbacks: {data.weekFe}</div>
                            <div>Average Response time: More than 30</div>
                        </div>

                        <div>
                            <div className={"text-2xl font-extrabold pb-6 text-[#374f6b]"}>This Year's : </div>
                            <div>Total Feedbacks: </div>
                            <div>Average Response time: 10</div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={"col-span-2 row-span-2"}>
                <div className={"flex justify-center overflow-y-scroll h-[40vw] items-center border-1 h-full p-2 rounded-2xl font-bold shadow-lg"}>
                    {/*<Feedbacks/>*/}
                </div>
            </div>
            <div className={""}>
                <div className={"flex justify-center items-center border-1 h-full p-2 rounded-2xl font-bold shadow-lg"}>

                </div>
            </div>
        </div>
    )
}

export default Dashboard;