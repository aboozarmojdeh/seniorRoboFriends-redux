(this["webpackJsonpsenior-robo-friends"]=this["webpackJsonpsenior-robo-friends"]||[]).push([[0],{26:function(e,t,a){e.exports=a(56)},36:function(e,t,a){},38:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),s=a(8),i=a(6),l=a(24),u=a(25),h=(a(36),a(37),a(2)),m=a(3),d=a(5),b=a(4),p=(a(38),function(e){var t=e.id,a=e.name,o=e.email,c=e.link;return r.a.createElement(n.Fragment,null,r.a.createElement("article",{className:"dib mw5 bg-light-green br3 pa3 pa4-ns mv3 ba b--black-10 ma2 bw1 shadow-5 grow"},r.a.createElement("div",{className:"tc"},r.a.createElement("img",{alt:"card-img",src:"https://robohash.org/".concat(t,"?200x200"),className:"br-100 h4 w4 dib ba b--black-05 pa2 bg-white",title:"Photo of a kitty staring at you"}),r.a.createElement("h1",{className:"f3 mb2"},a),r.a.createElement("h2",{className:"f5 fw4 gray mt0"},o),r.a.createElement("a",{className:"link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1 ma3 grow",href:c},"Link"))))}),g=function(e){var t=e.robots.map((function(e,t){return console.log("CardList"),r.a.createElement(p,{key:e.id,id:e.id,name:e.name,email:e.email,link:e.link})}));return r.a.createElement(n.Fragment,null,r.a.createElement("div",null,t))},E=function(e){var t=e.onSearchChange;return console.log("SearchBox"),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})))},f=function(e){return r.a.createElement("div",{className:"",style:{overflowY:"scroll",border:"3px solid black",height:"800px"}},e.children)},v=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(m.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops!. This is not good!"):this.props.children}}]),a}(n.Component),O=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return console.log("Header"),r.a.createElement("h1",{className:"f1 app-header-text"},"Senior Robo Friends")}}]),a}(n.Component),y=a(10),S=a.n(y),R=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.robots,a=e.searchField,o=e.onSearchChange,c=e.isPending,s=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return c?r.a.createElement("h1",{className:"f1 app-header-text"},"Loading!"):r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"tc"},r.a.createElement(O,null),r.a.createElement(E,{onSearchChange:o}),r.a.createElement(f,null,r.a.createElement(v,null,r.a.createElement(g,{robots:s})))))}}]),a}(n.Component),j=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),S.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t.data})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(R);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w={searchField:""},k={robots:[],isPending:!0},C=Object(l.createLogger)(),N=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload});default:return e}}}),_=Object(i.d)(N,Object(i.a)(u.a,C));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:_},r.a.createElement(j,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.6ed6d2bf.chunk.js.map