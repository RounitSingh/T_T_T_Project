import React,{useState} from 'react'
import data from "../../Data.json";

export default function Navbar() {
  const [isHovered,setHovered]=useState(false);
  const handleMouseEnter = () => {
        setHovered(true);
} ;
const handleMouseLeave = () => {
        setHovered(false);
};
  return (
    <div className="bar">
        <div className="logo-sec">
          <img src={data.images.logo} alt="logo" id="logo" />
          <div className="verti-bar"></div>
          <span>Stories</span>
        </div>

        <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{background: isHovered ?"#ffbf60" : "#ffbf35" }}
        >Courses</button>
      </div>
  )
}
