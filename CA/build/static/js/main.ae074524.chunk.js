(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/login.03e3c9f2.png"},16:function(e,t,a){},18:function(e,t,a){e.exports=a.p+"static/media/worldwide.11093ee1.svg"},29:function(e,t,a){e.exports=a(59)},59:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a(3),c=a(5),s=a(4),r=a(6),i=a(0),o=a.n(i),m=a(17),u=a.n(m),h=a(14),d=a(15),b=a(8),p=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(c.a)(this,Object(s.a)(t).call(this))).state={likes:0,liked:!1},e.handleClick=e.handleClick.bind(Object(b.a)(Object(b.a)(e))),e}return Object(r.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(){this.setState({liked:!this.state.liked}),this.setState(function(e){return{likes:e.likes+1}})}},{key:"render",value:function(){var e=this.state.liked?"Unlike":"Like";return o.a.createElement("button",{className:"button is-link",onClick:this.handleClick},"\u2665 \xa0",e)}}]),t}(o.a.Component),E=a(21),v=a.n(E),g=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return v.a.locale("en"),o.a.createElement(i.Fragment,null,o.a.createElement("div",{className:"column is-3"},o.a.createElement("div",{className:"card height"},o.a.createElement("div",{className:"card-image"},o.a.createElement("figure",{className:"image is-4by3"},o.a.createElement("img",{alt:this.props.title,src:this.props.image}))),o.a.createElement("div",{className:"card-content"},o.a.createElement("div",{className:"media"},o.a.createElement("div",{className:"media-content"},o.a.createElement("p",{className:"title is-6"},this.props.name),o.a.createElement("time",{dateTime:this.props.time},v()(this.props.time).format("DD MMM")),o.a.createElement("p",{className:"subtitle"},this.props.author),o.a.createElement("a",{href:this.props.url,target:" "},"Article link"))),o.a.createElement(p,null)))))}}]),t}(o.a.Component),f=a(18),N=a.n(f),y=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(i.Fragment,null,o.a.createElement("section",{className:" hero is-info is-medium is-bold"},o.a.createElement("div",{className:"hero-body"},o.a.createElement("div",{className:"container has-text-centered"},o.a.createElement("h1",{className:"title"},"Your global news archive"),o.a.createElement("h2",{className:"subtitle"},"Explore top news articles from all over the world."),o.a.createElement("img",{alt:"img",className:"imgsize",src:N.a}),o.a.createElement("div",{className:"buttons center marge"},o.a.createElement("div",{className:"button is-primary"},o.a.createElement("strong",null,"Sign up")),o.a.createElement("div",{className:"button is-light"},"Log in"))))))}}]),t}(o.a.Component),O=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.options.map(function(e){return o.a.createElement("option",{key:e,value:e},e)});return o.a.createElement(i.Fragment,null,o.a.createElement("label",{className:"label "},this.props.label),o.a.createElement("div",{className:"field is-horizontal"},o.a.createElement("div",{className:"field-body"},o.a.createElement("div",{className:"field is-narrow"},o.a.createElement("div",{className:"control"},o.a.createElement("div",{className:"select compWidth"},o.a.createElement("select",{value:this.props.selected,name:this.props.name,onChange:this.props.handleChange},e)))))))}}]),t}(o.a.Component),j=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(i.Fragment,null,o.a.createElement("label",{className:"label"},this.props.label),o.a.createElement("div",{className:"field is-horizontal"},o.a.createElement("div",{className:"field-body"},o.a.createElement("div",{className:"field "},o.a.createElement("div",{className:"compWidth"},o.a.createElement("input",{name:this.props.name,value:this.props.value,onChange:this.props.handleChange,className:"input",type:"text",placeholder:this.props.placeholder}))))))}}]),t}(o.a.Component),w=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),i=0;i<l;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={on:!1},a.toggle=function(){a.setState({on:!a.state.on})},a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return(0,this.props.children)({on:this.state.on,toggle:this.toggle})}}]),t}(i.Component),k=document.getElementById("portal"),C=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(c.a)(this,Object(s.a)(t).call(this))).componentDidMount=function(){k.appendChild(e.el)},e.componentWillUnmount=function(){k.removeChild(e.el)},e.el=document.createElement("div"),e}return Object(r.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.children;return u.a.createPortal(e,this.el)}}]),t}(i.Component),S=a(11),x=a.n(S),T=(a(16),a(12)),M=a.n(T),F=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={news1:{type:"top-headlines",query:"sources=bbc-news"},news2:{type:"everything",query:"domains=techcrunch.com&language=en"},sourceSelected:"all",sourceValues:[],news:[],searchText:""},a.handleChange=a.handleChange.bind(Object(b.a)(Object(b.a)(a))),a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;M.a.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=47fdf75d8e5140c58df99e9bf41065e7").then(function(t){e.setState({news:t.data.articles});var a=e.state.news.map(function(e){return e.source.name}),n=Object(d.a)(new Set(a));n.sort(),e.setState({sourceValues:n})}).catch(function(e){console.log(e)})}},{key:"handleChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(h.a)({},n,a))}},{key:"render",value:function(){var e=this,t=this.state.news.map(function(t){var a=e.state.sourceSelected===t.source.name||"all"===e.state.sourceSelected;return t.title.toLocaleLowerCase().startsWith(e.state.searchText)&&a?o.a.createElement(g,{key:t.url,name:t.title,image:t.urlToImage,author:t.source.name,url:t.url,time:t.publishedAt}):null});return o.a.createElement(i.Fragment,null,o.a.createElement(w,null,function(e){var t=e.on,a=e.toggle;return o.a.createElement("div",null,t&&o.a.createElement(y,null),o.a.createElement("button",{className:"button is-white is-fullwidth bHeight",onClick:a},o.a.createElement("h1",{className:"subtitle is-5"},o.a.createElement("img",{alt:"img",className:"imgsize3",src:x.a}))))}),o.a.createElement("div",{className:"section"},o.a.createElement(O,{options:["all"].concat(this.state.sourceValues),name:"sourceSelected",handleChange:this.handleChange,label:"Filter by source name",selected:this.state.sourceSelected}),o.a.createElement(j,{name:"searchText",label:"Search by title",value:this.state.searchText,handleChange:this.handleChange,placeholder:"e.g. trump"})),o.a.createElement("div",{className:"columns is-multiline"},t),o.a.createElement(C,null,o.a.createElement("footer",{className:"footer"},o.a.createElement("div",{className:"content has-text-centered"},o.a.createElement("p",null,o.a.createElement("strong",null,"News Now")," by ",o.a.createElement("a",{href:"https://github.com/MGN00150905"},"Marc Gallagher"),". The source code is licensed",o.a.createElement("a",{href:"http://iadt.ie"},"IADT"),". The website content is hopefully licensed ",o.a.createElement("a",{href:"http://iadt.ie"},"12345"),".")))))}}]),t}(o.a.Component),D=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={query:"",sourceSelected:"all",sourceValues:[],news:[],searchText:""},a.handleChange=a.handleChange.bind(Object(b.a)(Object(b.a)(a))),a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;M.a.get("https://newsapi.org/v2/everything?q=brexit&apiKey=47fdf75d8e5140c58df99e9bf41065e7").then(function(t){e.setState({news:t.data.articles});var a=e.state.news.map(function(e){return e.source.name}),n=Object(d.a)(new Set(a));n.sort(),e.setState({sourceValues:n})}).catch(function(e){console.log(e)})}},{key:"handleChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(h.a)({},n,a))}},{key:"render",value:function(){var e=this,t=this.state.news.map(function(t){var a=e.state.sourceSelected===t.source.name||"all"===e.state.sourceSelected;return t.title.toLocaleLowerCase().startsWith(e.state.searchText)&&a?o.a.createElement(g,{key:t.url,name:t.title,image:t.urlToImage,author:t.source.name,url:t.url,time:t.publishedAt}):null});return o.a.createElement(i.Fragment,null,o.a.createElement(w,null,function(e){var t=e.on,a=e.toggle;return o.a.createElement("div",null,t&&o.a.createElement(y,null),o.a.createElement("button",{className:"button is-white is-fullwidth bHeight",onClick:a},o.a.createElement("h1",{className:"subtitle is-5"},o.a.createElement("img",{alt:"img",className:"imgsize3",src:x.a}))))}),o.a.createElement("div",{className:"section"},o.a.createElement(O,{options:["all"].concat(this.state.sourceValues),name:"sourceSelected",handleChange:this.handleChange,label:"Filter by source name",selected:this.state.sourceSelected}),o.a.createElement(j,{name:"searchText",label:"Search by title",value:this.state.searchText,handleChange:this.handleChange,placeholder:"e.g. trump"})),o.a.createElement("div",{className:"columns is-multiline"},t),o.a.createElement(C,null,o.a.createElement("footer",{className:"footer"},o.a.createElement("div",{className:"content has-text-centered"},o.a.createElement("p",null,o.a.createElement("strong",null,"News Now")," by ",o.a.createElement("a",{href:"https://github.com/MGN00150905"},"Marc Gallagher"),". The source code is licensed",o.a.createElement("a",{href:"http://iadt.ie"},"IADT"),". The website content is hopefully licensed ",o.a.createElement("a",{href:"http://iadt.ie"},"12345"),".")))))}}]),t}(o.a.Component),L=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={news1:{type:"top-headlines",query:"sources=bbc-news"},news2:{type:"everything",query:"domains=techcrunch.com&language=en"},query:"",sourceSelected:"all",sourceValues:[],news:[],searchText:""},a.handleChange=a.handleChange.bind(Object(b.a)(Object(b.a)(a))),a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;M.a.get("https://newsapi.org/v2/everything?q=syria&apiKey=47fdf75d8e5140c58df99e9bf41065e7").then(function(t){e.setState({news:t.data.articles});var a=e.state.news.map(function(e){return e.source.name}),n=Object(d.a)(new Set(a));n.sort(),e.setState({sourceValues:n})}).catch(function(e){console.log(e)})}},{key:"handleChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(h.a)({},n,a))}},{key:"render",value:function(){var e=this,t=this.state.news.map(function(t){var a=e.state.sourceSelected===t.source.name||"all"===e.state.sourceSelected;return t.title.toLocaleLowerCase().startsWith(e.state.searchText)&&a?o.a.createElement(g,{key:t.url,name:t.title,image:t.urlToImage,author:t.source.name,url:t.url,time:t.publishedAt}):null});return o.a.createElement(i.Fragment,null,o.a.createElement(w,null,function(e){var t=e.on,a=e.toggle;return o.a.createElement("div",null,t&&o.a.createElement(y,null),o.a.createElement("button",{className:"button is-white is-fullwidth bHeight",onClick:a},o.a.createElement("h1",{className:"subtitle is-5"},o.a.createElement("img",{alt:"img",className:"imgsize3",src:x.a}))))}),o.a.createElement("div",{className:"section"},o.a.createElement(O,{options:["all"].concat(this.state.sourceValues),name:"sourceSelected",handleChange:this.handleChange,label:"Filter by source name",selected:this.state.sourceSelected}),o.a.createElement(j,{name:"searchText",label:"Search by title",value:this.state.searchText,handleChange:this.handleChange,placeholder:"e.g. trump"})),o.a.createElement("div",{className:"columns is-multiline"},t),o.a.createElement(C,null,o.a.createElement("footer",{className:"footer"},o.a.createElement("div",{className:"content has-text-centered"},o.a.createElement("p",null,o.a.createElement("strong",null,"News Now")," by ",o.a.createElement("a",{href:"https://github.com/MGN00150905"},"Marc Gallagher"),". The source code is licensed",o.a.createElement("a",{href:"http://iadt.ie"},"IADT"),". The website content is hopefully licensed ",o.a.createElement("a",{href:"http://iadt.ie"},"12345"),".")))))}}]),t}(o.a.Component),A=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={query:"",sourceSelected:"all",sourceValues:[],news:[],searchText:""},a.handleChange=a.handleChange.bind(Object(b.a)(Object(b.a)(a))),a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;M.a.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=47fdf75d8e5140c58df99e9bf41065e7").then(function(t){e.setState({news:t.data.articles});var a=e.state.news.map(function(e){return e.source.name}),n=Object(d.a)(new Set(a));n.sort(),e.setState({sourceValues:n})}).catch(function(e){console.log(e)})}},{key:"handleChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(h.a)({},n,a))}},{key:"render",value:function(){var e=this,t=this.state.news.map(function(t){var a=e.state.sourceSelected===t.source.name||"all"===e.state.sourceSelected;return t.title.toLocaleLowerCase().startsWith(e.state.searchText)&&a?o.a.createElement(g,{key:t.url,name:t.title,image:t.urlToImage,author:t.source.name,url:t.url,time:t.publishedAt}):null});return o.a.createElement(i.Fragment,null,o.a.createElement(w,null,function(e){var t=e.on,a=e.toggle;return o.a.createElement("div",null,t&&o.a.createElement(y,null),o.a.createElement("button",{className:"button is-white is-fullwidth bHeight",onClick:a},o.a.createElement("h1",{className:"subtitle is-5"},o.a.createElement("img",{alt:"img",className:"imgsize3",src:x.a}))))}),o.a.createElement("div",{className:"section"},o.a.createElement(O,{options:["all"].concat(this.state.sourceValues),name:"sourceSelected",handleChange:this.handleChange,label:"Filter by source name",selected:this.state.sourceSelected}),o.a.createElement(j,{name:"searchText",label:"Search by title",value:this.state.searchText,handleChange:this.handleChange,placeholder:"e.g. trump"})),o.a.createElement("div",{className:"columns is-multiline"},t),o.a.createElement(C,null,o.a.createElement("footer",{className:"footer"},o.a.createElement("div",{className:"content has-text-centered"},o.a.createElement("p",null,o.a.createElement("strong",null,"News Now")," by ",o.a.createElement("a",{href:"https://github.com/MGN00150905"},"Marc Gallagher"),". The source code is licensed",o.a.createElement("a",{href:"http://iadt.ie"},"IADT"),". The website content is hopefully licensed ",o.a.createElement("a",{href:"http://iadt.ie"},"12345"),".")))))}}]),t}(o.a.Component),V=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(i.Fragment,null,o.a.createElement("div",{className:"column is-3"},o.a.createElement("div",{className:"card height"},o.a.createElement("div",{className:"card-content"},o.a.createElement("div",{className:"media"},o.a.createElement("div",{className:"media-content"},o.a.createElement("p",{className:"title is-6"},this.props.name),o.a.createElement("p",{className:"subtitle is-6"},"Category: ",this.props.cat.substring(0).toLocaleUpperCase()),o.a.createElement("a",{className:"button is-dark is-small",href:this.props.url,target:""},"Website link")))))))}}]),t}(o.a.Component),G=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={sources:[]},a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;M.a.get("https://newsapi.org/v2/sources?country=us&apiKey=47fdf75d8e5140c58df99e9bf41065e7").then(function(t){e.setState({sources:t.data.sources})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.state.sources.map(function(e){return o.a.createElement(V,{key:e.id,name:e.name,desc:e.description,url:e.url,cat:e.category})});return o.a.createElement(i.Fragment,null,o.a.createElement(w,null,function(e){var t=e.on,a=e.toggle;return o.a.createElement("div",null,t&&o.a.createElement(y,null),o.a.createElement("button",{className:"button is-white is-fullwidth bHeight",onClick:a},o.a.createElement("h1",{className:"subtitle is-5"},o.a.createElement("img",{alt:"img",className:"imgsize3",src:x.a}))))}),o.a.createElement("div",{className:"columns is-multiline"},e),o.a.createElement(C,null,o.a.createElement("footer",{className:"footer"},o.a.createElement("div",{className:"content has-text-centered"},o.a.createElement("p",null,o.a.createElement("strong",null,"News Now")," by ",o.a.createElement("a",{href:"https://github.com/MGN00150905"},"Marc Gallagher"),". The source code is licensed",o.a.createElement("a",{href:"http://iadt.ie"},"IADT"),". The website content is hopefully licensed ",o.a.createElement("a",{href:"http://iadt.ie"},"12345"),".")))))}}]),t}(o.a.Component),I=a(62),q=a(61),z=a(63),W=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(I.a,null,o.a.createElement("div",{className:"container"},o.a.createElement("nav",{className:"navbar ",role:"navigation","aria-label":"main navigation"},o.a.createElement("div",{className:"navbar-brand"},o.a.createElement("a",{className:"navbar-item",href:"/"},o.a.createElement("h1",{className:"subtitle is-5 col"},"GLOBAL NEWS")),o.a.createElement("div",{role:"button",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},o.a.createElement("span",{"aria-hidden":"true"}),o.a.createElement("span",{"aria-hidden":"true"}),o.a.createElement("span",{"aria-hidden":"true"}))),o.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},o.a.createElement("div",{className:"navbar-start"},o.a.createElement("div",{className:"navbar-item "},o.a.createElement(q.a,{className:"col",to:"/"},"Top Headlines")),o.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},o.a.createElement("div",{className:"navbar-link col"},"Popular"),o.a.createElement("div",{className:"navbar-dropdown"},o.a.createElement("div",{className:"navbar-item"},o.a.createElement(q.a,{className:"col",to:"/brexit"},"Brexit")),o.a.createElement("div",{className:"navbar-item"},o.a.createElement(q.a,{className:"col",to:"/syria"},"Syria")),o.a.createElement("div",{className:"navbar-item"},o.a.createElement(q.a,{className:"col",to:"/bitcoin"},"Bitcoin")))),o.a.createElement("div",{className:"navbar-item col"},o.a.createElement(q.a,{className:"col",to:"/sources"},"Sources"))),o.a.createElement("div",{className:"navbar-end"},o.a.createElement("div",{className:"navbar-item"},o.a.createElement("div",{className:"buttons"},o.a.createElement("img",{alt:"img",className:"imgsize2",src:N.a})))))),o.a.createElement(z.a,{exact:!0,path:"/",component:F}),o.a.createElement(z.a,{path:"/brexit",component:D}),o.a.createElement(z.a,{path:"/syria",component:L}),o.a.createElement(z.a,{path:"/bitcoin",component:A}),o.a.createElement(z.a,{path:"/sources",component:G})))}}]),t}(o.a.Component);u.a.render(o.a.createElement(W,null),document.getElementById("root"))}},[[29,2,1]]]);
//# sourceMappingURL=main.ae074524.chunk.js.map