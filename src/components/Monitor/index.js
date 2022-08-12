import React from 'react';
import styled from 'styled-components'
import left from '../../assets/left.png'
import right from '../../assets/right.png'
import moment from "moment";

const Container = styled.div`
  width: 1000px;
  height: 48px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Date = styled.div`
  min-width: 116px;
  display: flex;
  justify-content: center;
  align-content: center;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;

`;
const Today = styled.div`
  cursor: pointer;
  display: flex;
  align-content: center;
  margin-left: 10px;
  width: 59px;
  height: 18px;
  padding: 2px 6px 2px 6px;
  background: #FFFFFF;
  box-shadow: inset 0px 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
`;

const ButtonLeft = styled.div`
  margin-right: 24px;
  width: 32px;
  height: 24px;
  box-shadow: inset 0px 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const ButtonRight = styled.div`
  margin-left: 24px;
  width: 32px;
  height: 24px;
  box-shadow: inset 0px 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Monitor = ({today, prevHandler, nextHandler, todayHandler}) => {

    return (
        <Container>
            <ButtonLeft onClick={prevHandler}>
                <img style={{width: '12px', height: '16px', verticalAlign: 'center'}} src={left} />
            </ButtonLeft>

            <Date>{today.format('MMMM').firstLetterToUppercase() + " " + today.format('Y')}</Date>

            <ButtonRight onClick={nextHandler}>
                <img style={{width: '12px', height: '16px', verticalAlign: 'center'}} src={right} />
            </ButtonRight>

            <Today onClick={todayHandler}>Сегодня</Today>

        </Container>
    );
};
export default Monitor;
