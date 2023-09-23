import React,{ useState, useContext } from "react";
import { TvShowsContext } from "../../context/TvShows.Context";
import PaymentModal from "../PaymentModal/Payment.Component";
import { BsFillStarFill } from "react-icons/bs";

// payment model needs to be imported and used

const TvShowsInfo = () => {
    const {tvShows, setTvShows} = useContext(TvShowsContext);
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);

    const rentSeries = () => {
        setIsOpen(true);
        setPrice(99);
    }

    const buySeries = () => {
        setIsOpen(true);
        setPrice(299);
    }

    return(
        <>
        <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
        <div className="flex flex-col gap-3">
            <h1 className="text-white text-5xl font-bold">{tvShows.name}</h1>
            <div className="text-white flex flex-col gap-2">
                <h2 className="font-semibold text-2xl"><BsFillStarFill/>{tvShows.vote_average}/10</h2>
                <h4>4K Rating</h4>
                <h4>Kannada, English, Hindi, Telugu</h4>
                <h4>{tvShows.runtime} min | Adventure, Action, Fantasy</h4>
            </div>
            <div className="flex items-center gap-3 w-full">
                <button onClick={rentSeries} className="bg-red-500 w-full py-3 rounded-lg text-white font-semibold">Rent ₹ 99</button>
                <button onClick={buySeries} className="bg-red-500 w-full py-3 rounded-lg text-white font-semibold">Buy ₹ 299</button>
            </div>
        </div>
        </>
    );
};

export default TvShowsInfo;