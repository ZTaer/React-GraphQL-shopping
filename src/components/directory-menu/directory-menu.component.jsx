import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import "./directory-menu.style.scss";

const DirectoryMenu = ( { sections } ) => {
  return(
    <div className="directory-menu">
        {
            // 注意map()如何返回JSX( 完成笔记 )
                // 这里使用了对象的解构
                // 注意: 解构变量名称 == 对象属性名称( 必须要一致 )
            // React-解构法自定义标签对象数据传输( 完成笔记 )
                // 0. 解构法传递，对象属性. 并具有自动识别，未传输参数来进行传输。
                // 1. 接收方: 依然保持对应的对象名称来接受
              sections.map( ( { id, ...otherData } ) => (
                <MenuItem key={id} {...otherData} ></MenuItem>
              ) )
        }
    </div>
  );
}

export default DirectoryMenu;