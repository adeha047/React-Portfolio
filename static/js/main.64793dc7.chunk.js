(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{16:function(e,s,t){},19:function(e,s,t){},21:function(e,s,t){"use strict";t.r(s);var c=t(1),a=t.n(c),i=t(9),n=t.n(i),r=(t(15),t(16),t(2)),l=t(3),j=t(5),d=t(4),o=t(8),h=t(10),b=t.n(h),m=(t(19),t(0)),O=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.name,s=this.props.data.occupation,t=this.props.data.description,c=this.props.data.address.city;this.props.data.social.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,children:Object(m.jsx)("i",{className:e.className})})},e.name)}))}return Object(m.jsxs)("header",{id:"home",children:[Object(m.jsxs)("nav",{id:"nav-wrap",children:[Object(m.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(m.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(m.jsxs)("ul",{id:"nav",className:"nav",children:[Object(m.jsx)("li",{className:"current",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(m.jsx)("div",{className:"row banner",children:Object(m.jsxs)("div",{className:"banner-text",children:[Object(m.jsxs)("h1",{className:"responsive-headline",children:["I'm ",e,"."]}),Object(m.jsxs)("h3",{children:["I'm a ",Object(m.jsx)("span",{children:c})," based ",Object(m.jsx)("span",{children:s}),",",t]}),Object(m.jsx)("hr",{})]})}),Object(m.jsx)("p",{className:"scrolldown",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(m.jsx)("i",{className:"icon-down-circle"})})})]})}}]),t}(c.Component),x=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,children:Object(m.jsx)("i",{className:e.className})})},e.name)}));return Object(m.jsx)("footer",{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"twelve columns",children:[Object(m.jsx)("ul",{className:"social-links",children:e}),Object(m.jsxs)("ul",{className:"copyright",children:[Object(m.jsxs)("li",{children:["\xa9 Copyright 2017 ",Object(m.jsx)("a",{title:"Andrew DeHaven",href:"https://adeha047.github.io/Andrew-DeHaven-Portfolio/",children:"Andrew DeHaven"})]}),Object(m.jsxs)("li",{children:["Design by ",Object(m.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})]})]})]}),Object(m.jsx)("div",{id:"go-top",children:Object(m.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(m.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(c.Component),u=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,s="images/"+this.props.data.image,t=this.props.data.bio,c=this.props.data.address.city,a=this.props.data.address.state,i=this.props.data.address.zip,n=this.props.data.phone,r=this.props.data.email,l=this.props.data.resumedownload;return Object(m.jsx)("section",{id:"about",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"three columns",children:Object(m.jsx)("img",{className:"profile-pic",src:s,alt:"Drew "})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("h2",{children:"About Me"}),Object(m.jsx)("h3",{children:t}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"columns contact-details",children:[Object(m.jsx)("h2",{children:"Contact Details"}),Object(m.jsxs)("h1",{className:"address",children:[Object(m.jsx)("span",{children:e}),Object(m.jsx)("br",{}),Object(m.jsxs)("span",{children:[c,Object(m.jsx)("br",{}),a,", ",i]}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:n}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:Object(m.jsx)("a",{href:"mailto:dehaven7777@gmail.com",children:r})})]})]}),Object(m.jsx)("div",{className:"columns download",children:Object(m.jsx)("h2",{children:Object(m.jsxs)("a",{href:l,className:"button",target:"_blank",children:[Object(m.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})}}]),t}(c.Component),p=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,s=this.props.data.education.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.school}),Object(m.jsxs)("h2",{className:"info",children:[e.degree," ",Object(m.jsx)("span",{children:"\u2022"}),Object(m.jsx)("em",{className:"date",children:e.graduated})]}),Object(m.jsx)("h4",{children:e.description})]},e.school)})),t=this.props.data.work.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.company}),Object(m.jsxs)("h2",{className:"info",children:[e.title,Object(m.jsx)("span",{children:"\u2022"})," ",Object(m.jsx)("em",{className:"date",children:e.years})]}),Object(m.jsx)("h4",{children:e.description})]},e.company)})),c=this.props.data.skills.map((function(e){var s="bar-expand "+e.name.toLowerCase();return Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{style:{width:e.level},className:s}),Object(m.jsx)("em",{children:e.name})]},e.name)}));return Object(m.jsxs)("section",{id:"resume",children:[Object(m.jsxs)("div",{className:"row education",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Education"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:Object(m.jsx)("div",{className:"row item",children:Object(m.jsx)("div",{className:"twelve columns",children:s})})})]}),Object(m.jsxs)("div",{className:"row work",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Work"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:t})]}),Object(m.jsxs)("div",{className:"row skill",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Skills"})})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("h3",{children:e}),Object(m.jsx)("div",{className:"bars",children:Object(m.jsx)("ul",{className:"skills",children:c})})]})]})]})}}]),t}(c.Component),v=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,s=this.props.data.address.city,t=this.props.data.address.state,c=this.props.data.address.zip,a=this.props.data.phone,i=this.props.data.email,n=this.props.data.contactmessage;return Object(m.jsxs)("section",{id:"contact",children:[Object(m.jsxs)("div",{className:"row section-head",children:[Object(m.jsx)("div",{className:"two columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Get In Touch."})})}),Object(m.jsxs)("div",{className:"ten columns",children:[Object(m.jsx)("h4",{className:"lead",children:n}),Object(m.jsx)("br",{}),Object(m.jsx)("h4",{className:"lead warning",children:"Warning: Contact form not yet configured, please contact me via normal email for now"})]})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"eight columns",children:[Object(m.jsx)("form",{action:"",method:"post",id:"contactForm",name:"contactForm",children:Object(m.jsxs)("fieldset",{children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(m.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{className:"submit",children:"Submit"}),Object(m.jsx)("span",{id:"image-loader",children:Object(m.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(m.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(m.jsxs)("div",{id:"message-success",children:[Object(m.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(m.jsx)("br",{})]})]}),Object(m.jsx)("aside",{className:"four columns footer-widgets",children:Object(m.jsxs)("div",{className:"widget widget_contact",children:[Object(m.jsx)("h4",{children:"Address and Phone"}),Object(m.jsxs)("h4",{className:"address",children:[e,Object(m.jsx)("br",{}),s," ",Object(m.jsx)("br",{}),t,", ",c,Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:a}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:Object(m.jsx)("a",{href:"mailto:dehaven7777@gmail.com",children:i})})]})]})})]})]})}}]),t}(c.Component),f=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var s="images/portfolio/"+e.image;return Object(m.jsx)("div",{className:"columns portfolio-item",children:Object(m.jsx)("div",{className:"item-wrap",children:Object(m.jsxs)("a",{href:e.url,title:e.title,children:[Object(m.jsx)("img",{alt:e.title,src:s}),Object(m.jsx)("div",{className:"overlay",children:Object(m.jsxs)("div",{className:"portfolio-item-meta",children:[Object(m.jsx)("h5",{children:e.title}),Object(m.jsx)("p",{children:e.category})]})}),Object(m.jsx)("div",{className:"link-icon",children:Object(m.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(m.jsx)("section",{id:"portfolio",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"twelve columns collapsed",children:[Object(m.jsx)("h1",{children:"Check Out Some of My Works."}),Object(m.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),t}(c.Component),N=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(e){var c;return Object(r.a)(this,t),(c=s.call(this,e)).state={resumeData:{}},o.a.initialize("UA-110570651-1"),o.a.pageview(window.location.pathname),c}return Object(l.a)(t,[{key:"getResumeData",value:function(){var e=document.getElementById("siteLoading");b.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(s){this.setState({resumeData:s}),setTimeout((function(){e.outerHTML=""}),500)}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(O,{data:this.state.resumeData.main}),Object(m.jsx)(u,{data:this.state.resumeData.main}),Object(m.jsx)(p,{data:this.state.resumeData.resume}),Object(m.jsx)(f,{data:this.state.resumeData.portfolio}),Object(m.jsx)(v,{data:this.state.resumeData.main}),Object(m.jsx)(x,{data:this.state.resumeData.main})]})}}]),t}(c.Component),g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(s){var t=s.getCLS,c=s.getFID,a=s.getFCP,i=s.getLCP,n=s.getTTFB;t(e),c(e),a(e),i(e),n(e)}))};n.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root")),g()}},[[21,1,2]]]);
//# sourceMappingURL=main.64793dc7.chunk.js.map