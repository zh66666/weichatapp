const app = getApp()

Page({
  onShow() {
    wx.reportAnalytics('enter_home_programmatically', {})
  },
  onShareAppMessage() {
    return {
      title: '智慧体育高校',
      path: 'pages/index/index'
    }
  },

  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list: [
      {
        id: 'view',
        name: '我的通知',
        url: '../common/myNews/myNews'
      },
      {
        id: 'content',
        name: '信息维护',
        url: '../common/registration/registration'
      },
      {
        id: 'logo',
        name: '系统介绍',
        url: '../common/sysIintroduction/sysIintroduction'
      },
      {
        id: 'canvas',
        name: '历史记录',
        url: '../logs/logs'
      },
      {
        id: 'form',
        name: '意见反馈',
        url: '../common/feedback/feedback'
      }, 
    ]
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      // console.log(app.globalData)
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    // console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        wx.navigateTo({
          url: list[i].url
        })
      } 
    }
    this.setData({
      list
    })
    wx.reportAnalytics('click_view_programmatically', {})
  }
})
