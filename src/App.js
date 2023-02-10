import './App.css';
import Home from "./components/Home";
import {useEffect, useState} from "react";
import Login from "./components/Login";
import axios from "axios";
function App() {
  const [login, setLogin] = useState(false);
  const checker = async () => {
    if( sessionStorage.getItem("token") ){
      console.log("ues isr i ehziouhds")
      await setLogin(true)
      const authAxios = axios.create({
        baseURL: process.env.REACT_APP_SERVER_URL,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      })
    } else {
      await setLogin(false)
    }
    console.log(login);
  }



  useEffect(()=>{

    window.addEventListener('storage', () => {
      checker();
    })
    checker();
    //window.location.reload(false);
  }, []);


  return (
      <div>
        {login ?(<Home/>) : (<Login/>)}
      </div>
  );
}

export default App;
