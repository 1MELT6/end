const Router = require("koa-router");

const userRouter = new Router({ prefix: "/user" });
const {create} = require('../controller/user.controller')
const { verifyUser,handlePassword}= require('../middleware/user.middleware')

// restful风格，创建用户要用post请求
// 判断用户是否为空或者重复verifyUser->middleware
// 这里的veryfy函数要加next才能执行create 中间件特性
userRouter.post('/'
,verifyUser,handlePassword,create
// ,(ctx,next)=>{
//     ctx.body = "创建用户成功"
// }
// 具体逻辑放到controller里
)










// userRouter.get('/:id', (ctx, next) => {
//     console.log(ctx.request.params);
//     console.log(ctx.request.query);
//     ctx.response.body = 2222222222
//     // http://localhost:8000/users/abc?aa=22&&bb=11
//     // { id: 'abc' }
//     // [Object: null prototype] { aa: '22', bb: '11' }
// })

// app.use((ctx, next) => {
//     console.log(ctx.request.url);
//     console.log(ctx.request.query);
//     console.log(ctx.request.params);
//http://localhost:8000/users?aa=22&&bb=11
//     // param解析不出来
//     //     /users?hel=1
//     // [Object: null prototype] { hel: '1' }
//     // undefined
//     ctx.response.body = 'ssss'
// })

module.exports = userRouter;
