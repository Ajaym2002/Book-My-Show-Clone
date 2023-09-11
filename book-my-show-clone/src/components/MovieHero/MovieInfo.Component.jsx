import React,{ useState, useContext } from "react";
import { MovieContext } from "../../context/Movie.Context";
import PaymentModal from "../PaymentModal/Payment.Component";
// payment model needs to be imported and used

const MovieInfo = () => {
    const {movie, setMovie} = useContext(MovieContext);
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);

    const rentMovie = () => {
        setIsOpen(true);
        setPrice(149);
    }

    const buyMovie = () => {
        setIsOpen(true);
        setPrice(599);
    }

    return(
        <>
        <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
        <div className="flex flex-col gap-3">
            <h1 className="text-white text-5xl font-bold">{movie.original_title}</h1>
            <div className="text-white flex flex-col gap-2">
                <h4>4K Rating</h4>
                <h4>Kannada, English, Hindi, Telugu</h4>
                <h4>{movie.runtime} min | Adventure, Action, Fantasy</h4>
            </div>
            <div className="flex items-center gap-3 w-full">
                <button onClick={rentMovie} className="bg-red-500 w-full py-3 rounded-lg text-white font-semibold">Rent ₹ 149</button>
                <button onClick={buyMovie} className="bg-red-500 w-full py-3 rounded-lg text-white font-semibold">Buy ₹ 599</button>
            </div>
        </div>
        </>
    );
};

export default MovieInfo;