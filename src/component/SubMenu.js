import React from "react";

function SubMenu({subMenu, settingSub, mainIndex, subIndex}){
    const onClick = () => {
        settingSub(mainIndex, subIndex);
    }
    return (
        <div className={`m-navigation-submenu${subMenu.selected? ' is-selected':''}`} >
            <span className="m-navigation-col m-navigation-subcol-1" onClick={onClick}>
                {subMenu.s_url}
            </span>
        </div>
    )
}

export default SubMenu;