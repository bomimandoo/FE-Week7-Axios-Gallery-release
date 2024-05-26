import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 중앙 정렬 */
  justify-content: center; /* 수직 중앙 정렬 */
  padding: 10px;
  margin: 0 auto;
  width: 100%;
  max-width: 800px; /* 최대 너비 설정 */
  padding: 20px;
  background-color: #fff;
  text-align: left;
`;

const TextHeader = styled.h1`
  margin-bottom: 20px;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const Text2 = styled.p`
  margin-left: 100px;
`;

const Text3 = styled.p`
  margin-right: 90px;
  font-weight: 500;
  font-size: 15px;
`;

const ArticleImage = styled.img`
  width: 100%;
  max-width: 600px; /* 이미지 최대 너비 설정 */
  margin: 0 auto;
`;

const Article = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const goArticle = async () => {
      try {
        const res = await axios.get("http://3.36.127.43:8080/imageAll");
        const articleIdNum = articleId.replace(/\D/g, ""); // 숫자만 추출
        const articleIdStr = `image${articleIdNum}`;
        const articleData = res.data.find(
          (article) => article.id === articleIdStr
        );
        if (articleData) {
          setArticle(articleData);
        } else {
          navigate("./NotFound");
        }
      } catch (err) {
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
        navigate("./NotFound");
      }
    };
    goArticle();
  }, [articleId, navigate]);

  return (
    <ArticleContainer>
      {article ? (
        <>
          <TextHeader>{article.imageName}</TextHeader>
          <TextWrapper>
            <Text2>{article.imageText}</Text2>
            <Text3>댓글 {}개</Text3>
          </TextWrapper>
          <ArticleImage src={article.imageURL} alt={article.imageName} />
        </>
      ) : (
        <></>
      )}
      {error && <p>{error}</p>}
    </ArticleContainer>
  );
};

export default Article;