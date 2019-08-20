let animation = wx.createAnimation({
  duration: 0,
  timingFunction: 'linear',
  delay: 0,
  transformOrigin: '50% 50% 0',
})
 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData: {},
    deg: 0,
    timer: '',
    flag: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
   
  },
  change() {
    let flag = this.data.flag
    if(flag) {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        let deg = this.data.deg
        let animate = animation.rotate(deg).step()
        this.setData({
          animationData: animate.export(),
          deg: deg + 10,
          flag: false
        })
      }, 1000)
    } else {
      clearInterval(this.timer)
      this.setData({
        flag: true
      })
    }
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})