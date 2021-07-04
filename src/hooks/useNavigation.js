import React, {useReducer} from "react";
import initialMenu from "../api/navigationMenu";

function useNavigation(){
    const _menuStr = JSON.stringify(initialMenu);
    const _menu = JSON.parse(_menuStr);
    const [menu, dispatch] = useReducer(menuReducer,_menu);

    const setting_Main = mainIndex => {
        dispatch(s_main(mainIndex));
    }
    const setting_Sub = (mainIndex, subIndex) => {
        dispatch(s_sub(mainIndex, subIndex));
    }
    const initMenu = (mainIndex, subIndex) => {
        dispatch(s_main(mainIndex));
        dispatch(s_sub(mainIndex, subIndex));
    }
    const findMainIndex =(category) => {
        for (let i =0; i <menu.length; i++){
            if (menu[i].name === category)
                return i;
        }
        return -1;
    }
    const findIndexByPathName = (pathName) => {
        for (let i = 0; i < menu.length; i++){
            for (let j =0 ; j < menu[i].subMenu.length; j++){
                if (menu[i].subMenu[j].s_url === pathName){
                    return [i, j];
                }
            }
        }
        return -1;
    }

    return [menu, setting_Main, setting_Sub, initMenu,findMainIndex,findIndexByPathName];
}

export default useNavigation;

const SETTING_MAIN = 'navi/SETTING_MAIN';
const SETTING_SUB = 'navi/SETTING_SUB';
const MOUSE_LEAVE = 'navi/MOUSE_LEAVE';
const INIT_MENU = 'navi/INIT_MENU';

function menuReducer(state, action){
    let sub1;
    const sub = (mainIdx, subIdx) => {
        const filter = state.filter((menu, index) => index === mainIdx);
        return filter[0].subMenu.map((sub, index) => index === subIdx ? {...sub, selected: true}:{...sub, selected: false});
    }
    switch (action.type){
        case SETTING_MAIN:
            return state.map(
                (menu, index) => index === action.mainIndex ? {...menu, selected:true,collapsed:true} : {...menu, selected:false,collapsed:false}
            );
        case SETTING_SUB:
            return state.map((menu, index) => index === action.mainIndex ? {...menu, subMenu:sub(index, action.subIndex)}: {...menu, subMenu: sub(index, -1)});
        case MOUSE_LEAVE:
            return state;
        case INIT_MENU:
            return state.map((menu, index) => index ===0 ? {...menu, selected:true, collapsed:true, subMenu:sub(0,0)}:menu);
        default:
            return state;
    }
}

const s_main = idx => ({
    type: SETTING_MAIN,
    mainIndex: idx
})
const s_sub = (mainIndex, subIndex) => ({
    type: SETTING_SUB,
    mainIndex: mainIndex,
    subIndex: subIndex
})
