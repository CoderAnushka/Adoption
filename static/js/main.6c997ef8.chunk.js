(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{11:function(t,e,c){},20:function(t,e,c){},30:function(t,e,c){},31:function(t,e,c){},52:function(t,e,c){},53:function(t,e,c){},54:function(t,e,c){},55:function(t,e,c){},56:function(t,e,c){"use strict";c.r(e);var a=c(1),s=c.n(a),n=c(21),j=c.n(n),i=(c(30),c(31),c(22)),l=c(23),b=c(25),r=c(24),o=c(3),h=c(0);var O=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("img",{src:"https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif",alt:""})})},x=c(4);var u=function(){var t=Object(a.useState)([]),e=Object(x.a)(t,2),s=e[0],n=e[1];return Object(a.useEffect)((function(){c(33).get("https://api.thecatapi.com/v1/images/search").then((function(t){n(t.data[0].url)}))}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("img",{style:{width:"300px"},src:s,alt:""})})},d=(c(11),function(t){Object(b.a)(c,t);var e=Object(r.a)(c);function c(){var t;return Object(i.a)(this,c),(t=e.call(this)).state={name:localStorage.name,email:localStorage.email,pass:localStorage.pass,course:localStorage.course,flag:!1},t}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var t=this;setTimeout((function(){t.setState({flag:!0})}),3e3)}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"Home",children:[Object(h.jsxs)("nav",{children:[Object(h.jsx)(o.b,{className:"link",to:"/",children:"Home"}),Object(h.jsx)(o.b,{className:"link",to:"/about",children:"About"}),Object(h.jsx)(o.b,{className:"link",to:"/contact",children:"Contact"}),Object(h.jsx)(o.b,{className:"link",to:"/kitty",children:"Kitty!"}),Object(h.jsx)(o.b,{className:"link",to:"/Cat",children:"Cats!"})]}),this.state.flag?Object(h.jsx)(h.Fragment,{}):Object(h.jsx)(O,{}),this.state.flag?Object(h.jsx)("h1",{class:"aaa",children:"Adopt a Kitty!"}):Object(h.jsx)(h.Fragment,{}),this.state.flag?Object(h.jsxs)("div",{class:"aa",children:[Object(h.jsxs)("h1",{children:["Name: ",this.state.name]}),Object(h.jsxs)("h1",{children:["Email: ",this.state.email]}),Object(h.jsxs)("h1",{children:["Password: ",this.state.pass]}),Object(h.jsxs)("h1",{children:["Emirate: ",this.state.country]})]}):Object(h.jsx)(h.Fragment,{}),Object(h.jsx)("h1",{class:"a",children:"Let's Try and give these cats a happy home!"}),Object(h.jsx)(u,{})]})}}]),c}(a.Component));c(20);var m=function(){return Object(h.jsxs)("div",{className:"About",children:[Object(h.jsxs)("nav",{children:[Object(h.jsx)(o.b,{className:"link",to:"/",children:"Home"}),Object(h.jsx)(o.b,{className:"link",to:"/about",children:"About"}),Object(h.jsx)(o.b,{className:"link",to:"/contact",children:"Contact"}),Object(h.jsx)(o.b,{className:"link",to:"/kitty",children:"Kitty"}),Object(h.jsx)(o.b,{className:"link",to:"/cat",children:"Cat"})]}),Object(h.jsx)("h1",{children:"About"}),Object(h.jsxs)("h1",{children:["We are a rescuing team in UAE and we have rescued over 3000 cats in a year! We want to provide a nice home for these cats. So what are you waiting for cat lovers??? Go ahed and adopt a kitty.",Object(h.jsx)("br",{})," We are available all over UAE "]})]})};c(52);var p=function(){var t=Object(a.useState)(""),e=Object(x.a)(t,2),c=e[0],s=e[1],n=Object(a.useState)(""),j=Object(x.a)(n,2),i=j[0],l=j[1],b=Object(a.useState)(""),r=Object(x.a)(b,2),o=r[0],O=r[1],u=Object(a.useState)("Web Dev"),d=Object(x.a)(u,2),m=d[0],p=d[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),localStorage.name=c,localStorage.email=i,localStorage.pass=o,localStorage.course=m},children:[Object(h.jsx)("label",{children:"Name:"}),Object(h.jsx)("input",{style:{color:"pink"},value:c,onChange:function(t){return s(t.target.value)},type:"text"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:"Email:"}),Object(h.jsx)("input",{style:{color:"pink"},value:i,onChange:function(t){return l(t.target.value)},type:"email"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:"Password:"}),Object(h.jsx)("input",{style:{color:"pink"},value:o,onChange:function(t){return O(t.target.value)},type:"password"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:"Emirate:"}),Object(h.jsxs)("select",{style:{color:"pink"},value:m,onChange:function(t){return p(t.target.value)},children:[Object(h.jsx)("option",{value:"Select",children:"Select"}),Object(h.jsx)("option",{value:"Abu Dhabi",children:"Abu Dhabi"}),Object(h.jsx)("option",{value:"Dubai",children:"Dubai"}),Object(h.jsx)("option",{value:"Sharjah",children:"Sharjah"}),Object(h.jsx)("option",{value:"Ajman",children:"Ajman"}),Object(h.jsx)("option",{value:"Umm Al Quwain",children:"Umm Al Quwain"}),Object(h.jsx)("option",{value:"Ras Al Khaimah",children:"Ras AL Khaimah"}),Object(h.jsx)("option",{value:"Fujairah",children:"Fujairah"})]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{style:{color:"pink"},type:"submit",value:"submit form"})]})})};var g=function(){return Object(h.jsxs)("div",{className:"ContactUs",children:[Object(h.jsxs)("nav",{children:[Object(h.jsx)(o.b,{className:"link",to:"/",children:"Home"}),Object(h.jsx)(o.b,{className:"link",to:"/about",children:"About"}),Object(h.jsx)(o.b,{className:"link",to:"/contact",children:"Contact"}),Object(h.jsx)(o.b,{className:"link",to:"/kitty",children:"Kitty"}),Object(h.jsx)(o.b,{className:"link",to:"/cat",children:"Cat"})]}),Object(h.jsx)("h1",{children:"Contact Us"}),Object(h.jsx)(p,{})]})};c(53),c(54);var v=function(){var t=Object(a.useState)(""),e=Object(x.a)(t,2),c=e[0],s=e[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("form",{children:[Object(h.jsx)("input",{className:"title",type:"text",value:c,onChange:function(t){return s(t.target.value)},placeholder:"Enter breed"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{className:"submit",type:"submit"})]}),Object(h.jsx)("br",{}),Object(h.jsx)("h2",{children:"Availability"})]})};var f=function(){return Object(h.jsxs)("div",{className:"Cat",children:[Object(h.jsxs)("nav",{children:[Object(h.jsx)(o.b,{className:"link",to:"/",children:"Home"}),Object(h.jsx)(o.b,{className:"link",to:"/about",children:"About"}),Object(h.jsx)(o.b,{className:"link",to:"/contact",children:"Contact"}),Object(h.jsx)(o.b,{className:"link",to:"/kitty",children:"Kitty"}),Object(h.jsx)(o.b,{className:"link",to:"/cat",children:"Cat"})]}),Object(h.jsx)("h1",{children:"Cats are the best pets!"}),Object(h.jsx)("br",{}),Object(h.jsx)(v,{})]})};c(55);var k=function(){return Object(h.jsxs)("div",{className:"Kitty",children:[Object(h.jsxs)("nav",{children:[Object(h.jsx)(o.b,{className:"link",to:"/",children:"Home"}),Object(h.jsx)(o.b,{className:"link",to:"/about",children:"About"}),Object(h.jsx)(o.b,{className:"link",to:"/contact",children:"Contact"}),Object(h.jsx)(o.b,{className:"link",to:"/kitty",children:"Kitty"}),Object(h.jsx)(o.b,{className:"link",to:"/cat",children:"Cat"})]}),Object(h.jsx)("h1",{children:"Our famous breeds"}),Object(h.jsx)("img",{height:"250px",width:"200px",src:"https://www.bubblypet.com/wp-content/uploads/2021/01/Cute-Scottish-Fold-Munchkin-Kitten-with-hands-up-768x905.jpg",alt:""}),Object(h.jsx)("h2",{children:"Coco:Scottish Fold Munchkin"}),Object(h.jsx)("h3",{children:"4 months old"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("img",{height:"250px",width:"210px",src:"https://tse4.mm.bing.net/th/id/OIP.y8RO1tsdAaQrHkM0ULT9sgHaHa?pid=ImgDet&rs=1",alt:""}),Object(h.jsx)("h2",{children:"Boomba:Napoleon Munchkin"}),Object(h.jsx)("h3",{children:"1 year old"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("img",{height:"250px",width:"210px",src:"https://tse3.mm.bing.net/th/id/OIP.ncLJUleRt-Fp_C4fwzsu2QHaEo?pid=ImgDet&rs=1",alt:""}),Object(h.jsx)("h2",{children:"Bubbles:Maine Coon"}),Object(h.jsx)("h3",{children:"2 year old"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("img",{height:"250px",width:"210px",src:"https://i.pinimg.com/736x/b6/30/43/b63043afcc37a0f984784d5d2648a7b7--cats-animals.jpg",alt:""}),Object(h.jsx)("h2",{children:"Mikky: Chartreux"}),Object(h.jsx)("h3",{children:"3 months old"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})},y=c(2);var N=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(y.c,{children:[Object(h.jsx)(y.a,{path:"/",element:Object(h.jsx)(d,{})}),Object(h.jsx)(y.a,{path:"/about",element:Object(h.jsx)(m,{})}),Object(h.jsx)(y.a,{path:"/contact",element:Object(h.jsx)(g,{})}),Object(h.jsx)(y.a,{path:"/cat",element:Object(h.jsx)(f,{})}),Object(h.jsx)(y.a,{path:"/Kitty",element:Object(h.jsx)(k,{})})]})})},C=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,57)).then((function(e){var c=e.getCLS,a=e.getFID,s=e.getFCP,n=e.getLCP,j=e.getTTFB;c(t),a(t),s(t),n(t),j(t)}))};j.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(o.a,{children:Object(h.jsx)(N,{})})}),document.getElementById("root")),C()}},[[56,1,2]]]);
//# sourceMappingURL=main.6c997ef8.chunk.js.map