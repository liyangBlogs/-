const app = getApp();
// common/component/tabbarComponent/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //是否点亮中间按钮
    isShowSpecial: {
      type: Boolean,
      value: false,
      observer(newVal, oldVal, changedPath) {
      }
    },
    tabbar: {
      type: Object,
      observer(newVal, oldVal, changedPath) {
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isIphoneX: app.globalData.systemInfo.model.search('iPhone X') != -1 ? true : false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showModal() {
      this.setData({
        isShowSpecial: !this.data.isShowSpecial
      })
    }
  }
})
