import React from "react";
import './description.css'
import ColorDot from "../ColorDot";
import Size from "../Size";
import Button from "../Button";

const CardDescription = () => (
<div className="card-description">
    <div className="card-description__priceTitle">
    <p className="card-description__title">Backpack</p>
    <p className="card-description__price">34$</p>
    
    </div>
    <div>
        <p className="card-description__description">With a concept designed to be easy to understand, RAINS bridge the gap between geography and lifestyle.</p>
        <p className="card-description__title">Colors</p>
       <div className="card-description__colors">
           
        <ColorDot color="coral"></ColorDot>
        <ColorDot color="blue"></ColorDot>
        <ColorDot color="yellow"></ColorDot>
        </div>
        <p className="card-description__title">Size</p>
        <div>
            <Size/>
            
        </div>
        <div className="BTN">
            <Button prop="title"/>


        </div>
    </div>
   




</div>

)


export default CardDescription