import{u as p,_ as i}from"./I8AjeGCV.js";import{f as u,s as f,h as s,o as r,i as _,v as a,c as d}from"./BBADcEDx.js";import"./DobVt8sk.js";const g=["src"],B=u({__name:"ContentImg",props:{src:{},alt:{}},setup(c){const t=c,n=p(),l=f(()=>t.src.endsWith(".gif")?"gif":"webp"),o=/https?:\/\//.test(t.src)?void 0:n(t.src,{height:100,format:"webp",blur:1,quality:10});return(e,h)=>{const m=i;return s(o)?(r(),_(m,a({key:0},e.$attrs,{src:t.src,alt:e.alt,format:s(l),placeholder:s(o),loading:"lazy"}),null,16,["src","alt","format","placeholder"])):(r(),d("img",a({key:1},e.$attrs,{src:t.src,alt:""}),null,16,g))}}});export{B as default};
