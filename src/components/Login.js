import React from "react";
import styled from "styled-components";

export default function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne>
          <img src="/images/cta-logo-one.svg" alt="" />
        </CTALogoOne>

        <SignUp>GET ALL THERE</SignUp>

        <Description>
          Enjoy the latest shows & movies, when it airs along with National
          Geography streaming only on Disney+. Get your Subscription now!
        </Description>

        <CTALogoTwo>
          <img src="images/cta-logo-two.png" alt="" />
        </CTALogoTwo>
      </CTA>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("images/login-background.jpg");
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.7;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 1024px;
  padding: 80px 40px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CTALogoOne = styled.div`
  width: 80%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0px;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  line-height: 1.5;
  font-size: 12px;
  letter-spacing: 1.5px;
  text-align: center;
`;

const CTALogoTwo = styled.div`
  width: 80%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
