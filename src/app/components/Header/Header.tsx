"use client";
import React from "react";
import { Wrapper, HeaderElement } from "./Header.styled";

const Header = () => {
  return (
    <Wrapper>
      <HeaderElement>All</HeaderElement>
      <HeaderElement>Naver</HeaderElement>
      <HeaderElement>Kakao</HeaderElement>
      <HeaderElement>Toptoon</HeaderElement>
      <HeaderElement>Lezhin</HeaderElement>
    </Wrapper>
  );
};

export default Header;
