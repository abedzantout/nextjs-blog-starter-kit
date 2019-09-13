import React from 'react';
import { NextPage } from 'next';

import { defaultMetaTags } from '../core/constants';
import Layout from '../shared/components/layout';
import { getBlogPostEntries } from '../core/contentful';
import { BlogPost } from '../interfaces/post';

type Props = {
    entries: BlogPost[];
    url: any;
}
const IndexPage: NextPage = (props: Props) => {
    console.log(props.entries);
    return (
        <Layout meta={defaultMetaTags}>
            <div>Latest posts</div>

        </Layout>
    )
};

IndexPage.getInitialProps = async ({req}) => {
    const entries = await getBlogPostEntries();

    return {entries};
};

export default IndexPage;
