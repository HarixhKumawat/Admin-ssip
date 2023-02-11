import {useEffect, useRef, useState} from "react";
import {LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha} from "react-simple-captcha";
import axios from "axios";

const Login = () => {
    const valueRef = useRef(null);
    const [formdata,setFormdata]=useState({
        email:'',
        password:'',
        captcha: ""
    })


    const Login = async (e) =>{
        e.preventDefault();
        console.log("wow")
        console.log(formdata)
        if( validateCaptcha(formdata.captcha) === true ){
            let verifyUrl = `${process.env.REACT_APP_SERVER_URL}/admin/verify`
            let response = await axios.post(verifyUrl,{email: formdata.email, password: formdata.password}).catch((error)=>{
                console.log(error)
                alert("Invalid login")
            })

            if(response.data !== undefined && response.statusText === "OK"){
                console.log(response.data)
                await sessionStorage.setItem("token",response.data.token)
                await sessionStorage.setItem("pid",response.data.pid)
                window.location.reload(false)
            }

        } else {
            console.log("captcha is wrong");
        }

        // eslint-disable-next-line eqeqeq
        setFormdata({...formdata,captcha:""})

    }
    useEffect( () => {
        // console.log("Hi buddy");
        loadCaptchaEnginge(4);
    },[]);

    return (
        <div className={"flex h-screen items-center justify-center text-gray-700 text-xl font-bold"}>
            <form className={"mb-20"} >
                <div className="mb-6">
                    <label
                        className="block text-gray-700 font-medium mb-2"
                        htmlFor="Username"
                    >
                        Email
                    </label>
                    <input
                        className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        type="text" id="Text" name="Text" placeholder="Username" value={formdata.email} onChange={(event)=>{
                        setFormdata({...formdata,email:event.target.value})
                    }} autoComplete="off" />
                    {/*{ errors.Email && touched.Email ? (<p className="form-error">{errors.Email}</p>) : null }*/}
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 font-medium mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        type="password" id="Password" name="Password" placeholder="Password" value={formdata.password} onChange={(event)=>{
                        setFormdata({...formdata,password:event.target.value})
                    }} autoComplete="off"/>
                    {/*{ errors.Password && touched.Password ? <p className="form-error">{errors.Password}</p> : null }*/}
                </div>
                <div className="">
                    <div className={"flex fit-w border-2"}>
                        < LoadCanvasTemplate reloadText="⟳" reloadColor="red" />
                    </div>
                    <div  className="input-block">
                        <input
                            className="block w-full mt-4 px-4 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="text" ref={valueRef} id="captcha" name="captcha" placeholder="Enter the Captcha"  value={formdata.captcha} onChange={(event)=>{
                            setFormdata({...formdata,captcha:event.target.value})
                        }} autoComplete="off"/>
                        {/*{ errors.captcha && touched.captcha ? <p className="form-error">{errors.captcha}</p> : null }*/}
                    </div>
                </div>
                <div className="flex items-center justify-between modal-button">
                    <button
                        className="bg-blue-600 inline-block px-6 py-2.5 mt-6 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                        type="submit" onClick={ (e) => { Login(e) }}
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}




export default Login;