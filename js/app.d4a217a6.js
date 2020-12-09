(function(e){function t(t){for(var n,c,s=t[0],i=t[1],u=t[2],d=0,h=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&h.push(o[c][0]),o[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(h.length)h.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var i=r[s];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/covid-tracker/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"124f":function(e,t,r){},"4e24":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o={class:"main"};function a(e,t,r,a,c,s){var i=Object(n["resolveComponent"])("Search"),u=Object(n["resolveComponent"])("HeaderCountry"),l=Object(n["resolveComponent"])("Summary"),d=Object(n["resolveComponent"])("LineChart");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[Object(n["createVNode"])("div",o,[Object(n["createVNode"])(i,{onUpdate:s.handleInput},null,8,["onUpdate"]),Object(n["createVNode"])(u),Object(n["createVNode"])(l)]),Object(n["createVNode"])(n["Transition"],{name:"chart"},{default:Object(n["withCtx"])((function(){return[s.getSearchValue?(Object(n["openBlock"])(),Object(n["createBlock"])(d,{key:0,value:s.getSearchValue,class:"chart"},null,8,["value"])):Object(n["createCommentVNode"])("",!0)]})),_:1})],64)}r("96cf");var c=r("1da1"),s=r("ae27"),i=r.n(s),u=(r("ac1f"),r("841c"),Object(n["withScopeId"])("data-v-4cc41bf8"));Object(n["pushScopeId"])("data-v-4cc41bf8");var l={class:"wrapper"},d={class:"autoList"},h={class:"list"};Object(n["popScopeId"])();var p=u((function(e,t,r,o,a,c){return Object(n["openBlock"])(),Object(n["createBlock"])("div",l,[Object(n["withDirectives"])(Object(n["createVNode"])("input",{type:"text",onKeyup:t[1]||(t[1]=Object(n["withKeys"])((function(e){return c.setValue(),c.onEnter(),c.emitvalue()}),["enter"])),ref:"searchValue","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.search=e}),onInput:t[3]||(t[3]=function(e){return c.onChange(e.target.value)}),onKeydown:[t[4]||(t[4]=Object(n["withKeys"])((function(){return c.onArrowDown.apply(c,arguments)}),["down"])),t[5]||(t[5]=Object(n["withKeys"])((function(){return c.onArrowUp.apply(c,arguments)}),["up"]))],placeholder:c.placeholder},null,40,["placeholder"]),[[n["vModelText"],a.search]]),Object(n["withDirectives"])(Object(n["createVNode"])("div",d,[Object(n["createVNode"])("ul",h,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(a.results,(function(t,r){return Object(n["openBlock"])(),Object(n["createBlock"])("li",{class:["listElement",{"is-active":r===a.arrowCounter}],key:t,onClick:function(r){return c.setState(t),e.$emit("update")}},Object(n["toDisplayString"])(t),11,["onClick"])})),128))])],512),[[n["vShow"],a.search&&a.isOpen&&a.results.length]])])})),f=(r("4de4"),r("2ca0"),{name:"Search",data:function(){return{search:"",results:[],isOpen:!1,arrowCounter:-1}},methods:{onChange:function(e){this.search=e,this.isOpen=!0,this.filterResults()},filterResults:function(){var e=this;this.results=this.getCountry.filter((function(t){return t.toLowerCase().startsWith(e.search.toLowerCase())}))},doesExist:function(e){this.$store.dispatch({type:"search/searchCountry",value:e})},emitvalue:function(){(this.getExist||""===this.$refs.searchValue.value)&&this.$emit("update")},setValue:function(){this.isOpen=!1,this.doesExist(this.$refs.searchValue.value),(this.getExist||""===this.$refs.searchValue.value)&&this.$store.dispatch({type:"search/setValue",value:this.$refs.searchValue.value})},setState:function(e){this.search=e,this.$refs.searchValue.value=e,this.doesExist(e),(this.getExist||""==this.$refs.searchValue.value)&&this.setValue(),this.search=""},handleClickOutside:function(e){this.$el.contains(e.target)||(this.isOpen=!1,this.arrowCounter=-1)},onArrowDown:function(){this.arrowCounter<this.results.length&&(this.arrowCounter=this.arrowCounter+1)},onArrowUp:function(){this.arrowCounter>0&&(this.arrowCounter=this.arrowCounter-1)},onEnter:function(){-1!==this.arrowCounter&&(this.search=this.results[this.arrowCounter],this.isOpen=!1,this.setState(this.search),this.arrowCounter=-1)}},computed:{placeholder:function(){if(""===this.search)return"Search"},getCountry:function(){return this.$store.getters["search/country"]},getExist:function(){return this.$store.getters["search/getExist"]}},mounted:function(){document.addEventListener("click",this.handleClickOutside)},unmounted:function(){document.removeEventListener("click",this.handleClickOutside)}});r("70b2");f.render=p,f.__scopeId="data-v-4cc41bf8";var g=f,v=Object(n["withScopeId"])("data-v-4da9abe1");Object(n["pushScopeId"])("data-v-4da9abe1");var m={class:"container"},b={class:"summary-2"},C=Object(n["createVNode"])("div",{class:"title"},"TOTAL CASES",-1),O={class:"value"},y={class:"value2"},j={class:"summary-2"},w=Object(n["createVNode"])("div",{class:"title"},"TOTAL DEATHS",-1),x={class:"value"},S={class:"value2"},V={class:"summary-2"},k=Object(n["createVNode"])("div",{class:"title"},"TOTAL RECOVERED",-1),N={class:"value"},D={class:"value2"};Object(n["popScopeId"])();var T=v((function(e,t,r,o,a,c){return Object(n["openBlock"])(),Object(n["createBlock"])("div",m,[Object(n["createVNode"])("div",{class:["summary card-1",{loading:a.loader}]},[Object(n["withDirectives"])(Object(n["createVNode"])("div",b,[C,Object(n["createVNode"])("div",O,Object(n["toDisplayString"])(c.getCountry.TotalConfirmed),1),Object(n["createVNode"])("div",y,"+ "+Object(n["toDisplayString"])(c.getCountry.NewConfirmed),1)],512),[[n["vShow"],!a.loader]])],2),Object(n["createVNode"])("div",{class:["summary card-2",{loading:a.loader}]},[Object(n["withDirectives"])(Object(n["createVNode"])("div",j,[w,Object(n["createVNode"])("div",x,Object(n["toDisplayString"])(c.getCountry.TotalDeaths),1),Object(n["createVNode"])("div",S,"+ "+Object(n["toDisplayString"])(c.getCountry.NewDeaths),1)],512),[[n["vShow"],!a.loader]])],2),Object(n["createVNode"])("div",{class:["summary card-3",{loading:a.loader}]},[Object(n["withDirectives"])(Object(n["createVNode"])("div",V,[k,Object(n["createVNode"])("div",N,Object(n["toDisplayString"])(c.getCountry.TotalRecovered),1),Object(n["createVNode"])("div",D,"+ "+Object(n["toDisplayString"])(c.getCountry.NewRecovered),1)],512),[[n["vShow"],!a.loader]])],2)])})),R={name:"Summary",data:function(){return{loader:!1}},computed:{getCountry:function(){return this.$store.getters["summary/getCountry"]},getTotal:function(){return this.$store.getters["summary/getTotal"]}},watch:{getTotal:function(){var e=this;this.loader=!0,setTimeout((function(){e.loader=!1}),250)}}};r("ce11");R.render=T,R.__scopeId="data-v-4da9abe1";var B=R;function $(e,t,r,o,a,c){var s=Object(n["resolveComponent"])("apexchart");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Transition"],{name:"chart"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(s,{type:"bar",options:a.options,series:a.series},null,8,["options","series"])]})),_:1})}var E={components:{apexchart:i.a},data:function(){return{windowHeight:"",width:700,series:[],options:{chart:{type:"bar",height:400,stacked:!0},plotOptions:{bar:{horizontal:!1}},dataLabels:{enabled:!1},tooltip:{shared:!0,followCursor:!0},stroke:{width:1,colors:["#fff"],curve:"smooth"},fill:{opacity:1},legend:{position:"top",horizontalAlign:"center",offsetX:40},colors:["rgb(95, 193, 215)"],title:{text:"CONFIRMED INFECTIONS CHART",align:"center",margin:10,offsetX:0,offsetY:0,floating:!1,style:{fontSize:"15px",fontWeight:"bold",fontFamily:"'Lato', sans-serif'",color:" #a6a6a6"}}}}},computed:{getDate:function(){return this.$store.getters["chart/getDate"]},getConfirmed:function(){return this.$store.getters["chart/getConfirmed"]}},watch:{getDate:{handler:function(e){this.options={xaxis:{categories:this.getDate}}}},getConfirmed:{handler:function(e){this.series=[{name:"Confirmed",data:this.getConfirmed}]},deep:!0}}};E.render=$;var I=E,L=Object(n["withScopeId"])("data-v-60631fc1");Object(n["pushScopeId"])("data-v-60631fc1");var G={key:0,class:"container"},_={class:"data"},A={key:1,class:"container"},F={class:"container-2"},M=Object(n["createVNode"])("img",{class:"world",src:"https://icons.iconarchive.com/icons/dtafalonso/modern-xp/512/ModernXP-73-Globe-icon.png",alt:"world"},null,-1),P={class:"data"},U=Object(n["createVNode"])("h2",null,"Global",-1);Object(n["popScopeId"])();var H=L((function(e,t,r,o,a,c){return c.getSearchValue?(Object(n["openBlock"])(),Object(n["createBlock"])("div",G,[Object(n["createVNode"])("img",{src:c.url,alt:"country flag"},null,8,["src"]),Object(n["createVNode"])("div",_,[Object(n["createVNode"])("h2",null,Object(n["toDisplayString"])(c.capitalizeFirstLetter),1),Object(n["createVNode"])("p",null,Object(n["toDisplayString"])(c.currentData),1)])])):(Object(n["openBlock"])(),Object(n["createBlock"])("div",A,[Object(n["createVNode"])("div",F,[M,Object(n["createVNode"])("div",P,[U,Object(n["createVNode"])("p",null,Object(n["toDisplayString"])(c.currentData),1)])])]))})),z=(r("99af"),r("fb6a"),{name:"HeaderCountry",data:function(){return{loader:!1}},computed:{capitalizeFirstLetter:function(){var e=this.$store.getters["search/searchValue"];return e?e[0].toUpperCase()+e.slice(1):""},url:function(){if(this.getCode)return"http://www.geonames.org/flags/x/".concat(this.getCode,".gif")},currentData:function(){var e=new Date;return"".concat(e.getDate()," . ").concat(e.getMonth()+1," . ").concat(e.getFullYear())},getCode:function(){return this.$store.getters["code/getCode"]},getSearchValue:function(){return this.$store.getters["search/searchValue"]},getTotal:function(){return this.$store.getters["summary/getTotal"]},getExist:function(){return this.$store.getters["search/getExist"]}},watch:{getTotal:function(){var e=this;this.loader=!0,setTimeout((function(){e.loader=!1}),250)}}});r("dd62");z.render=H,z.__scopeId="data-v-60631fc1";var K=z,X={name:"App",components:{Search:g,Summary:B,HeaderCountry:K,LineChart:I},methods:{setCountries:function(){this.$store.dispatch({type:"search/saveCountries"})},setCode:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch({type:"code/counterCode",value:e.getSearchValue});case 2:case"end":return t.stop()}}),t)})))()},setChart:function(){this.$store.dispatch({type:"chart/setChart"})},setCountry:function(){this.$store.dispatch({type:"summary/setCountry",value:this.getSearchValue})},setGlobalData:function(){this.$store.dispatch({type:"summary/setGlobalData"})},handleInput:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.getSearchValue){t.next=7;break}return t.next=3,e.setCode();case 3:e.setCountry(),e.setChart(),t.next=8;break;case 7:e.setGlobalData();case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.setGlobalData();case 2:return t.next=4,e.setCountries();case 4:case"end":return t.stop()}}),t)})))()},computed:{getSearchValue:function(){return this.$store.getters["search/searchValue"]},getCode:function(){return this.$store.getters["code/getCode"]}}};r("9cdc");X.render=a;var J=X,W=r("5502"),Y=(r("4160"),r("d3b7"),r("159b"),{namespaced:!0,state:function(){return{inputValue:"",countries:[],exist:null}},mutations:{setValue:function(e,t){e.inputValue=t.value},setCountry:function(e,t){t.forEach((function(t){e.countries.push(t.Country)}))},searchCountry:function(e,t){for(var r=0;r<e.countries.length;r++){if(t===e.countries[r]){e.exist=!0;break}e.exist=!1}}},actions:{setValue:function(e,t){e.commit("setValue",t)},saveCountries:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.covid19api.com/countries");case 3:return r=t.sent,t.next=6,r.json();case 6:n=t.sent,e.commit("setCountry",n),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},searchCountry:function(e,t){var r;""!==t.value?r=t.value[0].toUpperCase()+t.value.slice(1):this.exist=!0,e.commit("searchCountry",r)}},getters:{searchValue:function(e){return e.inputValue},country:function(e){return e.countries},getExist:function(e){return e.exist}}}),q=(r("25f0"),r("5319"),{namespaced:!0,state:function(){return{Country:{TotalConfirmed:"",NewConfirmed:"",TotalDeaths:"",NewDeaths:"",TotalRecovered:"",NewRecovered:""}}},mutations:{setCountry:function(e,t){e.Country.TotalConfirmed=t.TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "),e.Country.NewConfirmed=t.NewConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "),e.Country.TotalDeaths=t.TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "),e.Country.NewDeaths=t.NewDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "),e.Country.TotalRecovered=t.TotalRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "),e.Country.NewRecovered=t.NewRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")},setGlobalData:function(e,t){e.Country.TotalConfirmed=t.Global.TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "),e.Country.NewConfirmed=t.Global.NewConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "),e.Country.TotalDeaths=t.Global.TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "),e.Country.NewDeaths=t.Global.NewDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "),e.Country.TotalRecovered=t.Global.TotalRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "),e.Country.NewRecovered=t.Global.NewRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}},actions:{setCountry:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function r(){var n,o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("https://api.covid19api.com/summary");case 3:return n=r.sent,r.next=6,n.json();case 6:o=r.sent,a=Q(o.Countries,t.value),e.commit("setCountry",a),r.next=14;break;case 11:r.prev=11,r.t0=r["catch"](0),console.log(r.t0);case 14:case"end":return r.stop()}}),r,null,[[0,11]])})))()},setGlobalData:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.covid19api.com/summary");case 3:return r=t.sent,t.next=6,r.json();case 6:n=t.sent,e.commit("setGlobalData",n),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}},getters:{getCountry:function(e){return e.Country},getTotal:function(e){return e.Country.TotalConfirmed}}});function Q(e,t){for(var r=0;r<e.length;r++)if(t===e[r].Slug||t===e[r].Country)return e[r]}var Z={namespaced:!0,state:function(){return{code:""}},mutations:{counterCode:function(e,t){e.code=t}},actions:{counterCode:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function r(){var n,o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("https://api.covid19api.com/countries");case 3:return n=r.sent,r.next=6,n.json();case 6:return o=r.sent,r.next=9,ee(o,t.value);case 9:a=r.sent,e.commit("counterCode",a),r.next=16;break;case 13:r.prev=13,r.t0=r["catch"](0),console.log(r.t0);case 16:case"end":return r.stop()}}),r,null,[[0,13]])})))()}},getters:{getCode:function(e){return e.code.toLowerCase()}}};function ee(e,t){return te.apply(this,arguments)}function te(){return te=Object(c["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<t.length)){e.next=7;break}if(r!==t[n].Slug&&r!==t[n].Country){e.next=4;break}return e.abrupt("return",t[n].ISO2);case 4:n++,e.next=1;break;case 7:case"end":return e.stop()}}),e)}))),te.apply(this,arguments)}r("c975");var re={namespaced:!0,state:function(){return{confirmed:[],date:[]}},mutations:{setChart:function(e,t){e.date=[],e.confirmed=[],t.forEach((function(r,n){n>t.length-25&&(e.date.push(r.Date.slice(0,r.Date.indexOf("T"))),e.confirmed.push(r.Confirmed))}))}},actions:{setChart:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r=e.rootState.code.code,t.next=4,fetch("https://api.covid19api.com/total/country/".concat(r));case 4:return n=t.sent,t.next=7,n.json();case 7:o=t.sent,e.commit("setChart",o),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()}},getters:{getDate:function(e){return e.date},getConfirmed:function(e){return e.confirmed}}},ne=Object(W["a"])({modules:{search:Y,summary:q,code:Z,chart:re},state:function(){return{}},mutations:{},getters:{},actions:{}}),oe=ne,ae=Object(n["createApp"])(J);ae.use(oe),ae.mount("#app")},"666c":function(e,t,r){},"70b2":function(e,t,r){"use strict";r("666c")},"9cdc":function(e,t,r){"use strict";r("c701")},c701:function(e,t,r){},ce11:function(e,t,r){"use strict";r("124f")},dd62:function(e,t,r){"use strict";r("4e24")}});
//# sourceMappingURL=app.d4a217a6.js.map