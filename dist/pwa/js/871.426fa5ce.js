"use strict";(globalThis["webpackChunkalpha_app"]=globalThis["webpackChunkalpha_app"]||[]).push([[871],{6021:(e,a,t)=>{t.d(a,{r:()=>n});var l=t(1809);const n=(0,l.Q_)({id:"counter",state:()=>({username:null,accounts:[],counter:1,user:[{id:1,email:"peter.p@gmail.com",phone:"099-123-4567",username:"Peter",password:"zxc123**",accounts:[{id:1234567890,acount_name:"Perter",balance:4e5},{id:1098765432,acount_name:"Perter W.",balance:2e5}]},{id:2,email:"minisong@gmail.com",phone:"099-234-4567",username:"Mini",password:"zxc123**",accounts:[{id:1432789056,acount_name:"Mini",balance:4e4},{id:9496782134,acount_name:"Mini W.",balance:2e5}]}]}),actions:{getDataById(e){for(var a=0;a<this.user.length;a++)if(e===this.user[a].id)return this.user[a];return"not found"},setUsername(e){this.username=e,console.log(`set username ${e}`)},setAccount(e){this.accounts=e;for(var a=0;a<this.accounts.length;a++)console.log(`set accounts ${e[a].id} ${e[a].balance}`)}}})},2218:(e,a,t)=>{t.r(a),t.d(a,{default:()=>P});var l=t(9835),n=t(6970);const s=["src"],o={class:""},i={style:{"font-size":"15px"}},u={class:"q-pt-md",style:{"font-size":"30px"}},c={class:"q-pa-md"},d={class:"float-right"},r=(0,l._)("div",null,"100",-1),m=(0,l._)("div",null,"500",-1),p=(0,l._)("div",null,"+",-1),g=(0,l._)("div",{class:"q-pt-lg"},"Note",-1);function h(e,a,t,h,w,v){const b=(0,l.up)("q-virtual-scroll"),_=(0,l.up)("q-card-section"),f=(0,l.up)("q-card"),q=(0,l.up)("q-carousel-slide"),V=(0,l.up)("q-carousel"),k=(0,l.up)("q-select"),x=(0,l.up)("q-input"),y=(0,l.up)("q-avatar"),z=(0,l.up)("q-btn"),W=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(W,{class:"q-pa-md"},{default:(0,l.w5)((()=>[(0,l._)("section",null,[(0,l.Uk)(" FAVARITE "),(0,l._)("span",null,"("+(0,n.zw)(e.friendList.length)+")",1),(0,l.Wm)(b,{items:e.friendList,"virtual-scroll-horizontal":""},{default:(0,l.w5)((({item:e,index:a})=>[((0,l.wg)(),(0,l.iD)("div",{key:a,class:(0,n.C_)([e.class,"q-pa-md text-center"])},[(0,l._)("img",{src:e.avatar,style:{"border-radius":"20px",width:"80px",height:"70px","object-fit":"cover"}},null,8,s),(0,l._)("div",null,(0,n.zw)(e.name),1)],2))])),_:1},8,["items"])]),(0,l._)("section",null,[(0,l.Wm)(V,{modelValue:e.slide,"onUpdate:modelValue":a[0]||(a[0]=a=>e.slide=a),"transition-prev":"slide-right","transition-next":"slide-left",swipeable:"",animated:"","control-color":"grey-8",navigation:"",padding:"",height:"180px"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.accounts.length,(a=>((0,l.wg)(),(0,l.j4)(q,{key:a,name:a},{default:(0,l.w5)((()=>[(0,l._)("div",o,[(0,l.Wm)(f,{style:{"border-radius":"20px"},class:"bg-indigo-6 text-yellow-7"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l._)("div",i," **** "+(0,n.zw)(e.accounts[a-1].account_number),1),(0,l._)("div",u," $ "+(0,n.zw)(e.accounts[a-1].balance.toLocaleString()),1)])),_:2},1024)])),_:2},1024)])])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])]),(0,l._)("section",c,[(0,l._)("div",null,[(0,l.Uk)(" TO "),(0,l.Wm)(k,{modelValue:e.selected,"onUpdate:modelValue":a[1]||(a[1]=a=>e.selected=a),options:e.options,label:"Choose a bank for transfer",outlined:"",rounded:"",class:"q-mt-sm",style:{width:"100%"}},null,8,["modelValue","options"]),(0,l.Uk)(" Account number "),(0,l.Wm)(x,{modelValue:e.accountNumber,"onUpdate:modelValue":a[2]||(a[2]=a=>e.accountNumber=a),standout:"",rounded:"",class:"q-mt-sm",style:{width:"100%"},label:"Enter account number to transfer"},null,8,["modelValue"]),(0,l.Uk)(" Amount "),(0,l.Wm)(x,{modelValue:e.amount,"onUpdate:modelValue":a[3]||(a[3]=a=>e.amount=a),standout:"",rounded:"",class:"q-mt-sm",style:{width:"100%"},label:"Enter amount to transfer",hint:"Remaining limit today: 10,000,000.00"},null,8,["modelValue"]),(0,l._)("div",d,[(0,l.Wm)(y,{size:"40px","font-size":"small",class:"bg-yellow-8 q-ml-sm",onClick:a[4]||(a[4]=a=>e.amount=100)},{default:(0,l.w5)((()=>[r])),_:1}),(0,l.Wm)(y,{size:"40px","font-size":"small",class:"bg-yellow-8 q-ml-sm",onClick:a[5]||(a[5]=a=>e.amount=500)},{default:(0,l.w5)((()=>[m])),_:1}),(0,l.Wm)(y,{size:"40px","font-size":"small",class:"bg-yellow-8 q-ml-sm"},{default:(0,l.w5)((()=>[p])),_:1})]),g,(0,l.Wm)(x,{modelValue:e.note,"onUpdate:modelValue":a[6]||(a[6]=a=>e.note=a),standout:"",rounded:"",class:"q-mt-sm",style:{width:"100%"},label:"Enter personal note to transfer"},null,8,["modelValue"]),(0,l.Wm)(z,{modelValue:e.preview,"onUpdate:modelValue":a[7]||(a[7]=a=>e.preview=a),class:"q-mt-lg full-width",color:"green-12","text-color":"indigo-6",unelevated:"",to:"/preview",label:"Preview","no-caps":"",style:{"border-radius":"8px",height:"40px"}},null,8,["modelValue"])])])])),_:1})}var w=t(6021),v=t(499);const b=[{name:"The Rock",avatar:"http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTEpvaNuV1GBPcVY8iaFtGNKbXoEL7AYUvL2p2c-weTPf-QRNVLpvquxRw9P4RU5Wyp"},{name:"Jack",avatar:"https://static.wikia.nocookie.net/reddeadredemption/images/4/4d/Jackmarston1907.png"},{name:"Tom Smith",avatar:"https://www.uncut.co.uk/wp-content/uploads/2015/02/editors2tomsmith130607w.jpg"},{name:"John",avatar:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/John_Cena_July_2018.jpg/1200px-John_Cena_July_2018.jpg"}],_=(0,l.aZ)({name:"TransferPage",setup(){return{friendList:b,database:(0,w.r)(),slide:(0,v.iH)(1),accounts:[],accoutLength:0,options:[{image:"https://cdn.quasar.dev/img/avatar.png",label:"SCB"},{image:"https://cdn.quasar.dev/img/avatar.png",label:"KTB"},{image:"https://cdn.quasar.dev/img/avatar.png",label:"GSB"},{image:"https://cdn.quasar.dev/img/avatar.png",label:"UOB"}],selected:(0,v.iH)(""),amount:(0,v.iH)(),accountNumber:(0,v.iH)(),note:(0,v.iH)(""),preview:(0,v.iH)(!1)}},created(){this.accounts=this.database.accounts,this.accoutLength=this.accounts.length}});var f=t(1639),q=t(9885),V=t(8978),k=t(960),x=t(1694),y=t(4458),z=t(3190),W=t(2233),U=t(6611),C=t(1357),Q=t(8879),Z=t(9984),T=t.n(Z);const L=(0,f.Z)(_,[["render",h]]),P=L;T()(_,"components",{QPage:q.Z,QVirtualScroll:V.Z,QCarousel:k.Z,QCarouselSlide:x.Z,QCard:y.Z,QCardSection:z.Z,QSelect:W.Z,QInput:U.Z,QAvatar:C.Z,QBtn:Q.Z})}}]);