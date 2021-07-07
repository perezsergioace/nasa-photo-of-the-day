import React from "react";
import styled from "styled-components";

const PhotoCard = styled.div`
    background-image: linear-gradient(141deg,#e0d7dd 0%,#decddd 51%,#b6ebff 75%);
    border: 1px solid;
    font-family: Georgia, serif
`;

const ImageSize = styled.img`
    max-width: 400px;
    margin: 40px;
`;

const ParagraphText = styled.div`
    padding: 0 100px;
    line-height: 1.5;

`;



const CardPhoto = props => {
    return (
        <PhotoCard>
        <h1>NASA's Photo of the Day</h1>
            <h2>{props.title}</h2>
            <ImageSize  src={props.image} alt="Random NASA img"/>
            <ParagraphText>
                <p>{props.explanation}</p>
                <h4>Date: {props.date}</h4>
            </ParagraphText>
        </PhotoCard>
    )
}

export default CardPhoto;