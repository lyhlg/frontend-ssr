import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import Layout from "../components/Layout";
import App from '../components/App';
import styled from 'styled-components';

const Index = props => (
  <Layout>
    <S.title>Batman TV Shows</S.title>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <App />
    <style jsx='true'>{`
      h1,
      a {
        font-family: "Arial";
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
    `}</style>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await axios.get("https://api.tvmaze.com/search/shows?q=batman");
  const data = res.data;

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

const S = {};
S.title = styled.h1`
  color: gray;
`

export default Index;