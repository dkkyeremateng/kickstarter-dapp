
          window.__NEXT_REGISTER_PAGE('/campaigns/requests', function() {
            var comp = module.exports=webpackJsonp([6],{750:function(e,t,r){e.exports=r(751)},751:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(37),u=n(a),l=r(75),s=n(l),o=r(40),d=n(o),p=r(20),c=n(p),f=r(4),i=n(f),m=r(5),v=n(m),h=r(6),E=n(h),q=r(7),C=n(q),y=r(0),R=n(y),_=r(44),b=r(103),x=n(b),k=r(107),w=n(k),g=r(49),A=n(g),T=r(56),F=r(753),I=n(F),z=function(e){function t(){return(0,i.default)(this,t),(0,E.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}return(0,C.default)(t,e),(0,v.default)(t,[{key:"renderRequestRows",value:function(){var e=this;return this.props.requests.map(function(t,r){var n=t[3],a=parseInt(t[4]);return t[1]=parseFloat(A.default.fromWei(t[1],"ether")),t[4]=parseInt(t[4])+"/"+e.props.approversCount,t.splice(-2,1),R.default.createElement(I.default,{request:t,id:r,key:r,approvalsCount:a,approversCount:e.props.approversCount,complated:n,address:e.props.address})})}},{key:"render",value:function(){var e=_.Table.Header,t=_.Table.Row,r=_.Table.HeaderCell,n=_.Table.Body;return R.default.createElement(x.default,null,R.default.createElement("h3",null,"Request List"),R.default.createElement(T.Link,{route:"/campaigns/"+this.props.address+"/requests/new"},R.default.createElement("a",null,R.default.createElement(_.Button,{primary:!0,floated:"right",style:{marginBottom:10}},"Add Request"))),R.default.createElement(_.Table,null,R.default.createElement(e,null,R.default.createElement(t,null,R.default.createElement(r,null,"ID"),R.default.createElement(r,null,"Description"),R.default.createElement(r,null,"Amount (wei)"),R.default.createElement(r,null,"Recipient"),R.default.createElement(r,null,"Approval Count"),R.default.createElement(r,null,"Approve"),R.default.createElement(r,null,"Finalize"))),R.default.createElement(n,null,this.renderRequestRows())),R.default.createElement("div",null,"Found ",this.props.requestsCount," requests"))}}],[{key:"getInitialProps",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,d.default)(u.default.mark(function e(t){var r,n,a,l,o;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query.address,n=(0,w.default)(r),e.next=4,n.getRequestsCount();case 4:return a=e.sent,a=parseInt(a),e.next=8,n.approversCount();case 8:return l=e.sent,l=parseInt(l),e.next=12,s.default.all(Array(a).fill().map(function(e,t){return n.requests(t)}));case 12:return o=e.sent,e.abrupt("return",{address:r,requests:o,requestsCount:a,approversCount:l});case 14:case"end":return e.stop()}},e,this)}));return e}()}]),t}(y.Component);t.default=z},753:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(37),u=n(a),l=r(40),s=n(l),o=r(20),d=n(o),p=r(4),c=n(p),f=r(5),i=n(f),m=r(6),v=n(m),h=r(7),E=n(h),q=r(0),C=n(q),y=r(44),R=r(56),_=r(107),b=n(_),x=r(49),k=n(x),w=function(e){function t(){var e,r,n,a,l=this;(0,c.default)(this,t);for(var o=arguments.length,p=Array(o),f=0;f<o;f++)p[f]=arguments[f];return r=n=(0,v.default)(this,(e=t.__proto__||(0,d.default)(t)).call.apply(e,[this].concat(p))),n.onApprove=(0,s.default)(u.default.mark(function e(){var t,r;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.default)(n.props.address);case 2:return t=e.sent,e.next=5,k.default.eth.accounts;case 5:return r=e.sent,e.next=8,t.approveRequest(n.props.id,{from:r[0]});case 8:R.Router.replaceRoute("/campaigns/"+n.props.address+"/requests");case 9:case"end":return e.stop()}},e,l)})),n.onFinalize=(0,s.default)(u.default.mark(function e(){var t,r;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.default)(n.props.address);case 2:return t=e.sent,e.next=5,k.default.eth.accounts;case 5:return r=e.sent,e.next=8,t.finalizedRequest(n.props.id,{from:r[0]});case 8:R.Router.replaceRoute("/campaigns/"+n.props.address+"/requests");case 9:case"end":return e.stop()}},e,l)})),a=r,(0,v.default)(n,a)}return(0,E.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=y.Table.Row,t=y.Table.Cell,r=this.props,n=r.id,a=r.request,u=r.approversCount,l=r.complated,s=r.approvalsCount,o=s>u/2,d=a.map(function(e,r){return C.default.createElement(t,{key:r},e)});return C.default.createElement(e,{disabled:l,positive:o&&!l},C.default.createElement(t,null,n+1),d,C.default.createElement(t,null,l?null:C.default.createElement(y.Button,{color:"green",basic:!0,onClick:this.onApprove},"Approve")),C.default.createElement(t,null,l?null:C.default.createElement(y.Button,{color:"teal",basic:!0,onClick:this.onFinalize},"Finalize")))}}]),t}(q.Component);t.default=w}},[750]);
            return { page: comp.default }
          })
        