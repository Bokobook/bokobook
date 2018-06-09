// pages/bookdetail/bookdetail.js
var config = require('../../config')
var app = getApp()

Page({
  data: {
    book: null,
    totalprice: 0,
    host: config.service.host
  },

  getBookId: function() {
    // 根据URL获取书籍id
    let pages = getCurrentPages()
    let currentPage = pages[pages.length - 1]
    let url = currentPage.route
    let option = currentPage.options
    return option.id
  },

  getBook: function(id) {
    // 根据书籍id请求书籍
    let page = this
    wx.request({
      url: config.service.getABookUrl + '?id=' + id,
      success: function (res) {
        console.log(res.data.data)
        let book = res.data.data.book[0]
        console.log(book)
        book.oldprice = book.oldprice.toFixed(2)
        book.price = book.price.toFixed(2)
        page.setData({
          book: book
        })
      }
    })
  },

  getprice: function(e) {
    // 计算总价格
    let num = e.detail.value
    this.setData({
      totalprice: this.data.book.price * num
    })
  },

  buy: function(e) {
    // 计算总价格，购买书籍生成订单
    let num = e.detail.value.number
    var page = this
    wx.showModal({
      title: '提示',
      content: '您需付款￥' + page.data.totalprice,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          let order = {
            bookid: page.data.book.id,
            'number': num,
            userid: app.globalData.userInfo.openid,
            price: page.data.totalprice,
            state: 0
          }
          wx.request({
            url: config.service.sendBuyOrder,
            method: 'POST',
            header: {
              'content-type': 'application/json'
            },
            data: order,
            success: function (res) {
              console.log('uplaod book order')
              console.log(res)
              wx.switchTab({
                url: '../buyOrder/buyOrder',
              })
            }
          })
        } else {
          console.log('用户点击取消')
        }

      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 初始化，获取书籍id并请求相应书籍信息
    let bookid = this.getBookId()
    this.getBook(bookid)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})