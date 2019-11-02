import React from "react";
import "./Photo.scss";

const imgWithClick = { cursor: "pointer" };

const Photo = ({ index, onClick, photo, margin, direction, top, left }) => {
    const imgStyle = { margin: margin };
    if (direction === "column") {
        imgStyle.position = "absolute";
        imgStyle.left = left;
        imgStyle.top = top;
    }

    const handleClick = event => {
        onClick(event, { photo, index });
    };

    return (
        <img
            className="photo-style"
            style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
            {...photo}
            onClick={onClick ? handleClick : null}
            alt="img"
        />
    );
};

export default Photo;
