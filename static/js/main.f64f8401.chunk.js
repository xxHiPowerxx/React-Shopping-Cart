(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{18:function(e,t,n){e.exports=n(31)},23:function(e,t,n){},24:function(e,t){function n(e){9===e.keyCode&&(document.body.classList.add("user-is-tabbing"),window.removeEventListener("keydown",n),window.addEventListener("mousedown",a))}function a(){document.body.classList.remove("user-is-tabbing"),window.removeEventListener("mousedown",a),window.addEventListener("keydown",n)}window.addEventListener("keydown",n)},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),c=n.n(o),s=(n(23),n(24),n(17)),u=n(15),i=n(3),l=n(5),m=n(4),d=n(2),p=n(6),b=n(16),h=n(7),v=n(12),f=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"site-logo"},r.a.createElement("div",{className:"react-logo"},r.a.createElement(h.a,{className:"react-shopping-cart-logo site-logo-icon fa-spin",icon:v.a}),r.a.createElement("span",{className:"site-logo-text-react"},"React")),r.a.createElement("span",{className:"site-logo-text-shopping-cart"},"Shopping-Cart"))}}]),t}(a.Component),g=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={productInputValue:0},n.handleChange=function(e){console.log(e.target.value),n.setState({productInputValue:e.target.value})},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"products-on-page",onSubmit:function(t){return e.props.onSubmit(t,e.state.productInputValue)}},r.a.createElement("label",{className:"form-label input-label",htmlFor:"productInput"},"Number of Products on Page"),r.a.createElement("input",{type:"number",className:"form-control",id:"productInput",onChange:this.handleChange}),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))}}]),t}(a.Component),O=n(13),E=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.totalCounters;return r.a.createElement("div",{className:"ctnr-products-in-cart"},r.a.createElement("span",{className:"products-in-cart"},"Products In Cart"),r.a.createElement("div",{className:"ctnr-products-in-cart-qty"},r.a.createElement("span",{className:"products-in-cart-qty badge badge-pill badge-secondary"},e),r.a.createElement(h.a,{className:"cart-icon",icon:O.a})))}}]),t}(a.Component),y=n(14),j=n.n(y),C=function(e){var t=e.condition,n=e.props,a=n.onSubmit,o=n.totalCounters,c=r.a.createElement(g,{onSubmit:a}),s=r.a.createElement(E,{totalCounters:o}),u=t?[c,s]:[s,c],i=Object(b.a)(u,2),l=i[0],m=i[1];return r.a.createElement(r.a.Fragment,null,l,m)},k=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={invertOrder:!1},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this._nav;new j.a(t,(function(){var n=t.clientWidth>576;return e.setState({invertOrder:n})}))}},{key:"render",value:function(){var e=this,t=this.state.invertOrder;return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark text-light",ref:function(t){return e._nav=t}},r.a.createElement("div",{className:"container container-navbar-inner"},r.a.createElement(f,null),r.a.createElement(C,{condition:t,props:this.props})))}}]),t}(a.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.counter;return r.a.createElement("div",{className:"counter smooth-transition"},r.a.createElement("h4",{className:"counter-title"},"Product #",t.id),r.a.createElement("div",{className:"counter-controls"},r.a.createElement("div",{className:"ctnr-counter-value"},r.a.createElement("small",{className:"quantity"},"Qty."),r.a.createElement("span",{className:this.getBadgeClasses()+" counter-value"},this.formatValue())),r.a.createElement("button",{onClick:function(){return e.props.onIncrement(t)},className:"btn btn-increment-counter btn-success btn-sm"},"Increment"),r.a.createElement("button",{onClick:function(){return e.props.onDecrement(t)},className:"btn btn-decrement-counter btn-secondary btn-sm"},"Decrement"),r.a.createElement("button",{onClick:function(){return e.props.onDelete(t.id)},className:"btn btn-delete-counter btn-danger btn-sm"},"Delete")))}},{key:"getBadgeClasses",value:function(){var e="badge badge-";return e+=0===this.props.counter.value?"warning":"primary"}},{key:"formatValue",value:function(){var e=this.props.counter.value;return 0===e?"Zero":e}}]),t}(a.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.counters,n=e.onReset,a=e.onDelete,o=e.onIncrement,c=e.onDecrement;return r.a.createElement("div",{className:"counters"},r.a.createElement("button",{onClick:n,className:"btn btn-primary btn-sm m-2"},"Reset"),t.map((function(e){return r.a.createElement(N,{key:e.id,onDelete:a,onIncrement:o,onDecrement:c,counter:e})})))}}]),t}(a.Component),D=(n(30),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).numOfProductsValue=5,n.state={numOfProductsValue:n.numOfProductsValue,counters:n.initiateCounters(n.numOfProductsValue)},n.handleIncrement=function(e){console.log(e);var t=n.getThisCounter(e),a=t.counters;a[t.index].value++,n.setState({counters:a})},n.handleDecrement=function(e){var t=n.getThisCounter(e),a=t.counters,r=a[t.index];r.value>0&&(r.value--,n.setState({counters:a}))},n.handleSubmit=function(e,t){e.preventDefault();var a=t,r=n.initiateCounters(a);n.setState({counters:r})},n.handleReset=function(){var e=n.initiateCounters();n.setState({counters:e})},n.handleDelete=function(e){var t=n.state.counters.filter((function(t){return t.id!==e}));n.setState({counters:t})},console.log("App - Constructor",n.props),n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"constructCounters",value:function(e,t,n){for(var a=[],r=0;r<e;r++)a.push({id:r+1,value:0});return a}},{key:"initiateCounters",value:function(e){e=e||this.numOfProductsValue;var t=this.constructCounters(e);return t.map((function(e){return e.value=0,e})),t}}]),Object(d.a)(t,[{key:"componentDidMount",value:function(){console.log("App - Mounted")}},{key:"getThisCounter",value:function(e){var t=Object(u.a)(this.state.counters),n=t.indexOf(e);return t[n]=Object(s.a)({},e),{counters:t,index:n}}},{key:"render",value:function(){return console.log("App - Rendered"),r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{totalCounters:this.state.counters.filter((function(e){return e.value>0})).length,onSubmit:this.handleSubmit}),r.a.createElement("main",{className:"container"},r.a.createElement(w,{counters:this.state.counters,onReset:this.handleReset,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.f64f8401.chunk.js.map