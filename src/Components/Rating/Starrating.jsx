import React from 'react'
import StarRatings from 'react-star-ratings';
import ReactStars from "react-rating-stars-component";

const StarRating = ({ rating }) => {
    return (
        <>
            {/* <StarRatings
                rating={rating / 5}
                starDimension="12px"
                starSpacing="3px"
                numberOfStars={5}
                starRatedColor="yellow"
                isSelectable={true}
            /> */}
            <ReactStars size={15}
            count={5}
                value={rating}
                edit={false}
                isHalf={false} />
        </>
    )
}

export default StarRating;