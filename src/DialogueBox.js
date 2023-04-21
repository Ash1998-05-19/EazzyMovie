import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { API_URl } from './context';



const DialogueBox = () => {
 
    const {id} = useParams();
    const[isLoading, setIsLoading] = useState(true);
    const[movie, setMovie] = useState("");
    
    const getMovies=async(url)=>{
        try{
            const res =  await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response==="True"){
                setMovie(data);
                setIsLoading(false);
            }
        }catch(error){
            console.log(error)
        }
    }
    
    
    useEffect(()=>{
       let timerOut= setTimeout(()=>{
            getMovies(`${API_URl}&i=${id}`);
        },800)

        return ()=> clearTimeout(timerOut)
    }, [id]);

    if(isLoading){
      return(
        <div className="movie-section">
          <div className="loading">
            Loading...
          </div>
        </div>
      )
    }

 
  return (
 
    <section className="movie-section">
    <div className="movie-card">
    <figure>
      <img src={movie.Poster} alt="none"/>
    </figure>
    <div className="card-content">
    <form >
        <p className="card-text">
           <label>Name : <input type="text" name="fname" required /></label>
         </p>
         <p className="card-text">
           <label>Email : <input type="email" /></label>
         </p>
         <p className="card-text">
           <label>Mobile Number : <input type="text" pattern="[6789][0-9]{9}" /></label>
         </p>
         <p className="card-text" >
           <label >Watching Date : <input type="date"  /></label>
         </p>
         <p className="card-text">
           <label>Rating : <input type="number" max={5} /> </label>
         </p>
        <p>
            <button className="btn" type="submit">Submit</button>
         </p>
       </form>

    </div>
    </div>
    </section>
    
  )
}

export default DialogueBox
