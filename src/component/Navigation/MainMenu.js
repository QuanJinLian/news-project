import React from "react";
import SubMenu from "./SubMenu";

function MainMenu({menu, settingMain, settingSub, idx}){
    // console.log("idx - "+idx, menu);
    const onClick = () => {
        settingMain(idx);
    }
    return (
        <div className={`m-navigation-row m-navigation-hover${menu.selected ? ' is-selected':''}` } onClick={onClick}>
            <div className={`m-navigation-col${menu.selected ? ' is-selected':''}`}>
                <span className="m-navigation-label">{menu.name}</span>
            </div>
            <div className={`m-navigation-row m-navigation-subrow-1${menu.collapsed? ' is_visible':''}`}>
                {menu.subMenu.map((subMenu, index) => (
                    <SubMenu key={index} subMenu={subMenu} settingSub={settingSub} mainIndex={idx} subIndex={index}/>
                ))}
            </div>
        </div>
    )
}
export default MainMenu;