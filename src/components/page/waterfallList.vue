<template>
    <div class="p-waterfall">
        <div class="p-col">
          <!--:height="i.height|filterHeight"-->
            <van-image
                    @click="imgItemClick(i, index, 'col_1')"
                    :width="screenWidth/2"
                    :height="i.height*((screenWidth/2)/i.width)"
                    fit="contain"
                    use-loading-slot
                    use-error-slot
                    lazy-load
                    v-for="(i,index) in col_1"
                    :src="i.name|filterPath($url)"
                    :key="i.name"
            >
                <van-loading
                        slot="loading"
                        type="circular"
                        size="20"
                        color="#1989fa"
                        vertical
                />
                <text slot="error">加载失败</text>
            </van-image>
        </div>
        <div class="p-col">
            <van-image
                    @click="imgItemClick(i, index, 'col_2')"
                    :width="screenWidth/2"
                    :height="i.height*((screenWidth/2)/i.width)"
                    fit="cover"
                    use-loading-slot
                    use-error-slot
                    lazy-load
                    v-for="(i,index) in col_2"
                    :src="i.name|filterPath($url)"
                    :key="i.name"
            >
                <van-loading
                        slot="loading"
                        type="circular"
                        size="20"
                        color="#1989fa"
                        vertical
                />
                <text slot="error">加载失败</text>
            </van-image>
        </div>

        <!--dialog-->
        <van-dialog
                use-slot
                :show="isShowDialog"
                show-cancel-button
                confirm-button-open-type="getUserInfo"
                @close="dialogClose"
        >
            <div class="p-dialog-content">
                <van-icon
                        custom-class="icon-left"
                        @click="cutClick('left')"
                        name="arrow-left"/>
                <img :src="currentImg.img.name|filterPath($url)"
                     :width="currentImg.img.width"
                     :height="currentImg.img.height"
                >
                <van-icon
                        @click="cutClick('right')"
                        custom-class="icon-right"
                        name="arrow"/>
            </div>
        </van-dialog>

    </div>
</template>
<script>
  import data from "../../assets/data/imgData.json"
  export default {
    name: '',
    components: {},
    data() {
      return {
        col_1: [],
        col_2: [],
        screenWidth: 0,
        isShowDialog: false,
        currentImg: {
          img: {},
          index: 0,
          type: 'col_1'
        }
      }
    },
    onReady() { //此页面初次在屏幕上渲染完成之后会执行我
      this.calcList()
      this.screenWidth = wx.getSystemInfoSync().windowWidth
      wx.showShareMenu({

        withShareTicket:true,

        menus:['shareAppMessage','shareTimeline']

      })
    },
    methods: {
      calcList() {
        const length = data.length
        const middleLength = length / 2
        //找到中间值，然后数据切割
        this.col_1 = JSON.parse(JSON.stringify(data.splice(0, middleLength)))
        this.col_2 = JSON.parse(JSON.stringify(data))
        this.initData() //增加索引字段
      },
      initData() {
        this.col_1.some((i, index) => {
          i.index = index
        })
        this.col_2.some((i, index) => {
          i.index = index
        })
      },
      imgItemClick(img, index, type) {
        this.currentImg = {img, index, type}
        const currentImgUrl = `${this.$url}/${this.currentImg.img.name}`
        console.log(119, currentImgUrl)
          wx.previewImage({
            current: currentImgUrl, // 当前显示图片的http链接
            urls: [currentImgUrl] // 需要预览的图片http链接列表
          })
        /*console.log(106, this.currentImg)
        this.isShowDialog = true*/

      },
      /**********************dialog***********************/
      dialogClose() {
        this.isShowDialog = false
      },
      cutClick(cate) {
        if (cate === 'left') {
          this.currentImg.index--
          this.currentImg.index <= 0
            ? this.currentImg.index = 0
            : ''
        } else if (cate === 'right') {
          this.currentImg.index++
          let len = 0
          if (this.currentImg.type === 'col_1') {
            len = this.col_1.length
          } else if (this.currentImg.type === 'col_2') {
            len = this.col_2.length
          }
          this.currentImg.index >= len - 1
            ? this.currentImg.index = len - 1
            : ''
        }
        let img = {}
        if (this.currentImg.type === 'col_1') {
          this.currentImg.img = this.col_1.find(i => {
            return i.index === this.currentImg.index
          })
        } else if (this.currentImg.type === 'col_2') {
          this.currentImg.img = this.col_2.find(i => {
            return i.index === this.currentImg.index
          })
        }
      }
    },
    filters: {
      filterPath(i, url) {
        if (i) {
          return `${url}/${i}`
        }
      },
      filterHeight(height){
        if(height>1000){
          return height/10
        }else
          return height
      }
    }
  }
</script>
<style lang="scss" scoped>
    .p-waterfall {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        width: 100vm;

        .p-col {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 1;
        }

        .p-dialog-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>

<style lang="scss">
    .p-waterfall {
        .p-dialog-content {
            position: relative;

            van-icon {
                color: #eeeeee;
                font-size: 42px;
                box-shadow: 2px 4px 20px 0 rgba(0, 0, 0, .1);
            }

            .icon-left {
                position: absolute;
                left: 0;
            }

            .icon-right {
                position: absolute;
                right: 0 !important;
            }
        }
    }
</style>
