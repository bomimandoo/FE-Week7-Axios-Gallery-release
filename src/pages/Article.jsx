import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
//import { useNavigate } from "react-router-dom";

const Container = styled.div``;

const Text1 = styled.h1``;
const Text2 = styled.p``;
const Text3 = styled.p``;

const Article = () => {
  const { articleId } = useParams();
  //const navigate = useNavigate();


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
  }, [articleId]);

 

  return (
    <>
      <Container>
        <Text1>멋쟁이 사자처럼 at 인하대학교 12기 모집</Text1>
        <Text2>1년간 즐겁게 활동할 아기사자들을 모집합니다!</Text2>
        <Text3>댓글 {commentCount} 개</Text3>
      </Container>
      <img src={articleList.imageURL} alt={articleList.imageName} 
      />
      {/* 유의미한 텍스트를 포함한 alt 속성 추가 */}
    </>
  );
};

export default Article;
