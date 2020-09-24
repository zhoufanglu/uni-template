<template>
    <div class="content">
        <headComponent
                title="图片展示"
                isReturn="false"
        ></headComponent>
        <autoAudio></autoAudio>
        <!--<audioComponent continue :src="audio[now].src" :duration="audio[now].duration"
                   @prev="now = now === 0?audio.length-1:now-1"
                   @next="now = now === audio.length-1?0:now+1"
        ></audioComponent>-->
      <!--<audioComponent
          autoplay continue :src="audio[now]" :duration="audio[now].duration" @prev="now = now === 0?audio.length-1:now-1" @next="now = now === audio.length-1?0:now+1">
      </audioComponent>-->

      <div class="tab-box">
        </div>

        <!--<van-tabs :active="tabIndex" @change="tabChange">
            <van-tab title="2016">

            </van-tab>
            <van-tab title="2017">内容 2</van-tab>
            <van-tab title="2018">内容 3</van-tab>
            <van-tab title="2019">内容 4</van-tab>
        </van-tabs>-->
      <waterfallList></waterfallList>
    </div>
</template>

<script>
  import waterfallList from "../components/page/waterfallList";
  import autoAudio from "@/components/page/autoAudio";
  export default {
    components: {waterfallList, autoAudio},
    data() {
      return {
        title: 'subPageA',
        wxBarHeight: 0,
        tabIndex: 0,


        audio: [
          'http://xiaozhang.php-cli.cn/music-1.mp3',
          'http://xiaozhang.php-cli.cn/music-2.mp3',
          'http://xiaozhang.php-cli.cn/music-3.mp3',
          'http://xiaozhang.php-cli.cn/music-4.mp3',
          'http://xiaozhang.php-cli.cn/music-5.mp3'
        ],
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
