var posts=["2024/04/28/b站自动评论脚本/","2024/04/29/p站爬虫脚本/","2024/07/15/npm图库测试/","2024/06/01/儿童节特别篇/","2024/07/19/【PC汉化】常轨脱离Creative凸/","2024/04/20/妃爱/","2024/05/12/妹系gal推荐/","2024/07/19/常磐華乃篇/","2024/06/26/抽卡记录/","2024/06/29/普拉娜篇/","2024/04/23/泉奈/","2024/07/25/测试/","2024/06/04/碧蓝档案/","2024/07/23/科拉莉篇/","2024/05/10/美图-1/","2024/05/05/美图/","2024/07/20/艾拉篇/","2024/07/19/锦明日海篇/","2024/07/27/ATRI/","2024/07/28/妹的圣域/","2024/07/28/天色天歌天籁音/","2024/07/28/她的圣域/","2024/07/28/千恋/","2024/07/28/纸上/","2024/07/28/自闭妹妹的/","2024/07/28/永不枯萎/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };