'use strict';

module.exports = appInfo => {
  const config = {};
  
  // 一定要配置  cookie need secret key to sign and encrypt
  config.keys = appInfo.name // package.json 里的 name

  // mysql 配置
  var mySqlConfig = require('./mysql')
  config.mysql = {
    client: mySqlConfig,
  }

  // 跨域头
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials: true,
  }
  
  // 跨域 新增，编辑时缺，会报错。
  config.security = {
    csrf: {
      enable: false,
    },
  }
  
  // 一页多少条
  config.PAGE_LIMIT = 10

  // 上传资源的路径
  const staticPath ='./app/public'//本地路径
  config.uploadResourcePath = {
    img:`${staticPath}/img`,
    music:`${staticPath}/music`,
    video:`${staticPath}/video`,
    file:`${staticPath}/file`,
  }

  config.jwtTokenSecret = 'demo' // token 的密钥
  config.publicApiKey = 'demo' // 公共api

  // jwt 的 url白名单
  config.whiteRouterList = [
    '/public',
    '/api/login',
    '/api/picture/upload',
  ]
  /**
   * some description
   * @member Config#test
   * @property {String} key - some description
   */
  config.test = {
    key: appInfo.name + '_123456',
  };

  return config;
};