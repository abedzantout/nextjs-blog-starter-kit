import React, { FunctionComponent, Fragment, useState } from 'react';

type Props = {
    skip?: number;
    range: number[];
    handlePaginationChange: Function;
}
const Paginator: FunctionComponent<Props> = ({skip, range, handlePaginationChange}) => {
    skip = !!skip ? skip : 0;

    const [page, setPageNumber] = useState(1);

    handlePaginationChange(page);

    return (
        <Fragment>
            <div className="paginator">
                {range.length > 1 ?
                    <span className="previous"
                          onClick={() => page <= 1 ? null : setPageNumber(page - 1)}>{'<'}</span> : null}
                {range.map((num, index) => {
                    return (<span className={`page-number ${num === page ? 'selected' : ''}`}
                                  key={index} onClick={() => setPageNumber(num)}>{num}</span>)
                })}
                {range.length > 1 ? <span className="next"
                                          onClick={() => page >= range[range.length - 1] ? null
                                              : setPageNumber(page + 1)}>{'>'}</span> : null}
            </div>
            <style jsx>{`
                .paginator {display: flex; flex-flow: row nowrap; justify-content: center;};
                 span { margin: 0 1rem; };
                 span:hover { cursor: pointer };
                 .page-number.selected {};
            `}</style>
        </Fragment>
    )
};

export default Paginator;
