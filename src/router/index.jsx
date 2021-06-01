import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import BasicRoute from '@/components/basicRoute'
import { ProvideAuth } from '@/components/authRouteComponent';
import routes from "./routes"

function MapRoutes({ routes }) {
  return routes && routes.length > 0 && <Switch>
    {
      routes.map(route => {
        const { config = {}, path, routes: rs } = route;
        return <BasicRoute key={path} path={path} {...config}>
          <route.component key={path}>
            <MapRoutes routes={rs} />
          </route.component>
        </BasicRoute>
      })    
    }
  </Switch>
  
}

function RouteList() {
  return <ProvideAuth>
    <Router>
      <MapRoutes routes={routes} />   
    </Router>
  </ProvideAuth>
}
export default RouteList;