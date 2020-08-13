/*
  "index.js" in the page folder is handled as the route to "/"
*/
import React from 'react';
import Home from '../components/pages/Home';
import getStaticPropsUniversal from '../staticProps';

const Index = (props) => (
  <><Home {...props} /></>
);

export const getStaticProps = getStaticPropsUniversal('/');

export default Index;
