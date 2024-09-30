import React, {useState} from 'react';
import {auth} from "../../firebase/index.js";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import MailModal from "../../components/modal/MailModal.jsx";
import EditModal from "../../components/modal/EditModal.jsx";

const Form = () => {

    const [isSignUp, setIOsSignUp] = useState(false)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [isOpen, setIsOpen] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignUp) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    toast.success("Hesabiniz olusturuldu");
                    navigate("/feed");
                })
                .catch(err => {
                    toast.error("Hata : " + err.message)

                })
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    toast.success("Giris basarili");
                    navigate("/feed");
                })
                .catch(err => {
                    toast.error("Hata : " + err.message)
                })
        }

        e.target.reset()

    }

    return (

        <>
            <form onSubmit={handleSubmit} className='flex w-full flex-col '>
                <label htmlFor=''>Email</label>
                <input type="text" onChange={(e) => {
                    setEmail(e.target.value)
                }}/>

                <label className='mt-5' htmlFor=''>Password</label>
                <input type="password" onChange={(e) => {
                    setPassword(e.target.value)
                }}/>

                <p onClick={()=>{setIsOpen(true)}} className='text-sm text-gray-500 cursor-pointer text-end mt-2 hover:text-gray-400'>
                    Sifrenizimi unuttunuz?
                </p>

                <button className='mt-10 bg-white text-black rounded-full p-1 font-bold transition hover:bg-gray-300'
                        type='submit'>
                    {
                        isSignUp ? "Kaydol" : "Giris yap"
                    }

                </button>
            </form>

            <p className='mt-5 '>
                <span className='text-gray-500'>Hesabiniz</span>
                <span className='text-gray-500 ms-1'>
                    {
                        isSignUp ? "varsa" : "yoksa"
                    }
                </span>
                <span className='text-blue-500 ms-1 cursor-pointer hover:underline'
                      onClick={() => setIOsSignUp(!isSignUp)}
                >
                    {
                        isSignUp ? "Giris yapin" : "Kaydolun"
                    }
                </span>
            </p>

            <MailModal isOpen={isOpen} close={() => setIsOpen(false)}  />

        </>
    );
};

export default Form;
