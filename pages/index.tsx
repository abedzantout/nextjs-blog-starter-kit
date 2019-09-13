import React from 'react';
import { NextPage } from 'next';

import { defaultMetaTags } from '../core/constants';
import Layout from '../shared/components/layout';

const IndexPage: NextPage = () => {
    return (
        <Layout meta={defaultMetaTags}>
            <div>Hello World!</div>

        </Layout>
    )
};

export default IndexPage;
