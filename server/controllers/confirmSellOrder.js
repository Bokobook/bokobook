const { mysql } = require('../qcloud')

module.exports = async function (ctx, next) {
  let query = ctx.request.query;

  // 插入数据
  await mysql('bookorder')
    .where('id', '=', query.order)
    .del()

  ctx.state.data = query;
}