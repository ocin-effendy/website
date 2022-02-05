import React, {useState} from 'react';
import { useNavigate,useParams } from "react-router-dom";
import Class from '../../component/Card/Class';
import dataAllCard from "../../JSON/allCard.json";
import bca from "../../asset/image/bca.jpg";
import icon_wa from "../../asset/image/icon_wa.svg";

function PaymentClassContent({data}) {
    const {id} = useParams();

    const navigate = useNavigate();
    const succesPayment = () => {
        navigate('/');
    }
    const initialState = {
        priceClass: parseInt(data.price),
        totalPrice: parseInt(data.price) + 125000,
        kode: '',
        buttonText: 'MASUKKAN',
        discount: '',
        buttonConfirm: ''
    }
    const [state, setstate] = useState(initialState);

    const fileChange = (file) => {
        const nameFile = file.target.files[0].name;
        if (nameFile !== '') {
            setstate({
                priceClass: state.priceClass,
                totalPrice: state.totalPrice,
                kode: state.kode,
                buttonText: state.buttonText,
                discount: state.discount,
                buttonConfirm: 'active'
            })
        }
    }

    const textChange = (e) => {
        setstate({
            priceClass: state.priceClass,
            totalPrice: state.totalPrice,
            kode: e.target.value,
            buttonText: state.buttonText,
            discount: state.discount,
            buttonConfirm: state.buttonConfirm
        })
    }
    const handleKode = () => {
        if (state.kode === "niko") {
            setstate({
                priceClass: state.priceClass - 100000,
                totalPrice: state.totalPrice - 100000,
                kode: state.kode,
                buttonText: 'HAPUS',
                discount: 'active',
                buttonConfirm: state.buttonConfirm
            })
        }
        if (state.buttonText === "HAPUS") {
            setstate({
                priceClass: parseInt(data.price),
                totalPrice: parseInt(data.price) + 125000,
                kode: '',
                buttonText: 'MASUKKAN',
                discount: '',
                buttonConfirm: state.buttonConfirm
            })

        }
    }

  return (
        <div className="w-11/12 mx-auto my-5 medium:my-10">
            <div className="text-center w-4/5 small:w-1/2 large:w-96 mx-auto medium:my-10">
                <h1 className='text-xs small:text-sm medium:text-lg'>AMANKAN KURSIMU SEKARANG</h1>
                <h1 className='text-exsm small:text-xs medium:text-sm'>Segera bergabung bersama MHYSA Learning di kelas kelas premium dan mari belajar bersama </h1>
            </div>
            <div className="flex flex-col medium:flex-row medium:w-4/5 mx-auto ">

                <div className="my-5 medium:-mt-5 w-fit mx-auto">
                    < Class data={data} />
                </div>

                <div className="px-3 py-2 exsmall:w-4/5 exsmall:mx-auto small:w-2/3 medium:w-96 large:w-128  ">
                    <div className="flex flex-col border-2 border-blue-one my-2 p-2 rounded-lg large:px-4">
                        <h1 className='font-semibold'>Yang Kamu Dapatkan!</h1>
                        <div className="flex justify-between items-center text-sm large:text-base">
                            <h1>Waktu Akses</h1>
                            <h1>{data.acces}</h1>
                        </div>
                        <div className="flex justify-between items-center text-sm large:text-base">
                            <h1>Mentoring & Aset</h1>
                            <h1>Tersedia</h1>
                        </div>
                        <div className="flex justify-between items-center text-sm large:text-base">
                            <h1>E-Sertifikat</h1>
                            <h1>Tersedia</h1>
                        </div>
                    </div>

                    <div className="flex flex-col border-2 border-blue-one my-2 p-2 rounded-lg large:px-4">
                        <h1 className='font-semibold'>Detail Pembayaran</h1>
                        <div className="flex justify-between items-center text-sm large:text-base">
                            <h1>Harga Awal</h1>
                            <h1>Rp.{data.price}</h1>
                        </div>
                        <div className="flex justify-between items-center">
                            {/* <input className='bg-gray-300 w-1/2 text-xs p-1 outline-none' type="text" placeholder='Kode Refferal' /> */}
                            {
                                state.buttonText === "MASUKKAN" ? (
                                    <input className='bg-gray-300 w-1/2 text-xs p-1 outline-none' type="text" placeholder="Kode referral"
                                        onChange={textChange} value={state.kode} />
                                    ) : (
                                        <input className='bg-gray-300 w-1/2 text-xs p-1 outline-none' value={state.kode} disabled />
                                )
                            }
                            <button className='bg-blue-one text-white px-2 py-1 rounded-md text-xs' onClick={handleKode}>{state.buttonText}</button>
                        </div>
                        <div className="flex justify-between items-center text-sm large:text-base">
                            <h1>Harga Kelas</h1>
                            <h1>Rp.{state.priceClass}</h1>
                        </div>
                        <div className="flex justify-between items-center text-sm large:text-base">
                            <h1>Commitment Fee</h1>
                            <h1>Rp.125000</h1>
                        </div>
                        <div className="flex justify-between items-center text-sm large:text-base">
                            <h1>Total Transfer</h1>
                            <h1>Rp.{state.totalPrice}</h1>
                        </div>
                    </div>

                    <div className="flex flex-col border-2 border-blue-one my-2 p-2 rounded-lg large:px-4">
                        <h1 className='font-semibold'>Transfer Pembayaran</h1>
                        <div className="flex items-center">
                            <div className="w-1/3 large:w-24">
                                <img className='w-full h-full object-cover' src={bca} alt="bca" />
                            </div>
                            <div className="ml-2 text-xs large:text-sm">
                                <h1>PT.Mhysa Indoneisa</h1>
                                <p>0321-3321-5533</p>
                            </div>
                        </div>

                        <form action="">
                            <input type="file" name="proofPayment" onChange={fileChange} />
                            <div className="w-fit mx-auto mt-5">
                                {/* <button className="bg-blue-one text-white font-semibold px-4 py-1 text-sm rounded-lg large:px-5 large:py-2">Konfirmasi Pembayaran</button> */}
                                {
                                    state.buttonConfirm === "active" ? (
                                        <button
                                            className="bg-blue-one text-white font-semibold px-4 py-1 text-sm rounded-lg large:px-5 large:py-2"
                                            onClick={succesPayment}
                                        >Konfirmasi Pembayaran</button>
                                    ) : (
                                        <button
                                            className="bg-gray-400 text-white font-semibold px-4 py-1 text-sm rounded-lg large:px-5 large:py-2" disabled
                                        >Konfirmasi Pembayaran</button>
                                    )
                                }
                            </div>
                        </form>

                    </div>

                    <div className="border-2 border-blue-one my-2 p-2 rounded-lg large:px-4">
                        <h1 className='font-semibold'>Informasi Penting</h1>
                        <p className='text-xs'>Proses konfirmasi pembayaran-mu memakan waktu sekitar 45 menit.</p>
                        <p className='text-xs'>Mohon hanya melakukan pembayaran dengan nomor dan rekening atas nama PT MHYSA.</p>
                       
                    </div>

                    <div className="relative border-2 border-blue-one my-2 p-2 rounded-lg large:px-4">
                        <div className="w-9 mx-auto">
                            <img className='w-full h-full' src={icon_wa} alt="wa" />
                        </div>
                        <div className="font-medium absolute top-3">
                            <h1 className='text-sm'>Perlu bantuan?</h1>
                            <p className='text-xs'>Hubungi kami</p>
                        </div>

                    </div>


                </div>
            </div>


        </div>
  );
}
export default PaymentClassContent;
