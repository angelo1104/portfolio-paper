import React, { useEffect, useState } from "react";
import {
  Container,
  ContentContainer,
  DateContainer,
  TitleContainer,
} from "./Home.style";
import { format } from "date-fns";
import Introduction from "../Introduction";

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
        <Introduction />
      </ContentContainer>
      <TitleContainer>
        <span>Developer</span>
      </TitleContainer>
    </Container>
  );
}

export default Home;
