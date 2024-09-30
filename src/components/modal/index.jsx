import React from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";

const Modal = ({children, isOpen, close}) => {
    return (

        isOpen && <div className='fixed inset-0 bg-zinc-700/70 grid place-items-center z-50'>

        <div className='bg-black rounded-md  w-3/4 max-w-[800px] '>
            <div className='flex mt-3 me-3 justify-end'>
                <button onClick={close}><IoMdCloseCircleOutline size={24}/></button>
            </div>
            <div className='pt-3 pb-8 px-8'>
                {children}
            </div>

        </div>




        </div>
    );
};

export default Modal;
