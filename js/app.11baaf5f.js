(function(e){function t(t){for(var r,c,u=t[0],i=t[1],l=t[2],f=0,p=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1716:function(e,t,n){},"197a":function(e,t,n){"use strict";n("778d")},"2aa5":function(e,t,n){"use strict";n("1716")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,o,c){var u=Object(r["e"])("RandomUser");return Object(r["d"])(),Object(r["b"])(u)}n("99af");var o=Object(r["g"])("data-v-d9f3bde8"),c=o((function(e,t,n,a,o,c){return Object(r["d"])(),Object(r["b"])("div",null,[Object(r["c"])("img",{src:o.picture,alt:"".concat(o.firstName).concat(o.lastName),class:o.gender},null,10,["src","alt"]),Object(r["c"])("h3",null,Object(r["f"])(o.firstName)+" "+Object(r["f"])(o.lastName),1),Object(r["c"])("h3",null,"Email: "+Object(r["f"])(o.email),1),Object(r["c"])("h3",null,"phone: "+Object(r["f"])(o.phone),1),Object(r["c"])("h3",null,"age: "+Object(r["f"])(o.age),1),Object(r["c"])("h3",null,"location: "+Object(r["f"])(o.location),1),Object(r["c"])("button",{class:o.gender,onClick:t[1]||(t[1]=function(e){return c.getUser()})},"Random User",2)])})),u=n("1da1"),i=(n("96cf"),n("d3b7"),n("b0c0"),{name:"RandomUser",data:function(){return{firstName:"John",lastName:"Doe",email:"john@gmail.com",phone:"0000-1234567",age:"28",location:"Germany Saarland Olfen Beethovenstraße 8496",gender:"male",picture:"https://randomuser.me/api/portraits/men/10.jpg"}},methods:{getUser:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://randomuser.me/api");case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,a=r.results,e.firstName=a[0].name.first,e.lastName=a[0].name.lastName,e.email=a[0].email,e.phone=a[0].phone,e.age=a[0].dob.age,e.location=a[0].location.country+"-"+a[0].location.state+"-"+a[0].location.city+"-"+a[0].location.street.name+"-"+a[0].location.street.number,e.gender=a[0].gender,e.picture=a[0].picture.large;case 15:case"end":return t.stop()}}),t)})))()}}});n("197a");i.render=c,i.__scopeId="data-v-d9f3bde8";var l=i,s={name:"App",components:{RandomUser:l}};n("2aa5");s.render=a;var f=s;Object(r["a"])(f).mount("#app")},"778d":function(e,t,n){}});
//# sourceMappingURL=app.11baaf5f.js.map