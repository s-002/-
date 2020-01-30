<template>
  <div>
    <div class="topdiv">
       <span @click="back()" class="icon" style="padding:3px"><van-icon name="arrow-left"  color="#1989fa" /></span>
       <span>编辑信息</span>
       <span></span>
    </div>
  
   <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script lang='ts'>
// @ is an alias to /src
import {Vue,Component,} from 'vue-property-decorator'
// import citydata from '../mock/data/data.js'
@Component({})
export default class SetInfor extends Vue  {
  // areaList:object=citydata
  searchResult:Array<any>=[]
   onSave() {
      // Toast('save');
    }
    onDelete() {
      // Toast('delete');
    }
    back(){
      console.log(this)
      this.$router.back()
    }
   
}
</script>
<style lang="scss">
  .topdiv{
    display: flex;
    justify-content: space-around;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  .icon{
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
</style>
