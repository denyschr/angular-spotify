import{a as $,d as b,m as B,n as U}from"./chunk-ZU632G2L.js";import"./chunk-5S6OSEYO.js";import{a as R,g as T}from"./chunk-4KC2LGDH.js";import{$ as j,A as y,B as g,D as h,E as n,Ea as x,Fa as N,Ja as k,Na as D,Q as s,R as v,W as C,Xa as F,Y as p,_ as M,aa as l,ab as c,ba as I,ca as P,l as d,wa as w,x as u,xa as S,y as a}from"./chunk-J6CKLZZ5.js";function z(e,t){if(e&1&&(I(0),l(1,"as-media-summary",3),P()),e&2){let r=t.ngIf;s(),p("type","Playlist")("title",r.name)("uri",r.uri)("imageUrl",r.images[0]==null?null:r.images[0].url)("description",r.description)("creator",r.owner.display_name)("trackCount",r.tracks.total)("followerCount",r.followers.total)}}var A=(()=>{let t=class t{constructor(o){this._route=o,this.playlist$=this._route.data.pipe(d(i=>i.data))}};t.\u0275fac=function(i){return new(i||t)(v(F))},t.\u0275cmp=h({type:t,selectors:[["as-playlist"]],decls:5,vars:3,consts:[[1,"page"],[1,"page__container"],[4,"ngIf"],[3,"type","title","uri","imageUrl","description","creator","trackCount","followerCount"]],template:function(i,q){i&1&&(l(0,"as-top-bar"),M(1,"main",0)(2,"div",1),C(3,z,2,8,"ng-container",2),w(4,"async"),j()()),i&2&&(s(3),p("ngIf",S(4,1,q.playlist$)))},dependencies:[x,$,B,N],changeDetection:0});let e=t;return e})();var m=(()=>{let t=class t{constructor(o){this._http=o}getPlaylist(o){return this._http.get(`${R.apiUrl}/playlists/${o}`)}};t.\u0275fac=function(i){return new(i||t)(y(D))},t.\u0275prov=u({token:t,factory:t.\u0275fac});let e=t;return e})();var E=T(e=>g(m).getPlaylist(e));var G=[{path:"",component:A,resolve:{data:E}}],H=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n({type:t}),t.\u0275inj=a({imports:[c.forChild(G),c]});let e=t;return e})();var J=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n({type:t}),t.\u0275inj=a({providers:[m],imports:[k,H,b,U]});let e=t;return e})();export{J as PlaylistModule};
