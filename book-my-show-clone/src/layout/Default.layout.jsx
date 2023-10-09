import React from "react";
import Navbar from '../components/Navbar/Navbar.Component';
import Footer from "../components/Footer/Footer.Component";

const DefaultLayoutHoc = (Component) =>
    ({...props}) => {
        return( 
        <div>
            <Navbar/>
            <Component {...props}/>
            <Footer/>
        </div>
     )
    }

export default DefaultLayoutHoc;