(window.webpackJsonp=window.webpackJsonp||[]).push([["mapp-intelligence"],{"4wo+":function(t,e,n){"use strict";n.r(e);var r=n("FGIj"),o=n("gHbT");function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var g=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,p(e).apply(this,arguments))}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,t),n=e,(r=[{key:"init",value:function(){this.subscribeEvents()}},{key:"subscribeEvents",value:function(){var t=this;window.PluginManager.getPluginInstances("ListingPagination").forEach((function(e){e.$emitter.subscribe("change",(function(e){t.paginationHandler(e)}))})),["FilterBoolean","FilterMultiSelect","FilterPropertySelect","FilterRange","FilterRating"].forEach((function(e){window.PluginManager.getPluginInstances(e).forEach((function(n){n.$emitter.subscribe("change",(function(n){t.filterHandler(n,e)}))}))})),window.PluginManager.getPluginInstances("FilterRange").forEach((function(e){e.$emitter.subscribe("change",(function(e){t.filterHandler(e)}))})),window.PluginManager.getPluginInstances("AddToCart").forEach((function(e){e.$emitter.subscribe("beforeFormSubmit",(function(e){t.addToCartHandler(e)}))}))}},{key:"paginationHandler",value:function(t){var e=t.target.getAttribute("value"),n=null;if(t.target.options){var r=t.target.options.selectedIndex;n=t.target.options[r].innerText}e?console.log("MAPP -> switch page: ",e):n&&console.log("MAPP -> switch sorting: ",n)}},{key:"filterHandler",value:function(t,e){var n={filterType:e};switch(e){case"FilterBoolean":break;case"FilterMultiSelect":case"FilterPropertySelect":n.filterValue=t.target.dataset.label}}},{key:"addToCartHandler",value:function(t){var e=c({},o.a.querySelector(t.target,".mapp-tracking-data",!0).dataset);e.productQuantity&&(e.productQuantity=t.target.elements["lineItems["+e.productShopwareId+"][quantity]"].value),e.productCost&&e.productQuantity&&(e.productCost=e.productQuantity*e.productCost),e.productCategories&&(e.productCategories=JSON.parse(e.productCategories),e.productCategories[0]&&(e.productCategory=e.productCategories[0]),e.productCategories[1]&&(e.productSubCategory=e.productCategories[1])),window._ti=c({},window._ti,{},e),console.log("MAPP -> add-to-cart data -> ",window._ti)}}])&&l(n.prototype,r),i&&l(n,i),e}(r.a);window.PluginManager.register("MappIntelligenceClientEvents",g)}},[["4wo+","runtime","vendor-node","vendor-shared"]]]);