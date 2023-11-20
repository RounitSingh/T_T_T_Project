import React, { useState } from 'react';
import data from "../../Data.json";
import "./profile.css";

export default function Profile({ like }) {
  const [hoveredElement, setHoveredElement] = useState(null);
  const [hoverColor, setHoverColor] = useState('blue');

  const handleMouseEnter = (element) => {
    setHoveredElement(element);
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
  };

  const followersStyle = {
    borderColor: hoveredElement === 'followers' ? hoverColor : 'transparent',
    color: hoveredElement === 'followers' ? hoverColor : '#999999',
  };

  const followingStyle = {
    borderColor: hoveredElement === 'following' ? hoverColor : 'transparent',
    color: hoveredElement === 'following' ? hoverColor : '#999999',
  };

  return (
    <div className="profile-sec">
      <div className="pro-up">
        <img src={data.User.userImg} alt="user" />
        <div className="pro-up-text">
          <div className="name-sec">
            <b>{data.User.name}</b>
            <img src={data.images.diamnond} alt="diamond" />
            <img src={data.images.greenTik} alt="diamond" />
          </div>
          <div className="follow-data">
            <div
              className={`follow ${hoveredElement === 'followers' ? 'hovered' : ''}`}
              onMouseEnter={() => handleMouseEnter('followers')}
              onMouseLeave={handleMouseLeave}
              style={followersStyle}
            >
              <b>{data.User.followers}</b>
              <span style={{ color: followersStyle.color }}>Followers</span>
            </div>

            <div
              className={`follow ${hoveredElement === 'following' ? 'hovered' : ''}`}
              onMouseEnter={() => handleMouseEnter('following')}
              onMouseLeave={handleMouseLeave}
              style={followingStyle}
            >
              <b>{data.User.following}</b>
              <span style={{color: followingStyle.color}}>Following</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pro-down">
        <span>{data.User.description}</span> <br />
        <span>{data.User.website}</span>
        <div className="icon-state">
          <img src={data.images.star} alt="star" />
          {data.User.star}
          <i class="fa-regular fa-thumbs-up" style={{ background: "#ffbf35" }} />
          {like}
          <img src={data.images.eye} alt="star" />
          {data.User.eye}
          <img src={data.images.heart} alt="star" />
          {data.User.heart}
        </div>
      </div>
    </div>
  );
}
