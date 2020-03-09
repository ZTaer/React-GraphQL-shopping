/**
 * 商品数据实战: 从服务器获取数据, 使用apollo+graphql获取的数据 | 实战商品页面( 等待笔记 )
 * 0. 导入必备库
 * 1. 使用gql获取指定的数据,注意全部大写
 */

import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

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
    return(
        // 关于Query标签的使用, 在组件中获取并使用gql数据( 等待笔记 ) 
            // 0. 容器模式: 在容器模式下使用此标签
            // 1. 注意: 处理返回的对象, 标签Query获取数据后，会返回一个对象
            // 2. 获取数据返回的对象默认值有: 
                // a) 成功: { data, loading, netWorkStatus, stale }
                    // 0. data: 获取的数据
                    // 1. loading: true为正在加载数据的状态, GraphQL获取数据时自带状态
                // b) 失败: { error, 等待补充 }
        <Query query={GET_COLLECTIONS} >
            {
                ({ data, loading, error }) => {
                    // 如果正在加载,则渲染,加载器组件,否则渲染产品组件
                    if( loading ) return <Spinner />;
                    const { collections } = data;
                    return <CollectionOverview collectionShop={ collections } />
                }
            }        
        </Query>
    );
}

export default CollectionOverviewContainer;