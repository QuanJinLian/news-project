import React from "react";
import {Route} from 'react-router-dom';

function RouteWithSubRoutes({...route}){
    console.log("RouteWithSubRoutes",route);
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component routes={route.routes} category={route.category} label={route.label} query={route.query} {...props} />
            )}/>
    )
}

export default RouteWithSubRoutes;