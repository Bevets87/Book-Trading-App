(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{206:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(3),a=n(80),c=n(415),u=n(81),l=n(37),f=n(62),s=n(50),d=n(416),p=n(414),m=n(418),y=n(424),h=n(425),b=function(e){var t=e.createdAt,n=e.from,r=e.bookToGet,i=e.bookToGive;return o.a.createElement(h.e,null,o.a.createElement(h.i,null,o.a.createElement(h.j,null,"Date: ",t)),o.a.createElement(h.i,null,o.a.createElement(h.j,null,"From: ",o.a.createElement(h.k,null,n.username))),o.a.createElement(h.i,null,o.a.createElement(h.j,null,"Requesting: ",o.a.createElement(h.g,null,r.title))),o.a.createElement(h.i,null,o.a.createElement(h.j,null,"Trading: ",o.a.createElement(h.g,null,i.title))))};b.propTypes={status:i.string,createdAt:i.string,from:i.object,bookToGive:i.object,bookToGet:i.object};var g=function(e){var t=e.acceptTrade,n=e.declineTrade,r=e._id;return o.a.createElement(h.b,null,o.a.createElement(h.a,{onClick:function(){t(r)}},o.a.createElement(h.d,null)),o.a.createElement(h.a,{onClick:function(){n(r)}},o.a.createElement(h.c,null)))};g.propTypes={_id:i.string,acceptTrade:i.func,declineTrade:i.func};var v=function(e){var t=e.createdAt,n=e.from,r=e.bookToGive,i=e.bookToGet,a=e.acceptTrade,c=e.declineTrade,u=e._id;return o.a.createElement(h.f,null,o.a.createElement(b,{createdAt:Object(y.a)(t),from:n,bookToGet:i,bookToGive:r}),o.a.createElement(g,{_id:u,acceptTrade:a,declineTrade:c}))};v.propTypes={_id:i.string,acceptTrade:i.func,declineTrade:i.func,createdAt:i.string,from:i.object,bookToGive:i.object,bookToGet:i.object};var w=v,_=n(135),k=n(417),j=n(61);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"Loading",function(){return S}),n.d(t,"Failure",function(){return P}),n.d(t,"Success",function(){return L});var S=function(){return o.a.createElement(j.b,null,o.a.createElement(j.j,null))},P=function(e){var t=e.error,n=e.reset;return o.a.createElement(k.a,{error:t,reset:n})};P.propTypes={error:i.object,reset:i.func};var L=function(e){var t=e.response,n=e.acceptTrade,r=e.declineTrade,i=e.fetch,a=e.count,c=e.limit,u=e.skip;return o.a.createElement(m.a,{response:t,fetch:i,count:a,limit:c,skip:u},function(e){var t=e._id,i=e.createdAt,a=e.from,c=e.bookToGive,u=e.bookToGet;return o.a.createElement(w,{key:t,_id:t,createdAt:i,from:a,bookToGive:c,bookToGet:u,acceptTrade:n,declineTrade:r})})};L.propTypes={response:i.array,acceptTrade:i.func,declineTrade:i.func,fetch:i.func,count:i.number,limit:i.number,skip:i.number};var A=Object(u.b)(function(e){return{response:e.incomingTrades.response,error:e.incomingTrades.error,isLoading:e.incomingTrades.isLoading,count:e.incomingTrades.count,limit:e.incomingTrades.limit,skip:e.incomingTrades.skip}},function(e){return{fetch:function(t){return e(s.a.async.getAll(t))},reset:function(){return e(f.a.creators.resetStore())},acceptTrade:function(t){return e(s.a.async.acceptTrade(t))},declineTrade:function(t){return e(s.a.async.declineTrade(t))}}}),I=Object(l.d)(A,c.a)({Success:L,Loading:S,Failure:P}),N=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),E(this,x(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,o.a.Component),function(e,t,n){t&&T(e.prototype,t),n&&T(e,n)}(t,[{key:"renderHead",value:function(){return o.a.createElement(d.Helmet,null,o.a.createElement("title",null,"Incoming trades"),o.a.createElement("meta",{property:"og:title",content:"Incoming trades"}))}},{key:"renderBody",value:function(){return o.a.createElement(p.a,{title:"Manage your incoming trades"},o.a.createElement(I,this.props))}},{key:"render",value:function(){return o.a.createElement("div",null,this.renderHead(),this.renderBody())}}]),t}();t.default=Object(a.a)({Auth:N,Unauth:_.a})},413:function(e,t,n){"use strict";t.a=function(e){return e&&e.message?e.message:"An error occured..."}},414:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(3),a=n(4),c=n(5),u=n(36),l=n(16);function f(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    display: none;\n  "]);return f=function(){return e},e}var s=a.default.div.withConfig({displayName:"AccountHeader__Container",componentId:"s1yowjso-0"})(["height:100%;width:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;background:",";overflow-y:scroll;&::-webkit-scrollbar{display:none;}"],c.d),d=a.default.h1.withConfig({displayName:"AccountHeader__Title",componentId:"s1yowjso-1"})(["font-size:3rem;color:",";border-bottom:0.1rem solid ",";font-family:",";text-align:left;width:80%;margin:2rem;padding-bottom:1rem;",""],c.e,c.a,u.a,l.a.tablet(f()));function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,h(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r["Component"]),function(e,t,n){t&&m(e.prototype,t),n&&m(e,n)}(t,[{key:"render",value:function(){return o.a.createElement(s,null,o.a.createElement(d,null,this.props.title),this.props.children)}}]),t}();g.propTypes={children:Object(i.oneOfType)([i.array,i.object,i.func]),title:i.string};t.a=g},415:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(3);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}t.a=function(e){var t=e.Loading,n=e.Failure,a=e.Success,d=function(e){function i(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),l(this,f(i).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(i,r.Component),function(e,t,n){t&&u(e.prototype,t),n&&u(e,n)}(i,[{key:"componentDidMount",value:function(){this.props.fetch()}},{key:"render",value:function(){var e=this.props,r=e.fetch,i=e.response,u=e.error,l=e.isLoading,f=e.reset;return l?o.a.createElement(t,null):u?o.a.createElement(n,{error:u,reset:f}):o.a.createElement(a,c({response:i,fetch:r},this.props))}}]),i}();return d.propTypes={fetch:i.func,response:Object(i.oneOfType)([i.object,i.array]),error:i.object,isLoading:i.bool,reset:i.func},d}},417:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(3),a=n(413),c=n(82),u=function(e){var t=e.error,n=e.reset;return o.a.createElement(c.b,null,o.a.createElement(c.c,null,Object(a.a)(t)),o.a.createElement(c.a,{onClick:function(){n()}},"Got It!"))};u.propTypes={error:i.object,reset:i.func},t.a=u},418:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(3),a=n(4),c=n(17),u=n(419),l=n(420),f=n(5),s=n(16);function d(){var e=m(["\n    width: 95%;\n  "]);return d=function(){return e},e}function p(){var e=m(["\n    width: 90%;\n  "]);return p=function(){return e},e}function m(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var y=a.default.div.withConfig({displayName:"List__Container",componentId:"s148624f-0"})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding:0;margin:0 auto;width:80%;height:100%;"," ",""],s.a.tablet(p()),s.a.phone(d())),h=a.default.div.withConfig({displayName:"List__Body",componentId:"s148624f-1"})(["display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center;align-items:space-evenly;width:100%;height:100%;"]),b=a.default.div.withConfig({displayName:"List__Footer",componentId:"s148624f-2"})(["width:100%;height:auto;margin-top:2rem;margin-bottom:1rem;display:flex;flex-direction:row;justify-content:center;align-items:flex-end;"]),g=Object(a.default)(c.a).withConfig({displayName:"List__LeftButton",componentId:"s148624f-3"})(["background:",";width:9rem;height:9rem;border:0.25rem solid ",";transition:all 0.25s;&:hover{background:",";color:",";box-shadow:inset 0 0 0 0.05rem ",";}"],f.e,f.a,f.d,f.e,f.a),v=Object(a.default)(c.a).withConfig({displayName:"List__RightButton",componentId:"s148624f-4"})(["background:",";width:9rem;height:9rem;border:0.25rem solid ",";transition:all 0.25s;&:hover{background:",";color:",";box-shadow:inset 0 0 0 0.05rem ",";}"],f.e,f.a,f.d,f.e,f.a),w=Object(a.default)(u.ArrowRight).withConfig({displayName:"List__RightArrowIcon",componentId:"s148624f-5"})(["color:",";transition:all 0.2s;",":hover &{color:",";}"],f.d,v,f.e),_=Object(a.default)(l.ArrowLeft).withConfig({displayName:"List__LeftArrowIcon",componentId:"s148624f-6"})(["color:",";transition:all 0.2s;",":hover &{color:",";}"],f.d,g,f.e);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),O(this,T(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,r["Component"]),function(e,t,n){t&&j(e.prototype,t),n&&j(e,n)}(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.next,r=t.prev,i=t.response;return o.a.createElement(y,null,o.a.createElement(h,null,i.map(function(t){return e.props.children(t)}),o.a.createElement(b,null,o.a.createElement(g,{onClick:r},o.a.createElement(_,null)),o.a.createElement(v,{onClick:n},o.a.createElement(w,null)))))}}]),t}();x.propTypes={response:i.array,prev:i.func,next:i.func,children:i.func};var C=x;function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var G=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return N(I(I(n=function(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?I(e):t}(this,(e=L(t)).call.apply(e,[this].concat(o))))),"fetchNext",function(){var e=n.props,t=e.skip+e.limit;t<e.count&&n.props.fetch(t)}),N(I(I(n)),"fetchPrev",function(){var e=n.props,t=e.skip-e.limit;t>=0&&n.props.fetch(t)}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,r["Component"]),function(e,t,n){t&&P(e.prototype,t),n&&P(e,n)}(t,[{key:"render",value:function(){var e=this,t=this.props.response;return o.a.createElement(C,{response:t,next:this.fetchNext,prev:this.fetchPrev},function(t){return e.props.children(t)})}}]),t}();G.propTypes={response:i.array,skip:i.number,count:i.number,limit:i.number,fetch:i.func,children:i.func};t.a=G},419:function(e,t,n){"use strict";var r=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i,a=o(n(0)),c=o(n(4));t.ArrowRight=c.default.svg.attrs({children:function(e){return null!=e.title?[a.default.createElement("title",{key:"ArrowRight-title"},e.title),a.default.createElement("line",{x1:5,x2:19,y1:12,y2:12,key:"k0"}),a.default.createElement("polyline",{points:"12 5 19 12 12 19",key:"k1"})]:[a.default.createElement("line",{x1:5,x2:19,y1:12,y2:12,key:"k0"}),a.default.createElement("polyline",{points:"12 5 19 12 12 19",key:"k1"})]},viewBox:"0 0 24 24",height:function(e){return void 0!==e.height?e.height:e.size},width:function(e){return void 0!==e.width?e.width:e.size},"aria-hidden":function(e){return null==e.title?"true":void 0},focusable:"false",role:function(e){return null!=e.title?"img":void 0},fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})(i||(i=r(["\n  display: inline-block;\n  vertical-align: middle;\n  overflow: hidden;\n  ",";\n"],["\n  display: inline-block;\n  vertical-align: middle;\n  overflow: hidden;\n  ",";\n"])),function(e){return e.css}),t.ArrowRight.displayName="ArrowRight",t.ArrowRightDimensions={height:24,width:24}},420:function(e,t,n){"use strict";var r=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i,a=o(n(0)),c=o(n(4));t.ArrowLeft=c.default.svg.attrs({children:function(e){return null!=e.title?[a.default.createElement("title",{key:"ArrowLeft-title"},e.title),a.default.createElement("line",{x1:19,x2:5,y1:12,y2:12,key:"k0"}),a.default.createElement("polyline",{points:"12 19 5 12 12 5",key:"k1"})]:[a.default.createElement("line",{x1:19,x2:5,y1:12,y2:12,key:"k0"}),a.default.createElement("polyline",{points:"12 19 5 12 12 5",key:"k1"})]},viewBox:"0 0 24 24",height:function(e){return void 0!==e.height?e.height:e.size},width:function(e){return void 0!==e.width?e.width:e.size},"aria-hidden":function(e){return null==e.title?"true":void 0},focusable:"false",role:function(e){return null!=e.title?"img":void 0},fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})(i||(i=r(["\n  display: inline-block;\n  vertical-align: middle;\n  overflow: hidden;\n  ",";\n"],["\n  display: inline-block;\n  vertical-align: middle;\n  overflow: hidden;\n  ",";\n"])),function(e){return e.css}),t.ArrowLeft.displayName="ArrowLeft",t.ArrowLeftDimensions={height:24,width:24}},424:function(e,t,n){"use strict";t.a=function(e){return e.split("T")[0]}},425:function(e,t,n){"use strict";n.d(t,"f",function(){return f}),n.d(t,"e",function(){return s}),n.d(t,"i",function(){return d}),n.d(t,"j",function(){return p}),n.d(t,"h",function(){return m}),n.d(t,"k",function(){return y}),n.d(t,"g",function(){return h}),n.d(t,"a",function(){return b}),n.d(t,"b",function(){return g}),n.d(t,"c",function(){return v}),n.d(t,"d",function(){return w});var r=n(4),o=n(5),i=n(17),a=n(36),c=n(137),u=n(426),l={red:o.d,black:o.a,green:o.b},f=r.default.div.withConfig({displayName:"Trade__Container",componentId:"rpupff-0"})(["display:flex;height:15rem;width:100%;flex-direction:row;justify-content:space-between;align-items:flex-start;background:",";border:0.25rem solid ",";margin-top:1rem;"],o.e,o.a),s=r.default.div.withConfig({displayName:"Trade__Column",componentId:"rpupff-1"})(["display:flex;flex-direction:column;align-items:flex-start;justify-content:space-evenly;height:100%;"]),d=r.default.div.withConfig({displayName:"Trade__Row",componentId:"rpupff-2"})(["display:flex;flex-direction:row;align-items:center;justify-content:flex-start;"]),p=r.default.h1.withConfig({displayName:"Trade__Title",componentId:"rpupff-3"})(["font-size:1.5rem;font-family:",";color:",";"],a.a,function(e){return e.color?l[e.color]:o.a}),m=r.default.span.withConfig({displayName:"Trade__Italic",componentId:"rpupff-4"})(["font-style:italic;color:",";"],o.d),y=r.default.span.withConfig({displayName:"Trade__Underline",componentId:"rpupff-5"})(["text-decoration:underline;color:",";"],o.d),h=r.default.span.withConfig({displayName:"Trade__HiLite",componentId:"rpupff-6"})(["color:",";font-size:1.3rem;background:",";border-radius:0.2rem;"],o.a,o.d),b=Object(r.default)(i.a).withConfig({displayName:"Trade__Button",componentId:"rpupff-7"})(["background:rgba(0,0,0,0);height:7rem;width:7rem;padding:0;margin:0;"]),g=r.default.div.withConfig({displayName:"Trade__Buttons",componentId:"rpupff-8"})(["display:flex;height:100%;flex-direction:column;align-items:center;justify-content:center;"]),v=Object(r.default)(c.XSquare).withConfig({displayName:"Trade__CancelBox",componentId:"rpupff-9"})(["stroke:",";"],o.a),w=Object(r.default)(u.CheckSquare).withConfig({displayName:"Trade__CheckBox",componentId:"rpupff-10"})(["stroke:",";height:7rem;width:auto;"],o.d)},426:function(e,t,n){"use strict";var r=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i,a=o(n(0)),c=o(n(4));t.CheckSquare=c.default.svg.attrs({children:function(e){return null!=e.title?[a.default.createElement("title",{key:"CheckSquare-title"},e.title),a.default.createElement("polyline",{points:"9 11 12 14 22 4",key:"k0"}),a.default.createElement("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"k1"})]:[a.default.createElement("polyline",{points:"9 11 12 14 22 4",key:"k0"}),a.default.createElement("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"k1"})]},viewBox:"0 0 24 24",height:function(e){return void 0!==e.height?e.height:e.size},width:function(e){return void 0!==e.width?e.width:e.size},"aria-hidden":function(e){return null==e.title?"true":void 0},focusable:"false",role:function(e){return null!=e.title?"img":void 0},fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})(i||(i=r(["\n  display: inline-block;\n  vertical-align: middle;\n  overflow: hidden;\n  ",";\n"],["\n  display: inline-block;\n  vertical-align: middle;\n  overflow: hidden;\n  ",";\n"])),function(e){return e.css}),t.CheckSquare.displayName="CheckSquare",t.CheckSquareDimensions={height:24,width:24}}}]);