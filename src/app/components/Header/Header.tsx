"use client";
import React, { useState } from "react";
import { Wrapper, HeaderElement } from "./Header.styled";

const Header = () => {
  const [active, setActive] = useState("all");

  const handleClick = (id) => {
    setActive(id);
  };

  return (
    <Wrapper>
      <HeaderElement
        onClick={() => handleClick("all")}
        active={active === "all"}
      >
        All
      </HeaderElement>
      <HeaderElement
        onClick={() => handleClick("naver")}
        active={active === "naver"}
      >
        Naver
      </HeaderElement>
      <HeaderElement
        onClick={() => handleClick("kakao")}
        active={active === "kakao"}
      >
        Kakao
      </HeaderElement>
      <HeaderElement
        onClick={() => handleClick("toptoon")}
        active={active === "toptoon"}
      >
        Toptoon
      </HeaderElement>
      <HeaderElement
        onClick={() => handleClick("lezhin")}
        active={active === "lezhin"}
      >
        Lezhin
      </HeaderElement>
    </Wrapper>
  );
};

export default Header;
