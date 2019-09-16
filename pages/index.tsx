import React from 'react';
import { NextPage } from 'next';

import { defaultMetaTags } from '../core/constants';
import Layout from '../shared/components/layout';
import { getBlogPostEntries } from '../core/contentful';
import { BlogPost } from '../interfaces/post';
import Card from '../shared/components/card';

type Props = {
    entries: BlogPost[];
    tags: string[];
    url: any;
}

const cards = (entries) => entries.map((entry, index) => (<Card info={entry} key={index}/>));

const IndexPage: NextPage = (props: Props) => {
    const entries = props.entries;
    return (
        <Layout meta={defaultMetaTags}>
            <div>
                <h1>Latest posts</h1>

                <div className="cards-deck">
                    {cards(entries)}
                </div>
            </div>

            <style jsx>
                {`
                    .cards-deck { display: grid; grid-column-gap: 1rem; grid-template-columns: 1fr 1fr 1fr 1fr; grid-template-rows: auto; rid-row-gap: 1rem;};
                `
                }
            </style>
        </Layout>
    )
};

IndexPage.getInitialProps = async ({req}) => {
    const entries = await getBlogPostEntries();
    const allTags = entries.map(entry => entry.tags);
    const tags = new Set(allTags.flat(1));
    return {entries, tags};
};

export default IndexPage;
