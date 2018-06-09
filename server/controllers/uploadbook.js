// 接收用户上传的书籍信息并保存入数据库
const { mysql } = require('../qcloud')


module.exports = async function (ctx, next) {
  let body = ctx.req.body;
  let file = ctx.req.file;
  
  body.face = file.filename
  await mysql('book').insert(body)
  let data = await mysql('book').select('*')

  ctx.state.data = {
    body: body,
    data: data
  }
}