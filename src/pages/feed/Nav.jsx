import React from 'react';
import {navSections} from "../../constants.jsx";
import {BiSolidDoorOpen} from "react-icons/bi";
import {signOut} from "firebase/auth"
import {auth} from "../../firebase/index.js";

const Nav = () => {
    return (
        <nav className='flex flex-col justify-between items-end px-2 py-4'>

            <div >
                <img className='mx-auto w-8 md:w-12 mb-5'  src="./twitter.png" alt=""/>

                {
                    navSections.map((i, index) => (
                        <div key={index}
                             className='flex items-center gap-3 text-2xl md:text-xl p-3
                         cursor-pointer rounded-lg transition hover:bg-zinc-700 max-md:justify-center'>
                            {i.icon}
                            <span className='whitespace-nowrap max-md:hidden'>{i.title}</span>
                        </div>
                    ))
                }
            </div>

            <div className={'flex flex-col gap-5'}>
                <div className='flex flex-col items-center gap-3'    >
                    <img className={'rounded-full w-8 h-8'} src="" alt="user-img"/>
                    <p className={'max-md:hidden'}>Mustafa</p>
                </div>

                <button
                    onClick={()=>{
                        signOut(auth)
                    }}
                    className=' mx-auto flex flex-col gap-1 justify-center items-center text-2xl md:text-base p-1 bg-zinc-700 rounded transition hover:bg-zinc-900 cursor-pointer'>
                    <BiSolidDoorOpen size={24}/>
                    <span className='whitespace-nowrap text-sm max-md:hidden '>Cikis Yap</span>
                </button>
            </div>

        </nav>
    );
};

export default Nav;
