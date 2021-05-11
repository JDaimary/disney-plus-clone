import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import ImageSlider from "./ImageSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let movies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      dispatch(setMovies(movies));
    });
  }, [dispatch]);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow: hidden;
  margin-bottom: 50px;

  &:before {
    background: url("images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
