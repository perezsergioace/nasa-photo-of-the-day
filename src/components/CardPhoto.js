import React from "react";

const CardPhoto = props => {
    return (
        <div className="nasa_Content">
            <h1>{props.title}</h1>
            <img src={props.image} alt="Random NASA img"/>
            <div>
                <p>{props.explanation}</p>
                <h4>Date: {props.date}</h4>
            </div>
        </div>
    )
}

export default CardPhoto;