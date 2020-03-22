import React,{ useEffect} from 'react';
import { Switch,Route,Redirect } from 'react-router-dom';

import { default as Header} from './components/header/header.container';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignPage from './pages/signpage/signpage.component';
import { default as CheckoutPage } from './pages/checkout/checkout.container';

import { auth, createUserProfileDocument } from './firebase/firebase.config';

import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';

// GraphQL获取改变用户数据函数
const GET_USER = gql`
    {
        currentUser @client,
    }
`;

const CHANGE_CURRENT_USER = gql`
  mutation ChangeCurrentUser( $user: User! ) {
    changeCurrentUser( user: $user ) @client
  }
`;

const GET_DIRE_SECTIONS = gql`
    mutation GetDireDataSections{
        getDireDataSections @client
    }
`;

const App = () => {
  const { data: { currentUser } } = useQuery(GET_USER);
  const [ changeCurrentUser ] = useMutation( CHANGE_CURRENT_USER );
  const [ getDireDataSections ] = useMutation( GET_DIRE_SECTIONS );

  useEffect( ()=>{
    // 获取主页菜单数据
    getDireDataSections(); 

    // 验证用户数据
    let unsubscribeFromAuth = () => auth.onAuthStateChanged( async user => {
      // 如果用户登陆
      if( user ){
        // firebase-onSnapshot()监听文档对象(快照对象)方便数据更新( 完成笔记 )
          // 0. onSnapshot(props=>{xx}) 用于监听快照对象,如果数据发生变化,方便数据变化时实时更新
          // 1. props用于传递快照对象的数据,于监听快照对象无疑
        const userRef = await createUserProfileDocument( user ); // React什么周期组件内,可以使用await等待异步数据( 完成笔记 )
        userRef.onSnapshot( props => {
          changeCurrentUser({
            variables: { 
              user:{ 
                id: props.id,
                ...props.data(), 
              }
            }
          });

        } );
      }
    });
    unsubscribeFromAuth();

    return ()=>{
      unsubscribeFromAuth = null;
    }
    
  },[] );

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/sign' render={ ()=> currentUser ? <Redirect to='/' /> : <SignPage />  } />
        <Route exact path='/checkout' component={CheckoutPage} />
      </Switch>
    </div>
  );
};

export default App;