import{g as p,L as a,c as t,N as n,P as c}from"./index-CYg3LTZf.js";const g=e=>{const[r,o]=p(e.open);return a(()=>{!r()&&e.open&&o(!0)}),t(n,{get when(){return e.open||r()},get children(){return t(n,{get when(){return e.appendToBody},get fallback(){return e.popup},get children(){return t(c,{get mount(){return document.body},get children(){return e.popup}})}})}})};export{g as i};