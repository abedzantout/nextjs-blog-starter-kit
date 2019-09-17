import React, { FunctionComponent, Fragment } from 'react';
import Link from 'next/link';

type Props = {
    skip?: number;
    range: number[];
}
const Paginator: FunctionComponent<Props> = ({skip, range}) => {
    skip = !!skip ? skip : 0;
    console.log(skip);
    console.log(range);
    return (
        <Fragment>
            <div className="paginator">
                {range.length > 1 ? <span className="previous">{'<'}</span> : null}
                {range.map((num, index) => {
                    return (<span className="page-number" key={index}>{num}</span>)
                })}
                {range.length > 1 ? <span className="next">{'>'}</span> : null}
            </div>
            <style jsx>{`
                .paginator {display: flex; flex-flow: row nowrap; justify-content: center;};
                 span { margin: 0 1rem; };
                 span:hover { cursor: pointer };
            `}</style>
        </Fragment>
    )
};

export default Paginator;
