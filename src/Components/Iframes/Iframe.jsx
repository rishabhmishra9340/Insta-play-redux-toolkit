import React, { useEffect, useState } from 'react'
import style from './Iframe.css'
import axios from 'axios'
import cross from '../../images/cross.png'


const Iframe = ({ id , onClick}) => {

    const [movieData, setMovieData] = useState([])

    const movieDetails = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=461182fa2668493a72758c55a1789c35`).then((res) => {
            setMovieData(res.data.results.filter((type) => {
                return (
                    type.type === "Trailer"
                )
            }))
        })
    }


    useEffect(() => {
        movieDetails()
    }, [movieData])

    return (
        <>
            {movieData.length > 0 ?
                <>
                    <div className="modalContainer">

                        <div className='close-btn'>
                            <button onClick={onClick}><img src={cross}></img></button>
                        </div>

                        < iframe className='if'
                            src={`https://www.youtube-nocookie.com/embed/${movieData[0].key}?autoplay=1&mute=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </>
                : ""}
        </>
    )
}

export default Iframe