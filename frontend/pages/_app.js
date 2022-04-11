/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import PropTypes, { any } from 'prop-types';
import Router from 'next/router';
import nProgress from 'nprogress';
import { ApolloProvider } from '@apollo/client';
import Page from '../components/Page';
import '../components/styles/nprogress.css';
import '../components/styles/font-awesome.min.css';
import withData from '../lib/withData';

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} key={Math.round(Math.random() * 1000)} />
      </Page>
    </ApolloProvider>
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

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);
