"use strict";(globalThis["webpackChunkalpha_app"]=globalThis["webpackChunkalpha_app"]||[]).push([[831],{6831:(e,l,a)=>{a.r(l),a.d(l,{default:()=>ee});a(9665);var t=a(9835),s=a(6970);const c={class:"section1"},o={class:"row",style:{height:"200px"}},i={class:"col"},n={class:"col q-pa-md text-h5 text-weight-bold",style:{height:"74px"}},r={class:"col q-pa-md text-h6 text-weight-medium",style:{height:"74px"}},d={class:"col flex flex-center"},u=["src"],h=(0,t._)("br",null,null,-1),x={class:"section2"},m=(0,t._)("div",{class:"col-6 flex flex-center text-h6 text-weight-bold",style:{color:"#445cb4"}}," Account balance ",-1),_=(0,t._)("div",{class:"vertical"},null,-1),f={class:"col-6 flex flex-center text-h5 text-weight-bolder"},g=(0,t._)("br",null,null,-1),p={class:"section3"},v=(0,t._)("div",{class:""},"ADS",-1),b={class:"section4"},w={class:"row q-pa-md text-subtitle2",style:{height:"200px"}},y={class:"col-4"},$={class:"col flex flex-center"},k=(0,t._)("div",{class:"col flex flex-center"},"Balance",-1),q={class:"col-4"},W={class:"col flex flex-center"},z=(0,t._)("div",{class:"col flex flex-center"},"Pay Bill",-1),Z={class:"col-4"},C={class:"col flex flex-center"},D=(0,t._)("div",{class:"col flex flex-center"},"My QRcode",-1),P={class:"col-4"},Q={class:"col flex flex-center"},A=(0,t._)("div",{class:"col flex flex-center"},"add",-1),I={class:"col-4"},S={class:"col flex flex-center"},j=(0,t._)("div",{class:"col flex flex-center"},"add",-1),B={class:"col-4"},H={class:"col flex flex-center"},L=(0,t._)("div",{class:"col flex flex-center"},"add",-1);function U(e,l,a,U,V,E){const J=(0,t.up)("q-card"),M=(0,t.up)("q-carousel-slide"),O=(0,t.up)("q-carousel"),T=(0,t.up)("q-btn"),Y=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(Y,{class:"q-pa-md"},{default:(0,t.w5)((()=>[(0,t._)("section",c,[(0,t._)("div",o,[(0,t._)("div",i,[(0,t._)("div",n," Hi "+(0,s.zw)(e.name),1),(0,t._)("div",r,(0,s.zw)(e.currentDate()),1)]),(0,t._)("div",d,[(0,t._)("img",{src:e.profile_image,alt:"",style:{height:"130px",width:"30","border-radius":"20px","object-fit":"cover"}},null,8,u)])])]),h,(0,t._)("section",x,[(0,t.Wm)(J,{class:"my-balance bg-warning",style:{"border-radius":"20px"}},{default:(0,t.w5)((()=>[(0,t._)("div",{class:"row",style:{height:"90px"},onClick:l[0]||(l[0]=e=>this.$router.push("/account"))},[m,_,(0,t._)("div",f," $ "+(0,s.zw)(e.balance.toLocaleString()),1)])])),_:1})]),g,(0,t._)("section",p,[(0,t.Wm)(O,{modelValue:e.slide,"onUpdate:modelValue":l[1]||(l[1]=l=>e.slide=l),"transition-prev":"slide-right","transition-next":"slide-left",swipeable:"",animated:"","control-color":"grey-8",navigation:"",height:"220px"},{default:(0,t.w5)((()=>[((0,t.wg)(),(0,t.iD)(t.HY,null,(0,t.Ko)(3,(e=>(0,t.Wm)(M,{key:e,name:e},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{class:"my-button bg-grey-13 q-pa-md no-shadow",style:{height:"150px"}},{default:(0,t.w5)((()=>[v])),_:1})])),_:2},1032,["name"]))),64))])),_:1},8,["modelValue"])]),(0,t._)("section",b,[(0,t.Wm)(J,{class:"my-shotcut bg-grey-2 no-shadow",style:{"border-radius":"20px"}},{default:(0,t.w5)((()=>[(0,t._)("div",w,[(0,t._)("div",y,[(0,t._)("div",$,[(0,t.Wm)(T,{round:"",to:"/account",size:"md","text-color":"dark",color:"green-12",icon:"account_balance_wallet"})]),k]),(0,t._)("div",q,[(0,t._)("div",W,[(0,t.Wm)(T,{round:"",to:"/test",size:"md","text-color":"dark",color:"green-12",icon:"receipt_long"})]),z]),(0,t._)("div",Z,[(0,t._)("div",C,[(0,t.Wm)(T,{to:"/my-qrcode",round:"",size:"md","text-color":"dark",color:"green-12",icon:"qr_code_2"})]),D]),(0,t._)("div",P,[(0,t._)("div",Q,[(0,t.Wm)(T,{round:"",size:"md","text-color":"dark",color:"green-12",icon:"add"})]),A]),(0,t._)("div",I,[(0,t._)("div",S,[(0,t.Wm)(T,{round:"",size:"md","text-color":"dark",color:"green-12",icon:"add"})]),j]),(0,t._)("div",B,[(0,t._)("div",H,[(0,t.Wm)(T,{round:"",size:"md","text-color":"dark",color:"green-12",icon:"add"})]),L])])])),_:1})])])),_:1})}var V=a(6021),E=a(8109),J=a(435);const M=(0,t.aZ)({name:"HomePage",async mounted(){(0,J.Aj)(this.$auth,(async e=>{if(e){this.database.setSignedInUser(e);const a=e.email;var l=(0,E.IO)((0,E.hJ)(this.$db,"users"),(0,E.ar)("email","==",a));const t=await(0,E.PL)(l);t.forEach((async e=>{console.log(`${e.id} => ${e.data()}`),this.name=e.data().name,this.profile_image=e.data().profile_image,this.database.setImageProfile(this.profile_image),l=(0,E.IO)((0,E.hJ)(this.$db,"accounts"),(0,E.ar)("owner","==",e.id));const a=await(0,E.PL)(l);a.forEach((e=>{console.log(`${e.id} => ${e.data()}`),this.account.push(e.data()),this.balance+=e.data().balance,this.database.setUsername(this.name),this.database.setAccount(this.account)}))}))}else this.$router.push("start")}))},data(){return{database:(0,V.r)(),name:"",account:[],balance:0,slide:1,profile_image:""}},methods:{currentDate(){const e=new Date,l=`${e.getDate()}/${e.getMonth()+1}/${e.getFullYear()}`;return l}}});var O=a(1639),T=a(9885),Y=a(4458),F=a(960),K=a(1694),R=a(8879),G=a(9984),N=a.n(G);const X=(0,O.Z)(M,[["render",U]]),ee=X;N()(M,"components",{QPage:T.Z,QCard:Y.Z,QCarousel:F.Z,QCarouselSlide:K.Z,QBtn:R.Z})}}]);