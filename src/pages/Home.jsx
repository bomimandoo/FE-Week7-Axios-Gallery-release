import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Card from "../components/Card";
import Header from "../components/Header/Header";  

const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`;

    
    const Home = () => {
       
       const [articlelist, setArticleList] = useState([]);

       useEffect(()=> {
        axios
        .get(`http://3.36.127.43:8080/imageAll`)  //전체 이미지 가져오기
        .then((res) => {
            setArticleList(res.data.data);
            console.log(res.data.data);
        })
        .catch((e) => {
            console.error(e);
        });
    }, []);


    /*if (!Array.isArray(articlelist)) {
        return <div>Loading...</div>;
    }*/
    return (
        <> 
           {<Header/>}  
            
            <Container>
            {articlelist.map((article)=>(
                   < Card
                    key={article.id}
                    id={article.id}
                    img={article.imageURL}
                    title={article.imageName}
                    txt={article.imageText}
                    />
                )
                )}
            </Container>
            
           
            
        </>
    );
};

export default Home;
 