import React, {useReducer, useState} from "react";
import initialMenu from "../api/navigationMenu";
import SubMenu from "./SubMenu";
import './Navigation.css';
import MainMenu from "./MainMenu";

function Navigation(){
    const _menuStr = JSON.stringify(initialMenu);
    const _menu = JSON.parse(_menuStr);
    const [menu, dispatch] = useReducer(menuReducer,_menu);

    console.log("_menu",_menu);

    const onMouseLeave = e => {

    }
    const settingMain = idx => {
        _menu[idx].selected =true;
        _menu[idx].collapsed =true;
        console.log("settingMain", _menu)
    }
    const settingSub = (mainIndex, subIndex) => {

    }
    _menu[0].selected = true;
    _menu[0].collapsed = true;
    _menu[0].subMenu[0].selected = true;

    return(
        <div className="m-navigation">
            <div className="m-navigation-container" onMouseLeave={onMouseLeave}>
                {_menu.map((m, index) =>
                    (<MainMenu key={index} menu={m} idx={index} settingMain={settingMain} settingSub={settingSub}/>)
                )}
            </div>
        </div>
    )

}

export default Navigation;

function menuReducer(state, action){
    switch (action.type){
        case SETTING_MAIN:
            return state;
        case SETTING_SUB:
            return state;
        case MOUSE_LEAVE:
            return state;
        default:
            return state;
    }
}
const SETTING_MAIN = 'navi/SETTING_MAIN';
const SETTING_SUB = 'navi/SETTING_SUB';
const MOUSE_LEAVE = 'navi/MOUSE_LEAVE';

