import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Card from "../components/Card";
import Header from "../components/Header/Header";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 800px;
  gap: 5px;
  margin-left: 500px;
  padding-top: 20px;
  
`;

const Home = () => {
  const [articlelist, setArticleList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://3.36.127.43:8080/imageAll`)
      .then((res) => {
        setArticleList(res.data); // .data
        console.log(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  if (!Array.isArray(articlelist)) {
    return <div>No data available</div>;
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
