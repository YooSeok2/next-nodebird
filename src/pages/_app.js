import 'antd/dist/antd.css';
import GlobalStyle from 'styles/globals';
import PropTypes from 'prop-types';
import Head from 'next/head';

function MyApp ({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <title>NodeBird</title>
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired
};

export default MyApp;
