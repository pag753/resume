(function(e){function a(a){for(var t,i,n=a[0],o=a[1],c=a[2],d=0,m=[];d<n.length;d++)i=n[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t]);u&&u(a);while(m.length)m.shift()();return l.push.apply(l,c||[]),s()}function s(){for(var e,a=0;a<l.length;a++){for(var s=l[a],t=!0,i=1;i<s.length;i++){var n=s[i];0!==r[n]&&(t=!1)}t&&(l.splice(a--,1),e=o(o.s=s[0]))}return e}var t={},i={app:0},r={app:0},l=[];function n(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-74844165":"61566b57","chunk-7491b110":"475b59dd","chunk-749b35f4":"d92cb16b","chunk-749e249d":"f0ea1b55","chunk-74beb37f":"d70e581a","chunk-74c29113":"420c620d"}[e]+".js"}function o(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(e){var a=[],s={"chunk-74844165":1,"chunk-7491b110":1,"chunk-749b35f4":1,"chunk-749e249d":1,"chunk-74beb37f":1,"chunk-74c29113":1};i[e]?a.push(i[e]):0!==i[e]&&s[e]&&a.push(i[e]=new Promise((function(a,s){for(var t="css/"+({}[e]||e)+"."+{"chunk-74844165":"057e078c","chunk-7491b110":"ff8b094d","chunk-749b35f4":"611f1d51","chunk-749e249d":"e8a149bb","chunk-74beb37f":"4b2e1ef9","chunk-74c29113":"4fcff9e9"}[e]+".css",r=o.p+t,l=document.getElementsByTagName("link"),n=0;n<l.length;n++){var c=l[n],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===t||d===r))return a()}var m=document.getElementsByTagName("style");for(n=0;n<m.length;n++){c=m[n],d=c.getAttribute("data-href");if(d===t||d===r)return a()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=a,u.onerror=function(a){var t=a&&a.target&&a.target.src||r,l=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=t,delete i[e],u.parentNode.removeChild(u),s(l)},u.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(u)})).then((function(){i[e]=0})));var t=r[e];if(0!==t)if(t)a.push(t[2]);else{var l=new Promise((function(a,s){t=r[e]=[a,s]}));a.push(t[2]=l);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=n(e);var m=new Error;c=function(a){d.onerror=d.onload=null,clearTimeout(u);var s=r[e];if(0!==s){if(s){var t=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;m.message="Loading chunk "+e+" failed.\n("+t+": "+i+")",m.name="ChunkLoadError",m.type=t,m.request=i,s[1](m)}r[e]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(a)},o.m=e,o.c=t,o.d=function(e,a,s){o.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,a){if(1&a&&(e=o(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)o.d(s,t,function(a){return e[a]}.bind(null,t));return s},o.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(a,"a",a),a},o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},o.p="/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=a,c=c.slice();for(var m=0;m<c.length;m++)a(c[m]);var u=d;l.push([0,"chunk-vendors"]),s()})({0:function(e,a,s){e.exports=s("56d7")},"30fb":function(e,a,s){},"379f":function(e,a,s){"use strict";s("30fb")},"56d7":function(e,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("d3b7"),s("3ca3"),s("ddb0");var t=s("2b0e"),i=function(){var e=this,a=e._self._c;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"text-center pt-2 pb-5"},[a("router-link",{attrs:{to:"/"}},[e._v("English")]),a("br"),a("router-link",{attrs:{to:"/spanish"}},[e._v("Spanish")]),a("br"),a("a",{attrs:{href:"/resume.pdf",target:"_blank"},on:{click:function(a){return e.mandar(3)}}},[a("i",{staticClass:"fa fa-file-pdf",attrs:{"aria-hidden":"true"}}),e._v(" PDF English")]),a("br"),a("a",{attrs:{href:"/cv.pdf",target:"_blank"},on:{click:function(a){return e.mandar(4)}}},[a("i",{staticClass:"fa fa-file-pdf",attrs:{"aria-hidden":"true"}}),e._v(" PDF Spanish")])],1),a("router-view"),a("footer",{staticClass:"footer text-center pt-2 pb-5"},[a("router-link",{attrs:{to:"/"}},[e._v("English")]),a("br"),a("router-link",{attrs:{to:"/spanish"}},[e._v("Spanish")]),a("br"),a("a",{attrs:{href:"/resume.pdf",target:"_blank"},on:{click:function(a){return e.mandar(3)}}},[a("i",{staticClass:"fa fa-file-pdf",attrs:{"aria-hidden":"true"}}),e._v(" PDF English")]),a("br"),a("a",{attrs:{href:"/cv.pdf",target:"_blank"},on:{click:function(a){return e.mandar(4)}}},[a("i",{staticClass:"fa fa-file-pdf",attrs:{"aria-hidden":"true"}}),e._v(" PDF Spanish")])],1)],1)},r=[],l=s("c7eb"),n=s("1da1"),o=s("bc3a"),c=s.n(o),d={mandar:function(){var e=Object(n["a"])(Object(l["a"])().mark((function e(){var a,s=arguments;return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=s.length>0&&void 0!==s[0]?s[0]:0,e.next=3,c.a.get("/index.php/welcome/telegram",{params:{tipo:a,device:navigator.userAgent}});case 3:case"end":return e.stop()}}),e)})));function a(){return e.apply(this,arguments)}return a}()},m={name:"app",components:{},methods:{mandar:function(){var e=Object(n["a"])(Object(l["a"])().mark((function e(a){return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d.mandar(a);case 2:case"end":return e.stop()}}),e)})));function a(a){return e.apply(this,arguments)}return a}()}},u=m,p=(s("379f"),s("2877")),b=Object(p["a"])(u,i,r,!1,null,null,null),v=b.exports,g=s("8c4f"),f=function(){var e=this,a=e._self._c;return a("HelloWorld")},h=[],C=function(){var e=this,a=e._self._c;return a("article",{staticClass:"resume-wrapper text-center position-relative"},[a("div",{staticClass:"resume-wrapper-inner mx-auto text-left bg-white shadow-lg"},[a("header",{staticClass:"resume-header pt-4 pt-md-0"},[a("div",{staticClass:"media flex-column flex-md-row"},[a("div",{staticClass:"media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0"},[a("div",{staticClass:"primary-info"},[a("h1",{staticClass:"name mt-0 mb-1 text-white text-uppercase text-uppercase"},[e._v("Pablo de Jesús")]),a("div",{staticClass:"title mb-3"},[e._v(e._s(e.arr[1]))]),e._m(0)]),e._m(1),e._m(2)])])]),a("div",{staticClass:"resume-body p-5"},[a("section",{staticClass:"resume-section summary-section mb-5"},[a("h2",{staticClass:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},[e._v(e._s(e.arr[2]))]),a("div",{staticClass:"resume-section-content"},[a("p",{staticClass:"mb-0"},[e._v(e._s(e.arr[3]))])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-9"},[a("section",{staticClass:"resume-section experience-section mb-5"},[a("h2",{staticClass:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},[e._v(e._s(e.arr[4]))]),a("div",{staticClass:"resume-section-content"},[a("div",{staticClass:"resume-timeline position-relative"},[a("article",{staticClass:"resume-timeline-item position-relative pb-5"},[a("div",{staticClass:"resume-timeline-item-header mb-2"},[e._m(3),a("div",{staticClass:"resume-position-time"},[e._v(e._s(e.arr[53]))])]),a("div",{staticClass:"resume-timeline-item-desc"},[a("p",[e._v(e._s(e.arr[54]))]),a("h4",{staticClass:"resume-timeline-item-desc-heading font-weight-bold"},[e._v(e._s(e.arr[17]))]),a("p",[e._v(e._s(e.arr[55]))]),a("h4",{staticClass:"resume-timeline-item-desc-heading font-weight-bold"},[e._v(e._s(e.arr[13]))]),e._m(4)])]),a("article",{staticClass:"resume-timeline-item position-relative pb-5"},[a("div",{staticClass:"resume-timeline-item-header mb-2"},[a("div",{staticClass:"d-flex flex-column flex-md-row"},[a("h3",{staticClass:"resume-position-title font-weight-bold mb-1"},[e._v(e._s(e.arr[43]))]),a("div",{staticClass:"resume-company-name ml-auto"},[e._v(e._s(e.arr[49]))])]),a("div",{staticClass:"resume-position-time"},[e._v(e._s(e.arr[50]))])]),a("div",{staticClass:"resume-timeline-item-desc"},[a("p",[e._v(e._s(e.arr[51]))]),a("h4",{staticClass:"resume-timeline-item-desc-heading font-weight-bold"},[e._v(e._s(e.arr[17]))]),a("p",[e._v(e._s(e.arr[52]))]),a("h4",{staticClass:"resume-timeline-item-desc-heading font-weight-bold"},[e._v(e._s(e.arr[13]))]),e._m(5)])]),a("article",{staticClass:"resume-timeline-item position-relative pb-5"},[a("div",{staticClass:"resume-timeline-item-header mb-2"},[a("div",{staticClass:"d-flex flex-column flex-md-row"},[a("h3",{staticClass:"resume-position-title font-weight-bold mb-1"},[e._v(e._s(e.arr[43]))]),a("div",{staticClass:"resume-company-name ml-auto"},[e._v(e._s(e.arr[44]))])]),a("div",{staticClass:"resume-position-time"},[e._v(e._s(e.arr[45]))])]),a("div",{staticClass:"resume-timeline-item-desc"},[a("p",[e._v(e._s(e.arr[46]))]),a("h4",{staticClass:"resume-timeline-item-desc-heading font-weight-bold"},[e._v(e._s(e.arr[17]))]),a("p",[e._v(e._s(e.arr[47]))]),a("h4",{staticClass:"resume-timeline-item-desc-heading font-weight-bold"},[e._v(e._s(e.arr[13]))]),e._m(6)])]),a("article",{staticClass:"resume-timeline-item position-relative pb-5"},[a("div",{staticClass:"resume-timeline-item-header mb-2"},[a("div",{staticClass:"d-flex flex-column flex-md-row"},[a("h3",{staticClass:"resume-position-title font-weight-bold mb-1"},[e._v(e._s(e.arr[5]))]),a("div",{staticClass:"resume-company-name ml-auto"},[e._v("TecNM / Instituto Tecnológico de Tehuacán")])]),a("div",{staticClass:"resume-position-time"},[e._v(e._s(e.arr[6]))])]),a("div",{staticClass:"resume-timeline-item-desc"},[a("p",[e._v(e._s(e.arr[7]))]),a("h4",{staticClass:"resume-timeline-item-desc-heading font-weight-bold"},[e._v(e._s(e.arr[8]))]),a("p",[e._v(e._s(e.arr[9]))]),a("ul",[a("li",[e._v(e._s(e.arr[10]))]),a("li",[e._v(e._s(e.arr[11]))]),a("li",[e._v(e._s(e.arr[12]))])]),a("h4",{staticClass:"resume-timeline-item-desc-heading font-weight-bold"},[e._v(e._s(e.arr[13]))]),e._m(7)])]),a("article",{staticClass:"resume-timeline-item position-relative pb-5"},[a("div",{staticClass:"resume-timeline-item-header mb-2"},[a("div",{staticClass:"d-flex flex-column flex-md-row"},[a("h3",{staticClass:"resume-position-title font-weight-bold mb-1"},[e._v(e._s(e.arr[14]))]),a("div",{staticClass:"resume-company-name ml-auto"},[e._v("Lavados Especiales")])]),a("div",{staticClass:"resume-position-time"},[e._v(e._s(e.arr[15]))])]),a("div",{staticClass:"resume-timeline-item-desc"},[a("p",[e._v(e._s(e.arr[16]))]),a("h4",{staticClass:"resume-timeline-item-desc-heading font-weight-bold"},[e._v(e._s(e.arr[17]))]),a("p",[e._v(e._s(e.arr[18]))]),a("h4",{staticClass:"resume-timeline-item-desc-heading font-weight-bold"},[e._v(e._s(e.arr[13]))]),e._m(8)])])])])])]),a("div",{staticClass:"col-lg-3"},[a("section",{staticClass:"resume-section skills-section mb-5"},[a("h2",{staticClass:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},[e._v(e._s(e.arr[19]))]),a("div",{staticClass:"resume-section-content"},[a("div",{staticClass:"resume-skill-item"},[a("h4",{staticClass:"resume-skills-cat font-weight-bold"},[e._v(e._s(e.arr[20]))]),e._m(9)]),e._m(10),e._m(11),a("div",{staticClass:"resume-skill-item"},[a("h4",{staticClass:"resume-skills-cat font-weight-bold"},[e._v(e._s(e.arr[21]))]),e._m(12)])])]),a("section",{staticClass:"resume-section education-section mb-5"},[a("h2",{staticClass:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},[e._v(e._s(e.arr[22]))]),a("div",{staticClass:"resume-section-content"},[a("ul",{staticClass:"list-unstyled"},[a("li",{staticClass:"mb-2"},[a("div",{staticClass:"resume-degree font-weight-bold"},[e._v(e._s(e.arr[23]))]),e._m(13),a("div",{staticClass:"resume-degree-time"},[e._v("2014 - 2018")])])])])]),a("section",{staticClass:"resume-section education-section mb-5"},[a("h2",{staticClass:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},[e._v(e._s(e.arr[41]))]),e._m(14),e._m(15)]),a("section",{staticClass:"resume-section reference-section mb-5"},[a("h2",{staticClass:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},[e._v(e._s(e.arr[24]))]),a("div",{staticClass:"resume-section-content"},[a("ul",{staticClass:"list-unstyled resume-awards-list"},[a("li",{staticClass:"mb-2 pl-4 position-relative"},[a("i",{staticClass:"resume-award-icon fas fa-trophy position-absolute",attrs:{"data-fa-transform":"shrink-2"}}),a("div",{staticClass:"resume-award-name"},[e._v(e._s(e.arr[25]))]),a("div",{staticClass:"resume-award-desc"},[e._v(e._s(e.arr[26])+" "),a("a",{attrs:{href:"http://www.itpuebla.edu.mx",target:"_blank"}},[e._v("IT of Puebla")]),e._v(" "+e._s(e.arr[48]))])])])]),a("div",{staticClass:"resume-section-content"},[a("ul",{staticClass:"list-unstyled resume-awards-list"},[a("li",{staticClass:"mb-2 pl-4 position-relative"},[a("i",{staticClass:"resume-award-icon fas fa-trophy position-absolute",attrs:{"data-fa-transform":"shrink-2"}}),a("div",{staticClass:"resume-award-name"},[e._v(e._s(e.arr[39]))]),a("div",{staticClass:"resume-award-desc"},[e._v(e._s(e.arr[40]))])])])]),a("div",{staticClass:"resume-section-content"},[a("ul",{staticClass:"list-unstyled resume-awards-list"},[a("li",{staticClass:"mb-2 pl-4 position-relative"},[a("i",{staticClass:"resume-award-icon fas fa-trophy position-absolute",attrs:{"data-fa-transform":"shrink-2"}}),a("div",{staticClass:"resume-award-name"},[e._v("ENEIT 2016")]),a("div",{staticClass:"resume-award-desc"},[e._v(e._s(e.arr[42]))])])])])]),a("section",{staticClass:"resume-section language-section mb-5"},[a("h2",{staticClass:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},[e._v(e._s(e.arr[27]))]),a("div",{staticClass:"resume-section-content"},[a("ul",{staticClass:"list-unstyled resume-lang-list"},[a("li",{staticClass:"mb-2"},[a("span",{staticClass:"resume-lang-name font-weight-bold"},[e._v(e._s(e.arr[28])+" ")]),a("small",{staticClass:"text-muted font-weight-normal"},[e._v("("+e._s(e.arr[29])+")")])]),a("li",{staticClass:"mb-2 align-middle"},[a("span",{staticClass:"resume-lang-name font-weight-bold"},[e._v(e._s(e.arr[30]))]),a("small",{staticClass:"text-muted font-weight-normal"},[e._v("("+e._s(e.arr[31])+")")])])])])]),a("section",{staticClass:"resume-section interests-section mb-5"},[a("h2",{staticClass:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},[e._v(e._s(e.arr[32]))]),a("div",{staticClass:"resume-section-content"},[a("ul",{staticClass:"list-unstyled"},[a("li",{staticClass:"mb-1"},[e._v(e._s(e.arr[33]))]),a("li",{staticClass:"mb-1"},[e._v(e._s(e.arr[34]))]),a("li",{staticClass:"mb-1"},[e._v(e._s(e.arr[35]))])])])]),a("section",{staticClass:"resume-section education-section mb-5"},[a("h2",{staticClass:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},[e._v(e._s(e.arr[36]))]),a("div",{staticClass:"resume-section-content"},[a("ul",{staticClass:"list-unstyled"},[a("li",{staticClass:"mb-2"},[a("div",{staticClass:"resume-degree font-weight-bold"},[e._v(e._s(e.arr[37]))]),e._m(16),a("div",{staticClass:"resume-degree-time"},[e._v(e._s(e.arr[38]))])])])])])])])])])])},_=[function(){var e=this,a=e._self._c;return a("ul",{staticClass:"list-unstyled"},[a("li",{staticClass:"mb-2"},[a("a",{attrs:{href:"mailto:pablo.gonzalez.alvarado.753@gmail.com"}},[a("i",{staticClass:"far fa-envelope fa-fw mr-2",attrs:{"data-fa-transform":"grow-3"}}),e._v("pablo.gonzalez.alvarado.753@gmail.com")])]),a("li",[a("a",{attrs:{href:"tel:+52 238 133 60 66"}},[a("i",{staticClass:"fas fa-mobile-alt fa-fw mr-2",attrs:{"data-fa-transform":"grow-6"}}),e._v("+52 238 133 60 66")])])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"secondary-info ml-md-auto mt-2"},[a("ul",{staticClass:"resume-social list-unstyled"},[a("li",{staticClass:"mb-3"},[a("a",{attrs:{href:"https://www.linkedin.com/in/pag753/",target:"_blank"}},[a("span",{staticClass:"fa-container text-center mr-2"},[a("i",{staticClass:"fab fa-linkedin-in"})]),e._v("linkedin.com/in/pag753")])]),a("li",{staticClass:"mb-3"},[a("a",{attrs:{href:"https://github.com/pag753/",target:"_blank"}},[a("span",{staticClass:"fa-container text-center mr-2"},[a("i",{staticClass:"fab fa-github-alt fa-fw"})]),e._v("github.com/pag753")])]),a("li",{staticClass:"mb-3"},[a("a",{attrs:{href:"https://t.me/pa_753",target:"_blank"}},[a("span",{staticClass:"fa-container text-center mr-1"},[a("i",{staticClass:"fab fa-telegram"})]),e._v("Telegram")])]),a("li",[a("a",{attrs:{href:"https://pabloresume.000webhostapp.com/",target:"_blank"}},[a("span",{staticClass:"fa-container text-center mr-2"},[a("i",{staticClass:"fas fa-globe"})]),e._v("https://pabloresume.000webhostapp.com/")])])])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"secondary-info ml-md-auto mt-2"},[a("ul",{staticClass:"resume-social list-unstyled"},[a("li",{staticClass:"mb-3"},[a("a",{attrs:{href:"whatsapp://send?abid=+5212381336066&text=Hello%2C%20Pablo!",target:"_blank"}},[a("span",{staticClass:"fa-container text-center mr-1"},[a("i",{staticClass:"fab fa-whatsapp"})])])]),a("li",{staticClass:"mb-3"},[a("a",{attrs:{href:"https://www.facebook.com/messages/t/PAdJGA",target:"_blank"}},[a("span",{staticClass:"fa-container text-center mr-1"},[a("i",{staticClass:"fab fa-facebook-messenger"})])])]),a("li",{staticClass:"mb-3"},[a("a",{attrs:{href:"https://www.instagram.com/pag753",target:"_blank"}},[a("span",{staticClass:"fa-container text-center mr-1"},[a("i",{staticClass:"fab fa-instagram"})])])])])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"d-flex flex-column flex-md-row"},[a("h3",{staticClass:"resume-position-title font-weight-bold mb-1"},[e._v("Full stack developer")]),a("div",{staticClass:"resume-company-name ml-auto"},[e._v("Oracle")])])},function(){var e=this,a=e._self._c;return a("ul",{staticClass:"list-inline"},[a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-primary badge-pill"},[e._v("Node.js")])]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-primary badge-pill"},[e._v("Docker")])])])},function(){var e=this,a=e._self._c;return a("ul",{staticClass:"list-inline"},[a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-primary badge-pill"},[e._v("Node.js")])]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-primary badge-pill"},[e._v("AWS")])]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-primary badge-pill"},[e._v("Docker")])]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-primary badge-pill"},[e._v("Java")])]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-primary badge-pill"},[e._v(".Net Core")])])])},function(){var e=this,a=e._self._c;return a("ul",{staticClass:"list-inline"},[a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-primary badge-pill"},[e._v("Java")])]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-primary badge-pill"},[e._v("Spring boot")])]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-primary badge-pill"},[e._v("Struts")])]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-primary badge-pill"},[e._v("jQuery")])]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-primary badge-pill"},[e._v("HTML5")])]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-primary badge-pill"},[e._v("JSP")])]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-primary badge-pill"},[e._v("Vue.js")])])])},function(){var e=this,a=e._self._c;return a("ul",{staticClass:"list-inline"},[a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-primary badge-pill"},[e._v("PHP 7")])]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-primary badge-pill"},[e._v("Yii 2")])]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-primary badge-pill"},[e._v("jQuery")])]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-primary badge-pill"},[e._v("MariaDB")])]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-primary badge-pill"},[e._v("HTML5")])]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-primary badge-pill"},[e._v("Bootstrap 4")])])])},function(){var e=this,a=e._self._c;return a("ul",{staticClass:"list-inline"},[a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-primary badge-pill"},[e._v("PHP 7")])]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-primary badge-pill"},[e._v("Codeigniter")])]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-primary badge-pill"},[e._v("MySQL")])]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-primary badge-pill"},[e._v("jQuery")])]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-primary badge-pill"},[e._v("HTML5")])]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-primary badge-pill"},[e._v("Bootstrap 4")])]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-primary badge-pill"},[e._v("Data Tables")])])])},function(){var e=this,a=e._self._c;return a("ul",{staticClass:"list-unstyled mb-4"},[a("li",{staticClass:"mb-2"},[a("div",{staticClass:"resume-skill-name"},[e._v("JavaScript")]),a("div",{staticClass:"progress resume-progress"},[a("div",{staticClass:"progress-bar theme-progress-bar-dark",staticStyle:{width:"85%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])]),a("li",{staticClass:"mb-2"},[a("div",{staticClass:"resume-skill-name"},[e._v("PHP")]),a("div",{staticClass:"progress resume-progress"},[a("div",{staticClass:"progress-bar theme-progress-bar-dark",staticStyle:{width:"80%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])]),a("li",{staticClass:"mb-2"},[a("div",{staticClass:"resume-skill-name"},[e._v("Python")]),a("div",{staticClass:"progress resume-progress"},[a("div",{staticClass:"progress-bar theme-progress-bar-dark",staticStyle:{width:"60%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])]),a("li",{staticClass:"mb-2"},[a("div",{staticClass:"resume-skill-name"},[e._v("Java")]),a("div",{staticClass:"progress resume-progress"},[a("div",{staticClass:"progress-bar theme-progress-bar-dark",staticStyle:{width:"60%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])]),a("li",{staticClass:"mb-2"},[a("div",{staticClass:"resume-skill-name"},[e._v("C / C++ / C#")]),a("div",{staticClass:"progress resume-progress"},[a("div",{staticClass:"progress-bar theme-progress-bar-dark",staticStyle:{width:"50%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])]),a("li",{staticClass:"mb-2"},[a("div",{staticClass:"resume-skill-name"},[e._v("Typescript")]),a("div",{staticClass:"progress resume-progress"},[a("div",{staticClass:"progress-bar theme-progress-bar-dark",staticStyle:{width:"50%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"resume-skill-item"},[a("h4",{staticClass:"resume-skills-cat font-weight-bold"},[e._v("Frontend")]),a("ul",{staticClass:"list-unstyled mb-4"},[a("li",{staticClass:"mb-2"},[a("div",{staticClass:"resume-skill-name"},[e._v("jQuery")]),a("div",{staticClass:"progress resume-progress"},[a("div",{staticClass:"progress-bar theme-progress-bar-dark",staticStyle:{width:"80%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])]),a("li",{staticClass:"mb-2"},[a("div",{staticClass:"resume-skill-name"},[e._v("Bootstrap")]),a("div",{staticClass:"progress resume-progress"},[a("div",{staticClass:"progress-bar theme-progress-bar-dark",staticStyle:{width:"80%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])]),a("li",{staticClass:"mb-2"},[a("div",{staticClass:"resume-skill-name"},[e._v("HTML/CSS")]),a("div",{staticClass:"progress resume-progress"},[a("div",{staticClass:"progress-bar theme-progress-bar-dark",staticStyle:{width:"80%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])]),a("li",{staticClass:"mb-2"},[a("div",{staticClass:"resume-skill-name"},[e._v("Vue.js")]),a("div",{staticClass:"progress resume-progress"},[a("div",{staticClass:"progress-bar theme-progress-bar-dark",staticStyle:{width:"50%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])])])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"resume-skill-item"},[a("h4",{staticClass:"resume-skills-cat font-weight-bold"},[e._v("Backend")]),a("ul",{staticClass:"list-unstyled"},[a("li",{staticClass:"mb-2"},[a("div",{staticClass:"resume-skill-name"},[e._v("PHP Frameworks")]),a("div",{staticClass:"progress resume-progress"},[a("div",{staticClass:"progress-bar theme-progress-bar-dark",staticStyle:{width:"80%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])]),a("li",{staticClass:"mb-2"},[a("div",{staticClass:"resume-skill-name"},[e._v("Node.js")]),a("div",{staticClass:"progress resume-progress"},[a("div",{staticClass:"progress-bar theme-progress-bar-dark",staticStyle:{width:"70%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])]),a("li",{staticClass:"mb-2"},[a("div",{staticClass:"resume-skill-name"},[e._v("Python/Django")]),a("div",{staticClass:"progress resume-progress"},[a("div",{staticClass:"progress-bar theme-progress-bar-dark",staticStyle:{width:"50%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])]),a("li",{staticClass:"mb-2"},[a("div",{staticClass:"resume-skill-name"},[e._v("Java/Spring Boot")]),a("div",{staticClass:"progress resume-progress"},[a("div",{staticClass:"progress-bar theme-progress-bar-dark",staticStyle:{width:"50%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])])])])},function(){var e=this,a=e._self._c;return a("ul",{staticClass:"list-inline"},[a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-light"},[e._v("AWS")])]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-light"},[e._v("Docker")])]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-light"},[e._v("Intellij")])]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-light"},[e._v("Git")])]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-light"},[e._v("FontAwesome")])]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-light"},[e._v("Linux")])]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge badge-light"},[e._v("Jira")])])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"resume-degree-org"},[a("a",{attrs:{href:"http://www.ittehuacan.edu.mx",target:"_blank"}},[e._v("TecNM / Instituto Tecnológico de Tehuacán")])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"resume-section-content"},[a("ul",{staticClass:"list-unstyled"},[a("li",{staticClass:"mb-2"},[a("div",{staticClass:"resume-degree font-weight-bold"},[e._v("Microsoft Technology Associate")]),a("div",{staticClass:"resume-degree-org"},[e._v("Software Development Fundamentals")]),a("div",{staticClass:"resume-degree-time"},[e._v("2015")])])])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"resume-section-content"},[a("ul",{staticClass:"list-unstyled"},[a("li",{staticClass:"mb-2"},[a("div",{staticClass:"resume-degree font-weight-bold"},[e._v("Microsoft Technology Associate")]),a("div",{staticClass:"resume-degree font-weight-bold"}),a("div",{staticClass:"resume-degree-org"},[e._v("Database Fundamentals")]),a("div",{staticClass:"resume-degree-time"},[e._v("2015")])])])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"resume-degree-org"},[a("a",{attrs:{href:"https://www.campomision.org.mx/",target:"_blank"}},[e._v("Misioneros Servidores de la Palabra")])])}],w={arr:["Curriculum Vitae Pablo de Jesús","Desarrollador Full Stack","Resúmen","Ingeniero de software con más dos años de experiencia en la parte de backend y frontend utilizando la tecnología PHP y sus frameworks Codeigniter y Yii2. Participando en proyectos de gestión de información en bases de datos. Estoy dispuesto a aprender más y usar otras tecnologías sobre todo en JavaScript, Python y Ruby.","Experiencia Laboral","Desarrollador Full Stack","Septiembre de 2018 - Diciembre de 2018","Responsable del desarrollo full stack y la base de datos del módulo 'Instrumentación didáctica' para uso de todos los docentes del Tecnológico Nacional de México.","Logros:",'Antes los docentes hacían la instrumentación didáctica en programas como "word", siguiendo normas y formatos específicos, pero ahora:',"El llenado de datos es rápido, intuitivo y eficaz.","Al final de la captura los docentes obtienen la instrumentación didáctica en un PDF cumpliendo las normas y formatos requeridos y la confianza de que todo lo que escribieron y guardaron se encuentra en una base de datos.","El documento una vez generado puede ser consultado o editado en la plataforma cuando y donde ellos quieran desde un navegador web y con una conexión a internet.","Tecnologías usadas:","Desarrollador Web","Febero de 2018 - Julio de 2018","Responsable del desarrollo full stack y de base de datos de la plataforma para la gestión del proceso de lavandería en la empresa 'Lavados Especiales' en la ciudad de Puebla.","Descripción","Plataforma para automatizar de manera eficiente el control de los procesos de lavado y la administración de la empresa con la implementación del proyecto para obtener un mejor control interno más rápido y eficaz.","Habilidades y Herramientas","Lenguajes","Otros","Educación","Ingeniería en Sistemas Computacionales","Reconocimientos","Concurso estatal de programación","En el","Idiomas","Español","Nativo","Inglés","Intermedio","Intereses","Leer","Nadar","Ver películas","Voluntariado","Misionero de Tiempo Completo","Abril de 2011 - Septiembre de 2013","Evento Nacional Estudiantil de Innovación Tecnológica (ENEIT) 2016",'Etapa nacional en el IT de Pachuca del 22 al 25 de noviembre de 2016 por el proyecto “Enerluz".',"Certificaciones","Etapa regional en el IT de Gustavo A. Madero en la Ciudad de México, del 20 al 23 de septiembre de 2016 por los proyectos “Enerluz” y “Autosilla”. Ganador con “Enerluz”.","Desarrollador Full Stack","Grupo Salinas","Marzo 2019 - Junio de 2020","Desarrollador full stack en Java, Vue.js y Python en la empresa.","Responsable de desarrollar servicios REST y portales web para la gestión de la empresa.","el 22 de Abril de 2016. Ganador del tercer lugar en la categoría intermedia.","Alphacredit","Julio 2020 - Agosto 2021","Desarrollador full stack en Node.js, Java y .Net Core en la empresa","Responsable de desarrollar en Node.js, Java y .Net Core procesos de la empresa.","Septiembre 2021 - Actualmente","Desarrollador full stack en la empresa","Responsable de desarrollo full stack"]},y={arr:["Resume Pablo de Jesús","Full Stack Developer","Career Summary","Software engineer with more of two years of experience in the backend part and frontend using PHP technology and its Codeigniter and Yii2 frameworks. Participating in information management projects in databases. I am willing to learn more and use other technologies especially in JavaScript, Python and Ruby.","Work Experience","Full Stack Developer","September 2018 - December 2018","Responsible for full stack development and database of the module 'didactic instrumentation' for use by all teachers of the National Technological Institute  of Mexico.","Achievements:",'Before the teachers made the didactic instrumentation in programs such as "word", following specific standards and formats, but now:',"Filling data is fast, intuitive and effective.","At the end of the capture the teachers obtain the didactic instrumentation in a PDF complying with the norms and formats required and the confidence that everything they wrote and saved is in a database.","The document once generated can be consulted or edited on the platform when and where they want from a web browser and with an internet connection.","Technologies used:","Web Developer","February 2018 - July 2018","Responsible for full stack development and database of platform for the management of laundry process in the company 'Lavados Especiales' from Puebla city.","Description","Platform for automate in efficiently way the control of laundry processes and the company administration with the implementation of the project to obtain a better fastest and internal control.","Skills and Tools","Languajes","Others","Education","Computer Systems Enginer","Awards","State programming competition","In the","Language","Spanish","Native","English","Intermediate","Interests","Reading","Swimming","Watching movies","Volunteer","Full Time Missioner","April 2011 - September 2013","National Student Event of Technological Innovation (ENEIT) 2016",'National stage in the IT of Pachuca from 22 to 25 November 2016 by the project "Enerluz".',"Certifications",'Regional stage in IT of Gustavo A. Madero in Mexico City, from 20 to 23 September 2016 by the projects “Enerluz” and "Autosilla”. Winner with “Enerluz” project.',"Full Stack Developer","Grupo Salinas","March 2019 - June 2020","Java, Vue.js and Python full stack developer in the company.","Responsible for developing REST services and web portals for the management of the company.","on April 22, 2016. Winner of the third place in the intermediate category.","Alphacredit","July 2020 - August 2021","Nodejs, Java and .Net Core developer in the company.","Responsible for developing Node.js, Java and .Net Core processes in the company.","September 2020 - At present","Software developer in the company","Responsible for developing full stack in the company."]},k={name:"HelloWorld",data:function(){return{arr:"/"==this.$route.path?y.arr:w.arr}}},x=k,S=Object(p["a"])(x,C,_,!1,null,"411bab7c",null),j=S.exports,P={name:"Spanish",components:{HelloWorld:j},beforeCreate:function(){var e=Object(n["a"])(Object(l["a"])().mark((function e(){return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d.mandar(2);case 2:case"end":return e.stop()}}),e)})));function a(){return e.apply(this,arguments)}return a}()},E=P,T=Object(p["a"])(E,f,h,!1,null,"bb003f32",null),O=T.exports,A=function(){var e=this,a=e._self._c;return a("HelloWorld")},D=[],N={name:"English",components:{HelloWorld:j},beforeCreate:function(){var e=Object(n["a"])(Object(l["a"])().mark((function e(){return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d.mandar(1);case 2:case"end":return e.stop()}}),e)})));function a(){return e.apply(this,arguments)}return a}()},M=N,J=Object(p["a"])(M,A,D,!1,null,"4d24db64",null),I=J.exports,F=Math.floor(6*Math.random())+1;s("5b67")("./pillar-".concat(F,".css")),t["a"].config.productionTip=!1,t["a"].use(g["a"]);var L=[{path:"/spanish",component:O},{path:"/",component:I}],H=new g["a"]({routes:L});new t["a"]({router:H,render:function(e){return e(v)}}).$mount("#app")},"5b67":function(e,a,s){var t={"./pillar-1.css":["62da","chunk-7491b110"],"./pillar-2.css":["98f1","chunk-74beb37f"],"./pillar-3.css":["5fbf","chunk-749b35f4"],"./pillar-4.css":["702e","chunk-749e249d"],"./pillar-5.css":["5559","chunk-74844165"],"./pillar-6.css":["8a6c","chunk-74c29113"]};function i(e){if(!s.o(t,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=t[e],i=a[0];return s.e(a[1]).then((function(){return s.t(i,7)}))}i.keys=function(){return Object.keys(t)},i.id="5b67",e.exports=i}});
//# sourceMappingURL=app.f6d56033.js.map