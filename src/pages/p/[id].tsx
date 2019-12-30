import * as React from 'react';
import { NextPage, NextPageContext } from 'next';
import axios from 'axios';

import Layout from '../../components/Layout';

interface Show {
  name: string;
  summary: string;
  image: any;
}

interface Props {
  show: Show;
}

const Post: NextPage<Props> = (props: Props) => {
  return (
    <Layout>
      <h1>{props.show.name}</h1>
      <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
      <img alt="img-medium" src={props.show.image.medium} />
      <div className="markdown" />
      <style jsx global>
        {`
          .markdown {
            font-family: 'Arial';
          }

          .markdown a {
            text-decoration: none;
            color: red;
          }

          .markdown a:hover {
            opacity: 0.6;
          }

          .markdown h3 {
            margin: 0;
            padding: 0;
            text-transform: uppercase;
          }
        `}
      </style>
    </Layout>
  );
};

Post.getInitialProps = async (ctx: NextPageContext): Promise<Props> => {
  const { id } = ctx.query;
  const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
  const show = res.data;

  return { show };
};

export default Post;
