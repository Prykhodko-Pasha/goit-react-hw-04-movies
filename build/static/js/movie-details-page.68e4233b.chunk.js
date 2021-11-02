(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{33:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,"a",(function(){return a}))},34:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(33);function r(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(e,t):void 0}}},35:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(34);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(d){r=!0,c=d}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},36:function(e,t,n){"use strict";n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return s}));var a="https://api.themoviedb.org/3",r="352acb8d318346b404dce557309fb342";function c(e){return fetch("".concat(a,"/trending/movie/week?api_key=").concat(r,"&page=").concat(e)).then((function(e){return e.json()})).catch((function(e){return Promise.reject(e)}))}function o(e,t){return fetch("".concat(a,"/search/movie?api_key=").concat(r,"&query=").concat(e,"&page=").concat(t)).then((function(e){return e.json()})).catch((function(e){return Promise.reject(e)}))}function i(e){return fetch("".concat(a,"/movie/").concat(e,"?api_key=").concat(r,"&language=en-US")).then((function(e){return e.json()})).catch((function(e){return Promise.reject(e)}))}function d(e){return fetch("".concat(a,"/movie/").concat(e,"/reviews?api_key=").concat(r)).then((function(e){return e.json()})).catch((function(e){return Promise.reject(e)}))}function s(e){return console.log("".concat(a,"/movie/").concat(e,"/credits?api_key=").concat(r)),fetch("".concat(a,"/movie/").concat(e,"/credits?api_key=").concat(r)).then((function(e){return e.json()})).catch((function(e){return Promise.reject(e)}))}},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(0);var a=n(43),r=n.n(a),c=n(1);function o(e){var t=e.onGoBack;return Object(c.jsx)("button",{type:"button",className:r.a.GoBackButton,onClick:t,children:"\u2190 Go to list"})}},43:function(e,t,n){e.exports={GoBackButton:"GoBackButton_GoBackButton__3fMcT"}},46:function(e,t,n){e.exports={MovieCard:"MovieCard_MovieCard__1926D",MovieCard__info:"MovieCard_MovieCard__info__2oDfn",MovieCard__header:"MovieCard_MovieCard__header__1PHEC",MovieCard__name:"MovieCard_MovieCard__name__2YZsn",MovieCard__year:"MovieCard_MovieCard__year__2Ouee",MovieCard__rating:"MovieCard_MovieCard__rating__2rdI5",MovieCard__genres:"MovieCard_MovieCard__genres__3lYL4",MovieCard__img:"MovieCard_MovieCard__img__3qlOm",MovieCard__desc:"MovieCard_MovieCard__desc__1GxcR",MovieCard__text:"MovieCard_MovieCard__text__3P0VA",MovieCard__additionalInfo:"MovieCard_MovieCard__additionalInfo__13hty",MovieCard__additionalInfo_item:"MovieCard_MovieCard__additionalInfo_item__2C8wr",MovieCard__additionalInfo_item_active:"MovieCard_MovieCard__additionalInfo_item_active__2C9yp",blur_back:"MovieCard_blur_back__3FN4L"}},56:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var a=n(35),r=n(0),c=n(2),o=n(36),i=n(15),d=n(8),s=n(42),_=n(46),u=n.n(_),l=n(1),v=Object(r.lazy)((function(){return n.e(0).then(n.bind(null,57))})),f=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,58))}));function j(e){var t,n,a,o,_=e.movie,j=Object(c.i)(),b=j.url,m=j.path,h=Object(c.g)(),C=Object(c.f)(),M=_.poster_path,O=_.backdrop_path,p=_.title,g=_.release_date,x=_.vote_average,y=_.overview,k=_.genres,N="https://image.tmdb.org/t/p/original",I=g.slice(0,4),w=x%1===0?"".concat(x,".0"):x,S=k.map((function(e){return e.name})).join(", ");return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:u.a.MovieCard,children:[Object(l.jsx)(d.b,{to:null!==(t=null===h||void 0===h||null===(n=h.state)||void 0===n?void 0:n.from)&&void 0!==t?t:"",children:Object(l.jsx)(s.a,{onGoBack:function(){var e,t;C.push(null!==(e=null===h||void 0===h||null===(t=h.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"")}})}),Object(l.jsxs)("div",{className:u.a.MovieCard__header,children:[Object(l.jsx)("img",{alt:"".concat(p,"_poster"),className:u.a.MovieCard__img,src:"".concat(N).concat(M)}),Object(l.jsxs)("div",{className:u.a.MovieCard__info,children:[Object(l.jsx)("p",{className:u.a.MovieCard__name,children:p}),Object(l.jsx)("p",{className:u.a.MovieCard__year,children:I}),Object(l.jsx)("p",{className:u.a.MovieCard__genres,children:S}),Object(l.jsx)("span",{className:u.a.MovieCard__rating,children:w})]})]}),Object(l.jsx)("div",{className:u.a.MovieCard__desc,children:Object(l.jsx)("p",{className:u.a.MovieCard__text,children:y})}),Object(l.jsx)("div",{className:u.a.MovieCard__additionalInfo,children:Object(l.jsxs)("ul",{children:[Object(l.jsx)(d.c,{to:{pathname:"".concat(b,"/cast"),state:{from:null===h||void 0===h||null===(a=h.state)||void 0===a?void 0:a.from}},className:u.a.MovieCard__additionalInfo_item,activeClassName:u.a.MovieCard__additionalInfo_item_active,children:"Cast"}),Object(l.jsx)(d.c,{to:{pathname:"".concat(b,"/reviews"),state:{from:null===h||void 0===h||null===(o=h.state)||void 0===o?void 0:o.from}},className:u.a.MovieCard__additionalInfo_item,activeClassName:u.a.MovieCard__additionalInfo_item_active,children:"Reviews"})]})}),Object(l.jsx)("div",{className:u.a.blur_back,style:{backgroundImage:"url(".concat(N).concat(O,")")}})]}),Object(l.jsx)(r.Suspense,{fallback:Object(l.jsx)(i.a,{}),children:Object(l.jsxs)(c.c,{children:[Object(l.jsx)(c.a,{path:"".concat(m,"/cast"),children:Object(l.jsx)(v,{})}),Object(l.jsx)(c.a,{path:"".concat(m,"/reviews"),children:Object(l.jsx)(f,{})})]})})]})}function b(){var e=Object(r.useState)({}),t=Object(a.a)(e,2),n=t[0],d=t[1],s=Object(r.useState)("idle"),_=Object(a.a)(s,2),u=_[0],v=_[1],f=Object(r.useState)(""),b=Object(a.a)(f,2),m=b[0],h=b[1],C=Object(c.h)().movieId;return Object(r.useEffect)((function(){v("pending"),Object(o.a)(C).then((function(e){0===e.results?(v("rejected"),h("Something gone wrong :(")):(d(e),v("resolved"))})).catch((function(e){v("rejected"),h("There is an error: ".concat(e))}))}),[C]),Object(l.jsxs)(l.Fragment,{children:["pending"===u&&Object(l.jsx)(i.a,{}),"rejected"===u&&Object(l.jsx)("p",{className:"Msg",children:m}),"resolved"===u&&Object(l.jsx)(j,{movie:n})]})}}}]);
//# sourceMappingURL=movie-details-page.68e4233b.chunk.js.map