// 接收用户上传的书籍信息并保存入数据库
const { mysql } = require('../qcloud')

module.exports = async function (ctx, next) {
  let body = ctx.request.body;
  let bookname = body.bookname;
  let introduction = body.introduction;

  // 插入数据
  await mysql('book').insert({
     bookname: bookname,
     introduction: introduction,
     user: 1
  })

  let data = await mysql('book').select('*')
  ctx.state.data = data
}