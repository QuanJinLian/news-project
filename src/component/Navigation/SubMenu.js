import React from "react";
import {Link} from "react-router-dom";

function SubMenu({subMenu, settingSub, mainIndex, subIndex}){
    const onClick = () => {
        settingSub(mainIndex, subIndex);
    }
    return (
        /*<div className={`m-navigation-submenu${subMenu.selected? ' is-selected':''}`} onClick={onClick}>
            {/!*<span className="m-navigation-col m-navigation-subcol-1" >*!/}
            {/!*    {subMenu.s_url}*!/}
            {/!*</span>*!/}
         </div>*/
        <>
            <Link to={`${subMenu.s_url}`} className="m-navigation-col m-navigation-subcol-1">
                <div className={`m-navigation-submenu${subMenu.selected? ' is-selected':''}`} onClick={onClick}>
                    {subMenu.name}
                </div>
            </Link>
        </>
    )
}

export default SubMenu;