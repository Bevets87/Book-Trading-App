(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{209:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),i=n(82),c=n(424),u=n(74),l=n(61),s=n(136),f=n(426),m=n(137),d=n(4),p=n(16),h=n(5),y=n(36),b=n(17);function g(){var e=B(["\n    margin-top: 2rem;\n    width: 95%;\n    font-size: 2.5rem;\n  "]);return g=function(){return e},e}function w(){var e=B(["\n    font-size: 2rem;\n  "]);return w=function(){return e},e}function v(){var e=B(["\n    font-size: 2.5rem;\n  "]);return v=function(){return e},e}function k(){var e=B(["\n    margin-top: 2rem;\n    width: 95%;\n  "]);return k=function(){return e},e}function _(){var e=B(["\n    width: 90%;\n  \n    margin-top: 0;\n  "]);return _=function(){return e},e}function B(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var E=d.default.input.withConfig({displayName:"SearchBooks__Input",componentId:"s1h9ov2u-0"})(["font-size:2rem;background:",";color:",";height:4rem;width:100%;text-align:right;font-weight:bold;&::placeholder{color:",";font-weight:bold;}"],h.e,h.d,h.d),S=Object(d.default)(p.a).withConfig({displayName:"SearchBooks__Button",componentId:"s1h9ov2u-1"})(["background:",";color:",";font-size:3rem;width:50%;height:4rem;border:0.2rem solid ",";transition:all 0.25s;&:hover{background:",";color:",";}",""],h.e,h.d,h.a,h.d,h.e,b.a.tablet(_())),j=d.default.div.withConfig({displayName:"SearchBooks__SearchBox",componentId:"s1h9ov2u-2"})(["display:flex;flex-direction:column;justify-content:space-between;align-items:center;background:",";border:0.2rem solid ",";border-radius:0.5rem;height:auto;width:80%;margin:0 auto;",""],h.d,h.a,b.a.tablet(k())),O=d.default.div.withConfig({displayName:"SearchBooks__ButtonsBox",componentId:"s1h9ov2u-3"})(["display:flex;flex-direction:row;justify-content:center;align-items:center;height:auto;width:100%;"]),C=d.default.div.withConfig({displayName:"SearchBooks__BookButtons",componentId:"s1h9ov2u-4"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;height:10rem;width:100%;"]),T=d.default.div.withConfig({displayName:"SearchBooks__ResultsBox",componentId:"s1h9ov2u-5"})(["width:100%;height:100%;display:flex;margin:2rem auto;flex-direction:column;align-items:center;justify-content:flex-start;"]),x=d.default.div.withConfig({displayName:"SearchBooks__BookBox",componentId:"s1h9ov2u-6"})(["display:block;width:80%;height:auto;text-align:center;"]),I=d.default.img.withConfig({displayName:"SearchBooks__BookCover",componentId:"s1h9ov2u-7"})(["height:15rem;width:10rem;"]),z=d.default.h1.withConfig({displayName:"SearchBooks__BookTitle",componentId:"s1h9ov2u-8"})(["font-size:3rem;color:",";font-family:",";width:50%;margin:0.5rem auto;text-align:center;",""],h.e,y.a,b.a.tablet(v())),N=d.default.h1.withConfig({displayName:"SearchBooks__BookAuthor",componentId:"s1h9ov2u-9"})(["font-size:2.5rem;color:",";font-family:",";width:50%;margin:0.5rem auto;text-align:center;",""],h.a,y.a,b.a.tablet(w())),P=d.default.p.withConfig({displayName:"SearchBooks__Paragraph",componentId:"s1h9ov2u-10"})(["font-size:3rem;color:",";font-family:",";text-align:center;font-weight:bold;",""],h.e,y.a,b.a.tablet(g())),A=n(62);function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,t){return!t||"object"!==H(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"Search",function(){return G}),n.d(t,"Success",function(){return U}),n.d(t,"Failure",function(){return q}),n.d(t,"Loading",function(){return D});var G=function(e){var t=e.searchTerm,n=e.setSearchTerm,r=e.getBooks,a=e.reset;return o.a.createElement(j,null,o.a.createElement(E,{type:"text",placeholder:"Enter a title",onChange:function(e){n(e.target.value)},value:t}),o.a.createElement(O,null,o.a.createElement(S,{onClick:function(){r()}},"Submit"),o.a.createElement(S,{onClick:function(){a()}},"Clear")))};G.propTypes={searchTerm:a.string,setSearchTerm:a.func,getBooks:a.func,reset:a.func};var U=function(e){var t=e.response,n=e.claimBook,r=e.reset;return o.a.createElement(T,null,t.map(function(e){var t=e.id,a=e.image,i=e.author,c=e.title;return o.a.createElement(x,{key:t},o.a.createElement(I,{src:a}),o.a.createElement(z,null,c),o.a.createElement(N,null,"By:",i),o.a.createElement(C,null,o.a.createElement(S,{onClick:function(){n({title:c,author:i,image:a})}},"Claim"),o.a.createElement(S,{onClick:function(){r()}},"Cancel")))}))};U.propTypes={response:a.array,claimBook:a.func,reset:a.func};var q=function(e){var t=e.error,n=e.reset;return o.a.createElement(T,null,o.a.createElement(P,null,Object(c.a)(t)),o.a.createElement(S,{onClick:function(){n()}},"Got It!"))};q.propTypes={error:a.object,reset:a.func};var D=function(){return o.a.createElement(A.l,null)},K=function(e){var t=e.isLoading,n=e.error,r=e.reset,a=e.claimBook,i=e.searchTerm,c=e.response,u=e.getBooks,l=e.setSearchTerm;return t?o.a.createElement(D,null):n?o.a.createElement(q,{error:n,reset:r}):c?o.a.createElement(U,{response:c,claimBook:a,reset:r}):o.a.createElement(G,{searchTerm:i,setSearchTerm:l,getBooks:u,reset:r})};K.propTypes={isLoading:a.bool,error:a.object,reset:a.func,claimBook:a.func,searchTerm:a.string,response:a.array,getBooks:a.func,setSearchTerm:a.func};var M=Object(i.b)(function(e){return{response:e.goodreads.response,error:e.goodreads.error,isLoading:e.goodreads.isLoading,searchTerm:e.goodreads.searchTerm}},function(e){return{getBooks:function(){return e(u.a.async.getBooks())},claimBook:function(t){return e(u.a.async.claimBook(t))},reset:function(){return e(u.a.creators.reset())},setSearchTerm:function(t){return e(u.a.creators.searchTerm(t))}}})(K),Q=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),R(this,J(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(t,o.a.Component),function(e,t,n){t&&L(e.prototype,t),n&&L(e,n)}(t,[{key:"renderHead",value:function(){return o.a.createElement(s.Helmet,null,o.a.createElement("title",null,"Search books"),o.a.createElement("meta",{property:"og:title",content:"Search books"}))}},{key:"renderBody",value:function(){return o.a.createElement(f.a,{title:"Search for books to claim"},o.a.createElement(M,this.props))}},{key:"render",value:function(){return o.a.createElement("div",null,this.renderHead(),this.renderBody())}}]),t}();t.default=Object(l.a)({Auth:Q,Unauth:m.a})},424:function(e,t,n){"use strict";t.a=function(e){return e&&e.message?e.message:"An error occured..."}},426:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(3),i=n(4),c=n(5),u=n(36),l=n(17);function s(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    display: none;\n  "]);return s=function(){return e},e}var f=i.default.div.withConfig({displayName:"AccountHeader__Container",componentId:"s1yowjso-0"})(["height:100%;width:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;background:",";overflow-y:scroll;&::-webkit-scrollbar{display:none;}"],c.d),m=i.default.h1.withConfig({displayName:"AccountHeader__Title",componentId:"s1yowjso-1"})(["font-size:3rem;color:",";border-bottom:0.1rem solid ",";font-family:",";text-align:left;width:80%;margin:2rem;padding-bottom:1rem;",""],c.e,c.a,u.a,l.a.tablet(s()));function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,y(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r["Component"]),function(e,t,n){t&&p(e.prototype,t),n&&p(e,n)}(t,[{key:"render",value:function(){return o.a.createElement(f,null,o.a.createElement(m,null,this.props.title),this.props.children)}}]),t}();g.propTypes={children:Object(a.oneOfType)([a.array,a.object,a.func]),title:a.string};t.a=g}}]);