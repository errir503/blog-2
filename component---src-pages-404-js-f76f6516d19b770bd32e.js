(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{185:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return s});var n=a(0),r=a.n(n),o=a(193),i=a(191);var c=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return r.a.createElement(o.a,{location:this.props.location,title:t},r.a.createElement(i.a,{title:"404: Not Found"}),r.a.createElement("h1",null,"Not Found"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},n}(r.a.Component);e.default=c;var s="1097489062"},188:function(t,e,a){var n;t.exports=(n=a(190))&&n.default||n},189:function(t,e,a){"use strict";var n=a(0),r=a.n(n),o=a(11),i=a.n(o),c=a(58),s=a.n(c);a.d(e,"a",function(){return s.a});a(188),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},190:function(t,e,a){"use strict";a.r(e);a(17);var n=a(0),r=a.n(n),o=a(11),i=a.n(o),c=a(83),s=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s},191:function(t,e,a){"use strict";var n=a(192),r=a(0),o=a.n(r),i=a(11),c=a.n(i),s=a(194),u=a.n(s);function l(t){var e=t.description,a=t.lang,r=t.meta,i=t.title,c=n.data.site,s=e||c.siteMetadata.description;return o.a.createElement(u.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},l.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},e.a=l},192:function(t){t.exports={data:{site:{siteMetadata:{title:"Diel Duarte blog",description:"Diel Duarte personal blog",author:"Diel Duarte"}}}}},193:function(t,e,a){"use strict";var n=a(0),r=a.n(n),o=a(189),i=a(178),c=a.n(i);var s=function(t){var e=t.to;return t.isExternal?r.a.createElement("a",{className:c.a.button,href:e},"<="):r.a.createElement(o.a,{className:c.a.button,to:e},"<=")},u=a(179),l=a.n(u);var p=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){var t=this.props,e=t.location,a=t.title,n=t.children,o="/"===e.pathname;return r.a.createElement("div",{className:l.a.container},r.a.createElement(s,{to:o?"http://dielduarte.github.io":"/",isExternal:o}),r.a.createElement("header",null,r.a.createElement("h1",{className:l.a.title},o?"Welcome to my blog!":a)),r.a.createElement("main",null,n))},n}(r.a.Component);e.a=p}}]);
//# sourceMappingURL=component---src-pages-404-js-f76f6516d19b770bd32e.js.map