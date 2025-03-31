"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2142],{6954:(t,e,a)=>{a.d(e,{Ay:()=>y,Do:()=>u,tN:()=>d});var n=a(4401),r=a(4431),c=a(6633);function i(t,e,a){for(;t&&t!==a.parentNode;t=t.parentNode)if(t.matches(e))return t;return null}function o(t,e){for(;t&&1===t.nodeType;){if(e.indexOf(t)>-1)return t;t=t.parentNode}return null}const s=document.location,l="#debug-clicktracking"===s.hash;function d(t,e,a,n="click"){u(function(t){var e=t.pop(),a=t.join(".").split(".");return e?(e=e.replace(/http(s)?:\/\//,""),e=a.length>2&&"social"===a[1]&&a[2]>0?(e=document.querySelector('meta[property="og:url"]'))?e.content.replace(/http(s)?:\/\//,""):s.host+s.pathname:e.split("?")[0]):e="#",a.unshift(c.breakpoint.getTrackingBreakpoint()),a.push(e),a}(t),e,a,n)}function u(t,e,a,n="click"){try{const r={linkId:t.pop(),customClickParameter:{4:t.shift(),5:t.shift(),6:t.shift(),7:t.shift(),8:t.shift(),9:t.shift()},sendOnUnload:1};if(e&&(Object.assign(r.customClickParameter,e.customClickParameter),delete e.customClickParameter,Object.assign(r,e)),l){const t=Object.entries(r.customClickParameter).sort(((t,e)=>t>e)).map((t=>t[1])).join(".")+"|"+r.linkId;console.debug(`%s %c${a||"send"}()`,t,"color: #007fff; font-style: italic;"),window.trackingData=t}window.dataLayer=window.dataLayer||[];const c={event:n,tracking_info:r};l&&console.debug("dataLayer.push",c),window.dataLayer.push(c)}catch(r){l&&console.error(r)}}function f(t,e){return t.dataset.ctUrl?t.dataset.ctUrl:t.getAttribute("aria-controls")?e.defaultPrevented||!t.href?"#"+t.getAttribute("aria-controls"):t.href:"submit"===t.type&&t.form?t.form.getAttribute("action")||s.host+s.pathname:t.href?t.getAttribute("href"):"#"+t.tagName.toLowerCase()}function m(t){return(0,r.x)(function(t){return t.dataset.ctLabel?t.dataset.ctLabel:t.firstChild&&t.firstChild.textContent&&t.firstChild.textContent.trim()?t.firstChild.textContent.trim():t.firstElementChild&&t.firstElementChild.textContent?t.firstElementChild.textContent.trim():t.textContent}(t))}var p={main:function(t,e,a){const n=t.closest("article, aside"),c=t.closest(".cp-area");if(!n)return;const i=c?c.dataset.ctContext:"";let o="",s="text",l="",d=n.dataset.ctBlock||n.classList.item(0);if(t.dataset.ctLabel?s=t.dataset.ctLabel:"submit"===t.type?s=t.value||t.textContent:t.className.includes("button")?s="button":("IMG"===a.target.tagName||t.closest("figure"))&&(s="image"),n.dataset.zplus&&(d+="-"+n.dataset.zplus),o=t.dataset.ctUrl?t.dataset.ctUrl:"submit"===t.type&&t.form?t.form.getAttribute("action"):t.getAttribute("href"),!o){var u=n.querySelector("a");u&&(o=u.href)}if(c)switch(i){case"duo":l=Array.from(c.parentNode.children).indexOf(c)+1;break;case"trio":if(1===c.childNodes.length){l=Array.from(c.parentNode.children).indexOf(c)+1;break}default:l=Array.from(c.querySelectorAll("article, aside")).indexOf(n)+1}return[i,Array.from(document.querySelectorAll(".main .cp-region")).indexOf(t.closest(".cp-region"))+1,l,d,(0,r.x)(s),o]},useDataId:function(t){return[t.dataset.id,t.getAttribute("href")]},useDataArea:function(t,e,a){const n=t.closest("[data-ct-row]"),r=n?i(t,"[data-ct-column]",n):null,c=n?n.dataset.ctRow:"";let o,s,l,d=t;return r&&(o=r.dataset.ctColumn,s=r.dataset.ctSubcolumn,"false"===o?o="":(""===o&&(o=void 0,d=r.parentNode.querySelector("a, button, [data-ct-label]")),void 0!==s&&""!==s||(s=Array.from(r.querySelectorAll("a, button, [data-ct-label]")).indexOf(t)+1||1)),"false"===s&&(s="")),c&&void 0===o&&(l=e===n||1===e.querySelectorAll('[data-ct-row="'+c+'"]').length?Array.from(n.querySelectorAll("a, button, [data-ct-label]")).filter((t=>!t.matches("[data-ct-column] *"))):Array.from(e.querySelectorAll('[data-ct-row="'+c+'"] a')).filter((t=>!t.matches("[data-ct-column] *"))),o=l.indexOf(d)+1||1),[e.dataset.ctArea,c,o,s||"",m(t),f(t,a)]},useDataTracking:function(t){var e=t.dataset.tracking.split("|");return[e[0],e[1]]},useDataEventType:function(t,e){return"#comments"===e.dataset.ctEventType?this.comments(t,e):this.useNewTrackingConcept(t,e)},useNewTrackingConcept:function(t,e){const a=e.dataset.ctEventType,n=t.closest("[data-ct-container-type]")?.dataset.ctContainerType||"",r=t.closest("[data-ct-section-type]")?.dataset.ctSectionType||"",c=`${t.dataset.ctElementType||""||r||n}_${t.dataset.ctAction||"click"}`;let i=""===t.dataset.ctLabel?"":m(t);if("input"===t.tagName.toLowerCase()&&(i=t.value),"button"===t.tagName.toLowerCase()&&"submit"===t.type){const e=t.parentElement.querySelector("input[type=search]");e&&(i=e.value)}return[c,i,n,t.closest("[data-ct-ck7]")?.dataset.ctCk7||"",a]},comments:function(t,e){const{ctCk4:a}=t.dataset,{ctCk5:r}=i(t,"[data-ct-ck5]",e)?.dataset||{},{ctCk6:c,ctCk7:o,ctCk9:s,ctEventType:l}=e.dataset;let d=document.body.dataset.ctUuid;return d||(document.body.dataset.ctUuid=d=(0,n.A)()),[a||m(t),r,c,o,d,s,l]},content:function(t,e){const{pageType:a,template:n}=document.body.dataset;return"gallery"===a?this.linkInGalleryContent(t,e):"faq"===n?this.linkInFaqContent(t,e):"article"===a?this.linkInArticleContent(t,e):void 0},outbrain:function(t,e,a){if(!a.target.shadowRoot)return;const n=a.composedPath().shift().closest("a");return n?["outbrain","","","","click",f(n,a)]:void 0},linkInFaqContent:function(t,e){const a=Array.from(e.children).filter((t=>t.hasAttribute("class")||t.hasAttribute("itemscope"))).filter((t=>!t.matches([".iqdcontainer",'[data-ct-area="article-toc"]',".article__subheading"].join())));let n=o(t,a);const r=e.dataset.pageNumber||0,c=a.indexOf(n)+1;"P"===t.parentNode.tagName?n=t.parentNode:"SPAN"===t.parentNode.tagName&&"P"===t.parentNode.parentNode.tagName&&(n=t.parentNode.parentNode);let i=n?n.dataset.ctBlock||n.classList.item(0):"intext";return"A"===t.tagName&&"paragraph"===i&&(i="link"),t.classList.contains("rtr-entity")&&(i=`${i}_retresco`),["article",c,"seite-"+r,i,m(t),t.getAttribute("href")||s.host+s.pathname]},linkInArticleContent:function(t,e){const a=Array.from(e.children).filter((t=>t.hasAttribute("class"))).filter((t=>!t.matches([".iqdcontainer",'[data-ct-area="article-toc"]',".article__subheading",".article__subpage-head"].join()))),n=o(t,a),r=e.dataset.pageNumber||0,c=a.indexOf(n)+1;let i=n?n.dataset.ctBlock||n.classList.item(0):"intext";return"A"===t.tagName&&"paragraph"===i&&(i="link"),t.classList.contains("rtr-entity")&&(i=`${i}_retresco`),["article",c,"seite-"+r,i,m(t),t.getAttribute("href")||s.host+s.pathname]},linkInGalleryContent:function(t,e){var a=e.querySelector(".gallery__index"),n=2,r=1,c=parseInt(a.textContent,10),i=t.dataset.go;return i&&(n=1,r="next"===i?2:1),["gallery",n,r,c,m(t),s.host+s.pathname]}};function h(t,e,a,n){const r=p[a](t,n,e);if(r){if(l){const a=t.getAttribute("href");a&&!a.startsWith("#")||"submit"===t.type?(e.preventDefault(),e.stopImmediatePropagation()):"outbrain"===n.id&&e.preventDefault()}"useDataEventType"===a?u(r,e.detail,a):d(r,e.detail,a)}}const b=[{name:"useDataArea",selector:"[data-ct-area]",filter:["a","button","[data-ct-label]",'input[type="submit"]'].join()},{name:"useDataEventType",selector:"[data-ct-event-type]",filter:["a","button","[data-ct-label]"].join()},{name:"useDataId",selector:"a[data-id]"},{name:"outbrain",selector:"#outbrain"},{name:"useDataTracking",selector:"[data-tracking]"},{name:"content",selector:".main .article-page",filter:["a","button[data-ct-label]",'[type="submit"]'].join()},{name:"main",selector:".main",filter:["article a","article button[data-ct-label]","aside a",'aside [type="submit"]'].join()}];function g(t){if(!function(t,e){const a=t.closest("[data-ct-tool]")?.dataset;return a?.ctTool===e}(t.target,"snowplow"))for(const e of b){let a=t.target.closest(e.selector);if(a){const n=a;if(e.filter&&(a=i(t.target,e.filter,n),"track"!==t.type||a||(a=t.target)),a){if("ctPrevent"in a.dataset)return;return h(a,t,e.name,n)}}}}function y(){document.addEventListener("click",g,!1),document.addEventListener("track",g,!1)}}}]);