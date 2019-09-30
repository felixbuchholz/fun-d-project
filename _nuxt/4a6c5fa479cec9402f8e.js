(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{178:function(t,e,n){var content=n(181);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("f36d2c3c",content,!0,{sourceMap:!1})},180:function(t,e,n){"use strict";var l=n(178);n.n(l).a},181:function(t,e,n){(t.exports=n(37)(!1)).push([t.i,"#intro{width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;background:#eee}#svg-background{fill:#fff}.line{fill:none;stroke:#6e6e6e;stroke-width:3}.line-thin{fill:none;stroke:#6e6e6e;stroke-width:1.5}.fill{fill:#6e6e6e}.background{fill:#fff}.cap-round{stroke-linecap:round}.both-round,.linejoin-round{stroke-linejoin:round}.both-round{stroke-linecap:round}text{fill:#6e6e6e;font-size:18px}.text-sign{font-size:12px;font-weight:900}.zero-opacity{opacity:0}.zero-scale{transform:scale(0)}",""])},182:function(t,e,n){"use strict";n.r(e);var l=n(102),r=n(179),o={name:"IntroAnimation",data:function(){return{width:1280,height:720,sound:{},tl:{}}},mounted:function(){this.sound=new r.Howl({src:["intro.m4a"]}),this.tl=l.a.timeline({easing:"easeOutExpo"}),this.tl.add({targets:"#first-question",opacity:1,duration:2e3,easing:"easeInOutSine"}),this.tl.add({targets:"#first-question",opacity:0,duration:2e3,easing:"easeInOutSine"},"+=700"),this.tl.add({targets:"#piggy",opacity:1,scale:1,duration:1500,easing:"easeInOutExpo"}),this.tl.add({targets:"#house",opacity:1,scale:1,duration:1500,easing:"easeInOutExpo"},"+=500"),this.tl.add({targets:"#nest-egg",opacity:1,scale:1,duration:1500,easing:"easeInOutExpo"},"+=3500"),this.tl.pause(),this.tl.pause()},methods:{play:function(){this.sound.play(),this.tl.play()},pause:function(){this.sound.pause(),this.tl.pause()}}},c=(n(180),n(24)),d={components:{IntroAnimationAnime:Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"intro"}},[n("button",{on:{click:t.play}},[t._v("Play!")]),t._v(" "),n("button",{on:{click:t.pause}},[t._v("Pause!")]),t._v(" "),n("svg",{attrs:{id:"intro-svg",width:t.width,height:t.height}},[n("rect",{attrs:{id:"svg-background",width:t.width,height:t.height}}),t._v(" "),n("g",{staticClass:"zero-opacity",attrs:{id:"first-question"}},[n("text",{attrs:{x:"50%",y:"50%","dominant-baseline":"middle","text-anchor":"middle"}},[t._v("\n          How do people prepare for the future?\n        ")])]),t._v(" "),n("g",{staticClass:"first-elements zero-opacity",style:"transform:translate("+t.width/4+"px, "+t.height/2+"px) scale(0)",attrs:{id:"piggy"}},[n("g",{staticClass:"center-in-g",style:"transform:translate(-45px, -31px)"},[n("circle",{staticClass:"line",attrs:{id:"piggy-coin",cx:"50",cy:"-12",r:"7"}}),t._v(" "),n("path",{staticClass:"line both-round",attrs:{id:"piggy-body",d:"M65.8,71.2H53.9l-0.7-4.7c-1.7,0.2-3.5,0.4-5.2,0.5v0c-3.1,0-6.1-0.1-9.2-0.6l-3.4,4.8H23.5v-9.8C12.8,55.8,4.4,46.4,0,35.1V23.3c3.7,0,7.3-0.5,10.5-2.4c1.9-1.2,3.3-2.8,4.9-4.4c1.7-1.8,3.5-3.4,5.5-4.8V0c2.3,0,4.6,0.1,6.8,0.7c2.9,0.8,5.6,2.4,7.8,4.5c12.9-3,27.5-0.6,38,7.7c8.9,7,14,18.2,10.9,29.5c-2,7.2-7,13.2-13.1,17.3L65.8,71.2z"}}),t._v(" "),n("path",{staticClass:"line both-round",attrs:{id:"piggy-eye",d:"M91.5,28.8c0,3.4-2.8,6.2-6.2,6.2"}}),t._v(" "),n("path",{staticClass:"line both-round",attrs:{id:"piggy-tail",d:"M18.4,24.3c0,2.4,1.9,4.3,4.3,4.3s4.3-1.9,4.3-4.3"}})])]),t._v(" "),n("g",{staticClass:"first-elements zero-opacity",style:"transform:translate("+t.width/4*2+"px, "+t.height/2+"px) scale(0)",attrs:{id:"house"}},[n("g",{staticClass:"center-in-g",style:"transform:translate(-46px, -46px)"},[n("polyline",{staticClass:"line",attrs:{points:"10.9,53.2 10.9,91.1 33.9,91.1 33.9,60.4 58.4,60.4 58.4,91.1 81.5,91.1 81.5,53.6 \t"}}),t._v(" "),n("path",{staticClass:"line",attrs:{d:"M81.5,53.5"}}),t._v(" "),n("polyline",{staticClass:"line",attrs:{points:"27.8,18.1 27.8,5.2 15.5,5.2 15.5,30.4 \t"}}),t._v(" "),n("path",{staticClass:"line",attrs:{d:"M2,44c-4.2,4.6-0.8,9.4,2.1,10.5c2.4,0.9,5,0.6,6.9-1.3l35-35l35.5,35.4c3,2.5,5.7,1.3,6.5,1c2.7-0.7,6.2-6,2.1-10.5L46,0L2,44z"}}),t._v(" "),n("line",{staticClass:"line",attrs:{x1:"5.1",y1:"91.1",x2:"87.2",y2:"91.1"}})])]),t._v(" "),n("g",{staticClass:"first-elements zero-opacity",style:"transform:translate("+t.width/4*3+"px, "+t.height/2+"px) scale(0)",attrs:{id:"nest-egg"}},[n("g",{staticClass:"center-in-g",style:"transform:translate(-41px, -46px) scale(1.2)"},[n("g",{attrs:{id:"#sign-ira"}},[n("path",{staticClass:"line-thin background",attrs:{d:"M79.7,82.9l-35.9,8.6c-0.9,0.2-1.8-0.3-2-1.2l-3.5-14.6c-0.2-0.9,0.3-1.8,1.2-2l35.9-8.6c0.9-0.2,1.8,0.3,2,1.2L81,80.9C81.2,81.8,80.6,82.7,79.7,82.9z"}}),t._v(" "),n("text",{staticClass:"text-sign",attrs:{transform:"matrix(0.9764 -0.2161 0.2161 0.9764 50.578 85.1423)"}},[t._v("\n              IRA\n            ")])]),t._v(" "),n("g",{attrs:{id:"sign-401k"}},[n("path",{staticClass:"line-thin background",attrs:{d:"M37.9,91.3L1.4,85.7c-0.9-0.1-1.5-1-1.4-1.9L2.3,69c0.1-0.9,1-1.5,1.9-1.4l36.5,5.6c0.9,0.1,1.5,1,1.4,1.9l-2.3,14.8C39.6,90.8,38.8,91.5,37.9,91.3z"}}),t._v(" "),n("text",{staticClass:"text-sign",attrs:{transform:"matrix(0.9857 0.1682 -0.1682 0.9857 6.3295 81.7638)"}},[t._v("\n              401k\n            ")])]),t._v(" "),n("polygon",{staticClass:"fill",attrs:{id:"nest",points:"40.9,54.6 45.6,56.5 51.9,55.6 54.1,58.1 60.7,58.4 60,61.1 65.6,62.5 62.2,64.8 65.6,67 60,68.5 60.7,71.1 \n\t54.1,71.4 51.9,73.9 45.6,73.1 40.9,74.9 36.2,73.1 29.9,73.9 27.6,71.4 21.1,71.1 21.7,68.5 16.2,67 19.6,64.8 16.2,62.5 \n\t21.7,61.1 21.1,58.4 27.6,58.1 29.9,55.6 36.2,56.5 "}}),t._v(" "),n("g",{attrs:{id:"egg"}},[n("path",{staticClass:"line background",attrs:{d:"M66,40.2c0,19.8-11.6,27.2-25.6,27.2S15,59.9,15,40.2S28.9,0.4,40.9,0.4S66,20.4,66,40.2z"}}),t._v(" "),n("path",{staticClass:"fill",attrs:{d:"M47.2,38.6c0-6.1-8.4-5.8-8.4-8.8c0-1.4,0.8-2,2.4-2c1.3,0,2.3,0.6,3.5,1.6l2.3-2.7c-1.2-1.3-2.7-2.3-4.7-2.6v-3.2h-3.1\n\t\tv3.3c-3,0.6-4.8,2.7-4.8,5.8c0,5.7,8.4,5.7,8.4,8.9c0,1.4-0.8,2.2-2.6,2.2c-1.5,0-2.9-0.6-4.5-1.9l-2,3.2c1.5,1.4,3.7,2.2,5.6,2.4\n\t\tV48h3.1v-3.3C45.5,44,47.2,41.7,47.2,38.6z"}})])])])])])}),[],!1,null,null,null).exports},data:function(){return{playing:!0}}},h=Object(c.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-container"},[e("IntroAnimationAnime"),this._v(" "),e("div",{attrs:{id:"drawing"}})],1)}),[],!1,null,null,null);e.default=h.exports}}]);