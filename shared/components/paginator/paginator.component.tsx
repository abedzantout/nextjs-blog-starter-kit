import React, { FunctionComponent, Fragment, useState, useEffect } from 'react';

type Props = {
  skip?: number;
  range: number[];
  handlePaginationChange: Function;
};
const PaginatorComponent: FunctionComponent<Props> = ({
  skip,
  range,
  handlePaginationChange
}) => {
  skip = !!skip ? skip : 0;

  const [page, setPageNumber] = useState(1);

  useEffect(() => {
    return setPageNumber(skip);
  }, [skip]);

  const moveToNextPage = () => {
    if (page > 1) {
      handlePaginationChange(page - 1);
      return setPageNumber(page - 1);
    }

    return null;
  };

  const moveToPreviousPage = () => {
    if (page < range[range.length - 1]) {
      handlePaginationChange(page + 1);
      return setPageNumber(page + 1);
    }

    return null;
  };

  const moveToPage = (pageNumber: number) => {
    handlePaginationChange(pageNumber);
    return setPageNumber(pageNumber);
  };

  const renderPageIndicators = (num, index) => (
    <span
      className={`paginator__page-number ${
        num === page ? 'paginator__page-number--selected' : ''
      }`}
      key={index}
      onClick={() => moveToPage(num)}
    >
      {num}
    </span>
  );

  return (
    <Fragment>
      <div className="paginator">
        {range.length > 1 ? (
          <button className="paginator__button" onClick={moveToNextPage}>
            <span className="paginator__button__indicator left">{'<'}</span>{' '}
            <span className="paginator__button__label"> Previous </span>
          </button>
        ) : null}

        {range.map(renderPageIndicators)}

        {range.length > 1 ? (
          <button className="paginator__button" onClick={moveToPreviousPage}>
            <span className="paginator__button__label"> Next</span>{' '}
            <span className="paginator__button__indicator right">{'>'}</span>
          </button>
        ) : null}
      </div>
    </Fragment>
  );
};

export default PaginatorComponent;
