import React, {useEffect} from "react";
import useNavigation from "../../hooks/useNavigation";
import {Link, useLocation} from "react-router-dom";
import './Navigation.css'

function PageNavigation({...props}){
    const [menu, setting_Main, setting_Sub, initMenu, findMainIndex, findIndexByPathName] = useNavigation();
    const mainIndex = findMainIndex(props.category);
    const loaction = useLocation();
    useEffect( () => {
        const [m_idx,s_idx] = findIndexByPathName(loaction.pathname);
        initMenu(m_idx,s_idx);
    },[loaction]);
    const onClick = subIndex => {
        setting_Sub(mainIndex, subIndex);
    }
    return (
        <div className="isul-page-head-panel">
            <span className="isul-page-title-font channel">{props.category}</span>
            {menu[mainIndex].subMenu.map(
                (sub, index) => (
                    <div style={{display: 'inline-block'}} key={index}>
                        <span>|</span>
                        <Link to={`${sub.s_url}`} className={`${sub.selected ? 'isul-page-title-subUrl-selected ':''}title-name cursor-pointer`} onClick={onClick}>
                            {sub.name}
                        </Link>
                        {/*<span className={`${sub.selected ? 'isul-page-title-subUrl-selected ':''}title-name cursor-pointer`} onClick={onClick}>*/}
                        {/*    {sub.name}*/}
                        {/*</span>*/}
                    </div>
                )
            )}
        </div>
    )
}
export default PageNavigation;

