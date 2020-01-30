import Vue from 'vue'
import VueRouter from 'vue-router'
//一级
import Home from '../views/Home.vue'//首页
import Publish from '../views/Publish.vue'//发表
import Detail from '../views/Detail.vue'//详情
import Myhome from '../views/Myhome.vue';//我的
import Seting from '../views/Set.vue'//设置
import Setinfor from '../views/SetInfor.vue'//编辑信息
import Concern from '../views/Concenrn.vue'//我的关注
import Registry from '../views/Registry.vue'//注册
import Login from '../views/Login.vue'//登录
//二级
import HomePage from '../views/children/HomePage.vue'//首页
import Shopping from '../views/children/Shopping.vue';//商城
import Massage from '../views/children/Massage.vue';//消息
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/login'
  },{
    path:'/login',
    component:Login,
  },{
    path:'/registry',
    component:Registry
  },
  {
    path:'/home',
    component:Home,
    redirect:'/home/homepage',
    children:[{
      path:'homepage',
      component:HomePage
    },{
      path:'shopping',
      component:Shopping
    },{
      path:'massage',
      component:Massage
    }]
  },{
    path:'/myhome',
    component:Myhome
  },{
    path:'/publish',
    component:Publish
  },{
    path:'/detail',
    component:Detail
  },{
    path:'/set',
    component:Seting
  },{
    path:'/setinfor',
    component:Setinfor
  },{
    path:'/concern',
    component:Concern
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
