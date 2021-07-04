import React from "react";

function Total({...props}){
    return (
        <div>
            여긴 토탈 페이지 주소는 - {props.match.path}
        </div>
    )
}
export default Total;