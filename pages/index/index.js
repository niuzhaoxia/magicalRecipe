// pages/login/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    result: [],
    recommendList: []
  },
  menuName(e) {
    this.setData({
      name: e.detail.value
    })
  },
  searchMenu(){
    let parms = {
      menu: this.data.name,
      key: '20c6a0bc17580bb78e1432b2067bbb9e'
    }
    wx.showLoading({
      title: '正在加载...',
      mask: true
    })
    wx.request({
      url: 'http://apis.juhe.cn/cook/query.php',
      data: parms,
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        wx.hideLoading();
        this.setData({
          result: res.data.result.data
        })
      }
    })
    wx.getStorageSync('searchHistory') || wx.setStorageSync('searchHistory', [])
    try {
      let value = wx.getStorageSync('searchHistory')
      console.log(value)
      if (value) {
        value.splice(0, 0, this.data.name)
        wx.setStorageSync('searchHistory', value)
      }
    } catch (e) {
      console.log(e)
    }
  },
  getRecomFromStorage() {
    wx.getStorageSync('searchHistory') || wx.setStorageSync('searchHistory', [])
    let recommendWord = ''
    try {
      let value = wx.getStorageSync('searchHistory')
      console.log(value)
      if (value) {
        recommendWord = value.splice(0, 1)[0]
      }
    } catch (e) {
      console.log(e)
    }
    return recommendWord
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let parms = {
      menu: this.getRecomFromStorage(),
      key: '20c6a0bc17580bb78e1432b2067bbb9e'
    }
    wx.request({
      url: 'http://apis.juhe.cn/cook/query.php',
      data: parms,
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res)
        if(res.data.result) {
          this.setData({
            recommendList: res.data.result.data
          })
        }
      },
      fail: (err) => {
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