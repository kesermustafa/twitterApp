import React from 'react';
import Nav from "./Nav.jsx";
import Main from "./Main.jsx";
import Aside from "./Aside.jsx";



const Feed = () => {

    return (
        <div className="feed h-screen bg-black overflow-hidden text-white">

            <Nav/>
            <Main/>
            <Aside/>

        </div>
    );
};

export default Feed;
