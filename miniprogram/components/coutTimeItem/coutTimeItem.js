// components/coutTimeItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   * setTime 设置的时间
   * time 倒计时显示的时间
   */
  data: {
    time:'',
    setTime:new Date().getTime()
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    timeCounting:function(){
      let {time,setTime} = this.data;
      setTime = setTime-1000
      time = String(new Date(setTime))
       this.setData({
        time,
        setTime
       })
    }
  },
  ready:function(){
    console.log(new Date())
    setInterval(()=>{
      this.timeCounting()
    },1000)
  }
})
