import React, {FunctionComponent, Fragment, useState} from 'react';
import './styles.css';

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
                    <button className="paginator__button"
                            onClick={() => page <= 1 ? null : setPageNumber(page - 1)}>
                        <span className="paginator__button__indicator left">{'<'}</span> Previous</button> : null}

                {range.map((num, index) => {
                    return (<span
                        className={`paginator__page-number ${num === page ? 'paginator__page-number--selected' : ''}`}
                        key={index} onClick={() => setPageNumber(num)}>{num}</span>)
                })}

                {range.length > 1 ?
                    <button className="paginator__button"
                            onClick={() => page >= range[range.length - 1] ? null
                                : setPageNumber(page + 1)}>
                        Next <span className="paginator__button__indicator right">{'>'}</span>
                    </button> : null}
            </div>
        </Fragment>
    )
};

export default Paginator;
