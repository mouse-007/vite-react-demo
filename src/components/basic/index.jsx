import React from 'react'
import { Link } from 'react-router-dom'
import styles from './basic.module.less'
import Header from './header';
import Menu from './menu';

function Basic(props) {
  return <div className={styles.basicBox}>
    <Header />
    <div className={styles.basicContent}>
      <Menu />
      <div className={styles.basicMain}>
        视口
        {props.children}
      </div>
    </div>
  </div>
}
export default Basic;