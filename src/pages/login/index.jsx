import React from 'react';
import GoogleButton from "./GoogleButton.jsx";
import Form from "./Form.jsx";

const Login = () => {
    return (
        <div className="login h-[100vh] bg-[#242424] text-white grid place-items-center">
            <div
                className="flex w-full max-w-[600px] justify-center pt-10 h-full py-8 items-center flex-col bg-black  md:px-24 px-6 rounded-lg gap-10">
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
