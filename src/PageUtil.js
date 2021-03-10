Vue.mixin({
  data: function() {
    return {
      laypageNum: 0,
      laypageTotalPage: 0,
      laypageSize: 10,
      laypageLoading: true,
      laypageFinished: false
    }
  },
  methods: {
    resetLaypage: function() {
      this.laypageNum = 0
      this.laypageTotalPage = 0
      this.laypageLoading = true
    },
    getLaypageData: function(fn) {
      var _that = this
      fn && fn({
        laypageNum: _that.laypageNum + 1,
        laypageSize: _that.laypageSize,
        laypageLoading: _that.laypageLoading,
        laypageFinished: _that.laypageFinished
      }, function(option) {
        _that.laypageNum = option.laypageNum
        _that.laypageTotalPage = option.laypageTotalPage
        _that.laypageFinished = _that.laypageNum >= _that.laypageTotalPage
        // 加载状态结束
        _that.laypageLoading = false
      })
    }
  }
})
