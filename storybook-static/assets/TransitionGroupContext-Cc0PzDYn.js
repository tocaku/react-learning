var i=Object.defineProperty;var a=(t,e,r)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var u=(t,e,r)=>a(t,typeof e!="symbol"?e+"":e,r);import{r as o,a as f}from"./index-caxmlYbZ.js";const c={};function l(t,e){const r=o.useRef(c);return r.current===c&&(r.current=t(e)),r}const I=[];function d(t){o.useEffect(t,I)}class s{constructor(){u(this,"currentId",null);u(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});u(this,"disposeEffect",()=>this.clear)}static create(){return new s}start(e,r){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,r()},e)}}function T(){const t=l(s.create).current;return d(t.disposeEffect),t}function m(t,e){if(t==null)return{};var r={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(e.includes(n))continue;r[n]=t[n]}return r}const E=f.createContext(null);export{s as T,m as _,E as a,l as b,T as u};