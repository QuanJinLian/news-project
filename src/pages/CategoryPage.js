import React from "react";
import {Switch} from "react-router-dom";
import PageNavigation from "../component/Navigation/PageNavigation";
import RouteWithSubRoutes from "../RouteWithSubRoutes";

function CategoryPage({routes, ...props}){
    return (
        <>
            <PageNavigation category={props.label}/>
            <hr/>
            <div className="subSection">
                <Switch>
                    {routes.map((route,index) => (
                        <RouteWithSubRoutes key={index} {...route}/>
                    ))}
                </Switch>
            </div>
        </>
);
}

export default CategoryPage;