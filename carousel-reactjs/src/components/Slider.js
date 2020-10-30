import React, {useState} from 'react'
import './slide.scss'
import ImgCom from "./imgCom";
import i1 from './img/slide1.jpg'
import i2 from './img/slide2.jpg'
import i3 from './img/slide1.jpg'
import i4 from './img/slide2.jpg'
import i5 from './img/slide3.jpg'

const Slider = () => {
    const sliderArr = [<ImgCom src={i1}/>,<ImgCom src={i2}/> , <ImgCom src={i3}/>, <ImgCom src={i4}/>, <ImgCom src={i5}/>];
    const [x, setX] = useState(0);

    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100)
        console.log(x);
    };
    const goRight = () => {
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
        console.log(x);
    };
    return (
        <div className="slider">
            {
                sliderArr.map((item, index) => {
                    return (
                        <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
                })
            }
            <button id="goLeft" onClick={goLeft}>Left</button>
            <button id="goRight" onClick={goRight}>Right</button>
        </div>
    )
};
export default Slider;