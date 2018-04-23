// pages/poplist/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listIndex:'',
    tost:false,
    detail:[
      { pic: '../../imgs/tx.jpg', dec: '《l连线》杂志创始主编、微信之父张小龙最推崇的互联网预言家、马化腾等多位互联网大佬的座上嘉宾', popName: '凯文*凯利1号' },
      { pic: '../../imgs/tx.jpg', dec: '《2连线》杂志创始主编、微信之父张小龙最推崇的互联网预言家、马化腾等多位互联网大佬的座上嘉宾', popName: '凯文*凯利2号' },
      { pic: '../../imgs/tx.jpg', dec: '《3连线》杂志创始主编、微信之父张小龙最推崇的互联网预言家、马化腾等多位互联网大佬的座上嘉宾', popName: '凯文*凯利3号' }
    ],
    cont:'',
    video:[
      { src:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'},
      { src:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'},
      { src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400' },
      { src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400' }
    ],
    videoLpic:'../../imgs/videoPic.jpg',
    likes:[1,2,3]

  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  // 设置 从列表页传值的下标  
//   this.setData({
//     listIndex: options.listIndex,
//   })
//  // 根据下标  设置对应的嘉宾内容
//   this.setData({
//     cont: this.data.listIndex
//   })
  },
  chooseVideo: function (e) {
    var index = e.currentTarget.dataset.index;
    this.setData({
      tost: true
    })
  },
  chooseLikes: function (e) {
    var index = e.currentTarget.dataset.index;
    console.log(index)
  },
  close:function(){
    this.setData({
      tost: false
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