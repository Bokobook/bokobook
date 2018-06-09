const { mysql } = require('../qcloud')

// 向前端发送书籍，如带id则发送该本，否则全部
module.exports = async function (ctx, next) {
  let body = ctx.request.body
  
  let book
  // if (query.id) {
  //   book = await mysql('book')
  //           .where({
  //             id: query.id
  //           })
  //           .select('*')
  // } else {
  //   book = await mysql('book').select('*')
  // }
  if ((body.school || body.college || body.descipline) && !(body.school == '' && body.college == '' && body.discipline == '' )) {
    book = await mysql('book')
      .where({
        school: body.school,
        college: body.college,
        discipline: body.discipline
      })
      .select('*')
      // .where('school', 'like', body.school)
      // .where('college', 'like', body.college)
      // .where('descipline', 'like', body.descipline)
      // .select('*')
  } else {
    book = await mysql('book').select('*')
  }
  console.log(book)
  
  ctx.state.data = {
    book: book,
    body: body
  }
}