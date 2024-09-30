import React from 'react';
import Modal from "./index.jsx";
import { BsSendCheck } from "react-icons/bs";
import {sendPasswordResetEmail} from "firebase/auth"
import {auth} from "../../firebase/index.js";
import {toast} from "react-toastify";


const MailModal = ({isOpen, close}) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const email = e.target[0].value.trim();

        sendPasswordResetEmail(auth, email)
            .then(()=>{
                toast.success("Email gonderildi. Lutfen kontrol ediniz...");
                close()
            })
            .catch((err)=>{
                console.log(err)
                toast.error("Uzgunuz bir hata olustu" + err)
            })

        e.target.reset();
    }

    return (
        <Modal isOpen={isOpen} close={close}>

            <form onSubmit={handleSubmit} className={'flex flex-col gap-4 justify-center items-center'}>
                <h2 className='text-3xl'>Sifrenizi mi unuttunuz?</h2>
                <p className={'text-gray-500 text-sm text-center'}>Email adresinize bir sifre sifirlama baglantisi
                    gonderecegiz! </p>

                <input className='w-full mt-5 rounded-full px-5' placeholder='email@exmple.com' type="text"/>

                <button
                    className='flex transition justify-center gap-3 items-center w-full mt-5 bg-gray-400 text-black rounded-full hover:bg-gray-300'
                    type='submit'> Mail
                    Gonder
                    <BsSendCheck size={20}/>
                </button>
                <button type='button'
                        className='w-72 transition mt-5 bg-amber-600 text-black rounded-full hover:bg-amber-300'
                        onClick={close}>
                    Iptal
                </button>


            </form>


        </Modal>
    );
};

export default MailModal;
