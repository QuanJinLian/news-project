import React, {useEffect, useReducer, useState} from "react";
import {useLocation} from 'react-router-dom';
import './Navigation.css';
import MainMenu from "./MainMenu";
import useNavigation from "../../hooks/useNavigation";

let currentMainIndex;
let currentSubIndex;
function Navigation(){
    const [menu, setting_Main, setting_Sub, initMenu,findMainIndex,findIndexByPathName] = useNavigation();
    const loaction = useLocation();
    console.log("_menu",loaction);

    useEffect( ()=> {
        const [m_idx,s_idx] = findIndexByPathName(loaction.pathname);
        initMenu(m_idx,s_idx);
        currentMainIndex = m_idx > -1 ? m_idx : 0;
        currentSubIndex = s_idx > -1 ? s_idx : 0;
    },[loaction])
    const onMouseLeave = e => {
        setting_Main(currentMainIndex);
        setting_Sub(currentMainIndex, currentSubIndex);
    }
    const settingMain = idx => {
        setting_Main(idx);
    }
    const settingSub = (mainIndex, subIndex) => {
        setting_Sub(mainIndex, subIndex);
        currentMainIndex = mainIndex;
        currentSubIndex = subIndex;
    }

    return(
        <div className="m-navigation">
            <div className="m-navigation-container" onMouseLeave={onMouseLeave}>
                {menu.map((m, index) =>
                    (<MainMenu key={index} menu={m} idx={index} settingMain={settingMain} settingSub={settingSub}/>)
                )}
            </div>
        </div>
    )

}

export default Navigation;

