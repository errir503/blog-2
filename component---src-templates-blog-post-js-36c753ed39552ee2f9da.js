(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{216:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return m}));var i=n(0),o=n.n(i),r=n(18),a=n(217),s=n.n(a),d=n(221),u=n(140),l=n(138),c=n(37),f=n.n(c);var p=function(t){var e,n;function i(){return t.apply(this,arguments)||this}return n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i.prototype.render=function(){var t=this.props.data,e=t.markdownRemark,n=t.site,i=n.siteMetadata[e.frontmatter.languageKey],a={url:""+(n.siteMetadata.siteUrl+e.fields.slug),identifier:e.id,title:e.frontmatter.title};return o.a.createElement(u.a,{location:this.props.location,title:e.frontmatter.title,config:i,languageLink:e.frontmatter.languageLink},o.a.createElement(r.a,{to:e.frontmatter.languageLink,className:f.a.prefetchLink},e.frontmatter.languageLink),o.a.createElement(l.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html},className:s.a.content}),o.a.createElement("section",{className:s.a.disqusContainer},o.a.createElement(d.Disqus,{config:a})))},i}(o.a.Component);e.default=p;var m="966150718"},220:function(t,e,n){"use strict";n(50),n(39),n(22),n(16),n(17),n(8),n(108),n(107);var i=n(21);e.__esModule=!0,e.insertScript=function(t,e,n){var i=window.document.createElement("script");return i.async=!0,i.src=t,i.id=e,n.appendChild(i),i},e.removeScript=function(t,e){var n=window.document.getElementById(t);n&&e.removeChild(n)},e.debounce=function(t,e,n){var i;return function(){var o=this,r=arguments,a=function(){i=null,n||t.apply(o,r)},s=n&&!i;window.clearTimeout(i),i=setTimeout(a,e),s&&t.apply(o,r)}},e.isReactElement=r,e.shallowComparison=function(t,e){var n=new Set(Object.keys(t),Object.keys(e)),i=Array.isArray(n),o=0;for(n=i?n:n[Symbol.iterator]();;){var a;if(i){if(o>=n.length)break;a=n[o++]}else{if((o=n.next()).done)break;a=o.value}var s=a;if(t[s]!==e[s]&&!r(t[s]))return!0}return!1};var o=i(n(0));function r(t){return!!o.default.isValidElement(t)||!!Array.isArray(t)&&t.some((function(t){return o.default.isValidElement(t)}))}},221:function(t,e,n){"use strict";var i=n(21);e.__esModule=!0,e.default=void 0;var o=i(n(222));e.Disqus=o.default;var r=i(n(223));e.CommentCount=r.default;var a=o.default;e.default=a},222:function(t,e,n){"use strict";var i=n(21);e.__esModule=!0,e.default=void 0;var o=i(n(150)),r=i(n(149)),a=i(n(80)),s=i(n(0)),d=i(n(49)),u=n(220),l=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="dielduarte",e.config?n.config=e.config:n.config={identifier:e.identifier,url:e.url,title:e.title},n}(0,a.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&window.document&&this.shortname&&this.cleanInstance(),this.loadInstance()},n.shouldComponentUpdate=function(t){return this.props!==t&&(0,u.shallowComparison)(this.props,t)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){if("undefined"!=typeof window&&window.document&&this.shortname){var t=this.config;window.disqus_config=function(){this.page.identifier=t.identifier,this.page.title=t.title,this.page.url=t.url},(0,u.insertScript)("https://"+this.shortname+".disqus.com/embed.js","disqus-embed-script",window.document.body)}},n.cleanInstance=function(){(0,u.removeScript)("disqus-embed-script",window.document.body),window&&window.DISQUS&&window.DISQUS.reset();try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=window.document.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)},n.render=function(){var t=this.props,e=(t.config,(0,r.default)(t,["config"]));return s.default.createElement("div",(0,o.default)({id:"disqus_thread"},e,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:73},__self:this}))},e}(s.default.Component);e.default=l,l.propTypes={config:d.default.shape({identifier:d.default.string,title:d.default.string,url:d.default.string}),identifier:d.default.string,title:d.default.string,url:d.default.string}},223:function(t,e,n){"use strict";var i=n(21);e.__esModule=!0,e.default=void 0;var o=i(n(150)),r=i(n(149)),a=i(n(80)),s=i(n(0)),d=i(n(49)),u=n(220),l=(0,u.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),c=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="dielduarte",n}(0,a.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(t){return this.props!==t&&(0,u.shallowComparison)(this.props,t)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?l():(0,u.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,u.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var t=this.props,e=t.config,n=t.placeholder,i=(0,r.default)(t,["config","placeholder"]);return s.default.createElement("span",(0,o.default)({className:"disqus-comment-count","data-disqus-identifier":e.identifier,"data-disqus-url":e.url},i,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:49},__self:this}),n)},e}(s.default.Component);e.default=c,c.defaultProps={placeholder:"..."},c.propTypes={config:d.default.shape({identifier:d.default.string,title:d.default.string,url:d.default.string}),placeholder:d.default.string}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-36c753ed39552ee2f9da.js.map