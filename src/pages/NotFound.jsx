import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import lion from "../assets/lion.png";


const Container = styled.div`
  padding: 100px;
`;

const Text1 = styled.p`
  text-align: center;
  font-size: 14px;
`;

const Image = styled.img`
  width: 100%;
  height: 600px;
`;

const Text2 = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;

const Button = styled.button`
  background-color: #007bff;
  border-radius: 5px;
  width: 140px;
  height: 35px;
  color: white;
  border: none;
  margin-left: 320px;
  cursor: pointer;
`;

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Text1>
          <h1>멋쟁이 사자가 당신을 기다리고 있습니다</h1>
        </Text1>

        <Image src={lion} alt="lion" />

        <Text2>어흥...</Text2>

        <Button onClick={() => navigate("/")}>뒤돌아서 도망가기!</Button>
      </Container>
    </>
  );
};

export default NotFound;
