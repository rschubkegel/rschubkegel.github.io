(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{211:function(e,t,n){var content=n(221);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(27).default)("9a12ade2",content,!0,{sourceMap:!1})},220:function(e,t,n){"use strict";n(211)},221:function(e,t,n){var r=n(26)(!1);r.push([e.i,".show-lg[data-v-e422db9c],.show-md[data-v-e422db9c]{display:none}@media only screen and (min-width:500px){.show-md[data-v-e422db9c]{display:unset}.hide-md[data-v-e422db9c]{display:none}}@media only screen and (min-width:900px){.show-lg[data-v-e422db9c]{display:unset}.hide-lg[data-v-e422db9c]{display:none}}.page-header-container[data-v-e422db9c]{color:rgba(255,250,235,.5);padding-bottom:1rem;border-bottom:1px solid}@media only screen and (min-width:500px){.page-header-container[data-v-e422db9c]{flex-direction:row}}h1[data-v-e422db9c]{text-transform:uppercase}#home-link[data-v-e422db9c]{font-weight:300;text-transform:lowercase}[data-v-e422db9c] .nuxt-content{display:flex;flex-direction:column;grid-gap:1rem;gap:1rem}",""]),e.exports=r},249:function(e,t,n){"use strict";n.r(t);var r=n(3),o=(n(38),{data:function(){return{title:"Games"}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,t.next=3,n("games").sortBy("sortOrder","asc").fetch();case 3:return r=t.sent,t.abrupt("return",{projects:r});case 5:case"end":return t.stop()}}),t)})))()}}),d=(n(220),n(21)),component=Object(d.a)(o,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"flex col gap2"},[t("div",{staticClass:"page-header-container flex col center between gap1"},[t("nuxt-link",{attrs:{id:"home-link",to:"/"}},[e._v("Return Home")]),e._v(" "),t("h1",[e._v(e._s(e.title))])],1),e._v(" "),e._l(e.projects,(function(p,i){return t("nuxt-content",{key:i,attrs:{document:p}})}))],2)}),[],!1,null,"e422db9c",null);t.default=component.exports}}]);