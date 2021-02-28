(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{15:function(e,t,a){e.exports={header:"App_header__3oUQI",NavLink:"App_NavLink__1GEaA",NavLinkActive:"App_NavLinkActive__3nhc8",navLink:"App_navLink__1yF__"}},23:function(e,t,a){e.exports={NavLink:"Cast_NavLink__1oi7A",NavLinkActive:"Cast_NavLinkActive__25N48",castElem:"Cast_castElem__2xVtv"}},24:function(e,t,a){e.exports={NavLink:"Reviews_NavLink__1uiuF",NavLinkActive:"Reviews_NavLinkActive__3OH_8",reviewElem:"Reviews_reviewElem__3-j5M"}},36:function(e,t,a){"use strict";var n=a(17),s=a.n(n),c=a(20),i=a(10),r=a(11),o=a(13),l=a(12),h=a(1),m=a.n(h),d=a(14),u=a.n(d),j=a(8),v=a.n(j),p=a(7),b=a(23),f=a.n(b),_=a(0),O=function(e){var t=e.id;return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("p",{className:f.a.castElem,children:Object(_.jsx)(p.c,{to:"/movies/".concat(t,"/cast"),className:f.a.NavLink,activeClassName:f.a.NavLinkActive,children:"Cast"})})})},x=a(24),k=a.n(x),g=function(e){var t=e.id;return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("p",{className:k.a.reviewElem,children:Object(_.jsx)(p.c,{to:"/movies/".concat(t,"/review"),className:k.a.NavLink,activeClassName:k.a.NavLinkActive,children:"Reviews"})})})},N=a(41),w=a.n(N);function F(e){var t=e.handleGoBack;return Object(_.jsx)("button",{className:w.a.BackBtn,onClick:t})}var S=m.a.lazy((function(){return a.e(5).then(a.bind(null,107))})),L=m.a.lazy((function(){return a.e(6).then(a.bind(null,108))})),C=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={films:{},genres:""},e.handleGoBack=function(){e.props.history.goBack()},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=Object(c.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://api.themoviedb.org/3/movie/".concat(this.props.match.params.filmId,"?api_key=cae2ba5bb4d635ff4cc14f2582722050"),{credentials:"include"});case 2:t=e.sent,this.setState({films:t.data}),a=this.state.films.genres.map((function(e){return e.name})).join(", "),this.setState({genres:a});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)(F,{handleGoBack:this.handleGoBack}),Object(_.jsxs)("div",{className:v.a.filmCard,children:[Object(_.jsx)("div",{className:v.a.posterDiv,children:Object(_.jsx)("img",{className:v.a.filmPoster,src:"https://image.tmdb.org/t/p/w500".concat(this.state.films.backdrop_path),alt:this.state.films.title})}),Object(_.jsxs)("div",{children:[Object(_.jsx)("h2",{className:v.a.filmtitle,children:this.state.films.title}),Object(_.jsxs)("p",{children:[Object(_.jsx)("span",{className:v.a.undertitles,children:"Overview:"})," "]}),Object(_.jsx)("p",{className:v.a.overview,children:this.state.films.overview}),Object(_.jsx)("p",{children:Object(_.jsx)("span",{className:v.a.undertitles,children:"Genres: "})}),this.state.genres]})]}),Object(_.jsxs)("div",{className:v.a.additionals,children:[Object(_.jsx)("span",{className:v.a.undertitles,children:"Additional Information"}),Object(_.jsxs)("div",{className:v.a.filmPageAddNav,children:[Object(_.jsx)(O,{id:this.state.films.id}),Object(_.jsx)(g,{id:this.state.films.id}),Object(_.jsxs)(m.a.Suspense,{fallback:Object(_.jsx)("div",{children:"Loading"}),children:[Object(_.jsx)(S,{id:this.state.films.id}),Object(_.jsx)(L,{id:this.state.films.id})]})]})]})]})}}]),a}(h.Component);t.a=C},40:function(e,t,a){e.exports={Searchbar:"SearchMoviesForm_Searchbar__3gIVl",SearchForm:"SearchMoviesForm_SearchForm__oc2AV",SearchFormButton:"SearchMoviesForm_SearchFormButton__3FugJ",SearchFormButtonLabel:"SearchMoviesForm_SearchFormButtonLabel__200e4",SearchFormInput:"SearchMoviesForm_SearchFormInput__1Cpcc",moreLoader:"SearchMoviesForm_moreLoader__3oait"}},41:function(e,t,a){e.exports={BackBtn:"BackBtn_BackBtn__2b6SX",BackBtnLabel:"BackBtn_BackBtnLabel__3MMbz"}},42:function(e,t,a){e.exports={container:"Section_container__1Rn4X"}},48:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(37),i=a.n(c),r=a(7),o=(a(47),a(48),a(3)),l=a(17),h=a.n(l),m=a(20),d=a(10),u=a(11),j=a(13),v=a(12),p=a(14),b=a.n(p),f=a(9),_=a.n(f),O=a(0),x=s.a.lazy((function(){return a.e(7).then(a.bind(null,104))})),k=function(e){Object(j.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={films:[],randomFilm:{},randomCast:[],showCastModal:!1,currentCastPerson:{}},e.getrandomFilm=function(){var t=Math.floor(Math.random()*e.state.films.length);e.setState({randomFilm:e.state.films[t]})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://api.themoviedb.org/3/trending/movie/week?api_key=cae2ba5bb4d635ff4cc14f2582722050",{credentials:"include"});case 2:return t=e.sent,this.setState({films:t.data.results}),this.getrandomFilm(),e.next=7,b.a.get("https://api.themoviedb.org/3/movie/".concat(this.state.randomFilm.id,"/credits?api_key=cae2ba5bb4d635ff4cc14f2582722050"),{credentials:"include"});case 7:a=e.sent,this.setState({randomCast:a.data.cast});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleOnMouseOver",value:function(e){var t=this;this.state.randomCast.map((function(a){return a.name===e.target.innerHTML&&t.setState({currentCastPerson:a})})),this.setState({showCastModal:!0})}},{key:"handleOnMouseLeave",value:function(e){this.setState({showCastModal:!1}),e.target.classList.remove("activeCastLink")}},{key:"render",value:function(){var e=this,t=this.state.randomFilm;return Object(O.jsxs)("div",{className:_.a.homeWrapper,children:[Object(O.jsxs)("ul",{className:_.a.weekList,children:[Object(O.jsx)("li",{children:Object(O.jsx)("h3",{className:_.a.weekTrends,children:"Week Trends:"})}),this.state.films.map((function(t){return Object(O.jsx)("li",{children:Object(O.jsx)(r.b,{to:{pathname:"/movies/".concat(t.id),state:{from:e.props.location}},children:Object(O.jsx)("span",{className:_.a.WeekFilmLinkElementContext,children:t.title})})},t.id)}))]}),Object(O.jsx)("div",{children:Object(O.jsx)(r.b,{to:{pathname:"/movies/".concat(t.id),state:{from:this.props.location}},children:Object(O.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title,className:_.a.mainPoster})})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{className:_.a.mainOverview,children:t.overview}),Object(O.jsx)("p",{className:_.a.starringTitle,children:"Starring:"}),Object(O.jsxs)("div",{className:_.a.castModalWrapper,children:[Object(O.jsx)("ul",{children:this.state.randomCast.map((function(t,a){return[a]<=5&&Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("li",{onMouseEnter:function(t){return e.handleOnMouseOver(t)},onMouseLeave:function(t){return e.handleOnMouseLeave(t)},children:Object(O.jsx)("span",{className:_.a.castSpan,children:t.name})},t.name)})}))}),this.state.showCastModal&&Object(O.jsx)(s.a.Suspense,{fallback:Object(O.jsx)("div",{children:"Loading"}),children:Object(O.jsx)(x,{currentCastPerson:this.state.currentCastPerson})})]})]})]})}}]),a}(n.Component),g=a(40),N=a.n(g),w=(a(77),s.a.lazy((function(){return a.e(4).then(a.bind(null,106))}))),F=s.a.lazy((function(){return a.e(3).then(a.t.bind(null,105,7))})),S=function(e){Object(j.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={search:[],currentSearch:"",loadContentFlag:0},e.change=function(t){e.setState({currentSearch:t.target.value})},e.submit=function(t){t.preventDefault(),e.setState({loadContentFlag:1}),e.props.history.push({pathname:e.props.location.pathname,search:"name=".concat(e.state.currentSearch)})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.search.substr(6);console.log(t),setTimeout((function(){b.a.get("https://api.themoviedb.org/3/search/movie?api_key=cae2ba5bb4d635ff4cc14f2582722050&query=".concat(t),{credentials:"include"}).then((function(t){return e.setState({search:t.data.results})}))}),1400)}},{key:"componentWillReceiveProps",value:function(e){var t=this;this.props.location.search!==e.location.search&&setTimeout((function(){b.a.get("https://api.themoviedb.org/3/search/movie?api_key=cae2ba5bb4d635ff4cc14f2582722050&query=".concat(t.state.currentSearch),{credentials:"include"}).then((function(e){return t.setState({search:e.data.results})}))}),1400)}},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("form",{className:"",onSubmit:this.submit,children:[Object(O.jsx)("button",{type:"submit",className:N.a.SearchFormButton,children:Object(O.jsx)("span",{className:""})}),Object(O.jsx)("input",{className:"",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search Film",onChange:this.change,value:this.state.currentSearch})]}),0===this.state.loadContentFlag&&Object(O.jsx)("div",{className:"",children:Object(O.jsx)("span",{children:"You results will be here"})}),1===this.state.loadContentFlag&&Object(O.jsx)(s.a.Suspense,{fallback:Object(O.jsx)(O.Fragment,{}),children:Object(O.jsx)(w,{search:this.state.search,from:"".concat(this.props.location.pathname,"/?name=").concat(this.state.currentSearch)})}),1===this.state.loadContentFlag&&Object(O.jsx)("div",{className:"",children:Object(O.jsx)(s.a.Suspense,{fallback:Object(O.jsx)(O.Fragment,{}),children:Object(O.jsx)(F,{type:"Puff",color:"#00BFFF",height:50,width:50,timeout:900})})})]})}}]),a}(n.Component),L=a(36),C=a(15),y=a.n(C),M=a(42),B=a.n(M),A=function(e){Object(j.a)(a,e);var t=Object(v.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{className:B.a.container,children:Object(O.jsx)(O.Fragment,{children:this.props.children})})}}]),a}(n.Component),P=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("ul",{className:y.a.header,children:[Object(O.jsx)("li",{className:y.a.navLink,children:Object(O.jsx)(r.c,{exact:!0,to:"/",className:y.a.NavLink,activeClassName:y.a.NavLinkActive,children:"Home"})}),Object(O.jsx)("li",{className:y.a.navLink,children:Object(O.jsx)(r.c,{exact:!0,to:"/movies",className:y.a.NavLink,activeClassName:y.a.NavLinkActive,children:"Movies"})})]}),Object(O.jsx)(A,{children:Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{exact:!0,path:"/",component:k}),Object(O.jsx)(o.a,{path:"/movies/:filmId",component:L.a}),Object(O.jsx)(o.a,{path:"/movies/",strict:!1,exact:!1,component:S}),Object(O.jsx)(o.a,{component:k})]})})]})};i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(r.a,{children:Object(O.jsx)(P,{})})}),document.getElementById("root"))},8:function(e,t,a){e.exports={filmPoster:"FilmPage_filmPoster__3vXlt",filmCard:"FilmPage_filmCard__1pd2P",posterDiv:"FilmPage_posterDiv__1XWAN",undertitles:"FilmPage_undertitles__29kNz",overview:"FilmPage_overview__3fSx3",additionals:"FilmPage_additionals__3Bu0t"}},9:function(e,t,a){e.exports={homeWrapper:"HomeView_homeWrapper__1LXNg",mainPoster:"HomeView_mainPoster__H8rFU",mainOverview:"HomeView_mainOverview__kHoik",weekList:"HomeView_weekList__1Evd0",starringTitle:"HomeView_starringTitle__1a14d",castModalWrapper:"HomeView_castModalWrapper__1kwx_",castSpan:"HomeView_castSpan__3cJIB",weekTrends:"HomeView_weekTrends__1afyV",WeekFilmLinkElementContext:"HomeView_WeekFilmLinkElementContext__2uDDU"}}},[[78,1,2]]]);
//# sourceMappingURL=main.02c92eaa.chunk.js.map