import React from 'react';
import "./collection-overview.styles.scss";

import CollectionView from "../../components/collection-view/collection-view.component";

const CollectionOverview  = ({ collectionShop }) => {
    return(
        <div className="collection-overview">
            {
                collectionShop.map( ( {id,...otherProps} )=>(
                    <CollectionView key={id} {...otherProps} /> 
                ) )
            }
        </div>
    );
}

export default CollectionOverview;