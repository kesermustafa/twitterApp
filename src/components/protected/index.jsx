import React, {useEffect, useState} from 'react';
import {Navigate, Outlet, useNavigate} from "react-router-dom";
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from "../../firebase/index.js";
const Protected = () => {

    const [isAuth, setIsAuth] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user)=>{
            setIsAuth(user ? true : false)
        })
    }, []);


    // yonlendirme hatasi icin 1.cozum
    /* useEffect(() => {
        if (isAuth === false) {
            navigate("/");
        }
    },[isAuth])*/

    // 2.cozum bolesen Navigate kullanmak
    if (isAuth === false) {
       return <Navigate to={"/"}/>
    }


    return (
        <Outlet/>
    );
};

export default Protected;
