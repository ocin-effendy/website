import React, { Component } from 'react';
import logo from "./../../asset/image/logo.svg";
import signUpPage from "../../asset/image/signUp.jpg";
import ButtonLogin from '../../component/ButtonLogin';
import GoogleLogin from '../../component/GoogleLogin';


class SignUp extends Component {
  render() {
    return (
        <div className='w-full h-full overflow-hidden'>
            <div className="flex items-center w-4/5 mx-auto my-4">
                <img className='w-7 h-7' src={logo} alt="logo" />
                <h1 className='md:text-xl ml-4 font-medium text-blue-one'>Mhysa Learning</h1>
            </div> 

            <div className="flex items-center lg:justify-between lg:w-8/12 mx-auto my-12">
                <img className='w-96 h-72 hidden lg:block mr-5' src={signUpPage} alt="loginPage" />

                <div className="flex flex-col items-center mx-auto">

                    <GoogleLogin />

                    <div className="flex mb-4 mt-1 items-center">
                        <span className='text-xs md:text-base'>Belum punya akun?</span>
                       <a href="#" className='underline text-blue-600 text-xs md:text-base ml-1'> Daftar Sekarang</a>
                    </div>

                    <div className="flex flex-col">
                        <label className='m-3 text-sm md:text-base'>Nama Lengkap</label>
                        <input className='px-3 py-2 border-2 rounded-lg outline-none' type="text" id="name" placeholder="Ex : Harry Alexander" required />
                        <div className="md:flex justify-between">
                            <div className="my-4 md:my-1">
                                <label className='m-3 text-sm md:text-base'>Username</label>
                                <input className='px-3 py-2 border-2 rounded-lg outline-none' type="text" id="username" placeholder="Minimum 5 Character"  required />
                            </div>
                            <div className="mt-4 md:mt-1">
                                <label className='m-3 text-sm md:text-base'>Password</label>
                                <input className='px-3 py-2 border-2 rounded-lg outline-none' type="password" id="password" placeholder="Write in here" required />
                            </div>

                        </div>
                        <label className='m-3 text-sm md:text-base'>Email</label>
                        <input className='px-3 py-2 border-2 rounded-lg outline-none' type="email" id="email" placeholder="Ex : name@example.com" required />
                        <label className='m-3 text-sm md:text-base'>No HP</label>
                        <input className='px-3 py-2 border-2 rounded-lg outline-none' type="text" id="noHp" placeholder="Write in here" required />
                    </div>

                   

                    <div className="flex justify-between my-3 px-5 md:px-12 w-full">
                        <div className="flex items-center">
                            <input type="checkbox" />
                            <span className="text-xs md:text-sm ml-3">Ingat saya</span>
                        </div>
                        <a className="underline font-light text-blue-600 text-xs md:text-sm" href="#">Lupa kata sandi</a>
                    </div>

                    < ButtonLogin />

                </div>
            </div>
            
        </div>
    )
        
  }
}

export default SignUp;
