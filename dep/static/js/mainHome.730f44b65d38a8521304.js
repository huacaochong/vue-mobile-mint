webpackJsonp([0],{182:function(t,i,e){function a(t){e(211)}var n=e(43)(e(194),e(238),a,null,null);t.exports=n.exports},194:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e(249),n=e.n(a);i.default={data:function(){return{menuList:n.a,topStatus:"",wrapperHeight:0,translate:0,moveTranslate:0,tipList:["烧烤","馒头","麻辣烫","粥","面包","芒果","拉面","酸辣粉","冒菜","蛋糕"],shopList:[1,1,1,2,3,4,5,6]}},components:{shopItem:function(t){e.e(9).then(function(){var i=[e(233)];t.apply(null,i)}.bind(this)).catch(e.oe)},affix:function(t){e.e(12).then(function(){var i=[e(232)];t.apply(null,i)}.bind(this)).catch(e.oe)},shopAds:function(t){e.e(10).then(function(){var i=[e(236)];t.apply(null,i)}.bind(this)).catch(e.oe)}},methods:{showSearch:function(){console.log(this.$parent),this.$store.commit("POP_STATUS",!0)}}}},199:function(t,i,e){i=t.exports=e(176)(!1),i.push([t.i,'.mainHome{font-weight:200}.mainHome .ivu-affix{z-index:2}.mainHome .mint-swipe-indicators .mint-swipe-indicator{width:10px;height:2px;border-radius:1px;opacity:1;background:gray}.mainHome .mint-swipe-indicators .is-active{background:#000}.mainHome .youhui{width:100%}.mainHome .youhui img{width:calc(100% - 20px);margin-left:10px}.mainHome .col_item{min-height:80px;text-align:center}.mainHome .col_item div{padding-top:5px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.mainHome .col_item div img{width:4.5rem;height:4.5rem;display:block}.mainHome .col_item span{text-align:center;color:#666}.mainHome .scrllX{-webkit-box-pack:left!important;-ms-flex-pack:left!important;justify-content:left!important;position:absolute;z-index:1;height:50px}.mainHome .scrllX a{text-align:left;font-family:-webkit-body;color:#fff;margin-right:2rem}.mainHome .search{position:-webkit-sticky;position:sticky;top:0}.mainHome .search :after{content:"";position:absolute;width:100%;height:0;left:0;background-image:-webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));background-image:linear-gradient(90deg,#0af,#0085ff)}.mainHome .input_box{height:4.5rem;color:gray}.mainHome .input_box,.mainHome .input_box .ipt_item{text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.mainHome .input_box .ipt_item{color:#000;background:#fff;width:100%;min-height:3rem;height:3rem;border-radius:2px}.mainHome .heard_card{height:auto;color:#fff;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.mainHome .heard_card .index_left{-ms-flex-align:center;align-items:center;height:3rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;width:60%}.mainHome .heard_card .index_left span{font-weight:600;margin:0 5px;max-width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mainHome .heard_card .index_right{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:right}.mainHome .heard_card .index_right img{height:28px;margin:0 5px}.mainHome .heard_card .index_right div h2,.mainHome .heard_card .index_right div p{font-size:1rem;margin:0;font-weight:400}',""])},211:function(t,i,e){var a=e(199);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(177)("247963a3",a,!0)},238:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",{staticClass:"mainHome has-footer"},[t._m(0),t._v(" "),e("section",{staticClass:"primary_bg input_box primary_flex_center search primary_mg",staticStyle:{height:"4rem","z-index":"10",top:"0px"},on:{click:t.showSearch}},[t._m(1)]),t._v(" "),e("section",{staticClass:"primary_bg primary_mg_hor",staticStyle:{height:"35px",overflow:"hidden"}},[e("div",{staticStyle:{"overflow-x":"scroll","white-space":"nowrap",position:"relative",height:"45px"}},[e("div",{staticClass:"input_box primary_flex_center scrllX fn-13",staticStyle:{padding:"0px",height:"35px"}},t._l(t.tipList,function(i){return e("a",{key:i},[t._v(t._s(i))])}))])]),t._v(" "),e("section",{staticClass:"primary_bg_white",staticStyle:{height:"175px"}},[e("mt-swipe",{attrs:{auto:0,height:"100%"}},t._l(t.menuList,function(i,a){return e("mt-swipe-item",{key:a},[e("div",{staticClass:"row"},t._l(i,function(i,a){return e("div",{key:a,staticClass:"col col_item"},[e("div",[e("lazy-image",{attrs:{src:i.img,placeholder:t.loaddingImg}})],1),t._v(" "),e("span",[t._v(t._s(i.text))])])}))])}))],1),t._v(" "),e("shopAds"),t._v(" "),e("section",{staticClass:"shopList primary_bg_white"},[t._m(2),t._v(" "),e("div",t._l(t.shopList,function(t,i){return e("shopItem",{key:i})}))]),t._v(" "),e("section",{staticClass:"footer_line"},[t._v("我是有底线了")])],1)},staticRenderFns:[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",{staticClass:"heard_card primary_mg primary_bg primary_flex_center fn-17"},[e("div",{staticClass:"index_left"},[e("img",{staticClass:"icon-18",attrs:{src:"static/img/icon/location.png"}}),t._v(" "),e("span",{staticClass:"fn-16"},[t._v("闵行区浦江第一中学(浦锦路西50米)")]),t._v(" "),e("img",{staticClass:"icon-10",attrs:{src:"static/img/icon/down-w.png"}})]),t._v(" "),e("aside",{staticClass:"index_right"},[e("div",[e("h2",[t._v("20.2°")]),t._v(" "),e("p",[t._v("晴夜")])]),t._v(" "),e("img",{attrs:{src:"static/img/dark.png",alt:""}})])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"ipt_item primary_flex_center fn-12"},[e("img",{staticClass:"icon-10",attrs:{src:"static/img/icon/search.png"}}),t._v("  搜索商家，商家名称\n    ")])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"primary_mg"},[e("span",{staticClass:"title "},[t._v("推荐商家")])])}]}},249:function(t,i){t.exports=[[{text:"美食",img:"static/img/item/1.jpeg",url:""},{text:"甜品美食",img:"static/img/item/2.jpeg",url:""},{text:"商超便利",img:"static/img/item/3.jpeg",url:""},{text:"预定早餐",img:"static/img/item/4.jpeg",url:""},{text:"果蔬生鲜",img:"static/img/item/5.jpeg",url:""},{text:"新店特惠",img:"static/img/item/6.jpeg",url:""},{text:"打牌比吃",img:"static/img/item/7.jpeg",url:""},{text:"帮买帮送",img:"static/img/item/8.jpeg",url:""}],[{text:"午餐",img:"static/img/item/9.jpeg",url:""},{text:"浪漫鲜花",img:"static/img/item/10.jpeg",url:""},{text:"医药健康",img:"static/img/item/11.jpeg",url:""},{text:"汉堡薯条",img:"static/img/item/12.jpeg",url:""},{text:"包子粥店",img:"static/img/item/13.jpeg",url:""},{text:"地方菜系",img:"static/img/item/14.jpeg",url:""},{text:"披萨意面",img:"static/img/item/15.jpeg",url:""},{text:"麻辣烫",img:"static/img/item/16.jpeg",url:""}]]}});