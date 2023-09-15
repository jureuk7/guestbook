import React, {useEffect} from 'react';
import styled from "styled-components";
import {inspect} from "util";
import colors from "./data/color";
import {list} from "./lib/api/api";
import {useQuery} from "react-query";

const GuestBooks = () => {

  const {data,isLoading,error} = useQuery(['guestBooks'], list);

  useEffect(() => {
    if(data) console.log(data);
  }, [data]);

  return (
      <Container>
        <Top>
          <Title>IWOP 동아리 전시회 방명록</Title>
        </Top>
        <GustBookContainer>
          // @ts-ignore
          {data && data.map((guestBook:any, index:number) => {
            return (
                <GuestBook
                    mainColor={colors[guestBook.memoString as number].mainColor}
                >
                  <GuestBookName
                      textColor={colors[guestBook.memoString as number].textColor}
                  >
                    {guestBook.name}
                  </GuestBookName>
                  <GuestBookContent
                      textColor={colors[guestBook.memoString as number].textColor}
                  >
                    {guestBook.memo}
                  </GuestBookContent>
                </GuestBook>
            )
          })}
        </GustBookContainer>
      </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 130px;
  align-items: center;
`;

const Top = styled.div`
  margin-top: 100px;
  `;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  line-height: 80px;
  color: #343545;
`;

const GustBookContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const GuestBook = styled.div<{mainColor:string}>`
  flex: 1;
  background-color: ${props => props.mainColor};

  border-radius: 20px;
  padding: 30px 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const GuestBookName = styled.div<{textColor:string}>`
  color: ${props => props.textColor};
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
`;

const GuestBookContent = styled.div<{textColor:string}>`
  color: ${props => props.textColor};
  font-size: 19px;
  font-weight: 500;
  line-height: 30px;
`;







export default GuestBooks;
