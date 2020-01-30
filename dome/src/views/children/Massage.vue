<template>
  <div class="box">
    <div class="masgtop">
      <span></span>
      <span>消息</span>
      <span><van-icon class="icon" name="chat-o" /></span>
    </div>
    <div class="tal">
      <p>开启推送通知，即时查收消息</p>
      <button>开启</button>
    </div>
    <div class="center">
      <dl>
        <dd style="background:red"><van-icon name="like" color="#fff"/></dd>
        <dt>赞和收藏</dt>
      </dl>
      <dl  @click="contents()">
        <dd style="background:blue"><van-icon name="manager" color="#fff"/></dd>
        <dt>新增关注</dt>
      </dl>
      <dl>
        <dd style="background:palegreen"><van-icon name="comment" color="#fff"/></dd>
        <dt>评论和@</dt>
      </dl>
    </div>
    <div class="massage">
      <div class="divs" v-for="(item,index) in masgdatas" :key="index">
        <van-image
          round
          fit="cover"
          width="2.5rem"
          height="2.5rem"
          :src="item.img"
          class="imgs"
        />
        <van-cell class="vancell" center :title="item.nickname" :label="item.massage" />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
// @ is an alias to /src
import {Vue,Component} from 'vue-property-decorator'
import {masgdata} from '../../api/info'
@Component({})
export default class Massage extends Vue  {
  masgdatas:Array<any>=[]
  created() {
    masgdata().then(res=>{
      // console.log(res.data.data)
      this.masgdatas=res.data.data
    })
  }
  contents():void{
    this.$router.push('/concern')
  }
}
</script>
<style lang="scss" scoped>
  .box{
    background: #eee;
  }
  .masgtop{
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 30px;
    line-height: 30px;
    background: #fff;
  }
  .tal{
    width: 100%;
    height: 25px;
    line-height: 25px;
    display: flex;
    justify-content: space-between;
    p{
      font-size: 13px;
    }
    button{
      height: 20px;
      line-height: 20px;
      font-size: 10px;
      margin-top: 3px;
    }
  }
  .center{
    width: 100%;
    height: 100px;
    line-height:40px;
    display: flex;
    padding-top: 15px;
    background: #fff;
    justify-content: space-around;
    margin-bottom: 17px;
    dl{
      dd{
        width: 40px;
        height: 40px;
        text-align: center;
        background: red;
        border-radius: 5px;
        margin: auto;
      }
    }
  }
  .img{
    width: 20px;
    height: 20px;
    border-radius: 50%;
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
