import React from 'react'
import { useAuth } from '@/components/authRouteComponent';
import { withRouter } from 'react-router-dom';

function User(props) {
  const { loginInfo, siginout } = useAuth();
  return <div>
    {JSON.stringify(loginInfo, undefined, 2)}
    <button onClick={siginout}>退出</button>
    <button onClick={() => props.history.push('/')}>到首页</button>
    <div style={{ background: 'gray' }}>
      {props.children}
    </div>
  </div>
}
export default withRouter(User)
