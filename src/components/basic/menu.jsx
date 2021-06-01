import React from 'react'
import styles from './basic.module.less'
import { Link } from 'react-router-dom'

function Menu() {
  return <div className={styles.menu}>
    <ul>
      <li><Link to="/">首页</Link></li>
      <li><Link to="/user">用户</Link></li>
      <li><Link to="/user/bus">bus</Link></li>
      <li><Link to="/user/cart">cart</Link></li>
    </ul>
  </div>
}
export default Menu