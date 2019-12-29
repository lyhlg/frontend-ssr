import React from 'react';
import styled from 'styled-components';

const App = () => {
  return (
    <S.Container>
      <p>hello</p>
    </S.Container>
  );
}
const S = {};
S.Container = styled.div`
  font-size: 25px;
`;

export default App;