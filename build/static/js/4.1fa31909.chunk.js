(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{106:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return P}));var a,n=r(10),c=r(11),s=r(13),o=r(12),i=r(1),u=r(79),p=r(7),h=r(3),l=r(36),m=r(81),f=r.n(m),b=r(0),d=function(e){Object(s.a)(r,e);var t=Object(o.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){var e=this.props.item;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("li",{id:e.id,className:f.a.SearchItem,children:Object(b.jsxs)("div",{className:f.a.searchItemWrapper,children:[Object(b.jsxs)(p.c,{to:{pathname:"/movies/".concat(e.id),state:{from:"".concat(this.props.from)}},className:f.a.NavLink,activeClassName:f.a.NavLinkActive,children:[e.title,Object(b.jsx)("p",{children:"Release Date:"}),Object(b.jsxs)("p",{children:[" ",e.release_date]}),Object(b.jsx)("p",{className:f.a.filmScore,style:Number(e.vote_average)>5?{backgroundColor:"coral"}:{backgroundColor:"#355681"},children:e.vote_average})]}),Object(b.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:"",className:f.a.searchPreviewItem})]})}),Object(b.jsx)(h.a,{path:"/movies/".concat(e.id),component:function(t){return Object(b.jsx)(l.a,Object(u.a)(Object(u.a)({},t),{},{id:e.id}))}})]})}}]),r}(i.Component),j=r(82),O=r.n(j),v=new Uint8Array(16);function g(){if(!a&&!(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(v)}var y=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var _=function(e){return"string"===typeof e&&y.test(e)},S=[],w=0;w<256;++w)S.push((w+256).toString(16).substr(1));var x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(S[e[t+0]]+S[e[t+1]]+S[e[t+2]]+S[e[t+3]]+"-"+S[e[t+4]]+S[e[t+5]]+"-"+S[e[t+6]]+S[e[t+7]]+"-"+S[e[t+8]]+S[e[t+9]]+"-"+S[e[t+10]]+S[e[t+11]]+S[e[t+12]]+S[e[t+13]]+S[e[t+14]]+S[e[t+15]]).toLowerCase();if(!_(r))throw TypeError("Stringified UUID is invalid");return r};var I=function(e,t,r){var a=(e=e||{}).random||(e.rng||g)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){r=r||0;for(var n=0;n<16;++n)t[r+n]=a[n];return t}return x(a)},P=function(e){Object(s.a)(r,e);var t=Object(o.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){var e=this;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{className:O.a.searchResultTitle,children:["Search Results (",this.props.search.length,")"]}),Object(b.jsx)("ul",{className:O.a.SearchList,children:this.props.search.map((function(t){return Object(b.jsx)(d,{item:t,from:e.props.from},I())}))})]})}}]),r}(i.Component)},79:function(e,t,r){"use strict";function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"a",(function(){return c}))},81:function(e,t,r){e.exports={SearchItem:"SearchItem_SearchItem__ShL1A",searchPreviewItem:"SearchItem_searchPreviewItem__1gBhW",searchItemWrapper:"SearchItem_searchItemWrapper__2nw85",filmScore:"SearchItem_filmScore__1IWUi"}},82:function(e,t,r){e.exports={SearchList:"SearchList_SearchList__3hqgI",loaderDiv:"SearchList_loaderDiv__3R7ue",searchResultTitle:"SearchList_searchResultTitle__2dREp"}}}]);
//# sourceMappingURL=4.1fa31909.chunk.js.map