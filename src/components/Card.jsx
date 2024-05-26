import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Margin from "./Margin";

const Photo = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

const Wrapper = styled.div`
  padding: 6px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
`;

const Text = styled.p`
  font-size: 14px;
  color: gray;
  margin-top: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Card = ({ id, img, title, txt }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/article/${id}`);
  };

  return (
    <Wrapper id={id} onClick={handleClick}>
      <Photo src={img} alt={title} />
      <Margin height={10} />
      <Name>{title}</Name>
      <Text>{txt}</Text>
    </Wrapper>
  );
};

export default Card;
