(function(){"use strict";var e={12:function(e,t,s){var r=s(144),n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("TheHeader"),t("TheMain"),t("TheFooter")],1)},o=[],i=function(){var e=this,t=e._self._c;return t("header",{staticClass:"header"},[t("div",{staticClass:"header__wrapper container"},[t("img",{attrs:{src:s(817),alt:"logo"}}),t("div",{staticClass:"header__buttons"},[t("TheButton",[e._v("Users")]),t("TheButton",[e._v("Sign up")])],1)])])},a=[],l=function(){var e=this,t=e._self._c;return t("button",{staticClass:"button",class:{disabled:e.disabled},style:{width:e.width},attrs:{disabled:e.disabled},on:{click:function(t){return e.$emit("click",t)}}},[e._t("default")],2)},c=[],u={name:"TheButtonComponent",props:{disabled:{type:Boolean,default:!1},width:{type:String,default:""}}},h=u,p=s(1),d=(0,p.Z)(h,l,c,!1,null,"54821c50",null),m=d.exports,f={components:{TheButton:m},name:"TheHeaderComponent"},g=f,v=(0,p.Z)(g,i,a,!1,null,"4e0ff6ee",null),_=v.exports,C=function(){var e=this,t=e._self._c;return t("main",{staticClass:"main"},[t("ThePreloader",{attrs:{show:e.getLoading}}),t("section",{staticClass:"descr"},[t("div",{staticClass:"descr__background"},[t("div",{staticClass:"descr__main"},[t("h1",{staticClass:"descr__main__title container"},[e._v(" Test assignment for front-end developer ")]),t("p",{staticClass:"descr__main__text container"},[e._v(" What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving. ")]),t("TheButton",[e._v("Sign up")])],1)])]),t("section",{staticClass:"get container"},[t("h2",[e._v("Working with GET request")]),e._l(e.getUsers,(function(e,s){return t("TheCard",{key:s,attrs:{photo:e.photo,name:e.name,position:e.position,email:e.email,phone:e.phone}})})),t("TheButton",{staticClass:"get__button",attrs:{width:"120px"},on:{click:e.loadMoreCard}},[e._v("Show more")])],2),t("section",{staticClass:"post"},[t("h2",[e._v(e._s(e.showCurrentText))]),e.getSuccessImg?t("img",{attrs:{src:s(106),alt:"success"}}):t("TheForm")],1)],1)},b=[],k=s(629),T=function(){var e=this,t=e._self._c;return t("div",{staticClass:"card"},[t("TheImage",{attrs:{image:e.photo}}),t("TheTooltip",{attrs:{text:e.name}},[t("span",{staticClass:"card__name"},[e._v(e._s(e.name))])]),t("div",{staticClass:"card__descr"},[t("span",[e._v(e._s(e.position))]),t("br"),t("TheTooltip",{attrs:{text:e.email}},[t("span",[e._v(e._s(e.email))])]),t("br"),t("span",[e._v(e._s(e.phone))]),t("br")],1)],1)},y=[],x=function(){var e=this,t=e._self._c;return t("img",{ref:"image",staticClass:"image",attrs:{src:e.image,alt:"img-user"}})},P=[],w={name:"TheImageComponent",props:{image:{type:String,default:()=>s(114)}}},S=w,U=(0,p.Z)(S,x,P,!1,null,"54eff782",null),E=U.exports,M=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tooltip-container"},[e._t("default"),t("div",{staticClass:"tooltip"},[t("span",{staticClass:"text"},[e._v(e._s(e.text))])])],2)},q=[],F={name:"TheTooltipComponent",props:{text:{type:String,required:!1}}},Z=F,L=(0,p.Z)(Z,M,q,!1,null,"e55c76f2",null),I=L.exports,N={name:"TheCardComponent",props:{photo:{type:String,default:"",required:!0},name:{type:String,default:"",required:!0},position:{type:String,default:"",required:!0},email:{type:String,default:"",required:!0},phone:{type:String,default:"",required:!0}},components:{TheImage:E,TheTooltip:I}},$=N,B=(0,p.Z)($,T,y,!1,null,"39145552",null),O=B.exports,j=function(){var e=this,t=e._self._c;return e.show?t("div",{staticClass:"loader"}):e._e()},X=[],z={name:"ThePreloaderComponent",props:{show:{type:Boolean,default:!1}}},G=z,A=(0,p.Z)(G,j,X,!1,null,"553b18e2",null),D=A.exports,H=function(){var e=this,t=e._self._c;return t("form",{staticClass:"form container"},[t("div",{staticClass:"form__inputs"},[t("TheInput",{attrs:{label:"Your name",type:"text",errorMsg:e.userNameError},on:{input:e.checkNameUser},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),t("TheInput",{attrs:{label:"Email",type:"email",errorMsg:e.emailError},on:{input:e.checkEmail},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),t("TheInput",{attrs:{label:"Phone",type:"tel",hintMsg:"+38 (XXX) XXX - XX - XX",errorMsg:e.phoneError},on:{input:e.checkPhone},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),t("TheCheckbox",{staticClass:"form__checkbox",on:{position:e.setPosition}},[e._v(" Select your position ")]),t("TheUpload",{staticClass:"form__upload",attrs:{placeholder:e.filePlaceholder,errorMsg:e.fileError,file:e.file},on:{change:e.fileCheck}}),t("TheButton",{attrs:{disabled:e.buttonActive},on:{click:function(t){return t.preventDefault(),e.formValidate.apply(null,arguments)}}},[e._v(" Sign Up ")])],1)},Y=[],W=function(){var e=this,t=e._self._c;return t("div",{staticClass:"input-container"},[t("input",{ref:"input",class:{"is-error":e.errorMsg},attrs:{type:e.type,id:"input"},domProps:{value:e.value},on:{focus:e.addFocusClass,input:function(t){return e.$emit("input",t.target.value)}}}),t("label",{staticClass:"label",class:{"is-focus":e.isFocus,"is-error":e.errorMsg},attrs:{for:"input"}},[e._v(" "+e._s(e.label)+" ")]),e.errorMsg?t("span",{staticClass:"hint-text",class:{"is-error":e.errorMsg}},[e._v(" "+e._s(e.errorMsg)+" ")]):e._e(),e.errorCheck?t("span",{staticClass:"hint-text"},[e._v(" "+e._s(e.hintMsg)+" ")]):e._e()])},V=[],J={name:"TheInputComponent",props:{label:{type:String,default:"",required:!0},errorMsg:{type:String,default:"",required:!1},hintMsg:{type:String,default:"",required:!1},type:{type:String,default:"",required:!0},model:{prop:"value",event:"input"},value:String},data(){return{isFocus:!1}},computed:{errorCheck(){return!(this.errorMsg.length>0)&&this.hintMsg.length>0}},methods:{addFocusClass(){this.isFocus=!0},close(e){this.$el.contains(e.target)||(""===this.$refs.input.value?this.isFocus=!1:this.isFocus=!0)}},mounted(){document.addEventListener("click",this.close),this.isError&&(this.isFocus=!0)},beforeDestroy(){document.removeEventListener("click",this.close)}},R=J,K=(0,p.Z)(R,W,V,!1,null,"2540691a",null),Q=K.exports,ee=function(){var e=this,t=e._self._c;return t("div",{staticClass:"checkbox__wrapper"},[t("span",[e._t("default")],2),e._l(e.getUserPositions,(function(s,r){return t("div",{key:r,staticClass:"checkbox"},[t("input",{staticClass:"checkbox-input",attrs:{type:"radio",id:s.id,name:"position"},domProps:{checked:s.checked},on:{click:function(t){return e.changePos(s.id)}}}),t("label",{staticClass:"checkbox-label",attrs:{for:s.id}},[e._v(" "+e._s(s.name)+" ")])])}))],2)},te=[],se={name:"TheCheckboxComponent",computed:{...(0,k.Se)(["getUserPositions"])},methods:{changePos(e){e?this.$emit("position",e):this.$emit("position",1)}},mounted(){this.changePos()}},re=se,ne=(0,p.Z)(re,ee,te,!1,null,"09fbd1cc",null),oe=ne.exports,ie=function(){var e=this,t=e._self._c;return t("div",{staticClass:"upload-container"},[t("div",{staticClass:"upload-container__main"},[t("label",{staticClass:"upload-label",class:{"is-error":e.errorMsg},attrs:{for:"upload"}},[e._v(" Upload "),t("input",{ref:"upload",staticClass:"upload",attrs:{type:"file",id:"upload"},on:{change:function(t){return e.$emit("change",t)}}})]),t("span",{staticClass:"upload-text",class:{active:e.file,"is-error":e.errorMsg},on:{click:function(t){return e.$refs.upload.click()}}},[e._v(" "+e._s(e.placeholder)+" ")])]),t("div",{staticClass:"upload-container__hint"},[t("span",{staticClass:"hint-text",class:{"is-error":e.errorMsg}},[e._v(" "+e._s(e.errorMsg)+" ")])])])},ae=[],le={name:"TheUploadComponent",props:{placeholder:{type:String,default:""},errorMsg:{type:String,default:""},file:{type:File,default:File}}},ce=le,ue=(0,p.Z)(ce,ie,ae,!1,null,"16f2fd74",null),he=ue.exports,pe={name:"TheFormComponent",components:{TheInput:Q,TheCheckbox:oe,TheUpload:he,TheButton:m},data(){return{userName:"",userNameError:"",email:"",emailError:"",phone:"",phoneError:"",position:"",filePlaceholder:"Upload your photo",file:null,fileError:""}},computed:{buttonActive(){return""===this.userName||""===this.email||""===this.phone||null===this.file}},methods:{...(0,k.nv)(["requestUserPositions","requestPostUser"]),setPosition(e){this.position=e},formValidate(){if(this.checkNameUser(),this.checkEmail(),this.checkPhone(),this.fileCheck(),""!==this.userNameError&&""!==this.emailError&&""!==this.phoneError&&""!==this.fileError);else{const e=new FormData;e.append("position_id",this.position),e.append("name",this.userName),e.append("email",this.email),e.append("phone",this.phone),e.append("photo",this.file),this.requestPostUser(e)}},checkNameUser(){const e=/^[A-Z][a-z]+\s[A-Z][a-z]+$/gm;return e.test(this.userName)?this.userNameError="":this.userNameError="Your name should be like in the example: Max Smith!"},checkEmail(){const e=/^\S+@\S+\.\S+$/;return e.test(this.email)?this.emailError="":this.emailError="You have entered an invalid email address!"},checkPhone(){const e=/^\+?3?8?(0\d{9})$/;return e.test(this.phone)?this.phoneError="":this.phoneError="You have entered an invalid phone number!"},fileCheck(e){try{if(null!==this.file)return!1;if(!e.target.files[0].name.match(/\.(jpg|jpeg)$/i))return this.fileError="File extension must be .jpg, .jpeg";const t=e.target.files[0].size/1024/1024;if(t>5)return this.fileError="File size can't be > 5MiB";this.fileError="",this.file=e.target.files[0],this.filePlaceholder=e.target.files[0].name}catch(t){this.fileError="Please select a file"}}},mounted(){this.requestUserPositions()}},de=pe,me=(0,p.Z)(de,H,Y,!1,null,"a0c34dda",null),fe=me.exports,ge={name:"TheMainComponent",components:{TheCard:O,TheButton:m,TheForm:fe,ThePreloader:D},data(){return{page:1,text:""}},computed:{...(0,k.Se)(["getUsers","getLoading","getSuccessImg"]),showCurrentText(){return this.getSuccessImg?"User successfully registered":"Working with POST request"}},methods:{...(0,k.nv)(["requestGetUsers","requestGetToken"]),loadMoreCard(){const e=++this.page;this.page=e,this.requestGetUsers(e)}},async created(){const e=await fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=100"),t=await e.json();console.log(t)},mounted(){this.requestGetToken(),this.requestGetUsers(this.page)}},ve=ge,_e=(0,p.Z)(ve,C,b,!1,null,"9f291e12",null),Ce=_e.exports,be=function(){var e=this,t=e._self._c;return t("footer",{staticClass:"footer"})},ke=[],Te={name:"TheFooterComponent"},ye=Te,xe=(0,p.Z)(ye,be,ke,!1,null,"109aa043",null),Pe=xe.exports,we={name:"App",components:{TheHeader:_,TheMain:Ce,TheFooter:Pe}},Se=we,Ue=(0,p.Z)(Se,n,o,!1,null,null,null),Ee=Ue.exports,Me=s(594);const qe=Me.Z.create({baseURL:"https://frontend-test-assignment-api.abz.agency/api/v1/"});r.ZP.use(k.ZP);var Fe=new k.ZP.Store({state:{users:[],userPositions:null,isLoading:!1,token:null,successImg:!1},getters:{getUsers(e){return e.users},getUserPositions(e){return e.userPositions},getLoading(e){return e.isLoading},getSuccessImg(e){return e.successImg}},mutations:{setUsers(e,t){e.users=[...e.users,...t]},setUserPosition(e,t){e.userPositions=t},setToken(e,t){e.token=t}},actions:{async requestGetToken({commit:e,state:t}){try{t.isLoading=!0;const s=await qe.get("token"),r=s.data;e("setToken",r.token),t.isLoading=!1}catch(s){console.log(s.message)}},async requestGetUsers({commit:e,state:t},s){try{t.isLoading=!0;const r=await qe.get(`users?page=${s}&count=6`),n=r.data;e("setUsers",n.users),t.isLoading=!1}catch(r){console.log(r.message),t.isLoading=!1}},async requestUserPositions({commit:e,state:t}){try{t.isLoading=!0;const s=await qe.get("positions "),r=s.data,n=r.positions.map(((e,t)=>{let s=!1;return 0===t?(s=!0,{...e,checked:s}):{...e,checked:s}}));e("setUserPosition",n),t.isLoading=!1}catch(s){console.log(s.message)}},async requestPostUser({state:e},t){try{e.isLoading=!0;const s=await qe.post("users",t,{headers:{Token:e.token,"Content-Type":"multipart/form-data"}});console.log(s),!0===s.data.success?e.successImg=!0:e.successImg=!1,e.isLoading=!1}catch(s){console.log(s.message)}}},modules:{}});r.ZP.config.productionTip=!1,new r.ZP({store:Fe,render:e=>e(Ee)}).$mount("#app")},817:function(e,t,s){e.exports=s.p+"img/Logo.0902afb7.svg"},114:function(e,t,s){e.exports=s.p+"img/photo-cover.4a3d2f37.svg"},106:function(e,t,s){e.exports=s.p+"img/success-image.1b73a76d.svg"}},t={};function s(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,r,n,o){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],o=e[u][2];for(var a=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(s.O).every((function(e){return s.O[e](r[l])}))?r.splice(l--,1):(a=!1,o<i&&(i=o));if(a){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,n,o]}}(),function(){s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.p="/abz-test-task/"}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,i=r[0],a=r[1],l=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(n in a)s.o(a,n)&&(s.m[n]=a[n]);if(l)var u=l(s)}for(t&&t(r);c<i.length;c++)o=i[c],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(u)},r=self["webpackChunkabz_test_task"]=self["webpackChunkabz_test_task"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(12)}));r=s.O(r)})();
//# sourceMappingURL=app.bf04526e.js.map