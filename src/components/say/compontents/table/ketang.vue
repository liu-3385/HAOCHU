<template>
  <div class="all">
    <div class="all-list">
      <div class="list-first">
        <router-link to="/yanhuo" tag="a">
          <img :src="colument[0].img" alt />
          <div>
            <h5>{{colument[0].title}}</h5>
          </div>
          <div class="textf">{{colument[0].text}}</div>
          <div class="medal-text">{{colument[0].span}}</div>
        </router-link>
      </div>

      <div class="list-two">
        <a href>
          <img :src="colument[1].img" alt />
          <div>
            <h5>{{colument[1].title}}</h5>
          </div>
          <div class="textf">{{colument[1].text}}</div>
          <div class="medal-text">{{colument[1].span}}</div>
        </a>
      </div>

      <div class="list-three">
        <a href>
          <img :src="colument[2].img" alt />
          <div>
            <h5>{{colument[2].title}}</h5>
          </div>
          <div class="textf">{{colument[2].text}}</div>
          <div class="medal-text">{{colument[2].span}}</div>
        </a>
      </div>

      <div class="list-four">
        <a href>
          <img :src="colument[3].img" alt />
          <div>
            <h5>{{colument[3].title}}</h5>
          </div>
          <div class="textf">{{colument[3].text}}</div>
          <div class="medal-text">{{colument[3].span}}</div>
        </a>
      </div>

      <div class="list-five">
        <a href>
          <img :src="colument[4].img" alt />
          <div>
            <h5>{{colument[4].title}}</h5>
          </div>
          <div class="textf">{{colument[4].text}}</div>
          <div class="medal-text">{{colument[4].span}}</div>
        </a>
      </div>

      <div class="list-six">
        <a href>
          <img :src="colument[5].img" alt />
          <div>
            <h5>{{colument[5].title}}</h5>
          </div>
          <div class="textf">{{colument[5].text}}</div>
          <div class="medal-text">{{colument[5].span}}</div>
        </a>
      </div>

      <div class="list-seven">
        <a href>
          <img :src="colument[6].img" alt />
          <div>
            <h5>{{colument[6].title}}</h5>
          </div>
          <div class="textf">{{colument[6].text}}</div>
          <div class="medal-text">{{colument[6].span}}</div>
        </a>
      </div>

      <div class="list-eight">
        <a href>
          <img :src="colument[7].img" alt />
          <div>
            <h5>{{colument[7].title}}</h5>
          </div>
          <div class="textf">{{colument[7].text}}</div>
          <div class="medal-text">{{colument[7].span}}</div>
        </a>
      </div>

      <div class="list-nine">
        <a href>
          <img :src="colument[8].img" alt />
          <div>
            <h5>{{colument[8].title}}</h5>
          </div>
          <div class="textf">{{colument[8].text}}</div>
          <div class="medal-text">{{colument[8].span}}</div>
        </a>
      </div>

      <div class="list-ten">
        <a href>
          <img :src="colument[9].img" alt />
          <div>
            <h5>{{colument[9].title}}</h5>
          </div>
          <div class="textf">{{colument[9].text}}</div>
          <div class="medal-text">{{colument[9].span}}</div>
        </a>
      </div>
      <div class="foot">
        <div>
          <a class="foot-left">上一页</a>
          <span class="foot-con">1/49</span>
          <a class="foot-right">下一页</a>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import { yanhuo } from "./yanhuo";
export default {
  data() {
    
    return {
      colument: [
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20190702/15620442009812.jpg",
          title: "人间烟火气 夏日夜",
          text:
            "已经入夏，路边的大排档越来越少了，夏天除了空调啤酒之外，最重要的就是夜宵了叭。精选了10道夜宵~和大家分享大盘鸡新疆大盘鸡，可以说是...",
          span: "9619  阅读"
        },
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20181212/15445976459255.jpg",
          title: "手残党也能做的飘香",
          text:
            "粉蒸肉是一道著名的湘菜。这道菜糯而清香，酥而爽口，看着就能让人流口水，咬一口下去绝对是飘飘欲仙。五花肉与稻米的营养不容小觑，丰富的...                                                            ",
          span: "14911  阅读"
        },
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20181029/15408100707727.jpg",
          title: "秋天上火不用怕，喝",
          text:
            "·`. .`绿豆百合汤 ·`.·`▷主料：绿豆-200g▷辅料：百合-10g 冰糖-50g▲做法▼1.准备食材，绿豆、新鲜的百合、冰糖。食材很简单，菜场都...",
          span: "6398  阅读"
        },
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20181030/15408851107062.jpg",
          title: "刘强大师喜纳弟子，",
          text:
            "在漫长的历史长河中，中华美食文化始终立于民族之林，源远流长，未有断层，这离不开厨艺人在漫长岁月里的辛勤劳作和痴情坚守，依靠的就是“...",
          span: "8303  阅读"
        },
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20181029/15408100313881.jpg",
          title: "3款冬季人气黄金小",
          text:
            "有了这3款冬季人气黄金小食，暖过十条秋裤！这个冬天，小厨给你承包了~3款冬季人气黄金小食  点击观看▼3款冬季人气黄金小食▼①非油炸爆... ",
          span: "4626  阅读"
        },
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20181029/15408101059304.png",
          title: "丹桂飘香——现在用",
          text:
            "每年9~10月都是桂花飘香的季节，桂花的芳香，具有行气之功，能够疏肝理气、安定神经，还可以滋阴补肾、补元气、调整机能、调解内分泌、养胃...",
          span: "6885  阅读"
        },
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20181029/15408101053699.jpg",
          title: "香气浓郁的百香果和",
          text:
            "香气浓郁的百香果搭配酸爽醒目的柠檬，满满一杯维C，养颜、美容、抗衰老。从鼻到口瞬间就能抓住你的味蕾。跟大家推荐一个超简单的自制方法...",
          span: "6336  阅读"
        },
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20181029/15408101025179.jpg",
          title: "夏季预防白癜风要常",
          text:
            "夏季是白癜风的高发病季节，大约有80%的白癜风复发都是发生在春...",
          span: "6615  阅读"
        },
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20181120/1542696783698.png",
          title: "香干与肉的搭配，一",
          text:
            "·`. .`香干青椒炒肉片 ·`.·`▷主料：青椒-2个 豆腐干-180g▷辅料：五花肉-60g 生抽-3g 蚝油-3g 豆瓣酱-12g 豆豉-1.2g 蒜-7g 白糖-0.3g ...",
          span: "8777  阅读"
        },
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20181029/15408101002517.jpg",
          title: "茄子跟肉，有说不完",
          text:
            "蒸茄子既简单又有营养。茄子喜荤，与肉末一起蒸，美味不亚于烧茄子，还原汁原味，营养又健康。·`. .`肉末蒸茄子 ·`.·`▷主料：猪肉-50g ...",
          span: "4644  阅读"
        }
      ]
    };

  }
};
</script>

<style lang="less" scoped>
.all {
  width: 100%;
  height: 96px;
  display: flex;
  margin-left: 7px;

  .all-list {
    width: 96%;
    height: 100%;
    padding-top: 10px;
    // display: flex;
    // overflow: hidden;
    .list-first {
      width: 100%;
      height: 100%;
      position: relative;
      border-bottom: 1px solid #cccccc;
      img {
        width: 102px;
        height: 78px;
        float: left;
      }
      h5 {
        margin-top: 5px;
        font-size: 18px;
        color: black;
        margin-left: 25px;
        float: left;
      }
      .textf {
        height: 32px;
        position: absolute;
        top: 30px;
        left: 127px;
        overflow: hidden;
      }
      .medal-text {
        position: absolute;
        top: 65px;
        right: 20px;
      }
    }

    .list-two {
      margin-top: 10px;
      width: 100%;
      height: 100%;
      position: relative;
      border-bottom: 1px solid #cccccc;
      img {
        width: 102px;
        height: 78px;
        float: left;
      }
      h5 {
        margin-top: 5px;
        font-size: 18px;
        color: black;
        margin-left: 25px;
        float: left;
      }
      .textf {
        position: absolute;
        top: 30px;
        left: 127px;
        height: 32px;
        overflow: hidden;
      }
      .medal-text {
        position: absolute;
        top: 65px;
        right: 20px;
      }
    }

    .list-three {
      margin-top: 10px;
      width: 100%;
      height: 100%;
      position: relative;
      border-bottom: 1px solid #cccccc;
      img {
        width: 102px;
        height: 78px;
        float: left;
      }
      h5 {
        margin-top: 5px;
        font-size: 18px;
        color: black;
        margin-left: 25px;
        float: left;
      }
      .textf {
        position: absolute;
        top: 30px;
        left: 127px;
        height: 32px;
        overflow: hidden;
      }
      .medal-text {
        position: absolute;
        top: 65px;
        right: 20px;
      }
    }
    .list-four {
      margin-top: 10px;
      width: 100%;
      height: 100%;
      position: relative;
      border-bottom: 1px solid #cccccc;
      img {
        width: 102px;
        height: 78px;
        float: left;
      }
      h5 {
        margin-top: 5px;
        font-size: 18px;
        color: black;
        margin-left: 25px;
        float: left;
      }
      .textf {
        position: absolute;
        top: 30px;
        left: 127px;
        height: 32px;
        overflow: hidden;
      }
      .medal-text {
        position: absolute;
        top: 65px;
        right: 20px;
      }
    }
    .list-five {
      margin-top: 10px;
      width: 100%;
      height: 100%;
      position: relative;
      border-bottom: 1px solid #cccccc;
      img {
        width: 102px;
        height: 78px;
        float: left;
      }
      h5 {
        margin-top: 5px;
        font-size: 18px;
        color: black;
        margin-left: 25px;
        float: left;
      }
      .textf {
        position: absolute;
        top: 30px;
        left: 127px;
        height: 32px;
        overflow: hidden;
      }
      .medal-text {
        position: absolute;
        top: 65px;
        right: 20px;
      }
    }

    .list-six {
      margin-top: 10px;
      width: 100%;
      height: 100%;
      position: relative;
      border-bottom: 1px solid #cccccc;
      //   margin-bottom: 50px;
      img {
        width: 102px;
        height: 78px;
        float: left;
      }
      h5 {
        margin-top: 5px;
        font-size: 18px;
        color: black;
        margin-left: 25px;
        float: left;
      }
      .textf {
        position: absolute;
        top: 30px;
        left: 127px;
        height: 32px;
        overflow: hidden;
      }
      .medal-text {
        position: absolute;
        top: 65px;
        right: 20px;
      }
    }

    .list-seven {
      margin-top: 10px;
      width: 100%;
      height: 100%;
      position: relative;
      border-bottom: 1px solid #cccccc;
      //   margin-bottom: 50px;
      img {
        width: 102px;
        height: 78px;
        float: left;
      }
      h5 {
        margin-top: 5px;
        font-size: 18px;
        color: black;
        margin-left: 25px;
        float: left;
      }
      .textf {
        position: absolute;
        top: 30px;
        left: 127px;
        height: 32px;
        overflow: hidden;
      }
      .medal-text {
        position: absolute;
        top: 65px;
        right: 20px;
      }
    }

    .list-eight {
      margin-top: 10px;
      width: 100%;
      height: 100%;
      position: relative;
      border-bottom: 1px solid #cccccc;
      //   margin-bottom: 50px;
      img {
        width: 102px;
        height: 78px;
        float: left;
      }
      h5 {
        margin-top: 5px;
        font-size: 18px;
        color: black;
        margin-left: 25px;
        float: left;
      }
      .textf {
        position: absolute;
        top: 30px;
        left: 127px;
        height: 32px;
        overflow: hidden;
      }
      .medal-text {
        position: absolute;
        top: 65px;
        right: 20px;
      }
    }
    .list-nine {
      margin-top: 10px;
      width: 100%;
      height: 100%;
      position: relative;
      border-bottom: 1px solid #cccccc;
      //   margin-bottom: 50px;
      img {
        width: 102px;
        height: 78px;
        float: left;
      }
      h5 {
        margin-top: 5px;
        font-size: 18px;
        color: black;
        margin-left: 25px;
        float: left;
      }
      .textf {
        position: absolute;
        top: 30px;
        left: 127px;
        height: 32px;
        overflow: hidden;
      }
      .medal-text {
        position: absolute;
        top: 65px;
        right: 20px;
      }
    }

    .list-ten {
      margin-top: 10px;
      width: 100%;
      height: 100%;
      position: relative;
      border-bottom: 1px solid #cccccc;
      margin-bottom: 60px;
      img {
        width: 102px;
        height: 78px;
        float: left;
      }
      h5 {
        margin-top: 5px;
        font-size: 18px;
        color: black;
        margin-left: 25px;
        float: left;
      }
      .textf {
        position: absolute;
        top: 30px;
        left: 127px;
        height: 32px;
        overflow: hidden;
      }
      .medal-text {
        position: absolute;
        top: 65px;
        right: 20px;
      }
    }
  }

  .foot {
    width: 100%;
    height: 100px;
    text-align: center;
    margin-bottom: 50px;
    .foot-left {
      width: 30%;
      float: left;
      margin-left: 10px;
      height: 40px;
      line-height: 40px;
      border: 1px solid orange;
      font-size: 18px;
    }
    .foot-con {
      width: 30%;
      float: left;
      height: 40px;
      line-height: 40px;
      font-size: 18px;
    }
    .foot-right {
      width: 30%;
      margin-right: 10px;
      float: right;
      height: 40px;
      line-height: 40px;
      font-size: 18px;
      background-color: orange;
      color: white;
    }
  }
}
</style>