import React from 'react';
import styled from "styled-components";
import search_icon from '../../assets/search.png'

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  background: #F4F4F4;
  
`;
const HeaderContent = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 53px 0px 0 0px;
  
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  
`;
const Button = styled.div`
  width: 80px;
  height: 26px;
  background: #0271C7;
  margin-right: 10px;
  display:inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
  box-shadow: 0px 1px 1px 0px #00000040;
  border-radius: 2px;
  cursor: pointer;

`;
const Text = styled.span`

  font-family: Roboto;
  font-size: 13px;
  font-weight: 400;
`;
const ButtonContainer = styled.div`
  display: flex;
  
`;
const Search = styled.div`
  display:inline-flex;
  justify-content: center;
  align-items: center;
`;
const SearchIcon = styled.div`
  
`;


const Header = () => {

    return (
        <HeaderContainer>
            <HeaderContent>
                <ButtonContainer>
                    <Button><Text>Добавить</Text></Button>
                    <Button><Text>Обновить</Text></Button>
                </ButtonContainer>
                <Search>
                    <img style={{width: '20px', height: '20px', verticalAlign: 'center', cursor: 'pointer'}} src={search_icon} />
                    <input style={{width: '210px', height: '28px', marginLeft: '21px', boxShadow: '0px 0px 1px 2px #00000040 inset', border: '1px solid #CFCFCF',borderRadius: '4px', color: '#CFCFCF', paddingLeft: '10px'}} placeholder="Событие, дата или участник"/>
                </Search>
            </HeaderContent>
        </HeaderContainer>
    );
};

export default Header;
