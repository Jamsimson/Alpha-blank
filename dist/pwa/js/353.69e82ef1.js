"use strict";(globalThis["webpackChunkalpha_app"]=globalThis["webpackChunkalpha_app"]||[]).push([[353],{6353:(e,l,a)=>{a.r(l),a.d(l,{default:()=>$});var s=a(9835),o=a(6970);const n={class:"q-gutter-sm"},u={class:"q-px-sm"};function t(e,l,a,t,d,p){const m=(0,s.up)("q-radio"),i=(0,s.up)("qrcode-vue"),c=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(c,{class:"q-pa-md"},{default:(0,s.w5)((()=>[(0,s._)("div",n,[(0,s.Wm)(m,{modelValue:t.shape,"onUpdate:modelValue":l[0]||(l[0]=e=>t.shape=e),val:"line",label:"Line"},null,8,["modelValue"]),(0,s.Wm)(m,{modelValue:t.shape,"onUpdate:modelValue":l[1]||(l[1]=e=>t.shape=e),val:"rectangle",label:"Rectangle"},null,8,["modelValue"]),(0,s.Wm)(m,{modelValue:t.shape,"onUpdate:modelValue":l[2]||(l[2]=e=>t.shape=e),val:"ellipse",label:"Ellipse"},null,8,["modelValue"]),(0,s.Wm)(m,{modelValue:t.shape,"onUpdate:modelValue":l[3]||(l[3]=e=>t.shape=e),val:"polygon",label:"Polygon"},null,8,["modelValue"])]),(0,s._)("div",u,[(0,s.Uk)(" Your selection is: "),(0,s._)("strong",null,(0,o.zw)(t.shape),1)]),(0,s._)("div",null,[(0,s.Wm)(i,{value:t.shape,size:d.size,level:"H"},null,8,["value","size"])])])),_:1})}var d=a(499),p=a(4858),m=a.n(p),i=a(6021);const c={setup(){return{shape:(0,d.iH)("line")}},data(){return{database:(0,i.r)(),x:"",value:"",message:null,size:120,accounts:[]}},components:{QrcodeVue:m()},mounted(){const e=this.$route.params.id;console.log(e),this.value=`${e};123456768`;var l=this.database.getDataById(2);console.log(`${l.username} ${l.email}`);for(var a=0;a<l.accounts.length;a++)console.log(`${l.accounts[a].id}`)},methods:{getMessageQr(){this.message=`${this.model}`,console.log(`${this.message}`)}}};var r=a(1639),h=a(9885),g=a(53),v=a(9984),V=a.n(v);const b=(0,r.Z)(c,[["render",t]]),$=b;V()(c,"components",{QPage:h.Z,QRadio:g.Z})}}]);