import Request from '../until/request'
export const login=(data:any)=>Request.post('/login',data)//登录
export const registry=(data:any)=>Request.post('/registry',data)//注册