import NotPage from '@/views/404'
import Login from '@/views/login'
import Home from '@/views/home'
import User from '@/views/user'
const Bus = () => "Bus";
const Cart = () => "Cart";

// interface configObject{
//   auth: boolean, // 默认true 是否需要权限
//   basic: boolean, // 默认false 是否需要公共的模板
//   [propName: string]: any // 其它react-router 或者自定义属性
// }
// interface routesItem{
//   path: string,   // 路径
//   config?: configObject, // 传给路由的props
//   component: any,  // 组件模板
//   routes: routesItem [] // 子路由
// }

const routes = [
  {
    path: "/",
    config: {
      exact: true,
      basic: true
    },
    component: Home
  },
  {
    path: "/login",
    config: {
      auth: false,
    },
    component: Login
  },
  {
    path: "/user",
    component: User,
    config: {
      basic: true
    },
    routes: [
      {
        path: "/user/bus",
        component: Bus
      },
      {
        path: "/user/cart",
        component: Cart
      }
    ]
  },
  {
    path: "*",
    config: {
      auth: false
    },
    component: NotPage
  },
];
export default routes;