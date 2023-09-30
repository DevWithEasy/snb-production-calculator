import React from 'react';

const Head = ({title,content}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={content} />
            <link rel="icon" href="/logo.png" />
        </Head>
    );
};

export default Head;