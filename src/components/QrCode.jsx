import {useState, useEffect} from "react";
import axios from "axios";
import {MdOutlineQrCode2} from "react-icons/md";

const QrCOde = () => {

    const [formdata,setFormdata]=useState({
        Did:'',
        Sid:''
    })
    let [allPS, setAllPS] = useState([])
    let [disD,setdisD] = useState([])
    let [subD,setsubD] = useState([])
    const [value,setStr] = useState("");
    let str;

    const sendPID = (id)=>{
        let pidUrl = `${process.env.REACT_APP_SERVER_URL}/ps/findPs/${id}`
        console.log(pidUrl)
        axios.get(pidUrl).then((responce)=>{
            str = responce.data
            setStr(str);
            console.log(str)
            if(value !== "A"){
                const qrCodeURL = document.getElementById('qrCodeEl')
                    .toDataURL("image/png")
                    .replace("image/png", "image/octet-stream");
                console.log(qrCodeURL)
                let aEl = document.createElement("a");
                aEl.href = qrCodeURL;
                aEl.download = "QR_Code.png";
                document.body.appendChild(aEl);
                aEl.click();
                document.body.removeChild(aEl);
            }
        }).catch(function (error) {
            console.log(error);
        })
    }

    useEffect(()=>{

        console.log(formdata.Sid + "wogs")
        let disDUrl = `${process.env.REACT_APP_SERVER_URL}/ps/drop`
        axios(disDUrl).then((disD)=>{
            setdisD(disD.data)
            //console.log(PSD.data[])
        }).catch((err)=>{console.log(err)})

        async function res(){
            if(formdata.Sid){
                let psUrl = `${process.env.REACT_APP_SERVER_URL}/ps/droppp/${formdata.Did}/${formdata.Sid}`
                axios.get(psUrl).then((pD)=>{
                    setAllPS(pD.data)
                    console.log(pD.data)
                    setStr("A")
                }).catch((err)=>{console.log(err)})
            }else{
                let psUrl = `${process.env.REACT_APP_SERVER_URL}/ps/dropp/${formdata.Did}`
                axios.get(psUrl).then((disD)=>{
                    setAllPS(disD.data)
                    setStr("A")
                    console.log(disD.data)
                }).catch((err)=>{console.log(err)})
            }

        }

        if(formdata.Did){
            let subDUrl = `${process.env.REACT_APP_SERVER_URL}/ps/drop2/${formdata.Did}`
            axios.get(subDUrl).then((subD)=>{
                setsubD(subD.data)
                console.log(subD)
                setStr("A")
                res()
            }).catch((err)=>{console.log(err)})
            if(formdata.Sid){
                let allPUrl = `${process.env.REACT_APP_SERVER_URL}/ps/dropppp/${formdata.Did}/${formdata.Sid}`
                axios.get(allPUrl).then((pD)=>{
                    setAllPS(pD.data)
                    console.log(pD.data)
                    setStr("A")
                }).catch((err)=>{console.log(err)})
            }
            //console.log(formdata.Did)

        }
        console.log(formdata.Sid)

    },[formdata.Did,formdata.Sid])


    return(
        <div>
            <select onChange={(event)=>{
                setFormdata({...formdata,Did:event.target.value})
            }}>
                <option value="0">-select-</option>
                {disD.map((data, key) => (
                    <option id={key
                    } value={data._id}>{data.dist_name}</option>
                ))}
            </select>
            {(formdata.Did)? (
                <select onChange={(event)=>{
                    setFormdata({...formdata,Sid:event.target.value})
                }}>
                    <option>-select-</option>
                    {subD.map((data, key) => (
                        <option value={data._id}>{data.subdiv_name}</option>
                    ))}
                </select>

            ): (<div></div>)}

            <div className={"mt-10 mr-5"}>
                {allPS.map((ps, key) => (
                    <div className={"grid grid-cols-5 gap-4 p-2 mb-5 shadow-inner shadow-black"}>
                        <div className={"flex justify-center items-center border-r-2 border-black "}>
                            <div className={"text-3xl font-bold"}>
                                {key+1}
                            </div>
                        </div>
                        <div className={"col-span-3"}>
                            <div className={"pb-2"}>
                                <div className={"text-xl font-bold"}>
                                    {ps.name}
                                </div>
                                -{ps.addr}
                            </div>
                            <div>
                                Contact No: {ps.contact}
                                EMail: {ps.email}
                            </div>
                        </div>
                        <div  className={"flex justify-center items-center border-l-2 border-black"}>
                            <button
                                className={"text-7xl"}
                                onClick={()=>sendPID(ps._id)}
                            >
                                <MdOutlineQrCode2/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default QrCOde;