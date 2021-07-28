<template>
  <div class="p-auto-audio">
    <div class="p-audio-icon">
      <van-icon color="#007aff" size="24" name="pause-circle-o" @click="audioPause" v-show="!paused" />
      <van-icon color="#007aff" size="24" name="play-circle-o" @click="audioPlay" v-show="paused" />
    </div>
    <!--<van-button type="primary" @click="audioPause" v-show="!paused">暂停</van-button>
    <van-button type="primary" @click="audioPlay" v-show="paused">播放</van-button>-->
    <div class="p-progress">
      <van-progress :percentage="parseInt(progress.currentTime/295*100)" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      innerAudioContext: {},//音频对象
      paused: false,// 是否暂停
      progress: {
        currentTime: 0,
        allTime: 295
      }
    }
  },
  onLoad(option) { //此页面加载时将执行我   //option为object类型，会序列化上个页面传递的参数

  },
  onShow() { //此页面显示时将执行我

  },
  onReady() { //此页面初次在屏幕上渲染完成之后会执行我
    this.innerAudioContext = uni.createInnerAudioContext();

    this.innerAudioContext.autoplay = true;
    this.innerAudioContext.loop = true
    this.innerAudioContext.src = 'http://110.40.136.102:3307/assets/fenzhishi.mp3'
    this.innerAudioContext.onPlay(() => {
      console.log('开始播放');
    });
    this.innerAudioContext.onError((res) => {
      console.log(res.errMsg);
      console.log(res.errCode);
    });
    //音频播放进度更新事件
    this.innerAudioContext.onTimeUpdate((res) =>{
      /*console.log(42, this.innerAudioContext.duration)
      console.log(42, this.innerAudioContext.currentTime)*/
      this.progress.currentTime = parseInt(this.innerAudioContext.currentTime)
      //console.log(48, this.progress.currentTime)
    })
  },
  methods: {
    audioPlay() {
      this.innerAudioContext.play()
      this.paused = false
    },
    audioPause() {
      this.innerAudioContext.pause()
      this.paused = true
    }
  }
}
</script>

<style lang="scss" scoped>
.p-auto-audio {
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 999;
  background-color: white;
  bottom: 10px;
  left: 5%;
  width: 90%;
  border-radius: 30px;
  height: 72px;
  padding: 0 10px;

  .p-progress{
    width: 80%;
    height: 34px;
    margin-top: 17px;
    margin-left: 40px;
  }
}
</style>
<style lang="scss">
.p-audio-icon{
  padding: 6px;
}
</style>
