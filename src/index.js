import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

/**
 * apollo+graphql配置( 等待笔记 )
 */
import { ApolloProvider } from 'react-apollo'; // 全局获取数据
import { createHttpLink } from 'apollo-link-http'; // 配置apollo ，createHttpLink的目的是连接/graphql与后端沟通
import { InMemoryCache } from 'apollo-cache-inmemory'; // 缓存请求的数据，防止graphql重复请求数据
import { ApolloClient, gql } from 'apollo-boost'; // apollo本尊

/**
 * resolvers配置( 等待笔记 )
 */
import { typeDefs, resolvers } from './graphql/resolvers';


import './index.css';
import App from './App';

/**
 * 主要apollo+graphql配置( 等待笔记 )
 */
// 0. 确定GraphQL后端地址
const httpLink = createHttpLink({
    uri:'https://crwn-clothing.com/',
});

// 1. 缓存机制
const cache = new InMemoryCache();

// 2. apollo本尊配置
const client = new ApolloClient({
    link: httpLink,
    cache,

    // resolvers配置,完成这一步,client中的数据即可在全局访问( 等待笔记 )
    typeDefs,
    resolvers,
});

// 3. client.writeData()构建本地client数据，方便在全局调用
    // a) 注意要配合resolvers.js配合使用
client.writeData({
    data: {
        cartHidden: false,
        cartItems: [],
    }
});

// 4. 验证apollo+graphql是否正常工作
    // a) 就是随便获取一下数据
    // b) query: gql`{ 在这里写GraphQL语法 }`
client.query({
    query: gql`
        {
            getCollectionsByTitle( title: "Hats" ){ # 指定字段内容获取,不区分大小写
                id,
                title
            }
        }
    `
}).then(
    data => console.log('TestGql',data)
);

ReactDOM.render(
    // 5. render配置
    <ApolloProvider client={client} >
        <Provider store={store} >
            <BrowserRouter>
                <PersistGate persistor={persistor} >
                    <App />
                </PersistGate>
            </BrowserRouter>
        </Provider>
    </ApolloProvider>
    ,
    document.getElementById('root')
);

