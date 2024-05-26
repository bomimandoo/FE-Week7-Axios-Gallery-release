import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import CommentSection from "../components/CommentSection"; // 댓글 컴포넌트 불러오기

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  background-color: #fff;
  text-align: left;
`;

const TextHeader = styled.h1`
  padding-left: 100px;
  margin-bottom: 20px;
`;

const TextWrapper = styled.div`
  //Text2와 Text3의 위치를 같게 하기 위해 묶음
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

//
const ArticleImage = styled.img`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

// 
const Article = () => {
  const { articleId } = useParams(); //해당 userId들을 묶어 가져옴
  const [article, setArticle] = useState(null); 
  const [error, setError] = useState(null); 
  const [commentCount, setCommentCount] = useState(0); // 댓글 개수 상태 관리
  const navigate = useNavigate(); 

  // articleId가 변경될 때마다 기사 데이터를 가져옴
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
          const commentRes = await axios.get(
            `http://3.36.127.43:8080/${articleIdStr}/comments`
          );
          setCommentCount(commentRes.data.length);
        } else {
          navigate("/NotFound"); // 데이터가 없을 경우 NotFound 페이지로 이동
        }
      } catch (err) {
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
        navigate("/NotFound"); // 오류가 발생할 경우 NotFound 페이지로 이동
      }
    };
    goArticle();
  }, [articleId, navigate]); 

  return (
    <ArticleContainer>
      {error && <p>{error}</p>} {/* 오류 메시지 표시 */}
      {article ? (
        <>   {/*해당 이미지에 맞는 텍스트 불러오기*/}
          <TextHeader>{article.imageName}</TextHeader> 
          <TextWrapper>
            <Text2>{article.imageText}</Text2>
            <Text3>댓글 {commentCount}개</Text3> {/* 댓글 개수 변동될 때마다 불러오기 */}
          </TextWrapper>
          <ArticleImage src={article.imageURL} alt={article.imageName} />
          {article && (
            <CommentSection
              imgId={article.id}
              setCommentCount={setCommentCount}
            />
          )}
        </>
      ) : (
        !error && <p>기사를 불러오는 중입니다...</p>
      )}
    </ArticleContainer>
  );
};

export default Article;
