import React from "react"

function Film({name, url}) {
    return(
        <a href={url}> {name}</a>
    )
}

export default Film;