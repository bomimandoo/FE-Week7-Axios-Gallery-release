import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Card from "../components/Card";
import Header from "../components/Header/Header";

const Container = styled.div` //전체 카드 컨테이너
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;  //칸 사이 간격 조정
  width: 50%;
  padding: 20px;
`;

const Home = () => {
  const [articlelist, setArticleList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://3.36.127.43:8080/imageAll`)  //전체 이미지 띄우기
      .then((res) => {
        if (Array.isArray(res.data)) {
          setArticleList(res.data);
        } else {
          console.error("Unexpected API response format", res.data);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  if (!Array.isArray(articlelist)) {      // map이 잘 안돌아갔을 시 띄워지는 문구?
    return <div>No data</div>;
  }

  return (
    <>
      <Header />
      <Container>
        {articlelist.map((article) => (
          <Card
            key={article.id}
            id={article.id}
            img={article.imageURL}
            title={article.imageName}
            txt={article.imageText}
          />
        ))}
      </Container>
    </>
  );
};

export default Home;
