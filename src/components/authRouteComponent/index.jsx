import { isFunction } from 'lodash';
import React, { useContext, createContext, useState, useEffect, Children } from 'react'
import { Redirect, Route } from 'react-router-dom';

const authContext = createContext();

function useProvideAuth() {
  const [loginInfo, setLoginInfo] = useState(null)
  const siginin = (cb) => {
    setLoginInfo({
      name: '张山'
    })
    isFunction(cb) && cb();
  }
  const siginout = (cb) => {
    setLoginInfo(null)
    isFunction(cb) && cb();
  }
  return {
    loginInfo,
    siginin,
    siginout
  }
}

function useAuth() {
  return useContext(authContext)
}

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>
    {children}
  </authContext.Provider>
}

function ProvideRoute({ children, nextPath, renderChildren, ...rest }) {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        const { location } = props;
        return auth.loginInfo ?
          (
            // Children.map(children, child => {
            //   const childProps = Object.assign({}, child.props, props);
            //   return React.cloneElement(child, childProps)
            // })
            children
          ) : (<Redirect
            to={nextPath ? nextPath : {
              pathname: "/login",
              state: { from: location }
            }}
          />)
      }}
    />
  )
}

export {
  ProvideAuth,
  ProvideRoute,
  useProvideAuth,
  useAuth
}
