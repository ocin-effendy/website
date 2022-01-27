import React, {useState} from 'react';
import logo from "./../../asset/image/logo.svg";



export default function Nav(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [isProgram, setIsProgram] = useState(false);
    


    
    return (
        <div className="w-full font-Lato flex items-center " >
            <nav className='md:flex lg:w-4/5 w-11/12  mx-auto md:justify-between md:items-center py-2 '>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex items-center">
                        <img src={logo} alt="logo" />
                        <h1 className='text-xl ml-4 font-medium text-blue-one'>Mhysa Learning</h1>
                    </div> 
                   <button onClick={() => setIsOpen(!isOpen)} className='md:hidden '>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path className={`${!isOpen ? 'opacity-100' : 'opacity-0'} transition-all duration-500 `} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            <path className={`${isOpen ? 'opacity-100' : 'opacity-0'} transition-all duration-500`} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />

                        </svg>
                   </button>
                </div>

                <div className={`${isOpen ? 'opacity-100' : 'opacity-0'} w-full mt-1 md:mt-0 left-0 md:w-fit md:opacity-100 bg-slate-50 md:bg-transparent  absolute md:static md:flex flex-col md:flex-row transition-all duration-500 z-10`}>
                    <ul className='flex flex-col md:flex-row items-center'>
                        <li className={`${props.data === '/' ? 'border-b-2' : ''} mx-4 w-full text-center md:w-fit flex flex-col py-1 border-indigo-900`}>
                            <a  href="/" className='text-blue-one text-sm px-20 py-3 md:p-0' >Home</a>
                        </li>
                        <li className='mx-4 flex flex-col py-1'>
                            <div className="relative inline-block px-44 py-3 md:p-0">
                                <button onClick={() => setIsProgram(!isProgram)} className='relative z-10 flex items-center md:p-2 text-sm text-blue-one ' type='submit'>
                                    <span>Program</span>
                                    <div className="relative">
                                        <svg className="w-5 h-5 absolute" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className={`${!isProgram ? 'block' : 'hidden'}`}  d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="currentColor"></path>
                                        </svg>
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path className={`${isProgram ? 'block' : 'hidden'}`} fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                   
                                </button>

                                <div className={`${isProgram ? 'block' : 'hidden'} absolute z-20 w-56 py-2 mt-1 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800 px-1`}>
                                    <a href="/mhysaClass" className={`${props.data === '/mhysaClass' ? 'border-l-2' : ''} flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-300 border-indigo-900`}>
                                        <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 19H3C1.89543 19 1 18.1046 1 17V16H3V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V16H23V17C23 18.1046 22.1046 19 21 19ZM5 7V16H19V7H5Z" fill="currentColor"></path>
                                        </svg>

                                        <span className="mx-1">
                                            Mhysa Class
                                        </span>
                                    </a>

                                    <a href="/mhysaSpeakers" className={`${props.data === '/mhysaSpeakers' ? 'border-l-2' : ''} flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-300 border-indigo-900`}>
                                        <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 3C6.23858 3 4 5.23858 4 8C4 10.7614 6.23858 13 9 13C11.7614 13 14 10.7614 14 8C14 5.23858 11.7614 3 9 3ZM6 8C6 6.34315 7.34315 5 9 5C10.6569 5 12 6.34315 12 8C12 9.65685 10.6569 11 9 11C7.34315 11 6 9.65685 6 8Z" fill="currentColor"></path>
                                            <path d="M16.9084 8.21828C16.6271 8.07484 16.3158 8.00006 16 8.00006V6.00006C16.6316 6.00006 17.2542 6.14956 17.8169 6.43645C17.8789 6.46805 17.9399 6.50121 18 6.5359C18.4854 6.81614 18.9072 7.19569 19.2373 7.65055C19.6083 8.16172 19.8529 8.75347 19.9512 9.37737C20.0496 10.0013 19.9987 10.6396 19.8029 11.2401C19.6071 11.8405 19.2719 12.3861 18.8247 12.8321C18.3775 13.2782 17.8311 13.6119 17.2301 13.8062C16.6953 13.979 16.1308 14.037 15.5735 13.9772C15.5046 13.9698 15.4357 13.9606 15.367 13.9496C14.7438 13.8497 14.1531 13.6038 13.6431 13.2319L13.6421 13.2311L14.821 11.6156C15.0761 11.8017 15.3717 11.9248 15.6835 11.9747C15.9953 12.0247 16.3145 12.0001 16.615 11.903C16.9155 11.8059 17.1887 11.639 17.4123 11.416C17.6359 11.193 17.8035 10.9202 17.9014 10.62C17.9993 10.3198 18.0247 10.0006 17.9756 9.68869C17.9264 9.37675 17.8041 9.08089 17.6186 8.82531C17.4331 8.56974 17.1898 8.36172 16.9084 8.21828Z" fill="currentColor"></path>
                                            <path d="M19.9981 21C19.9981 20.475 19.8947 19.9551 19.6938 19.47C19.4928 18.9849 19.1983 18.5442 18.8271 18.1729C18.4558 17.8017 18.0151 17.5072 17.53 17.3062C17.0449 17.1053 16.525 17.0019 16 17.0019V15C16.6821 15 17.3584 15.1163 18 15.3431C18.0996 15.3783 18.1983 15.4162 18.2961 15.4567C19.0241 15.7583 19.6855 16.2002 20.2426 16.7574C20.7998 17.3145 21.2417 17.9759 21.5433 18.7039C21.5838 18.8017 21.6217 18.9004 21.6569 19C21.8837 19.6416 22 20.3179 22 21H19.9981Z" fill="currentColor"></path>
                                            <path d="M16 21H14C14 18.2386 11.7614 16 9 16C6.23858 16 4 18.2386 4 21H2C2 17.134 5.13401 14 9 14C12.866 14 16 17.134 16 21Z" fill="currentColor"></path>
                                        </svg>

                                        <span className="mx-1">Mhysa Speakers</span>
                                    </a>
                                </div>
                            </div>
                                
                            
                        </li>
                     
                        <li className={`${props.data === '/aboutUs' ? 'border-b-2' : ''} mx-4 flex flex-col w-full text-center md:w-fit py-1 border-indigo-900`}>
                            <a  href="/aboutUs" className='text-blue-one text-sm px-20  py-3 md:p-0' >About Us</a>
                        </li>
                        <li className={`${props.data === '/contactUs' ? 'border-b-2' : ''} mx-4 flex flex-col  w-full text-center md:w-fit py-1 border-indigo-900`}>
                            <a  href="/contactUs" className='text-blue-one text-sm px-20  py-3 md:p-0' >Contact Us</a>
                        </li>
                        <li className={`${props.data === '/blog' ? 'border-b-2' : ''} mx-4 flex flex-col  w-full text-center md:w-fit py-1 border-indigo-900`}>
                            <a  href="/blog" className='text-blue-one text-sm px-20 py-3 md:p-0' >Blog</a>
                        </li>
                    </ul>

                    <div className="flex flex-row items-center relative lg:ml-32 2xl:ml-96 justify-center ">
                        <a href="/sign-in" 
                        className=" text-sm md:bg-white md:rounded-3xl sm:pl-7 py-1.5 md:border-2 
                        md:border-blue-one md:text-blue-one md:pr-28  px-7"
                        >Login</a>
                        <a href="/sign-up" 
                        className="text-sm md:bg-blue-one md:rounded-3xl px-7 py-1.5 md:border-2 
                        md:border-blue-one md:text-white md:absolute right-0" 
                        >Sign Up</a>
                    </div>

           
                </div>

                
            </nav>

        </div>
    )
}
