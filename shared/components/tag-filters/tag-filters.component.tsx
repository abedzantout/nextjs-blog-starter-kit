import React, { FunctionComponent } from 'react';

import styles from './tag-filters.module.css';

type Props = {
  tags: { id: string; name: string }[];
  selectedTagId: string;
  updatePage: Function;
};

const TagFilters: FunctionComponent<Props> = ({
  tags,
  updatePage,
  selectedTagId
}) => {
  const handleTagChosen = (tag) => {
    updatePage(tag);
  };

  const renderTag = (tag, index) => (
    <div
      className={`global-tag ${styles.tag} ${
        selectedTagId === '' || selectedTagId === tag.id
          ? styles.tag__selected
          : ''
      }`}
      key={index}
      onClick={() => handleTagChosen(tag.id)}
    >
      {tag.name}
    </div>
  );

  return (
    <div className={styles.filters}>
      <h2 className={styles.filters__header}>Filter By Tags.</h2>
      <div className={styles.filters__tags}>
        <div
          className={`${styles.tag} ${
            selectedTagId === '' ? styles.tag__selected : 'global-tag'
          }`}
          onClick={() => handleTagChosen('')}
        >
          All
        </div>
        {tags.map(renderTag)}
      </div>
    </div>
  );
};

export default TagFilters;
