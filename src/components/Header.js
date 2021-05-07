import React from "react";
import styled from "styled-components";

import logo from "../assets/images/logo.svg";
import homeIcon from "../assets/images/home-icon.svg";
import searchIcon from "../assets/images/search-icon.svg";
import watchlistIcon from "../assets/images/watchlist-icon.svg";
import originalIcon from "../assets/images/original-icon.svg";
import movieIcon from "../assets/images/movie-icon.svg";
import seriesIcon from "../assets/images/series-icon.svg";

function Header() {
  return (
    <Nav>
      <Logo src={logo} />

      <NavMenu>
        <a>
          <img src={homeIcon} alt="" />
          <span>HOME</span>
        </a>
        <a>
          <img src={searchIcon} alt="" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src={watchlistIcon} alt="" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src={originalIcon} alt="" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src={movieIcon} alt="" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src={seriesIcon} alt="" />
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

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 25px;

  a {
      display: flex;
      align-items: center;
      padding: 0 12px;
      cursor: pointer;

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
