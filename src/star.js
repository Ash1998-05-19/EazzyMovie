import React from 'react'
import ReactStars from "react-rating-stars-component"

const star = () => {
    const ratingChanged=(rating)=>{
        alert(`You have given ${rating} start rating for the movie`)
    }
  return (
    <div className="star">
      <ReactStars 
      size={25}
      count={5}
      isHalf={true}
      onChange={ratingChanged}
      
      />
    </div>
  )
}

export default star
