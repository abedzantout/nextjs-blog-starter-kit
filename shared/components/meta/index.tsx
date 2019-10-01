import React, { Fragment, FunctionComponent } from 'react';
import Head from 'next/head';

import { MetaTags } from '../../../interfaces/meta-tags';

type Props = {
  tags: MetaTags;
};

const Meta: FunctionComponent<Props> = ({ tags }) => {
  return (
    <Fragment>
      <Head>
        <title key="title">{tags.title}</title>

        <meta name="description" key="description" content={tags.description} />

        {/* Begin OpenGraph Tag */}
        <meta property="og:type" key="og_type" content={tags.type} />
        {/* this meta tags helps Facebook appropriately title the page when shared within its social network */}
        <meta property="og:title" key="og_title" content={tags.title} />
        {/* Helps facebook describe the page */}
        <meta
          property="og:description"
          key="og_description"
          content={tags.description}
        />
        {/* The URL of the main page */}
        <meta
          property="og:url"
          key="og_URL"
          content={tags.og_URL ? tags.og_URL : tags.canonical}
        />
        {/* A url of an image for Facebook to use in a preview. */}
        <meta
          property="og:image"
          key="og_image"
          content={tags.og_image ? tags.og_image : tags.image}
        />
        <meta
          property="og:site_name"
          key="og_site_name"
          content={tags.og_site_name ? tags.og_site_name : tags.title}
        />
        {/* End of OpenGraph Tag */}

        {/*Twitter displayed card*/}
        {tags.twitter_site ? (
          <meta name="twitter:card" key="twitter_card" content="summary" />
        ) : null}

        {/*this will define the description of the post*/}
        {tags.description ? (
          <meta
            name="twitter:description"
            key="twitter_description"
            content={tags.description}
          />
        ) : null}

        {/* Twitter account */}
        {tags.twitter_site ? (
          <meta
            name="twitter:site"
            key="twitter_site"
            content={tags.twitter_site}
          />
        ) : null}
        {/* Name of Website */}
        {tags.twitter_domain ? (
          <meta
            name="twitter:domain"
            key="twitter_domain"
            content={tags.twitter_domain}
          />
        ) : null}

        {/* Image preview of shared post */}
        {tags.twitter_site ? (
          <meta
            name="twitter:image:src"
            key="twitter_img"
            content={tags.image}
          />
        ) : null}

        {/* End of Twitter Display card */}

        <meta name="robots" content={`${tags.robots}`} />

        {/* The URL of the canonical tags */}
        <link rel="canonical" key="canonical" href={tags.canonical} />
      </Head>
    </Fragment>
  );
};

export default Meta;
