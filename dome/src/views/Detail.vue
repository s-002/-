<template>
  <div>
    <div class="contop">
      <span @click="back()"><van-icon name="arrow-left" /></span>
      <span>detail</span>
      <span></span>
    </div>
  </div>
</template>

<script lang='ts'>
// @ is an alias to /src
import {Vue,Component} from 'vue-property-decorator'
@Component({})
export default class Detail extends Vue  {
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
  
</style>
