import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Header: React.SFC = () => {
  return (
    <S.Container>
      <h1>Recipe</h1>
      <Link href="/">
        <a href="/">Home</a>
      </Link>
      <Link href="/about">
        <a href="/">About</a>
      </Link>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    height: 150px;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    a {
      color: white;
      margin-left: 1em;
    }
  `,
  Inner: styled.div`
    width: 100%;
  `,
};

export default Header;
