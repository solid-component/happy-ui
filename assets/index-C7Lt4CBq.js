import{L as $,N as x,D as f,an as h,P as G,F as c,G as w,U as t,H as y,I as z,V as i,_ as p,X as o,aj as I}from"./index-Cfptuvwy.js";const S=()=>$("space",a=>x({[`&.${a.componentCls}-vertical`]:{display:"flex",flexDirection:"column"},[`&.${a.componentCls}-small`]:{columnGap:a.paddingSM+"px",rowGap:a.paddingSM+"px"},[`&.${a.componentCls}-middle`]:{columnGap:a.padding+"px",rowGap:a.padding+"px"},[`&.${a.componentCls}-large`]:{columnGap:a.paddingLG+"px",rowGap:a.paddingLG+"px"},[`&.${a.componentCls}-wrap`]:{flexWrap:"wrap"},[`&.${a.componentCls}-align-center`]:{alignItems:"center"},[`&.${a.componentCls}-align-start`]:{alignItems:"start"},[`&.${a.componentCls}-align-end`]:{alignItems:"end"},[`&.${a.componentCls}-align-baseline`]:{alignItems:"baseline"},[`&.${a.componentCls}-horizontal`]:{display:"inline-flex"}}));var d=z("<div>");function N(a){const e=f({size:"small"},a),m=h(()=>e.children),g=()=>m.toArray(),l=()=>{switch(e.align){case"start":return"start";case"end":return"end";case"center":return"center";default:return e.align}},u=G(S),C=()=>p(u(),o({[`space-${e.size}`]:!!e.size,"space-vertical":e.direction==="vertical","space-horizontal":e.direction!=="vertical",[`space-align-${l()}`]:!!l(),"space-wrap":e.wrap}),e.classList,e.class);return(()=>{var r=d();return c(r,w(y,{get each(){return g()},children:s=>(()=>{var n=d();return c(n,s),t(()=>i(n,p(o({"space-item":!0})))),n})()})),t(s=>{var n=C(),v=e.style;return n!==s.e&&i(r,s.e=n),s.t=I(r,v,s.t),s},{e:void 0,t:void 0}),r})()}export{N as S};