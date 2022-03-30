import React from "react";
import {
  About,
  AboutContainer,
  Container,
  FirstName,
  I,
  NameContainer,
  SecondaryAboutContainer,
  SecondName,
  SecondNameContainer,
  StyledCatto,
} from "./Introduction.style";
import stampPic from "../../public/stamp.png";
import Image from "next/image";

function Introduction() {
  return (
    <Container>
      <NameContainer>
        <FirstName>Tyler</FirstName>
        <SecondNameContainer>
          <SecondName>Tony</SecondName>
          <Image
            src={stampPic}
            alt={"stamp"}
            height={100}
            width={70}
            className={"stampImg"}
            objectFit={"contain"}
          />
        </SecondNameContainer>
      </NameContainer>

      <AboutContainer>
        <SecondaryAboutContainer>
          <I>I</I>
          <About>
            am a self-taught developer and UI/UX designer. Based in NYC.
          </About>
        </SecondaryAboutContainer>
        <StyledCatto src={"/catto.jpg"} alt={"profile"} height={200} />
      </AboutContainer>
    </Container>
  );
}

export default Introduction;
