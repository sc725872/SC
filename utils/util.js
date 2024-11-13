let news = [
  {
    id: '0',
    title: '王毅在圣彼得堡时，布林肯在基辅',
    poster: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F0914%2F80722048j00sjs5au001id000u000k0m.jpg&thumbnail=750x2147483647&quality=75&type=webp',
    content: '据外交部网站披露的信息来统计，王毅于9月10日至12日先后会见了多国高官，其中，9月12日，他与俄罗斯总统普京会面。与此同时，美国国务卿布林肯与英国外交发展大臣拉米则于8月11日抵达乌克兰首都基辅。英美外长共同访问乌克兰，这真是多年未见的情况啊！在基辅，布林肯与拉米不仅与乌克兰新任外长西比加会晤并召开新闻发布会，也会见了乌克兰总统泽连斯基。在俄乌冲突并没有明确指向和平之际，中俄高级外交官在几乎相同的时段，分别访问俄、乌两国，这意味着什么呢？',
    add_date: '2024-09-14 09:53:30',
  },
  {
    id: '1',
    title: '索赔22万！女子超市买鱼被刺八级伤残，法院判了→',
    poster: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F0914%2F4ff429ddj00sjs0wv00rrd000u000hqg.jpg&thumbnail=750x2147483647&quality=75&type=webp',
    content: '王女士自己动手往袋子里装鱼。我们可以在超市的监控里看到，王女士在生鲜鱼货的水箱前选购鱼，在把鱼装进袋子时，发生了意外，跳动的鱼刺伤了王女士的手掌。王女士被送医抢救，诊断为创伤弧菌感染。法院经审理认为，王女士作为消费者前往超市购买商品，享有人身安全不受损害的权利，其有权要求作为经营者的超市提供的商品和服务符合保障人身安全的要求。被告委托诉讼代理人认为王女士自身患有多种疾病，她在购物时未尽到注意义务。',
    add_date: '2024-09-14 09:53:30',
  },
  {
    id: '2',
    title: '"中国对加拿大和欧盟不一样，开始奏效了"',
    poster: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F0914%2F26f60b76j00sjsdsj001qd000hs00dcg.jpg&thumbnail=750x2147483647&quality=75&type=webp',
    content: '路透社9月13日文章分析称，中方显然在关税问题上对与欧盟谈判持开放态度，在做好反击准备的同时，有针对性地与个别欧盟国家开展一对一协商，这一策略似乎正在取得成效，比如刚刚结束访华的西班牙首相桑切斯就敦促欧盟重新考虑关税决定。与此不同的是，中方甚至未事先发出警告便对加拿大采取反制措施，直接对加方施以“震慑”。报道说，尽管面临着美国方面施加的关税压力，中国并不希望与欧盟爆发贸易冲突，但中方已明确表示，如果欧盟对中国电动汽车加征最高35.3%的关税，中方将作出反击。随着投票临近，中国采取了“胡萝卜加大棒”的应对策略，一方面发出反击警告，另一方面也在同欧盟主要国家就商业交易与投资事宜开展一对一协商。',
    add_date: '2024-09-14 09:53:30',
  }
];
//中括号里的新闻内容即上一小节前期准备的新闻数据，此处不再重复给出
/** 获取全部新闻数据的接口，在主页进行新闻条目的显示 */
function getNewsList() {
  let list = [];
  for (var i = 0; i < news.length; i++) {
    let obj = {};
    obj.id = news[i].id;
    obj.poster = news[i].poster;
    obj.add_date = news[i].add_date;
    obj.title = news[i].title;
    list.push(obj);
  }
  return list;
}

function getNewsDetail(newsID) {
  let msg = {
    code: '404',
    news: {}
  }
  for (var i = 0; i < news.length; i++) {
    if (newsID == news[i].id) { //id相同,更新新闻
      msg.code = '200';
      msg.news = news[i];
      break;
    }
  }
  return msg;
}
module.exports = {
  getNewsList,
  getNewsDetail,
  news
}