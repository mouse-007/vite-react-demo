import React from 'react'
import {
  Route
} from "react-router-dom";
import {
  ProvideRoute,
} from '@/components/authRouteComponent';
import Basic from '@/components/basic';

/**
 * 公共route 
 * @param {*} param0 auth是否需要鉴权 basic 是否需要basic 
 * @returns 
 */
function BasicRoute({ auth = true, basic: isBasic = false, children, ...rest }) {
  const RenderRoute = auth ? ProvideRoute : Route;
  return <RenderRoute {...rest} >
    {isBasic ? <Basic>
      {children}
    </Basic>: children }
  </RenderRoute>
}
export default BasicRoute