(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{13:function(e,t,a){e.exports={nav:"Navigation_nav__174_h",nav__link:"Navigation_nav__link__VnJ3n",nav__link_active:"Navigation_nav__link_active__2vzQ5"}},14:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1BnZ8",SearchForm:"Searchbar_SearchForm__1d_dh",SearchForm__button:"Searchbar_SearchForm__button__p1Ikf",SearchForm__button__label:"Searchbar_SearchForm__button__label__3L929",SearchForm__input:"Searchbar_SearchForm__input__kR49j"}},15:function(e,t,a){e.exports={CastItem:"CastItem_CastItem__3LPuC",CastItem__info:"CastItem_CastItem__info__3fkso",CastItem__img:"CastItem_CastItem__img__h018u",CastItem__name:"CastItem_CastItem__name__2_VC8",CastItem__character:"CastItem_CastItem__character__2boy4"}},18:function(e,t,a){e.exports={MoviesGallery:"MoviesGallery_MoviesGallery__1hFKr",MoviesGalleryItem:"MoviesGallery_MoviesGalleryItem__7a9xO"}},19:function(e,t,a){e.exports={MoviesGalleryItem__image:"MoviesGalleryItem_MoviesGalleryItem__image__3Vxgj",MoviesGalleryItem__descr:"MoviesGalleryItem_MoviesGalleryItem__descr__2N6JR",MoviesGalleryItem__name:"MoviesGalleryItem_MoviesGalleryItem__name__3_Ynv",MoviesGalleryItem__year:"MoviesGalleryItem_MoviesGalleryItem__year__dFE-r"}},21:function(e,t,a){e.exports={ReviewsItem:"ReviewsItem_ReviewsItem__3wxgM",ReviewsItem__author:"ReviewsItem_ReviewsItem__author__13CGZ",ReviewsItem__text:"ReviewsItem_ReviewsItem__text__2c_Qk"}},29:function(e,t,a){e.exports={Container:"Container_Container__QCN7_"}},32:function(e,t,a){e.exports={Button:"Button_Button__7CmtT"}},33:function(e,t,a){e.exports={Reviews:"Reviews_Reviews__1Wxqc"}},34:function(e,t,a){e.exports={Cast:"Cast_Cast__2HtpZ"}},40:function(e,t,a){},5:function(e,t,a){e.exports={MovieCard:"MovieCard_MovieCard__1926D",MovieCard__info:"MovieCard_MovieCard__info__2oDfn",MovieCard__header:"MovieCard_MovieCard__header__1PHEC",MovieCard__name:"MovieCard_MovieCard__name__2YZsn",MovieCard__year:"MovieCard_MovieCard__year__2Ouee",MovieCard__rating:"MovieCard_MovieCard__rating__2rdI5",MovieCard__genres:"MovieCard_MovieCard__genres__3lYL4",MovieCard__img:"MovieCard_MovieCard__img__3qlOm",MovieCard__desc:"MovieCard_MovieCard__desc__1GxcR",MovieCard__text:"MovieCard_MovieCard__text__3P0VA",MovieCard__additionalInfo:"MovieCard_MovieCard__additionalInfo__13hty",MovieCard__additionalInfo_item:"MovieCard_MovieCard__additionalInfo_item__2C8wr",MovieCard__additionalInfo_item_active:"MovieCard_MovieCard__additionalInfo_item_active__2C9yp",blur_back:"MovieCard_blur_back__3FN4L"}},50:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),n=a(28),i=a.n(n),s=a(6),o=(a(40),a(3)),_=a(29),j=a.n(_),l=a(0);function d(e){var t=e.children;return Object(l.jsx)("div",{className:j.a.Container,children:t})}var m=a(13),b=a.n(m);function h(){return Object(l.jsxs)("nav",{className:b.a.nav,children:[Object(l.jsx)(s.c,{to:"/",exact:!0,className:b.a.nav__link,activeClassName:b.a.nav__link_active,children:"Home"}),Object(l.jsx)(s.c,{to:"/movies",className:b.a.nav__link,activeClassName:b.a.nav__link_active,children:"Movies"})]})}var v=a(11),u=a(2),O="https://api.themoviedb.org/3",x="352acb8d318346b404dce557309fb342";var p=a(10),f=a.n(p),g=a(18),C=a.n(g);function M(){return Object(l.jsxs)("ul",{className:C.a.ImageGallery,children:[Object(l.jsx)("li",{children:Object(l.jsx)(f.a,{height:260})}),Object(l.jsx)("li",{children:Object(l.jsx)(f.a,{height:260})}),Object(l.jsx)("li",{children:Object(l.jsx)(f.a,{height:260})}),Object(l.jsx)("li",{children:Object(l.jsx)(f.a,{height:260})}),Object(l.jsx)("li",{children:Object(l.jsx)(f.a,{height:260})}),Object(l.jsx)("li",{children:Object(l.jsx)(f.a,{height:260})}),Object(l.jsx)("li",{children:Object(l.jsx)(f.a,{height:260})}),Object(l.jsx)("li",{children:Object(l.jsx)(f.a,{height:260})}),Object(l.jsx)("li",{children:Object(l.jsx)(f.a,{height:260})}),Object(l.jsx)("li",{children:Object(l.jsx)(f.a,{height:260})}),Object(l.jsx)("li",{children:Object(l.jsx)(f.a,{height:260})}),Object(l.jsx)("li",{children:Object(l.jsx)(f.a,{height:260})})]})}var I=a(19),N=a.n(I);function S(e){var t=e.id,a=e.poster_path,c=e.title,r=e.release_date.slice(0,4);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("img",{id:t,src:a?"https://image.tmdb.org/t/p/w500".concat(a):"https://artismedia.by/blog/wp-content/uploads/2018/05/in-blog2-1.png",alt:"",className:N.a.MoviesGalleryItem__image}),Object(l.jsxs)("div",{className:N.a.MoviesGalleryItem__descr,children:[Object(l.jsx)("p",{className:N.a.MoviesGalleryItem__name,children:c}),Object(l.jsx)("p",{className:N.a.MoviesGalleryItem__year,children:r})]})]})}function y(e){var t=e.moviesArr;return Object(l.jsx)("ul",{className:C.a.MoviesGallery,children:t.map((function(e){var t=e.id,a=e.poster_path,c=e.title,r=e.release_date;return Object(l.jsx)(s.b,{to:"/movies/".concat(t),className:C.a.MoviesGalleryItem,children:Object(l.jsx)(S,{id:t,poster_path:a,title:c,release_date:r})},t)}))})}var w=a(32),F=a.n(w);function G(e){var t=e.onLoadMore;return Object(l.jsx)("button",{type:"button",className:F.a.Button,onClick:t,children:"Load more"})}function k(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)("idle"),i=Object(u.a)(n,2),s=i[0],o=i[1],_=Object(c.useState)(1),j=Object(u.a)(_,2),d=j[0],m=j[1],b=Object(c.useState)(!1),h=Object(u.a)(b,2),p=h[0],f=h[1],g=Object(c.useState)(""),C=Object(u.a)(g,2),I=C[0],N=C[1];Object(c.useEffect)((function(){o("pending"),function(e){return fetch("".concat(O,"/trending/movie/week?api_key=").concat(x,"&page=").concat(e)).then((function(e){return e.json()})).catch((function(e){return Promise.reject(e)}))}(d).then((function(e){if(0===e.results)o("rejected"),N("Something gone wrong :(");else{var t=Math.ceil(e.total_pages/12),a=e.results.map((function(e){return{id:e.id,poster_path:e.poster_path,title:e.title,release_date:e.release_date}}));r((function(e){return[].concat(Object(v.a)(e),Object(v.a)(a))})),o("resolved"),f(t!==d)}})).catch((function(e){o("rejected"),N("There is an error: ".concat(e))}))}),[d]);return Object(l.jsxs)(l.Fragment,{children:["pending"===s&&Object(l.jsxs)(l.Fragment,{children:[0!==a.length&&Object(l.jsx)(y,{moviesArr:a}),Object(l.jsx)(M,{}),Object(l.jsx)("div",{className:"loadMoreReplacer"})]}),"rejected"===s&&Object(l.jsx)("p",{className:"Msg",children:I}),"resolved"===s&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(y,{moviesArr:a}),p&&Object(l.jsx)(G,{onLoadMore:function(){m(d+1),o("pending")}})]})]})}var R=a(14),L=a.n(R),T=a(35);function E(e){var t=e.onSearch,a=Object(c.useState)(""),r=Object(u.a)(a,2),n=r[0],i=r[1];return Object(l.jsx)("div",{className:L.a.Searchbar,children:Object(l.jsxs)("form",{className:L.a.SearchForm,onSubmit:function(e){e.preventDefault(),t(n)},children:[Object(l.jsxs)("button",{type:"submit",className:L.a.SearchForm__button,children:[Object(l.jsx)(T.a,{style:{width:"70%",height:"70%"}}),Object(l.jsx)("span",{className:L.a.SearchForm__button__label,children:"Search"})]}),Object(l.jsx)("input",{className:L.a.SearchForm__input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies...",onChange:function(e){i(e.currentTarget.value.trim())}})]})})}function P(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)([]),i=Object(u.a)(n,2),s=i[0],o=i[1],_=Object(c.useState)("idle"),j=Object(u.a)(_,2),d=j[0],m=j[1],b=Object(c.useState)(1),h=Object(u.a)(b,2),p=h[0],f=h[1],g=Object(c.useState)(!1),C=Object(u.a)(g,2),I=C[0],N=C[1],S=Object(c.useState)(""),w=Object(u.a)(S,2),F=w[0],k=w[1];Object(c.useEffect)((function(){a&&(m("pending"),function(e,t){return fetch("".concat(O,"/search/movie?api_key=").concat(x,"&query=").concat(e,"&page=").concat(t)).then((function(e){return e.json()})).catch((function(e){return Promise.reject(e)}))}(a,p).then((function(e){if(0===e.results)m("rejected"),k("Something gone wrong :(");else{var t=Math.ceil(e.total_pages/12),a=e.results.map((function(e){return{id:e.id,poster_path:e.poster_path,title:e.title,release_date:e.release_date}}));o((function(e){return[].concat(Object(v.a)(e),Object(v.a)(a))})),m("resolved"),N(t!==p)}})).catch((function(e){m("rejected"),k("There is an error: ".concat(e))})))}),[a,p]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(E,{onSearch:function(e){r(e),o([]),f(1)}}),"pending"===d&&Object(l.jsxs)(l.Fragment,{children:[0!==s.length&&Object(l.jsx)(y,{moviesArr:s}),Object(l.jsx)(M,{}),Object(l.jsx)("div",{className:"loadMoreReplacer"})]}),"rejected"===d&&Object(l.jsx)("p",{className:"Msg",children:F}),"resolved"===d&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(y,{moviesArr:s}),I&&Object(l.jsx)(G,{onLoadMore:function(){f(p+1),m("pending")}})]})]})}var A=a(5),B=a.n(A);function J(e){var t=e.movie,a=Object(o.g)().url,c=(t.id,t.poster_path),r=t.backdrop_path,n=t.title,i=t.release_date,_=t.vote_average,j=t.overview,d=t.genres,m="https://image.tmdb.org/t/p/original",b=i.slice(0,4),h=_%1===0?"".concat(_,".0"):_,v=d.map((function(e){return e.name})).join(", ");return Object(l.jsxs)("div",{className:B.a.MovieCard,children:[Object(l.jsxs)("div",{className:B.a.MovieCard__header,children:[Object(l.jsx)("img",{alt:"".concat(n,"_poster"),className:B.a.MovieCard__img,src:"".concat(m).concat(c)}),Object(l.jsxs)("div",{className:B.a.MovieCard__info,children:[Object(l.jsx)("p",{className:B.a.MovieCard__name,children:n}),Object(l.jsx)("p",{className:B.a.MovieCard__year,children:b}),Object(l.jsx)("p",{className:B.a.MovieCard__genres,children:v}),Object(l.jsx)("span",{className:B.a.MovieCard__rating,children:h})]})]}),Object(l.jsx)("div",{className:B.a.MovieCard__desc,children:Object(l.jsx)("p",{className:B.a.MovieCard__text,children:j})}),Object(l.jsx)("div",{className:B.a.MovieCard__additionalInfo,children:Object(l.jsxs)("ul",{children:[Object(l.jsx)(s.c,{to:"".concat(a,"/cast"),className:B.a.MovieCard__additionalInfo_item,activeClassName:B.a.MovieCard__additionalInfo_item_active,children:"Cast"}),Object(l.jsx)(s.c,{to:"".concat(a,"/reviews"),className:B.a.MovieCard__additionalInfo_item,activeClassName:B.a.MovieCard__additionalInfo_item_active,children:"Reviews"})]})}),Object(l.jsx)("div",{className:B.a.blur_back,style:{backgroundImage:"url(".concat(m).concat(r,")")}})]})}function V(){var e=Object(c.useState)({}),t=Object(u.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)("idle"),i=Object(u.a)(n,2),s=i[0],_=i[1],j=Object(c.useState)(""),d=Object(u.a)(j,2),m=d[0],b=d[1],h=Object(o.f)().movieId;return Object(c.useEffect)((function(){_("pending"),function(e){return fetch("".concat(O,"/movie/").concat(e,"?api_key=").concat(x,"&language=en-US")).then((function(e){return e.json()})).catch((function(e){return Promise.reject(e)}))}(h).then((function(e){0===e.results?(_("rejected"),b("Something gone wrong :(")):(r(e),_("resolved"))})).catch((function(e){_("rejected"),b("There is an error: ".concat(e))}))}),[h]),Object(l.jsxs)(l.Fragment,{children:["pending"===s&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(M,{}),Object(l.jsx)("div",{className:"loadMoreReplacer"})]}),"rejected"===s&&Object(l.jsx)("p",{className:"Msg",children:m}),"resolved"===s&&Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(J,{movie:a})})]})}var Z=a(33),q=a.n(Z),D=a(21),H=a.n(D);function Q(e){var t=e.author,a=e.content;return Object(l.jsxs)("li",{className:H.a.ReviewsItem,children:[Object(l.jsx)("p",{className:H.a.ReviewsItem__author,children:t}),Object(l.jsx)("p",{className:H.a.ReviewsItem__text,children:a})]})}function U(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)("idle"),i=Object(u.a)(n,2),s=i[0],_=i[1],j=Object(c.useState)(1),d=Object(u.a)(j,2),m=d[0],b=d[1],h=Object(c.useState)(!1),p=Object(u.a)(h,2),f=p[0],g=p[1],C=Object(c.useState)(""),I=Object(u.a)(C,2),N=I[0],S=I[1],y=Object(o.f)().movieId;Object(c.useEffect)((function(){_("pending"),function(e,t){return fetch("".concat(O,"/movie/").concat(e,"/reviews?api_key=").concat(x,"&language=en-US&page=").concat(t)).then((function(e){return e.json()})).catch((function(e){return Promise.reject(e)}))}(y,m).then((function(e){if(console.log(e),0===e.results.length)_("rejected"),S("There are no reviews...");else{var t=Math.ceil(e.total_pages/12),a=e.results.map((function(e){return{id:e.id,author:e.author,content:e.content}}));r((function(e){return[].concat(Object(v.a)(e),Object(v.a)(a))})),_("resolved"),g(t!==m)}})).catch((function(e){_("rejected"),S("There is an error: ".concat(e))}))}),[y,m]);return Object(l.jsxs)(l.Fragment,{children:["pending"===s&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(M,{}),Object(l.jsx)("div",{className:"loadMoreReplacer"})]}),"rejected"===s&&Object(l.jsx)("p",{className:"Msg",children:N}),"resolved"===s&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("ul",{className:q.a.Reviews,children:a.map((function(e,t){e.id;var a=e.author,c=e.content;return Object(l.jsx)(Q,{author:a,content:c},t)}))}),f&&Object(l.jsx)(G,{onLoadMore:function(){b(m+1),_("pending")}})]})]})}var Y=a(34),z=a.n(Y),K=a(15),W=a.n(K);function X(e){var t=e.name,a=e.profile_path,c=e.character,r=a?"".concat("https://image.tmdb.org/t/p/original").concat(a):"http://placeimg.com/200/300";return Object(l.jsxs)("li",{className:W.a.CastItem,children:[Object(l.jsx)("img",{alt:"".concat(t,"_photo"),className:W.a.CastItem__img,src:r}),Object(l.jsxs)("div",{className:W.a.CastItem__info,children:[Object(l.jsx)("p",{className:W.a.CastItem__name,children:t}),Object(l.jsxs)("p",{className:W.a.CastItem__character,children:["Character:",Object(l.jsx)("br",{}),c]})]})]})}function $(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)("idle"),i=Object(u.a)(n,2),s=i[0],_=i[1],j=Object(c.useState)(""),d=Object(u.a)(j,2),m=d[0],b=d[1],h=Object(o.f)().movieId;return Object(c.useEffect)((function(){_("pending"),function(e){return fetch("".concat(O,"/movie/").concat(e,"/credits?api_key=").concat(x,"&language=en-US")).then((function(e){return e.json()})).catch((function(e){return Promise.reject(e)}))}(h).then((function(e){if(console.log(e),0===e.cast.length)_("rejected"),b("There is no cast...");else{var t=e.cast.map((function(e){return{id:e.id,name:e.name,profile_path:e.profile_path,character:e.character}}));r(t),_("resolved")}})).catch((function(e){_("rejected"),b("There is an error: ".concat(e))}))}),[h]),Object(l.jsxs)(l.Fragment,{children:["pending"===s&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(M,{}),Object(l.jsx)("div",{className:"loadMoreReplacer"})]}),"rejected"===s&&Object(l.jsx)("p",{className:"Msg",children:m}),"resolved"===s&&Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("ul",{className:z.a.Cast,children:a.map((function(e,t){var a=e.id,c=e.name,r=e.profile_path,n=e.character;return Object(l.jsx)(X,{name:c,profile_path:r,character:n},a)}))})})]})}function ee(){return Object(l.jsxs)(d,{children:[Object(l.jsx)(h,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",exact:!0,children:Object(l.jsx)(k,{})}),Object(l.jsx)(o.a,{path:"/movies",exact:!0,children:Object(l.jsx)(P,{})}),Object(l.jsx)(o.a,{path:"/movies/:movieId",children:Object(l.jsx)(V,{})})]}),Object(l.jsx)(o.a,{path:"/movies/:movieId/cast",children:Object(l.jsx)($,{})}),Object(l.jsx)(o.a,{path:"/movies/:movieId/reviews",children:Object(l.jsx)(U,{})})]})}i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(s.a,{children:Object(l.jsx)(ee,{})})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.51cd4e54.chunk.js.map