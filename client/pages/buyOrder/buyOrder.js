// pages/personCenter/personCenter.js
var config = require('../../config')
var app = getApp()

Page({
  data: {
    sendOrder: null,
    buyOrder: null
  },
  ret: function () {
    wx.navigateTo({ url: "../login/login" })
  },
  tobook: function(event) {
    let id = this.data.buyOrder[event.currentTarget.dataset.index].bookid
    wx.navigateTo({
      url: '../bookdetail/bookdetail?id=' + id,
    })
  },
  getOrders: function () {
    let page = this
    let userid = app.globalData.userInfo.openid
    wx.request({
      url: config.service.getOders + '?userid=' + userid,
      success: function (res) {
        console.log(res)
        // 获取所属订单
        page.setData({
          sendOrder: res.data.data.sendOrder.reverse(),
          buyOrder: res.data.data.buyOrder.reverse()
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getOrders()
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
    this.getOrders()
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