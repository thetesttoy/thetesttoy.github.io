var posts=["2024/04/29/p站爬虫脚本/","2024/04/28/b站自动评论脚本/","2024/04/20/妃爱/","2024/06/17/与你一起的夏天/","2024/06/01/儿童节特别篇/","2024/05/12/妹系gal推荐/","2024/06/22/愛欲姉妹ロリータ/","2024/06/09/原神篇/","2024/05/01/智世子/","2024/05/24/少儿频道/","2024/04/23/泉奈/","2024/05/30/少儿频道-1/","2024/06/08/瑟瑟/","2024/06/04/碧蓝档案/","2024/05/05/美图/","2024/05/10/美图-1/","2024/06/26/抽卡记录/","2024/06/29/普拉娜篇/","2024/07/15/npm图库测试/","2024/07/15/柚子社/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };