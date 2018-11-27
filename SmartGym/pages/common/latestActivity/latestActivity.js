const app = getApp()

Page({
  data: {
    list: [{
      id: 'new1',
      header: '',
      title: '同济大学体育号称征集活动\n1345678910',
      images: '../../../images/activities/activity1.png'
    },
    {
      id: 'new2',
      header: '',
      title: '同济大学体育号称征集活动\naaaaaaaaaaa',
      images: '../../../images/activities/activity2.png'
    },
    {
      id: 'new3',
      header: '',
      title: '同济大学体育号称征集活动\nbbbbbbbbbbb',
      images: '../../../images/activities/activity3.png'
    }
    ]
  },
  loading: false,
  plain: false,
  loadMore(e) {
    if (this.data.list.length === 0) return
    var date = this.getNextDate()
    var that = this
    that.setData({ loading: true })
  },
  getNextDate() {
    const now = new Date()
    now.setDate(now.getDate() - this.index++)
    return now
  },
  returnBack() {
    wx.navigateBack({ changed: true });
  }
})
