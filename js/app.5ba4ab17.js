(function(t){function n(n){for(var o,i,c=n[0],s=n[1],u=n[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(n);while(f.length)f.shift()();return a.push.apply(a,u||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],o=!0,c=1;c<e.length;c++){var s=e[c];0!==r[s]&&(o=!1)}o&&(a.splice(n--,1),t=i(i.s=e[0]))}return t}var o={},r={app:0},a=[];function i(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=o,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)i.d(e,o,function(n){return t[n]}.bind(null,o));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/kanban-board-vk-test/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var l=s;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"0696":function(t,n,e){"use strict";var o=e("8cc4"),r=e.n(o);r.a},"4a45":function(t,n,e){},"4ad4":function(t,n,e){"use strict";var o=e("a780"),r=e.n(o);r.a},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{ref:"board",staticClass:"board board_no-select"},[t._l(t.columns,(function(n){return e("Column",{key:n.id,attrs:{column:n},on:{insertCard:t.insertCard,updateCards:t.updateCards}})})),t.isFormActive?e("Column",[e("AddForm",{attrs:{forColumn:!0},on:{onSubmit:t.insertColumn,onCancel:function(n){t.isFormActive=!1}}})],1):t._e(),e("Column",[e("AddButton",{nativeOn:{click:function(n){return t.activateForm(n)}}},[t._v(" Добавить "+t._s(t.columns.length?"еще одну ":"")+"колонку ")])],1)],2)])},a=[],i=(e("c740"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"column"},[t.column?t._t("default",[e("div",{staticClass:"column__title"},[t._v(t._s(t.column.title))]),e("div",{ref:"cardList",staticClass:"column__card-list"},[e("Draggable",{attrs:{group:"cards"},model:{value:t.cards,callback:function(n){t.cards=n},expression:"cards"}},t._l(t.cards,(function(t){return e("Card",{key:t.id,attrs:{text:t.text}})})),1),t.isFormActive?e("AddForm",{on:{onSubmit:t.insertCard,onCancel:function(n){t.isFormActive=!1}}}):t._e()],1),t.isFormActive?t._e():e("AddButton",{nativeOn:{click:function(n){return t.activateFrom(n)}}},[t._v(" Добавить "+t._s(t.cards.length?"еще одну ":"")+"карточку ")])]):t._t("default")],2)}),c=[],s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card"},[t._v(t._s(t.text))])},u=[],l={name:"Card",props:{text:{type:String,required:!0}}},d=l,f=(e("6f88"),e("2877")),m=Object(f["a"])(d,s,u,!1,null,"22ffd46c",null),p=m.exports,v=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"add-button"},[e("span",{staticClass:"add-button__icon"}),e("span",{staticClass:"add-button__text"},[t._t("default")],2)])},h=[],C=(e("4ad4"),{}),_=Object(f["a"])(C,v,h,!1,null,"2f778306",null),b=_.exports,x=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("form",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.cancel,expression:"cancel"}],staticClass:"add-form",class:{"add-form_for-card":!t.forColumn},on:{submit:function(n){return n.preventDefault(),t.$emit("onSubmit",t.textContent)}}},[e("div",{staticClass:"add-form__textarea-wrapper"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textContent,expression:"textContent"}],ref:"textarea",staticClass:"add-form__textarea",attrs:{placeholder:"Введите название "+(t.forColumn?"колонки":"карточки")},domProps:{value:t.textContent},on:{input:[function(n){n.target.composing||(t.textContent=n.target.value)},t.autoResize],keydown:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:(n.preventDefault(),t.$refs.addBtn.click())}}})]),e("div",{staticClass:"add-form__actions actions"},[e("button",{ref:"addBtn",staticClass:"actions__add-btn",attrs:{disabled:!t.textContent.length}},[t._v(" Добавить "+t._s(this.forColumn?"колонку":"карточку")+" ")]),e("div",{staticClass:"actions__cancel-btn",on:{click:t.cancel}},[e("span",{staticClass:"actions__cancel-icon"})])])])},g=[],y={name:"AddForm",props:{more:{type:Boolean,default:!1},forColumn:{type:Boolean,default:!1}},data:function(){return{textContent:""}},methods:{autoResize:function(t){this.forColumn||(t.target.style.height="auto",t.target.style.height="".concat(t.target.scrollHeight,"px"))},cancel:function(){this.$emit("onCancel")}},mounted:function(){var t=this;this.$refs.textarea.focus(),!this.forColumn&&this.$nextTick((function(){t.$refs.textarea.setAttribute("style","height","".concat(t.$refs.textarea.scrollHeight,"px"))}))}},k=y,A=(e("80a1"),Object(f["a"])(k,x,g,!1,null,"58805b28",null)),O=A.exports,F=e("310e"),$=e.n(F),w={name:"Column",components:{Card:p,AddButton:b,AddForm:O,Draggable:$.a},props:{column:{type:Object}},data:function(){return{isFormActive:!1}},computed:{cards:{get:function(){return this.column.cards},set:function(t){this.$emit("updateCards",{idColumn:this.column.id,cards:t})}}},methods:{activateFrom:function(){this.isFormActive=!0,this.scrollToBottom()},insertCard:function(t){this.$emit("insertCard",{idColumn:this.column.id,text:t}),this.isFormActive=!1,this.scrollToBottom()},scrollToBottom:function(){var t=this;this.$nextTick((function(){var n=t.$refs.cardList;n.scrollTop=n.scrollHeight}))}}},S=w,j=(e("0696"),Object(f["a"])(S,i,c,!1,null,"18e80ce8",null)),T=j.exports,B={name:"App",components:{Column:T,AddButton:b,AddForm:O},data:function(){return{columns:[],isFormActive:!1}},methods:{insertColumn:function(t){this.columns.push({id:Date.now(),title:t,cards:[]}),this.saveToLocalStorage(),this.isFormActive=!1},insertCard:function(t){var n=t.idColumn,e=t.text,o=this.columns.findIndex((function(t){return t.id===n}));this.columns[o].cards.push({id:Date.now(),text:e}),this.saveToLocalStorage()},updateCards:function(t){var n=t.idColumn,e=t.cards,o=this.columns.findIndex((function(t){return t.id===n}));this.columns[o].cards=e,this.saveToLocalStorage()},saveToLocalStorage:function(){localStorage.setItem("kanbanBoardColumns",JSON.stringify(this.columns))},activateForm:function(){var t=this;this.isFormActive=!0,this.$nextTick((function(){var n=t.$refs.board;n.scrollLeft=n.clientWidth}))}},mounted:function(){this.columns=JSON.parse(localStorage.getItem("kanbanBoardColumns")||"[]")}},P=B,L=(e("5c0b"),Object(f["a"])(P,r,a,!1,null,null,null)),D=L.exports,E=e("c28b"),I=e.n(E);o["a"].use(I.a),o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(D)}}).$mount("#app")},"5c0b":function(t,n,e){"use strict";var o=e("9c0c"),r=e.n(o);r.a},"6f88":function(t,n,e){"use strict";var o=e("4a45"),r=e.n(o);r.a},"80a1":function(t,n,e){"use strict";var o=e("a956"),r=e.n(o);r.a},"8cc4":function(t,n,e){},"9c0c":function(t,n,e){},a780:function(t,n,e){},a956:function(t,n,e){}});
//# sourceMappingURL=app.5ba4ab17.js.map