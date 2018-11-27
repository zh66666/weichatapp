const app = getApp()
Page({
  data: {
    userInfo: "",
    text: '获取验证码', //按钮文字
    currentTime: 61, //倒计时
    disabled: false, //按钮是否禁用
    phone: '', //获取到的手机栏中的值
    VerificationCode: '',
    Code: '',
    NewChanges: '',
    NewChangesAgain: '',
    success: false,
    state: '',
    index: 0,
    indexcampus: 1,
    collegeArray: ['电子与信息工程学院', '汽车学院', '经管学院', '传媒学院', '材料学院'],
    campusArray: ['四平路校区', '嘉定校区', '彰武路校区', '其他']
  },
  bindPickerChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindCampusPickerChange: function (e) {
    this.setData({
      indexcampus: e.detail.value
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    }
  },
  fanhui: function () {
    wx.navigateBack({ changed: true });
  },
  handleInputPhone: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  handleVerificationCode: function (e) {
    console.log(e);
    this.setData({
      Code: e.detail.value
    })
  },
  handleNewChanges: function (e) {
    console.log(e);
    this.setData({
      NewChanges: e.detail.value
    })
  },
  handleNewChangesAgain: function (e) {
    console.log(e);
    this.setData({
      NewChangesAgain: e.detail.value
    })

  },
  doGetCode: function () {
    var that = this;
    that.setData({
      disabled: true, //只要点击了按钮就让按钮禁用 （避免正常情况下多次触发定时器事件）
      color: '#ccc',
    })

    var phone = that.data.phone;
    var currentTime = that.data.currentTime //把手机号跟倒计时值变例成js值
    var warn = null; //warn为当手机号为空或格式不正确时提示用户的文字，默认为空
    var phone = that.data.phone;
    var currentTime = that.data.currentTime //把手机号跟倒计时值变例成js值
    var warn = null; //warn为当手机号为空或格式不正确时提示用户的文字，默认为空
    if (phone == '') {
      warn = "号码不能为空";
      wx.showToast({
        title: warn,
        icon: 'none',
        duration: 2000
      });
    } else if (phone.trim().length != 11 || !/^1[3|4|5|6|7|8|9]\d{9}$/.test(phone)) {
      warn = "手机号格式不正确";
      wx.showToast({
        title: warn,
        icon: 'none',
        duration: 2000
      });
    } //手机号已被注册提示信息
    else{
      wx.showToast({
        title: '短信验证码已发送',
        icon: 'none',
        duration: 2000
      });
    }
    
    // wx.request({
    //   url: '', //后端判断是否已被注册， 已被注册返回1 ，未被注册返回0
    //   method: "GET",
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded'
    //   },
    //   success: function (res) {
    //     that.setData({
    //       state: res.data
    //     })
    //     if (phone == '') {
    //       warn = "号码不能为空";
    //     } else if (phone.trim().length != 11 || !/^1[3|4|5|6|7|8|9]\d{9}$/.test(phone)) {
    //       warn = "手机号格式不正确";
    //     } //手机号已被注册提示信息
    //     else if (that.data.state == 1) {  //判断是否被注册
    //       warn = "手机号已被注册";

    //     }
    //     else {
    //       wx.request({
    //         url: '', //填写发送验证码接口
    //         method: "POST",
    //         data: {
    //           coachid: that.data.phone
    //         },
    //         header: {
    //           'content-type': 'application/x-www-form-urlencoded'
    //         },
    //         success: function (res) {
    //           console.log(res.data)
    //           that.setData({
    //             VerificationCode: res.data.verifycode
    //           })


    //           //当手机号正确的时候提示用户短信验证码已经发送
    //           wx.showToast({
    //             title: '短信验证码已发送',
    //             icon: 'none',
    //             duration: 2000
    //           });
    //           //设置一分钟的倒计时
    //           var interval = setInterval(function () {
    //             currentTime--; //每执行一次让倒计时秒数减一
    //             that.setData({
    //               text: currentTime + 's', //按钮文字变成倒计时对应秒数

    //             })
    //             //如果当秒数小于等于0时 停止计时器 且按钮文字变成重新发送 且按钮变成可用状态 倒计时的秒数也要恢复成默认秒数 即让获取验证码的按钮恢复到初始化状态只改变按钮文字
    //             if (currentTime <= 0) {
    //               clearInterval(interval)
    //               that.setData({
    //                 text: '重新发送',
    //                 currentTime: 61,
    //                 disabled: false,
    //                 color: '#33FF99'
    //               })
    //             }
    //           }, 100);
    //         }
    //       })
    //     };
    //     //判断 当提示错误信息文字不为空 即手机号输入有问题时提示用户错误信息 并且提示完之后一定要让按钮为可用状态 因为点击按钮时设置了只要点击了按钮就让按钮禁用的情况
    //     if (warn != null) {
    //       wx.showModal({
    //         title: '提示',
    //         content: warn
    //       })
    //       that.setData({
    //         disabled: false,
    //         color: '#33FF99'
    //       })
    //       return;
    //     }
    //   }

    // })
  },
  formSubmit: function (e) {
    // console.log(e);
    var that = this
    if (this.data.Code == '') {
      wx.showToast({
        title: '请输入验证码',
        image: '/images/error.png',
        duration: 2000
      })
      return
    } else if (this.data.Code != this.data.VerificationCode) {
      wx.showToast({
        title: '验证码错误',
        image: '/images/error.png',
        duration: 2000
      })
      return
    }
    else {
      var that = this
      var phone = that.data.phone;
      wx.showToast({
        title: '提交成功~',
        icon: 'success',
        duration: 2000
      })
    }
  }
})