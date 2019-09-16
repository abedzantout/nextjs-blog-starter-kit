import { NextPage } from 'next';
import React from 'react';
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
            {/*xjsx doesn't work with markdown unless global*/}
            <style jsx global>{
                `
                     .post-container { padding: 1rem 12rem; };
                     .markdown p,
                     .markdown ul,
                     .markdown ol {
                
                        font-size: 1rem;
                        line-height: 1.5;
                        margin-bottom: 1.5rem;
                        letter-spacing: 0.01rem;
                    }
                    .markdown pre { margin: 3rem 0; }

                    .markdown ul,ol {margin: 2rem 0; padding: 0 1rem; }

                     .markdown li { margin-bottom: 1rem; }

                     .markdown h2,h3 {
                        margin: 4rem 0 1.5rem;

                        font-weight: normal;
                        font-size: 1.5rem;
                        line-height:1.5;
                    }

                     .markdown a {
                        transition: color 0.2s;
                     }
                    
                     .markdown a:hover { }
                    
                    `}
            </style>
        </Layout>
    );
};

PostPage.getInitialProps = async ({query}) => {

    const {post} = query;
    const article = await getPostBySlug(post);
    return {article};
};

export default PostPage;
