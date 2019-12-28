import React from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const DeployNextJs = props => {
  const router = useRouter();
  return (
    <Layout>
      <h1>DeployNextJs</h1>
      <p>현재 URL 경로: {router.asPath}</p>
      <button onClick={() => router.back()}>뒤로</button>
      
    </Layout>
  );
};

export default DeployNextJs;
