import React, { useState, useEffect } from "react";
import logo from "../assets/img/logo.svg";
import logo_w from "../assets/img/logo_w.svg";
import ham from "../assets/img/ham.svg";
import mgnb_close from "../assets/img/mgnb_close.png";
import icon_search from "../assets/img/icon_search.svg";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDepth2Open, setIsDepth2Open] = useState(false);

  const handleDepth2Open = () => {
    setIsDepth2Open(true);
  };

  const handleDepth2Close = () => {
    setIsDepth2Open(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header id="header" className={isFixed ? "fix" : ""}>
      <div className="inner">
        <h1>
          <a href="/">
            <img src={logo} alt="ACRO" />
          </a>
        </h1>

        <nav>
          <ul className="gnb">
            <li
              className={isDepth2Open ? "show-depth2" : ""}
              onMouseEnter={handleDepth2Open}
            >
              <a href="/">브랜드</a>
              <ul
                className="depth2"
                onMouseEnter={handleDepth2Open}
                onMouseLeave={handleDepth2Close}
              >
                <li>
                  <a href="/">브랜드</a>
                </li>
                <li>
                  <a href="/">단지정보</a>
                </li>
                <li>
                  <a href="/">갤러리</a>
                </li>
                <li>
                  <a href="/">새소식</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">단지정보</a>
              <ul
                className="depth2"
                onMouseEnter={handleDepth2Open}
                onMouseLeave={handleDepth2Close}
              >
                <li>
                  <a href="/">브랜드</a>
                </li>
                <li>
                  <a href="/">단지정보</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">갤러리</a>
            </li>
            <li>
              <a href="/">새소식</a>
            </li>
          </ul>

          <div
            className={`ham ${isMobileMenuOpen ? "open" : ""}`}
            onClick={toggleMobileMenu}
          >
            <img src={ham} alt="메뉴보기" />
          </div>

          <div className={`mgnb_wrap ${isMobileMenuOpen ? "open" : ""}`}>
            <div className="mgnb_logo">
              <img src={logo_w} alt="ACRO" />
            </div>

            <ul className="mgnb">
              <li>
                <a href="/">
                  브랜드<span>Brand</span>
                </a>
              </li>
              <li>
                <a href="/">
                  단지정보<span>Landmark</span>
                </a>
              </li>
              <li>
                <a href="/">
                  갤러리<span>Gallery</span>
                </a>
              </li>
              <li>
                <a href="/">
                  새소식<span>News</span>
                </a>
              </li>
            </ul>

            <div
              className={`mgnb_close ${isMobileMenuOpen ? "open" : ""}`}
              onClick={closeMobileMenu}
            >
              <img src={mgnb_close} alt="메뉴닫기" />
            </div>
          </div>
        </nav>

        <ul className="util">
          <li>
            <a href="/">로그인</a>
          </li>
          <li>
            <a href="/">회원가입</a>
          </li>
          <li>
            <a href="/">고객센터</a>
          </li>
        </ul>

        <div
          className={`btn_search ${isSearchOpen ? "open" : ""}`}
          onClick={toggleSearch}
        >
          <img src={icon_search} alt="검색" />
        </div>
      </div>

      <div className={`search ${isSearchOpen ? "open" : ""}`}>
        <form>
          <fieldset>
            <legend>검색영역</legend>
            <input
              type="text"
              title="검색어 입력"
              placeholder="검색어를 입력해 주세요"
            />
            <input type="submit" value="검색" />
          </fieldset>
        </form>
        <div className="search_close" onClick={toggleSearch}>
          검색창 닫기
        </div>
      </div>
    </header>
  );
};

export default Header;
