"use strict";(globalThis["webpackChunkalpha_app"]=globalThis["webpackChunkalpha_app"]||[]).push([[688],{6688:(e,l,t)=>{t.r(l),t.d(l,{default:()=>V});t(9665);var c=t(9835),a=t(6970);const s={class:"section1"},o={class:"row",style:{height:"200px"}},n={class:"col"},d={class:"col q-pa-md text-h5 text-weight-bold",style:{height:"74px"}},i={class:"col q-pa-md text-h6 text-weight-medium",style:{height:"74px"}},r=(0,c._)("div",{class:"col flex flex-center"},[(0,c._)("img",{src:"img/user icon.png",alt:"",style:{height:"130px"}})],-1),u=(0,c._)("br",null,null,-1),h={class:"section2"},x=(0,c._)("div",{class:"col-6 flex flex-center text-h6 text-weight-bold",style:{color:"#445cb4"}}," Account balance ",-1),_=(0,c._)("div",{class:"vertical"},null,-1),m={class:"col-6 flex flex-center text-h5 text-weight-bolder"},f=(0,c._)("br",null,null,-1),g={class:"section3"},v=(0,c._)("div",{class:""},"advert",-1),p=(0,c._)("br",null,null,-1),b={class:"section4"},w={class:"row q-pa-md text-subtitle2",style:{height:"200px"}},y={class:"col-4"},$={class:"col flex flex-center"},k=(0,c._)("div",{class:"col flex flex-center"},"Balance",-1),q={class:"col-4"},z={class:"col flex flex-center"},W=(0,c._)("div",{class:"col flex flex-center"},"Pay Bill",-1),P={class:"col-4"},Z={class:"col flex flex-center"},C=(0,c._)("div",{class:"col flex flex-center"},"My QRcode",-1),D={class:"col-4"},Q={class:"col flex flex-center"},A=(0,c._)("div",{class:"col flex flex-center"},"add",-1),B={class:"col-4"},I={class:"col flex flex-center"},L=(0,c._)("div",{class:"col flex flex-center"},"add",-1),j={class:"col-4"},E={class:"col flex flex-center"},H=(0,c._)("div",{class:"col flex flex-center"},"add",-1);function J(e,l,t,J,M,O){const S=(0,c.up)("q-card"),T=(0,c.up)("q-btn"),U=(0,c.up)("q-page");return(0,c.wg)(),(0,c.j4)(U,{class:"q-pa-md"},{default:(0,c.w5)((()=>[(0,c._)("section",s,[(0,c._)("div",o,[(0,c._)("div",n,[(0,c._)("div",d," Hi "+(0,a.zw)(e.name),1),(0,c._)("div",i,(0,a.zw)(e.currentDate()),1)]),r])]),u,(0,c._)("section",h,[(0,c.Wm)(S,{class:"my-balance bg-warning"},{default:(0,c.w5)((()=>[(0,c._)("div",{class:"row",style:{height:"90px"},onClick:l[0]||(l[0]=e=>this.$router.push("/account"))},[x,_,(0,c._)("div",m," $ "+(0,a.zw)(e.balance.toLocaleString()),1)])])),_:1})]),f,(0,c._)("section",g,[(0,c.Wm)(S,{class:"my-button bg-grey-13 q-pa-md",style:{height:"200px"}},{default:(0,c.w5)((()=>[v])),_:1})]),p,(0,c._)("section",b,[(0,c.Wm)(S,{class:"my-shotcut"},{default:(0,c.w5)((()=>[(0,c._)("div",w,[(0,c._)("div",y,[(0,c._)("div",$,[(0,c.Wm)(T,{round:"",to:"/account",size:"md","text-color":"dark",color:"green-12",icon:"account_balance_wallet"})]),k]),(0,c._)("div",q,[(0,c._)("div",z,[(0,c.Wm)(T,{round:"",to:"/test",size:"md","text-color":"dark",color:"green-12",icon:"receipt_long"})]),W]),(0,c._)("div",P,[(0,c._)("div",Z,[(0,c.Wm)(T,{to:"/my-qrcode",round:"",size:"md","text-color":"dark",color:"green-12",icon:"qr_code_2"})]),C]),(0,c._)("div",D,[(0,c._)("div",Q,[(0,c.Wm)(T,{round:"",size:"md","text-color":"dark",color:"green-12",icon:"add"})]),A]),(0,c._)("div",B,[(0,c._)("div",I,[(0,c.Wm)(T,{round:"",size:"md","text-color":"dark",color:"green-12",icon:"add"})]),L]),(0,c._)("div",j,[(0,c._)("div",E,[(0,c.Wm)(T,{round:"",size:"md","text-color":"dark",color:"green-12",icon:"add"})]),H])])])),_:1})])])),_:1})}var M=t(6021),O=t(8109),S=t(435);const T=(0,c.aZ)({name:"HomePage",async mounted(){(0,S.Aj)(this.$auth,(async e=>{if(e){this.database.setSignedInUser(e);const t=e.email;var l=(0,O.IO)((0,O.hJ)(this.$db,"users"),(0,O.ar)("email","==",t));const c=await(0,O.PL)(l);c.forEach((async e=>{console.log(`${e.id} => ${e.data()}`),this.name=e.data().name,l=(0,O.IO)((0,O.hJ)(this.$db,"accounts"),(0,O.ar)("owner","==",e.id));const t=await(0,O.PL)(l);t.forEach((e=>{console.log(`${e.id} => ${e.data()}`),this.account.push(e.data()),this.balance+=e.data().balance,this.database.setUsername(this.name),this.database.setAccount(this.account)}))}))}else this.$router.push("start")}))},data(){return{database:(0,M.r)(),name:"",account:[],balance:0}},methods:{currentDate(){const e=new Date,l=`${e.getDate()}/${e.getMonth()+1}/${e.getFullYear()}`;return l}}});var U=t(1639),F=t(9885),R=t(4458),Y=t(8879),G=t(9984),K=t.n(G);const N=(0,U.Z)(T,[["render",J]]),V=N;K()(T,"components",{QPage:F.Z,QCard:R.Z,QBtn:Y.Z})}}]);