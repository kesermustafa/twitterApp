import React, {useEffect, useState} from 'react';
import Nav from "./Nav.jsx";
import Main from "./Main.jsx";
import Aside from "./Aside.jsx";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../firebase/index.js";

const Feed = () => {

    const [user, setUser] = useState()

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user_data) => {
            setUser(user_data)
        })

        return () => {
            unsub()
        }
    }, []);

    return (
        <div className="feed h-screen bg-black overflow-x-hidden text-white">

            <Nav user={user}/>
            <Main user={user}/>
            <Aside/>

        </div>
    );
};

export default Feed;
