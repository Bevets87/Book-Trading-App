(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{413:function(e,t,n){"use strict";t.a=function(e){return e&&e.message?e.message:"An error occured..."}},415:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(3);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}t.a=function(e){var t=e.Loading,n=e.Failure,u=e.Success,p=function(e){function i(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),l(this,f(i).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(i,r.Component),function(e,t,n){t&&c(e.prototype,t),n&&c(e,n)}(i,[{key:"componentDidMount",value:function(){this.props.fetch()}},{key:"render",value:function(){var e=this.props,r=e.fetch,i=e.response,c=e.error,l=e.isLoading,f=e.reset;return l?o.a.createElement(t,null):c?o.a.createElement(n,{error:c,reset:f}):o.a.createElement(u,a({response:i,fetch:r},this.props))}}]),i}();return p.propTypes={fetch:i.func,response:Object(i.oneOfType)([i.object,i.array]),error:i.object,isLoading:i.bool,reset:i.func},p}},418:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(3),u=n(4),a=n(17),c=n(419),l=n(420),f=n(5),s=n(11);function p(){var e=y(["\n    width: 95%;\n  "]);return p=function(){return e},e}function d(){var e=y(["\n    width: 90%;\n  "]);return d=function(){return e},e}function y(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var b=u.default.div.withConfig({displayName:"List__Container",componentId:"s148624f-0"})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding:0;margin:0 auto;width:80%;height:100%;"," ",""],s.a.tablet(d()),s.a.phone(p())),h=u.default.div.withConfig({displayName:"List__Body",componentId:"s148624f-1"})(["display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center;align-items:space-evenly;width:100%;height:100%;"]),m=u.default.div.withConfig({displayName:"List__Footer",componentId:"s148624f-2"})(["width:100%;height:auto;margin-top:2rem;margin-bottom:1rem;display:flex;flex-direction:row;justify-content:center;align-items:flex-end;"]),w=Object(u.default)(a.a).withConfig({displayName:"List__LeftButton",componentId:"s148624f-3"})(["background:",";width:9rem;height:9rem;border:0.25rem solid ",";transition:all 0.25s;&:hover{background:",";color:",";box-shadow:inset 0 0 0 0.05rem ",";}"],f.e,f.a,f.d,f.e,f.a),v=Object(u.default)(a.a).withConfig({displayName:"List__RightButton",componentId:"s148624f-4"})(["background:",";width:9rem;height:9rem;border:0.25rem solid ",";transition:all 0.25s;&:hover{background:",";color:",";box-shadow:inset 0 0 0 0.05rem ",";}"],f.e,f.a,f.d,f.e,f.a),g=Object(u.default)(c.ArrowRight).withConfig({displayName:"List__RightArrowIcon",componentId:"s148624f-5"})(["color:",";transition:all 0.2s;",":hover &{color:",";}"],f.d,v,f.e),k=Object(u.default)(l.ArrowLeft).withConfig({displayName:"List__LeftArrowIcon",componentId:"s148624f-6"})(["color:",";transition:all 0.2s;",":hover &{color:",";}"],f.d,w,f.e);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),j(this,E(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,r["Component"]),function(e,t,n){t&&O(e.prototype,t),n&&O(e,n)}(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.next,r=t.prev,i=t.response;return o.a.createElement(b,null,o.a.createElement(h,null,i.map(function(t){return e.props.children(t)}),o.a.createElement(m,null,o.a.createElement(w,{onClick:r},o.a.createElement(k,null)),o.a.createElement(v,{onClick:n},o.a.createElement(g,null)))))}}]),t}();T.propTypes={response:i.array,prev:i.func,next:i.func,children:i.func};var P=T;function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return B(A(A(n=function(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?A(e):t}(this,(e=R(t)).call.apply(e,[this].concat(o))))),"fetchNext",function(){var e=n.props,t=e.skip+e.limit;t<e.count&&n.props.fetch(t)}),B(A(A(n)),"fetchPrev",function(){var e=n.props,t=e.skip-e.limit;t>=0&&n.props.fetch(t)}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,r["Component"]),function(e,t,n){t&&x(e.prototype,t),n&&x(e,n)}(t,[{key:"render",value:function(){var e=this,t=this.props.response;return o.a.createElement(P,{response:t,next:this.fetchNext,prev:this.fetchPrev},function(t){return e.props.children(t)})}}]),t}();N.propTypes={response:i.array,skip:i.number,count:i.number,limit:i.number,fetch:i.func,children:i.func};t.a=N},419:function(e,t,n){"use strict";var r=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i,u=o(n(0)),a=o(n(4));t.ArrowRight=a.default.svg.attrs({children:function(e){return null!=e.title?[u.default.createElement("title",{key:"ArrowRight-title"},e.title),u.default.createElement("line",{x1:5,x2:19,y1:12,y2:12,key:"k0"}),u.default.createElement("polyline",{points:"12 5 19 12 12 19",key:"k1"})]:[u.default.createElement("line",{x1:5,x2:19,y1:12,y2:12,key:"k0"}),u.default.createElement("polyline",{points:"12 5 19 12 12 19",key:"k1"})]},viewBox:"0 0 24 24",height:function(e){return void 0!==e.height?e.height:e.size},width:function(e){return void 0!==e.width?e.width:e.size},"aria-hidden":function(e){return null==e.title?"true":void 0},focusable:"false",role:function(e){return null!=e.title?"img":void 0},fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})(i||(i=r(["\n  display: inline-block;\n  vertical-align: middle;\n  overflow: hidden;\n  ",";\n"],["\n  display: inline-block;\n  vertical-align: middle;\n  overflow: hidden;\n  ",";\n"])),function(e){return e.css}),t.ArrowRight.displayName="ArrowRight",t.ArrowRightDimensions={height:24,width:24}},420:function(e,t,n){"use strict";var r=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i,u=o(n(0)),a=o(n(4));t.ArrowLeft=a.default.svg.attrs({children:function(e){return null!=e.title?[u.default.createElement("title",{key:"ArrowLeft-title"},e.title),u.default.createElement("line",{x1:19,x2:5,y1:12,y2:12,key:"k0"}),u.default.createElement("polyline",{points:"12 19 5 12 12 5",key:"k1"})]:[u.default.createElement("line",{x1:19,x2:5,y1:12,y2:12,key:"k0"}),u.default.createElement("polyline",{points:"12 19 5 12 12 5",key:"k1"})]},viewBox:"0 0 24 24",height:function(e){return void 0!==e.height?e.height:e.size},width:function(e){return void 0!==e.width?e.width:e.size},"aria-hidden":function(e){return null==e.title?"true":void 0},focusable:"false",role:function(e){return null!=e.title?"img":void 0},fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})(i||(i=r(["\n  display: inline-block;\n  vertical-align: middle;\n  overflow: hidden;\n  ",";\n"],["\n  display: inline-block;\n  vertical-align: middle;\n  overflow: hidden;\n  ",";\n"])),function(e){return e.css}),t.ArrowLeft.displayName="ArrowLeft",t.ArrowLeftDimensions={height:24,width:24}},421:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"c",function(){return l}),n.d(t,"a",function(){return f}),n.d(t,"d",function(){return s});var r=n(4),o=n(5),i=n(17),u=n(36),a={black:o.a,white:o.e,red:o.d},c=r.default.div.withConfig({displayName:"Book__Container",componentId:"zyb8hf-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:auto;width:10rem;margin:1rem;cursor:pointer;"]),l=r.default.img.withConfig({displayName:"Book__Cover",componentId:"zyb8hf-1"})(["height:15rem;width:10rem;border:0.5rem solid ",";border-bottom:none;"],function(e){return e.borderColor?a[e.borderColor]:o.e}),f=Object(r.default)(i.a).withConfig({displayName:"Book__Button",componentId:"zyb8hf-2"})(["background:",";color:",";font-size:1.75rem;width:10rem;height:auto;font-weight:bold;font-family:",";border:0.5rem solid ",";border-top:none;"],function(e){return e.backgroundColor?a[e.backgroundColor]:o.a},function(e){return e.color?a[e.color]:o.e},u.a,function(e){return e.borderColor?a[e.borderColor]:o.e}),s=r.default.span.withConfig({displayName:"Book__LineThrough",componentId:"zyb8hf-3"})(["text-decoration:line-through;"])},429:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"Loading",function(){return x}),n.d(t,"Failure",function(){return R});var r=n(13),o=n.n(r),i=n(14),u=n.n(i),a=n(0),c=n.n(a),l=n(3),f=n(413),s=n(62),p=n(31),d=n(37),y=n(80),b=n(415),h=n(427),m=n(438),w=n(439),v=n(418),g=n(138),k=n(61),_=n(81);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=Object(h.a)(function(){return u()({id:"./TradeRequest",file:"C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\containers\\UnownedBooks.js",load:function(){return Promise.all([n.e(12).then(n.bind(null,430))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"./TradeRequest")},resolve:function(){return 430},chunkName:function(){return"TradeRequest"}})},{Loading:g.a}),x=function(){return c.a.createElement(m.a,null,c.a.createElement(k.a,null,c.a.createElement(k.h,null)))},R=function(e){var t=e.error,n=e.reset;return c.a.createElement(m.a,null,c.a.createElement(k.a,null,c.a.createElement(_.c,null,Object(f.a)(t)),c.a.createElement(_.a,{onClick:n},"Got It!"),","))};R.propTypes={error:l.object,reset:l.func};var L=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return P(T(T(n=function(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?T(e):t}(this,(e=E(t)).call.apply(e,[this].concat(o))))),"state",{TradeRequest:{mounted:!1,bookToGet:null}}),P(T(T(n)),"renderTradeRequest",function(){var e=n.state.TradeRequest.bookToGet;return c.a.createElement(S,{bookToGet:e,unmount:n.unmountTradeRequest})}),P(T(T(n)),"mountTradeRequest",function(e){e&&n.setState({TradeRequest:{mounted:!0,bookToGet:e}})}),P(T(T(n)),"unmountTradeRequest",function(){n.setState({TradeRequest:{mounted:!1,bookToGet:null}})}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,c.a.Component),function(e,t,n){t&&j(e.prototype,t),n&&j(e,n)}(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.limit,r=t.response,o=t.fetch,i=t.skip,u=t.count;return c.a.createElement(m.a,null,c.a.createElement(v.a,{response:r,fetch:o,limit:n,count:u,skip:i},function(t){var n=t._id,r=t.tradeable,o=t.image,i=t.owner,u=t.title;return c.a.createElement(w.a,{onClick:e.mountTradeRequest,key:n,_id:n,title:u,tradeable:r,image:o,owner:i})}),this.state.TradeRequest.mounted?this.renderTradeRequest():null)}}]),t}();L.propTypes={response:l.array,fetch:l.func,limit:l.number,count:l.number,skip:l.number};var A=Object(y.b)(function(e){return{response:e.unownedBooks.response,error:e.unownedBooks.error,isLoading:e.unownedBooks.isLoading,count:e.unownedBooks.count,limit:e.unownedBooks.limit,skip:e.unownedBooks.skip}},function(e){return{fetch:function(t){return e(p.a.async.getAll(t))},reset:function(){return e(s.a.creators.resetStore())}}});t.default=Object(d.d)(A,b.a)({Success:L,Loading:x,Failure:R})}.call(this,"/")},438:function(e,t,n){"use strict";var r=n(4),o=n(5),i=r.default.div.withConfig({displayName:"Container",componentId:"lxj33i-0"})(["width:100vw;height:100vh;padding-top:7rem;background:",";overflow-y:scroll;-ms-overflow-style:none;&::-webkit-scrollbar{display:none;}"],o.d);t.a=i},439:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(3),u=n(421);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,f(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,r["Component"]),function(e,t,n){t&&c(e.prototype,t),n&&c(e,n)}(t,[{key:"renderTradeable",value:function(){var e=this.props,t=e.onClick,n=e._id,r=e.image,i=e.title,a=e.owner;return o.a.createElement(u.b,{onClick:function(){t({_id:n,image:r,title:i,owner:a})}},o.a.createElement(u.c,{src:r}),o.a.createElement(u.a,null,"Request"))}},{key:"renderNotTradeable",value:function(){var e=this.props.image;return o.a.createElement(u.b,null,o.a.createElement(u.c,{src:e,borderColor:"black"}),o.a.createElement(u.a,{backgroundColor:"white",color:"black",borderColor:"black"},o.a.createElement(u.d,null,"Request")))}},{key:"render",value:function(){return this.props.tradeable?this.renderTradeable():this.renderNotTradeable()}}]),t}();p.propTypes={_id:i.string,title:i.string,image:i.string,tradeable:i.bool,owner:i.object,onClick:i.func},t.a=p}}]);