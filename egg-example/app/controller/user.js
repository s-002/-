'use strict';

const Controller = require('egg').Controller;
const jwt=require('jsonwebtoken')
class HomeController extends Controller {
  async login() {///登录
    const {username,password}=this.ctx.request.body
    let data=await this.service.user.login(username,password)
    console.log(data.data)
    let token=jwt.sign({...data.data},this.app.config.keys)
    if(data.code===1){
       this.ctx.body = {
        code:1,
        msg:'成功',
        data:token
      }
    }else{
      this.ctx.body={
        code:0,
        msg:'error',
      }
    }
  }
  async registry(){//注册
    const {username,password}=this.ctx.request.body
    let data=await this.service.user.registry(username,password)
    if(data.code===1){
      this.ctx.body={
        code:1,
        msg:'succer',
      }
    }else if(data.code===0){
      this.ctx.body={
        code:0,
        msg:'error'
      }
    }else if(data.code===2){
      this.ctx.body={
        code:2,
        msg:data.msg
      } 
    }
  }
  async datalist1(){//关注页数据
    let data=await this.service.user.datalist1()
    // console.log(data)
    this.ctx.body={
      data:{...data}
    }
  }
  async datalist2(){//发现页数据
    let data=await this.service.user.datalist2()
    // console.log(data)
    this.ctx.body={
      data:{...data}
    }
  }
  async masgdata(){
    let data=await this.service.user.masgdata()
    this.ctx.body={
      data:{...data}
    }
  }
  async concendata(){
    let data=await this.service.user.concendata()
    // console.log(data)
    this.ctx.body={
      data:data
    }
  }
}

module.exports = HomeController;
