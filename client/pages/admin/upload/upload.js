// pages/admin/upload/upload.js
var config = require('../../../config')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths: null
  },
  upload: function(e) {
    let value = e.detail.value;
    let tempFilePaths = this.data.tempFilePaths
    wx.uploadFile({
      url: config.service.uploadBookUrl,
      filePath: tempFilePaths[0],
      name: 'book',
      formData: value,
      header: {
        'content-type': 'multipart/form-data'
      }, 
      success: function(res) {
        wx.showToast({
          title: '成功',
          icon: 'succes',
          duration: 1000,
          mask: true
        })
        console.log(res)
      }
    })

    // wx.request({
    //   url: config.service.uploadBookUrl,
    //   method: 'POST',
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   data: value,
    //   success: function(res) {
    //     console.log('uplaod book')
    //     console.log(res)
    //     wx.showToast({
    //       title: '成功',
    //       icon: 'succes',
    //       duration: 1000,
    //       mask: true
    //     })
    //   }
    // })
  },
  getImgPath: function() {
    var page = this
    wx.chooseImage({
      count: 1,
      success: function(res) {
        var tempFilePaths = res.tempFilePaths
        console.log(res)
        page.setData({
          tempFilePaths: tempFilePaths
        })
        console.log('get path: ')
        console.log(tempFilePaths)
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