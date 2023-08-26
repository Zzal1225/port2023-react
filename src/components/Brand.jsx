import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brand01 from "../assets/img/img_brand_01.jpg";
import brand02 from "../assets/img/img_brand_02.jpg";
import brand03 from "../assets/img/img_brand_03.jpg";
import brand04 from "../assets/img/img_brand_04.jpg";
import brand05 from "../assets/img/img_brand_05.jpg";

const Brand = () => {
  const settings = {
    autoplay: true,
    fade: true,
    dots: true,
    arrows: false,
  };

  return (
    <section id="brand">
      <div className="inner clearfix">
        <div className="brand_txt ani motion-fadeRight">
          <h2>브랜드</h2>
          <p>
            가장 앞선, 절대 우위의 독보적인 하이엔드 주거의
            <br />
            새로운 기준을 제시합니다.
          </p>
          <div className="btn_view">
            <a href="/">view</a>
          </div>
        </div>

        <div className="brand_img ani motion-fadeLeft">
          <Slider {...settings} className="brand_list">
            <div>
              <img src={brand01} alt="사진1" />
            </div>
            <div>
              <img src={brand02} alt="사진2" />
            </div>
            <div>
              <img src={brand03} alt="사진3" />
            </div>
            <div>
              <img src={brand04} alt="사진4" />
            </div>
            <div>
              <img src={brand05} alt="사진5" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Brand;
