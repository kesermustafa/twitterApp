import React, {useState} from 'react';
import {BsCardImage} from "react-icons/bs";
import {toast} from "react-toastify";
import {db} from "../../firebase/index.js";
import {collection, addDoc, serverTimestamp} from "firebase/firestore"
import uploadToStorage from "../../firebase/uploadToStorage.js";
import Loader from "../loader/index.jsx";

const Form = ({user}) => {

    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const text = e.target[0].value.trim();
        const file = e.target[1].files[0];

        if (!text && !file) {
            return toast.warning("Lutfen icerik giriniz");
        }

        setIsLoading(true);

        // resmi storage e kaydet
        const url = await uploadToStorage(file);

        // collection referansi al
        const tweetsCol = collection(db, "tweets")

        await addDoc(tweetsCol, {
            textContent: text,
            imageContent: url,
            isEdited: false,
            likes: [],
            user: {
                id: user.uid,
                name: user.displayName,
                photo: user.photoURL,
            },
            createAt: serverTimestamp(),
        })

        setIsLoading(false);

        e.target.reset()

    }

    return (
        <form onSubmit={handleSubmit} className='border-b border-zinc-500 p-5 flex gap-3'>

            <img className='h-[32px] md:h-[45px] rounded-full mt-1' src={user?.photoURL} alt="user"/>

            <div className='w-full'>
                <input className='w-full mt-0 text-gray-300 bg-transparent shadow-none mb-2 md:text-lg'
                       type="text" placeholder="Neler oluyor ?..."/>

                <div className='flex items-center justify-between'>
                    <input id='resim' type="file" className='hidden'/>

                    <label htmlFor="resim">
                        <BsCardImage id='resim' size={24} className="text-gray-500 hover:text-blue-600 cursor-pointer"/>
                    </label>
                    <button
                        disabled={isLoading}
                        className='grid place-items-center min-w-[85px] min-h-[40px] text-blue-600 border border-blue-500 hover:bg-zinc-900 transition rounded-full px-4'>
                        {
                            isLoading ? <Loader/> : "Tweetle"
                        }
                    </button>
                </div>
            </div>

        </form>
    );
};

export default Form;
