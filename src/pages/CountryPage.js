import React from "react";
import {Route, Switch} from "react-router-dom";
import PageNavigation from "../component/Navigation/PageNavigation";
import RouteWithSubRoutes from "../RouteWithSubRoutes";
import News from "../component/News/News";

function CountryPage({routes, label,...props}){
    let num;


    return (
        <>
            <PageNavigation category={label}/>
            <hr/>
            <div className="subSection">
                <Switch>
                    {routes.map((route) => (
                        <RouteWithSubRoutes key={num++} {...route}/>
                    ))}
                </Switch>
            </div>
        </>
    );
}

export default CountryPage;