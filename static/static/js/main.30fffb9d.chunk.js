(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e){e.exports={Admins:{fields:["ID","First_Name","Last_Name","Email","Phone"],data:[{ID:"12",First_Name:"Narasimha",Last_Name:"Prasanna",Email:"narasimhaprasannahn@gmail.com",Phone:"9611818690"},{ID:"12",First_Name:"Narasimha",Last_Name:"Prasanna",Email:"narasimhaprasannahn@gmail.com",Phone:"9611818690"},{ID:"12",First_Name:"Narasimha",Last_Name:"Prasanna",Email:"narasimhaprasannahn@gmail.com",Phone:"9611818690"},{ID:"12",First_Name:"Narasimha",Last_Name:"Prasanna",Email:"narasimhaprasannahn@gmail.com",Phone:"9611818690"},{ID:"12",First_Name:"Narasimha",Last_Name:"Prasanna",Email:"narasimhaprasannahn@gmail.com",Phone:"9611818690"}]}}},51:function(e,t,a){e.exports=a.p+"static/media/postgres.84b54ac3.png"},67:function(e,t,a){e.exports=a(87)},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),s=a.n(l),i=a(12),o=a(9),c=a(14),u=a(13),d=a(22),m=a(15),p=a(117),h=a(119),b=a(120),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(p.a,{position:"static",color:"default",style:{width:"100%"}},r.a.createElement(h.a,null,r.a.createElement(b.a,{onClick:function(){e.props.handler(0)}},"Dashboards"),r.a.createElement("div",{style:{paddingLeft:"40px"}},r.a.createElement(b.a,{onClick:function(){e.props.handler(1)}},"Data Sources")," "),r.a.createElement("div",{style:{paddingLeft:"40px"}},r.a.createElement(b.a,{onClick:function(){e.props.handler(2)}},"Query")," "),r.a.createElement("div",{style:{paddingLeft:"40px"}},r.a.createElement(b.a,{variant:"contained",color:"primary"},"Create")," ")))}}]),t}(r.a.Component),f=a(137),E=a(63),g=a(121),y=a(139),S=a(133),j=a(138),O=a(135),N=a(122),w=a(134),C=a(136),D=a(123),x=a(125),k=a(127),P=a(128),M=a(124),T=a(126),I=a(129),_=a(130),H=a(51),F=a.n(H),L="http://192.168.1.17:5000";function A(e,t){fetch(L+"/testConnection",{headers:{"Content-Type":"application/json",Accept:"application/json"},mode:"cors",method:"post",body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){return t({serverErr:!1,payload:e})}).catch(function(e){return t({serverErr:!0,payload:e})})}var U=[{name:"Postgres",icon:"https://en.wikipedia.org/wiki/PostgreSQL#/media/File:Postgresql_elephant.svg"}];var G=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{margin:"20px auto",textAlign:"center"}},r.a.createElement(g.a,{variant:"h5"},"Connection established"),r.a.createElement("p",null,"Connection to the database has been established, now you can click on ",r.a.createElement("strong",null,"+ Create")," to save the data source."))}}]),t}(r.a.Component),J=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={dbSourceName:"",dbHost:"",dbPort:"",dbUser:"",dbPassword:"",dbName:"",errorMessage:" "},a.dbType=a.props.dbType,a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"testConnection",value:function(){var e=this;!function(e,t){for(var a in e)if(a!==t&&(""===e[a]||null===e[a]))return!1;return!0}(this.state,"dbPassword")?this.setState({errorMessage:"Provide all the parameters"}):A({dbType:this.dbType,dbMetadata:this.state},function(t){t.serverErr?e.setState({errorMessage:"Server connection failed..."}):t.payload.connectionErr?e.setState({errorMessage:"Data source not found, make sure parameters are correct."}):e.props.stepFunction(e.state)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(N.a,null),r.a.createElement("div",{style:{padding:"30px"}},r.a.createElement(C.a,{label:"Name of Data Source *",onChange:function(t){return e.setState({dbSourceName:t.target.value})},value:this.state.dbSourceName,margin:"normal",style:{width:"100%"}}),r.a.createElement(N.a,null),r.a.createElement("div",null,r.a.createElement(C.a,{label:"Database Host URL*",onChange:function(t){e.setState({dbHost:t.target.value})},value:this.state.dbHost,margin:"normal",style:{width:"100%"}})),r.a.createElement("div",null,r.a.createElement(C.a,{label:"Database Port Number *",value:this.state.dbPort,margin:"normal",onChange:function(t){e.setState({dbPort:t.target.value})},style:{width:"100%"}})),r.a.createElement("div",null,r.a.createElement(C.a,{label:"Database User Name *",value:this.state.dbUser,margin:"normal",onChange:function(t){e.setState({dbUser:t.target.value})},style:{width:"100%"}})),r.a.createElement("div",null,r.a.createElement(C.a,{label:"Database Password ",value:this.state.dbPassword,margin:"normal",onChange:function(t){e.setState({dbPassword:t.target.value})},type:"password",style:{width:"100%"}})),r.a.createElement("div",null,r.a.createElement(C.a,{label:"Database Name *",value:this.state.dbName,margin:"normal",onChange:function(t){e.setState({dbName:t.target.value})},style:{width:"100%"}})),r.a.createElement("div",{style:{margin:"20px auto"}},r.a.createElement(b.a,{variant:"contained",color:"primary",onClick:function(){e.testConnection()}},r.a.createElement(M.a,null),"  Configure")),r.a.createElement("div",{style:{margin:"10px auto"}},r.a.createElement("p",{style:{color:"red"}},this.state.errorMessage))))}}]),t}(r.a.Component),B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={selected:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{margin:"10px auto",width:"90%"}},r.a.createElement(E.a,{style:{padding:"10px"}},r.a.createElement("span",null,r.a.createElement(D.a,{placeholder:"Search for the database",style:{width:"90%"}}),r.a.createElement(x.a,{style:{margin:"10px auto"}},r.a.createElement(T.a,null)))),r.a.createElement("div",{style:{marginTop:"20px"}},r.a.createElement("div",null,U.map(function(t,a){return r.a.createElement(k.a,{style:{margin:"10px auto"}},r.a.createElement(P.a,null,r.a.createElement("span",null,r.a.createElement(g.a,{variant:"h6"},r.a.createElement(I.a,null),"  ",t.name," ",r.a.createElement(x.a,{onClick:function(){e.props.stepFunction({dbName:t.name})}},r.a.createElement(_.a,null))))))}))))}}]),t}(r.a.Component),W=a(131),Q=a(132);var R=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={dbSourceName:"",dbHost:"",dbPort:"",dbUser:"",dbPassword:"",dbName:"",errorMessage:" "},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"refresh",value:function(){this.setState({dbSourceName:this.props.db.dbSourceName,dbHost:this.props.db.dbHost,dbPort:this.props.db.dbPort,dbUser:this.props.db.dbUser,dbPassword:this.props.db.dbPassword,dbName:this.props.db.dbName}),this.dbType=this.props.dbType,this._id=this.props._id,this.userID=this.props.userID}},{key:"componentWillMount",value:function(){this.refresh()}},{key:"testConnection",value:function(){var e=this;!function(e,t){for(var a in e)if(a!==t&&(""===e[a]||null===e[a]))return!1;return!0}(this.state,"dbPassword")?this.setState({errorMessage:"Provide all the parameters"}):(console.log(this.state),A({dbType:this.dbType,dbMetadata:this.state},function(t){t.serverErr?e.setState({errorMessage:"Server connection failed..."+JSON.stringify(t)}):t.payload.connectionErr?e.setState({errorMessage:"Data source not found, make sure parameters are correct."}):alert("Data Source test passed!")}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(N.a,null),r.a.createElement("div",{style:{padding:"30px"}},r.a.createElement(C.a,{label:"Name of Data Source *",onChange:function(t){return e.setState({dbSourceName:t.target.value})},value:this.state.dbSourceName,margin:"normal",style:{width:"100%"}}),r.a.createElement(N.a,null),r.a.createElement("div",null,r.a.createElement(C.a,{label:"Database Host URL*",onChange:function(t){e.setState({dbHost:t.target.value})},value:this.state.dbHost,margin:"normal",style:{width:"100%"}})),r.a.createElement("div",null,r.a.createElement(C.a,{label:"Database Port Number *",value:this.state.dbPort,margin:"normal",onChange:function(t){e.setState({dbPort:t.target.value})},style:{width:"100%"}})),r.a.createElement("div",null,r.a.createElement(C.a,{label:"Database User Name *",value:this.state.dbUser,margin:"normal",onChange:function(t){e.setState({dbUser:t.target.value})},style:{width:"100%"}})),r.a.createElement("div",null,r.a.createElement(C.a,{label:"Database Password ",value:this.state.dbPassword,margin:"normal",onChange:function(t){e.setState({dbPassword:t.target.value})},type:"password",style:{width:"100%"}})),r.a.createElement("div",null,r.a.createElement(C.a,{label:"Database Name *",value:this.state.dbName,margin:"normal",onChange:function(t){e.setState({dbName:t.target.value})},style:{width:"100%"}})),r.a.createElement("div",{style:{margin:"20px auto"}},r.a.createElement(b.a,{variant:"contained",color:"primary",onClick:function(){var t,a;t={_id:e._id,dbType:e.dbType,userID:e.userID,dbMetadata:e.state},a=function(t){t.serverErr?alert("Server crashed"):(alert("Updated Data Source!"),e.refresh())},fetch(L+"/updateDataSource",{headers:{"Content-Type":"application/json",Accept:"application/json"},mode:"cors",method:"post",body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){return a({serverErr:!1,payload:e})}).catch(function(e){return a({serverErr:!0,payload:e})})},style:{margin:"20px"}},r.a.createElement(M.a,null),"  Save"),r.a.createElement(b.a,{variant:"contained",color:"primary",onClick:function(){var t,a;t={_id:e._id,dbType:e.dbType,userID:e.userID,dbMetadata:e.state},a=function(t){e.props.toggleHandler({})},fetch(L+"/deleteDataSource",{headers:{"Content-Type":"application/json",Accept:"application/json"},mode:"cors",method:"post",body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){return a({serverErr:!1,payload:e})}).catch(function(e){return a({serverErr:!0,paylaod:e})})},style:{marginLeft:"20px"}},r.a.createElement(W.a,null),"  Delete"),r.a.createElement(b.a,{variant:"contained",color:"primary",onClick:function(){e.testConnection()},style:{marginLeft:"20px"}},r.a.createElement(Q.a,null),"  Test Connection")),r.a.createElement("div",{style:{margin:"10px auto"}},r.a.createElement("p",{style:{color:"red"}},this.state.errorMessage)))))}}]),t}(r.a.Component),V=["Select","Configure","Test"],q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={canShow:!1,step:0,dbName:"",dbInfo:{},userID:a.props.userID},a.incrementStep=a.incrementStep.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"incrementStep",value:function(e){switch(this.state.step){case 0:this.setState({dbName:e.dbName});break;case 1:this.setState({dbInfo:e})}this.setState({step:this.state.step+1})}},{key:"createDataSource",value:function(e){var t,a,n=this;t=e,a=function(e){e.serverErr?alert("Server Error"):e.payload.connectionErr?alert("Creating Data source failed. Try again later"):n.props.closeModal()},fetch(L+"/createDataSource",{headers:{"Content-Type":"application/json",Accept:"application/json"},mode:"cors",method:"post",body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){return a({serverErr:!1,payload:e})}).catch(function(e){return a({serverErr:!0,payload:e})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(f.a,{open:this.props.canShow,style:{position:"absolute",overflow:"scroll",height:"100%",display:"block"}},r.a.createElement(E.a,{style:{width:"40%",margin:"10px auto",height:"850px",position:"relative"}},r.a.createElement("div",{style:{padding:"20px"}},r.a.createElement(g.a,{variant:"h6"},"Create a new Data Source")),r.a.createElement("div",{style:{margin:"20px auto"}},r.a.createElement(y.a,{activeStep:this.state.step},V.map(function(e,t){return r.a.createElement(S.a,{key:e},r.a.createElement(j.a,null,e))}))),r.a.createElement("div",{style:{marginTop:"20px"}},0===this.state.step&&r.a.createElement(B,{stepFunction:this.incrementStep}),1===this.state.step&&r.a.createElement(J,{stepFunction:this.incrementStep,dbType:this.state.dbName}),2===this.state.step&&r.a.createElement(G,{stepFunction:this.incrementStep})),r.a.createElement("div",{style:{position:"absolute",bottom:"0px",right:"0px",padding:"30px"}},r.a.createElement("div",{style:{textAlign:"right"}},r.a.createElement(b.a,{variant:"contained",color:"primary",onClick:function(){e.props.closeModal()}},"Cancel"),(0===this.state.step||1===this.state.step)&&r.a.createElement(b.a,{style:{marginLeft:"20px"},variant:"contained",color:"primary",disabled:!0},r.a.createElement(w.a,null)," Create"),2===this.state.step&&r.a.createElement(b.a,{style:{marginLeft:"20px"},variant:"contained",color:"primary",onClick:function(){var t={dbType:e.state.dbName,dbMetadata:e.state.dbInfo,userID:e.state.userID};e.createDataSource(t)}},r.a.createElement(w.a,null)," Save"))))))}}]),t}(r.a.Component),z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(O.a,{container:!0,spacing:3},this.props.dataSources.map(function(t,a){return r.a.createElement(O.a,{item:!0,xs:4,onClick:function(){e.props.toggleHandler(t)}},r.a.createElement(E.a,{style:{margin:"5px auto",padding:"10px"}},r.a.createElement(O.a,{container:!0,spacing:3},r.a.createElement(O.a,{item:!0,xs:4,style:{padding:"10px",textAlign:"center"}},r.a.createElement("img",{src:F.a,width:"50px",height:"50px",style:{margin:"10px auto"}})),r.a.createElement(O.a,{item:!0,xs:8,style:{padding:"10px"}},r.a.createElement(g.a,{variant:"h6"},t.dbMetadata.dbSourceName),r.a.createElement(N.a,null),r.a.createElement(g.a,{variant:"caption"},t.dbMetadata.dbHost+":"+t.dbMetadata.dbPort),r.a.createElement("div",null,r.a.createElement(g.a,{variant:"caption"},t.dbMetadata.dbName))))))})))}}]),t}(r.a.Component),K=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={canShowModal:!1,userID:"12345",dataSources:[],toggleGrid:!1,viewData:{}},a.toggleHandler=a.toggleHandler.bind(Object(d.a)(a)),a.closeModal=a.closeModal.bind(Object(d.a)(a)),a.turnOffGird=a.turnOffGird.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"refreshInformation",value:function(){var e,t,a=this;e={userID:this.state.userID},t=function(e){console.log(e),e.serverErr||a.setState({dataSources:e.payload})},fetch(L+"/getDataSource",{headers:{"Content-Type":"application/json",Accept:"application/json"},mode:"cors",method:"post",body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){return t({serverErr:!1,payload:e})}).catch(function(e){return t({serverErr:!0,payload:e})})}},{key:"turnOffGird",value:function(){this.setState({toggleGrid:!1}),this.setState({viewData:{}}),this.refreshInformation()}},{key:"toggleHandler",value:function(e){this.setState({viewData:e}),this.setState({toggleGrid:!this.state.toggleGrid})}},{key:"componentWillMount",value:function(){this.refreshInformation()}},{key:"closeModal",value:function(){this.setState({canShowModal:!1}),this.refreshInformation()}},{key:"openModal",value:function(){this.setState({canShowModal:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("div",{style:{width:"70%",textAlign:"left",margin:"20px auto"}},r.a.createElement(g.a,{variant:"h5"},"Data Sources"),r.a.createElement(N.a,null),r.a.createElement("div",{style:{marginTop:"30px",paddingLeft:"20px"}},r.a.createElement(b.a,{variant:"contained",color:"primary",onClick:function(){e.openModal()}},r.a.createElement(w.a,null)," New Data Source")),r.a.createElement("div",{style:{marginTop:"30px"}},r.a.createElement(E.a,{style:{padding:"40px"}},!this.state.toggleGrid&&r.a.createElement(z,{dataSources:this.state.dataSources,toggleHandler:this.toggleHandler}),this.state.toggleGrid&&r.a.createElement(R,{_id:this.state.viewData._id,userID:this.state.userID,db:this.state.viewData.dbMetadata,toggleHandler:this.turnOffGird})))),r.a.createElement(q,{canShow:this.state.canShowModal,closeModal:this.closeModal,userID:this.state.userID}))}}]),t}(r.a.Component),X=(a(85),a(86),a(47)),Y=["Products","Customers","Admins","Transactions"],Z=["Total Weekly Sales","Total Daily Sales","Total Daily Customers"],$=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sidebar_dbview"},r.a.createElement("div",{className:"nav flex-column nav-pills",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"},r.a.createElement("p",null,r.a.createElement("strong",null,"Tables")),Y.map(function(e,t){return r.a.createElement("a",{className:"nav-link"+(0===t?" active":" "),id:"v-pills-home-tab","data-toggle":"pill",role:"tab","aria-controls":"v-pills-home","aria-selected":"true"},e)}),r.a.createElement("p",null,r.a.createElement("strong",null,"Views")),Z.map(function(e,t){return r.a.createElement("a",{className:"nav-link"+(0===t?" active":" "),id:"v-pills-home-tab","data-toggle":"pill",href:"#v-pills-home",role:"tab","aria-controls":"v-pills-home","aria-selected":"true"},e)})))}}]),t}(r.a.Component),ee=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={fetchFrom:"Admins"},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{margin:"10px auto",padding:"10px"}},r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,X[this.state.fetchFrom].fields.map(function(e,t){return r.a.createElement("th",null,e)}))),r.a.createElement("tbody",null,X[this.state.fetchFrom].data.map(function(t,a){return r.a.createElement("tr",null,X[e.state.fetchFrom].fields.map(function(e,a){return r.a.createElement("td",null,t[e])}))}))))}}]),t}(r.a.Component),te=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-1"},r.a.createElement($,null)),r.a.createElement("div",{className:"col-11"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("button",{type:"button",class:"btn btn-primary"}," + New Visualization")),r.a.createElement("div",null,r.a.createElement(ee,null)))))))}}]),t}(r.a.Component),ae=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Hello 1")}}]),t}(r.a.Component),ne=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{margin:"30px auto",padding:"10px"}},0===this.props.choice&&r.a.createElement(ae,null),1===this.props.choice&&r.a.createElement(K,null),2===this.props.choice&&r.a.createElement(te,null)))}}]),t}(r.a.Component),re=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={componetToShow:0},a.handler=a.handler.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handler",value:function(e){console.log(e),this.setState({componetToShow:e})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,{handler:this.handler}),r.a.createElement(ne,{choice:this.state.componetToShow}))}}]),t}(r.a.Component);document.getElementById("body_main").style.backgroundColor="#FAFAFA",document.getElementById("body_main").style.height="1000px",s.a.render(r.a.createElement(re,null),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.30fffb9d.chunk.js.map