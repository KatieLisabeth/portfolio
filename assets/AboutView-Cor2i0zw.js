import{s as $}from"./index-DUJOfp-R.js";import{k as g,A as s,B as o,C as e,r as c,j as w,q as C,R as V,F as E,I as B,E as u,J as q,D as f,v as x,x as l}from"./@vue-C4EA9ERc.js";import{_ as b,a as A,u as L}from"./index-CiaM-Oym.js";import"./pinia-C22kiUF6.js";import"./vue-i18n-DamefsgM.js";import"./@intlify-B0a4tW6M.js";import"./vue-router-CwAfKWpe.js";const N={class:"contact-links"},D=["href"],F=["src"],H=["href"],P=["src"],T=["href"],j=["src"],z=g({__name:"SocialEl",props:{email:{type:String,required:!0},linkedin:{type:String,required:!0},github:{type:String,required:!0},emailIcon:{type:String,default:"/src/assets/icons/email.svg"},linkedinIcon:{type:String,default:"/src/assets/icons/linkedin.png"},githubIcon:{type:String,default:"/src/assets/icons/gith.svg"}},setup(n){return(k,d)=>(s(),o("div",N,[e("a",{href:`mailto:${n.email}`,target:"_blank",rel:"noopener noreferrer"},[e("img",{src:n.emailIcon,alt:"Email Icon",class:"icon"},null,8,F)],8,D),e("a",{href:n.linkedin,target:"_blank",rel:"noopener noreferrer"},[e("img",{src:n.linkedinIcon,alt:"LinkedIn Icon",class:"icon"},null,8,P)],8,H),e("a",{href:n.github,target:"_blank",rel:"noopener noreferrer"},[e("img",{src:n.githubIcon,alt:"GitHub Icon",class:"icon"},null,8,j)],8,T)]))}}),G=b(z,[["__scopeId","data-v-0ff98a41"]]),J=["src"],K={class:"title"},M={class:"description"},O={key:0},R={key:1},U=g({__name:"AboutView",setup(n){const d=A().about,{github:p,linkedin:v,email:I}=$,i=c(!1),h=c(!1),a=c(null),m=L(),y=w(()=>m.currentTheme===m.themes.dark?"dark-about":"light-about");return C(()=>{const r=new IntersectionObserver(_=>{_.forEach(t=>{t.isIntersecting?i.value=!0:(i.value=!1,h.value=!0)})},{threshold:.1});a.value&&r.observe(a.value)}),V(()=>{a.value&&(a.value=null)}),(r,_)=>(s(),o("div",{class:u([y.value,{visible:i.value,hidden:!i.value&&h.value},"container"]),ref_key:"aboutPage",ref:a},[(s(!0),o(E,null,B(l(d),(t,S)=>(s(),o("div",{key:S,class:u(["item",t.boxClass])},[e("div",{class:u([{"bounce-in":i.value,"bounce-out":!i.value},"card-content"])},[t.link?(s(),o("img",{key:0,src:t.link,alt:"grid image",class:"link"},null,8,J)):q("",!0),e("h3",K,f(r.$t(t.title)),1),e("p",M,[t.hasHtml?(s(),o("span",O,[x(G,{email:"katie_lisabeth@yahoo.com",linkedin:"https://www.linkedin.com/in/kateryna-lisabeth-48a8a093/",github:"https://github.com/KatieLisabeth",emailIcon:l(I),linkedinIcon:l(v),githubIcon:l(p)},null,8,["emailIcon","linkedinIcon","githubIcon"])])):(s(),o("span",R,f(r.$t(t.description)),1))])],2)],2))),128))],2))}}),ne=b(U,[["__scopeId","data-v-68f2767a"]]);export{ne as default};
//# sourceMappingURL=AboutView-Cor2i0zw.js.map
