import React, { Fragment } from 'react';
import { NextPage } from 'next';
import Meta from '../shared/components/meta';
import { defaultMetaTags } from '../core/constants';

const IndexPage: NextPage = () => {
    return (
        <Fragment>
            <Meta tag={defaultMetaTags}/>
            <div>

            </div>
        </Fragment>
    )
};

export default IndexPage;
