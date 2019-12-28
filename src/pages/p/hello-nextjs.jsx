import React from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";


const HelloNextJs = (props) => {
  const router = useRouter();

  return (
    <Layout>
      <h1>HelloNextJs</h1>
      <p>현재 URL 경로: {router.asPath}</p>
    </Layout>
  );
}

export default HelloNextJs;
