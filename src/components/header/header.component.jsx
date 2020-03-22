import React from 'react';
import "./header.styles.scss";
import { Link } from "react-router-dom";
import {auth} from "../../firebase/firebase.config";

import { default as CartIcon } from '../cart-icon/cart-icon.container';
import { default as CartDropdown } from '../cart-dropdown/cart-dropdown.container';

// React-React导入svg文件( 完成笔记 )
    // 0. import { ReactComponent as Logo } from "../../assets/crown.svg";
    // 1. 因为文件为jsx文件格式，所以需要借用 ReactComponent 这是规则，
    // 2. { ReactComponent as Logo }修改名称为logo 
    // 3. 这样就可以使用自定义标签来代表svg图像<Logo />
    // 4. SVG的优势: svg图标，为矢量图，并且很小
import { ReactComponent as Logo } from "../../assets/crown.svg";

class Header extends React.Component {

    componentDidMount(){
       // this.props.handleOpenModal("因暂且未掌握后端技术特使用GoogleFirebase代替后端存储验证,请阁下'翻墙'才能正常浏览此站点");
    }

    render(){
        const {currentUser, hidden, clearCurrentUser, clearCartItem} = this.props;

        return(
            <div className="header">

                <Link className="logo-container" to="/" >
                    <Logo className="logo" />
                </Link>
                <div className="options">
                    <Link className="option" to="/" >
                        主页
                    </Link> 
                    <Link className="option" to="/shop" >
                        产品
                    </Link>
                    <Link className="option" to="/tel" >
                        联系
                    </Link>
                    {
                        currentUser 
                        ? 
                        ( <div className="option" onClick={ ()=>{
                            auth.signOut();
                            clearCurrentUser();
                            clearCartItem();
                        } } >退出</div> ) // 用户退出登陆( 完成笔记 )
                        : 
                        ( <Link className="option" to="/sign" >注册/登陆</Link> )
                    }
                    <div className="option">
                        <CartIcon/>
                    </div>
                </div>
                {
                    hidden ? <CartDropdown  /> : null
                }
            </div>
        );
    }
}


export default Header;

