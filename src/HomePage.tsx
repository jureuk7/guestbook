import React from 'react';
import QuizImage from "./assets/quiz.svg";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
      <Container>
        <Top>
          <Subtitle>2023 IWOP</Subtitle>
          <Title>동아리 전시회</Title>
        </Top>
        <img src={QuizImage} width={200} height={150} alt=""/>
        <Content>
          즐거운 전시회 관람 되셨나요? <br/>
          전시회 퀴즈를 풀고 행운의 주인공이 되어보세요!
        </Content>
        <Button onClick={
          () => {
            navigate('/quiz');
          }
        }>퀴즈 풀러가기</Button>
      </Container>
  );
};


const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
`

const Container = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 180px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Button = styled.button`
  padding: 20px 60px;
  font-size: 29px;
  font-weight: 600;
  color: white;
  border-radius: 60px;
  background-color: #1CC976;
  border: none;

  &:hover {
    cursor: pointer;
    background: #199f5e;
  }
`;


const Subtitle = styled.div`
  color: #1CC976;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 52px;
`;

const Title = styled.div`
  font-size: 54px;
  font-weight: 700;
  line-height: 80px;
  color: #000000;
`

const Content = styled.div`
  font-size:24px;
  line-height: 150%;
  text-align: center;
  font-weight: 500;
  color: #5C5D64;
`


export default HomePage;
