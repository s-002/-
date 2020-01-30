const Service=require('egg').Service
module.exports=class extends Service{
    async login(username,password){//登录
        let data=await this.app.mysql.get('userinfo',{//查找用户
            username,
            password
        })
        if(data){
            return {
                code:1,
                msg:'success',
                data
            }
        }else{
            return{
                code:0,
                msg:'error'
            }
        }
    }
    async registry(username,password){
        let userinfos=await this.app.mysql.get('userinfo',{//检验用户是否存在
            username,
            password
        })
        if(userinfos){//存在
            return {
                code:2,
                msg:'该用户已存在'
            }
        }else{//不存在
            let data=await this.app.mysql.insert('userinfo',{//添加
                username,
                password,
            })
            if(data){//添加成功
                return {
                    code:1,
                    msg:'succer'
                }
            }else{//添加失败
                return {
                    code:0,
                    msg:'error'
                }
            }
        } 
    }
    async datalist1(){//关注页数据
        let data=await this.app.mysql.select('datalist',{
            where:{
                flage:'true'
            }
        })
        if(data){
            return {
                ...data
            }
        }
        // console.log(data)
    }
    async datalist2(){//发现页数据
        let data=await this.app.mysql.select('datalist',{
            where:{
                flage:'false'
            }
        })
        if(data){
            return {
                ...data
            }
        }
        // console.log(data)
    }
    async masgdata(){
        let data=await this.app.mysql.select('massages')
        if(data){
            return {
                ...data
            }
        }
    }
    async concendata(){
        let data= await this.app.mysql.select('datalist',{
            where:{
                flage:'true'
            }
        })
        if(data){
            return {
                ...data
            }
        }
    }
}