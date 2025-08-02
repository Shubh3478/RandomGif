import axios from "axios";
import React, { useEffect, useImperativeHandle, useState } from "react";
import Spinner from "./Spinner";


const API_KEY = import.meta.env.VITE_API_KEY;


function Random() {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false)

    async function fetchData(){
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data} = await axios.get(url);
        // console.log(data);
        const imageSource = data.data.images.downsized_large.url;
        // console.log(imageSource)
        setGif(imageSource);
        setLoading(false)

    }
    useEffect( ()=>{
        fetchData();
    },[])

    function clickHandler() {
        fetchData();
    }
    return (
        <div className="w-1/3 h-12/12 bg-green-500 rounded-lg border border-black
        flex flex-col items-center gap-y-5 mt-[30px]">

            <h1 className="mt-[15px] text-2xl underline uppercase font-bold">A Random Gifs</h1>

            {
                loading ? (<Spinner></Spinner>) : ( <img src= {gif} width="450"></img>)
            }


            <button onClick={clickHandler} 
            className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">Generate</button>
        </div>
    )
}

export default Random;
