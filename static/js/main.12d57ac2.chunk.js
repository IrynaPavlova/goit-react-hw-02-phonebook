(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),l=n.n(c),o=n(7),u=n(3),i=n(4),m=n(5),s=n(8),d=n(6),b=n(9),h=function(e){var t=e.onHandleSearch;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Find contacts by name"),r.a.createElement("input",{onInput:t,type:"text",placeholder:"enter contacts"}))},f=function(e){var t=e.name,n=e.number,a=e.onHandleGetValue,c=e.onHandleSubmit;return r.a.createElement("form",{onSubmit:c},r.a.createElement("input",{value:t,onChange:a,type:"text",placeholder:"Enter name...",name:"name"}),r.a.createElement("input",{value:n,onChange:a,type:"text",placeholder:"Enter number...",name:"number"}),r.a.createElement("button",{type:"submit"},"Add contact"))},E=function(e){var t=e.contacts,n=e.onHandleDelete,a=e.filter;return r.a.createElement("ul",null,0===a.length?t.map((function(e){return r.a.createElement("li",{id:e.id,key:e.id},e.name,":",e.number,r.a.createElement("button",{onClick:n},"DELETE"))})):a.map((function(e){return r.a.createElement("li",{id:e.id,key:e.id},e.name,":",e.number,r.a.createElement("button",{onClick:n},"DELETE"))})))},p=n(15),v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},n.onHandleGetValue=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(u.a)({id:p()},a,r))},n.getContact=function(e){n.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[e])}}))},n.onHandleSubmit=function(e){if(e.preventDefault(),0!==e.target.name.value.length&&0!==e.target.number.value.length){var t=!0;n.state.contacts.forEach((function(n){n.name===e.target.name.value&&(t=!1,alert("".concat(e.target.name.value," is already in contacts.")))})),!0===t&&n.getContact({name:n.state.name,number:n.state.number,id:p()}),n.setState({name:"",number:""})}},n.deleteContact=function(e){n.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},n.onHandleDelete=function(e){var t=e.target.closest("li").id;n.deleteContact(t)},n.onHandleSearch=function(e){n.setState({filter:e.target.value})},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e.state.filter)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(f,{name:this.state.name,number:this.state.number,onHandleGetValue:this.onHandleGetValue,onHandleSubmit:this.onHandleSubmit}),r.a.createElement("h2",null,"Contacts"),r.a.createElement(h,{onHandleSearch:this.onHandleSearch}),r.a.createElement(E,{filter:t,contacts:this.state.contacts,onHandleDelete:this.onHandleDelete})))}}]),t}(a.Component);l.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.12d57ac2.chunk.js.map