import * as React from 'react';
import { NextPage, NextPageContext } from 'next';

import Layout from '../components/Layout';

interface Props {
  userAgent?: string;
}

// For React.component you can use 'NextPageContext'
// source: https://github.com/zeit/next.js/
const About: NextPage<Props> = ({ userAgent }) => {
  return (
    <Layout>
      <p>This is the about page.</p>
      <p>
        hello:
        {userAgent}
      </p>
    </Layout>
  );
};

About.getInitialProps = (ctx: NextPageContext): Props => {
  const { req } = ctx;
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

  return { userAgent };
};

export default About;
