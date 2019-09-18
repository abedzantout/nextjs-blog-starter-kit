import React, {useEffect, useState} from 'react';
import './index.styles.css';
import {NextPage} from 'next';
import {useRouter} from 'next/router'

import {defaultMetaTags} from '../core/constants';
import Layout from '../shared/components/layout';
import {getBlogPostEntries} from '../core/contentful';
import {BlogPost} from '../interfaces/post';
import Card from '../shared/components/card';
import Paginator from '../shared/components/paginator';

const calculateRange = (length) => Array.from({length}, (v, k) => k + 1);

type Props = {
    entries: BlogPost[];
    tags: string[];
    url: any;
    total: number;
    skip: number;
    limit: number;
    page?: number;
}

const cards = (entries) => entries.map((entry, index) => (<Card info={entry} key={index}/>));


const IndexPage: NextPage = (props: Props) => {

    const [page, updatePage] = useState(!!props.page ? props.page : 1);

    const router = useRouter();
    const entries = props.entries.length ? props.entries : [];
    const tags = props.tags || [];
    const total = props.total;

    const limit = props.limit;
    const rangeLimit = Math.ceil(total / limit);
    const range = calculateRange(rangeLimit);

    useEffect(() => {
        router.push({pathname: '/', query: {page: page}});
    }, [page]);

    return (
        <Layout meta={defaultMetaTags}>
            <div className="container">
                <div className="blogposts">
                    <h1 className="blogposts__header">Latest posts</h1>
                    <div className="cards-deck">
                        {cards(entries)}
                    </div>
                </div>
                <div className="sidenav">
                    <h2 className="sidenav__header">Choose your topic</h2>
                    <div className="navigation-by-tag">
                        {tags.map((tag, index) => (<a className="tag" key={index}>{tag}</a>))}
                    </div>
                </div>
                <div className="pagination">
                    <Paginator handlePaginationChange={(event) => updatePage(event)} range={range} skip={page}/>
                </div>
            </div>
        </Layout>
    )
};

IndexPage.getInitialProps = async ({query}) => {
    let page: number = 1;
    if(query.page) {
        page = parseInt(query.page + '');
    }

    const {entries, total, skip, limit} = await getBlogPostEntries({limit: 1, skip: page - 1});
    const allTags = entries.map(entry => entry.tags);
    const tags = Array.from(new Set(allTags.flat(1)));
    return {page, entries, tags, total, skip, limit};
};

export default IndexPage;
