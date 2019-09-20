import React, {FunctionComponent, useEffect, useState} from 'react';
import './home.css';
import { NextPage } from 'next';
import { useRouter } from 'next/router'

import { defaultMetaTags } from '../core/constants';
import Layout from '../shared/components/layout';
import { getAllTags, getBlogPostEntries } from '../core/contentful';
import { BlogPost } from '../interfaces/post';
import Card from '../shared/components/card';
import Paginator from '../shared/components/paginator';

const calculateRange = (length) => Array.from({length}, (v, k) => k + 1);

type Props = {
    entries: BlogPost[];
    tags: { id: string, name: string }[];
    url: any;
    total: number;
    skip: number;
    limit: number;
    page?: number;
}

const cards = (entries) => entries.map((entry, index) => (<Card info={entry} key={index}/>));

const IndexPage: NextPage = (props: Props) => {
    const router = useRouter();
    const entries = props.entries.length ? props.entries : [];
    const tags = props.tags || [];
    const total = props.total;

    const limit = props.limit;
    const rangeLimit = Math.ceil(total / limit);
    const range = calculateRange(rangeLimit);

    const [page, updatePage] = useState(!!props.page ? props.page : 1);
    const [tag, updateTag] = useState('');

    useEffect(() => {
        void router.push({pathname: '/', query: {page: page, tag: tag}});
    }, [page, tag]);

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
                        <a className="tag" onClick={() => {
                            updatePage(1); // resets page to one
                            updateTag(''); // Resets all posts
                        }}>All</a>
                        {tags.map((tag, index) => (
                            <a className="tag" onClick={() => {
                                updatePage(1); // resets page to one
                                updateTag(tag.id); // fetch posts by tag
                            }} key={index}>{tag.name}</a>))}
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

    if (query.page) {
        page = parseInt(query.page + '');
    }


    const {entries, total, skip, limit} = await getBlogPostEntries({
        tag: query.tag ? query.tag.toString() : '',
        skip: page - 1,
        limit: 1,
    });

    // TODO: need to move outside
    const {tags} = await getAllTags();

    return {page, tags, entries, total, skip, limit};
};

export default IndexPage;
