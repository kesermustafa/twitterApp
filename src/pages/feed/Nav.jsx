import {navSections} from "../../constants.jsx";
import {BiSolidDoorOpen} from "react-icons/bi";
import {signOut} from "firebase/auth"
import {auth} from "../../firebase/index.js";

const Nav = ({user}) => {

    return (
        <nav className='flex flex-col justify-between items-end px-[2px] md:px-2 py-4'>

            <div className='max-md:w-full '>
                <img className='mx-auto w-7 md:w-12 mb-5' src="./twitter.png" alt=""/>

                {
                    navSections.map((i, index) => (
                        <div key={index}
                             className='flex items-center gap-3 text-[22px] md:text-xl  py-3 px-[6px]
                         cursor-pointer rounded-lg transition hover:bg-zinc-700 max-md:justify-center'>
                            {i.icon}
                            <span className='whitespace-nowrap max-md:hidden'>{i.title}</span>
                        </div>
                    ))
                }
            </div>

            {!user ? (<div className='size-12 bg-zinc-400 rounded-full animate-bounce'/>) :
                <div className={'flex flex-col md:me-5 max-md:w-full gap-5'}>
                    <div className='flex flex-col items-center gap-3'>
                        <img className={'rounded-full w-7 h-7'} src={user?.photoURL} alt="user-img"/>
                        <p className={'max-md:hidden text-sm'}>{user?.displayName}</p>
                    </div>

                    <button
                        onClick={() => {
                            signOut(auth)
                        }}
                        className=' mx-auto flex flex-col px-1 gap-1 justify-center items-center text-2xl md:text-base p-1 bg-zinc-700 rounded transition hover:bg-zinc-900 cursor-pointer'>
                        <BiSolidDoorOpen size={24}/>
                        <span className='whitespace-nowrap text-sm max-md:hidden '>Cikis Yap</span>
                    </button>
                </div>}


        </nav>
    );
};

export default Nav;
