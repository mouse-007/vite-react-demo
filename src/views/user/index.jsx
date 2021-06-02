import React from 'react'
import { useAuth } from '@/components/authRouteComponent';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function User(props) {
  const { loginInfo, siginout } = useAuth();
  return <div>
    {JSON.stringify(loginInfo, undefined, 2)}
    <button onClick={siginout}>退出</button>
    <button onClick={() => props.history.push('/')}>到首页</button>
    <div style={{ background: 'gray' }}>
      {props.children}
    </div>
    <button onClick={() => props.dispatch({ type: 'common/add' })}>加{ props.current }</button>
    <button onClick={() => props.dispatch({ type: 'common/addAction', payload: 555 })}>时间戳{ props.current }</button>
  </div>
}
export default connect((state) => {
  return { current: state.common.current }
})(User)
