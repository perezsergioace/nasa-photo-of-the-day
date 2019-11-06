import React, {useState, useEffect} from "react";
import axios from "axios";
import CardPhoto from "./CardPhoto";

function CardHolder() {

    const [nasaPhoto, setNasaPhoto] = useState([]);

    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=6Cclb7UHra0Onqaex8gGgia8lpPdEGQQlm8jcEQ3")
        .then(response => {
            console.log(response.data);
            setNasaPhoto(response.data);
        })
        .catch(error => {
            console.log("Data was not returned", error);
        });
    }, []);

    return (
        <div className="nasa_Photo_Container">
            <CardPhoto 
            title={nasaPhoto.title}
            image={nasaPhoto.hdurl}
            explanation={nasaPhoto.explanation}
            date={nasaPhoto.date}/>
        </div>
    )
}

export default CardHolder;