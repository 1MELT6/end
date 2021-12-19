const Koa = require('koa2');
const Router = require('koa-router')
require('./src/config/db')

const userRouter = new Router({ prefix: '/users' })

userRouter.get('/:id', (ctx, next) => {
    console.log(ctx.request.params);
    console.log(ctx.request.query);
    ctx.response.body = ctx.request.params
    // http://localhost:8000/users/abc?aa=22&&bb=11
    // { id: 'abc' }
    // [Object: null prototype] { aa: '22', bb: '11' }
})


const app = new Koa();

app.use(userRouter.routes())

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

app.listen(8000, () => {
    console.log('koa初体验');
})