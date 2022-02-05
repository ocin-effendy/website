import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import logo from "./../../asset/image/logo.svg";
import loginPage from "../../asset/image/login.jpg";
import ButtonLogin from '../../component/ButtonLogin';
import GoogleLogin from '../../component/GoogleLogin';



function Login () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // const handleTextChange = (e) => {
    //     setState({
    //         [e.target.id]: e.target.value
    //     })
    // }

    const handleSendData = () => {

        const userData = {
            email: email,
            password: password
        }
        localStorage.setItem('userData', JSON.stringify(userData));
        setEmail('');
        setPassword('');
        navigate(-1);
    }


    return (
        <div className='w-full h-full overflow-hidden'>
            <div className="flex items-center w-4/5 mx-auto my-4">
                <img className='w-7 h-7' src={logo} alt="logo" />
                <h1 className='md:text-xl ml-4 font-medium text-blue-one'>Mhysa Learning</h1>
            </div> 

            <div className="flex items-center md:justify-between md:w-8/12 mx-auto my-12">
                <img className='w-96 h-72 hidden md:block' src={loginPage} alt="loginPage" />

                <div className="flex flex-col items-center mx-auto">

                    <GoogleLogin />

                    <div className="flex mb-4 mt-1 items-center">
                        <span className='text-xs md:text-base'>Belum punya akun?</span>
                        <a href="#" className='underline text-blue-600 text-xs md:text-base ml-1'> Daftar Sekarang</a>
                    </div>

                    <div className="flex flex-col md:w-96">
                        <label className='m-3 text-sm md:text-base'>Email</label>
                        <input className='pl-5 py-2 border-2 rounded-lg outline-none' type="email" id="email" placeholder="Ex : name@example.com" value={email} onInput={e => setEmail(e.target.value)}  required />
                        <label className='m-3 text-sm md:text-base'>Password</label>
                        <input className='px-3 py-2 border-2 rounded-lg outline-none'  type="password" id="password" placeholder="Ex : password" value={password} onInput={e => setPassword(e.target.value)} required />
                    </div>

                   

                    <div className="flex justify-between my-3 md:px-12 w-full">
                        <div className="flex items-center">
                            <input type="checkbox" />
                            <span className="text-xs md:text-sm ml-3">Ingat saya</span>
                        </div>
                        <a className="underline font-light text-blue-600 text-xs md:text-sm" href="#">Lupa kata sandi</a>
                    </div>

                    < ButtonLogin data={handleSendData} />

                </div>
            </div>
            
        </div>
    )
        
  
}

export default Login;
