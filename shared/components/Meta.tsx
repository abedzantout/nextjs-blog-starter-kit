import React, { Fragment, FunctionComponent } from 'react';
import { Tag } from '../../interfaces/tag';
import Head from "next/head";;

type Props = {
    tag: Tag;
}

const Meta: FunctionComponent<Props> = ({tag}) => {
    return (
        <Fragment>
            <Head>
                <title key="title">{tag.title}</title>

                <meta name="description" key="description" content={tag.description}/>

                {/* Begin OpenGraph Tag */}
                <meta property="og:type" key="og_type" content={tag.type}/>
                {/* this meta tag helps Facebook appropriately title the page when shared within its social network */}
                <meta property="og:title" key="og_title" content={tag.title}/>
                {/* Helps facebook describe the page */}
                <meta property="og:description" key="og_description" content={tag.description}/>
                {/* The URL of the main page */}
                <meta property="og:url" key="og_URL" content={tag.og_URL ? tag.og_URL : tag.canonical}/>
                {/* A url of an image for Facebook to use in a preview. */}
                <meta property="og:image" key="og_image" content={tag.og_image ? tag.og_image : tag.image}/>
                <meta property="og:site_name" key="og_site_name"
                      content={tag.og_site_name ? tag.og_site_name : tag.title}/>
                {/* End of OpenGraph Tag */}

                {/*Twitter displayed card*/}
                {tag.twitter_site ?
                    <meta name="twitter:card" key="twitter_card" content="summary"/> : null}

                {/*this will define the description of the post*/}
                {tag.description ?
                    <meta name="twitter:description" key="twitter_description" content={tag.description}/> : null}

                {/* Twitter account */}
                {tag.twitter_site ?
                    <meta name="twitter:site" key="twitter_site" content={tag.twitter_site}/> : null
                }
                {/* Name of Website */}
                {tag.twitter_domain ?
                    <meta name="twitter:domain" key="twitter_domain" content={tag.twitter_domain}/>
                    : null
                }

                {/* Image preview of shared post */}
                {tag.twitter_site ?
                    <meta name="twitter:image:src" key="twitter_img" content={tag.image}/> : null}

                {/* End of Twitter Display card */}

                <meta name="robots" content={`${tag.robots}`}/>

                {/* The URL of the canonical tag */}
                <link rel="canonical" key="canonical" href={tag.canonical}/>

            </Head>
        </Fragment>
    );

};


export default Meta;
