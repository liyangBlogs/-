//底部导航列表
const tabbarList = {
  "color": "#666666",
  "selectedColor": "#289CFF",
  "backgroundColor": "#FFFFFF",
  "borderStyle": "black",
  "list": [
    {
      "pagePath": "/pages/home/index/index",
      "text": "首页",
      "iconPath": "/assets/img/tab_home_normal.png",
      "selectedIconPath": "/assets/img/tab_home_selected.png"
    },
    {
      "pagePath": "/pages/sales-order/order/order",
      "text": "销售订单",
      "iconPath": "/assets/img/tab_order_normal.png",
      "selectedIconPath": "/assets/img/tab_order_selected.png"
    },
    {
      "isSpecial": true
    },
    {
      "pagePath": "/pages/delivery-management/delivery/delivery",
      "text": "送货管理",
      "iconPath": "/assets/img/tab_material_normal.png",
      "selectedIconPath": "/assets/img/tab_material_selected.png"
    },
    {
      "pagePath": "/pages/profile/my/my",
      "text": "个人中心",
      "iconPath": "/assets/img/tab_my_normal.png",
      "selectedIconPath": "/assets/img/tab_my_selected.png"
    }
  ]
};
//app.js
App({
  onLaunch: function () {
    //隐藏系统tabbar
    wx.hideTabBar();

    //获取设备信息
    this.getSystemInfo();

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  onShow: function () {
    //隐藏系统tabbar
    wx.hideTabBar();
  },

  //设置tabbar
  editTabbar: function () {
    let tabbar = this.globalData.tabBar;
    let currentPages = getCurrentPages();
    let _this = currentPages[currentPages.length - 1];
    let pagePath = _this.route;
    (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
    for (let i in tabbar.list) {
      tabbar.list[i].selected = false;
      (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
    }
    _this.setData({
      tabbar: tabbar
    });
  },
  
  getSystemInfo: function () {
    let t = this;
    wx.getSystemInfo({
      success: function (res) {
        t.globalData.systemInfo = res;
      }
    });
  },

  globalData: {
    systemInfo: null,//客户端设备信息
    userInfo: null,
    tabBar: tabbarList,
  }
})