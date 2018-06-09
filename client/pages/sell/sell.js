var config = require('../../config')
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookhelp: false,
    orderInfo: {
      date: "2016-09-01",
      time: "12:01",
    }
  },
  oninput: function(e) {
    let id = e.target.id;
    let orderInfo = this.data.orderInfo
    orderInfo[id] = e.detail.value
    this.setData({
      orderInfo: orderInfo
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  ret: function() {
    wx.navigateTo({
      url: '../index/index',
    })
  },
  changebookhelp: function(e) {
    this.setData({
      bookhelp: e.detail.value
    })
  },
  uploadOrder: function(e) {
    let bookhelp = this.data.bookhelp
    let openid = app.globalData.userInfo.openid

    let orderInfo = Object.assign({}, this.data.orderInfo, {
      userid: openid,
      createTime: '2018-01-11',
      way: bookhelp
    })
    wx.request({
      url: config.service.sendBookOrder,
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: orderInfo,
      success: function(res) {
        // wx.showToast({
        //   title: '成功',
        //   icon: 'succes',
        //   duration: 1000,
        //   mask: true
        // })
        console.log(res)
        wx.switchTab({
          url: '../sellOrder/sellOrder',
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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