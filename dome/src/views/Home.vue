<template>
  <div class="home">
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o"><router-link to='/home/homepage'>首页</router-link></van-tabbar-item>
      <van-tabbar-item icon="search"><router-link to='/home/shopping'>商城</router-link></van-tabbar-item>
      <van-tabbar-item ><router-link to='/publish' class="release">+</router-link></van-tabbar-item>
      <van-tabbar-item icon="friends-o"><router-link to='/home/massage'>消息</router-link></van-tabbar-item>
      <van-tabbar-item icon="setting-o"><router-link to='/myhome'>我的</router-link></van-tabbar-item>
    </van-tabbar>
    
  </div>
</template>

<script lang='ts'>
// @ is an alias to /src
import {Vue,Component} from 'vue-property-decorator'
@Component({})
export default class Home extends Vue  {
  active:number=0
}
</script>
<style lang="scss">
  .release{
    display: block;
    width: 35px;
    height: 35px;
    border-radius: 10px;
    background: red;
    text-align: center;
    font-size: 25px;
    color: #fff;
    line-height: 35px;
    margin-bottom: 5px;
  }
</style>
