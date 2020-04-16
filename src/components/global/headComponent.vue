<template>
    <div class="p-head-component status_bar">
        <van-nav-bar :title="title"
                     custom-class="custom-head-nav"
                     title-class="custom-title"
        >
            <div class="custom-return" slot="left" v-if="isReturn==='true'">
                返回
            </div>
        </van-nav-bar>
    </div>
</template>
<script>
  export default {
    name: 'headComponent',
    props: ['title','isReturn'],
    data() {
      return {

      }
    },
    methods: {},
    components: {},
    onLoad() {
    }
  }
</script>
<style lang="scss" scoped>
    .p-head-component{
    }
</style>

<style lang="scss">
    .p-head-component{
        border: solid 1px black;
        .custom-head-nav{
             background-color: red!important;
            /*.van-nav-bar__left{
                color: white!important;
            }
            .van-nav-bar__title{
                color: white!important;
            }*/
         }
         .custom-title{
             color: white;
         }
        .custom-return{
            color: white;
        }
    }
</style>
