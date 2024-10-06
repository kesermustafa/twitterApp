import React, {useState} from 'react';
import {RiMenuAddFill} from "react-icons/ri";
import {auth, db} from "../../firebase/index.js";
import {FaRegEdit, FaRegTrashAlt} from "react-icons/fa";
import {doc, deleteDoc} from 'firebase/firestore'
import {toast} from "react-toastify";
import EditModal from "../modal/EditModal.jsx";

const Dropdown = ({tweet}) => {

    const isOwn = (tweet.user.id === auth.currentUser.uid);

    const [open, setOpen] = useState(false)
    const [isEditOpen, setIsEditOpen] = useState(false)

    const handleDelete = () => {
        const tweetRef = doc(db, "tweets/" + tweet.id)

        deleteDoc(tweetRef)
            .then(() => toast.success("Tweet akistan silindi"))
            .catch(() => toast.error("Bir hata olustu"))
        setIsEditOpen(false);
    }

    return (
        isOwn && <div className={'relative'}>
            <RiMenuAddFill
                size={18}
                className='cursor-pointer hover:text-gray-300 hover:scale-105 me-1'
                onClick={() => {
                    setIsEditOpen(!isEditOpen)
                }}
            />

            {
                isEditOpen &&

                <>
                    <nav className="popup-window absolute -left-[90px] ">
                        <ul className={'bg-zinc-100 p-1 rounded mt-3 flex flex-col gap-2'}>
                            <li className={'hover:bg-zinc-200 px-1 rounded transition'}>
                                <button
                                    onClick={() => {
                                        setOpen(true)

                                    }}
                                    className={'flex items-center justify-center gap-2 text-sm text-green-800'}>
                                    <FaRegEdit size={20}/>
                                    <span>Duzenle</span>
                                </button>
                            </li>

                            <li className={'hover:bg-zinc-200 px-1 rounded transition'}>
                                <button
                                    onClick={handleDelete}
                                    className={'flex items-center justify-center gap-2 text-sm text-red-500'}>
                                    <FaRegTrashAlt size={18}/>
                                    <span>Sil</span>
                                </button>
                            </li>
                        </ul>

                    </nav>

                    <EditModal tweet={tweet}
                               setEditOpen={setIsEditOpen}
                               isOpen={open}
                               close={() => {
                                   setIsEditOpen(false)
                                   setOpen(false)
                               }}/>
                </>
            }
        </div>

    );
};

export default Dropdown;
