import './movie.css'
import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import Card from '../components/CardTop';
import {BsGraphUp, BsWallet2,BsHourglassSplit,BsFillFileEarmarkTextFill} from'react-icons/bs'

const Movie = () => {
    const moviesUrl = "https://api.themoviedb.org/3/movie/";
    const apiKey = "api_key=93fcd63399051febe54634c1f73d1bd2";
  
const [movie,setMovie]=useState([])
const [loading,setLoading]=useState(true)
const {id}=useParams()

const getMovie=async(url)=>{
    
setLoading(true)
    const response= await fetch(url)
    const data= await response.json()
    setMovie(data)
    console.log(movie)
    setLoading(false)
}


  

    useEffect(()=>{
        const movieUrl=`${moviesUrl}${id}?${apiKey}`
        getMovie(movieUrl)
            },[])

  return (<>
  <div className='movieD-content'>
<Card topM={movie} showLink={false}/>
<p>{movie.tag}</p>
<div className='movieD-info'>
<h2> <BsWallet2/>Budget:</h2>
<p>{movie.budget}</p>
<h2> <BsGraphUp/>Revenue:</h2>
<p>{movie.revenue}</p>
<h2> <BsHourglassSplit/>Runtime:</h2>
<p>{movie.runtime} min</p>

<div className='mvdescription'>
<h3>
<BsFillFileEarmarkTextFill/>Description:
</h3>
<p>{movie.overview}</p>
</div>

</div>
</div>
  </>)
};

export default Movie;
