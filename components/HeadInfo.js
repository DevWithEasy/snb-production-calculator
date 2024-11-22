import Head from 'next/head';

const HeadInfo = ({title,content}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={content} />
            <link rel="icon" href="/logo.png" />
        </Head>
    );
};

export default HeadInfo;