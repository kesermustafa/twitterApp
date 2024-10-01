import React from 'react';
import {FaHeart, FaRegHeart, FaShareNodes, FaRetweet, FaRegComment} from "react-icons/fa6";

const Buttons = ({tweet}) => {
    return (
        <div className='flex items-center justify-between'>
            <div className="twitter-tweet rounded-full hover:bg-blue-500/30 p-3 cursor-pointer transition">
                <FaRegComment/>
            </div>

            <div className="twitter-tweet rounded-full hover:bg-green-400/30 p-3 cursor-pointer transition">
                <FaRetweet/>
            </div>

            <div className="twitter-tweet rounded-full hover:bg-red-600/30 p-3 cursor-pointer transition">
                <FaRegHeart/>
            </div>

            <div className="twitter-tweet rounded-full hover:bg-amber-500/30 p-3 cursor-pointer transition">
                <FaShareNodes/>
            </div>
        </div>
    );
};

export default Buttons;
