<template>
  <div>
    <div class="contop">
      <span @click="back()"><van-icon name="arrow-left" /></span>
      <span>我的关注</span>
      <span></span>
    </div>
      <div class="massage">
      <div class="divs" v-for="(item,index) in concendatas" :key="index">
        <van-image
          round
          fit="cover"
          width="2.5rem"
          height="2.5rem"
          :src="item.image"
          class="imgs"
        />
        <van-cell class="vancell" center :title="item.nickname" value='已关注' :label="'粉丝'+item.likes" />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
// @ is an alias to /src
import {Vue,Component} from 'vue-property-decorator'
import {concendata} from '../api/info'
@Component({})
export default class Concern extends Vue  {
  concendatas:Array<any>=[]
  created() {
    concendata().then(res=>{
      // console.log(res.data.data)
      this.concendatas=res.data.data
    })
  }
  back():void{
    this.$router.back()
  }
}
</script>
<style lang="scss" scoped>
  .contop{
    width: 100%;
    height: 25px;
    line-height: 25px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
  }
  .divs{
    width: 100%;
    height: 40px;
    background: #fff;
    padding-top: 10px;
    display: flex;
    .van-image__img{
      flex: 2;
      background: #fff;
    }
    .vancell{
      flex: 8;
    }
  }
</style>
