<template>
  <div>
    <div class="datadiv">
      <dl v-for="(item,index) in datalist" :key='index' @click="detail(item.id)" >
        <dd><img class="image" :src='item.url'></dd>
        <dt>
          <p>{{item.title}}</p>
          <p class="p">
            <img class="img" :src='item.image' alt="">
            <span class="s">{{item.nickname}}</span>
            <van-icon name="like-o" size='10' />
            <span>{{item.likes}}</span>
          </p>
        </dt>
      </dl>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {datalist1} from '../api/info'
@Component({
    
})
export default class HelloWorld extends Vue {
    datalist:Array<any>=[]
    created() {
        datalist1().then(res=>{
            // console.log(res)
            this.datalist=res.data.data
        })
    }
    detail(id:string):void{
      console.log(id)
      this.$router.push('/detail')
    }
}
</script>

<style scoped lang="scss">
  .datadiv{
    display: flex;
    flex-shrink: 0;
    flex-wrap:wrap;
    justify-content: space-around;
    
  }
  dl{
    width:45%;
    line-height: 20px;
    margin-bottom: 10px;
  }
  .image{
    width:100%;
    height: 150px;
  }
  span{
    font-size: 10px;
  }
  .p{
    width: 100%;
    display: flex;
  }
  .s{
    flex: 5;
  }
 .img{
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
</style>
