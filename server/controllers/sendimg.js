
// 向前端发送书籍，如带id则发送该本，否则全部
module.exports = async function (ctx, next) {
  let url = ctx.req.url
  let query = ctx.req.Url
  console.log(ctx.req)
  console.log(url)
  console.log(query)

  ctx.state.data = {
    url: url,
    request: ctx.request
  }
}