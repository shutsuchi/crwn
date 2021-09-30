import React from "react";

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <h1 className='collection-preview'>
      <h1 className='title'>{ title.toUpperCase() }</h1>
      <div className='preview'>
        {items
          .filter((_, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} { ...otherItemProps } />
          ))}
      </div>
    </h1>
  );
};

export default CollectionPreview;