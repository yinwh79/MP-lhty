(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/userCenter/userCenter"],{"0112":function(t,e,n){"use strict";(function(t){n("b5e5"),n("921b");r(n("66fd"));var e=r(n("5833"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},5833:function(t,e,n){"use strict";n.r(e);var r=n("d6d0"),o=n("a8ab");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("6934");var i=n("2877"),u=Object(i["a"])(o["default"],r["a"],r["b"],!1,null,"23890d11",null);e["default"]=u.exports},6934:function(t,e,n){"use strict";var r=n("b1e2"),o=n.n(r);o.a},"73d9":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62");function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){a(t,e,n[e])})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i={data:function(){return{stateTab:!1,showToLogin:!1,showLoginOut:!1,menuList:[{id:1,title:"我的活动",path:"/pages/userCenter/myActivities/myActivities"},{id:2,title:"俱乐部",path:"/pages/userCenter/clubList/clubList"},{id:4,title:"新俱乐部入驻",path:"/pages/userCenter/clubEntry/clubEntry"},{id:5,title:"常见问题",path:"/pages/userCenter/commonProblem/commonProblem"}],userData:{}}},computed:o({},(0,r.mapState)(["hasLogin","userInfo"])),onShow:function(){t.getStorageSync("userInfo").userId>0?this.stateTab=!0:(this.stateTab=!1,this.showToLogin=!0),this.stateTab&&this.getInfo()},methods:o({},(0,r.mapMutations)(["logout"]),{getInfo:function(){var e=this;this.$http.get({url:"/v1/rest/personalCenter/personalCenter",data:{userId:t.getStorageSync("userInfo").userId}}).then(function(n){console.log(n),200==n.status&&(e.userData=n.data,102==n.data.role||103==n.data.role?e.menuList=[{id:1,title:"我的活动",path:"/pages/userCenter/myActivities/myActivities"},{id:2,title:"俱乐部",path:"/pages/userCenter/clubList/clubList"},{id:3,title:"管理中心",path:"/pages/userCenter/managementCenter/managementCenter"},{id:4,title:"新俱乐部入驻",path:"/pages/userCenter/clubEntry/clubEntry"},{id:5,title:"常见问题",path:"/pages/userCenter/commonProblem/commonProblem"}]:e.menuList=[{id:1,title:"我的活动",path:"/pages/userCenter/myActivities/myActivities"},{id:2,title:"俱乐部",path:"/pages/userCenter/clubList/clubList"},{id:4,title:"新俱乐部入驻",path:"/pages/userCenter/clubEntry/clubEntry"},{id:5,title:"常见问题",path:"/pages/userCenter/commonProblem/commonProblem"}],t.setStorageSync("userType",n.data.role),n.data.clubId&&t.setStorageSync("clubId",n.data.clubId))})},toMyWallet:function(e){t.navigateTo({url:"/pages/userCenter/myWallet/myWallet?totalMoney="+e})},toLogin:function(){t.navigateTo({url:"/pages/login/login"}),this.showToLogin=!1},doLoginout:function(){this.showLoginOut=!0},handleConfirm:function(){this.logout(),t.removeStorage({key:"isLogin"}),t.removeStorage({key:"clubId"}),this.userData={},this.showToLogin=!0},handleCancel:function(){this.showLoginOut=!1},editUserInfo:function(){t.navigateTo({url:"/pages/userInfo/editUserInfo/editUserInfo?userId="+t.getStorageSync("userInfo").userId})}})};e.default=i}).call(this,n("543d")["default"])},a8ab:function(t,e,n){"use strict";n.r(e);var r=n("73d9"),o=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=o.a},b1e2:function(t,e,n){},d6d0:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})}},[["0112","common/runtime","common/vendor"]]]);