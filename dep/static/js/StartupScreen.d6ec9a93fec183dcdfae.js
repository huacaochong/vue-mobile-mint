webpackJsonp([0],{"6gHM":function(t,i,e){var s=e("7GUT");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("aef03b8a",s,!0)},"7GUT":function(t,i,e){i=t.exports=e("FZ+f")(!1),i.push([t.i,".swiper_base[data-v-9648dc74]{height:100vh;font-size:1.5rem}.swiper_base.first[data-v-9648dc74]{-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;background:-webkit-gradient(linear,left top,left bottom,from(#4170e3),to(#fff))}.swiper_base.first .one[data-v-9648dc74]{height:70%;padding-top:20%}.swiper_base.first .two[data-v-9648dc74]{height:30%;width:100%}.swiper_base.secend img[data-v-9648dc74]{width:100%;height:100%}.swiper_base.secend-22[data-v-9648dc74]{background:url("+e("Z4SS")+");background-size:100% 100%}.swiper_base.secend-22 .down[data-v-9648dc74]{position:absolute;width:100%;bottom:0;left:0}.swiper_base.third img[data-v-9648dc74]{width:100%;height:100%}.swiper_base .btn_open[data-v-9648dc74]{position:absolute;width:100px;bottom:60px;left:calc(50% - 50px)}",""])},"803E":function(t,i,e){t.exports=e.p+"static/img/1.png"},FVyc:function(t,i,e){function s(t){e("6gHM")}var a=e("VU/8")(e("XAn9"),e("bUyl"),s,"data-v-9648dc74",null);t.exports=a.exports},"Hq+s":function(t,i,e){t.exports=e.p+"static/img/two.png"},Ihsw:function(t,i,e){t.exports=e.p+"static/img/11.png"},Vswj:function(t,i,e){t.exports=e.p+"static/img/2.png"},XAn9:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={name:"startscreen",data:function(){var t=this;return{imgLoaded:!1,swiperOption:{preloadImages:!0,updateOnImagesReady:!0,direction:"horizontal",effect:"fade",height:window.height,pagination:{el:".swiper-pagination",dynamicBullets:!0},on:{init:function(){swiperAnimateCache(this)},slideChangeTransitionEnd:function(){swiperAnimate(this)},imagesReady:function(){console.log("页面图片加载完成，动画开始......."),t.imgLoaded=!0,swiperAnimate(t.$refs.mySwiper.swiper)}}}}},methods:{toMain:function(){this.$router.push({name:"baseHome"})}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},mounted:function(){console.log("this is current swiper instance object",this.swiper)}}},Z4SS:function(t,i,e){t.exports=e.p+"static/img/bg.png"},bUyl:function(t,i,e){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[t.imgLoaded?t._e():s("div",[t._v("\n\t\t\t\t加载中...\n\t\t\t")]),t._v(" "),s("div",{style:{opacity:t.imgLoaded?1:0}},[s("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[s("swiper-slide",{staticClass:"swiper_base first"},[s("img",{staticClass:"one ani",attrs:{src:e("803E"),"swiper-animate-effect":"fadeInDown","swiper-animate-duration":".8s","swiper-animate-delay":"0s"}}),t._v(" "),s("img",{staticClass:"two ani",attrs:{src:e("Vswj"),"swiper-animate-effect":"fadeInUpBig","swiper-animate-duration":".8s","swiper-animate-delay":"0s"}})]),t._v(" "),s("swiper-slide",{staticClass:"swiper_base secend-22"},[s("img",{staticClass:"ani",staticStyle:{"margin-top":"40%"},attrs:{"swiper-animate-effect":"fadeInLeft","swiper-animate-duration":".8s","swiper-animate-delay":"0s",src:e("gbDY")}}),t._v(" "),s("img",{staticClass:"down ani",attrs:{"swiper-animate-effect":"fadeInUp","swiper-animate-duration":".6s","swiper-animate-delay":"0s",src:e("Ihsw")}})]),t._v(" "),s("swiper-slide",{staticClass:"swiper_base secend"},[s("img",{attrs:{src:e("Hq+s"),alt:""}})]),t._v(" "),s("swiper-slide",{staticClass:"swiper_base third"},[s("img",{attrs:{src:e("zi4V"),alt:""}}),t._v(" "),s("mt-button",{staticClass:"btn_open",attrs:{plain:""},on:{click:t.toMain}},[t._v("立即体验")])],1),t._v(" "),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1)])},staticRenderFns:[]}},gbDY:function(t,i,e){t.exports=e.p+"static/img/22.png"},zi4V:function(t,i,e){t.exports=e.p+"static/img/third.jpeg"}});