import React, { useState } from "react";
import img_visual from "../assets/img/img_visual.jpg";
import play from "../assets/img/play.svg";
import acro_brand from "../assets/img/acro_brand.mp4";

const Article = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <article id="main_visual">
      <div className="inner motion-fadeUp">
        <h2>The Only One</h2>
        <p>
          모두의 선망의 대상이자 시간이 흘러도 변하지 않는 랜드마크가 되는 곳
          <br />
          ONE &amp; ONLY, ACRO 그 컬렉션의 가치를 소유하세요.
        </p>
        <div className="pr_movie">
          <img src={img_visual} alt="ACRO 영상이미지" />
          <div className="btn_play" onClick={openModal}>
            <img src={play} alt="영상재생" />
          </div>
        </div>
      </div>
      <div className={`movie_modal ${isModalOpen ? "open" : ""}`}>
        <video src={acro_brand} muted autoPlay controls></video>
        <a href="/" className="movie_close" onClick={closeModal}>
          영상닫기
        </a>
      </div>
    </article>
  );
};

export default Article;
