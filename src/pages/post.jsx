import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const Post = props => {
  return (
    <Layout>
      <h1>{props.show.name}</h1>
      <p>{props.show.summary.replace(/<[/]?[pb]>/g, "")}</p>
      <img src={props.show.image.medium} />
    </Layout>
  );
}

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const show = await axios.get(`https://api.tvmaze.com/shows/${id}`);

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;