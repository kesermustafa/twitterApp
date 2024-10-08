import React, {useState} from 'react';
import {FaHeart, FaRegHeart, FaShareNodes, FaRetweet, FaRegComment} from "react-icons/fa6";
import {doc, updateDoc, arrayUnion, arrayRemove} from "firebase/firestore";
import {auth, db} from "../../firebase/index.js";
import CommentModal from "../modal/CommentModal.jsx";

const Buttons = ({tweet}) => {

    const isLiked = tweet.likes.includes(auth.currentUser.uid)

    const [isOpen, setIsOpen] = useState(false)

    const toggleLike = async () => {

        const tweetRef = doc(db, 'tweets', tweet.id)

        await updateDoc(tweetRef, {
            likes: isLiked ? arrayRemove(auth.currentUser.uid) : arrayUnion(auth.currentUser.uid),
        })
    }

    const handleComment = async () => {
        setIsOpen(true)
    }

    return (
        <div className='flex items-center justify-between'>
            <div
                className="twitter-tweet flex items-center gap-2 rounded-full hover:bg-blue-500/30 p-3 cursor-pointer transition"
                onClick={handleComment}
            >
                <FaRegComment className={tweet.comments?.length > 0 ? 'text-blue-500' : 'text-gray-500'}/>
                {
                    tweet.comments?.length > 0 && <span className='w-2 text-sm'>{tweet.comments?.length}</span>
                }

            </div>

            <div className="twitter-tweet rounded-full hover:bg-green-400/30 p-3 cursor-pointer transition">
                <FaRetweet/>
            </div>

            <div
                className="twitter-tweet flex items-center gap-2 rounded-full hover:bg-red-600/30 p-3 cursor-pointer transition"
                onClick={toggleLike}
            >
                {isLiked ? <FaHeart className={'text-red-500'}/> : <FaRegHeart/>}
                {
                    tweet.likes.length > 0 && <span className='w-2 text-sm'>{tweet.likes.length}</span>
                }

            </div>

            <div className="twitter-tweet rounded-full hover:bg-amber-500/30 p-3 cursor-pointer transition">
                <FaShareNodes/>
            </div>

            <CommentModal tweet={tweet} isOpen={isOpen}
                          close={() => {
                              setIsOpen(false)
                          }}/>
        </div>
    );
};

export default Buttons;
