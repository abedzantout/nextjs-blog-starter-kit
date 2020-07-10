import React, { FunctionComponent, Fragment, useState, useEffect } from 'react';

import styles from './paginator.module.css';

type Props = {
  skip?: number;
  range: number[];
  handlePaginationChange: (number: number) => any;
};
const PaginatorComponent: FunctionComponent<Props> = ({
  skip,
  range,
  handlePaginationChange
}) => {
  skip = skip ? skip : 0;

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
      className={`${styles.paginator__page__number} ${
        num === page ? styles.paginator__pageNumber__selected : ''
      }`}
      key={index}
      onClick={() => moveToPage(num)}
    >
      {num}
    </span>
  );

  return (
    <Fragment>
      <div className={styles.paginator}>
        {range.length > 1 ? (
          <button className={styles.paginator__button} onClick={moveToNextPage}>
            <span className={`${styles.paginator__button__indicator} left`}>
              {'<'}
            </span>{' '}
            <span className="paginator__button__label"> Previous </span>
          </button>
        ) : null}

        {range.map(renderPageIndicators)}

        {range.length > 1 ? (
          <button
            className={styles.paginator__button}
            onClick={moveToPreviousPage}
          >
            <span className={styles.paginator__button__label}> Next</span>{' '}
            <span className={`${styles.paginator__button__indicator} right`}>
              {'>'}
            </span>
          </button>
        ) : null}
      </div>
    </Fragment>
  );
};

export default PaginatorComponent;
