<template>
  <div>
    <div class="contop">
      <span @click="back()"><van-icon name="arrow-left" /></span>
      <span>发表</span>
      <span></span>
    </div>
    <div>
      <van-field
        v-model="message"
        rows="2"
        autosize
        label="发表"
        type="textarea"
        maxlength="50"
        placeholder="请输入留言"
        show-word-limit
      />
      <p style="color:#ccc;fontSize:13px;">限制3张</p>
      <van-uploader
        v-model="fileList"
        multiple
        :max-count="3"
      />
      <p><van-tag round type="danger" size="large">发表</van-tag></p>
    </div>
  </div>
</template>

<script lang='ts'>
// @ is an alias to /src
import {Vue,Component} from 'vue-property-decorator'
@Component({})
export default class Publish extends Vue  {
  message:any=''
  fileList:Array<any>=[
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' }
      ]
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
  .van-tag--round{
    float: right;
  }
</style>
