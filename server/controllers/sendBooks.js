const { mysql } = require('../qcloud')

// 向前端发送书籍，如带id则发送该本，否则全部
module.exports = async function (ctx, next) {
  let query = ctx.request.query
  let book
  if (query.id) {
    book = await mysql('book')
            .where({
              id: query.id
            })
            .select('*')
  } else {
    book = await mysql('book').select('*')
  }
  
  ctx.state.data = {
    book: book,
    query: query
  }
}