const { mysql } = require('../qcloud')

module.exports = async function (ctx, next) {
  let query = ctx.request.query;

  // 插入数据
  await mysql('buyorder')
    .where('id', '=', query.order)
    .update({
      state: 1
    })

  ctx.state.data = query;
}