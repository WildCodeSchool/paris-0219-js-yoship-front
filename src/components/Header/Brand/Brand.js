import React from "react";
import yoshiplogo from "../../../assets/images/yoship-logo.png";
import './Brand.scss'

const Brand = ({ background, isTop }) => {
    return (
        <div className="header_brand_div">
            <img src={yoshiplogo} alt="yoship logo" className="header_logo" />
            <span className={background && isTop ? "header_brand" : "header_brand_black"}>YoShip</span>
        </div>
    )
}
export default Brand




