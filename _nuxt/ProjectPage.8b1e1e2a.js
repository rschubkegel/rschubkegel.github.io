import{_ as $}from"./LeftArrow.aa29aea7.js";import{_ as L}from"./TableOfContents.88dd10e5.js";import{_ as b,a as E}from"./Eye.822bc286.js";import I from"./ContentRenderer.4742bbcd.js";import{f as B,k as P,S as f,l as C,o,c as a,a as s,n as j,d as h,t as l,b as i,h as S,_ as y,m as N,i as k,j as V,F as g,r as w,p as T,e as x}from"./entry.2e2ab41f.js";const A=["id"],F={class:"sticky-header"},z=["href"],D=["href"],M={key:2},O=B({__name:"ProjectSection",props:{title:{},content:{}},emits:["enter","leave","enterBack","leaveBack"],setup(c,{emit:t}){const _=c;P.registerPlugin(f);const r=_.title.toLowerCase().replaceAll(" ","-");return C(()=>{f.create({trigger:`#${r}`,start:"top center+=200",end:"bottom center-=200",onEnter:()=>t("enter"),onLeave:()=>t("leave"),onEnterBack:()=>t("enterBack"),onLeaveBack:()=>t("leaveBack")})}),(e,p)=>{const d=b,u=E,m=I;return o(),a("section",{id:S(r)},[s("header",F,[s("h2",{class:j({"pretty-header":e.content.link||e.content.page})},[e.content.link?(o(),a("a",{key:0,href:e.content.link,target:"_blank"},[h(l(e.content.title)+" ",1),i(d)],8,z)):e.content.page?(o(),a("a",{key:1,href:e.content.page},[h(l(e.content.title)+" ",1),i(u)],8,D)):(o(),a("span",M,l(e.title),1))],2)]),i(m,{value:e.content,excerpt:!!e.content.excerpt},null,8,["value","excerpt"])],8,A)}}});const R=y(O,[["__scopeId","data-v-fb9ce126"]]),W=c=>(T("data-v-1d39cde8"),c=c(),x(),c),q={href:"/"},G=W(()=>s("em",null,"return home",-1)),H=B({__name:"ProjectPage",props:{title:{},content:{}},setup(c){const t=N([]);function _(e){t.value.push(e)}function r(e){t.value=t.value.filter(p=>p!==e)}return(e,p)=>{const d=$,u=L,m=R;return o(),a(g,null,[s("section",null,[s("h1",null,l(e.title),1),s("a",q,[i(d),G])]),e.content?(o(),k(u,{key:0,"section-titles":e.content.map(n=>n.title??""),"visible-sections":S(t)},null,8,["section-titles","visible-sections"])):V("",!0),(o(!0),a(g,null,w(e.content,n=>(o(),k(m,{key:n.title,title:n.title??"",content:n,onEnter:v=>_(n.title??""),onEnterBack:v=>_(n.title??""),onLeave:v=>r(n.title??""),onLeaveBack:v=>r(n.title??"")},null,8,["title","content","onEnter","onEnterBack","onLeave","onLeaveBack"]))),128))],64)}}});const Y=y(H,[["__scopeId","data-v-1d39cde8"]]);export{Y as _};
