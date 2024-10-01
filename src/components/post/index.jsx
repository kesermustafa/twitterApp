import React from 'react';
import UserInfo from "./UserInfo.jsx";
import Dropdown from "./Dropdown.jsx";
import Content from "./Content.jsx";
import Buttons from "./Buttons.jsx";

const Post = ({tweet}) => {

    return (
        <div className='text-white p-5 border-b border-zinc-500 flex gap-3'>
            <img src={tweet.user.photo}
                 alt=""
                 className='size-12 rounded-full'
            />

            <div className={'w-full'}>

                <div className='flex items-center justify-between'>
                    <UserInfo tweet={tweet}/>

                    <Dropdown tweet={tweet}/>
                </div>

                <Content tweet={tweet}/>
                <Buttons tweet={tweet}/>

            </div>

        </div>
    );
};

export default Post;
