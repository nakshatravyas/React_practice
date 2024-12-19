import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
       const data=useLoaderData()
    // const[data,setData]=useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/nakshatravyas')
    //     .then((res)=>{
    //         return res.json()
    //     })
    //     .then((res)=>{                                       
    //         setData(res)
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching data:', error);
    //      });                                                                           
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github Followers:{data.followers}
        <img src={data.avatar_url} alt="Picture" width={300}/>
    </div>
  )
}
 
export default Github

export const githubInfoLoader=async()=>{
    try {
        const response = await fetch('https://api.github.com/users/nakshatravyas');
        return response.json();
    } catch (error) {
        console.log(error); 
    }
}
