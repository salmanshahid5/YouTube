import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import profile from '../assets/profile.jpg'

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "315px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://media.licdn.com/dms/image/v2/C4D12AQHGb7XP7_VYyQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1652875550402?e=2147483647&v=beta&t=BDFgN9x4nHlfAAwUa5cF1wFo5-j0NH7oAWZk316ucIU"
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src={profile}
          />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Salman</ChannelName>
            <Info>660,908 views • 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;