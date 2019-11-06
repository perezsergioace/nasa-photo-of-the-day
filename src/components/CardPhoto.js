import React from "react";

const CardPhoto = props => {
    return (
        <div className="nasa_Content">
            <h1>{props.title}</h1>
            <img src={props.image} alt="Random NASA img"/>
            <div>
                <p>{props.explanation}</p>
                <p>{props.date}</p>
            </div>
        </div>
    )
}

export default CardPhoto;