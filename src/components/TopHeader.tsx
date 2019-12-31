import React from 'react';
// import Link from 'next/link';
import styled from 'styled-components';

const TopHeader: React.SFC = () => {
  return (
    <S.Container>
      <S.Left>
        <p>로고</p>
      </S.Left>
      <S.Right>
        <p>설정</p>
      </S.Right>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background-color: #d5d5d5;
    color: black;
  `,
  Left: styled.div`
    flex-basis: 50%;
  `,
  Right: styled.div`
    flex-basis: 50%;
    display: block;

    p {
      text-align: right;
    }
  `,
};

export default TopHeader;
