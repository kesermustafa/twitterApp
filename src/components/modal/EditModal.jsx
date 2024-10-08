import React, {useState} from 'react';
import Modal from "./index.jsx";
import {db} from "../../firebase/index.js";
import {doc, updateDoc} from 'firebase/firestore'
import {toast} from "react-toastify";
import uploadToStorage from "../../firebase/uploadToStorage.js";
import {IoImageOutline} from "react-icons/io5";

const EditModal = ({isOpen, close, tweet, setEditOpen}) => {

    const [isPicDeleting, setIsPicDeleting] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const text = e.target[0].value;
        const image = e.target[1]?.files?.[0]

        const tweetRef = doc(db, "tweets", tweet.id)

        let updatedData = {textContent: text, isEdited: true}

        if (isPicDeleting) {
            updatedData.imageContent = null;
        }

        if (image) {
            const imageUrl = await uploadToStorage(image);
            updatedData.imageContent = imageUrl;
        }

        await updateDoc(tweetRef, updatedData)
            .then(() => {
                toast.success("Tweet icerigi guncellendi")
            })
            .catch(() => {
                toast.error("Bir hata oustu")
            })

        setEditOpen(false)
        setIsPicDeleting(false)
        //modal kapat
        close()
    }
 
    return (
        <Modal isOpen={isOpen} close={close}>
            <h1 className='text-2xl text-center text-emerald-500'>Tweet'i duzenle</h1>

            <form onSubmit={handleSubmit} className='flex flex-col mt-8'>
                <label htmlFor="">Icerigi duzenle</label>
                <input defaultValue={tweet.textContent} className={'mt-2'} type="text"/>

                {
                    (!isPicDeleting && tweet.imageContent)
                        ?
                        <div className='flex flex-col mt-8 mb-2'>
                            <label className={'mb-2'} htmlFor="">Fotograf Ekle / Degistir</label>
                            <button
                                className='bg-amber-500'
                                type='button'
                                onClick={() => {
                                    setIsPicDeleting(true)
                                }}
                            >
                                Resmi kaldir
                            </button>
                        </div>
                        : <div className={'mt-8'}>
                            <label htmlFor="image"
                                   className={'flex w-36 py-1 cursor-pointer px-2 rounded gap-2 items-center hover:bg-zinc-600'}>
                                <IoImageOutline
                                    size={24}/> Resim
                                Sec</label>
                            <input hidden={true} type='file' id='image'/>
                        </div>
                }


                <div className="flex justify-end gap-5 mt-5">
                    <button className='rounded hover:bg-zinc-700 transition border border-red-500 text-red-500 px-4'
                            type='button'
                            onClick={() => {
                                close
                                setEditOpen(false)
                            }}
                    >Iptal
                    </button>
                    <button
                        className='rounded hover:bg-zinc-700 transition  text-green-600 border border-green-500 px-3'>
                        Kaydet
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default EditModal;
