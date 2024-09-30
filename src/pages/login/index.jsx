import React from 'react';
import GoogleButton from "./GoogleButton.jsx";
import Form from "./Form.jsx";

const Login = () => {
    return (
        <div className="login h-screen bg-[#242424] text-white grid place-items-center">
            <div className="flex items-center  flex-col bg-black py-16 px-32 rounded-lg gap-10">
                <div className="flex justify-center">
                    <img className='h-[60px]' src="./twitter.png" alt="X-logo"/>
                </div>
                <h1 className='text-lg font-bold'>Twitter'a giris yap</h1>

                <GoogleButton/>

                <Form/>
            </div>
        </div>
    );
};

export default Login;
