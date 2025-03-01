import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Community from "../components/Community/Community"
import checkSasmAdmin from '../components/Admin/Common';
import { useNavigate, useParams } from 'react-router-dom';
import { Tab, Tabs } from '@mui/material';
import { useCookies } from 'react-cookie';
import CommunityDetail from '../components/Community/CommunityDetail';

const CommunitySection = styled.div`
  height: calc(100vh - 64px);
  display: grid;
  grid-template-areas: 
    "title header"
    "menu content";
  grid-template-rows: 0.2fr 0.8fr;
  grid-template-columns: 0.25fr 0.75fr;
`
const Menu = styled.div`
  grid-area: menu;
  border-left: 1px black solid;
  border-right: 1px black solid;
`
const Content = styled.div`
  gird-area: content;
  padding: 3vh 3vw;
`
const BackButton = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
`
const Board = styled.div`
  grid-area: header;
  font-size: 2rem;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px black solid;
`
const MenuTitle = styled.div`
  border: 1px black solid;
  grid-area: title;
  font-Size: 1.5rem;
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function SpotCommunity() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleBack = () => {
    if (params.id) {
      navigate('/community');
    }
  }
  const params = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["name"]);
  // const token = cookies.name;
  const token = localStorage.getItem("accessTK"); //localStorage에서 accesstoken꺼내기
  return (
    <CommunitySection>
      <MenuTitle>
        Community
      </MenuTitle>
      <Menu>
        <Tabs
          orientation='vertical'
          value={value}
          onChange={handleChange}
          sx={{
            '& .MuiTabs-indicator': { display: 'none' },
            '& .MuiTab-root': { borderBottom: '1px rgba(0,0,0,0.5) solid' },
            '& .Mui-selected': {},
          }}
        >
          <Tab onClick={handleBack} label="자유게시판" {...a11yProps(0)} />
          <Tab onClick={handleBack} label="장소 추천" {...a11yProps(1)} />
          <Tab onClick={handleBack} label="홍보게시판" {...a11yProps(2)} />
          <Tab onClick={handleBack} label="모임게시판" {...a11yProps(3)} />
        </Tabs>
      </Menu>
      <Board>
        {
          {
            "0": "자유게시판",
            "1": "장소 추천",
            "2": "홍보게시판",
            "3": "모임게시판"
          }[value]
        }
        {
          params.id && <BackButton onClick={handleBack}>뒤로가기</BackButton>
        }
      </Board>
      <Content>
        {
          params.id ?
            <CommunityDetail id={params.id}></CommunityDetail>
            :
            <Community value={value}></Community>
        }
      </Content>
    </CommunitySection>
  )
}