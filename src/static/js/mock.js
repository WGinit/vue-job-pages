const Mock = require("mockjs")

// 获取 mock.Random 对象
const Random = Mock.Random

// mock数据
// banner图
const banner = function(n){
  let banners = [];

  for(let i = 0; i< n; i++){
    let bannerObject = {
      url: Random.url(),
      img: Random.dataImage("375x500", "banner图"),
      title: Random.csentence(2,10),
      fallbackImg: Random.dataImage("375x500",'背景图')
    };
    banners.push(bannerObject);
  }

  return {
    banners: banners
  };
}

// 新闻图文列表
const listPicNews = function(n) {
  let lists = [];

  for (let i = 0; i < n; i++) {
    let newArticleObject = {
      url: Random.url(),
      title: Random.csentence(5, 30), // Random.csentence( min, max )

      desc: Random.csentence(50,100),

      pic: Random.dataImage("130x95", "新闻图片"), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码

      author: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名

      date: Random.date() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    };

    lists.push(newArticleObject);
  }
  return {
    lists: lists
  };
};

// 新闻列表
const listNews = function(n) {
  let articles = [];

  for (let i = 0; i < n; i++) {
    let newArticleObject = {
      url: Random.url(),
      title: Random.csentence(5, 30), // Random.csentence( min, max )

      desc: Random.csentence(50,100),

      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名

      date: Random.date() + " " + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    };

    articles.push(newArticleObject);
  }
  return {
    lists: articles
  };
};

// 验证码
const phoneCode = function(n){
  return Random.integer(0, n);
}


Mock.mock("/banner", "get", banner(3));
Mock.mock("/listpicnews", "get", listPicNews(10));
Mock.mock("/listnews", "get", listNews(5));
Mock.mock('/getcode','post',phoneCode(1000000));
