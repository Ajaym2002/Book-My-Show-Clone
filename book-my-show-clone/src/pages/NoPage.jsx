import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.Component";
import Footer from "../components/Footer/Footer.Component";

const NoPage = () => {
return (
    <>
        <Navbar/>
        <div className="flex items-center justify-center my-20">
            <div>
                <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                alt="logo" className="w-96 h-auto"/>
                <h1 className="text-gray-900 flex items-center justify-center text-xl font-bold">This Page Does Not Exist!</h1>
                <h3 className="text-gray-800 flex items-center justify-center text-xl">Kindly Switch Back To The Home Page.</h3>
                <Link to={'/'} className="flex items-center justify-center">
                    <button className="rounded-md border border-transparent bg-red-500 px-4 py-2 my-2 text-md font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2">
                        Home Page</button>
                </Link>
            </div> 
        </div>
        <Footer/>
    </>
)
}

export default NoPage;