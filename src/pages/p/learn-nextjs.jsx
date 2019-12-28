import React from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const LearnNextJs = props => {
  const router = useRouter();

  return (
    <Layout>
      <h1>LearnNextJs</h1>
      <p>현재 URL 경로: {router.asPath}</p>
    </Layout>
  );
};

export default LearnNextJs;
