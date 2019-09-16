import React, { FunctionComponent, Fragment } from 'react';

type Props = {
    info: { id: string, title: string; description: string; heroImage: string; publishedAt: Date; slug: string }
}
const Card: FunctionComponent<Props> = ({info}) => {
    return (
        <Fragment>
            <div className="card">
                <div className="card-header">

                </div>

                <div className="card-body">
                    <h3>{info.title}</h3>
                    <p>{info.description}</p>
                </div>

                <div className="card-actions">
                </div>
            </div>
            <style jsx>{`
                .card { height: 400px; width: 340px; background: #FFFFFF; box-shadow: 0 20px 20px 0 rgba(0,0,0,0.07); border-radius: 4px; overflow: hidden; };
                .card-header {
                    height: 40%;
                    background-image: url(${info.heroImage}); 
                    background: linear-gradient(248deg, rgba(27,21,140,0.56) 0%, rgba(50,176,201,0.56) 100%), url(${info.heroImage}) no-repeat;
                    background-size: 100%;
                };
                .card-body {padding: 1rem;};
            `}
            </style>
        </Fragment>
    );
};

export default Card;
