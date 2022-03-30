import React, { useEffect, useState } from "react";
import {
  Container,
  ContentContainer,
  DateContainer,
  TextContainer,
  TitleContainer,
} from "./Home.style";
import { format } from "date-fns";

function Home() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setCurrentDate(format(new Date(), "PPP"));
  }, []);

  return (
    <Container>
      <DateContainer>
        <span>{currentDate}</span>
      </DateContainer>
      <ContentContainer>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
      </ContentContainer>
      <TitleContainer>
        <span>Developer</span>
      </TitleContainer>
    </Container>
  );
}

export default Home;
