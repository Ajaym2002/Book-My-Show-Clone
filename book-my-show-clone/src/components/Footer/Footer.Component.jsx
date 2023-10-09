import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiTicket } from "react-icons/gi";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";

const Footer = () => {
    return(
        <>
            <footer className="bg-gray-900 p-3 mt-3">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col items-center gap-2 w-40">
                            <span className="text-3xl md:text-5xl text-gray-400 hover:text-gray-200">
                            <RiCustomerService2Fill className="w-full"/>
                            </span>
                            <span className="text-gray-400 text-xs md:text-sm text-center hover:text-gray-200">
                                24/7 CUSTOMER CARE
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 md:w-56 w-48">
                            <div className="text-3xl md:text-5xl text-gray-400 hover:text-gray-200">
                                <GiTicket className="w-full"/>
                            </div>
                            <span className="text-gray-400 text-sm md:text-sm text-center hover:text-gray-200">
                                RESEND BOOKING CONFIRMATION
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 md:w-52 w-44">
                            <div className="text-3xl md:text-5xl text-gray-400 hover:text-gray-200">
                                <FaEnvelopeOpenText className="w-full"/>
                            </div>
                            <span className="text-gray-400 text-sm md:text-sm text-center hover:text-gray-200">
                                SUBSCRIBE TO THE NEWSLETTER
                            </span>
                        </div>
                    </div>
                    <div className="my-6"></div>
                    <div className="flex items-center gap-2">
                        <div className="w-1/2 h-px bg-gray-400"></div>
                        <div className="flex w-15">
                            <span className="text-white font-sans text-base md:text-lg">book</span>
                            <div className="w-7 h-7 md:w-8">
                                <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" 
                                alt="app logo" className="w-full h-full"/>
                            </div>
                            <span className="text-white font-sans text-base md:text-lg">show</span>
                        </div>
                        <div className="w-1/2 h-px bg-gray-400"></div>
                    </div>
                    <div className="my-6"></div>
                    <div className="flex items-center justify-center gap-2">
                        <span className="rounded-full h-8 w-8 bg-gray-500 hover:bg-gray-300">
                            <BiLogoFacebook className="w-full mt-2"/>
                        </span>
                        <span className="rounded-full h-8 w-8 bg-gray-500 hover:bg-gray-300">
                            <BiLogoTwitter className="w-full mt-2"/>
                        </span>
                        <span className="rounded-full h-8 w-8 bg-gray-500 hover:bg-gray-300">
                            <BiLogoInstagram className="w-full mt-2"/>
                        </span>
                        <span className="rounded-full h-8 w-8 bg-gray-500 hover:bg-gray-300">
                            <BiLogoYoutube className="w-full mt-2"/>
                        </span>
                    </div>
                    <div className="my-4"></div>
                    <div className="text-gray-400 text-xs font-normal flex items-center justify-center">
                    Copyright 2021 © Littletree Entertainment Pvt. Ltd. Ajay M. All Rights Reserved.
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;