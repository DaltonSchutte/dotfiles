"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[2826],{86040:(e,r,t)=>{t.d(r,{f:()=>l});var n=t(30758),o=t(78560);var i=t(71217),c=t(86070);const l=n.forwardRef((function({children:e,className:r,onKeyDown:t=(()=>{}),isFluid:l=!1,style:a,...s},u){const d=(0,n.useRef)(null);(e=>{const r=(0,n.useRef)(null);(0,n.useEffect)((()=>{const t=e.current;if(!t)return()=>{};const n=e=>{const t=e.target;if(t instanceof HTMLElement){const e=parseInt(t.closest("[aria-rowindex]")?.getAttribute("aria-rowindex")??"",10),n=parseInt(t.closest("[aria-colindex]")?.getAttribute("aria-colindex")??"",10);r.current={target:t,rowIndex:e,colIndex:n}}};return t.addEventListener("focusout",n),()=>{t.removeEventListener("focusout",n)}}),[e]),(0,n.useEffect)((()=>{if(r.current&&e.current){const{target:t,rowIndex:n,colIndex:i}=r.current,c=e.current?.contains(t);!c&&Number.isInteger(n)&&Number.isInteger(i)&&(0,o.oe)(e.current,n,i),r.current=null}}))})(d),(0,n.useImperativeHandle)(u,(()=>d.current));const f=(0,n.useCallback)((e=>{d.current?.contains(e.target)&&("ArrowUp"!==e.key&&"ArrowDown"!==e.key||e.preventDefault(),"ArrowUp"!==e.key&&"ArrowDown"!==e.key&&"ArrowLeft"!==e.key&&"ArrowRight"!==e.key||document.documentElement.classList.remove("no-focus-outline"),"ArrowUp"===e.key&&(0,o.YR)(d.current,i.O.UP,l),"ArrowDown"===e.key&&(0,o.YR)(d.current,i.O.DOWN,l),"ArrowLeft"===e.key&&(0,o.YR)(d.current,i.O.LEFT,l),"ArrowRight"===e.key&&(0,o.YR)(d.current,i.O.RIGHT,l),t(e))}),[t,l]);return(0,c.jsx)("div",{ref:d,role:"grid","aria-rowcount":s["aria-rowcount"],"aria-colcount":s["aria-colcount"],"aria-label":s["aria-label"],className:r,onKeyDown:f,tabIndex:0,"data-testid":s["data-testid"],style:a,children:e})}))},89845:(e,r,t)=>{t.d(r,{T:()=>l});var n=t(30758),o=t(81523),i=t(73891),c=t(86070);const l=({children:e,columnIndex:r,className:t,...l})=>{const a=(0,n.useRef)(null);return(0,i.g)(a),(0,o.l)(a),(0,c.jsx)("div",{ref:a,className:t,role:"gridcell","aria-colindex":r+1,...l,children:e})}},18377:(e,r,t)=>{t.d(r,{$:()=>c});var n=t(30758),o=t(78560),i=t(86070);const c=({children:e,rowIndex:r,className:t,"aria-selected":c})=>{const l=(0,n.useRef)(null);return(0,n.useEffect)((()=>{const e=l.current,r=e=>{const r=e.currentTarget;r.contains(document.activeElement)||(0,o.Ai)(r)};return e&&e.addEventListener("click",r),()=>{e&&e.removeEventListener("click",r)}}),[]),(0,i.jsx)("div",{ref:l,className:t,role:"row","aria-rowindex":r+1,"aria-selected":c,children:e})}},81523:(e,r,t)=>{t.d(r,{l:()=>o});var n=t(30758);const o=e=>{(0,n.useEffect)((()=>{if(!e.current)return;let r=e.current.parentElement;do{if(!r)return;r.getAttribute("role")||r.setAttribute("role","presentation"),r=r.parentElement}while("grid"!==r?.getAttribute("role"))}),[e])}},78560:(e,r,t)=>{t.d(r,{Ai:()=>c,YR:()=>i,oe:()=>l});var n=t(71217),o=t(22949);function i(e,r,t){if(!e)return void console.error("No grid element found. Canceling moving focus");if(!(0,o.fk)(e))return;const i=e.querySelector('[tabindex="0"]'),c=t?d:u;if(r===n.O.UP){const r=c(e,i,n.O.UP);if(!r)return;(0,o.MS)(i,a(i,r))}if(r===n.O.DOWN){const r=c(e,i,n.O.DOWN);if(!r)return;(0,o.MS)(i,a(i,r))}if(r===n.O.LEFT){const r=s(i,-1);if(r)return void(0,o.MS)(i,r);const t=c(e,i,n.O.LEFT);if(!t)return;const l=t.querySelectorAll(o.nu),a=l[l.length-1];(0,o.MS)(i,a)}if(r===n.O.RIGHT){const r=s(i,1);if(r)return void(0,o.MS)(i,r);const t=c(e,i,n.O.RIGHT);if(!t)return;const l=t.querySelectorAll(o.nu)[0];(0,o.MS)(i,l)}}function c(e){const r=e.closest('[role="grid"]');if(!r)return;const t=e.querySelectorAll(o.nu)[0],n=r.querySelector('[tabindex="0"]');(0,o.MS)(n,t)}function l(e,r,t){const n=e.querySelector(`[aria-rowindex="${r}"]`);if(!n)return void e.focus({preventScroll:!0});const i=n.querySelector(`[aria-colindex="${t}"]`);if(!i)return void c(n);const l=i.querySelectorAll(o.nu)[0],a=e.querySelector('[tabindex="0"]');(0,o.MS)(a,l)}function a(e,r){const t=e.closest("[aria-colindex]"),n=Array.from(t.querySelectorAll(o.nu)).indexOf(e),i=r.querySelectorAll(o.nu);return i[n]||i[0]}function s(e,r){const t=Array.from(e.closest("[aria-colindex]").querySelectorAll(o.nu)),n=t.findIndex((r=>r===e))+r;return t[n]}function u(e,r,t){const i=r.closest("[aria-rowindex]");if(t===n.O.DOWN){const t=Array.from(e.querySelectorAll("[aria-rowindex]")),n=r.closest("[aria-colindex]").getAttribute("aria-colindex");for(let e=t.indexOf(i)+1;e<t.length;e++){const r=t[e].querySelector(`[aria-colindex="${n}"]`);if((0,o.tM)(r))return r}}if(t===n.O.UP){const t=Array.from(e.querySelectorAll("[aria-rowindex]")),n=t.indexOf(i),c=r.closest("[aria-colindex]").getAttribute("aria-colindex");for(let e=n-1;e>=0;e--){const r=t[e].querySelector(`[aria-colindex="${c}"]`);if((0,o.tM)(r))return r}}if(t===n.O.LEFT){const e=Array.from(i.querySelectorAll("[aria-colindex]")),t=r.closest("[aria-colindex]");for(let r=e.indexOf(t)-1;r>=0;r--){const t=e[r];if((0,o.tM)(t))return t}}if(t===n.O.RIGHT){const e=Array.from(i.querySelectorAll("[aria-colindex]")),t=r.closest("[aria-colindex]");for(let r=e.indexOf(t)+1;r<e.length;r++){const t=e[r];if((0,o.tM)(t))return t}}return null}function d(e,r,t){if(t===n.O.DOWN){const t=r.closest("[aria-colindex]").getAttribute("aria-colindex"),n=r.closest("[aria-rowindex]").getAttribute("aria-rowindex"),i=Array.from(r.closest('[role="grid"]').querySelectorAll("[aria-rowindex]")).map((e=>parseInt(e.getAttribute("aria-rowindex")??"0",10))),c=parseInt(n,10),l=Math.max(...i);for(let r=c+1;r<=l;r+=1){const n=r,i=e.querySelector(`[aria-colindex="${t}"][aria-rowindex="${n}"]`);if((0,o.tM)(i))return i}}if(t===n.O.UP){const t=r.closest("[aria-colindex]").getAttribute("aria-colindex"),n=r.closest("[aria-rowindex]").getAttribute("aria-rowindex");for(let r=parseInt(n,10)-1;r>=0;r-=1){const n=r,i=e.querySelector(`[aria-colindex="${t}"][aria-rowindex="${n}"]`);if((0,o.tM)(i))return i}}if(t===n.O.LEFT){const t=r.closest("[aria-colindex]"),n=parseInt(t.getAttribute("aria-rowindex"),10),i=parseInt(t.getAttribute("aria-colindex"),10),c=Array.from(e.querySelectorAll(`[aria-rowindex="${n}"]`));for(let e=i-2;e>=0;e--){const r=c[e];if((0,o.tM)(r))return r}}if(t===n.O.RIGHT){const t=r.closest("[aria-colindex]"),n=parseInt(t.getAttribute("aria-rowindex"),10),i=parseInt(t.getAttribute("aria-colindex"),10),c=Array.from(e.querySelectorAll(`[aria-rowindex="${n}"]`));for(let e=i;e<c.length;e++){const r=c[e];if((0,o.tM)(r))return r}}return null}}}]);
//# sourceMappingURL=2826.js.map