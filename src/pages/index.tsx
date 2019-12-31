import * as React from 'react';
import axios from 'axios';
// import Link from 'next/link';
import styled from 'styled-components';
import { NextPage } from 'next';

import Layout from '../components/Layout';
// import App from '../components/App';

interface Props {
  [index: string]: DataDetail;
}

interface DataDetail {
  id: number;
  url: string;
  [propName: string]: any;
}

interface Data {
  show: DataDetail;
}

interface ServerDatas {
  [index: string]: Data[];
}

const Index: NextPage<Props> = () => (
  <Layout>
    <S.Main>Contents</S.Main>
    {/* <Title>Batman TV Shows</Title>
    <ul>
      {props.shows.map((show: DataDetail) => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a href="/">{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <App /> */}
  </Layout>
);

Index.getInitialProps = async (): Promise<Props> => {
  const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
  const { data } = res;

  return {
    shows: data.map((entry: ServerDatas) => entry.show),
  };
};

const S = {
  Main: styled.div``,
};

export default Index;
