<template>
  <div>
    
    <div class="entry">
        <h1>小红书</h1>
        <p><input type="text" v-model="username" placeholder="账户/手机号/微博"><van-icon name="orders-o"/></p>
        <p v-if="isShow"><input type="text" v-model="password" placeholder="密码"><span @click="types()"><van-icon name="eye-o"/></span> </p>
        <p v-else><input type='password' v-model="password" placeholder="密码"><span @click="types()"><van-icon name="closed-eye" /></span> </p>
        <button @click="btn(username,password)">登录</button><br>
        <a href="/registry">没有账户？点击注册</a>
    </div>
    
  </div>
</template>

<script lang='ts'>
// @ is an alias to /src
import {Vue,Component} from 'vue-property-decorator'
import {login} from '../api/login'
@Component({})
export default class Myhome extends Vue  {
    isShow:boolean=false
    username:string=''
    password:string=''
    types():void{
        this.isShow=!this.isShow
    }
    btn(username:string,password:string):void{
        // console.log(username,password)
        login({username,password}).then(res=>{
            // console.log(res)
            if(res.data.code===1){
                window.localStorage.setItem('token',res.data.data)
                this.$toast.success('登录成功');
                this.$router.push('/home')
            }else{
                this.$toast.fail('登录失败')
            }
        })
    }

}
</script>
<style lang="scss" scoped>
    h1{
        text-align: center;
        margin-bottom: 80px;
        color: red;
    }
    p{
        width: 250px;
        height: 30px;
        line-height: 30px;
        border:1px solid #ccc;
        margin-bottom: 20px;
        input{
            width: 200px;
            border: 0;
            outline: none;
        }
    }
    button{
        width: 100px;
        height: 25px;
        line-height: 25px;
        border-radius: 15px;
        background: red;
        border: 0;
        color: #fff;
    }
    a{
        font-size: 13px;
    }
    .entry{
        width: 250px;
        height: 300px;
        text-align: center;
        position:fixed;
        top:40%;
        left:45%;
        transform: translate(-40%,-45%)
    }
</style>
