(this["webpackJsonpred-store"]=this["webpackJsonpred-store"]||[]).push([[0],{29:function(e,t,n){e.exports=n(51)},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r=n(9),a=n(17),c=n(27),o=n(4),i=n(1),u=n(14),l=function(e,t){var n,r,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id",c=e.some((function(e,c){return n=c,r=e,e[a]===t}));return c||(n=-1,r=null),{isIn:c,index:n,element:r}},s=function(e,t){return e.indexOf(t)>-1},m={toText:function(e){return e.toString().split("_").join(" ").toLowerCase()},toKey:function(e){return e.toString().split("_").join("").toLowerCase()},toParameter:function(e){return e.toString().split("_")[1].toLowerCase()},searchby:{true:function(e){return function(t){var n=t.title,r=t.author,a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map((function(e){return e.toLowerCase()}))}(n,r,e.trim()),c=Object(u.a)(a,3);if(n=c[0],r=c[1],e=c[2],s(n,e)||s(r,e))return t}},false:function(){return function(e){return e}}},instock:{true:function(){return function(e){return e.quantity>0}},false:function(){return function(e){return e}}},byrating:{tohigh:function(e){return function(t,n){return t[e]-n[e]}},tolow:function(e){return function(t,n){return n[e]-t[e]}}},byprice:{tohigh:function(e){return function(t,n){return t[e]-n[e]}},tolow:function(e){return function(t,n){return n[e]-t[e]}}}},f=function(e,t,n){return[].concat(Object(o.a)(e.slice(0,t)),[Object(i.a)({},n)],Object(o.a)(e.slice(t+1)))},b=function(e,t,n){var r=e.books,a=e.cache,c=l(r,t),o=c.index,u=c.element,s=l(a,t),m=s.index,b=s.element,E=Object(i.a)(Object(i.a)({},u),{},{isInCart:n}),d=Object(i.a)(Object(i.a)({},b),{},{isInCart:n});return r=f(r,o,E),a=f(a,m,d),Object(i.a)(Object(i.a)({},e),{},{books:r,cache:a})},E=function(e){return"IN_STOCK"===e},d=function(e,t){var n=e.filters,r=n[t];return r=E(t)?function(e){return!e}(r):function(e){return e?"TO_LOW"===e&&"TO_HIGH":"TO_LOW"}(r),n=E(t)?function(e,t){return Object(i.a)(Object(i.a)({},e),{},{IN_STOCK:t})}(n,r):function(e){return"BY_RATING"===e}(t)?function(e,t){return Object(i.a)(Object(i.a)({},e),{},{BY_RATING:t,BY_PRICE:!1})}(n,r):function(e,t){return Object(i.a)(Object(i.a)({},e),{},{BY_RATING:!1,BY_PRICE:t})}(n,r),Object(i.a)(Object(i.a)({},e),{},{filters:n})},O=function(e,t,n){return e=function(e){return!1===e}(n)?d(e,t):function(e,t){var n,r=e.filters,a=" "===(n=t)[n.length-1]?" ":"";return t=t.trim()+a,r=Object(i.a)(Object(i.a)({},r),{},{BY_RATING:!1,BY_PRICE:!1,SEARCH_BY:t}),Object(i.a)(Object(i.a)({},e),{},{filters:r})}(e,n),Object(i.a)({},e)},_=function(e){return"searchby"===e},p=function(e){var t=e.cache,n=e.filters,r=Object.entries(n).reduce((function(e,t){var n=Object(u.a)(t,2),r=n[0],a=n[1];return a?function(e,t,n){var r=m,a=r.toKey,c=n,i=(0,r.toParameter)(t);return t=a(t),n=_(t)?function(e){return""!==e}(n):a(n),e=function(e){return"byrating"===e||"byprice"===e}(t)?e.sort(r[t][n](i)):_(t)?e.filter(r[t][n](c)):e.filter(r[t][n](i)),Object(o.a)(e)}(e,r,a):Object(o.a)(e)}),t);return Object(o.a)(r)},h=function(e,t,n){return e=function(e){var t=e.cache,n=e.filters,r=Object.values(n).find((function(e){return!!e}))?p(e):Object(o.a)(t);return Object(i.a)(Object(i.a)({},e),{},{books:r})}(e=O(e,t,n)),Object(i.a)({},e)},v={IN_STOCK:!1,BY_RATING:!1,BY_PRICE:!1,SEARCH_BY:""},C={cache:[],books:[],isLoading:!0,error:null,filters:Object(i.a)({},v)},j=function(e,t){if(!e)return Object(i.a)({},C);var n=t.type,r=t.bookId,a=t.filter,c=t.request,u=t.newBooks,l=t.error,s=e.booksState,m=s.cache;switch(n){case"FETCH_BOOKS_REQUEST":return Object(i.a)(Object(i.a)({},s),{},{isLoading:!0});case"FETCH_BOOKS_SUCCESS":return Object(i.a)(Object(i.a)({},s),{},{books:Object(o.a)(u),cache:Object(o.a)(u),isLoading:!1});case"FETCH_BOOKS_FAILURE":return Object(i.a)(Object(i.a)({},s),{},{isLoading:!1,error:l});case"GET_BOOKS_FROM_CACHE":return Object(i.a)(Object(i.a)({},s),{},{books:Object(o.a)(m),isLoading:!1,filters:Object(i.a)({},v)});case"TOGGLE_FILTER":return h(s,a,!1);case"SEARCH_BY":return h(s,"SEARCH_BY",c);case"SET_BOOK_AS_ADDED_TO_CART":return b(s,r,!0);case"UNSET_BOOK_AS_ADDED_TO_CART":return b(s,r,!1);case"UNSET_ALL_BOOKS_AS_ADDED_TO_CART":return function(e){var t=e.books,n=e.cache;return t=t.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{isInCart:!1})})),n=n.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{isInCart:!1})})),Object(i.a)(Object(i.a)({},e),{},{books:t,cache:n})}(s);default:return s}},k=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return n?l(e,n.id).isIn?[].concat(Object(o.a)(e.slice(0,t)),[n],Object(o.a)(e.slice(t+1))):[].concat(Object(o.a)(e),[n]):[].concat(Object(o.a)(e.slice(0,t)),Object(o.a)(e.slice(t+1)))},g=function(e,t,n,r){var a=r();return k(e,n,Object(i.a)(Object(i.a)({},t),{},{count:a,total:a*t.price}))},T=function(e,t,n,r){var a,c=l(e,t),o=c.isIn,i=c.element,u=c.index,s=function(e,t){return t.find((function(t){return t.id===e}))}(t,n);return o||(i={id:(a=s).id,title:a.title,price:a.price,currency:a.currency,quantity:a.quantity}),function(e,t,n,r,a,c){var o=t.count;switch(c){case"DEC":return g(e,t,r,(function(){return function(e){return e>1?e-1:e}(o)}));case"INC":return g(e,t,r,(function(){return function(e,t){return e<t?e+1:e}(o,a)}));case"REM":return k(e,r);default:return n?e:g(e,t,r,(function(){return 1}))}}(e,i,o,u,s.quantity,r)},y=function(e,t,n,r,a){var c=T(t,n,r,a),o=c.reduce((function(e,t){return e+t.total}),0);return Object(i.a)(Object(i.a)({},e),{},{cartItems:c,total:o})},S=function(e,t){var n={cartItems:[],currency:"$",total:0};if(!e)return n;var r=t.bookId,a=e.cartState,c=e.cartState.cartItems,o=e.booksState.books;switch(t.type){case"ADD_BOOK_TO_CART":return y(a,c,r,o);case"DECREASE_ITEM_CART":return y(a,c,r,o,"DEC");case"INCREASE_ITEM_CART":return y(a,c,r,o,"INC");case"REMOVE_ITEM_CART":return y(a,c,r,o,"REM");case"REMOVE_ALL_ITEM_FROM_CART":return n;default:return a}},I=function(e,t){return{booksState:j(e,t),cartState:S(e,t)}},N=Object(a.c)(I,Object(a.a)(c.a,(function(e){return function(e){return function(t){return e("string"===typeof t?{type:t}:t)}}}),(function(e){return function(e){return function(t){return console.log(t.type),e(t)}}})));N.dispatch("TEST");var A;N.dispatch((A=4e3,function(e){setTimeout((function(){return e({type:"DELAYED_ACTION"})}),A)}));var R=N,B=n(0),w=n.n(B),x=n(18),D=n.n(x),L=n(13),F=n(11),K=n(12),H=n(21),M=n(20),Y=(n(37),function(){return w.a.createElement("div",{className:"rs-error-view"},"Something went wrong..")}),q=function(e){Object(H.a)(n,e);var t=Object(M.a)(n);function n(){var e;Object(F.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isHasError:!1},e}return Object(K.a)(n,[{key:"componentDidCatch",value:function(){this.setState({isHasError:!0})}},{key:"render",value:function(){return this.state.isHasError?w.a.createElement("div",{className:this.props.className},w.a.createElement(Y,null)):this.props.children}}]),n}(B.Component),G=n(3),U=function(e){return{type:"TOGGLE_FILTER",filter:e}},P=function(e){return{type:"SEARCH_BY",request:e}},$=function(e){return function(){return function(t){t("FETCH_BOOKS_REQUEST"),e.getBooks().then((function(e){return t({type:"FETCH_BOOKS_SUCCESS",newBooks:e})})).catch((function(e){return t(function(e){return{type:"FETCH_BOOKS_FAILURE",error:e}}(e))}))}}},V=function(e){return function(t){t(function(e){return{type:"SET_BOOK_AS_ADDED_TO_CART",bookId:e}}(e)),t(function(e){return{type:"ADD_BOOK_TO_CART",bookId:e}}(e))}},Q=function(){return function(e){e("FETCH_BOOKS_REQUEST"),setTimeout((function(){return e("GET_BOOKS_FROM_CACHE")}),500)}},W=(n(38),function(e){var t=e.cartItem,n=t.id,r=t.title,a=t.price,c=t.currency,o=t.count,i=t.quantity,u=t.total,l=e.index,s=e.decrease,m=e.increase,f=e.remove;return w.a.createElement(B.Fragment,null,w.a.createElement("th",{scope:"row"},++l),w.a.createElement("td",null,r),w.a.createElement("td",null,c,a),w.a.createElement("td",null,o),w.a.createElement("td",null,i),w.a.createElement("td",{className:"rs-cart-item__actions"},w.a.createElement("button",{onClick:function(){return s(n)},className:"btn btn-outline-warning"},w.a.createElement("i",{className:"fa fa-minus-circle"})),w.a.createElement("button",{onClick:function(){return m(n)},className:"btn btn-outline-success"},w.a.createElement("i",{className:"fa fa-plus-circle"})),w.a.createElement("button",{onClick:function(){return f(n)},className:"btn btn-outline-danger"},w.a.createElement("i",{className:"fa fa-trash-o"}))),w.a.createElement("td",{className:"text-right"},c,u))}),J=(n(39),function(e){var t=e.cartItems,n=e.currency,r=e.total,a=e.clearCart;return w.a.createElement("div",{className:"rs-cart row"},w.a.createElement("table",{className:"table"},w.a.createElement("thead",null,w.a.createElement("tr",null,w.a.createElement("th",{scope:"col"},"#"),w.a.createElement("th",{scope:"col"},"Item"),w.a.createElement("th",{scope:"col"},"Price"),w.a.createElement("th",{scope:"col"},"Count"),w.a.createElement("th",{scope:"col",className:"rs-cart__quantity"},"Quantity in store"),w.a.createElement("th",{scope:"col"},"Action"),w.a.createElement("th",{className:"text-right",scope:"col"},"Total"))),w.a.createElement("tbody",null,t.map((function(t,n){return w.a.createElement("tr",{key:t.id},w.a.createElement(W,Object.assign({},e,{cartItem:t,index:n})))})))),w.a.createElement("div",{className:"rs-cart__footer d-flex justify-content-between align-items-center w-100"},w.a.createElement("button",{onClick:a,className:"btn btn-danger"},"clear cart"),"Total: ",n,r))}),z={decrease:function(e){return{type:"DECREASE_ITEM_CART",bookId:e}},increase:function(e){return{type:"INCREASE_ITEM_CART",bookId:e}},remove:function(e){return function(t){t(function(e){return{type:"UNSET_BOOK_AS_ADDED_TO_CART",bookId:e}}(e)),t(function(e){return{type:"REMOVE_ITEM_CART",bookId:e}}(e))}},clearCart:function(){return function(e){var t;e({type:"UNSET_ALL_BOOKS_AS_ADDED_TO_CART",bookId:t}),e("REMOVE_ALL_ITEM_FROM_CART")}}},X=Object(r.b)((function(e){var t=e.cartState;return{cartItems:t.cartItems,currency:t.currency,total:t.total}}),z)((function(e){return w.a.createElement(J,e)})),Z=function(){return w.a.createElement(B.Fragment,null,w.a.createElement(X,null))},ee=n(22),te=(n(40),function(e){var t=e.rating;return w.a.createElement("ul",{className:"rs-book-item__rating d-flex p-0 m-0 list-unstyled"},[1,2,3,4,5].map((function(e){return w.a.createElement("li",{key:e},w.a.createElement("span",{className:"fa fa-star ".concat(t>=e?"checked":"")}))})))}),ne=function(e){var t=e.book,n=t.title,r=t.author,a=t.price,c=t.cover,o=t.rating,i=t.currency,u=t.quantity,l=t.isInCart,s=e.addBookToCart;return w.a.createElement("div",{className:"rs-book-item d-flex border"},w.a.createElement("div",{className:"rs-book-item__cover"},w.a.createElement("img",{src:c,alt:n})),w.a.createElement("div",{className:"rs-book-item__info d-flex flex-column flex-grow-1"},w.a.createElement(te,{rating:o}),w.a.createElement("div",{className:"rs-book-item__title rs-font"},n.toLowerCase()),w.a.createElement("div",{className:"rs-book-item__author"},r),u?w.a.createElement(B.Fragment,null,w.a.createElement("div",{className:"rs-book-item__price"},i,a),l?w.a.createElement("button",{className:"rs-add-to-cart btn btn-warning btn-sm",disabled:!0},"added"):w.a.createElement("button",{onClick:s,className:"rs-add-to-cart btn btn-warning btn-sm"},"add to cart")):w.a.createElement("div",{className:"rs-book-item__info--out-of-stock"},"Out of stock")))},re=(n(41),["id"]),ae=m.toText,ce=function(e){var t=e.filter,n=e.isSet,r=e.text,a=e.onClick;return w.a.createElement("button",{onClick:a,type:"button",className:"mb-1 mb-sm-0 ml-0 ml-sm-2 flex-grow-1 btn btn-sm ".concat(n?"btn-success":"btn-secondary")},r,"IN_STOCK"!==t?w.a.createElement(B.Fragment,null,":\xa0",w.a.createElement("span",{className:"rs-to-low ".concat(n)},"to low"),"\xa0/\xa0",w.a.createElement("span",{className:"rs-to-high ".concat(n)},"to high")):"")},oe=function(e){var t=e.books,n=e.filters,r=e.searchBy,a=e.toggleFilter,c=e.addBookToCart;return w.a.createElement("div",{className:"row"},w.a.createElement("div",{className:"rs-p-after mb-2 w-100"},w.a.createElement("input",{onChange:function(e){return r(e.target.value)},value:n.SEARCH_BY,className:"form-control",type:"text",placeholder:"search by title and author"})),w.a.createElement("div",{className:"rs-book-list__sort rs-p-after mb-2 w-100 d-flex"},w.a.createElement("h4",{className:"m-0 d-none d-sm-block"},"Sort by:"),w.a.createElement("div",{className:"d-flex flex-column flex-sm-row flex-grow-1"},Object.entries(n).map((function(e){var t=Object(u.a)(e,2),n=t[0],r=t[1];return"SEARCH_BY"===n?null:w.a.createElement(ce,{key:n,filter:n,isSet:r,text:ae(n),onClick:function(){return a(n)}})})))),w.a.createElement("ul",{className:"rs-book-list d-flex flex-wrap"},t.map((function(e){var t=e.id,n=Object(ee.a)(e,re);return w.a.createElement("li",{className:"col-md-6",key:t},w.a.createElement(ne,{book:n,addBookToCart:function(){return c(t)}}))}))))},ie=(n(42),function(){return w.a.createElement("div",{className:"rs-spinner"},w.a.createElement("div",{className:"rs-spinner__animation"},w.a.createElement("div",null),w.a.createElement("div",null),w.a.createElement("div",null,w.a.createElement("div",null)),w.a.createElement("div",null,w.a.createElement("div",null))))}),ue=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}},le=Object(B.createContext)(),se=le.Provider,me=le.Consumer,fe=function(e){return function(t){return function(n){return w.a.createElement(me,null,(function(r){return w.a.createElement(t,Object.assign({className:e},n,{bookstoreService:r}))}))}}},be=["isLoading","error","fetchBooks","getBooksFromCache","bookstoreService"],Ee=function(e){Object(H.a)(n,e);var t=Object(M.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(K.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.getBooksFromCache,n=e.books,r=e.fetchBooks;n.length>0?t():r()}},{key:"render",value:function(){var e=this.props,t=e.isLoading,n=e.error,r=(e.fetchBooks,e.getBooksFromCache,e.bookstoreService,Object(ee.a)(e,be));return t?w.a.createElement(ie,null):n?w.a.createElement(Y,null):w.a.createElement(oe,r)}}]),n}(B.Component),de=ue(fe(),Object(r.b)((function(e){var t=e.booksState;return Object(i.a)({},t)}),(function(e,t){var n=t.bookstoreService;return Object(a.b)({fetchBooks:$(n),getBooksFromCache:Q,addBookToCart:V,toggleFilter:U,searchBy:P},e)})))(Ee),Oe=function(){return w.a.createElement(B.Fragment,null,w.a.createElement(de,null))},_e=(n(43),n(44),Object(r.b)((function(e){var t=e.cartState,n=t.cartItems,r=t.currency,a=t.total;return{numberItems:n.length,currency:r,total:a}}))((function(e){var t=e.numberItems,n=e.currency,r=e.total;return w.a.createElement("div",{className:"rs-header__wrapper rs-p-after border-bottom"},w.a.createElement("header",{className:"container"},w.a.createElement("div",{className:"row d-flex justify-content-between align-items-center"},w.a.createElement(L.b,{to:"/red-store-build/",className:"rs-header__logo"},"Red-Store"),w.a.createElement(L.b,{to:"/red-store-build/cart"},w.a.createElement("i",{className:"fa fa-shopping-cart"})," ",t," items (",n,r,")"))))}))),pe=function(){return w.a.createElement(B.Fragment,null,w.a.createElement(_e,null),w.a.createElement("main",{role:"main",className:"container pb-5"},w.a.createElement(G.c,null,w.a.createElement(G.a,{path:"/red-store-build/",component:Oe,exact:!0}),w.a.createElement(G.a,{path:"/red-store-build/cart",component:Z}))))},he=Object(K.a)((function e(){var t=this;Object(F.a)(this,e),this._data=[{id:1,title:"The Old Man and the Sea",author:"Ernest Hemmingway",price:4,currency:"$",quantity:1,cover:"https://upload.wikimedia.org/wikipedia/en/7/73/Oldmansea.jpg?20120115072708",isInCart:!1,rating:3},{id:2,title:"Treasure Island",author:"Robert Louis Stevenson",price:5,currency:"$",quantity:0,cover:"https://images-na.ssl-images-amazon.com/images/I/910CGpvNnkL.jpg",isInCart:!1,rating:1},{id:3,title:"Robinson Crusoe",author:"Daniel Defoe",price:2,currency:"$",quantity:5,cover:"https://images-na.ssl-images-amazon.com/images/I/414p0x7KV%2BL.jpg",isInCart:!1,rating:5},{id:4,title:"The Sea Wolf",author:"Jack London",price:3,currency:"$",quantity:3,cover:"https://kbimages1-a.akamaihd.net/602eabe2-2158-44df-ba9e-29ae8849493e/1200/1200/False/the-sea-wolf-14.jpg",isInCart:!1,rating:2},{id:5,title:"Moby-Dick, or The Whale",author:"Herman Melville",price:1,currency:"$",quantity:2,cover:"https://www.booklya.ua/content/upload/product/183k/183841/800x800/560616/moby-dick.jpg",isInCart:!1,rating:4}],this.getBooks=function(){return new Promise((function(e,n){return setTimeout((function(){e(t._data)}),700)}))}}));D.a.render(w.a.createElement(w.a.StrictMode,null,w.a.createElement(r.a,{store:R},w.a.createElement(q,null,w.a.createElement(se,{value:new he},w.a.createElement(L.a,null,w.a.createElement(pe,null)))))),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.48dd049c.chunk.js.map