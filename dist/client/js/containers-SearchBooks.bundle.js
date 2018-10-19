(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{234:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"Search",function(){return Search}),__webpack_require__.d(__webpack_exports__,"Success",function(){return Success}),__webpack_require__.d(__webpack_exports__,"Failure",function(){return Failure}),__webpack_require__.d(__webpack_exports__,"Loading",function(){return Loading});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),react_redux__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(87),_utils_parseError__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(444),_redux_actions_goodreads__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(79),_hocs_withAuth__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(86),react_helmet__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(445),react_helmet__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_6__),_components_AccountHeader__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(443),_components_RedirectToLanding__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(141),_styles_components_SearchBooks__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(476),_styles_components_Loading__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(68);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,_){if(!(e instanceof _))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,_){for(var t=0;t<_.length;t++){var r=_[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,_,t){return _&&_defineProperties(e.prototype,_),t&&_defineProperties(e,t),e}function _possibleConstructorReturn(e,_){return!_||"object"!==_typeof(_)&&"function"!=typeof _?_assertThisInitialized(e):_}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,_){if("function"!=typeof _&&null!==_)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(_&&_.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),_&&_setPrototypeOf(e,_)}function _setPrototypeOf(e,_){return(_setPrototypeOf=Object.setPrototypeOf||function(e,_){return e.__proto__=_,e})(e,_)}!function(){var e=__webpack_require__(1).enterModule;e&&e(module)}();var Search=function(e){var _=e.searchTerm,t=e.setSearchTerm,r=e.getBooks,o=e.reset;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_components_SearchBooks__WEBPACK_IMPORTED_MODULE_9__.k,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_components_SearchBooks__WEBPACK_IMPORTED_MODULE_9__.h,{type:"text",placeholder:"Enter a title",onChange:function(e){t(e.target.value)},value:_}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_components_SearchBooks__WEBPACK_IMPORTED_MODULE_9__.g,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_components_SearchBooks__WEBPACK_IMPORTED_MODULE_9__.f,{onClick:function(){r()}},"Submit"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_components_SearchBooks__WEBPACK_IMPORTED_MODULE_9__.f,{onClick:function(){o()}},"Clear")))};Search.propTypes={searchTerm:prop_types__WEBPACK_IMPORTED_MODULE_1__.string,setSearchTerm:prop_types__WEBPACK_IMPORTED_MODULE_1__.func,getBooks:prop_types__WEBPACK_IMPORTED_MODULE_1__.func,reset:prop_types__WEBPACK_IMPORTED_MODULE_1__.func};var Success=function(e){var _=e.response,t=e.claimBook,r=e.reset;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_components_SearchBooks__WEBPACK_IMPORTED_MODULE_9__.j,null,_.map(function(e){var _=e.id,o=e.image,n=e.author,a=e.title;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_components_SearchBooks__WEBPACK_IMPORTED_MODULE_9__.b,{key:_},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_components_SearchBooks__WEBPACK_IMPORTED_MODULE_9__.d,{src:o}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_components_SearchBooks__WEBPACK_IMPORTED_MODULE_9__.e,null,a),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_components_SearchBooks__WEBPACK_IMPORTED_MODULE_9__.a,null,"By:",n),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_components_SearchBooks__WEBPACK_IMPORTED_MODULE_9__.c,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_components_SearchBooks__WEBPACK_IMPORTED_MODULE_9__.f,{onClick:function(){t({title:a,author:n,image:o})}},"Claim"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_components_SearchBooks__WEBPACK_IMPORTED_MODULE_9__.f,{onClick:function(){r()}},"Cancel")))}))};Success.propTypes={response:prop_types__WEBPACK_IMPORTED_MODULE_1__.array,claimBook:prop_types__WEBPACK_IMPORTED_MODULE_1__.func,reset:prop_types__WEBPACK_IMPORTED_MODULE_1__.func};var Failure=function(e){var _=e.error,t=e.reset;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_components_SearchBooks__WEBPACK_IMPORTED_MODULE_9__.j,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_components_SearchBooks__WEBPACK_IMPORTED_MODULE_9__.i,null,Object(_utils_parseError__WEBPACK_IMPORTED_MODULE_3__.a)(_)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_components_SearchBooks__WEBPACK_IMPORTED_MODULE_9__.f,{onClick:function(){t()}},"Got It!"))};Failure.propTypes={error:prop_types__WEBPACK_IMPORTED_MODULE_1__.object,reset:prop_types__WEBPACK_IMPORTED_MODULE_1__.func};var Loading=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_components_Loading__WEBPACK_IMPORTED_MODULE_10__.l,null)},mapStateToProps=function(e){return{response:e.goodreads.response,error:e.goodreads.error,isLoading:e.goodreads.isLoading,searchTerm:e.goodreads.searchTerm}},mapDispatchToProps=function(e){return{getBooks:function(){return e(_redux_actions_goodreads__WEBPACK_IMPORTED_MODULE_4__.a.async.getBooks())},claimBook:function(_){return e(_redux_actions_goodreads__WEBPACK_IMPORTED_MODULE_4__.a.async.claimBook(_))},reset:function(){return e(_redux_actions_goodreads__WEBPACK_IMPORTED_MODULE_4__.a.creators.reset())},setSearchTerm:function(_){return e(_redux_actions_goodreads__WEBPACK_IMPORTED_MODULE_4__.a.creators.searchTerm(_))}}},SearchBooksModes=function(e){var _=e.isLoading,t=e.error,r=e.reset,o=e.claimBook,n=e.searchTerm,a=e.response,c=e.getBooks,s=e.setSearchTerm;return _?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Loading,null):t?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Failure,{error:t,reset:r}):a?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Success,{response:a,claimBook:o,reset:r}):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Search,{searchTerm:n,setSearchTerm:s,getBooks:c,reset:r})};SearchBooksModes.propTypes={isLoading:prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,error:prop_types__WEBPACK_IMPORTED_MODULE_1__.object,reset:prop_types__WEBPACK_IMPORTED_MODULE_1__.func,claimBook:prop_types__WEBPACK_IMPORTED_MODULE_1__.func,searchTerm:prop_types__WEBPACK_IMPORTED_MODULE_1__.string,response:prop_types__WEBPACK_IMPORTED_MODULE_1__.array,getBooks:prop_types__WEBPACK_IMPORTED_MODULE_1__.func,setSearchTerm:prop_types__WEBPACK_IMPORTED_MODULE_1__.func};var ConnectedSearchBooks=Object(react_redux__WEBPACK_IMPORTED_MODULE_2__.b)(mapStateToProps,mapDispatchToProps)(SearchBooksModes),SearchBooksContainer=function(_React$Component){function SearchBooksContainer(){return _classCallCheck(this,SearchBooksContainer),_possibleConstructorReturn(this,_getPrototypeOf(SearchBooksContainer).apply(this,arguments))}return _inherits(SearchBooksContainer,_React$Component),_createClass(SearchBooksContainer,[{key:"renderHead",value:function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_6__.Helmet,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title",null,"Search books"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:title",content:"Search books"}))}},{key:"renderBody",value:function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AccountHeader__WEBPACK_IMPORTED_MODULE_7__.a,{title:"Search for books to claim"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ConnectedSearchBooks,this.props))}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,this.renderHead(),this.renderBody())}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),SearchBooksContainer}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),_default=Object(_hocs_withAuth__WEBPACK_IMPORTED_MODULE_5__.a)({Auth:SearchBooksContainer,Unauth:_components_RedirectToLanding__WEBPACK_IMPORTED_MODULE_8__.a});__webpack_exports__.default=_default,function(){var e=__webpack_require__(1).default,_=__webpack_require__(1).leaveModule;e&&(e.register(Search,"Search","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\containers\\SearchBooks.js"),e.register(Success,"Success","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\containers\\SearchBooks.js"),e.register(Failure,"Failure","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\containers\\SearchBooks.js"),e.register(Loading,"Loading","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\containers\\SearchBooks.js"),e.register(mapStateToProps,"mapStateToProps","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\containers\\SearchBooks.js"),e.register(mapDispatchToProps,"mapDispatchToProps","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\containers\\SearchBooks.js"),e.register(SearchBooksModes,"SearchBooksModes","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\containers\\SearchBooks.js"),e.register(ConnectedSearchBooks,"ConnectedSearchBooks","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\containers\\SearchBooks.js"),e.register(SearchBooksContainer,"SearchBooksContainer","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\containers\\SearchBooks.js"),e.register(_default,"default","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\containers\\SearchBooks.js"),_(module))}()}.call(this,__webpack_require__(7)(module))},443:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),_styles_components_AccountHeader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(447);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,_){if(!(e instanceof _))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,_){for(var t=0;t<_.length;t++){var r=_[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,_,t){return _&&_defineProperties(e.prototype,_),t&&_defineProperties(e,t),e}function _possibleConstructorReturn(e,_){return!_||"object"!==_typeof(_)&&"function"!=typeof _?_assertThisInitialized(e):_}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,_){if("function"!=typeof _&&null!==_)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(_&&_.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),_&&_setPrototypeOf(e,_)}function _setPrototypeOf(e,_){return(_setPrototypeOf=Object.setPrototypeOf||function(e,_){return e.__proto__=_,e})(e,_)}!function(){var e=__webpack_require__(1).enterModule;e&&e(module)}();var AccountHeader=function(_Component){function AccountHeader(){return _classCallCheck(this,AccountHeader),_possibleConstructorReturn(this,_getPrototypeOf(AccountHeader).apply(this,arguments))}return _inherits(AccountHeader,_Component),_createClass(AccountHeader,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_components_AccountHeader__WEBPACK_IMPORTED_MODULE_2__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_components_AccountHeader__WEBPACK_IMPORTED_MODULE_2__.b,null,this.props.title),this.props.children)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),AccountHeader}(react__WEBPACK_IMPORTED_MODULE_0__.Component);AccountHeader.propTypes={children:Object(prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)([prop_types__WEBPACK_IMPORTED_MODULE_1__.array,prop_types__WEBPACK_IMPORTED_MODULE_1__.object,prop_types__WEBPACK_IMPORTED_MODULE_1__.func]),title:prop_types__WEBPACK_IMPORTED_MODULE_1__.string};var _default=AccountHeader;__webpack_exports__.a=_default,function(){var e=__webpack_require__(1).default,_=__webpack_require__(1).leaveModule;e&&(e.register(AccountHeader,"AccountHeader","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\components\\AccountHeader.js"),e.register(_default,"default","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\components\\AccountHeader.js"),_(module))}()}).call(this,__webpack_require__(7)(module))},444:function(e,_,t){"use strict";(function(e){!function(){var _=t(1).enterModule;_&&_(e)}();var r=function(e){return e&&e.message?e.message:"An error occured..."};_.a=r,function(){var _=t(1).default,o=t(1).leaveModule;_&&(_.register(r,"default","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\utils\\parseError.js"),o(e))}()}).call(this,t(7)(e))},447:function(e,_,t){"use strict";(function(e){t.d(_,"a",function(){return s}),t.d(_,"b",function(){return i});var r=t(5),o=t(6),n=t(42),a=t(16);function c(){var e=function(e,_){_||(_=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(_)}}))}(["\n    display: none;\n  "]);return c=function(){return e},e}!function(){var _=t(1).enterModule;_&&_(e)}();var s=r.default.div.withConfig({displayName:"AccountHeader__Container",componentId:"s1yowjso-0"})(["height:100%;width:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;background:",";overflow-y:scroll;-ms-overflow-style:none;&::-webkit-scrollbar{display:none;}"],o.d),i=r.default.h1.withConfig({displayName:"AccountHeader__Title",componentId:"s1yowjso-1"})(["font-size:3rem;color:",";border-bottom:0.1rem solid ",";font-family:",";text-align:left;width:80%;margin:2rem;padding-bottom:1rem;",""],o.e,o.a,n.a,a.a.tablet(c()));!function(){var _=t(1).default,r=t(1).leaveModule;_&&(_.register(s,"Container","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\styles\\components\\AccountHeader.js"),_.register(i,"Title","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\styles\\components\\AccountHeader.js"),r(e))}()}).call(this,t(7)(e))},476:function(e,_,t){"use strict";(function(e){t.d(_,"h",function(){return d}),t.d(_,"f",function(){return f}),t.d(_,"k",function(){return B}),t.d(_,"g",function(){return O}),t.d(_,"c",function(){return P}),t.d(_,"j",function(){return k}),t.d(_,"b",function(){return C}),t.d(_,"d",function(){return D}),t.d(_,"e",function(){return h}),t.d(_,"a",function(){return M}),t.d(_,"i",function(){return m});var r=t(5),o=t(21),n=t(6),a=t(42),c=t(16);function s(){var e=E(["\n    margin-top: 2rem;\n    width: 95%;\n    font-size: 2.5rem;\n  "]);return s=function(){return e},e}function i(){var e=E(["\n    font-size: 2rem;\n  "]);return i=function(){return e},e}function p(){var e=E(["\n    font-size: 2.5rem;\n  "]);return p=function(){return e},e}function u(){var e=E(["\n    margin-top: 2rem;\n    width: 95%;\n  "]);return u=function(){return e},e}function l(){var e=E(["\n    width: 90%;\n  \n    margin-top: 0;\n  "]);return l=function(){return e},e}function E(e,_){return _||(_=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(_)}}))}!function(){var _=t(1).enterModule;_&&_(e)}();var d=r.default.input.withConfig({displayName:"SearchBooks__Input",componentId:"s1h9ov2u-0"})(["font-size:2rem;background:",";color:",";height:4rem;width:100%;text-align:right;font-weight:bold;&::placeholder{color:",";font-weight:bold;}"],n.e,n.d,n.d),f=Object(r.default)(o.a).withConfig({displayName:"SearchBooks__Button",componentId:"s1h9ov2u-1"})(["background:",";color:",";font-size:3rem;width:50%;height:4rem;border:0.2rem solid ",";transition:all 0.25s;&:hover{background:",";color:",";}",""],n.e,n.d,n.a,n.d,n.e,c.a.tablet(l())),B=r.default.div.withConfig({displayName:"SearchBooks__SearchBox",componentId:"s1h9ov2u-2"})(["display:flex;flex-direction:column;justify-content:space-between;align-items:center;background:",";border:0.2rem solid ",";border-radius:0.5rem;height:auto;width:80%;margin:0 auto;",""],n.d,n.a,c.a.tablet(u())),O=r.default.div.withConfig({displayName:"SearchBooks__ButtonsBox",componentId:"s1h9ov2u-3"})(["display:flex;flex-direction:row;justify-content:center;align-items:center;height:auto;width:100%;"]),P=r.default.div.withConfig({displayName:"SearchBooks__BookButtons",componentId:"s1h9ov2u-4"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;height:10rem;width:100%;"]),k=r.default.div.withConfig({displayName:"SearchBooks__ResultsBox",componentId:"s1h9ov2u-5"})(["width:100%;height:100%;display:flex;margin:2rem auto;flex-direction:column;align-items:center;justify-content:flex-start;"]),C=r.default.div.withConfig({displayName:"SearchBooks__BookBox",componentId:"s1h9ov2u-6"})(["display:block;width:80%;height:auto;text-align:center;"]),D=r.default.img.withConfig({displayName:"SearchBooks__BookCover",componentId:"s1h9ov2u-7"})(["height:15rem;width:10rem;"]),h=r.default.h1.withConfig({displayName:"SearchBooks__BookTitle",componentId:"s1h9ov2u-8"})(["font-size:3rem;color:",";font-family:",";width:50%;margin:0.5rem auto;text-align:center;",""],n.e,a.a,c.a.tablet(p())),M=r.default.h1.withConfig({displayName:"SearchBooks__BookAuthor",componentId:"s1h9ov2u-9"})(["font-size:2.5rem;color:",";font-family:",";width:50%;margin:0.5rem auto;text-align:center;",""],n.a,a.a,c.a.tablet(i())),m=r.default.p.withConfig({displayName:"SearchBooks__Paragraph",componentId:"s1h9ov2u-10"})(["font-size:3rem;color:",";font-family:",";text-align:center;font-weight:bold;",""],n.e,a.a,c.a.tablet(s()));!function(){var _=t(1).default,r=t(1).leaveModule;_&&(_.register(d,"Input","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\styles\\components\\SearchBooks.js"),_.register(f,"Button","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\styles\\components\\SearchBooks.js"),_.register(B,"SearchBox","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\styles\\components\\SearchBooks.js"),_.register(O,"ButtonsBox","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\styles\\components\\SearchBooks.js"),_.register(P,"BookButtons","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\styles\\components\\SearchBooks.js"),_.register(k,"ResultsBox","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\styles\\components\\SearchBooks.js"),_.register(C,"BookBox","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\styles\\components\\SearchBooks.js"),_.register(D,"BookCover","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\styles\\components\\SearchBooks.js"),_.register(h,"BookTitle","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\styles\\components\\SearchBooks.js"),_.register(M,"BookAuthor","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\styles\\components\\SearchBooks.js"),_.register(m,"Paragraph","C:\\Users\\Steve\\Desktop\\JavaScript\\FCC-Backend\\Book-Trading-App\\src\\client\\styles\\components\\SearchBooks.js"),r(e))}()}).call(this,t(7)(e))}}]);