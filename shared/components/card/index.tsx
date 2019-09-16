import React, { FunctionComponent, Fragment } from 'react';
import Link from 'next/link';

type Props = {
    info: { id: string, title: string; description: string; heroImage: string; publishedAt: Date; slug: string }
}
const getNavigationLink = (slug) => `/post/${slug}`;
const getHref = (slug) => ({
    pathname: '/post',
    query: {post: slug},
});
const Card: FunctionComponent<Props> = ({info}) => {

    return (
        <Fragment>
            <div className="card">
                <div className="card-header"/>
                <div className="card-body">
                    <h3>{info.title}</h3>
                    <p>{info.description}</p>
                </div>

                <div className="card-actions">
                    <Link href={getHref(info.slug)} as={getNavigationLink(info.slug)}>
                        <a className="card-actions__button">Explore</a>
                    </Link>
                </div>
            </div>
            <style jsx>{`
                .card { height: 400px; width: 340px; background: #FFFFFF; box-shadow: 0 20px 20px 0 rgba(0,0,0,0.07); border-radius: 4px; overflow: hidden; transition: box-shadow .2s; };
                .card:hover { box-shadow:0 40px 40px 0 rgba(0,0,0,0.2); cursor: pointer; }
                .card-header {
                    height: 40%;
                    background-image: url(${info.heroImage}); 
                    background: linear-gradient(45deg, rgba(18, 40, 76, 0.56), rgba(39, 173, 213, 0.56), rgba(79, 192, 176, 0.56)), url(${info.heroImage}) no-repeat;
                    background-size: 100%;
                };
                .card-body {padding: 1rem;};
                .card-actions {display: flex; justify-content: center;};
                .card-actions__button {background-image: linear-gradient(90deg, #0CB2E2 0%, #4FC0B0 100%); border-radius: 2px; color: #ffffff; padding: 1rem 4rem; border: none; text-decoration: none;};
                .card-actions__button:hover {cursor: pointer};
            `}
            </style>
        </Fragment>
    );
};

export default Card;
