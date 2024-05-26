import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Margin from "./Margin";

const Photo = styled.img`
  width: 100%;
  height: auto; //auto로 설정하면 화면 비율 움직여도 고정됨
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
  white-space: nowrap; // 넘치는 글자들 말줄임표- 여기서부터
  overflow: hidden; //
  text-overflow: ellipsis; // 여기까지
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
    navigate(`/article/${id}`); //카드 클릭시 넘어가도록(복습 필요)
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
