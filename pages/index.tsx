import React from 'react';
import { NextPage } from 'next';
import MetaComponent from '../shared/components/meta-component';
import { defaultMetaTags } from '../core/constants';

const IndexPage: NextPage = () => {
    return (
        <MetaComponent tag={defaultMetaTags}/>
    )
};

export default IndexPage;
