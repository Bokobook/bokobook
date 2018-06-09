const { mysql } = require('../qcloud')

module.exports = async function (ctx, next) {
  let query = ctx.request.query
  let buyOrder, sendOrder
  if (query.userid) {
    buyOrder = await mysql('buyorder')
      .where({
        userid: query.userid
      })
      .select('*')

    sendOrder = await mysql('bookorder')
      .where({
        userid: query.userid
      })
      .select('*')
    
    let l = buyOrder.length
    for (let i = 0; i < l; i++) {
      let book = await mysql('book')
        .where({
          id: buyOrder[i].bookid
        })
        .select('*')
      buyOrder[i].book = book
    }
  } else {
    buyOrder = await mysql('buyorder').select('*')
    sendOrder = await mysql('sendOrder').select('*')
  }

  ctx.state.data = {
    buyOrder: buyOrder,
    sendOrder: sendOrder,
    query: query
  }
}