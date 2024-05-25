import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Article = () => {

    const Container = styled. div``

    const Text1 = styled.h1`
        
    `
    const Text2 = styled.p`
        
    `
    const Text3 = styled.p``


    const { articleId } = useParams();
    const [commentCount, setCommentCount] = useState([]);
    const [articlelist,setArticleList] = useState({
        id: 0,
        imageURL: "",
        imageName:"",
        imageText:"",
    });
    
    useEffect(()=> {
        axios
        .get(`https://reqres.in/api/users/${articleId}`)
        .then(res => {
            setArticleList(res.data.data);
        })
        .catch(err => {
            console.error(err);
        });
    }, []);


    return(
        <>
    <Container>
        <Text1>멋쟁이 사자처럼 at 인하대학교 12기 모집</Text1>
        <Text2>1년간 즐겁게 활동할 아기사자들을 모집합니다!</Text2>
        <Text3>댓글 {commentCount} 개</Text3>
    </Container>
    <img src={articlelist.imageURL}/>
    

        </>
    );
};


export default Article;