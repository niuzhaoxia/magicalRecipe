// component/indexMenuItem/item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemList: {
      type: Array,
      value: []
    }
  },
 
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    menuItem(e) {
      console.log(e)
      wx.setStorageSync('menuInfo', e.currentTarget.dataset.menudata)
      wx.navigateTo({
        url: '../itemMenu/index',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
  }
})
