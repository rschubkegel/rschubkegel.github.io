import{_ as G}from"./TheLogo.39d73d5c.js";import{_ as R}from"./TableOfContents.88dd10e5.js";import{_ as X,a as z}from"./Eye.822bc286.js";import U from"./ContentRenderer.4742bbcd.js";import{f as Y,k as $,S as j,l as P,o as c,c as p,a as _,n as I,d as g,t as d,b as f,F as M,r as N,h as V,_ as W,g as w,m as Z,w as J,p as K,e as Q}from"./entry.2e2ab41f.js";import{u as y,q as x}from"./query.a4c09554.js";import"./ContentRendererMarkdown.vue.a1689398.js";import"./index.a6ef77ff.js";import"./preview.b2630c30.js";const DD=["id"],uD={class:"sticky-header"},eD=["href"],FD=["href"],CD={key:2},tD=["href"],nD=["href"],ED={key:2},sD=Y({__name:"HomeSection",props:{title:{},content:{},link:{},page:{}},emits:["enter","leave","enterBack","leaveBack"],setup(F,{emit:D}){const e=F;$.registerPlugin(j);const o=e.title.toLowerCase().replaceAll(" ","-");return P(()=>{j.create({trigger:`#${o}`,start:"top center+=200",end:"bottom center-=200",onEnter:()=>D("enter"),onLeave:()=>D("leave"),onEnterBack:()=>D("enterBack"),onLeaveBack:()=>D("leaveBack")})}),(u,C)=>{const t=X,n=z,E=U;return c(),p("section",{id:V(o)},[_("header",uD,[_("h2",{class:I({"pretty-header":u.link||u.page})},[u.link?(c(),p("a",{key:0,href:u.link,target:"_blank"},[g(d(u.title)+" ",1),f(t)],8,eD)):u.page?(c(),p("a",{key:1,href:u.page},[g(d(u.title)+" ",1),f(n)],8,FD)):(c(),p("span",CD,d(u.title),1))],2)]),(c(!0),p(M,null,N(u.content,s=>(c(),p("div",null,[_("h3",{class:I({"pretty-header":s.link||s.page})},[s.link?(c(),p("a",{key:0,href:s.link,target:"_blank"},[g(d(s.title)+" ",1),f(t)],8,tD)):s.page?(c(),p("a",{key:1,href:s.page},[g(d(s.title)+" ",1),f(n)],8,nD)):(c(),p("span",ED,d(s.title),1))],2),f(E,{value:s,excerpt:!!s.excerpt},null,8,["value","excerpt"])]))),256))],8,DD)}}});const oD=W(sD,[["__scopeId","data-v-dd0eae3b"]]);/*!
 * strings: 3.12.3
 * https://gsap.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var iD=/(?:^\s+|\s+$)/g,rD=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function q(F){var D=F.nodeType,e="";if(D===1||D===9||D===11){if(typeof F.textContent=="string")return F.textContent;for(F=F.firstChild;F;F=F.nextSibling)e+=q(F)}else if(D===3||D===4)return F.nodeValue;return e}function H(F,D,e,o){for(var u=F.firstChild,C=[],t;u;)u.nodeType===3?(t=(u.nodeValue+"").replace(/^\n+/g,""),o||(t=t.replace(/\s+/g," ")),C.push.apply(C,O(t,D,e,o))):(u.nodeName+"").toLowerCase()==="br"?C[C.length-1]+="<br>":C.push(u.outerHTML),u=u.nextSibling;for(t=C.length;t--;)C[t]==="&"&&C.splice(t,1,"&amp;");return C}function O(F,D,e,o){if(F+="",e&&(F=F.trim?F.trim():F.replace(iD,"")),D&&D!=="")return F.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(D);for(var u=[],C=F.length,t=0,n,E;t<C;t++)E=F.charAt(t),(E.charCodeAt(0)>=55296&&E.charCodeAt(0)<=56319||F.charCodeAt(t+1)>=65024&&F.charCodeAt(t+1)<=65039)&&(n=((F.substr(t,12).split(rD)||[])[1]||"").length||2,E=F.substr(t,n),u.emoji=1,t+=n-1),u.push(E===">"?"&gt;":E==="<"?"&lt;":o&&E===" "&&(F.charAt(t-1)===" "||F.charAt(t+1)===" ")?"&nbsp;":E);return u}/*!
 * TextPlugin 3.12.3
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var v,S,lD=function(){return v||typeof window<"u"&&(v=window.gsap)&&v.registerPlugin&&v},k={version:"3.12.3",name:"text",init:function(D,e,o){typeof e!="object"&&(e={value:e});var u=D.nodeName.toUpperCase(),C=this,t=e,n=t.newClass,E=t.oldClass,s=t.preserveSpaces,B=t.rtl,m=C.delimiter=e.delimiter||"",i=C.fillChar=e.fillChar||(e.padSpace?"&nbsp;":""),r,l,a,A,T,L,h,b;if(C.svg=D.getBBox&&(u==="TEXT"||u==="TSPAN"),!("innerHTML"in D)&&!C.svg)return!1;if(C.target=D,!("value"in e)){C.text=C.original=[""];return}for(a=H(D,m,!1,s),S||(S=document.createElement("div")),S.innerHTML=e.value,l=H(S,m,!1,s),C.from=o._from,(C.from||B)&&!(B&&C.from)&&(u=a,a=l,l=u),C.hasClass=!!(n||E),C.newClass=B?E:n,C.oldClass=B?n:E,u=a.length-l.length,r=u<0?a:l,u<0&&(u=-u);--u>-1;)r.push(i);if(e.type==="diff"){for(A=0,T=[],L=[],h="",u=0;u<l.length;u++)b=l[u],b===a[u]?h+=b:(T[A]=h+b,L[A++]=h+a[u],h="");l=T,a=L,h&&(l.push(h),a.push(h))}e.speed&&o.duration(Math.min(.05/e.speed*r.length,e.maxDuration||9999)),C.rtl=B,C.original=a,C.text=l,C._props.push("text")},render:function(D,e){D>1?D=1:D<0&&(D=0),e.from&&(D=1-D);var o=e.text,u=e.hasClass,C=e.newClass,t=e.oldClass,n=e.delimiter,E=e.target,s=e.fillChar,B=e.original,m=e.rtl,i=o.length,r=(m?1-D:D)*i+.5|0,l,a,A;u&&D?(l=C&&r,a=t&&r!==i,A=(l?"<span class='"+C+"'>":"")+o.slice(0,r).join(n)+(l?"</span>":"")+(a?"<span class='"+t+"'>":"")+n+B.slice(r).join(n)+(a?"</span>":"")):A=o.slice(0,r).join(n)+n+B.slice(r).join(n),e.svg?E.textContent=A:E.innerHTML=s==="&nbsp;"&&~A.indexOf("  ")?A.split("  ").join("&nbsp;&nbsp;"):A}};k.splitInnerHTML=H;k.emojiSafeSplit=O;k.getText=q;lD()&&v.registerPlugin(k);const aD=F=>(K("data-v-b069013a"),F=F(),Q(),F),cD={class:"logo-container"},pD=aD(()=>_("section",null,[_("h1"),_("p",null,[g(" I'm a web developer that is passionate about programming, art, and coffee. This site represents a small selection of my personal and professional work. Feel free to connect on "),_("a",{href:"https://github.com/rschubkegel/",target:"_blank"},"LinkedIn"),g(" for service inquiries or just to chat! ")])],-1)),BD=["href"],AD={__name:"index",async setup(F){let D,e;$.registerPlugin(j,k);const o=[{title:"Web Development",content:([D,e]=w(()=>y(()=>x("/projects/web").where({home:{$ne:!1}}).sort({date:-1}).find(),"$PslAyef5YX").then(({data:n})=>n)),D=await D,e(),D),page:"/web"},{title:"Game Development",content:([D,e]=w(()=>y(()=>x("/projects/games").where({home:{$ne:!1}}).sort({date:-1}).find(),"$6PO73qLRkI").then(({data:n})=>n)),D=await D,e(),D),page:"/games"},{title:"Visual Art",content:([D,e]=w(()=>y(()=>x("/projects/art").where({home:{$ne:!1}}).sort({date:-1}).find(),"$nn2AXZkwPl").then(({data:n})=>n)),D=await D,e(),D),page:"/art"},{title:"Music",content:([D,e]=w(()=>y(()=>x("/projects/music").where({home:{$ne:!1}}).sort({date:-1}).find(),"$tWBWWSl2bW").then(({data:n})=>n)),D=await D,e(),D)}],u=Z([]);function C(n){u.value.push(n)}function t(n){u.value=u.value.filter(E=>E!==n)}return P(()=>{$.matchMedia().add({isMobile:"(max-width: 42rem)",isDesktop:"(min-width: 42rem)"},n=>{const{isMobile:E}=n.conditions;$.to("h1",{duration:2.5,text:`${E?"Hi":"Hello world"}, I'm Rylan`,ease:"linear",scrollTrigger:"h1"})})}),(n,E)=>{const s=G,B=R,m=oD;return c(),p(M,null,[_("section",cD,[f(s,{id:"logo","taps-for-qr":3})]),pD,f(B,{"section-titles":o.map(({title:i})=>i),"visible-sections":V(u)},{default:J(({title:i,href:r,visible:l})=>[_("a",{href:r,class:I({visible:l})},d(i.replace("Development","Dev")),11,BD)]),_:1},8,["section-titles","visible-sections"]),(c(),p(M,null,N(o,i=>f(m,{key:i.title,title:i.title,content:i.content.value,page:i.page,onEnter:r=>C(i.title),onEnterBack:r=>C(i.title),onLeave:r=>t(i.title),onLeaveBack:r=>t(i.title)},null,8,["title","content","page","onEnter","onEnterBack","onLeave","onLeaveBack"])),64))],64)}}},wD=W(AD,[["__scopeId","data-v-b069013a"]]);export{wD as default};
