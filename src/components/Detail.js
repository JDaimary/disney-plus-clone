import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

import db from "../firebase";

export default function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMovie(doc.data());
        }
      });
  }, [id]);

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg} alt="" />
          </Background>

          <ImageTitle>
            <img src={movie.titleImg} alt="" />
          </ImageTitle>

          <Controls>
            <PlayButton>
              <img src="images/play-icon-black.png" alt="" />
              <span>PLAY</span>
            </PlayButton>

            <TrailerButton>
              <img src="images/play-icon-white.png" alt="" />
              <span>Trailer</span>
            </TrailerButton>

            <AddButton>
              <span>+</span>
            </AddButton>

            <GroupWatchButton>
              <img src="images/group-icon.png" alt="" />
            </GroupWatchButton>
          </Controls>

          <SubTitle>{movie.subTitle}</SubTitle>

          <Description>{movie.description}</Description>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: realative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  padding-top: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  cursor: pointer;
  fonst-size: 15px;
  border-radius: 4px;
  border: none;
  background: rgb(249, 249, 249);
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  letter-spacing: 1.5px;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgb(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;

const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid white;
  border-radius: 50%;
  cursor: pointer;

  span {
    fonst-size: 30px;
    color: white;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 760px;
`;
