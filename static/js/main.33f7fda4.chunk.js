(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{33:function(e,t,a){e.exports=a(63)},56:function(e,t,a){},57:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(24),c=a.n(s),i=a(9),o=a(6);var m=function(){return r.a.createElement("span",null,"About this page: I built it because I love movies.")},l=a(11),u=a.n(l),v=a(25),p=a(26),d=a(27),E=a(32),g=a(31),_=a(28),f=a.n(_);a(56);var y=function(e){e.id;var t=e.year,a=e.title,n=e.summary,s=e.poster,c=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:a,title:a}),r.a.createElement("div",{className:"movie_data"},r.a.createElement("h3",{className:"movie__title"},a),r.a.createElement("h5",{className:"movie__yeaar"},t),r.a.createElement("ul",{className:"movie__genres"},c.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},n.slice(0,180),"...")))},b=(a(57),function(e){Object(E.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(v.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));var h=function(){return r.a.createElement("div",null,r.a.createElement(i.b,{to:"/"},"Home"),r.a.createElement(i.b,{to:"/about"},"About"))};var N=function(){return r.a.createElement(i.a,null,r.a.createElement(h,null),r.a.createElement(o.a,{path:"/",exact:!0,component:b}),r.a.createElement(o.a,{path:"/about",component:m}))};c.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.33f7fda4.chunk.js.map