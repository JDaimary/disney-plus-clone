import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="images/logo.svg" />

      <NavMenu>
        <a href="/">
          <img src="images/home-icon.svg" alt="" />
          <span>HOME</span>
        </a>

        <a href="/">
          <img src="images/search-icon.svg" alt="" />
          <span>SEARCH</span>
        </a>

        <a href="/">
          <img src="images/watchlist-icon.svg" alt="" />
          <span>WATCHLIST</span>
        </a>

        <a href="/">
          <img src="images/original-icon.svg" alt="" />
          <span>ORIGINALS</span>
        </a>

        <a href="/">
          <img src="images/movie-icon.svg" alt="" />
          <span>MOVIES</span>
        </a>

        <a href="/">
          <img src="images/series-icon.svg" alt="" />
          <span>SERIES</span>
        </a>
      </NavMenu>

      <UserImage src="https://yt3.ggpht.com/yti/ANoDKi6FpkNIHZCKO5tcdA3mUD74gFY0TFzdiDayH_w=s88-c-k-c0x00ffffff-no-rj-mo" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.nav`
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    text-decoration: none;
    color: white;

    img {
      height: 20px;
    }

    span {
      font-size: 14px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:after {
        transform: scaleY(1);
        opacity: 1;
      }
    }
  }
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
