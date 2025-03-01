import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Section = styled.div`

`
const ListWrapper = styled.div`
  border-top: 1px rgba(0,0,0,0.5) solid;
`
const List = styled.div`
  display: flex;
  text-align: center;
  padding: 2% 0;
  border-bottom: 1px rgba(0,0,0,0.5) solid;
`
const Title = styled.div`
  width: 60%;
`
const Writer = styled.div`
  width: 20%;
`
const CreatedAt = styled.div`
  width: 20%;
`
const UploadButton = styled.div`
  width: 10%;
  position: absolute;
  right: 0;
  display: flex;
`
const StyledLink = styled(Link)`
  width: 60%;
  color: #000000;
  text-decoration: none;
  cursor: pointer;
`
export default function FreeBoardList({ list, handleMode }) {
  return (
    <Section>
      <ListWrapper>
        <List>
          <Title>제목</Title>
          <Writer>작성자</Writer>
          <CreatedAt>등록일</CreatedAt>
        </List>
        {
          list.map((data, index) => (
            <List key={index}>
              <StyledLink to={`/community/${data.id}`}>
                {data.title}
              </StyledLink>
              <Writer>{data.nickname}</Writer>
              <CreatedAt>{data.updated.slice(0, 10)}</CreatedAt>
            </List>
          ))
        }
      </ListWrapper>
      <UploadButton
        onClick={handleMode}
      >
        글쓰기
      </UploadButton>
    </Section>
  )
}
