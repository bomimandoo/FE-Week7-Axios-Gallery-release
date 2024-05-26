import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import lionface from "../../assets/lionface.png"; // 이미지 경로 수정

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 20px;
`;

const Image = styled.img`
  width: 100px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

const Text1 = styled.h1`
  margin: 0;
`;

const Text2 = styled.p`
  margin: 0;
`;

const Text3 = styled.p`
  font-weight: 800;
  margin: 0;
`;

const Header = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    axios
      .get(`http://3.36.127.43:8080/imageSize`) // 이미지 갯수 불러오기
      .then((res) => {
        setImage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <HeaderSection>
        <Image src={lionface} alt="lionface" />
        <TextContainer>
          <Text1>likelion_12th_frontend</Text1>
          <Text2>멋쟁이사자처럼 12기 여러분 화이팅!! 어른사자로 폭풍성장중...🦁</Text2>
          {image !== null && <Text3>게시물 {image}개</Text3>}
        </TextContainer>
      </HeaderSection>
    </Container>
  );
};

export default Header;