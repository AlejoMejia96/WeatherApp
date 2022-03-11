import React from "react";
import "./Ciudad.css";
import { Link } from 'react-router-dom';

export default function Ciudad({city}) {
    return (
        <div className="ciudad">
                <div className="container">
                <Link to={`/`} ><h2 className="cit">{city.name}</h2>
                </Link>
                    <div className="info">
                        <div>Temperature: {city.temp} ºC</div>
                        <div>Weather: {city.weather}</div>
                        <div>Wind speed: {city.wind} km/h</div>
                        <div>Clouds: {city.clouds}</div>
                        <div>Latitude: {city.latitud}º</div>
                        <div>Longitude: {city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
}