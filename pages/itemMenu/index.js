// pages/itemMenu/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {}
  },
  addCollect() {
    wx.getStorageSync('collections') || wx.setStorageSync('collections', [])
    try {
      let value = wx.getStorageSync('collections')
      console.log(value)
      if (value) {
        value.splice(0, 0, this.data.info)
        wx.setStorageSync('collections', value)
        wx.showModal({
          title: '提示',
          content: '添加成功',
          success: (res) => {
            if(res.confirm) {
            }
          }
        })
      }
    } catch (e) {
      console.log(e)
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'menuInfo',
      success: (res) => {
        console.log(this)
        this.setData({
          info: res.data
        })
      }
    })    
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