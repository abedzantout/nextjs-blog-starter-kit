import React, { useState } from 'react';
import { NextPage } from 'next';

import { defaultMetaTags } from '../core/constants';
import Layout from '../shared/components/layout';
import { getBlogPostEntries } from '../core/contentful';
import { BlogPost } from '../interfaces/post';
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

    const [posts, updatePosts]: [BlogPost[], Function] = useState(props.entries.length ? props.entries : []);

    const [skip, updateSkip] = useState(!!props.skip ? props.skip : 0);

    const page = !!props.page ? props.page : 1;
    const entries = props.entries;
    const tags = props.tags || [];
    const total = props.total;

    const limit = props.limit;
    const rangeLimit = Math.ceil(total / limit);
    const range = calculateRange(rangeLimit);

    console.log(skip);
    return (
        <Layout meta={defaultMetaTags}>
            <div className="container">
                <div className="body">
                    <div className="blogposts">
                        <h1>Latest posts</h1>
                        <div className="cards-deck">
                            {cards(posts)}
                        </div>
                    </div>
                    <div className="pagination">
                        <Paginator handlePaginationChange={(event) => updateSkip(event)} range={range}/>
                    </div>
                </div>
                <div className="sidenav">
                    <h2>Choose your topic</h2>
                    <div className="navigation-by-tag">
                        {tags.map((tag, index) => (<a className="tag" key={index}>{tag}</a>))}
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .cards-deck { display: grid; grid-column-gap: 1rem; grid-template-columns: 1fr 1fr 1fr 1fr; grid-template-rows: auto; rid-row-gap: 1rem;};
                    .side-nav { height: 50%; };
                    .container {display: grid; grid-template-columns: 3fr 1fr;};
                    .sidenav { box-shadow: 0 20px 20px 0 rgba(0,0,0,0.07); padding: 1rem 2rem; };
                    .sidenav h2 { margin: 1rem 0; };
                    .sidenav .navigation-by-tag { display: flex; flex-flow: column wrap; };
                    .sidenav .navigation-by-tag .tag { margin: 1rem 0; text-transform: capitalize; };
                    .sidenav .navigation-by-tag .tag:hover { cursor: pointer; };
                `
                }
            </style>
        </Layout>
    )
};

IndexPage.getInitialProps = async ({req, query}) => {
    const {page} = query;
    const {entries, total, skip, limit} = await getBlogPostEntries({limit: 1});
    const allTags = entries.map(entry => entry.tags);
    const tags = Array.from(new Set(allTags.flat(1)));
    return {page, entries, tags, total, skip, limit};
};

export default IndexPage;
