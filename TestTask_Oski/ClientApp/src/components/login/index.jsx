import React, { useState } from 'react';
import './loginStyle.css';
import client from '../../client';
import setAuthToken from '../../setAuthToken';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGIN_USER } from './types';
import jwt from "jsonwebtoken";


const LoginPage = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [invalid, setInvalid] = useState("");
    const history = useHistory(); 
    const dispatch = useDispatch();
    //const [redirect, set]

   const handleChange=(e) => {
    //console.log(e.target.name, e.target.value);
    setFormData({...formData, [e.target.name]: e.target.value});
   }

    const hangleLogin = async () => {
        try {
            const {data} = await client.login(formData);
            const {token} = data;
            localStorage.token = token;
            setAuthToken(token);
            const {name} = jwt.decode(token, { json: true });
            dispatch({
                type: LOGIN_USER,
                payload: name
            });
            setInvalid("");
            history.push("/");
        } catch(ex) {
            setInvalid("Не вірний логін або пароль!");
            console.log("Not valid data");
        }

        // await client.profile().
        //     then((resp) => resp.json()).
        //     then((resp) => {
        //         console.log(resp);
        //     });

    }

    return (
        <>

            <div className="wrapper">
                <div className="logo"> <img src="https://s.dou.ua/CACHE/images/img/static/companies/Logo_ygOIcWI/99161b02dcb6622a55cf75709a2b8b7f.png" alt="" /> </div>
                <div className="text-center mt-4 name"> Login </div>
                {invalid && 
                    <div className="alert alert-danger" role="alert">
                        {invalid}
                    </div>
                }

                <div className="p-3 mt-3">
                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user"></span>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={formData.email}
                            placeholder="Email"
                            onChange={handleChange} /> </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key"></span>
                        <input
                            type="password"
                            name="password"
                            id="pwd"
                            value={formData.password}
                            placeholder="Password"
                            onChange={handleChange}
                        />
                       
                    </div>
                    <button className="btn mt-3" onClick={() => hangleLogin()}>Login</button>
                </div>

            </div>


        </>
    )
};

export default LoginPage;
