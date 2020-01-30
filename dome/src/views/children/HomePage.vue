<template>
  <div>
   <van-tabs v-model="activeName">
      <van-tab title="关注" name="a"><van-icon class="icon" name="search" /><p><input type="text" name="" id="" placeholder="大家都在搜'滑雪'"/></p><DataList/></van-tab>
      <van-tab title="发现" name="b"><van-icon class="icon" name="search" /><p><input type="text" name="" id="" placeholder="大家都在搜'滑雪'"/></p><DataList2/></van-tab>
      
    </van-tabs>
  </div>
</template>

<script lang='ts'>
// @ is an alias to /src
import {Vue,Component} from 'vue-property-decorator'
import DataList from '../../components/DataList.vue'
import DataList2 from '../../components/Datalist2.vue'
@Component({
  components: {
    DataList,
    DataList2
  },
})
export default class HomePage extends Vue  {
  activeName:string='a'
}
</script>
<style lang="scss" scoped>
  input{
    height: 20px;
    border:0;
    outline: none;
    background: rgb(245, 245, 245);
    font-size: 13px;
    margin-left: 100px;
  }
  p{
    width: 350px;
    height: 25px;
    line-height: 25px;
    border: 1px solid #ccc;
    border-radius: 15px;
    margin:10px;
    background: rgb(245, 245, 245);
  }
  .icon{
    width: 20px;
    height: 10px;
    position: fixed;
    left:90px;
    top:60px;
  }
</style>