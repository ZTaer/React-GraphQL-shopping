/**
 * 实战: useQuery获取后端服务器数据( 完成笔记 )
 *      a) 注意: 解构数据时，要确保loading为false
 */

import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import CollectionOverview from './collection-overview.component';
import Spinner from '../spinner/spinner.component';


// 使用gql获取指定数据
const GET_COLLECTIONS = gql`
    {
        collections{
            id,
            title
            items{
                id,
                name,
                imageUrl,
                price,
            }
        }
    }
`;

const CollectionOverviewContainer = () => {
    const { data , loading, error } = useQuery( GET_COLLECTIONS );
    if( loading ) return <Spinner />;
    const { collections } = data; // 注意解构数据时，要确保loading为false
    return <CollectionOverview collectionShop={ collections } />
}

export default CollectionOverviewContainer;