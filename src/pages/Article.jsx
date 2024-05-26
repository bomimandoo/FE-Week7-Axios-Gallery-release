import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-right: 320px;
`;

/*const Image = styled.img`
  max-width: 100%;
  height: auto;
`;*/

const Text1 = styled.h1``;
const Text2 = styled.p`
position: relative;
top: -20px;
`


const Text3 = styled.p`
position: relative;
left: 800px;
bottom: 110px;
font-weight: 500;
font-size: 15px;
`

const Article = () => {
  const { articleId } = useParams();

  const [commentCount] = useState(0);
  const [articleList, setArticleList] = useState({
    id: 0,
    imageURL: "",
    imageName: "",
    imageText: "",
  });

  useEffect(() => {
    axios
      .get(`http://3.36.127.43:8080/${articleId}`) 
      .then((res) => {
        setArticleList(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
    <Container>
        <Text1>멋쟁이 사자처럼 at 인하대학교 12기 모집</Text1>
        <Text2>1년간 즐겁게 활동할 아기사자들을 모집합니다!</Text2>
        <Text3>댓글 {commentCount}개</Text3>
     
      <img src={articleList.imageURL} alt={articleList.imageName} 
      />
      {/* 유의미한 텍스트를 포함한 alt 속성 추가 */}
      </Container>
      </>
  );
};

export default Article; 