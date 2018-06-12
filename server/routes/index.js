/**
 * ajax 服务路由集合
 */
const router = require('koa-router')({
    prefix: '/weapp'
})
const controllers = require('../controllers')

const path = require('path')
const imgFolder = path.join(path.parse(__dirname).dir, 'uploads')

const multer = require('koa-multer');
const upload = multer({ dest: imgFolder });

// 从 sdk 中取出中间件
// 这里展示如何使用 Koa 中间件完成登录态的颁发与验证
const { auth: { authorizationMiddleware, validationMiddleware } } = require('../qcloud')

// --- 登录与授权 Demo --- //
// 登录接口
router.get('/login', authorizationMiddleware, controllers.login)
// 用户信息接口（可以用来验证登录态）
router.get('/user', validationMiddleware, controllers.user)

// --- 图片上传 Demo --- //
// 图片上传接口，小程序端可以直接将 url 填入 wx.uploadFile 中
router.post('/upload', controllers.upload)

// router.post('/uploadbook', controllers.uploadbook)
// 上传书目
router.post('/uploadbook', upload.single('book'), controllers.uploadbook)
// 获取书籍
router.post('/getbooks', controllers.sendbooks)
// 获取一本书籍
router.get('/getAbook', controllers.sendAbook)

// 确认购书订单
router.get('/confirmBuyOrder', controllers.confirmBuyOrder)
// 确认卖书订单
router.get('/confirmSellOrder', controllers.confirmSellOrder)

// 生成卖书订单
router.post('/uploadorder1', controllers.order1)
// 生成购书订单
router.post('/uploadbuyorder', controllers.buyorder)
router.get('/getOders', controllers.sendorders)

// --- 信道服务接口 Demo --- //
// GET  用来响应请求信道地址的
router.get('/tunnel', controllers.tunnel.get)
// POST 用来处理信道传递过来的消息
router.post('/tunnel', controllers.tunnel.post)

// --- 客服消息接口 Demo --- //
// GET  用来响应小程序后台配置时发送的验证请求
router.get('/message', controllers.message.get)
// POST 用来处理微信转发过来的客服消息
router.post('/message', controllers.message.post)

module.exports = router
