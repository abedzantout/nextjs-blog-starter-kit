import { NextPage } from 'next';
import React from 'react';
import './post.styles.css';
import ReactMarkdown from 'react-markdown';

import Layout from '../shared/components/layout';
import { getPostBySlug } from '../core/contentful';
import { defaultMetaTags } from '../core/constants';

import { BlogPost } from '../interfaces/post';


type Props = {
    article: BlogPost;
};
const PostPage: NextPage = (props: Props) => {
    return (
        <Layout meta={defaultMetaTags}>
            <div className="post-container">
                <div className="post-header">
                    <h1>{props.article.title}</h1>
                    <div className="author">
                        <p>Written by {props.article.author.name}</p>
                    </div>
                </div>
                <ReactMarkdown className="markdown" source={props.article.body}/>
            </div>
        </Layout>
    );
};

PostPage.getInitialProps = async ({query}) => {

    const {post} = query;
    const article = await getPostBySlug(post);
    return {article};
};

export default PostPage;
