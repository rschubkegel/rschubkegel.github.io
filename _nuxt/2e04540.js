(window.webpackJsonp=window.webpackJsonp||[]).push([[11,4,5],{304:function(t,e,o){var content=o(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(45).default)("2a09abae",content,!0,{sourceMap:!1})},305:function(t,e,o){var content=o(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(45).default)("76a52847",content,!0,{sourceMap:!1})},306:function(t,e,o){"use strict";function n(t){var e=t.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:e,behavior:"smooth"})}o.d(e,"a",(function(){return n}))},312:function(t,e,o){"use strict";o(304)},313:function(t,e,o){var n=o(44)((function(i){return i[1]}));n.push([t.i,"[data-v-400e7744]:root{--color-fg-mild:#ebd9b7;--color-fg-bold:#fffaeb;--color-splash-mild:#4ea859;--color-splash-bold:#2be340;--color-bg-mild:#41443e;--color-bg-bold:#242622}@media(prefers-color-scheme:light){[data-v-400e7744]:root{--color-fg-mild:#4c5446;--color-fg-bold:#333631;--color-splash-mild:#55ab61;--color-splash-bold:#0e801b;--color-bg-mild:#d0cbc6;--color-bg-bold:#ecede8}}.show-lg[data-v-400e7744],.show-md[data-v-400e7744]{display:none}@media only screen and (min-width:500px){.show-md[data-v-400e7744]{display:inline;display:initial}.hide-md[data-v-400e7744]{display:none}}@media only screen and (min-width:900px){.show-lg[data-v-400e7744]{display:inline;display:initial}.hide-lg[data-v-400e7744]{display:none}}div[data-v-400e7744]{position:relative}img[data-v-400e7744],svg[data-v-400e7744]{bottom:0;height:100%;left:0;-o-object-fit:contain;object-fit:contain;position:absolute;right:0;top:0;transition:.5s;width:100%}img.hidden[data-v-400e7744],svg.hidden[data-v-400e7744]{opacity:0;scale:.25}path[data-v-400e7744]{fill:#4ea859;fill:var(--color-splash-mild)}",""]),n.locals={},t.exports=n},314:function(t,e,o){"use strict";o(305)},315:function(t,e,o){var n=o(44)((function(i){return i[1]}));n.push([t.i,"[data-v-7bdb6419]:root{--color-fg-mild:#ebd9b7;--color-fg-bold:#fffaeb;--color-splash-mild:#4ea859;--color-splash-bold:#2be340;--color-bg-mild:#41443e;--color-bg-bold:#242622}@media(prefers-color-scheme:light){[data-v-7bdb6419]:root{--color-fg-mild:#4c5446;--color-fg-bold:#333631;--color-splash-mild:#55ab61;--color-splash-bold:#0e801b;--color-bg-mild:#d0cbc6;--color-bg-bold:#ecede8}}.show-lg[data-v-7bdb6419],.show-md[data-v-7bdb6419]{display:none}@media only screen and (min-width:500px){.show-md[data-v-7bdb6419]{display:inline;display:initial}.hide-md[data-v-7bdb6419]{display:none}}@media only screen and (min-width:900px){.show-lg[data-v-7bdb6419]{display:inline;display:initial}.hide-lg[data-v-7bdb6419]{display:none}}.group-header-container[data-v-7bdb6419]{background-color:#242622;background-color:var(--color-bg-bold);border-bottom:1px solid;color:#ebd9b7;color:var(--color-fg-mild);padding:1rem 0;position:sticky;top:0;z-index:5}@media only screen and (min-width:500px){.group-header-container[data-v-7bdb6419]{flex-direction:row}}h2[data-v-7bdb6419]{font-weight:700;text-transform:uppercase;transition:.8s}h2[data-v-7bdb6419]:hover{cursor:pointer;text-shadow:-4px 4px #4ea859;text-shadow:-4px 4px var(--color-splash-mild);transition:.2s;translate:2px -2px}.page-link[data-v-7bdb6419]{font-weight:300;text-transform:lowercase}",""]),n.locals={},t.exports=n},324:function(t,e,o){var content=o(347);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(45).default)("dd2bcd08",content,!0,{sourceMap:!1})},328:function(t,e,o){"use strict";o.r(e);o(92),o(91);function n(t){window.navigator.clipboard.writeText(t).then((function(){return e="Copied to clipboard: ".concat(t),(n=document.createElement("div")).innerText=e,n.style.position="fixed",n.style.bottom=0,n.style.left=0,n.style.zIndex=1e3,n.style.fontSize="10pt",n.style.margin=".5em",n.style.padding=".5em",n.style.background="var(--color-bg-bold, transparent)",n.style.borderRadius=".5em",n.style.boxShadow=".1em .2em 1em #0002",null===(o=document.querySelector("main"))||void 0===o||o.appendChild(n),n.animate([{opacity:0}],{duration:1200,delay:1200}),void window.setTimeout((function(){var t;return null===(t=document.querySelector("main"))||void 0===t?void 0:t.removeChild(n)}),2400);var e,o,n})).catch((function(t){return console.log(t)}))}var r=o(306),l={props:{to:null},methods:{onHeaderClicked:function(t){Object(r.a)(t.target.parentElement.parentElement),n("".concat(window.location.href,"#").concat(t.target.id))}}},c=(o(314),o(34)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex col gap2"},[e("div",{staticClass:"group-header-container flex col center between gap1"},[e("h2",{on:{click:t.onHeaderClicked}},[t._t("name")],2),t._v(" "),t.to?e("nuxt-link",{staticClass:"page-link",attrs:{to:t.to}},[t._v("View Page")]):t._e()],1),t._v(" "),t._t("default")],2)}),[],!1,null,"7bdb6419",null);e.default=component.exports},329:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{TAP_THRESHOLD:4,taps:0}}},r=(o(312),o(34)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{on:{click:function(e){t.taps++}}},[e("svg",{class:{hidden:t.taps%t.TAP_THRESHOLD==t.TAP_THRESHOLD-1},attrs:{viewBox:"0 0 220 255",width:"220",height:"255"}},[e("g",{attrs:{transform:"translate(-65, 300) rotate(180) scale(-1.2, 1.2)"}},[e("g",{attrs:{transform:"translate(228.7894, 188.3042)"}},[e("path",{attrs:{d:"M 0,0 C 0,53 -18.473,57.086 -47.5,57.086 H -95 V 31.414 h 47.5 c 13.267,0 23.454,3.179 23.454,-31.414 0,-34.593 -11.518,-31.414 -23.454,-31.414 H -95 v -25.811 c 23,0 26.086,1.593 31.71,-9.193 l 37.43,-79.497 H 0 c 0,0 -40.045,83.967 -42.28,88.621 C -27.399,-57.294 0,-58.82 0,0"}})]),t._v(" "),e("g",{attrs:{transform:"translate(133.7903, 68.0303)"}},[e("path",{attrs:{d:"m 0,0 v -25.86 h -25.859 c -7.141,0 -13.601,2.9 -18.281,7.58 -4.679,4.679 -7.58,11.139 -7.58,18.28 v 48.54 c 0,7.89 -3.389,14.279 -11.28,14.279 H -74.58 V 88.68 H -63 c 7.891,0 11.28,6.39 11.28,14.28 v 48.54 c 0,7.14 2.901,13.6 7.58,18.28 4.68,4.68 11.14,7.58 18.281,7.58 V 88.68 c 0,-3.57 -1.451,-6.8 -3.79,-9.14 -2.341,-2.34 -5.571,-3.79 -9.141,-3.79 3.57,0 6.8,-1.45 9.141,-3.79 2.339,-2.34 3.79,-5.57 3.79,-9.141 V 14.14 C -25.859,6.33 -19.529,0 -11.72,0 Z"}})])])]),t._v(" "),e("img",{class:{hidden:t.taps%t.TAP_THRESHOLD!=t.TAP_THRESHOLD-1},attrs:{src:"/qr-code.png",alt:"QR code",width:"500",height:"500"}})])}),[],!1,null,"400e7744",null);e.default=component.exports},346:function(t,e,o){"use strict";o(324)},347:function(t,e,o){var n=o(44)((function(i){return i[1]}));n.push([t.i,"[data-v-0c9b5207]:root{--color-fg-mild:#ebd9b7;--color-fg-bold:#fffaeb;--color-splash-mild:#4ea859;--color-splash-bold:#2be340;--color-bg-mild:#41443e;--color-bg-bold:#242622}@media(prefers-color-scheme:light){[data-v-0c9b5207]:root{--color-fg-mild:#4c5446;--color-fg-bold:#333631;--color-splash-mild:#55ab61;--color-splash-bold:#0e801b;--color-bg-mild:#d0cbc6;--color-bg-bold:#ecede8}}.show-lg[data-v-0c9b5207],.show-md[data-v-0c9b5207]{display:none}@media only screen and (min-width:500px){.show-md[data-v-0c9b5207]{display:inline;display:initial}.hide-md[data-v-0c9b5207]{display:none}}@media only screen and (min-width:900px){.show-lg[data-v-0c9b5207]{display:inline;display:initial}.hide-lg[data-v-0c9b5207]{display:none}}#logo[data-v-0c9b5207]{height:8rem;width:8rem}@media only screen and (min-width:500px){#logo[data-v-0c9b5207]{height:10rem;width:10rem}}@media only screen and (min-width:900px){#logo[data-v-0c9b5207]{height:12rem;width:12rem}}[data-v-0c9b5207] .nuxt-content{display:flex;flex-direction:column;gap:1rem}h1[data-v-0c9b5207]{margin-bottom:.5em}hr[data-v-0c9b5207]{border-bottom:none;margin:1.5rem 0}hr[data-v-0c9b5207]:first-child{margin-top:2.5rem}hr[data-v-0c9b5207]:last-child{margin-bottom:0}.table-of-contents[data-v-0c9b5207]{display:flex;justify-content:space-between}.table-of-contents a[data-v-0c9b5207]{transition:.2s}.table-of-contents:hover a[data-v-0c9b5207]:not(:hover){opacity:.5}@media(max-width:576px){.table-of-contents[data-v-0c9b5207]{align-items:center;flex-direction:column;gap:.5rem}}",""]),n.locals={},t.exports=n},365:function(t,e,o){"use strict";o.r(e);o(47),o(15),o(37);var n=o(10);o(53),o(121),o(46),o(35),o(24),o(54),o(338),o(55),o(27),o(52);var r=o(306);var l=o(362),c=o(363);l.a.registerPlugin(c.a);var d={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$content,e.next=3,o("web/phoenix").fetch();case 3:return e.t0=e.sent,e.next=6,o("web/novella").fetch();case 6:return e.t1=e.sent,e.t2=[e.t0,e.t1],e.t3={name:"Web Dev",href:"/web",previews:e.t2},e.next=11,o("engr/mr-research").fetch();case 11:return e.t4=e.sent,e.next=14,o("engr/ar-glasses").fetch();case 14:return e.t5=e.sent,e.t6=[e.t4,e.t5],e.t7={name:"Engineering",previews:e.t6},e.next=19,o("games/summaries/out-of-thyme").fetch();case 19:return e.t8=e.sent,e.next=22,o("games/summaries/creature-games").fetch();case 22:return e.t9=e.sent,e.t10=[e.t8,e.t9],e.t11={name:"Games",href:"/games",previews:e.t10},e.next=27,o("art/painting").fetch();case 27:return e.t12=e.sent,e.next=30,o("art/typography").fetch();case 30:return e.t13=e.sent,e.t14=[e.t12,e.t13],e.t15={name:"Visual Art",href:"/art",previews:e.t14},e.next=35,o("music/shoobie").fetch();case 35:return e.t16=e.sent,e.next=38,o("music/newbkegels").fetch();case 38:return e.t17=e.sent,e.t18=[e.t16,e.t17],e.t19={name:"Music",previews:e.t18},e.t20=[e.t3,e.t7,e.t11,e.t15,e.t19],e.abrupt("return",{groups:e.t20});case 43:case"end":return e.stop()}}),e)})))()},data:function(){return{headers:[]}},mounted:function(){this.headers=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[1,2,3,4,5,6]).map((function(t){return"h".concat(t)})).join(", "),e=document.querySelectorAll(t);return e.forEach((function(header){var t=header.innerText.toLowerCase().replaceAll(" ","-");header.id=t})),Array.from(e).map((function(t){return{text:t.innerText,id:t.id,level:parseInt(t.localName.slice(-1))}}))}([2,3])},methods:{scrollToId:function(t){Object(r.a)(document.getElementById(t))},toCapsCase:function(t){return t.split(" ").map((function(s){return s.toLowerCase()})).map((function(s){return s.substring(0,1).toUpperCase()+s.substring(1)})).join(" ")}}},m=d,f=(o(346),o(34)),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"flex col gap2"},[e("div",{staticClass:"flex center"},[e("Logo",{attrs:{id:"logo"}})],1),t._v(" "),e("section",{staticClass:"flex col"},[e("h1",[t._v("Hello, I'm Rylan")]),t._v(" "),t._m(0),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"table-of-contents"},t._l(t.headers.filter((function(t){return 2===t.level})),(function(header){return e("a",{attrs:{href:"#".concat(header.id)},on:{click:function(e){return e.preventDefault(),t.scrollToId(header.id)}}},[t._v("\n        "+t._s(t.toCapsCase(header.text))+"\n      ")])})),0),t._v(" "),e("hr")]),t._v(" "),t._l(t.groups,(function(o){return e("PreviewGroup",{key:o.name,attrs:{to:o.href},scopedSlots:t._u([{key:"name",fn:function(){return[t._v(t._s(o.name))]},proxy:!0}],null,!0)},[t._v(" "),t._l(o.previews,(function(t,i){return e("nuxt-content",{key:i,attrs:{document:t}})}))],2)}))],2)}),[function(){var t=this,e=t._self._c;return e("p",[t._v("\n      I'm a web developer that is passionate about programming, art, and coffee.\n      This site represents a small selection of my personal and professional work.\n      Feel free to reach out via "),e("a",{attrs:{href:"mailto:rylanschubkegel@gmail.com",target:"_blank"}},[t._v("email")]),t._v("\n      or "),e("a",{attrs:{href:"https://github.com/rschubkegel/",target:"_blank"}},[t._v("LinkedIn")]),t._v(", I would love to connect!\n    ")])}],!1,null,"0c9b5207",null);e.default=component.exports;installComponents(component,{Logo:o(329).default,PreviewGroup:o(328).default})}}]);