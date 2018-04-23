//index.js
//获取应用实例  首页
const app = getApp()

Page({
  data: {
    listData:[
      { pic: '../../imgs/tx.jpg', dec: '《l连线》杂志创始主编、微信之父张小龙最推崇的互联网预言家、马化腾等多位互联网大佬的座上嘉宾', popName:'凯文*凯利'},
      { pic: '../../imgs/tx.jpg', dec: '《l连线》杂志创始主编、微信之父张小龙最推崇的互联网预言家、马化腾等多位互联网大佬的座上嘉宾', popName: '凯文*凯利' },
      { pic: '../../imgs/tx.jpg', dec: '《l连线》杂志创始主编、微信之父张小龙最推崇的互联网预言家、马化腾等多位互联网大佬的座上嘉宾', popName:'凯文*凯利'}
    ],
    imgUrls: [
      '../../imgs/banner1.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },

  onLoad: function () {

  },
  ask:function(){
    console.log("123");
  }  
    
})
