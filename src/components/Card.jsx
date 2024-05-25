import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from 'styled-components';
import Margin from "./Margin"


const Photo= styled.img`
  width: 170px;
  height: 170px;
`;

const Wrapper = styled.div`
  padding: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.text``

const Text = styled.text``

export default function Card({ id, img, title, txt }) {
    const navigate = useNavigate();
  
    return (
      <Wrapper id={id} onClick={() => navigate(`/article/${id}`)}>
        <Photo src={img} />
        <Margin height={10}/>
        <Name>{title}</Name>
        <Text>{txt}</Text>
      </Wrapper>
    );
  }