(window.webpackJsonp=window.webpackJsonp||[]).push([["mapp-intelligence"],{"4wo+":function(e,t,n){"use strict";n.r(t);var r=n("FGIj"),o=n("gHbT");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,s(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(r=[{key:"init",value:function(){this.subscribeEvents()}},{key:"hiddenInputWithJSONCreator",value:function(e,t){console.log("plugin - ",e,t)}},{key:"subscribeEvents",value:function(){var e=this;window.PluginManager.getPluginInstances("ListingPagination").forEach((function(t){t.$emitter.subscribe("change",(function(t){e.paginationHandler(t)}))})),["FilterBoolean","FilterMultiSelect","FilterPropertySelect","FilterRange","FilterRating"].forEach((function(t){window.PluginManager.getPluginInstances(t).forEach((function(n){n.$emitter.subscribe("change",(function(n){e.filterHandler(n,t)}))}))})),window.PluginManager.getPluginInstances("FilterRange").forEach((function(t){t.$emitter.subscribe("change",(function(t){e.filterHandler(t)}))})),window.PluginManager.getPluginInstances("AddToCart").forEach((function(t){t.$emitter.subscribe("beforeFormSubmit",(function(t){e.addToCartHandler(t)}))}))}},{key:"paginationHandler",value:function(e){var t=e.target.getAttribute("value"),n=null;if(e.target.options){var r=e.target.options.selectedIndex;n=e.target.options[r].innerText}t?console.log("MAPP -> switch page: ",t):n&&console.log("MAPP -> switch sorting: ",n)}},{key:"filterHandler",value:function(e,t){var n={filterType:t};switch(t){case"FilterBoolean":break;case"FilterMultiSelect":case"FilterPropertySelect":n.filterValue=e.target.dataset.label}}},{key:"addToCartHandler",value:function(e){console.log("MAPP -> add-to-cart event -> ",e);var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(n,!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o.a.querySelector(e.target,".mapp-tracking-data",!0).dataset);t.quantity=e.target.elements["lineItems["+t.productShopwareId+"][quantity]"].value,t.productPrice=t.quantity*t.productPrice,console.log("MAPP -> add-to-cart data -> ",t)}}])&&u(n.prototype,r),i&&u(n,i),t}(r.a);window.PluginManager.register("MappIntelligenceClientEvents",p)}},[["4wo+","runtime","vendor-node","vendor-shared"]]]);