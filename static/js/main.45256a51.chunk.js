(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],[,,,,function(e,t,n){e.exports={section:"Section_section__1zoV7",title:"Section_title__azDee"}},function(e,t,n){e.exports={list:"FeedbackOptions_list__EP9cA",button:"FeedbackOptions_button__2iaYe"}},,function(e,t,n){e.exports={cotainer:"Container_cotainer__3r8Wa"}},function(e,t,n){e.exports={List:"Statistics_List__3U68L"}},,,,,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),s=n(6),r=n.n(s),o=(n(15),n(16),n(2)),l=n(7),u=n.n(l);var b=function(e){var t=e.children;return Object(c.jsx)("div",{className:u.a.container,children:t})},j=n(4),d=n.n(j);var O=function(e){var t=e.title,n=e.children;return Object(c.jsxs)("section",{className:d.a.section,children:[Object(c.jsx)("h2",{className:d.a.title,children:t}),n]})},h=n(5),x=n.n(h);var f=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(c.jsx)("ul",{className:x.a.list,children:t.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:x.a.button,type:"button",onClick:function(){return n(e)},children:e})},e)}))})},p=n(8),v=n.n(p);var _=function(e){var t=e.good,n=e.neutral,a=e.bad,i=e.total,s=e.positiveFeedback;return Object(c.jsxs)("ul",{className:v.a.list,children:[Object(c.jsxs)("li",{children:["Good: ",t]}),Object(c.jsxs)("li",{children:["Neutral: ",n]}),Object(c.jsxs)("li",{children:["Bad: ",a]}),Object(c.jsxs)("li",{children:["Total: ",i]}),Object(c.jsxs)("li",{children:["Positive Feedback: ",s,"%"]})]})},k=n(9),m=function(e){var t=e.message;return Object(c.jsx)("p",{children:t})};m.prototype={message:n.n(k).a.string.isrquired};var g=m;n(19);var N=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)(0),r=Object(o.a)(s,2),l=r[0],u=r[1],j=Object(a.useState)(0),d=Object(o.a)(j,2),h=d[0],x=d[1],p=n+l+h,v=Math.round(n/p*100||0);return Object(c.jsxs)(b,{children:[Object(c.jsx)(O,{title:"Please leave feedback",children:Object(c.jsx)(f,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e){case"good":i((function(e){return e+1}));break;case"neutral":u((function(e){return e+1}));break;case"bad":x((function(e){return e+1}));break;default:return}}})}),Object(c.jsx)(O,{title:"Statistics",children:0===p?Object(c.jsx)(g,{message:"No feedback given"}):Object(c.jsx)(_,{good:n,neutral:l,bad:h,total:p,positiveFeedback:v})})]})};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.45256a51.chunk.js.map