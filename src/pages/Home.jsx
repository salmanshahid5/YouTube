import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  flex-wrap: wrap;
`;

const Home = () => {
    const cardsArray = Array.from({ length: 24 }); // 22 cards
  
    return (
      <Container>
        {cardsArray.map((_, index) => (
          <Card key={index} />
        ))}
      </Container>
    );
  };
  
  export default Home;