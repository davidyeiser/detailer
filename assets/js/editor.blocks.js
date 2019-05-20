/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book_details__ = __webpack_require__(1);\n/* Custom Blocks */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Jsb2Nrcy9pbmRleC5qcz84MTkzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIEN1c3RvbSBCbG9ja3MgKi9cblxuaW1wb3J0ICcuL2Jvb2stZGV0YWlscyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ibG9ja3MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_css__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_css__);\n/**\n *  BLOCK: Book Details\n *  ---\n *  Add details for a book to a post or page.\n */\n\n//  Import CSS.\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\n\n\nregisterBlockType('davidyeiser-detailer/book-details', {\n  title: __('Book Details'),\n  icon: 'format-aside',\n  category: 'common',\n  keywords: [__('book'), __('details')],\n\n  // Enable or disable support for low-level features\n  supports: {\n    // Turn off ability to edit HTML of block content\n    html: false,\n    // Turn off reusable block feature\n    reusable: false,\n    // Add alignwide and alignfull options\n    align: false\n  },\n\n  // Set up data model for custom block\n  attributes: {\n    title: {\n      type: 'string',\n      selector: 'js-book-details-title'\n    },\n    author: {\n      type: 'string',\n      selector: 'js-book-details-author'\n    },\n    summary: {\n      type: 'string',\n      selector: 'js-book-details-summary',\n      multiline: 'p'\n    }\n  },\n\n  // The UI for the WordPress editor\n  edit: function edit(props) {\n    return null;\n  },\n\n  // The output on the live site\n  save: function save(props) {\n    return null;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Jsb2Nrcy9ib29rLWRldGFpbHMvaW5kZXguanM/MGIxNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqICBCTE9DSzogQm9vayBEZXRhaWxzXG4gKiAgLS0tXG4gKiAgQWRkIGRldGFpbHMgZm9yIGEgYm9vayB0byBhIHBvc3Qgb3IgcGFnZS5cbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9lZGl0b3IuY3NzJztcblxudmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcblxuXG5yZWdpc3RlckJsb2NrVHlwZSgnZGF2aWR5ZWlzZXItZGV0YWlsZXIvYm9vay1kZXRhaWxzJywge1xuICB0aXRsZTogX18oJ0Jvb2sgRGV0YWlscycpLFxuICBpY29uOiAnZm9ybWF0LWFzaWRlJyxcbiAgY2F0ZWdvcnk6ICdjb21tb24nLFxuICBrZXl3b3JkczogW19fKCdib29rJyksIF9fKCdkZXRhaWxzJyldLFxuXG4gIC8vIEVuYWJsZSBvciBkaXNhYmxlIHN1cHBvcnQgZm9yIGxvdy1sZXZlbCBmZWF0dXJlc1xuICBzdXBwb3J0czoge1xuICAgIC8vIFR1cm4gb2ZmIGFiaWxpdHkgdG8gZWRpdCBIVE1MIG9mIGJsb2NrIGNvbnRlbnRcbiAgICBodG1sOiBmYWxzZSxcbiAgICAvLyBUdXJuIG9mZiByZXVzYWJsZSBibG9jayBmZWF0dXJlXG4gICAgcmV1c2FibGU6IGZhbHNlLFxuICAgIC8vIEFkZCBhbGlnbndpZGUgYW5kIGFsaWduZnVsbCBvcHRpb25zXG4gICAgYWxpZ246IGZhbHNlXG4gIH0sXG5cbiAgLy8gU2V0IHVwIGRhdGEgbW9kZWwgZm9yIGN1c3RvbSBibG9ja1xuICBhdHRyaWJ1dGVzOiB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgc2VsZWN0b3I6ICdqcy1ib29rLWRldGFpbHMtdGl0bGUnXG4gICAgfSxcbiAgICBhdXRob3I6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgc2VsZWN0b3I6ICdqcy1ib29rLWRldGFpbHMtYXV0aG9yJ1xuICAgIH0sXG4gICAgc3VtbWFyeToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBzZWxlY3RvcjogJ2pzLWJvb2stZGV0YWlscy1zdW1tYXJ5JyxcbiAgICAgIG11bHRpbGluZTogJ3AnXG4gICAgfVxuICB9LFxuXG4gIC8vIFRoZSBVSSBmb3IgdGhlIFdvcmRQcmVzcyBlZGl0b3JcbiAgZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuICAgIHJldHVybiBudWxsO1xuICB9LFxuXG4gIC8vIFRoZSBvdXRwdXQgb24gdGhlIGxpdmUgc2l0ZVxuICBzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYmxvY2tzL2Jvb2stZGV0YWlscy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Jsb2Nrcy9ib29rLWRldGFpbHMvZWRpdG9yLmNzcz9hMWIwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ibG9ja3MvYm9vay1kZXRhaWxzL2VkaXRvci5jc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);