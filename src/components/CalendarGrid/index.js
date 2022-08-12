import React from 'react';
import styled from 'styled-components'
import moment from "moment";


const GridWrapper = styled.div`
  
  width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  
  
`;
const CellWrapper = styled.div`
    padding: 8px;
    min-width: 143px;
    min-height: 120px;
    background-color: white;
    outline: 1px solid #292929;
    color: ${props => props.isSelectedMonth ? '#000000' : '#555759'} ;

  :hover {
    background-color: #F4F4F4;
    cursor: pointer;
  }
  :active{
    background-color: #FFFFFF;
  

    box-shadow: inset 0px 0px 6px #0271C7
  }
    

`;
const CurrentDay = styled.div`
  color: red;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
`;
const DayWrapper = styled.div`
  
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;

`;
const RowInCell = styled.div`

  
`;

const Title = styled.div`
  padding: 8px 0;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #292929;

`;

const Description = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #6B6B6B;
  text-overflow: ellipsis;

`;

String.prototype.firstLetterToUppercase = function() {
    return this[0].toUpperCase() + this.slice(1);
}


const CalendarGrid = ({startDay, today, totalDays, events, openFormHandler}) => {

    const day = startDay.clone().subtract(1, 'day')
    const daysMap = [...Array(totalDays)].map(()=> day.add(1, 'day').clone())


const isSelectedMonth = (day) => today.isSame(day, 'month');
const isCurrentDay = (day) => moment().isSame(day, 'day');


    return (
        <GridWrapper>
            {
                daysMap.map((dayItem, i)=>(

                    <CellWrapper key={dayItem.unix()}
                                 isSelectedMonth={isSelectedMonth(dayItem)}


                    >
                        <RowInCell>
                            {i<7 ? (<DayWrapper onClick={(e)=>openFormHandler('Создать')}>
                                {!isCurrentDay(dayItem) && dayItem.format('dddd').firstLetterToUppercase() + ', ' + dayItem.format('D')}
                                {isCurrentDay(dayItem) && <CurrentDay>{dayItem.format('dddd').firstLetterToUppercase() + ', ' + dayItem.format('D')}</CurrentDay>}
                            </DayWrapper>) : (<DayWrapper onClick={(e)=>openFormHandler('Создать')}>
                                {!isCurrentDay(dayItem) && dayItem.format('D')}
                                {isCurrentDay(dayItem) && <CurrentDay>{dayItem.format('D')}</CurrentDay> }
                            </DayWrapper>)

                        }


                            {
                                events
                                    .filter(event=>event.date>=dayItem.format('X') && event.date<=dayItem.clone().endOf('day').format('X'))
                                    .map(event=>(
                                        <div key={event.id}>
                                            <Title onClick={(e)=>openFormHandler('Обновить', event)}>{event.title}</Title>
                                            <Description>{event.people}</Description>
                                        </div>


                                    ))

                            }

                        </RowInCell>
                    </CellWrapper>
                ))
            }
        </GridWrapper>
    );
};

export default CalendarGrid;
