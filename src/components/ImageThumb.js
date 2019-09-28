import React from 'react'

const ImageThumb = (props) => (
    <div className={"image"}>
        <img src={props.src} className={"c-img"} alt=""/>
        <div className={"text-center"}>
        <strong className={"bottom "}>{props.name}</strong>
        </div>
    </div>
);

export default ImageThumb
