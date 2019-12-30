import * as React from 'react';
import axios from 'axios';
import Link from 'next/link';
import styled from 'styled-components';
import { NextPage } from 'next';

import Layout from '../components/Layout';
import App from '../components/App';

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

const Index: NextPage<Props> = (props: Props) => (
  <Layout>
    <Title>Batman TV Shows</Title>
    <ul>
      {props.shows.map((show: DataDetail) => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a href="/">{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <App />
    <style jsx>
      {`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}
    </style>
  </Layout>
);

Index.getInitialProps = async (): Promise<Props> => {
  const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
  const { data } = res;

  return {
    shows: data.map((entry: ServerDatas) => entry.show),
  };
};

const Title = styled.h1`
  color: gray;
`;

export default Index;
