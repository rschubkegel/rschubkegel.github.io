import{_ as $}from"./LeftArrow.28354732.js";import{_ as L}from"./TableOfContents.873d4ab2.js";import{_ as b,a as E}from"./Eye.ab833523.js";import C from"./ContentRenderer.458c9342.js";import{f as B,k as I,S as h,l as P,o,c as a,a as s,n as j,d as k,t as l,b as i,h as S,_ as y,m as N,i as f,j as V,F as g,r as w,p as T,e as x}from"./entry.3bfef96e.js";const A=["id"],F={class:"sticky-header"},R=["href"],z=["href"],D={key:2},M=B({__name:"ProjectSection",props:{title:{},content:{}},emits:["enter","leave","enterBack","leaveBack"],setup(c,{emit:t}){const _=c;I.registerPlugin(h);const r=_.title.toLowerCase().replaceAll(" ","-");return P(()=>{h.create({trigger:`#${r}`,start:"top center+=200",end:"bottom center-=200",onEnter:()=>t("enter"),onLeave:()=>t("leave"),onEnterBack:()=>t("enterBack"),onLeaveBack:()=>t("leaveBack")})}),(e,p)=>{const d=b,u=E,m=C;return o(),a("section",{id:S(r)},[s("header",F,[s("h2",{class:j({"pretty-header":e.content.link||e.content.page})},[e.content.link?(o(),a("a",{key:0,href:e.content.link,target:"_blank"},[k(l(e.content.title)+" ",1),i(d)],8,R)):e.content.page?(o(),a("a",{key:1,href:e.content.page},[k(l(e.content.title)+" ",1),i(u)],8,z)):(o(),a("span",D,l(e.title),1))],2)]),i(m,{value:e.content,excerpt:!!e.content.excerpt},null,8,["value","excerpt"])],8,A)}}});const O=y(M,[["__scopeId","data-v-fb9ce126"]]),W=c=>(T("data-v-1d39cde8"),c=c(),x(),c),q={href:"/"},G=W(()=>s("em",null,"return home",-1)),H=B({__name:"ProjectPage",props:{title:{},content:{}},setup(c){const t=N([]);function _(e){t.value.push(e)}function r(e){t.value=t.value.filter(p=>p!==e)}return(e,p)=>{const d=$,u=L,m=O;return o(),a(g,null,[s("section",null,[s("h1",null,l(e.title),1),s("a",q,[i(d),G])]),e.content?(o(),f(u,{key:0,"section-titles":e.content.map(n=>n.title??""),"visible-sections":S(t)},null,8,["section-titles","visible-sections"])):V("",!0),(o(!0),a(g,null,w(e.content,n=>(o(),f(m,{key:n.title,title:n.title??"",content:n,onEnter:v=>_(n.title??""),onEnterBack:v=>_(n.title??""),onLeave:v=>r(n.title??""),onLeaveBack:v=>r(n.title??"")},null,8,["title","content","onEnter","onEnterBack","onLeave","onLeaveBack"]))),128))],64)}}});const Y=y(H,[["__scopeId","data-v-1d39cde8"]]);export{Y as _};
