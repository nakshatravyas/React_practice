//custom hooks
import { useEffect } from "react";
import { useState } from "react";

//fun name then it takes a info(here currency) and returns data

function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            setData(res[currency])
        })
    },[currency])
    return data
}

export default useCurrencyInfo;
//here we return the whole method and ultimately derive the value of data