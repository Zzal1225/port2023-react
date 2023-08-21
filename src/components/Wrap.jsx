import React, { useEffect } from "react";

const Wrap = ({ children }) => {
  useEffect(() => {
    const handleScroll = () => {
      const aniElements = document.querySelectorAll(".ani");
      const bottom_of_window = window.scrollY + window.innerHeight;

      aniElements.forEach((element) => {
        const bottom_of_object = element.offsetTop + element.offsetHeight * 0.5;

        if (bottom_of_window > bottom_of_object) {
          element.classList.remove("ani");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div id="wrap">{children}</div>;
};

export default Wrap;
