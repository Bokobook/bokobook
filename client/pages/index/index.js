// pages/homepage/homepage.js

var config = require('../../config')
var app = getApp()

Page({

  data: {
    books: null,
    filter: {}
  },
  tobookdetail: function(event) {
    let id = event.currentTarget.dataset.bookid
    wx.navigateTo({
      url: '../bookdetail/bookdetail?id=' + id,
    })
  },
  login: function() {
    var page = this
    wx.login({
      success: function(res) {
        var code = res.code
        console.log(code)
        var appid = 'wxf4508946d107fc1c'
        var secret = '5228ac0f924a1b936fefc555c49bc08d'
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&js_code=' + code + '&grant_type=authorization_code',
          data: {},
          header: {
            'content-type': 'json'
          },
          success: function(res) {
            var openid = res.data.openid //返回openid
            console.log('openid为' + openid);
            app.globalData.userInfo = res.data;
            console.log(app.globalData.userInfo)
          }
        })
      }
    })
  },
  getfilter: function(e) {
    let filter = e.detail.value
    this.setData({
      filter: filter
    })
    this.getbooks()
  },
  unfilter: function(e) {
    console.log('unfilter')
    this.setData({
      filter: {}
    })
    this.getbooks()
  },
  getbooks: function() {
    let page = this
    wx.request({
      url: config.service.getBookUrl,
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: page.data.filter,
      success: function(res) {
        page.setData({
          books: res.data.data.book
        })
        console.log(res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.login()
    this.getbooks()
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