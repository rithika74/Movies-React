import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Detail = () => {
    const {id}=useParams()
    console.log(id);
    const [data,setData]=useState([''])
    useEffect(()=>{
        let fetchdata=async()=>{
            let response=await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=fc957d2`)
            console.log(response);
            setData(response.data)
        }
        fetchdata()
    },[])
    
  return (
    <div style={{textAlign:'center'}}>
        <h1>{data.Title}</h1>
        <p>Release Date : {data.Released}</p>
        <img src={data.Poster} alt="" /> 
        <h2>Director : {data.Director}</h2>
        <p>Plot : {data.Plot}</p>
        <h3>{data.Actors}</h3>
    </div>
  )
}
