function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(n)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function l(e,n,s,r){return e[1]&&r?t(s.ctx.slice(),e[1](r(n))):s.ctx}function u(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function d(e){return null==e?"":e}let f,h,m=!1;function p(e,t,n,s){for(;e<t;){const r=e+(t-e>>1);n(r)<=s?e=r+1:t=r}return e}function g(e,t){if(m){for(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const s=t[n];void 0!==s.claim_order&&e.push(s)}t=e}const n=new Int32Array(t.length+1),s=new Int32Array(t.length);n[0]=-1;let r=0;for(let e=0;e<t.length;e++){const o=t[e].claim_order,i=(r>0&&t[n[r]].claim_order<=o?r+1:p(1,r,(e=>t[n[e]].claim_order),o))-1;s[e]=n[i]+1;const a=i+1;n[a]=e,r=Math.max(a,r)}const o=[],i=[];let a=t.length-1;for(let e=n[r]+1;0!=e;e=s[e-1]){for(o.push(t[e-1]);a>=e;a--)i.push(t[a]);a--}for(;a>=0;a--)i.push(t[a]);o.reverse(),i.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<i.length;t++){for(;n<o.length&&i[t].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;e.insertBefore(i[t],s)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode===e&&null===t.nextSibling||e.appendChild(t)}function b(e,t,n){e.insertBefore(t,n||null)}function v(e,t,n){m&&!n?g(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function _(e){e.parentNode.removeChild(e)}function w(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function $(e){return document.createElement(e)}function y(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function S(e){return document.createTextNode(e)}function E(){return S(" ")}function T(){return S("")}function x(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function A(e){return function(t){return t.preventDefault(),e.call(this,t)}}function I(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function N(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const s in t)null==t[s]?e.removeAttribute(s):"style"===s?e.style.cssText=t[s]:"__value"===s?e.value=e[s]=t[s]:n[s]&&n[s].set?e[s]=t[s]:I(e,s,t[s])}function P(e){return Array.from(e.childNodes)}function R(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}function L(e,t,n,s,r=!1){R(e);const o=(()=>{for(let s=e.claim_info.last_index;s<e.length;s++){const o=e[s];if(t(o)){const t=n(o);return void 0===t?e.splice(s,1):e[s]=t,r||(e.claim_info.last_index=s),o}}for(let s=e.claim_info.last_index-1;s>=0;s--){const o=e[s];if(t(o)){const t=n(o);return void 0===t?e.splice(s,1):e[s]=t,r?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=s,o}}return s()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function C(e,t,n,s){return L(e,(e=>e.nodeName===t),(e=>{const t=[];for(let s=0;s<e.attributes.length;s++){const r=e.attributes[s];n[r.name]||t.push(r.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>s(t)))}function U(e,t,n){return C(e,t,n,$)}function O(e,t,n){return C(e,t,n,y)}function k(e,t){return L(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>S(t)),!0)}function H(e){return k(e," ")}function M(e,t,n){for(let s=n;s<e.length;s+=1){const n=e[s];if(8===n.nodeType&&n.textContent.trim()===t)return s}return e.length}function D(e,t){const n=M(e,"HTML_TAG_START",0),s=M(e,"HTML_TAG_END",n);if(n===s)return new V(void 0,t);R(e);const r=e.splice(n,s-n+1);_(r[0]),_(r[r.length-1]);const o=r.slice(1,r.length-1);for(const t of o)t.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new V(o,t)}function j(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function B(e,t){e.value=null==t?"":t}function q(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){f=!0}}return f}function G(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=$("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=q();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=x(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{r=x(n.contentWindow,"resize",t)}),function(e,t){e.appendChild(t)}(e,n),()=>{(s||r&&n.contentWindow)&&r(),_(n)}}function z(e,t=document.body){return Array.from(t.querySelectorAll(e))}class V extends class{constructor(e){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=y(t.nodeName):this.e=$(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)b(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(_)}}{constructor(e,t=!1){super(t),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)v(this.t,this.n[t],e)}}function K(e){h=e}function W(){if(!h)throw new Error("Function called outside component initialization");return h}function J(e){W().$$.on_mount.push(e)}function F(e){W().$$.after_update.push(e)}function Y(e){W().$$.on_destroy.push(e)}const X=[],Q=[],Z=[],ee=[],te=Promise.resolve();let ne=!1;function se(e){Z.push(e)}const re=new Set;let oe=0;function ie(){const e=h;do{for(;oe<X.length;){const e=X[oe];oe++,K(e),ae(e.$$)}for(K(null),X.length=0,oe=0;Q.length;)Q.pop()();for(let e=0;e<Z.length;e+=1){const t=Z[e];re.has(t)||(re.add(t),t())}Z.length=0}while(X.length);for(;ee.length;)ee.pop()();ne=!1,re.clear(),K(e)}function ae(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(se)}}const ce=new Set;let le;function ue(){le={r:0,c:[],p:le}}function de(){le.r||r(le.c),le=le.p}function fe(e,t){e&&e.i&&(ce.delete(e),e.i(t))}function he(e,t,n,s){if(e&&e.o){if(ce.has(e))return;ce.add(e),le.c.push((()=>{ce.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}}function me(e,t){const n={},s={},r={$$scope:1};let o=e.length;for(;o--;){const i=e[o],a=t[o];if(a){for(const e in i)e in a||(s[e]=1);for(const e in a)r[e]||(n[e]=a[e],r[e]=1);e[o]=a}else for(const e in i)r[e]=1}for(const e in s)e in n||(n[e]=void 0);return n}function pe(e){return"object"==typeof e&&null!==e?e:{}}function ge(e){e&&e.c()}function be(e,t){e&&e.l(t)}function ve(e,t,s,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(t,s),i||se((()=>{const t=c.map(n).filter(o);l?l.push(...t):r(t),e.$$.on_mount=[]})),u.forEach(se)}function _e(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function we(e,t){-1===e.$$.dirty[0]&&(X.push(e),ne||(ne=!0,te.then(ie)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function $e(t,n,o,i,a,c,l,u=[-1]){const d=h;K(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};l&&l(f.root);let p=!1;if(f.ctx=o?o(t,n.props||{},((e,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&a(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),p&&we(t,e)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){m=!0;const e=P(n.target);f.fragment&&f.fragment.l(e),e.forEach(_)}else f.fragment&&f.fragment.c();n.intro&&fe(t.$$.fragment),ve(t,n.target,n.anchor,n.customElement),m=!1,ie()}K(d)}class ye{$destroy(){_e(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Se=[];function Ee(t,n=e){let s;const r=new Set;function o(e){if(i(t,e)&&(t=e,s)){const e=!Se.length;for(const e of r)e[1](),Se.push(e,t);if(e){for(let e=0;e<Se.length;e+=2)Se[e][0](Se[e+1]);Se.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(i,a=e){const c=[i,a];return r.add(c),1===r.size&&(s=n(o)||e),i(t),()=>{r.delete(c),0===r.size&&(s(),s=null)}}}}const Te={};var xe={owner:"Maxtel-Tecnologia",repo:"TrueSafe-Web-Status-Page",sites:[{name:"TrueSafe Web Site",url:"$STATUS_SITE",icon:"https://www.truesafeweb.com.br/imagens/icons/principal/truesafe.ico"},{name:"Banco Dados",url:"$STATUS_BD",icon:"https://www.truesafeweb.com.br/imagens/icons/principal/truesafe.ico"},{name:"User BD Site",url:"$STATUS_USERBD_SITE",icon:"https://www.truesafeweb.com.br/imagens/icons/principal/truesafe.ico"},{name:"User BD Comunics",url:"$STATUS_USERBD_COMUNICS",icon:"https://www.truesafeweb.com.br/imagens/icons/principal/truesafe.ico"},{name:"TrueSafe Pass Site",url:"$STATUS_TSPASS",icon:"https://www.truesafeweb.com.br/imagens/icons/principal/truesafe.ico"},{name:"TrueSafe Pass Dashboard",url:"https://dashboard.truesafepass.com.br",icon:"https://www.truesafeweb.com.br/imagens/icons/principal/truesafe.ico"},{name:"TrueSafe Pass Admin",url:"https://admin.truesafepass.com.br",icon:"https://www.truesafeweb.com.br/imagens/icons/principal/truesafe.ico"}],"status-website":{cname:"status.truesafeweb.com.br",logoUrl:"https://www.truesafeweb.com.br/imagens/logo_truesafe.png",favicon:"https://www.truesafeweb.com.br/imagens/icons/principal/truesafe.ico",name:"TrueSafe Web",introTitle:"Status Services",introMessage:"Página de monitoramento e status dos serviços do TrueSafe Web",theme:"ocean",navbar:[{title:"Home",href:"/"}]},notifications:[{type:"telegram"}],workflowSchedule:{uptime:"*/5 * * * *",responseTime:"0 */3 * * *",graphs:"10 */3 * * *",summary:"10 */3 * * *",staticSite:"20 */3 * * *",updates:"30 */3 * * *",updateTemplate:"0 0 * * *"},i18n:{activeIncidents:"Incidentes Ativos",allSystemsOperational:"Todos os sistemas estão OK",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Aberto em $DATE com $POSTS postagens",incidentTitle:"Incidente $NUMBER Detalhes",incidentDetails:"Detalhes do Incidente",incidentFixed:"Reparado",incidentOngoing:"Em andamento",incidentOpenedAt:"Aberto em",incidentClosedAt:"Fechado em",incidentSubscribe:"Inscreva-se para atualizações",incidentViewOnGitHub:"Ver no GitHub",incidentCommentSummary:"Postado em $DATE por $AUTHOR",incidentBack:"← Voltar",pastIncidents:"Últimos Incidentes",pastIncidentsResolved:"Resolvido em $MINUTES minutos com $POSTS postagens",liveStatus:"Status Atual",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Tempo de Atividade Geral",averageResponseTime:"Tempo médio de resposta: $TIMEms",averageResponseTimeTitle:"Resposta Média",sevelDayResponseTime:"Últimos Registros",responseTimeMs:"Tempo resposta (ms)",up:"ativo",down:"com problema",degraded:"Degradado",ms:"ms",loading:"Carregando",navGitHub:"GitHub",footer:"Maxtel Tecnologia Ltda",rateLimitExceededTitle:"Limite excedido",rateLimitExceededIntro:"Você excedeu o número de solicitações que pode fazer em uma hora, então terá que esperar antes de acessar este site novamente.",rateLimitExceededWhatDoesErrorMean:"O que esse erro significa?",rateLimitExceededErrorMeaning:"Este site usa a API do GitHub para acessar dados em tempo real sobre o status de nossos sites. Por padrão, o GitHub permite a cada endereço IP 60 solicitações por hora, que você consumiu.",rateLimitExceededErrorHowCanFix:"Como posso corrigir isso?",rateLimitExceededErrorFix:"Você pode esperar por mais uma hora e o limite do seu endereço IP será restaurada.",rateLimitExceededGeneratePAT:"Aprenda a gerar um token de acesso pessoal",rateLimitExceededHasSet:"Você tem um conjunto de tokens de acesso pessoal.",rateLimitExceededRemoveToken:"Remover token",rateLimitExceededGitHubPAT:"Token de acesso pessoal do GitHub",rateLimitExceededCopyPastePAT:"Copie e cole seu token",rateLimitExceededSaveToken:"Salvar token",errorTitle:"Ocorreu um erro",errorIntro:"Ocorreu um erro ao tentar obter os detalhes de status mais recentes.",errorText:"Tente novamente em alguns instantes.",errorHome:"Ir para página inicial",pastScheduledMaintenance:"Manutenções agendadas anteriores",scheduledMaintenance:"Manutenção Agendada",scheduledMaintenanceSummaryStarted:"Comceçou em $DATE por $DURATION minutos",scheduledMaintenanceSummaryStarts:"Começa em $DATE por $DURATION minutos",startedAt:"Iniciou em",startsAt:"Inicia em",duration:"Duração",durationMin:"$DURATION minutos",incidentCompleted:"Completo",incidentScheduled:"Agendado"},path:"https://status.truesafeweb.com.br"};function Ae(e,t,n){const s=e.slice();return s[1]=t[n],s}function Ie(t){let n,s,r,o,i=xe["status-website"]&&!xe["status-website"].hideNavLogo&&function(t){let n,s;return{c(){n=$("img"),this.h()},l(e){n=U(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){I(n,"alt",""),c(n.src,s=xe["status-website"].logoUrl)||I(n,"src",s),I(n,"class","svelte-a08hsz")},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}(),a=xe["status-website"]&&!xe["status-website"].hideNavTitle&&function(t){let n,s,r=xe["status-website"].name+"";return{c(){n=$("div"),s=S(r)},l(e){n=U(e,"DIV",{});var t=P(n);s=k(t,r),t.forEach(_)},m(e,t){v(e,n,t),g(n,s)},p:e,d(e){e&&_(n)}}}();return{c(){n=$("div"),s=$("a"),i&&i.c(),r=E(),a&&a.c(),this.h()},l(e){n=U(e,"DIV",{});var t=P(n);s=U(t,"A",{href:!0,class:!0});var o=P(s);i&&i.l(o),r=H(o),a&&a.l(o),o.forEach(_),t.forEach(_),this.h()},h(){I(s,"href",o=xe["status-website"].logoHref||xe.path),I(s,"class","logo svelte-a08hsz")},m(e,t){v(e,n,t),g(n,s),i&&i.m(s,null),g(s,r),a&&a.m(s,null)},p(e,t){xe["status-website"]&&!xe["status-website"].hideNavLogo&&i.p(e,t),xe["status-website"]&&!xe["status-website"].hideNavTitle&&a.p(e,t)},d(e){e&&_(n),i&&i.d(),a&&a.d()}}}function Ne(e){let t,n,s,r,o,i,a=e[1].title+"";return{c(){t=$("li"),n=$("a"),s=S(a),i=E(),this.h()},l(e){t=U(e,"LI",{});var r=P(t);n=U(r,"A",{"aria-current":!0,href:!0,class:!0});var o=P(n);s=k(o,a),o.forEach(_),i=H(r),r.forEach(_),this.h()},h(){I(n,"aria-current",r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),I(n,"href",o=e[1].href.replace("$OWNER",xe.owner).replace("$REPO",xe.repo)),I(n,"class","svelte-a08hsz")},m(e,r){v(e,t,r),g(t,n),g(n,s),g(t,i)},p(e,t){1&t&&r!==(r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&I(n,"aria-current",r)},d(e){e&&_(t)}}}function Pe(t){let n,s,r,o,i,a=xe["status-website"]&&xe["status-website"].logoUrl&&Ie(),c=xe["status-website"]&&xe["status-website"].navbar&&function(e){let t,n=xe["status-website"].navbar,s=[];for(let t=0;t<n.length;t+=1)s[t]=Ne(Ae(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=T()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=T()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);v(e,t,n)},p(e,r){if(1&r){let o;for(n=xe["status-website"].navbar,o=0;o<n.length;o+=1){const i=Ae(e,n,o);s[o]?s[o].p(i,r):(s[o]=Ne(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){w(s,e),e&&_(t)}}}(t),l=xe["status-website"]&&xe["status-website"].navbarGitHub&&!xe["status-website"].navbar&&function(t){let n,s,r,o,i=xe.i18n.navGitHub+"";return{c(){n=$("li"),s=$("a"),r=S(i),this.h()},l(e){n=U(e,"LI",{});var t=P(n);s=U(t,"A",{href:!0,class:!0});var o=P(s);r=k(o,i),o.forEach(_),t.forEach(_),this.h()},h(){I(s,"href",o=`https://github.com/${xe.owner}/${xe.repo}`),I(s,"class","svelte-a08hsz")},m(e,t){v(e,n,t),g(n,s),g(s,r)},p:e,d(e){e&&_(n)}}}();return{c(){n=$("nav"),s=$("div"),a&&a.c(),r=E(),o=$("ul"),c&&c.c(),i=E(),l&&l.c(),this.h()},l(e){n=U(e,"NAV",{class:!0});var t=P(n);s=U(t,"DIV",{class:!0});var u=P(s);a&&a.l(u),r=H(u),o=U(u,"UL",{class:!0});var d=P(o);c&&c.l(d),i=H(d),l&&l.l(d),d.forEach(_),u.forEach(_),t.forEach(_),this.h()},h(){I(o,"class","svelte-a08hsz"),I(s,"class","container svelte-a08hsz"),I(n,"class","svelte-a08hsz")},m(e,t){v(e,n,t),g(n,s),a&&a.m(s,null),g(s,r),g(s,o),c&&c.m(o,null),g(o,i),l&&l.m(o,null)},p(e,[t]){xe["status-website"]&&xe["status-website"].logoUrl&&a.p(e,t),xe["status-website"]&&xe["status-website"].navbar&&c.p(e,t),xe["status-website"]&&xe["status-website"].navbarGitHub&&!xe["status-website"].navbar&&l.p(e,t)},i:e,o:e,d(e){e&&_(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function Re(e,t,n){let{segment:s}=t;return e.$$set=e=>{"segment"in e&&n(0,s=e.segment)},[s]}class Le extends ye{constructor(e){super(),$e(this,e,Re,Pe,i,{segment:0})}}var Ce={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ue(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function Oe(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ke(e,t){var n,s,r,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},d=0;function f(e){var t=Ce[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function h(){for(var e="";c.length;)e+=f(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=a.exec(e);)s=e.substring(d,r.index),d=a.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((i=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Ue(Oe(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=r[6])?(i.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=ke(Ue(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):r[8]?n='<img src="'+Oe(r[8])+'" alt="'+Oe(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+Oe(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(i="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+ke(r[12]||r[15],u)+"</"+i+">":r[16]?n="<code>"+Oe(r[16])+"</code>":(r[17]||r[1])&&(n=f(r[17]||"--"))),l+=s,l+=n;return(l+e.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function He(e,t,n){const s=e.slice();return s[3]=t[n],s}function Me(e,t,n){const s=e.slice();return s[3]=t[n],s}function De(e,t,n){const s=e.slice();return s[8]=t[n],s}function je(t){let n;return{c(){n=$("link"),this.h()},l(e){n=U(e,"LINK",{rel:!0,href:!0}),this.h()},h(){I(n,"rel","stylesheet"),I(n,"href",`${xe.path}/themes/${(xe["status-website"]||{}).theme||"light"}.css`)},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function Be(t){let n;return{c(){n=$("link"),this.h()},l(e){n=U(e,"LINK",{rel:!0,href:!0}),this.h()},h(){I(n,"rel","stylesheet"),I(n,"href",(xe["status-website"]||{}).themeUrl)},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function qe(t){let n,s;return{c(){n=$("script"),this.h()},l(e){n=U(e,"SCRIPT",{src:!0}),P(n).forEach(_),this.h()},h(){c(n.src,s=t[8].src)||I(n,"src",s),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function Ge(t){let n;return{c(){n=$("link"),this.h()},l(e){n=U(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){I(n,"rel",t[3].rel),I(n,"href",t[3].href),I(n,"media",t[3].media)},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function ze(t){let n;return{c(){n=$("meta"),this.h()},l(e){n=U(e,"META",{name:!0,content:!0}),this.h()},h(){I(n,"name",t[3].name),I(n,"content",t[3].content)},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function Ve(t){let n,s,r,o,i,a,c,u,d,f,h,m,p,b,y,S,x,A,N=ke(xe.i18n.footer.replace(/\$REPO/,`https://github.com/${xe.owner}/${xe.repo}`))+"",R=(xe["status-website"]||{}).customHeadHtml&&function(t){let n,s,r=(xe["status-website"]||{}).customHeadHtml+"";return{c(){n=new V(!1),s=T(),this.h()},l(e){n=D(e,!1),s=T(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),v(e,s,t)},p:e,d(e){e&&_(s),e&&n.d()}}}();let L=((xe["status-website"]||{}).themeUrl?Be:je)(t),C=(xe["status-website"]||{}).scripts&&function(e){let t,n=(xe["status-website"]||{}).scripts,s=[];for(let t=0;t<n.length;t+=1)s[t]=qe(De(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=T()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=T()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);v(e,t,n)},p(e,r){if(0&r){let o;for(n=(xe["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=De(e,n,o);s[o]?s[o].p(i,r):(s[o]=qe(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){w(s,e),e&&_(t)}}}(t),O=(xe["status-website"]||{}).links&&function(e){let t,n=(xe["status-website"]||{}).links,s=[];for(let t=0;t<n.length;t+=1)s[t]=Ge(Me(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=T()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=T()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);v(e,t,n)},p(e,r){if(0&r){let o;for(n=(xe["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=Me(e,n,o);s[o]?s[o].p(i,r):(s[o]=Ge(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){w(s,e),e&&_(t)}}}(t),k=(xe["status-website"]||{}).metaTags&&function(e){let t,n=(xe["status-website"]||{}).metaTags,s=[];for(let t=0;t<n.length;t+=1)s[t]=ze(He(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=T()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=T()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);v(e,t,n)},p(e,r){if(0&r){let o;for(n=(xe["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=He(e,n,o);s[o]?s[o].p(i,r):(s[o]=ze(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){w(s,e),e&&_(t)}}}(t),M=xe["status-website"].css&&function(t){let n,s,r=`<style>${xe["status-website"].css}</style>`;return{c(){n=new V(!1),s=T(),this.h()},l(e){n=D(e,!1),s=T(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),v(e,s,t)},p:e,d(e){e&&_(s),e&&n.d()}}}(),j=xe["status-website"].js&&function(t){let n,s,r=`<script>${xe["status-website"].js}<\/script>`;return{c(){n=new V(!1),s=T(),this.h()},l(e){n=D(e,!1),s=T(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),v(e,s,t)},p:e,d(e){e&&_(s),e&&n.d()}}}(),B=(xe["status-website"]||{}).customBodyHtml&&function(t){let n,s,r=(xe["status-website"]||{}).customBodyHtml+"";return{c(){n=new V(!1),s=T(),this.h()},l(e){n=D(e,!1),s=T(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),v(e,s,t)},p:e,d(e){e&&_(s),e&&n.d()}}}();m=new Le({props:{segment:t[0]}});const q=t[2].default,G=function(e,t,n,s){if(e){const r=l(e,t,n,s);return e[0](r)}}(q,t,t[1],null);return{c(){R&&R.c(),n=T(),L.c(),s=$("link"),r=$("link"),o=$("link"),C&&C.c(),i=T(),O&&O.c(),a=T(),k&&k.c(),c=T(),M&&M.c(),u=T(),j&&j.c(),d=T(),f=E(),B&&B.c(),h=E(),ge(m.$$.fragment),p=E(),b=$("main"),G&&G.c(),y=E(),S=$("footer"),x=$("p"),this.h()},l(e){const t=z('[data-svelte="svelte-ri9y7q"]',document.head);R&&R.l(t),n=T(),L.l(t),s=U(t,"LINK",{rel:!0,href:!0}),r=U(t,"LINK",{rel:!0,type:!0,href:!0}),o=U(t,"LINK",{rel:!0,type:!0,href:!0}),C&&C.l(t),i=T(),O&&O.l(t),a=T(),k&&k.l(t),c=T(),M&&M.l(t),u=T(),j&&j.l(t),d=T(),t.forEach(_),f=H(e),B&&B.l(e),h=H(e),be(m.$$.fragment,e),p=H(e),b=U(e,"MAIN",{class:!0});var l=P(b);G&&G.l(l),l.forEach(_),y=H(e),S=U(e,"FOOTER",{class:!0});var g=P(S);x=U(g,"P",{}),P(x).forEach(_),g.forEach(_),this.h()},h(){I(s,"rel","stylesheet"),I(s,"href",`${xe.path}/global.css`),I(r,"rel","icon"),I(r,"type","image/svg"),I(r,"href",(xe["status-website"]||{}).faviconSvg||(xe["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),I(o,"rel","icon"),I(o,"type","image/png"),I(o,"href",(xe["status-website"]||{}).favicon||"/logo-192.png"),I(b,"class","container"),I(S,"class","svelte-jbr799")},m(e,t){R&&R.m(document.head,null),g(document.head,n),L.m(document.head,null),g(document.head,s),g(document.head,r),g(document.head,o),C&&C.m(document.head,null),g(document.head,i),O&&O.m(document.head,null),g(document.head,a),k&&k.m(document.head,null),g(document.head,c),M&&M.m(document.head,null),g(document.head,u),j&&j.m(document.head,null),g(document.head,d),v(e,f,t),B&&B.m(e,t),v(e,h,t),ve(m,e,t),v(e,p,t),v(e,b,t),G&&G.m(b,null),v(e,y,t),v(e,S,t),g(S,x),x.innerHTML=N,A=!0},p(e,[t]){(xe["status-website"]||{}).customHeadHtml&&R.p(e,t),L.p(e,t),(xe["status-website"]||{}).scripts&&C.p(e,t),(xe["status-website"]||{}).links&&O.p(e,t),(xe["status-website"]||{}).metaTags&&k.p(e,t),xe["status-website"].css&&M.p(e,t),xe["status-website"].js&&j.p(e,t),(xe["status-website"]||{}).customBodyHtml&&B.p(e,t);const n={};1&t&&(n.segment=e[0]),m.$set(n),G&&G.p&&(!A||2&t)&&function(e,t,n,s,r,o){if(r){const i=l(t,n,s,o);e.p(i,r)}}(G,q,e,e[1],A?function(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|r[s];return e}return t.dirty|r}return t.dirty}(q,e[1],t,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[1]),null)},i(e){A||(fe(m.$$.fragment,e),fe(G,e),A=!0)},o(e){he(m.$$.fragment,e),he(G,e),A=!1},d(e){R&&R.d(e),_(n),L.d(e),_(s),_(r),_(o),C&&C.d(e),_(i),O&&O.d(e),_(a),k&&k.d(e),_(c),M&&M.d(e),_(u),j&&j.d(e),_(d),e&&_(f),B&&B.d(e),e&&_(h),_e(m,e),e&&_(p),e&&_(b),G&&G.d(e),e&&_(y),e&&_(S)}}}function Ke(e,t,n){let{$$slots:s={},$$scope:r}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,r=e.$$scope)},[o,r,s]}class We extends ye{constructor(e){super(),$e(this,e,Ke,Ve,i,{segment:0})}}function Je(e){let t,n,s=e[1].stack+"";return{c(){t=$("pre"),n=S(s)},l(e){t=U(e,"PRE",{});var r=P(t);n=k(r,s),r.forEach(_)},m(e,s){v(e,t,s),g(t,n)},p(e,t){2&t&&s!==(s=e[1].stack+"")&&j(n,s)},d(e){e&&_(t)}}}function Fe(t){let n,s,r,o,i,a,c,l,u,d=t[1].message+"";document.title=n=t[0];let f=t[2]&&t[1].stack&&Je(t);return{c(){s=E(),r=$("h1"),o=S(t[0]),i=E(),a=$("p"),c=S(d),l=E(),f&&f.c(),u=T(),this.h()},l(e){z('[data-svelte="svelte-1moakz"]',document.head).forEach(_),s=H(e),r=U(e,"H1",{class:!0});var n=P(r);o=k(n,t[0]),n.forEach(_),i=H(e),a=U(e,"P",{class:!0});var h=P(a);c=k(h,d),h.forEach(_),l=H(e),f&&f.l(e),u=T(),this.h()},h(){I(r,"class","svelte-17w3omn"),I(a,"class","svelte-17w3omn")},m(e,t){v(e,s,t),v(e,r,t),g(r,o),v(e,i,t),v(e,a,t),g(a,c),v(e,l,t),f&&f.m(e,t),v(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&j(o,e[0]),2&t&&d!==(d=e[1].message+"")&&j(c,d),e[2]&&e[1].stack?f?f.p(e,t):(f=Je(e),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:e,o:e,d(e){e&&_(s),e&&_(r),e&&_(i),e&&_(a),e&&_(l),f&&f.d(e),e&&_(u)}}}function Ye(e,t,n){let{status:s}=t,{error:r}=t;return e.$$set=e=>{"status"in e&&n(0,s=e.status),"error"in e&&n(1,r=e.error)},[s,r,false]}class Xe extends ye{constructor(e){super(),$e(this,e,Ye,Fe,i,{status:0,error:1})}}function Qe(e){let n,s,r;const o=[e[4].props];var i=e[4].component;function a(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return i&&(n=new i(a())),{c(){n&&ge(n.$$.fragment),s=T()},l(e){n&&be(n.$$.fragment,e),s=T()},m(e,t){n&&ve(n,e,t),v(e,s,t),r=!0},p(e,t){const r=16&t?me(o,[pe(e[4].props)]):{};if(i!==(i=e[4].component)){if(n){ue();const e=n;he(e.$$.fragment,1,0,(()=>{_e(e,1)})),de()}i?(n=new i(a()),ge(n.$$.fragment),fe(n.$$.fragment,1),ve(n,s.parentNode,s)):n=null}else i&&n.$set(r)},i(e){r||(n&&fe(n.$$.fragment,e),r=!0)},o(e){n&&he(n.$$.fragment,e),r=!1},d(e){e&&_(s),n&&_e(n,e)}}}function Ze(e){let t,n;return t=new Xe({props:{error:e[0],status:e[1]}}),{c(){ge(t.$$.fragment)},l(e){be(t.$$.fragment,e)},m(e,s){ve(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.error=e[0]),2&n&&(s.status=e[1]),t.$set(s)},i(e){n||(fe(t.$$.fragment,e),n=!0)},o(e){he(t.$$.fragment,e),n=!1},d(e){_e(t,e)}}}function et(e){let t,n,s,r;const o=[Ze,Qe],i=[];function a(e,t){return e[0]?0:1}return t=a(e),n=i[t]=o[t](e),{c(){n.c(),s=T()},l(e){n.l(e),s=T()},m(e,n){i[t].m(e,n),v(e,s,n),r=!0},p(e,r){let c=t;t=a(e),t===c?i[t].p(e,r):(ue(),he(i[c],1,1,(()=>{i[c]=null})),de(),n=i[t],n?n.p(e,r):(n=i[t]=o[t](e),n.c()),fe(n,1),n.m(s.parentNode,s))},i(e){r||(fe(n),r=!0)},o(e){he(n),r=!1},d(e){i[t].d(e),e&&_(s)}}}function tt(e){let n,s;const r=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[et]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)o=t(o,r[e]);return n=new We({props:o}),{c(){ge(n.$$.fragment)},l(e){be(n.$$.fragment,e)},m(e,t){ve(n,e,t),s=!0},p(e,[t]){const s=12&t?me(r,[4&t&&{segment:e[2][0]},8&t&&pe(e[3].props)]):{};147&t&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){s||(fe(n.$$.fragment,e),s=!0)},o(e){he(n.$$.fragment,e),s=!1},d(e){_e(n,e)}}}function nt(e,t,n){let{stores:s}=t,{error:r}=t,{status:o}=t,{segments:i}=t,{level0:a}=t,{level1:c=null}=t,{notify:l}=t;var u,d;return F(l),u=Te,d=s,W().$$.context.set(u,d),e.$$set=e=>{"stores"in e&&n(5,s=e.stores),"error"in e&&n(0,r=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,i=e.segments),"level0"in e&&n(3,a=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[r,o,i,a,c,s,l]}class st extends ye{constructor(e){super(),$e(this,e,nt,tt,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const rt=[],ot=[{js:()=>Promise.all([import("./index.e21be0ae.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.53dec279.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.be4c9f15.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","_number_-c4ffc2b4.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.1571cbac.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","_number_-bc1bb552.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.5c670edf.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],it=(at=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:at(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:at(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var at;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ct(e,t,n,s){return new(n||(n=Promise))((function(r,o){function i(e){try{c(s.next(e))}catch(e){o(e)}}function a(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((s=s.apply(e,t||[])).next())}))}function lt(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let ut,dt=1;const ft="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ht={};let mt,pt;function gt(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function bt(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(mt))return null;let t=e.pathname.slice(mt.length);if(""===t&&(t="/"),!rt.some((e=>e.test(t))))for(let n=0;n<it.length;n+=1){const s=it[n],r=s.pattern.exec(t);if(r){const n=gt(e.search),o=s.parts[s.parts.length-1],i=o.params?o.params(r):{},a={host:location.host,path:t,query:n,params:i};return{href:e.href,route:s,match:r,page:a}}}}function vt(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=lt(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,s=String(n?t.href.baseVal:t.href);if(s===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=bt(r);if(o){$t(o,null,t.hasAttribute("sapper:noscroll"),r.hash),e.preventDefault(),ft.pushState({id:ut},"",r.href)}}function _t(){return{x:pageXOffset,y:pageYOffset}}function wt(e){if(ht[ut]=_t(),e.state){const t=bt(new URL(location.href));t?$t(t,e.state.id):location.href=location.href}else!function(e){dt=e}(dt+1),function(e){ut=e}(dt),ft.replaceState({id:ut},"",location.href)}function $t(e,t,n,s){return ct(this,void 0,void 0,(function*(){const r=!!t;if(r)ut=t;else{const e=_t();ht[ut]=e,ut=t=++dt,ht[ut]=n?e:{x:0,y:0}}if(yield pt(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=ht[t];s&&(e=document.getElementById(s.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),ht[ut]=n,n&&(r||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function yt(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let St,Et=null;function Tt(e){const t=lt(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=bt(new URL(e,yt(document)));if(t)Et&&e===Et.href||(Et={href:e,promise:qt(t)}),Et.promise}(t.href)}function xt(e){clearTimeout(St),St=setTimeout((()=>{Tt(e)}),20)}function At(e,t={noscroll:!1,replaceState:!1}){const n=bt(new URL(e,yt(document)));if(n){const s=$t(n,null,t.noscroll);return ft[t.replaceState?"replaceState":"pushState"]({id:ut},"",e),s}return location.href=e,new Promise((()=>{}))}const It="undefined"!=typeof __SAPPER__&&__SAPPER__;let Nt,Pt,Rt,Lt=!1,Ct=[],Ut="{}";const Ot={page:function(e){const t=Ee(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let s;return t.subscribe((t=>{(void 0===s||n&&t!==s)&&e(s=t)}))}}}({}),preloading:Ee(null),session:Ee(It&&It.session)};let kt,Ht,Mt;function Dt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function jt(e){return ct(this,void 0,void 0,(function*(){Nt&&Ot.preloading.set(!0);const t=function(e){return Et&&Et.href===e.href?Et.promise:qt(e)}(e),n=Pt={},s=yield t,{redirect:r}=s;if(n===Pt)if(r)yield At(r.location,{replaceState:!0});else{const{props:t,branch:n}=s;yield Bt(n,t,Dt(t,e.page))}}))}function Bt(e,t,n){return ct(this,void 0,void 0,(function*(){Ot.page.set(n),Ot.preloading.set(!1),Nt?Nt.$set(t):(t.stores={page:{subscribe:Ot.page.subscribe},preloading:{subscribe:Ot.preloading.subscribe},session:Ot.session},t.level0={props:yield Rt},t.notify=Ot.page.notify,Nt=new st({target:Mt,props:t,hydrate:!0})),Ct=e,Ut=JSON.stringify(n.query),Lt=!0,Ht=!1}))}function qt(e){return ct(this,void 0,void 0,(function*(){const{route:t,page:n}=e,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},i={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(r&&(r.statusCode!==e||r.location!==t))throw new Error("Conflicting redirects");r={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!Rt){const e=()=>({});Rt=It.preloaded[0]||e.call(i,{host:n.host,path:n.path,query:n.query,params:{}},kt)}let a,c=1;try{const r=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;a=yield Promise.all(t.parts.map(((t,a)=>ct(this,void 0,void 0,(function*(){const d=s[a];if(function(e,t,n,s){if(s!==Ut)return!0;const r=Ct[e];return!!r&&(t!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(a,d,l,r)&&(u=!0),o.segments[c]=s[a+1],!t)return{segment:d};const f=c++;let h;if(Ht||u||!Ct[a]||Ct[a].part!==t.i){u=!1;const{default:s,preload:r}=yield ot[t.i].js();let o;o=Lt||!It.preloaded[a+1]?r?yield r.call(i,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},kt):{}:It.preloaded[a+1],h={component:s,props:o,segment:d,match:l,part:t.i}}else h=Ct[a];return o[`level${f}`]=h})))))}catch(e){o.error=e,o.status=500,a=[]}return{redirect:r,props:o,branch:a}}))}var Gt,zt,Vt;Ot.session.subscribe((e=>ct(void 0,void 0,void 0,(function*(){if(kt=e,!Lt)return;Ht=!0;const t=bt(new URL(location.href)),n=Pt={},{redirect:s,props:r,branch:o}=yield qt(t);n===Pt&&(s?yield At(s.location,{replaceState:!0}):yield Bt(o,r,Dt(r,t.page)))})))),Gt={target:document.querySelector("#sapper")},zt=Gt.target,Mt=zt,Vt=It.baseUrl,mt=Vt,pt=jt,"scrollRestoration"in ft&&(ft.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{ft.scrollRestoration="auto"})),addEventListener("load",(()=>{ft.scrollRestoration="manual"})),addEventListener("click",vt),addEventListener("popstate",wt),addEventListener("touchstart",Tt),addEventListener("mousemove",xt),It.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:s,preloaded:r,status:o,error:i}=It;Rt||(Rt=r&&r[0]);const a={error:i,status:o,session:s,level0:{props:Rt},level1:{props:{status:o,error:i},component:Xe},segments:r},c=gt(n);Bt([],a,{host:e,path:t,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;ft.replaceState({id:dt},"",t);const n=bt(new URL(location.href));if(n)return $t(n,dt,!0,e)}));export{_e as A,x as B,r as C,Q as D,D as E,c as F,d as G,V as H,z as I,ke as J,y as K,O as L,At as M,B as N,A as O,t as P,N as Q,me as R,ye as S,F as T,Y as U,u as V,pe as W,se as X,G as Y,P as a,k as b,U as c,_ as d,$ as e,I as f,v as g,g as h,$e as i,E as j,H as k,ue as l,he as m,e as n,de as o,fe as p,J as q,xe as r,i as s,S as t,j as u,T as v,w,ge as x,be as y,ve as z};

import __inject_styles from './inject_styles.803b7e80.js';