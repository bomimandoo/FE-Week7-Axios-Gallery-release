import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
//import lionface from "../assets/lionface.png";

const Header = () => {
  const Container = styled.div`
    text-align: center;
    padding-left: 100px;
  `;

  const Image = styled.img`
    width: auto;
  `;
  const Text1 = styled.h1`
    padding-right: 90px;
  `;
  const Text2 = styled.p``;
  const Text3 = styled.p`
    font-weight: 800;
    padding-right: 360px;
  `;

  const [image, setImage] = useState([]);
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
      {/*<Image src={lionface} alt="lionface"/>*/}

      <Text1>likelion_12th_frontend</Text1>
      <Text2>
        <p>멋쟁이사자처럼 12기 여러분 화이팅!! 어른사자로 폭풍성장중</p>
      </Text2>
      <Text3>게시물 {image}개</Text3>
    </Container>
  );
};

export default Header;
