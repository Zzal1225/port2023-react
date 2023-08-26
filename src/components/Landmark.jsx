import React from "react";
import landmark01 from "../assets/img/landmark_01.jpg";
import landmark02 from "../assets/img/landmark_02.jpg";
import landmark03 from "../assets/img/landmark_03.jpg";

const Landmark = () => {
  return (
    <section id="landmark">
      <h2>단지정보</h2>
      <p>
        시간이 흘러도 변하지 않는 희소가치를 지닌
        <br className="none" />
        아크로의 랜드마크를 소개합니다.
      </p>

      <div className="inner">
        <ul className="clearfix">
          <li className="ani motion-fadeUp">
            <a href="/">
              <img src={landmark01} alt="아크로 서울포레스트" />
              <span>분양예정</span>
              <dl className="detail_over">
                <dt>아크로 서울포레스트</dt>
                <dd>아름다운 프레임에 담긴 자연의 갤러리를 닮은 집</dd>
                <dd className="btn_view">view</dd>
              </dl>
            </a>
          </li>

          <li className="ani motion-fadeUp delay-03">
            <a href="/">
              <img src={landmark02} alt="아크로 리버하임" />
              <span>분양중</span>
              <dl className="detail_over">
                <dt>아크로 리버하임</dt>
                <dd>
                  삶의 감수성을 채우고 힐링의 본질을 선사하는 테라스 하우스
                </dd>
                <dd className="btn_view">view</dd>
              </dl>
            </a>
          </li>

          <li className="ani motion-fadeUp delay-06">
            <a href="/">
              <img src={landmark03} alt="아크로 리버뷰" />
              <span>분양중</span>
              <dl className="detail_over">
                <dt>아크로 리버뷰</dt>
                <dd>한강변의 스카이라인을 바꾼 최고 35층 초고층 랜드마크</dd>
                <dd className="btn_view">view</dd>
              </dl>
            </a>
          </li>
        </ul>

        <div className="btn_more">
          <a href="/">단지정보 더보기</a>
        </div>
      </div>
    </section>
  );
};

export default Landmark;
