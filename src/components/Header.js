import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import {
  selectUserName,
  setUserSignIn,
  setUserSignOut,
} from "../features/user/userSlice";
import { auth, provider } from "../firebase";

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserSignIn({
            name: user.displayName,
            email: user.email,
          })
        );
        history.push("/");
      }
    });
  }, [dispatch, history]);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      dispatch(
        setUserSignIn({
          name: user.displayName,
          email: user.email,
        })
      );
      history.push("/");
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setUserSignOut());
      history.push("/login");
    });
  };

  return (
    <Nav>
      <Logo src="images/logo.svg" />
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
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

          <Logout onClick={signOut} src="/images/logout-white.png" />
        </>
      )}
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

const Logout = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const Login = styled.div`
  font-weight: 600;
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
