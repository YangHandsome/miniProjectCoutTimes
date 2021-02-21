// components/coutTimePicker.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    date:new Date().getFullYear()+'-'+new Date().getMonth()+'-'+new Date().getDate(),
    time:'00:00'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    dateBindChange:function(e){
       console.log('日期修改为：'+e.detail.value)
       this.setData({
         date:e.detail.value
       })
    },
    timeBindChange:function(e){
      console.log('时间修改为：'+e.detail.value)
      this.setData({
        time:e.detail.value
      })
   }
  }
})
