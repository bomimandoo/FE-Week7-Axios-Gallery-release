import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";


const CommentContainer = styled.div` //댓글창과 리스트 컨테이너
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
  padding-left: 100px;
`;

const CommentList = styled.ul`
  list-style: none;
  padding: 0; 
`;

const CommentItem = styled.li`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommentText = styled.div` 
  display: flex;
  align-items: center;
`;

const CommentAuthor = styled.span` //익명
  font-weight: bold;
  margin-right: 20px; 
`;

const CommentForm = styled.form` //댓글창
  display: flex;
  align-items: center;
  margin-bottom: 20px; 
`;

const CommentInput = styled.input`  //댓글 작성란-input 태그와 placeholder 사용
  padding: 10px;
  font-size: 14px;
  width: 100%;
  height: 40px; 
  flex: 1; 
  box-sizing: border-box; 
`;

const CommentButton = styled.button` //게시 버튼
  margin-left: 10px; 
  padding: 5px 10px;
  font-size: 14px;
  color: #007bff;
  background-color: white;
  border: none;
  cursor: pointer;
  height: 40px; 
  box-sizing: border-box; 
`;

const DeleteButton = styled.button` //삭제 버튼
  color: gray;
  background-color: white;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
`;

const CommentSection = ({ imgId, setCommentCount }) => {   //댓글 리스트
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [error, setError] = useState(null);

  // 댓글 리스트 불러오기 함수
  const fetchComments = useCallback(async () => {     //비동기화-중간에 추가해도 바로 변동되도록!
    try {
      const res = await axios.get(`http://3.36.127.43:8080/${imgId}/comments`);
      setComments(res.data);
      setCommentCount(res.data.length); // 댓글 개수 업데이트
    } catch (err) {
      setError("댓글을 불러오는 중 오류가 발생했습니다.");
    }
  }, [imgId, setCommentCount]);

  // 댓글 작성 함수
  const postComment = async () => {
    try {
      await axios.post(`http://3.36.127.43:8080/${imgId}/comments`, {
        commentBody: comment,
      });
      setComment(""); // 댓글 작성 후 입력란 비우기
      fetchComments(); // 댓글 작성 후 다시 불러오기
    } catch (err) {
      setError("댓글을 작성하는 중 오류가 발생했습니다.");
    }
  };

  // 댓글 삭제 함수
  const deleteComment = async (commentId) => {
    try {
      await axios.delete(
        `http://3.36.127.43:8080/${imgId}/comments/${commentId}`
      );
      fetchComments(); // 댓글 삭제 후 다시 불러오기
    } catch (err) {
      setError("댓글을 삭제하는 중 오류가 발생했습니다.");
    }
  };

 
  useEffect(() => {
    fetchComments();
  }, [imgId, fetchComments]); 

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.trim()) {
      await postComment();
    } else {
      setError("댓글 내용을 입력하세요.");
    }
  };

  return (
    <CommentContainer>
      <CommentForm onSubmit={handleSubmit}>
        <CommentInput
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="댓글 작성..."
        />
        <CommentButton type="submit">게시</CommentButton>
      </CommentForm>
      {error && <p>{error}</p>}
      <CommentList>
        {comments.map((comment) => (
          <CommentItem key={comment.id}>
            <CommentText>
              <CommentAuthor>익명</CommentAuthor>
              {comment.commentBody}
            </CommentText>
            <DeleteButton onClick={() => deleteComment(comment.id)}>
              삭제
            </DeleteButton>
          </CommentItem>
        ))}
      </CommentList>
    </CommentContainer>
  );
};

export default CommentSection;