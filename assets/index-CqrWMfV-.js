var v={border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"};function u(t,n,e){if(!t)return;const r=t.ownerDocument.defaultView||window,o=new r.MutationObserver(i=>{for(const s of i)s.type==="attributes"&&s.attributeName&&n.includes(s.attributeName)&&e(s)});return o.observe(t,{attributes:!0,attributeFilter:n}),()=>o.disconnect()}var c=t=>t.ownerDocument.defaultView||window;function a(t,n){const{type:e="HTMLInputElement",property:r="value"}=n,o=c(t)[e].prototype;return Object.getOwnPropertyDescriptor(o,r)??{}}function d(t,n){var r;(r=a(t,{type:"HTMLInputElement",property:"checked"}).set)==null||r.call(t,n)}function h(t,n){const{checked:e,bubbles:r=!0}=n;if(!t)return;const o=c(t);t instanceof o.HTMLInputElement&&(d(t,e),t.dispatchEvent(new o.Event("click",{bubbles:r})),t.dispatchEvent(new o.Event("change",{bubbles:r})))}function p(t){return f(t)?t.form:t.closest("form")}function f(t){return t.matches("textarea, input, select, button")}function w(t,n){if(!t)return;const e=p(t);return e==null||e.addEventListener("reset",n,{passive:!0}),()=>{e==null||e.removeEventListener("reset",n)}}function b(t,n){const e=t==null?void 0:t.closest("fieldset");if(e)return n(e.disabled),u(e,["disabled"],()=>n(e.disabled))}function m(t,n){if(!t)return;const{onFieldsetDisabledChange:e,onFormReset:r}=n,o=[w(t,r),b(t,e)];return()=>{o.forEach(i=>i==null?void 0:i())}}export{h as d,m as t,v};