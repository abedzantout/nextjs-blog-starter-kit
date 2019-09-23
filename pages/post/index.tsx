import { NextPage } from 'next';
import React from 'react';
import './styles.css';
import ReactMarkdown from 'react-markdown';

import Layout from '../../shared/components/layout/layout.component';
import { ContentfulService } from '../../core/contentful';

import { BlogPost } from '../../interfaces/post';
import { MetaTags, PageType, RobotsContent } from '../../interfaces/meta-tags';

type Props = {
    article: BlogPost;
};
const PostPage: NextPage = (props: Props) => {

    const postMetaTags: MetaTags = {
        canonical: `${process.env.DOMAIN_PUBLIC}`,
        description: `${props.article.description}`,
        // contentful does not set the http or https before an image link, so we need to add it ourselves
        image: `https:${props.article.heroImage.url}`,
        robots: `${RobotsContent.follow},${RobotsContent.index}`,
        title: `${props.article.title}`,
        type: PageType.article,
    };

    return (
        <Layout metaTags={postMetaTags}>
            <div className="post-container" id="post-container">
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

    const contentfulService = new ContentfulService();

    const {post} = query;
    const article = await contentfulService.getPostBySlug(post);

    return {article};
};

export default PostPage;
