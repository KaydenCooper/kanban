(function(t){function e(e){for(var s,i,n=e[0],d=e[1],l=e[2],u=0,m=[];u<n.length;u++)i=n[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(t[s]=d[s]);c&&c(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,n=1;n<a.length;n++){var d=a[n];0!==o[d]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},o={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],d=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var c=d;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2e3d":function(t,e,a){"use strict";var s=a("9ffd"),o=a.n(s);o.a},"4d13":function(t,e,a){"use strict";var s=a("600b"),o=a.n(s);o.a},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid d-flex flex-column",attrs:{id:"app"}},[a("navbar"),t._v(" "),a("router-view")],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"row navbar navbar-expand-lg navbar-light bg-dark"},[a("router-link",{staticClass:"navbar-brand text-light",attrs:{to:{name:"home"}}},[t._v("Kanban")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"home"==t.$route.name}},[a("router-link",{staticClass:"nav-link text-light",attrs:{to:{name:"home"}}},[a("u",[t._v("Home")])])],1),t._v(" "),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"boards"==t.$route.name}},[a("router-link",{staticClass:"nav-link text-light",attrs:{to:{name:"boards"}}},[a("u",[t._v("My-Dashboard")])])],1):t._e()]),t._v(" "),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-outline-danger",on:{click:t.logout}},[t._v("logout")]):a("button",{staticClass:"btn btn-outline-light",on:{click:t.login}},[t._v("Login")])])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],d=a("bc3a"),l=a.n(d);l.a.create({baseURL:"https://localhost:3000",withCredentials:!0});var c={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"),console.log("this.$auth.user: "),console.log(this.$auth.user)},async logout(){await this.$auth.logout({returnTo:window.location.origin})}}},u=c,m=a("2877"),p=Object(m["a"])(u,i,n,!1,null,null,null),h=p.exports,v=a("335d"),b={name:"App",async beforeCreate(){try{await Object(v["c"])(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile")}catch(t){this.$router.push({name:"home"})}},components:{Navbar:h}},f=b,g=(a("5c0b"),Object(m["a"])(f,o,r,!1,null,null,null)),k=g.exports,C=a("8c4f"),_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home d-flex container-fluid flex-column flex-grow-1 justify-content-center bg-image"},[a("div",{staticClass:"row mb-5 align-items-center justify-content-center"},[a("div",{staticClass:"col-11 col-md-6 thicc-border m-2 p-2"},[a("h1",{staticClass:"text-light pt-3"},[t._v("Kanban")]),t._v(" "),a("hr"),t._v(" "),a("h4",{staticClass:"text-light"},[t._v("PLEASE LOG IN TO CREATE YOUR VERY OWN TRELLO BOARD")])])]),t._v(" "),a("footer",{staticClass:"bg-dark text-light fixed-bottom p-1"},[a("small",[t._v("Created By: Harrison Wheeler & Kayden Cooper")])])])}],y={name:"home",data(){return{}},computed:{},methods:{},components:{}},x=y,T=(a("c8a6"),Object(m["a"])(x,_,w,!1,null,"10217480",null)),$=T.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"boards container-fluid flex-column flex-grow-1 justify-content-center p-3 bg-image"},[a("div",{staticClass:"text-center pb-2"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.addBoard(e)}}},[a("div",{staticClass:"input-group bg-transparent shadow-lg p-3"},[t._m(0),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],staticClass:"p-2 w-75",attrs:{type:"text",placeholder:"Enter Title...",required:""},domProps:{value:t.newBoard.title},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"title",e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"col-12 pt-2"},[a("div",{staticClass:"row p-2 justify-content-center"},t._l(t.boards,(function(e){return a("div",{key:e.id},[a("div",{staticClass:"card bg-transparent shadow-lg mb-3 mx-2 p-1",staticStyle:{"min-width":"15rem"}},[a("div",{staticClass:"card text-primary m-1 px-4 pt-4 pb-1",staticStyle:{"min-height":"10rem"}},[a("router-link",{attrs:{to:{name:"board",params:{boardId:e.id}}}},[a("div",{staticClass:"card-body py-0"},[a("div",{staticClass:"text-primary"},[a("h1",{staticClass:"pb-4"},[a("u",[t._v(t._s(e.title))])])])])]),t._v(" "),a("button",{staticClass:"cursor btn btn-outline-danger py-0",attrs:{type:"button","aria-label":"Close"},on:{click:function(a){t.deleteBoard(e.id)}}},[t._v("Delete")])],1)])])})))]),t._v(" "),a("footer",{staticClass:"bg-dark text-light fixed-bottom p-3"},[t._v("Created By: Harrison Wheeler & Kayden Cooper")])])},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-prepend ml-md-5"},[a("button",{staticClass:"btn bg-transparent secondary text-light",attrs:{type:"submit"}},[t._v("Create Board")])])}],D={name:"boards",mounted(){this.$store.dispatch("getBoards")},data(){return{newBoard:{title:"",description:""}}},computed:{boards(){return this.$store.state.boards}},methods:{addBoard(){this.$store.dispatch("addBoard",this.newBoard),this.newBoard={title:"",description:""}},deleteBoard(t){this.$store.dispatch("deleteBoard",t)}}},I=D,O=(a("cafa"),Object(m["a"])(I,L,B,!1,null,"1ed75cee",null)),j=O.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"board container-fluid flex-column flex-grow-1 row justify-content-center bg-image"},[a("div",{staticClass:"col-12 bg-extra-light p-4"},[t.board.title?a("h1",[a("u",[t._v(t._s(t.board.title))])]):t._e(),t._v(" "),a("h1",[t._v(t._s(t.board.description))]),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.addlist(t.board.id)}}},[a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newList.title,expression:"newList.title"}],staticClass:"form-control border primary shadow-lg",attrs:{type:"text",placeholder:"Add List..."},domProps:{value:t.newList.title},on:{input:function(e){e.target.composing||t.$set(t.newList,"title",e.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn bg-transparent text-light shadow-lg",attrs:{type:"submit"},on:{click:function(e){t.addList(t.board.id)}}},[t._v("Add")])])])])]),t._v(" "),a("div",{staticClass:"col-12 flex-grow-1"},[a("div",{staticClass:"row text-primary p-1 overflow",staticStyle:{height:"70vh"}},t._l(t.lists,(function(t){return a("lists",{key:t.id,attrs:{listData:t}})})))])])},P=[],M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lists col-12 col-md-3 px-1 d-inline-block",attrs:{dropzone:"zone"},on:{dragover:function(t){t.preventDefault()},drop:function(e){e.preventDefault(),t.moveTask()}}},[a("div",{staticClass:"card rounded bg-light p-2 m-2 mb-5",staticStyle:{"min-height":"15rem"}},[a("h3",[t._v(t._s(t.listData.title))]),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.addTask(t.listData.id)}}},[a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask.description,expression:"newTask.description"}],staticClass:"form-control border primary shadow-lg",attrs:{type:"text",placeholder:"Add Task...."},domProps:{value:t.newTask.description},on:{input:function(e){e.target.composing||t.$set(t.newTask,"description",e.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append pb-4"},[a("button",{staticClass:"btn bg-transparent text-light shadow-lg",attrs:{type:"button"},on:{click:function(e){t.addTask(t.listData.id)}}},[t._v("Add")])])])]),t._v(" "),t._l(t.tasks,(function(e,s){return a("tasks",{key:e.id,attrs:{taskData:e,draggable:"true",listId:t.listData.id},on:{dragstart:function(a){t.reorderTask(e,s)}}})})),t._v(" "),a("button",{staticClass:"btn btn-outline-danger m-1 shadow-lg py-1",attrs:{type:"button"},on:{click:function(e){t.deleteList(t.listData.id)}}},[t._v("Delete List")])],2)])},A=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tasks row",on:{dragstart:function(e){t.moveTask()}}},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card m-1 shadow-lg bg-light p-2 border rounded"},[a("div",[a("button",{staticClass:"close text-right text-danger",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){t.deleteTask(t.taskData.id)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),a("h4",[t._v(t._s(t.taskData.description))]),t._v(" "),a("button",{staticClass:"btn bg-transparent text-light py-0",attrs:{type:"button","data-toggle":"modal","data-target":"#quickModal"+t.taskData.id}},[t._v("Comments")]),t._v(" "),a("commentModal",{attrs:{taskProp:t.taskData}})],1)])])},R=[],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment-modal row"},[a("div",{staticClass:"modal",attrs:{id:"quickModal"+t.taskProp.id,tabindex:"-1",role:"dialog"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content bg-secondary text-light"},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("form",{on:{submit:function(e){e.preventDefault(),t.addComment()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment.description,expression:"newComment.description"}],staticClass:"form-control text-wrap",attrs:{type:"text",placeholder:"Add Comment..."},domProps:{value:t.newComment.description},on:{input:function(e){e.target.composing||t.$set(t.newComment,"description",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn text-light py-0 btn-block bg-transparent",attrs:{type:"button"},on:{click:function(e){t.addComment()}}},[t._v("Submit")])]),t._v(" "),t._m(0),t._v(" "),t._l(t.taskProp.comments,(function(e){return a("Comments",{key:e.id,attrs:{commentedData:e,taskId:t.taskProp.id}})}))],2)]),t._v(" "),t._m(1)])])])])},U=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h5",{staticClass:"p-2"},[a("u",[t._v("Comments:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-danger py-1",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])}],W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comments col-12 text-dark"},[a("button",{staticClass:"close float-left text-danger",attrs:{type:"button","aria-label":"Close"},on:{click:t.deleteComment}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),a("p",[a("img",{staticClass:"img-fluid border rounded",attrs:{src:t.user.picture,width:"35vw",alt:""}}),t._v("\n    -\n    "+t._s(t.commentedData.description)+"\n  ")]),t._v(" "),a("hr")])},z=[],K={name:"comments",props:["commentedData","taskId"],data(){return{}},computed:{user(){return this.$store.state.user}},methods:{deleteComment(){this.$store.dispatch("deleteComment",{id:this.commentedData,taskId:this.taskId})}},components:{}},q=K,H=(a("2e3d"),Object(m["a"])(q,W,z,!1,null,"0cef8b5a",null)),J=H.exports,V={name:"comment-modal",props:["taskProp"],data(){return{newComment:{}}},computed:{},methods:{addComment(){this.$store.dispatch("addComment",{description:this.newComment.description,taskId:this.taskProp.id,listId:this.taskProp.listId}),this.newComment={}}},components:{Comments:J}},Y=V,F=(a("e172"),Object(m["a"])(Y,N,U,!1,null,"6afef085",null)),G=F.exports,X={name:"tasks",props:["taskData"],data(){return{}},computed:{},methods:{deleteTask(t){this.$store.dispatch("deleteTask",this.taskData)},moveTask(){this.$emit("dragstart")}},components:{CommentModal:G}},Q=X,Z=(a("a54e"),Object(m["a"])(Q,S,R,!1,null,"18df14d8",null)),tt=Z.exports,et={name:"lists",props:["listData"],data(){return{newTask:{}}},mounted(){this.$store.dispatch("getTasks",this.listData.id)},computed:{list(){return this.$store.state.lists},tasks(){return this.$store.state.tasks[this.listData.id]},tempTask(){return this.$store.state.tempTask}},methods:{addTask(t){this.$store.dispatch("addTask",{description:this.newTask.description,listId:t}),this.newTask={}},deleteList(t){this.$store.dispatch("deleteList",this.listData)},moveTask(){let t={newListId:this.listData.id,oldListId:this.tempTask.oldList.id,taskToMove:this.tempTask.task};this.$store.dispatch("moveTask",t)},reorderTask(t,e){this.$store.dispatch("setTaskToMove",{task:t,oldList:this.listData})}},components:{Tasks:tt}},at=et,st=(a("4d13"),Object(m["a"])(at,M,A,!1,null,"ad3f1ac4",null)),ot=st.exports,rt={name:"board",data(){return{newList:{}}},mounted(){this.$store.dispatch("getBoard",this.$route.params.boardId),this.$store.dispatch("getList",this.$route.params.boardId)},computed:{board(){return this.$store.state.activeBoard},lists(){return this.$store.state.lists}},props:["boardId"],methods:{addList(t){this.$store.dispatch("addList",{title:this.newList.title,boardId:t}),this.newList={}}},components:{Lists:ot}},it=rt,nt=(a("8dfd"),Object(m["a"])(it,E,P,!1,null,"5b4a2bb0",null)),dt=nt.exports;s["a"].use(C["a"]);var lt=new C["a"]({routes:[{path:"/",name:"home",component:$},{path:"/boards",name:"boards",component:j,beforeEnter:v["b"]},{path:"/boards/:boardId",name:"board",component:dt,beforeEnter:v["b"]},{path:"*",redirect:"/"}]}),ct=a("2f62");let ut=window.location.host.includes("localhost")?"//localhost:3000/":"/",mt=l.a.create({baseURL:ut+"api/",timeout:3e3,withCredentials:!0});var pt=mt,ht=(a("eebe"),{actions:{async addList({commit:t,dispatch:e},a){try{let t=await pt.post("lists",a);console.log(t.data),e("getList",a.boardId)}catch(s){console.error(s)}},async getList({commit:t,dispatch:e},a){try{let e=await pt.get("boards/"+a+"/lists/");t("setList",e.data)}catch(s){console.error(s)}},async deleteList({commit:t,dispatch:e},a){try{await pt.delete("lists/"+a.id);e("getList",a.boardId)}catch(s){console.error(s)}}}}),vt={actions:{async getTasks({commit:t,dispatch:e},a){try{let e=await pt.get("lists/"+a+"/tasks/");t("setTasks",{tasks:e.data,listId:a})}catch(s){console.error(s)}},async addTask({commit:t,dispatch:e},a){try{await pt.post("tasks",a);e("getTasks",a.listId)}catch(s){console.error(s)}},async deleteTask({commit:t,dispatch:e},a){try{await pt.delete("tasks/"+a.id);e("getTasks",a.listId)}catch(s){console.error(s)}},async addComment({commit:t,dispatch:e},a){try{await pt.post("tasks/"+a.taskId+"/comments",a);e("getTasks",a.listId)}catch(s){console.error(s)}},async deleteComment({commit:t,dispatch:e},a){try{await pt.delete("tasks/"+a.taskId+"/comments/"+a.id.id);e("getTasks",a.taskId)}catch(s){console.error(s)}},setTaskToMove({commit:t,dispatch:e},a){try{t("setTaskToMove",a)}catch(s){console.error(s)}},moveTask({commit:t,dispatch:e},a){try{a.taskToMove.listId=a.newListId,console.log(a);pt.put("tasks/"+a.taskToMove.id,a.taskToMove);e("getTasks",a.newListId),e("getTasks",a.oldListId)}catch(s){console.error(s)}}}};s["a"].use(ct["a"]);var bt=new ct["a"].Store({state:{user:{},boards:[],lists:{},tasks:{},activeBoard:{},tempTask:{}},mutations:{setUser(t,e){t.user=e},setBoards(t,e){t.boards=e},setActiveBoard(t,e){t.activeBoard=e},setList(t,e){t.lists=e},setTasks(t,e){s["a"].set(t.tasks,e.listId,e.tasks)},setTaskToMove(t,e){t.tempTask=e}},actions:{setBearer({},t){pt.defaults.headers.authorization=t},resetBearer(){pt.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await pt.get("/profile");t("setUser",e.data)}catch(e){console.error(e)}},getBoards({commit:t,dispatch:e}){pt.get("boards").then(e=>{t("setBoards",e.data)})},addBoard({commit:t,dispatch:e},a){pt.post("boards",a).then(t=>{e("getBoards")})},async getBoard({commit:t,dispatch:e},a){try{let e=await pt.get("boards/"+a);console.log(e.data),t("setActiveBoard",e.data)}catch(s){}},async deleteBoard({commit:t,dispatch:e},a){try{let s=await pt.delete("boards/"+a);console.log(s),t("setActiveBoard",{}),e("getBoards")}catch(s){console.error(s)}}},modules:{ListModule:ht,TaskModule:vt}});const ft="dev-m9h6hdbs.us.auth0.com",gt="https://kanbanapi.com",kt="WszWma6DRVDl6RJdNeoXnCR9shnF7UBt";s["a"].use(v["a"],{domain:ft,clientId:kt,audience:gt,onRedirectCallback:t=>{lt.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:lt,store:bt,render:function(t){return t(k)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),o=a.n(s);o.a},"600b":function(t,e,a){},"636c":function(t,e,a){},"84f8":function(t,e,a){},"8bce":function(t,e,a){},"8dfd":function(t,e,a){"use strict";var s=a("636c"),o=a.n(s);o.a},"9c0c":function(t,e,a){},"9ffd":function(t,e,a){},a54e:function(t,e,a){"use strict";var s=a("c365"),o=a.n(s);o.a},bfe3:function(t,e,a){},c365:function(t,e,a){},c8a6:function(t,e,a){"use strict";var s=a("84f8"),o=a.n(s);o.a},cafa:function(t,e,a){"use strict";var s=a("bfe3"),o=a.n(s);o.a},e172:function(t,e,a){"use strict";var s=a("8bce"),o=a.n(s);o.a}});