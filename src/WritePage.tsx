import React from 'react';
import styled from "styled-components";
import colors from "./data/color";
import {save} from "./lib/api/api";
import {useNavigate} from "react-router-dom";

const WritePage = () => {
  const [name, setName] = React.useState('');
  const [memo, setMemo] = React.useState('');
  const [memoColor, setMemoColor] = React.useState(0);

  const navigate = useNavigate();

  return (
      <Container>
        <Top>
            <Title>방명록 작성하기</Title>
            <Subtitle>
              이대로 헤어지긴 너무 아쉬워요. <br/>
              전시회는 어땠나요? 방명록을 남겨 추억을 만들어주세요!
            </Subtitle>
        </Top>
        <Form>
          <FormWrapper>
            <Row>
              <FormLabel>이름</FormLabel>
              <NameInput
                  placeholder={'이름을 입력해주세요'}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
              />
            </Row>
            <MemoBox
                style={{
                  backgroundColor: colors[memoColor].mainColor,
                }}
            >
              <MemoTop>
                <FormLabel>방명록</FormLabel>
                <FormLabel
                    style={{
                      opacity: 0.5
                    }}
                >{memo.length}/300자</FormLabel>
              </MemoTop>
              <MemoInput
                  color={colors[memoColor].textColor}
                  placeholder={"방명록을 입력해주세요"}
                  value={memo}
                  onChange={(e) => {
                    setMemo(e.target.value);
                  }}
                />
            </MemoBox>
          </FormWrapper>
          <FormWrapper>
            <FormLabel>메모지 선택</FormLabel>
            <MemoColorContainer>
              {colors.map((color, index) => {
                return (
                    <MemoColor
                        color={color.mainColor}
                        onClick={() => {
                          setMemoColor(index);
                        }}
                    />
                )
              })}
            </MemoColorContainer>
          </FormWrapper>
        </Form>
        <Button
          disabled={name.length === 0 || memo.length === 0}
          onClick={
            () => {
              save(name, memo, memoColor);
              navigate("/")
            }
          }
        >
          작성 완료
        </Button>
      </Container>
  );
};

const MemoInput = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 22px;
  font-weight: 500;
  color: ${props => props.color};
  background: transparent;
  outline: none;
  resize: none;
  margin:0;
  box-sizing: border-box;
`

const MemoColor = styled.div`
  width: 74px;
  height: 74px;
  border-radius: 37px;
  background-color: ${props => props.color};
`

const MemoColorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  `;

const MemoTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const MemoBox = styled.div`
  display: flex;
  width: 588px;
  height: 376px;
  padding: 30px 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex-shrink: 0;
  border-radius: 20px;
  `;

const NameInput = styled.input`
  border: none;
  outline:none;
  font-size: 27px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 40.5px */
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const FormLabel = styled.div`
  color: #343545;
  text-align: center;
  font-size: 27px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 40.5px */
  `;

const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 80px;
  `;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  `;

const Container = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Subtitle = styled.div`
  color: #5C5D64;
  text-align: center;
  font-size: 25px;
  font-style: normal;
  line-height: 150%;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  line-height: 80px;
  color: #343545;
`

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

`

const Button = styled.button`
            padding: 20px 60px;
            font-size: 29px;
            font-weight: 600;
            color: white;
            border-radius: 60px;
            background-color: ${props => props.disabled ? '#C4C4C4' : '#1DBF73'};
            border: none;

            &:hover {
            cursor: pointer;
            background: ${props => props.disabled ? '#C4C4C4' : '#1DBF73'};
          }
            `;


export default WritePage;
