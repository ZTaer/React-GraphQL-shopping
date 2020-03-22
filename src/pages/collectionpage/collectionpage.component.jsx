import React from 'react';
import "./collectionpage.styles.scss";

import { default as CollectionItem} from '../../components/collection-item/collection-item.container';

const CollectionPage = ({ collectionItem }) => {
    const { title, items } = collectionItem;
    return(
        <div className="collection-page">
            <h2 className="title">
                { title }
            </h2>
            <div className="items">
                {
                    items.map( item => ( <CollectionItem key={item.id} item={item} /> ) )
                }
            </div>
        </div>
    );
};

export default CollectionPage;