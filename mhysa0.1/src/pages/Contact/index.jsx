import React, { Component } from 'react';
import Layout from '../../component/Layout';
import icon_location from "../../asset/image/icon_location.svg";
import icon_email from "../../asset/image/icon_email.svg";
import icon_instagram from "../../asset/image/icon_instagram.svg";




class Contact extends Component {
    pathname = window.location.pathname
    render() {
        return (
            <Layout address={this.pathname}>
                <div className="flex flex-col-reverse md:flex-row w-11/12 md:w-4/5 mx-auto items-center justify-between my-10 md:my-20">
                    <div className="text-center md:text-left mt-12"> 
                        <h1 className='font-semibold text-xl md:text-4xl text-blue-one'>Kontak Kami</h1>
                        <div className="flex flex-col my-8">

                            <div className="flex items-center my-2 md:my-5">
                                <img className='w-5 h-5 md:w-10 md:h-10 mr-2 md:mr-4' src={icon_location} alt="location" />
                                <span>Jakarta Raya, Indonesia</span>
                            </div>
                            <div  className="flex items-center my-2 md:my-5">
                                <img className='w-5 h-5 md:w-10 md:h-10 mr-2 md:mr-4' src={icon_email} alt="email" /> 
                                <span>mhysalearning@gmail.com</span>    
                            </div>
                            <div className="flex items-center my-2 md:my-5">
                                <img className='w-5 h-5 md:w-10 md:h-10 mr-2 md:mr-4' src={icon_instagram} alt="instagram" />
                                <span>@mhysalearning</span>
                            </div>

                        </div>
                    </div>

                    <div className="w-4/5 md:w-1/2 flex flex-col ">
                        <div className="w-fit m-auto">
                            <h3>Kritik/Saran</h3>
                        </div>

                        <label>Full Name</label>
                        <input className='pt-1.5 px-2.5 border-b-2 border-solid border-blue-one outline-none mb-12' type="text" id="name" name="name" placeholder="Ex: Harry Styles"/>

                        <label>No HP</label>
                        <input className='pt-1.5 px-2.5 border-b-2 border-solid border-blue-one outline-none mb-12' type="text" id="noHp" name="noHp" placeholder="Ex: +62"/>

                        <label>Email</label>
                        <input className='pt-1.5 px-2.5 border-b-2 border-solid border-blue-one outline-none mb-12' type="email" id="email" name="email" placeholder="Ex: name@example.com"/>

                        <label>Pesan/Masukan</label>
                        <textarea className='outline-none border-2 border-solid border-blue-one' name="message" id="message" cols="10" rows="5" placeholder="Write in here"/>
                        <div className="text-center mt-8">
                            <button className='py-2.5 px-12 text-white bg-blue-one rounded-xl border-none active:text-blue-one active:bg-white transition-all ease-out duration-200 ' type='submit'  >Submit</button>
                        </div>


                    </div>




                </div>
            </Layout>
        )
    }
}

export default Contact;
