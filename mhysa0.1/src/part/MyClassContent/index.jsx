import React, {useState} from 'react';
import dashboard_white from '../../asset/image/dashboard_white.svg';
import resources_white from '../../asset/image/resources_white.svg';
import invoice_white from '../../asset/image/invoice_white.svg';
import setting_white from '../../asset/image/setting_white.svg';
import certificate_white from '../../asset/image/certificate_white.svg';
import logout from '../../asset/image/logout.svg';
import dashboard_blue from '../../asset/image/dashboard_blue.svg';
import resources_blue from '../../asset/image/resources_blue.svg';
import invoice_blue from '../../asset/image/invoice_blue.svg';
import setting_blue from '../../asset/image/setting_blue.svg';
import certificate_blue from '../../asset/image/certificate_blue.svg';
import Dashboard from '../../component/Dashboard';
import Resources from '../../component/Resources';
import Certificate from '../../component/Certificate';
import Setting from '../../component/Setting';
import Invoice from '../../component/Invoice';



function MyClassContent({email, pathName}) {
    const [isOpen, setIsOpen] = useState(false);
    
    const initialState = {
        active: 'dashboard'    
    }
    const [state, setState] = useState(initialState);
    const setLi = (e) => {
        setState({
            active: e
        })
        setIsOpen(false);
    }

    const contentMyClass = () => {
        if(state.active === 'dashboard') return <Dashboard email={email} pathName={pathName} />;
        else if (state.active === 'resources') return <Resources email={email} pathName={pathName}  />;
        else if (state.active === 'certificate') return <Certificate email={email} pathName={pathName} />;
        else if (state.active === 'setting') return <Setting />;
        else return < Invoice />;
    }

    const deleteLocalStorage = () => {
        localStorage.removeItem("userData");
        // window.location.reload();
    }
    


    

  return (
        <div className="w-full md:w-11/12 ">
            <div className={`${state.active === 'dashboard' ? 'justify-between' : ''} md:flex`}>
                <div className={`${!isOpen ? '-translate-x-full bg-opacity-0' : 'bg-opacity-100'} absolute md:relative top-0 md:bg-opacity-100 md:translate-x-0 w-full md:w-3/12 bg-blue-one h-screen transition-all duration-500 ease`}>
                    <div className="flex items-center justify-between py-5 border-b-2 border-white px-5 md:justify-center">
                        <div className="flex items-center md:flex-col ">
                            <img className='rounded-full w-10 h-10 lg:w-14 lg:h-14' src="/image/mentor.jpg" alt="mentor" />
                            <h1 className='text-sm text-white pl-3 lg:text-base'>Nico Ardia Effendy</h1>
                        </div>
                        <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? '' : 'absolute right-0 translate-x-full translate-y-8'} md:hidden `}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path className={`${!isOpen ? 'opacity-100' : 'opacity-0'} transition-all duration-500 `} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                <path className={`${isOpen ? 'opacity-100' : 'opacity-0'} transition-all duration-500`} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="">
                        <ul>
                            <li className={`${state.active === 'dashboard' ? 'bg-white text-blue-one': 'text-white'} px-10 lg:px-14 py-5 my-3 cursor-pointer transition-all duration-200 ease-in `}  onClick={(e) => setLi('dashboard')}>
                                <span className='flex items-center text-sm '><img className='w-5 h-5 mr-4' src={`${state.active === 'dashboard' ? dashboard_blue : dashboard_white}`} alt="icon" />Dashboard</span>
                            </li>
                            <li className={`${state.active === 'resources' ? 'bg-white text-blue-one ': 'text-white'} px-10 lg:px-14 py-5 my-3 cursor-pointer transition-all duration-200 ease-in `} onClick={(e) => setLi('resources')}>
                                <span className='flex items-center text-sm '><img className='w-5 h-5 mr-4' src={`${state.active === 'resources' ? resources_blue : resources_white}`} alt="icon" />Resources</span>
                            </li>
                            <li className={`${state.active === 'certificate' ? 'bg-white text-blue-one ': 'text-white'} px-10 lg:px-14 py-5 my-3 cursor-pointer transition-all duration-200 ease-in `} onClick={(e) => setLi('certificate')}>
                                <span className='flex items-center text-sm '><img className='w-5 h-5 mr-4' src={`${state.active === 'certificate' ? certificate_blue : certificate_white}`} alt="icon" />Certificate</span>
                            </li>
                            <li className={`${state.active === 'setting' ? 'bg-white text-blue-one ': 'text-white'} px-10 lg:px-14 py-5 my-3 cursor-pointer transition-all duration-200 ease-in `} onClick={(e) => setLi('setting')}>
                                <span className='flex items-center text-sm '><img className='w-5 h-5 mr-4' src={`${state.active  === 'setting' ? setting_blue : setting_white}`} alt="icon" />Setting</span>
                            </li>
                            <li className={`${state.active === 'invoice' ? 'bg-white text-blue-one ': 'text-white'} px-10 lg:px-14 py-5 my-3 cursor-pointer transition-all duration-200 ease-in `} onClick={(e) => setLi('invoice')}>
                                <span className='flex items-center text-sm '><img className='w-5 h-5 mr-4' src={`${state.active === 'invoice' ? invoice_blue : invoice_white}`} alt="icon" />Invoice</span>
                            </li>
                        </ul>
                        <div className="flex px-10 py-5 lg:px-14">
                            <img className='w-5 h-5 mr-4' src={logout} alt="icon" />
                            <a className='flex items-center text-sm text-white' onClick={deleteLocalStorage} href="/">Logout</a>
                        </div>
                    </div>
                </div>

                {contentMyClass()}
                
            </div> 
       
        </div>
    )
}

export default MyClassContent