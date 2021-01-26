import React from "react"
import Film from "./Film";



const FilmList = ({films}) => {
    const filmObjects = films.map(film => {
        return (
            <Film key={film.id} name ={film.name} url={film.url}/>
        )
    })

    return (
        <>
            {filmObjects}
        </>
    )
}

export default FilmList;