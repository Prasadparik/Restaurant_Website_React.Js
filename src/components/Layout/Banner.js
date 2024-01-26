import React from "react";
import BannerImage from "../../assets/icons/banner.jpg";
import "./Banner.css";
function Banner() {
  return (
    <div>
      <img src={BannerImage} className="BannerImage" alt="Banner" />
    </div>
  );
}

export default Banner;
