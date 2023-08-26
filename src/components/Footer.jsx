import React from "react";
import footer_logo from "../assets/img/footer_logo.svg";

const Footer = () => {
  return (
    <footer id="footer">
      <ul className="footer_link">
        <li>
          <a href="/">이용약관</a>
        </li>
        <li>
          <a href="/">개인정보처리방침</a>
        </li>
        <li>
          <a href="/">이메일무단수집거부</a>
        </li>
      </ul>
      <address>
        사업자명 : 디엘이앤씨㈜ <span>사업자등록증 : 676-87-01904</span> 대표자
        : 마창민
      </address>
      <p className="copyright">&copy; DL E&amp;C. All rights Reserved.</p>
      <div className="footer_logo">
        <img src={footer_logo} alt="ACRO" />
      </div>
    </footer>
  );
};

export default Footer;
