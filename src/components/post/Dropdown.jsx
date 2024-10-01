import React from 'react';
import {RiMenuAddFill} from "react-icons/ri";
import {auth} from "../../firebase/index.js";

const Dropdown = ({tweet}) => {

    const isOwn = (tweet.user.id === auth.currentUser.uid);

    return (
        isOwn && <div>
            <RiMenuAddFill size={18} className='cursor-pointer hover:text-gray-300 hover:scale-105'/>
        </div>
    );
};

export default Dropdown;
