import React, {useState} from 'react';
import UserInfo from "./UserInfo.jsx";
import Dropdown from "./Dropdown.jsx";
import Content from "./Content.jsx";
import Buttons from "./Buttons.jsx";

const Post = ({tweet}) => {

    const [comments, setComments] = useState(false)

    return (
        <div className='text-white p-3 md:p-5 border-b border-zinc-500 flex gap-2'>
            <img src={tweet.user.photo}
                 alt=""
                 className=' size-6 md:size-12 rounded-full'
            />

            <div className={'w-full'}>

                <div className='flex items-center justify-between'>

                    <UserInfo tweet={tweet}/>

                    <Dropdown tweet={tweet}/>
                </div>

                <Content tweet={tweet}/>
                <Buttons tweet={tweet}/>

                {
                    tweet.comments &&
                    <button onClick={() => setComments(!comments)}
                            className='text-sm italic my-2 cursor-pointer hover:underline hover:text-blue-600'>Yorumlari
                        Gor
                    </button>

                }

                {comments && tweet.comments.map((item, index) => (

                    <div key={index} className='flex flex-col text-sm rounded gap-2 p-3 bg-zinc-700 mb-2'>

                        <div className='flex items-center gap-2'>
                            <img className='size-8 rounded-full' src={item.photo} alt=""/>
                            <p className='border-b border-zinc-600 text-gray-300'>{item.username} </p>
                        </div>

                        <p>{item.text}</p>
                    </div>

                ))}


            </div>

        </div>
    );
};

export default Post;
