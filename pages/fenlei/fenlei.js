var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    toView: 'red',
    scrollTop: 100,
    currentTab: 0,
    category: [
      { name: '推荐', id: 'guowei' },
      { name: '全部', id: 'shucai' },
      { name: '财经', id: 'chaohuo' },
      { name: '人工智能', id: 'dianxin' },
      { name: '大数据', id: 'cucha' },
      { name: '汽车', id: 'danfan' }
    ],
    detail: [
      {id:'111'},
      { id: '222' },
      { id: '333' },
      { id: '444' },
      { id: '555' },
      { id: '666' },
    ],
    curIndex: 0,
    isScroll: false,
    toView: 'guowei'
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  switchTab(e) {
    const self = this;
    this.setData({
      isScroll: true
    })
    setTimeout(function () {
      self.setData({
        toView: e.target.dataset.id,
        curIndex: e.target.dataset.index
        
      })
    }, 0)
    setTimeout(function () {
      self.setData({
        isScroll: false
      })
    }, 1)
  }
})