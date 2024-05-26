import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const NotFound = () => {
    const navigate = useNavigate();
   
    return (
       
        <> 
            <h1>멋쟁이 사자가 당신을 기다리고 있습니다</h1>
            
        </>
    );
};

export default NotFound;