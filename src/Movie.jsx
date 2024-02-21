import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Movie.css'

export const Movie = () => {
    const [title, setTitle] = useState()
    const [data, setData] = useState([''])
    const handleChange = (event) => {
        setTitle(event.target.value)

    }
    const handleSubmit = async () => {
        setTitle(title)
        let response = await axios.get(`https://www.omdbapi.com/?s=${title}&apikey=fc957d2`)
        console.log(response.data.Search);
        setData(response.data.Search)
    }
    return (
        <>
            <div className='bg'>
                <input type="text" name="" id="" onChange={handleChange} placeholder='search here' />
                <button onClick={handleSubmit}>Submit</button>
            </div>
            {data?
            <div className='content'>
                {data.map((item) => (
                    <>
                        <div>
                        <Link to={`/detail/${item.imdbID}`}><img src={item.Poster} alt="" /></Link>
                        <h2>{item.Title}</h2>
                        </div>
                    </>
                ))}
            </div>
            :
            <div style={{color:'red', textAlign:'center'}}>No Movie found</div>
            }
        </>
    )
}
