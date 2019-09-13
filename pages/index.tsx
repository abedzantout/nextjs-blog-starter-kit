import React from 'react';
import { NextPage } from 'next';
import Meta from '../shared/components/Meta';
import { defaultMetaTags } from '../core/constants';

const IndexPage: NextPage = () => {
    return (
        <Meta tag={defaultMetaTags}/>
    )
};

export default IndexPage;
