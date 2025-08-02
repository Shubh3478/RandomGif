import axios from "axios";
import React, { useEffect, useImperativeHandle, useState } from "react";
import Spinners from "./Spinners";


const API_KEY = import.meta.env.VITE_API_KEY;


function Tag() {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false')
    const [tag, setTag] = useState('Tom and Jerry')

    async function fetchData(){
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
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

    function changeHandler(){
        setTag(event.target.value)
    }

    return (
        <div className="w-1/3 bg-blue-500 rounded-lg border border-black
        flex flex-col items-center gap-y-5">

            <h1 className="mt-[15px] text-2xl underline uppercase font-bold">Random {tag} Gifs</h1>

            {
                loading ? (<Spinners></Spinners>) : ( <img src= {gif} width="450"></img>)
            }

            <input 
            className="bg-white  w-10/12 text-lg py-2 rounded-lg mb-[20px] text-center"
            onChange={changeHandler}
            value={tag}>
            </input>
            
            <button onClick={clickHandler} 
            className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">Generate</button>
        </div>
    )
}

export default Tag;