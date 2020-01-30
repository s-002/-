'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/login', controller.user.login);//登录
  router.post('/registry',controller.user.registry)//注册
  router.get('/datalist1',controller.user.datalist1)//关注页数据
  router.get('/datalist2',controller.user.datalist2)//关注页数据
  router.get('/masgdata',controller.user.masgdata)//消息页数据
  router.get('/concendata',controller.user.concendata)//我的关注
};
