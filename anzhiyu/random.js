var posts=["2024/10/10/10-10美图/","2024/10/16/10-16美图/","2024/10/01/10-1美图/","2024/10/20/10-20美图/","2024/10/05/10-5美图/","2024/10/08/10-8美图/","2024/10/09/10-9美图/","2024/11/01/11-1美图/","2024/11/02/11-2美图/","2024/08/30/8-30美图/","2024/09/16/9-16美图/","2024/09/18/9-17美图/","2024/09/26/9-26美图/","2024/09/06/9-6美图/","2024/09/23/9-23/","2024/07/27/ATRI/","2024/09/03/Ginka/","2024/09/03/CLANNAD/","2024/09/03/Harmonia/","2024/08/30/b站w-rid参数逆向/","2024/09/25/atk大月下/","2024/10/02/BA篇/","2024/04/28/b站自动评论脚本/","2024/09/03/Rewrite/","2024/07/15/npm图库测试/","2024/10/31/s4测试/","2024/10/02/p站作者爬取/","2024/04/29/p站爬虫脚本/","2024/07/19/【PC汉化】常轨脱离Creative凸/","2024/08/16/三千心世界/","2024/09/03/兰斯/","2024/09/03/交响乐之雨/","2024/09/03/五色浮影绽放于花之海洋/","2024/09/15/初音篇/","2024/08/02/勿忘草与永远的少女/","2024/08/02/冥契的牧神节/","2024/07/28/千恋/","2024/08/18/八卦恋爱/","2024/09/03/在世界与世界的正中央/","2024/07/28/天色天歌天籁音/","2024/07/29/同居恋人/","2024/07/28/她的圣域/","2024/09/24/好吃的雪糕😋😋😋/","2024/04/20/妃爱/","2024/09/03/妹同居/","2024/07/28/妹的圣域/","2024/08/16/寄宿之恋/","2024/05/12/妹系gal推荐/","2024/08/13/少女领域/","2024/07/29/学校的圣域/","2024/07/19/常磐華乃篇/","2024/09/24/幼刀篇/","2024/08/01/幼瞬篇/","2024/08/18/恋爱0公里/","2024/09/23/崩崩崩最良心的一集/","2024/08/02/异闻雪女/","2024/08/18/恋爱成双/","2024/08/18/恋爱？我就借走了哦/","2024/08/18/恋爱x决胜战/","2024/09/03/星之终途/","2024/09/02/星空列车与白的旅行/","2024/08/02/星恋/","2024/06/26/抽卡记录/","2024/04/23/泉奈/","2024/08/08/普罗米修斯篇/","2024/07/28/永不枯萎/","2024/08/05/水葬银货/","2024/07/25/测试/","2024/09/23/测试-1/","2024/10/14/玉足篇/","2024/08/02/献给曾是少女的你/","2024/09/03/爱上火车/","2024/08/02/理与迷宫的少女/","2024/09/19/瑞莫第八季/","2024/06/04/碧蓝档案/","2024/10/04/白猫篇/","2024/09/03/秋之回忆/","2024/10/18/纱雾篇/","2024/08/02/神明所创造的少女们/","2024/07/23/科拉莉篇/","2024/08/02/罪与罚的少女/","2024/05/10/美图-1/","2024/07/28/纸上/","2024/05/05/美图/","2024/07/20/艾拉篇/","2024/07/28/自闭妹妹的/","2024/09/03/苍之彼方的四重奏/","2024/09/03/茂伸奇谈/","2024/09/27/萝莉篇/","2024/09/27/萝莉篇1/","2024/09/27/萝莉篇2/","2024/09/27/萝莉篇3/","2024/08/18/转角之恋/","2024/07/28/蓝色恶魔篇/","2024/08/02/被诅咒的传说少女/","2024/10/13/风景篇/","2024/07/19/锦明日海篇/","2024/10/13/风景篇1/","2024/10/13/风景篇2/","2024/08/18/青春x好奇相伴的三角恋爱/","2024/10/29/风景篇3/","2024/11/06/11-6美图/","2024/11/09/芯幻刷赞脚本/","2024/11/10/随机瑟图测试/","2024/11/11/11-11瑟图/","2024/11/15/akt德莉莎测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };