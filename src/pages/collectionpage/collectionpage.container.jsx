import React from 'react';
import { withRouter } from 'react-router-dom';

import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import CollectionPage from './collectionpage.component';
import Spinner from '../../components/spinner/spinner.component';

// 注意与本地获取函数gql区别( 等待笔记 )
    // 原因是: 图
const GET_COLLECTION_ITEM = gql`
    query getCollectionsByTitle( $title: String! ){
        getCollectionsByTitle( title: $title ){
            id,
            title,
            items{
                id,
                name,
                imageUrl,
                price
            }
        }
    }
`;

const CollectionPageContainer = ({ match }) => {
    // useQuery使用服务端函数( 等待笔记 )
    const { loading, data } = useQuery( 
        GET_COLLECTION_ITEM,
        { variables: { title: match.params.collectionId } }
    );
    
    if( loading ) return <Spinner />;
    const { getCollectionsByTitle } = data;
    return <CollectionPage collectionItem={ getCollectionsByTitle } />

}

export default  withRouter(CollectionPageContainer);