const app = getApp()

Page({
  data: {
    list: [{
      id: 'new1',
      header: '',
      title: '智慧城市小程序上线了\n1345678910',
      images: '../../../images/news/new1.png'
    },
    {
      id: 'new2',
      header: '',
      title: '智慧城市小程序上线了\naaaaaaaaaaa',
      images: '../../../images/news/new2.png'
    },
    {
      id: 'new3',
      header: '',
      title: '智慧城市小程序上线了\nbbbbbbbbbbb',
      images: '../../../images/news/new3.png'
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
