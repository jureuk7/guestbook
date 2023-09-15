import React, {useEffect} from 'react';
import quiz from "./data/quiz";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const QuizPage = () => {
  const [quizStep, setQuizStep] = React.useState(0);
  const [quizCurrent, setQuizCurrent] = React.useState(0);
  const [quizWrong, setQuizWrong] = React.useState<number|null>(0);
  const [current, setCurrent] = React.useState(false);
  const [wrong, setWrong] = React.useState<number|null>(null);

  const navigate = useNavigate();

  if(quizStep < 6 ) return (
      <Container>
        <Top>
          <Subtitle>Quiz {quizStep+1}</Subtitle>
          <Title>{
            quiz[quizStep].question
          }</Title>
        </Top>
        <Quiz>
          {quiz[quizStep].options.map((answer, index) => {
            if(answer === quiz[quizStep].answer) {
              return (
                  <QuizButton
                      status={current ? 'correct' : 'none'}
                      onClick={ () => {
                        setCurrent(true);
                        setQuizCurrent(quizCurrent+1)
                        setTimeout(() => {
                          setQuizStep(quizStep+1);
                          setCurrent(false);
                        }, 1000);
                      }}
                  >
                    {answer}
                  </QuizButton>
              )
            }
            return (
                <QuizButton
                    status={wrong === index ? 'wrong' : 'none'}
                    onClick={ () => {
                      setWrong(index);

                      setTimeout(() => {
                        setQuizStep(quizStep+1);
                        setWrong(null);
                      }, 1000);
                    }}
                >
                  {answer}
                </QuizButton>
            )

          })}
        </Quiz>
      </Container>
  )
  return (
          <Container>
            <Title>퀴즈 결과</Title>
            <Content>
              정답 갯수 <br/>
              {quizCurrent}/6개 맞췄습니다!
            </Content>
            {
              quizCurrent >3 ?
                <Button
                  onClick={() => {
                    navigate('/write');
                  }}
                >방문록 작성하러가기</Button>
                  : <Button
                  onClick ={() => {
                    setQuizStep(0);
                    setQuizCurrent(0);
                    setQuizWrong(0);
                  }}
                  >다시 풀기</Button>
            }

          </Container>
  );
};

const Timer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  font-weight: 600;
`;

const Quiz = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  `;

const QuizButton = styled.button<{status?:string}>`
  width: 500px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 600;
  border: none;
  &:hover{
    cursor: pointer;
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
    filter: brightness(0.9);
  }
  border-radius: 40px;
  background-color: ${
    props => {
      if(props.status === 'correct') {
        return '#1CC976';
      } else if(props.status === 'wrong') {
        return '#FF0000';
      } else {
        return '#F6F7FA';
      }
    }
  };
  color: ${
    props => {
      if(props.status === 'correct') {
        return '#FFFFFF';
      } else if(props.status === 'wrong') {
        return '#FFFFFF';
      } else {
        return '#000000';
      }
    }
  };
`;


const Content = styled.div`
  font-size: 50px;
  font-weight: 600;
  line-height: 80px;
  color: #000000;
  text-align: center;
`;


const Container = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 180px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  `;

const Subtitle = styled.div`
  color: #1CC976;
  text-align: center;
  font-size: 41px;
  font-style: normal;
  font-weight: 700;
  line-height: 52px;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  line-height: 80px;
  color: #000000;
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

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;

`

export default QuizPage;
