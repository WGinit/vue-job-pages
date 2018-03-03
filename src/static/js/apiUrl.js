// 2017-12-21 所有接口封装

let apiUrl = {
  getToken: "/V1/app/gettoken", //获取token
  recruit_lastjob: "/V1/index/recommend", //首页职位推荐(返回5个)
  recruit_alljob: "/V1/Advert/alljob", //所有职位（根据页码查询）
  recruit_lastperson: "/V1/index/seeker", //首页最新人才(返回前4个)
  recruit_allperson: "/V1/Advert/allseeker ", // 返回所有人才
  recruit_jobsearch: "/v1/search.php",  // 职位搜索
  banner: "/api/banner",
  indexList: "https://hn.algolia.com/api/v1/search_by_date?tags=story",
  picNews: "/listpicnews",
  news: "/api/news.php",
  team: "/api/team.php",
  hospital: "/api/hospital.php",
  story: "/api/story.php",
  getCode: "/getcode", //获取验证码
  Bili: "https://api.imjad.cn/bilibili/v2/", //B站接口
  BiliPic:
    "https://api.bilibili.com/x/web-interface/ranking?rid=1&day=3&jsonp=jsonp"
};

export default apiUrl;
