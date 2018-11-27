//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    imgUrls: [
      '../../images/canpusView1.jpg',
      '../../images/canpusView2.jpg',
      '../../images/canpusView3.jpg'
    ]
  },
  //事件处理函数，（目前：点开图片，看日志）
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  },
  getLatestInfo: function () {
    wx.navigateTo({
      url: '../common/latestInfo/latestInfo'
    })
  },
  getLatestActivity: function () {
    wx.navigateTo({
      url: '../common/latestActivity/latestActivity'
    })
  },
  joinActivity: function () {

  },
  joinVolunteer: function () {

  },
  checkHistory: function () {

  },
  getFeedback: function () {

  },
  getHelp: function () {

  },
  share: function () {

  },
  administrator: function () {

  }
})
