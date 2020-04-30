<template>
    <div class="p-waterfall">
        <div class="p-col">
            <h2>col_1</h2>
            <van-image
                    @click="imgItemClick(i)"
                    :width="screenWidth/2"
                    :height="i.height"
                    fit="cover"
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
            <h2>col_2</h2>
            <van-image
                    :width="screenWidth/2"
                    :height="i.height"
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
    </div>
</template>
<script>
    import data from "../../assets/data/imgName";
    export default {
        name: '',
        components: {},
        data() {
            return {
                col_1: [],
                col_2: [],
                screenWidth: 0
            }
        },
        onReady() { //此页面初次在屏幕上渲染完成之后会执行我
            this.calcList()
            this.screenWidth = wx.getSystemInfoSync().windowWidth
        },
        methods: {
            calcList(){
                const length = data.length
                const middleLength = length/2
                //找到中间值，然后数据切割
                this.col_1 = JSON.parse(JSON.stringify(data.splice(0, middleLength)))
                this.col_2 = JSON.parse(JSON.stringify(data))
            },
            imgItemClick(img) {
                console.log(77, img)
            }
        },
        filters: {
            filterPath(i, url){
                return `${url}/testImg/${i}`
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
        .p-col{
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 1;
        }
    }
</style>
