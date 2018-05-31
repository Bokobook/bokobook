module.exports = async ctx => {
  ctx.state.data = {
    ctx: ctx,
    req: ctx.req,
    message: 'ok'
  }
  ctx.body = {
    message: 'ok'
  }
}
