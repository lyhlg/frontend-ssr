import React from 'react';
import Layout from '../components/Layout';

const About = (props) => {
  return (
    <Layout>
      <p>This is the about page.</p>
      <p>hellow : {props.userAgent} </p>
    </Layout>
  );
}

About.getInitialProps = ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

  return { userAgent };

}

export default About;