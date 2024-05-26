import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import lionface from "../../assets/lionface.png"; // 이미지 경로 수정- 폴더 안에 폴더를 하나 더 구성했기 때문에 경로를 하나 더 써줘야함

const Container = styled.div`  //헤더 전체 컨테이너
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 100px;
  padding: 70px;
`;



const Image = styled.img` //사자 얼굴 이미지
  width: 100px;
  display: flex;
  position: absolute;
  margin-left: -700px;
  
`;

const TextContainer = styled.div` //텍스트들 정렬
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
        setImage(res.data); //data로 써줘야함
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      
        <Image src={lionface} alt="lionface" />
        <TextContainer>
          <Text1>likelion_12th_frontend</Text1>
          <Text2>멋쟁이사자처럼 12기 여러분 화이팅!! 어른사자로 폭풍성장중...🦁</Text2> {/*이모지-윈도우+ .*/}
          <Text3>게시물 {image}개</Text3>
        </TextContainer>
      
    </Container>
  );
};

export default Header;