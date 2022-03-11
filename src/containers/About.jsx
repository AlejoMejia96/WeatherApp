import React from "react";
import './About.css'
import { Link } from "react-router-dom";
export default function About () {
    return(
        <div className="me">
                <div className="ab">
                <p>My name is Alejandro Quintero Mejía.  I'm currently a student at Henry.<br></br><br></br>
                This application was made using CSS, HTML, JS-DOM and React.<br></br><br></br>
                It consumes the OpenWeatherMap API and shows us basic weather information
                such as minimum and maximum temperature, as well as additional information when clicking on the name of each city. </p>
                </div><br></br>
                <Link to={`/`}><h3 className='like'>I hope you enjoy it!</h3>
                </Link>
        </div>
    )
}
