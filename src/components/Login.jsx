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
                <div className="input-block">
                    <label htmlFor="Username" className="mb-2 mr-16">E-mail</label>
                    <input type="text" id="Text" name="Text" placeholder="Username" value={formdata.email} onChange={(event)=>{
                        setFormdata({...formdata,email:event.target.value})
                    }} autoComplete="off" />
                    {/*{ errors.Email && touched.Email ? <p className="form-error">{errors.Email}</p> : null }*/}
                </div>
                <div className="input-block">
                    <label htmlFor="password" className="mb-2 mr-6">Password</label>
                    <input type="password" id="Password" name="Password" placeholder="Password" value={formdata.password} onChange={(event)=>{
                        setFormdata({...formdata,password:event.target.value})
                    }} autoComplete="off"/>
                    {/*{ errors.Password && touched.Password ? <p className="form-error">{errors.Password}</p> : null }*/}
                </div>
                <div className="">
                    <div className={"flex w-[10vw] border-2"}>
                        < LoadCanvasTemplate reloadText="⟳" reloadColor="red" />
                    </div>
                    <div  className="input-block">
                        <input type="text" ref={valueRef} id="captcha" name="captcha" placeholder="Enter the Captcha"  value={formdata.captcha} onChange={(event)=>{
                            setFormdata({...formdata,captcha:event.target.value})
                        }} autoComplete="off"/>
                        {/*{ errors.captcha && touched.captcha ? <p className="form-error">{errors.captcha}</p> : null }*/}
                    </div>
                </div>
                <div className="modal-button">
                     <button className="input-button" onClick={ (e) => { Login(e) }}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login;