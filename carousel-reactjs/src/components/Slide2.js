import React from 'react'
import './slide2.scss'
// import ImgCom from "./imgCom";
import i1 from "./img/slide1.jpg";
import i2 from "./img/slide2.jpg";
import i3 from "./img/slide3.jpg";


const Slider2 = () => {

    return (
        <div className="slider">
            <div className="slider-items">
                <div className="item ">
                    <img src={i1}/>
                </div>
                <div className="item">
                    <img src={i2}/>

                </div>
                <div className="item">
                    <img src={i3}/>
                </div>

            </div>
            <button id="goLeft" >Left</button>
            <button id="goRight">Right</button>
        </div>
    )
};
export default Slider2;