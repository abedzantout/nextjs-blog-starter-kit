import React, {FunctionComponent} from 'react';
import './tag-filters.component.css';

type Props = {
    tags: { id: string, name: string }[],
    updatePage: Function,
};

const TagFilters: FunctionComponent<Props> = ({tags, updatePage}) => {

    const handleTagChosen = (tag) => {
        updatePage(tag);
    };

    const renderTag = (tag, index) => (
        <div className="tag" key={index} onClick={() => handleTagChosen(tag.id)}>{tag.name}</div>
    );

    return (
        <div className="filters">
            <h2 className="filters__header">
                Filter By Tags.
            </h2>
            <div className="filters__tags">
                <div className="tag" onClick={() => (handleTagChosen(''))}>All</div>
                {
                    tags.map(renderTag)
                }
            </div>
        </div>
    );
};

export default TagFilters;
