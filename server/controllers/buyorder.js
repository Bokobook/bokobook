// 处理取书订单

// 接收用户上传的书籍信息并保存入数据库
const { mysql } = require('../qcloud')

module.exports = async function (ctx, next) {
  let body = ctx.request.body;

  // 插入数据
  await mysql('buyorder').insert(body);
  let data = await mysql('buyorder').select('*');

  ctx.state.data = data;
}