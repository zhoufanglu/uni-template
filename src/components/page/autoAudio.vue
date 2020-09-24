<template>
  <div class="p-auto-audio">
    <van-button type="primary" @click="audioPause" v-show="!paused">暂停</van-button>
    <van-button type="primary" @click="audioPlay" v-show="paused">播放</van-button>
    <div class="p-progress">
      <van-progress :percentage="parseInt(progress.currentTime/146*100)" />
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
        allTime: 146
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
    this.innerAudioContext.src = 'http://lufangzhou.icu/music/missYou.mp3'
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
  .p-progress{
    width: 80%;
    height: 30px;
    margin: 0 auto;
  }
}
</style>
