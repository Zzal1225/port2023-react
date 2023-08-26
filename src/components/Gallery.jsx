import React from "react";
import banner from "../assets/img/img_banner.jpg";

const Gallery = () => {
  return (
    <section id="gallery">
      <div className="inner ani motion-fadeUp">
        <h2>아크로 갤러리</h2>
        <p>
          취향과 안목을 지닌 라이프스타일 컬렉터에게 <br className="none" />
          새로운 라이프스타일을 제시합니다.
        </p>
        <div className="banner">
          <a href="/">
            <img src={banner} alt="ACRO Gallery" />
            <h3>ACRO Gallery</h3>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
