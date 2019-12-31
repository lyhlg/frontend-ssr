import * as React from 'react';
import styled from 'styled-components';

import TopHeader from './TopHeader';
import Header from './Header';

const Layout: React.SFC = props => {
  return (
    <S.Container>
      <S.Wrapper>
        <TopHeader />
        <S.ViewItem>
          <S.AsideNavi>navigation list</S.AsideNavi>
          <S.Contents>
            <Header />
            {props.children}
          </S.Contents>
        </S.ViewItem>
      </S.Wrapper>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    z-index: 1;
  `,
  Title: styled.h1`
    color: gray;
  `,
  Wrapper: styled.div`
    background: yellow;
    max-width: 1300px;
    margin: 0 auto;
  `,
  ViewItem: styled.div`
    display: flex;
  `,
  AsideNavi: styled.aside`
    flex-basis: 300px;
  `,
  Contents: styled.main`
    flex-basis: 100%;
    background-color: green;
    min-height: 100vh;
  `,
};

export default Layout;
