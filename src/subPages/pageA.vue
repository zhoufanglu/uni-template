<template>
    <div class="content"
         :style="{'padding-top':wxBarHeight+'px'}"
    >
        <headComponent
                title="瀑布"
                isReturn="false"
        ></headComponent>
        <audioComponent continue :src="audio[now].src" :duration="audio[now].duration"
                   @prev="now = now === 0?audio.length-1:now-1"
                   @next="now = now === audio.length-1?0:now+1"></audioComponent>
        <div class="tab-box">
        </div>

        <van-tabs :active="tabIndex" @change="tabChange">
            <van-tab title="2016">
                <waterfallList></waterfallList>
            </van-tab>
            <van-tab title="2017">内容 2</van-tab>
            <van-tab title="2018">内容 3</van-tab>
            <van-tab title="2019">内容 4</van-tab>
        </van-tabs>
    </div>
</template>

<script>
  import waterfallList from "../components/page/waterfallList";

  export default {
    components: {waterfallList},
    data() {
      return {
        title: 'subPageA',
        wxBarHeight: 0,
        tabIndex: 0,

        audio: [{
          src: 'http://119.45.53.85/picModule/MP4/TowerOfGoddess.mp3',
          duration: 212
        }],
        now: 0
      }
    },
    onLoad(option) { //此页面加载时将执行我   //option为object类型，会序列化上个页面传递的参数
      this.calcWxBarHeight()
    },
    onShow() { //此页面显示时将执行我
      //console.log('onShow')
    },
    onReady() { //此页面初次在屏幕上渲染完成之后会执行我

    },
    methods: {
      calcWxBarHeight() {
        this.wxBarHeight = wx.getSystemInfoSync().statusBarHeight
      },
      tabChange(e) {
        this.tabIndex = e.mp.detail.index
      }
    }
  }
</script>

<style lang="scss" scoped>
    .content {
        text-align: center;

        .tab-box {

        }

        .logo {
            height: 200px;
            width: 200px;
            margin-top: 200px;
        }
    }

    .title {
        font-size: 36px;
        color: $stable;
    }
</style>
