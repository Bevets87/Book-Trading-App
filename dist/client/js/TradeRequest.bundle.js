(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{417:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(3),i=n(413),c=n(81),l=function(e){var t=e.error,n=e.reset;return r.a.createElement(c.b,null,r.a.createElement(c.c,null,Object(i.a)(t)),r.a.createElement(c.a,{onClick:function(){n()}},"Got It!"))};l.propTypes={error:a.object,reset:a.func},t.a=l},430:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(3),i=n(80),c=n(37),l=n(415),u=n(62),s=n(24),d=n(49),f=n(418),m=n(4),p=n(17),b=n(70),h=n(36),y=n(5),k=n(16);function g(){var e=E(["\n    height: 8rem;\n  "]);return g=function(){return e},e}function w(){var e=E(["\n    height: 9rem;\n  "]);return w=function(){return e},e}function T(){var e=E(["\n    font-size: 3rem;\n    height: 8rem;\n  "]);return T=function(){return e},e}function v(){var e=E(["\n    font-size: 4rem;\n    height: 9rem;\n  "]);return v=function(){return e},e}function E(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var _=m.default.div.withConfig({displayName:"TradeRequest__Container",componentId:"d1470b-0"})(["position:absolute;top:0;left:0;z-index:1000000;background:",";opacity:0.98;width:100%;min-height:100%;display:block;text-align:center;overflow-y:scroll;&::-webkit-scrollbar{display:none;}"],y.d),C=m.default.div.withConfig({displayName:"TradeRequest__Header",componentId:"d1470b-1"})(["height:auto;display:flex;flex-direction:row;justify-content:center;align-items:center;width:100%;background:",";margin:0 auto;"],y.d),j=(m.default.h1.withConfig({displayName:"TradeRequest__Title",componentId:"d1470b-2"})(["font-size:5rem;color:",";font-family:",";text-align:center;border-bottom:0.25rem solid ",";"],y.e,h.a,y.e),Object(m.default)(p.a).withConfig({displayName:"TradeRequest__Button",componentId:"d1470b-3"})(["background:",";color:",";font-size:3rem;font-family:",";width:20rem;height:auto;padding:1rem;border:0.2rem solid ",";transition:all 0.25s;&:hover{background:",";color:",";}"],y.e,y.d,h.a,y.a,y.d,y.e)),O=m.default.div.withConfig({displayName:"TradeRequest__Buttons",componentId:"d1470b-4"})(["display:flex;flex-direction:row;align-items:center;justify-content:center;width:90%;height:auto;margin-top:3rem;padding-bottom:2rem;margin:0 auto;"]),B=m.default.div.withConfig({displayName:"TradeRequest__Box",componentId:"d1470b-5"})(["display:flex;margin:2rem auto;width:80%;height:auto;"]),q=Object(m.default)(p.a).withConfig({displayName:"TradeRequest__BookIconContainer",componentId:"d1470b-6"})(["background:rgba(0,0,0,0);display:flex;flex-direction:row;justify-content:space-between;align-items:center;height:10rem;width:auto;font-size:5rem;font-weight:bold;color:",";"," ",""],y.e,k.a.tablet(v()),k.a.phone(T())),S=Object(m.default)(b.BookOpen).withConfig({displayName:"TradeRequest__BlackBookIcon",componentId:"d1470b-7"})(["stroke:",";height:10rem;width:auto;fill:rgba(0,0,0,0);transition:all 0.25s;",":hover &{fill:",";}"," ",""],y.a,q,y.e,k.a.tablet(w()),k.a.phone(g())),x=n(421);function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=function(e){var t=e.tradeable,n=e.onClick,o=e.image,a=e._id;return e.selected?r.a.createElement(x.b,null,r.a.createElement(x.c,{borderColor:"black",src:o}),r.a.createElement(x.a,{color:"red",backgroundColor:"white",borderColor:"black"},"Selected")):t?r.a.createElement(x.b,null,r.a.createElement(x.c,{src:o,onClick:function(){n(a)}}),r.a.createElement(x.a,null,"Select")):r.a.createElement(x.b,null,r.a.createElement(x.c,{src:o,borderColor:"black"}),r.a.createElement(x.a,{color:"black",backgroundColor:"white",borderColor:"black"},r.a.createElement(x.d,null,"Select")))};L.propTypes={tradeable:a.bool,selected:a.bool,image:a.string,_id:a.string,onClick:a.func};var A=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return P(N(N(n=function(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?N(e):t}(this,(e=G(t)).call.apply(e,[this].concat(r))))),"state",{selected:null}),P(N(N(n)),"selectBookToTrade",function(e){n.setState({selected:e})}),P(N(N(n)),"handleRequestTrade",function(){n.state.selected&&n.props.requestTrade({to:n.props.bookToGet.owner._id,bookToGet:n.props.bookToGet._id,bookToGive:n.state.selected}),n.props.unmount()}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,o["Component"]),function(e,t,n){t&&R(e.prototype,t),n&&R(e,n)}(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.unmount,o=t.ownedBooks,a=t.fetch,i=t.count,c=t.limit,l=t.skip;return r.a.createElement(_,null,r.a.createElement(C,null,r.a.createElement(q,null,r.a.createElement(S,null),"Select a book to trade")),r.a.createElement(B,null,r.a.createElement(f.a,{response:o,fetch:a,count:i,skip:l,limit:c},function(t){var n=t._id,o=t.tradeable,a=t.image;return r.a.createElement(L,{key:n,_id:n,selected:!!e.state.selected&&e.state.selected==n,tradeable:o,image:a,onClick:e.selectBookToTrade})})),r.a.createElement(O,null,r.a.createElement(j,{onClick:n},"Cancel"),r.a.createElement(j,{onClick:this.handleRequestTrade},"Trade")))}}]),t}();A.propTypes={unmount:a.func,bookToGet:a.object,ownedBooks:a.array,requestTrade:a.func,fetch:a.func,limit:a.number,skip:a.number,count:a.number};var F=A,J=n(417),H=n(61);n.d(t,"Loading",function(){return D}),n.d(t,"Failure",function(){return K}),n.d(t,"Success",function(){return M});var D=function(){return r.a.createElement(H.c,null,r.a.createElement(H.j,null))},K=function(e){var t=e.error,n=e.reset;return r.a.createElement(H.c,null,r.a.createElement(J.a,{error:t,reset:n}))};K.propTypes={error:a.object,reset:a.func};var M=function(e){var t=e.response,n=e.skip,o=e.limit,a=e.count,i=e.fetch,c=e.requestTrade,l=e.bookToGet,u=e.unmount;return r.a.createElement(F,{ownedBooks:t,bookToGet:l,skip:n,limit:o,count:a,fetch:i,unmount:u,requestTrade:c})};M.propTypes={response:a.array,skip:a.number,limit:a.number,count:a.number,fetch:a.func,unmount:a.func,requestTrade:a.func,bookToGet:a.object};var Q=Object(i.b)(function(e){return{response:e.ownedBooks.response,isLoading:e.ownedBooks.isLoading,count:e.ownedBooks.count,limit:e.ownedBooks.limit,skip:e.ownedBooks.skip,error:e.ownedBooks.error}},function(e){return{fetch:function(t){return e(s.a.async.getAll(t))},requestTrade:function(t){return e(d.a.async.requestTrade(t))},reset:function(){return e(u.a.creators.resetStore())}}});t.default=Object(c.d)(Q,l.a)({Success:M,Failure:K,Loading:D})}}]);