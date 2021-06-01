import React from 'react'
import {
  useHistory,
  useLocation,
} from "react-router-dom";
import {
  useAuth
} from '@/components/authRouteComponent';

function Login(props) {
  const { siginin } = useAuth();
  const history = useHistory()
  const { state: localState } = useLocation();
  function siginClick(params) {
    const routeObj = localState && localState.from || { pathname: '/home' };
    siginin(() => {
      history.push(routeObj);
    })
  }
  return <button onClick={siginClick}>登录</button>
}
export default Login