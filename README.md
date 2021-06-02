react-router-dom
redux
react-redux
react-saga
react-router-dom
axios
vite

目录结构
```
src/   
  components/                                   // 公共组件   
    authRouteComponent/   
      index.jsx                                 // 鉴权路由    
    basic/                                          
    basicRoute/    
      index.jsx                                 // 统一路由    
  router/                                        
    index.jsx                                   // 输出路由组件  
    routes.js                                   // 统一的路由入口  
  store/                                        // 数据仓库
    utils/                                      
      saga.js                                   // sage处理的方法
    index.js                                    // 入口文件， 合并各个模块
    store.js                                    // 数据源注册
 view/                                          // 页面放置的位置  
 main.jsx	
vite.config.js

```
[authRouteComponent 介绍](#authRouteComponent)  
[basicRoute 介绍](#basicRoute)   
[router 使用](#router)   
[store 模块](#store)  

<span id="authRouteComponent"></span>  

### authRouteComponent 介绍 
