import React from "react";
import { useRouter } from "next/router";
import axios from 'axios';
import Markdown from "react-markdown";
import Layout from "../../components/Layout";

const Post = props => {
  const router = useRouter();
  return (
    <Layout>
      <h1>{props.show.name}</h1>
      <p>{props.show.summary.replace(/<[/]?[pb]>/g, "")}</p>
      <img src={props.show.image.medium} />
      <div className="markdown">
        <Markdown
          source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.
### This is a title
And here's the content.
      `}
        />
      </div>
      <style jsx='true' global='true'>{`
        .markdown {
          font-family: "Arial";
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
      `}</style>
    </Layout>
  );
};

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
  const show = res.data;

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;
