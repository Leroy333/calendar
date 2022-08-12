import moment from 'moment'
import Header from "../Header";
import CalendarGrid from "../CalendarGrid";
import Monitor from "../Monitor";
import 'moment/locale/ru'
import close from '../../assets/cross.png'
import styled from 'styled-components'

import {useEffect, useState} from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  
`;
const ShadowWrapper = styled.div`
  border-top: 1px solid #737374;
  border-left: 1px solid #464648;
  border-right: 1px solid #464648;
  border-bottom: 1px solid #464648;
  
`;
const FormPositionWrapper = styled.div`
  position: absolute;
  z-index: 100;
  background-color: rgba(0,0,0,0.32);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FormWrapper = styled(ShadowWrapper)`
  width: 290.32px;
  height: 315px;
  padding-top: 20px;
  

  background: #FFFFFF;
`;
const EventTitle = styled('input')`
  margin: 8px 12px;
  padding: 6px 12px;
  width: 266.32px;
  height: 28px;
  background: #FFFFFF;
  border: 1px solid #CFCFCF;
  box-shadow: inset 0px 0px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;
const EventBody = styled('input')`
  margin: 8px 12px;
  padding: 6px 12px;
  width: 266.32px;
  height: 28px;
  background: #FFFFFF;
  border: 1px solid #CFCFCF;
  box-shadow: inset 0px 0px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;
const EventDescription = styled('input')`
  padding: 0px 12px;
  width: 266.32px;
  height: 100px;
  background: #FFFFFF;
  border: 1px solid #CFCFCF;
  box-shadow: inset 0px 0px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin: 8px 12px;
  vertical-align: text-top;
 
`;
const ButtonsWrapper = styled('div')`
  padding: 8px 14px;
  display: flex;
  justify-content: flex-start;
`;
const Close = styled('div')`
  width: 266.32px;
  display: flex;
  justify-content: flex-end;
`;
const url='http://localhost:5000'
const totalDays = 42
const defaultEvent = {
    title: '',
    people: '',
}

function App() {
    moment.updateLocale('ru', {week:{dow: 1}})
    const [today, setToday] = useState(moment())
    const startDay = today.clone().startOf('month').startOf('week');





    //window.moment = moment

    const prevHandler = () => {setToday(prev => prev.clone().subtract(1, 'month'))}
    const todayHandler = () => setToday(moment())

    const nextHandler = () => {setToday(prev => prev.clone().add(1, 'month'))}

    const [events, setEvents] = useState([]);
    const [isShowForm, setShowForm] = useState(false);
    const [event, setEvent] = useState(null);
    const [method, setMethod] = useState(null);
    const startDateQuery = startDay.clone().format('X')
    const endDateQuery = startDay.clone().add(totalDays, 'days').format('X')
    const openFormHandler = (methodName,eventForUpdate)=>{
        setShowForm(true);
        setEvent(eventForUpdate || defaultEvent);

        setMethod(methodName);
    }
    const cancelButtonHandler = ()=>{
        setShowForm(false);
        setEvent(null)

    }
    useEffect(()=>{{

            const localRows = localStorage.getItem('events')
            setEvents(JSON.parse(localRows))

            }
    }, [])

    const changeEventHandler = (text, field)=>{
        setEvent(prevState=>({
            ...prevState,
            [field]: text,

        }))
        console.log(event)
    }

    const eventFetchHandler = ()=>{

        const anyAdult = localStorage.getItem('events')
        const anyAdult2 = JSON.parse(anyAdult)
        console.log(event)
        anyAdult2.forEach((element, index, array)=>{
            if(array[index].id===event.id){
                console.log(event)
                array[index] = event

            }


        })
        localStorage.setItem('events', JSON.stringify(anyAdult2))
        const newEvents = localStorage.getItem('events')
        setEvents(JSON.parse(newEvents))

    }


  return (
    <>
        {
            isShowForm? (
                <FormPositionWrapper onClick={cancelButtonHandler}>
                    <FormWrapper onClick={e=>e.stopPropagation()}>
                        <Close><img style={{cursor: 'pointer'}} onClick={cancelButtonHandler} src={close}/></Close>
                        <EventTitle requered onChange={(e)=>changeEventHandler(e.target.value, 'title')} value={event.title}/>
                        <EventTitle  placeholder="День, месяц, год"/>
                        <EventBody requered onChange={(e)=>changeEventHandler(e.target.people, 'people')} value={event.people}/>
                        <EventDescription placeholder="Описание" />
                        <ButtonsWrapper>
                            <button onClick={eventFetchHandler} style={{width: '61px', height: '18px', marginRight: '20px', fontSize: '12px',display:'flex', justifyContent: 'center'}}>{method}</button>
                            <button style={{width: '61px', height: '18px', marginRight: '20px', fontSize: '12px',display:'flex', justifyContent: 'center'}}>Удалить</button>
                        </ButtonsWrapper>
                    </FormWrapper>
                </FormPositionWrapper>
            ): null
        }
        <Container>
            <Header />
            <Monitor
                today = {today}
                prevHandler = {prevHandler}
                todayHandler = {todayHandler}
                nextHandler = {nextHandler}
            />
            <CalendarGrid startDay = {startDay} today={today} totalDays={totalDays} events={events} openFormHandler={openFormHandler}/>
        </Container>
    </>
  );
}

export default App;
