import NotPage from '@/views/404'
import Login from '@/views/login'
import Home from '@/views/home'
import User from '@/views/user'
const Bus = () => "Bus";
const Cart = () => "Cart";

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
    component: NotPage
  },
];
export default routes;