(globalThis["webpackChunkalpha_app"]=globalThis["webpackChunkalpha_app"]||[]).push([[218],{6021:(t,a,e)=>{"use strict";e.d(a,{r:()=>i});var s=e(1809);const i=(0,s.Q_)({id:"counter",state:()=>({username:null,accounts:[],counter:1,user:[]}),actions:{getDataById(t){for(var a=0;a<this.user.length;a++)if(t===this.user[a].id)return this.user[a];return"not found"},setUsername(t){this.username=t,console.log(`set username ${t}`)},setAccount(t){this.accounts=t;for(var a=0;a<this.accounts.length;a++)console.log(`set accounts ${t[a].id} ${t[a].balance}`)},setSignedInUser(t){this.user=t,console.log(`set user ${t}`)}}})},7218:(t,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>H});var s=e(9835),i=e(6970),l=e(744),o=e.n(l),c=e(8680),n=e.n(c);const r={class:"row"},A={class:"col-12 q-mt-md"},p={class:"float-left q-px-lg text-white"},d=(0,s._)("p",{class:"flex flex-center"},[(0,s._)("img",{src:o(),style:{width:"50px"}}),(0,s._)("span",{class:"text-black q-pl-md",style:{"font-size":"30px"}},"ALP")],-1),m={style:{height:"80px"}},u=(0,s._)("img",{src:n()},null,-1),g=(0,s._)("span",{class:"text-black"},"TO",-1),h={class:"flex flex-center"},f=(0,s._)("span",{class:"text-black q-pl-md",style:{"font-size":"30px"}},"SCB",-1),S={style:{"font-size":"20px"},class:"float-right q-px-lg col"},b={style:{"font-size":"20px"},class:"float-right q-px-lg col"},E={class:"text-white text-right"},w=(0,s._)("div",{style:{height:"80px"},class:"float-right"},null,-1),x=(0,s._)("div",{style:{"font-size":"20px"},class:"float-right q-px-lg col"},[(0,s._)("span",null,"Arthur Morgan"),(0,s._)("p",{class:"text-black text-right"},"888-888888-8")],-1),B={class:"q-pa-lg fixed-bottom"},W=(0,s._)("div",{style:{"font-size":"20px"}},[(0,s._)("span",{class:"text-left"},"AMOUNT"),(0,s._)("span",{class:"float-right"},"10,000.0")],-1),R=(0,s._)("div",{style:{"font-size":"20px"}},[(0,s._)("span",{class:"text-left"},"FEE"),(0,s._)("span",{class:"float-right"},"0.0")],-1);function L(t,a,e,l,o,c){const n=(0,s.up)("q-icon"),L=(0,s.up)("q-avatar"),T=(0,s.up)("q-title"),k=(0,s.up)("q-toolbar-title"),U=(0,s.up)("q-toolbar"),I=(0,s.up)("q-header"),j=(0,s.up)("q-btn"),N=(0,s.up)("q-card"),v=(0,s.up)("q-separator"),C=(0,s.up)("q-page-container"),G=(0,s.up)("q-layout");return(0,s.wg)(),(0,s.j4)(G,{view:"hHh Lpr fFf"},{default:(0,s.w5)((()=>[(0,s.Wm)(I,{class:"bg-white text-dark"},{default:(0,s.w5)((()=>[(0,s.Wm)(U,null,{default:(0,s.w5)((()=>[(0,s.Wm)(k,null,{default:(0,s.w5)((()=>[(0,s.Wm)(L,null,{default:(0,s.w5)((()=>[(0,s.Wm)(n,{onClick:a[0]||(a[0]=t=>this.$router.go(-1)),name:"prarrow_back_iosint"})])),_:1}),(0,s.Wm)(T,{class:"text-weight-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)("Review")])),_:1})])),_:1})])),_:1})])),_:1}),(0,s.Wm)(C,{class:"q-ma-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(N,{style:{"border-radius":"15px",background:"linear-gradient(180deg, #445cb4 19.79%, #ffffff 73.44%)"}},{default:(0,s.w5)((()=>[(0,s._)("div",r,[(0,s._)("div",A,[(0,s._)("div",p,[(0,s.Uk)(" FROM "),d,(0,s._)("div",m,[(0,s.Wm)(n,{style:{height:"70px",width:"auto"}},{default:(0,s.w5)((()=>[u])),_:1})]),g,(0,s._)("p",h,[(0,s.Wm)(L,{color:"purple"}),f])]),(0,s._)("div",S,(0,i.zw)(t.database.username),1),(0,s._)("div",b,[(0,s._)("div",E,(0,i.zw)(t.database.accounts[0].account_number.toString().slice(0,3)+"-"+t.database.accounts[0].account_number.toString().slice(3,9)+"-"+t.database.accounts[0].account_number.toString().slice(8)),1),w]),x]),(0,s._)("div",B,[(0,s.Wm)(j,{class:"q-mt-xl q-mb-md full-width",color:"green-12","text-color":"indigo-6",unelevated:"",to:"/",label:"Confirm","no-caps":"",style:{"border-radius":"8px",height:"40px"}})])])])),_:1}),(0,s.Wm)(v,{class:"q-mt-md q-mb-md",color:"black"}),W,(0,s.Wm)(v,{class:"q-mt-md q-mb-md",color:"gray"}),R,(0,s.Wm)(v,{class:"q-mt-md q-mb-md",color:"gray"})])),_:1})])),_:1})}var T=e(6021),k=e(499);const U=[{name:"The Rock",avatar:"http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTEpvaNuV1GBPcVY8iaFtGNKbXoEL7AYUvL2p2c-weTPf-QRNVLpvquxRw9P4RU5Wyp"},{name:"Jack",avatar:"https://static.wikia.nocookie.net/reddeadredemption/images/4/4d/Jackmarston1907.png"},{name:"Tom Smith",avatar:"https://www.uncut.co.uk/wp-content/uploads/2015/02/editors2tomsmith130607w.jpg"},{name:"John",avatar:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/John_Cena_July_2018.jpg/1200px-John_Cena_July_2018.jpg"}],I=(0,s.aZ)({name:"TransferPage",setup(){return{friendList:U,database:(0,T.r)(),slide:(0,k.iH)(1),accounts:[],accoutLength:0,selected:(0,k.iH)(""),amount:(0,k.iH)(),name:(0,k.iH)()}},created(){this.name=this.database.username,this.accounts=this.database.accounts,this.accoutLength=this.accounts.length}});var j=e(1639),N=e(7605),v=e(6602),C=e(1663),G=e(1973),z=e(1357),M=e(2857),V=e(2133),Y=e(4458),q=e(8879),K=e(926),J=e(9984),Q=e.n(J);const F=(0,j.Z)(I,[["render",L]]),H=F;Q()(I,"components",{QLayout:N.Z,QHeader:v.Z,QToolbar:C.Z,QToolbarTitle:G.Z,QAvatar:z.Z,QIcon:M.Z,QPageContainer:V.Z,QCard:Y.Z,QBtn:q.Z,QSeparator:K.Z})},8680:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAtCAYAAACnF+sSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEOSURBVHgB7Za9UcNAEIXfOw+5S6AEGAbNEHGqAFMBcge04EoQFRgq8JLCMLgEl+DcWMudbCMLVvgnILoXaFar9z7dnRQsYUg/fB9LjkPpVx0+oVcNeS7zn15nAVBh0IRr5ACfKCxrF+DU6Pb3BxygBEiABEiABEiABPgXAHlj9K5Na7zom/fYDBQro4etKVSf17XwUoT67gsoH3CMVHMH7XzbbjncubAJwbFa4sXxQsqwlBEOlXLETEp+37/mZVzSXuEKj8wmRSybz3ii94invFvTTbgFqIfInuahnP0RnmGht9uN1o9UQxadkBjOeSWtZzSM4Tz8GRwnaIbLOaoQzuTXFk3AFmS8Dg+tcNQXtE1Ubq3WJvwAAAAASUVORK5CYII="},744:t=>{t.exports="data:image/png;base64,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"}}]);