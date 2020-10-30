import React from 'react'

const ImgCom = ({src}) => {
    const imgStyle = {
        width: '100%',
        height: 'auto',
    }
    return <img src={src} style={imgStyle} alt="slide-image"/>
};
export default ImgCom