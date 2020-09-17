/*
  "index.js" in the page folder is handled as the route to "/"
*/
import React from 'react';
import Home from '../components/pages/Home';
import getStaticUniversal from '../static';

const Index = (props) => <Home {...props} />;

export const getStaticProps = getStaticUniversal({ pathname: '/' });

export default Index;
