// pages/admin/comfirmSellOrder/comfirmSellOrder.js
const config = require('../../../config.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderNumber: null,
    confirm: false
  },
  getOrderNumber: function (e) {
    this.setData({
      orderNumber: e.detail.value
    })
  },
  confirmOrder: function () {
    let page = this
    wx.showModal({
      title: '确认',
      content: '订单号：' + page.data.orderNumber,
      success: function (res) {
        if (res.confirm) {
          wx.request({
            url: config.service.confirmSellOrder + '?order=' + page.data.orderNumber,
            success: function (res) {
              wx.showToast({
                title: '成功',
                icon: 'succes',
                duration: 1000,
                mask: true
              })
            }
          })
        } else {
          wx.navigateBack()
        }
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