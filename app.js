const app = require("./src/app/index");
// 在这里使用中间件会显得复杂 所以添加app/index.js进行编写
// 这里的app不用解构 因为本来就是本身，不是函数类之类的

// const  connection =require('./app/database')
require("./src/app/db");

// app.listen(8000,()=>{
app.listen(8000, () => {
  console.log(`服务器在启动成功`);
});
