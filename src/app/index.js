// 用户注册接口
//路径一： 请求路径与映射（Koa不能直接app.get 需要使用第三方库koa-router）

const Koa = require("koa2");

const bodyParser = require('koa-parser')

const app = new Koa();

// const useRoutes = require('../router/index')
const userRouter = require("../router/user");
// const authRouter = require('../router/auth.router')

// const errorHandle = require('./error-Handle')

app.use(bodyParser())

// app.useRoutes();
// useRoutes(app)
// 有多个路由时每次都要重复不如抽离出去迭代
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());
// app.use(authRouter.routes())
// app.use(authRouter.allowedMethods())
// app.on('error',errorHandle)

module.exports = app;
