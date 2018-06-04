// pages/personCenter/personCenter.js
var config = require('../../config')
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sendOrder: null,
    buyOrder: null
  },
  getOrders: function() {
    let page = this
    let userid = app.globalData.userInfo.openid
    wx.request({
      url: config.service.getOders + '?userid=' + userid,
      success: function (res) {
        // console.log(res)
        // 获取所属订单
        page.setData({
          sendOrder: res.data.data.sendOrder,
          buyOrder: res.data.data.buyOrder
        })
        // console.log(page.data.sendOrder)
        // console.log(page.data.buyOrder)
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