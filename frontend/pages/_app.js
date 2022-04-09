/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import PropTypes, { any } from 'prop-types';
import Router from 'next/router';
import nProgress from 'nprogress';
import Page from '../components/Page';

import '../components/styles/nprogress.css';

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} key={Math.round(Math.random() * 1000)} />
    </Page>
  );
}

Page.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  Component: any,
  pageProps: any,
};
