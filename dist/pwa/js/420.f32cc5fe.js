"use strict";(globalThis["webpackChunkalpha_app"]=globalThis["webpackChunkalpha_app"]||[]).push([[420],{3420:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});n(9665);var a=n(9835);const l=(0,a._)("div",null,[(0,a._)("div",{class:"text-h6 q-pa-md text-center"},"OTP Verification"),(0,a._)("p",null," Please enter the OTP code ")],-1),o={class:"flex flex-center"},s={class:"q-pa-md text-right"};function i(e,t,n,i,p,u){const r=(0,a.up)("q-icon"),c=(0,a.up)("v-otp-input"),d=(0,a.up)("q-card"),h=(0,a.up)("q-page"),m=(0,a.up)("q-page-container"),g=(0,a.up)("q-layout");return(0,a.wg)(),(0,a.j4)(g,{view:"hHh Lpr fFf"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(h,{class:"text-white bg-indigo-6"},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{class:"text-left text-yellow-8 q-ma-lg bg-indigo-6",name:"arrow_back_ios",size:"2.5em",onClick:t[0]||(t[0]=e=>this.$router.push("/signin"))}),(0,a.Wm)(d,{style:{"border-radius":"20px","min-height":"65%"},class:"q-pa-md fixed-bottom text-black text-center"},{default:(0,a.w5)((()=>[l,(0,a._)("div",o,[(0,a.Wm)(c,{ref:"otpInput","input-classes":"otp-input",separator:" ","num-inputs":4,"should-auto-focus":!0,"is-input-num":!0,conditionalClass:["one","two","three","four"],placeholder:["*","*","*","*"],onOnChange:e.handleOnChange,onOnComplete:e.handleOnComplete},null,8,["onOnChange","onOnComplete"])]),(0,a._)("div",s,[(0,a.Uk)(" Did't recieve? "),(0,a._)("span",{class:"text-indigo-6",style:{cursor:"pointer"},onClick:t[1]||(t[1]=t=>e.alert("OTP is not available yet please use email verification"))},"Resend")])])),_:1})])),_:1})])),_:1})])),_:1})}var p=n(499),u=n(8727);const r=(0,a.aZ)({name:"OtpPage",components:{VOtpInput:u.Z},methods:{handleOnComplete(e){console.log("OTP completed: ",e),alert("OTP is not available yet please use email verification")},handleOnChange(e){console.log("OTP changed: ",e)},clearInput(){this.$refs.otpInput.clearInput()}},setup(){const e=(0,p.iH)(null);return{otpInput:e}}});var c=n(1639),d=n(7605),h=n(2133),m=n(9885),g=n(2857),f=n(4458),O=n(9984),C=n.n(O);const v=(0,c.Z)(r,[["render",i]]),_=v;C()(r,"components",{QLayout:d.Z,QPageContainer:h.Z,QPage:m.Z,QIcon:g.Z,QCard:f.Z})}}]);