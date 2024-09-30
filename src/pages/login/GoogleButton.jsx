import {auth, provider} from "../../firebase/index.js";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {signInWithPopup} from "firebase/auth"

const GoogleButton = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                toast.success("Giris basarili");
                navigate("/feed");
                }

            )
            .catch((error) => toast.error("Hata :" + error.code))

    }

    return (
        <button
            onClick={handleClick}
            className='bg-white flex items-center py-2 px-10 rounded-full gap-3 transition hover:bg-gray-300 text-black whitespace-nowrap'>
            <img className='h-[30px]' src="./google.png" alt=""/>
            Google ile giris yap
        </button>
    );
};

export default GoogleButton;

