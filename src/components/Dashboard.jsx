import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {useEffect, useState} from "react";
import { BarChart, Bar, Cell, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {

    const [suggestion, setSuggestion] = useState([]);

    useEffect(() => {
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
            <LineChart width={400} height={250} data={data} margin={{top: 20, right: 20, bottom: 5, left: 0}}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
            </LineChart>
        )
    };

    const renderBarChart = (data) => {
        return <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={400}
                height={250}
                data={data}
                margin={{top: 20, right: 20, bottom: 5, left: 0}}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    }

    return (
        <div className="grid grid-cols-3 grid-rows-4 gap-4 mr-2">
            <div className={"col-span-3"}>
                <div className={"flex  border-1 h-full p-2 rounded-2xl justify-center items-center shadow-[20px_-10px_30px_20px_#F0E68C] font-bold"}>
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
                            <div  className={"flex pl-4 pt-6 h-5/6 items-center justify-center shadow-[0px_0px_30px_20px_#374f6b]"}>
                                {renderLineChart([{name: 'Page A', uv: 400},{name: 'Page B', uv: 600}])}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div  className={"flex pl-4 pt-6 h-5/6 items-center justify-center shadow-[0px_0px_30px_20px_#374f6b]"}>
                                {renderBarChart([
                                    {
                                        name: 'Page A',
                                        pv: 2400,
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
                        <SwiperSlide>{Graphs("https://www.rd.com/wp-content/uploads/2021/04/GettyImages-1145794687.jpg")}</SwiperSlide>
                        <SwiperSlide>{Graphs("https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?cs=srgb&dl=pexels-pixabay-50577.jpg&fm=jpg")}</SwiperSlide>
                        <SwiperSlide>{Graphs("https://images.pexels.com/photos/735423/pexels-photo-735423.jpeg?cs=srgb&dl=pexels-eftodii-aurelia-735423.jpg&fm=jpg")}</SwiperSlide>
                        <SwiperSlide>{Graphs("https://www.rd.com/wp-content/uploads/2021/04/GettyImages-1145794687.jpg")}</SwiperSlide>
                        <SwiperSlide>{Graphs("https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?cs=srgb&dl=pexels-pixabay-50577.jpg&fm=jpg")}</SwiperSlide>
                        <SwiperSlide>{Graphs("https://images.pexels.com/photos/735423/pexels-photo-735423.jpeg?cs=srgb&dl=pexels-eftodii-aurelia-735423.jpg&fm=jpg")}</SwiperSlide>
                        <SwiperSlide>{Graphs("https://www.rd.com/wp-content/uploads/2021/04/GettyImages-1145794687.jpg")}</SwiperSlide>
                        <SwiperSlide>{Graphs("https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?cs=srgb&dl=pexels-pixabay-50577.jpg&fm=jpg")}</SwiperSlide>
                        <SwiperSlide>{Graphs("https://images.pexels.com/photos/735423/pexels-photo-735423.jpeg?cs=srgb&dl=pexels-eftodii-aurelia-735423.jpg&fm=jpg")}</SwiperSlide>
                        <SwiperSlide>{Graphs("https://www.rd.com/wp-content/uploads/2021/04/GettyImages-1145794687.jpg")}</SwiperSlide>
                        <SwiperSlide>{Graphs("https://compote.slate.com/images/73f0857e-2a1a-4fea-b97a-bd4c241c01f5.jpg")}</SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className={"col-span-2"}>
                <div className={" text-gray-700  border-1 h-[20vw] p-2 rounded-2xl text-2xl font-extrabold shadow-[20px_0px_90px_20px_#F0E68C]"}>

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
                <div className={"flex pl-8 items-center border-1 h-full p-2 rounded-2xl font-bold shadow-[0_0_90px_30px_#F0E68C]"}>
                    <div className="grid grid-rows-4 grid-flow-col gap-11">
                        <div>
                            <div className={"text-2xl font-extrabold pb-6 text-[#374f6b]"}>Today's : </div>
                            <div>Total Feedbacks: </div>
                            <div>Average Response time: </div>
                        </div>

                        <div>
                            <div className={"text-2xl font-extrabold pb-6 text-[#374f6b]"}>This Week's : </div>
                            <div>Total Feedbacks: </div>
                            <div>Average Response time: </div>
                        </div>

                        <div>
                            <div className={"text-2xl font-extrabold pb-6 text-[#374f6b]"}>This Month's : </div>
                            <div>Total Feedbacks: </div>
                            <div>Average Response time: </div>
                        </div>

                        <div>
                            <div className={"text-2xl font-extrabold pb-6 text-[#374f6b]"}>This Year's : </div>
                            <div>Total Feedbacks: </div>
                            <div>Average Response time: </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={"col-span-2 row-span-2"}>
                <div className={"flex justify-center items-center border-1 h-full p-2 rounded-2xl font-bold shadow-[20px_0px_90px_20px_#F0E68C]"}>
                    three
                </div>
            </div>
            <div className={""}>
                <div className={"flex justify-center items-center border-1 h-full p-2 rounded-2xl font-bold shadow-[0_0_90px_30px_#F0E68C]"}>

                </div>
            </div>
        </div>
    )
}

export default Dashboard;