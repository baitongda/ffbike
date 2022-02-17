
部署


统一接口管理




文件结构:



├─assets  // 存放静态资源（如：scss）
│
├─layouts // 页面主要布局、自定义错误页面
│
├─components  // 页面组件
│ ├─business  // 业务组件
│ ├─common    // 公用组件
│
├─middleware  // 应用中间件（如：权限验证）
│
├─mixins      // 公用逻辑抽离（如：触底事件）
│
├─pages       // 页面视图
│
├─plugins     // 插件（如：axios、api）
│
├─server      // 服务端
│ ├─middleware  // 服务端使用的中间件
│ ├─request     // 请求方法封装
│ ├─routes      // 接口转发
│
├─store       // vuex
│
├─utils       // 工具方法
│
│nuxt.config.js   // Nuxt.js应用配置

