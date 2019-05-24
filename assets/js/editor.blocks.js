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
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_css__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_css__);\n/**\n *  BLOCK: Book Details\n *  ---\n *  Add details for a book to a post or page.\n */\n\n//  Import CSS.\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar RichText = wp.editor.RichText;\n\n\nregisterBlockType('davidyeiser-detailer/book-details', {\n  title: __('Book Details'),\n  icon: 'format-aside',\n  category: 'common',\n  keywords: [__('book'), __('details')],\n\n  // Enable or disable support for low-level features\n  supports: {\n    // Turn off ability to edit HTML of block content\n    html: false,\n    // Turn off reusable block feature\n    reusable: false,\n    // Add alignwide and alignfull options\n    align: false\n  },\n\n  // Set up data model for custom block\n  attributes: {\n    title: {\n      type: 'string',\n      selector: 'js-book-details-title'\n    },\n    author: {\n      type: 'string',\n      selector: 'js-book-details-author'\n    },\n    summary: {\n      type: 'string',\n      selector: 'js-book-details-summary',\n      multiline: 'p'\n    }\n  },\n\n  // The UI for the WordPress editor\n  edit: function edit(props) {\n    // Pull out the props we'll use\n    var attributes = props.attributes,\n        className = props.className,\n        setAttributes = props.setAttributes;\n\n\n    return wp.element.createElement(\n      'div',\n      { className: className },\n      wp.element.createElement(RichText, {\n        className: 'js-book-details-title wp-admin-book-details-title',\n        value: attributes.title,\n        onChange: function onChange(value) {\n          return setAttributes({ title: value });\n        },\n        tagName: 'h3',\n        placeholder: 'Book title'\n      }),\n      wp.element.createElement(RichText, {\n        className: 'js-book-details-author wp-admin-book-details-author',\n        value: attributes.author,\n        onChange: function onChange(value) {\n          return setAttributes({ author: value });\n        },\n        tagName: 'span',\n        placeholder: 'Book author'\n      }),\n      wp.element.createElement(RichText, {\n        className: 'js-book-details-summary wp-admin-book-details-summary',\n        value: attributes.summary,\n        onChange: function onChange(value) {\n          return setAttributes({ summary: value });\n        },\n        tagName: 'div',\n        placeholder: 'Book summary',\n        multiline: 'p'\n      })\n    );\n  },\n\n  // The output on the live site\n  save: function save(props) {\n    var attributes = props.attributes,\n        className = props.className;\n\n\n    return wp.element.createElement(\n      'div',\n      { className: className },\n      wp.element.createElement(RichText.Content, {\n        className: 'book-details-title',\n        value: attributes.title,\n        tagName: 'h3'\n      }),\n      wp.element.createElement(RichText.Content, {\n        className: 'book-details-author',\n        value: attributes.author,\n        tagName: 'span'\n      }),\n      wp.element.createElement(RichText.Content, {\n        className: 'book-details-summary',\n        value: attributes.summary,\n        tagName: 'div',\n        multiline: 'p'\n      })\n    );\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Jsb2Nrcy9ib29rLWRldGFpbHMvaW5kZXguanM/MGIxNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqICBCTE9DSzogQm9vayBEZXRhaWxzXG4gKiAgLS0tXG4gKiAgQWRkIGRldGFpbHMgZm9yIGEgYm9vayB0byBhIHBvc3Qgb3IgcGFnZS5cbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9lZGl0b3IuY3NzJztcblxudmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBSaWNoVGV4dCA9IHdwLmVkaXRvci5SaWNoVGV4dDtcblxuXG5yZWdpc3RlckJsb2NrVHlwZSgnZGF2aWR5ZWlzZXItZGV0YWlsZXIvYm9vay1kZXRhaWxzJywge1xuICB0aXRsZTogX18oJ0Jvb2sgRGV0YWlscycpLFxuICBpY29uOiAnZm9ybWF0LWFzaWRlJyxcbiAgY2F0ZWdvcnk6ICdjb21tb24nLFxuICBrZXl3b3JkczogW19fKCdib29rJyksIF9fKCdkZXRhaWxzJyldLFxuXG4gIC8vIEVuYWJsZSBvciBkaXNhYmxlIHN1cHBvcnQgZm9yIGxvdy1sZXZlbCBmZWF0dXJlc1xuICBzdXBwb3J0czoge1xuICAgIC8vIFR1cm4gb2ZmIGFiaWxpdHkgdG8gZWRpdCBIVE1MIG9mIGJsb2NrIGNvbnRlbnRcbiAgICBodG1sOiBmYWxzZSxcbiAgICAvLyBUdXJuIG9mZiByZXVzYWJsZSBibG9jayBmZWF0dXJlXG4gICAgcmV1c2FibGU6IGZhbHNlLFxuICAgIC8vIEFkZCBhbGlnbndpZGUgYW5kIGFsaWduZnVsbCBvcHRpb25zXG4gICAgYWxpZ246IGZhbHNlXG4gIH0sXG5cbiAgLy8gU2V0IHVwIGRhdGEgbW9kZWwgZm9yIGN1c3RvbSBibG9ja1xuICBhdHRyaWJ1dGVzOiB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgc2VsZWN0b3I6ICdqcy1ib29rLWRldGFpbHMtdGl0bGUnXG4gICAgfSxcbiAgICBhdXRob3I6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgc2VsZWN0b3I6ICdqcy1ib29rLWRldGFpbHMtYXV0aG9yJ1xuICAgIH0sXG4gICAgc3VtbWFyeToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBzZWxlY3RvcjogJ2pzLWJvb2stZGV0YWlscy1zdW1tYXJ5JyxcbiAgICAgIG11bHRpbGluZTogJ3AnXG4gICAgfVxuICB9LFxuXG4gIC8vIFRoZSBVSSBmb3IgdGhlIFdvcmRQcmVzcyBlZGl0b3JcbiAgZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuICAgIC8vIFB1bGwgb3V0IHRoZSBwcm9wcyB3ZSdsbCB1c2VcbiAgICB2YXIgYXR0cmlidXRlcyA9IHByb3BzLmF0dHJpYnV0ZXMsXG4gICAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgc2V0QXR0cmlidXRlcyA9IHByb3BzLnNldEF0dHJpYnV0ZXM7XG5cblxuICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuICAgICAgICBjbGFzc05hbWU6ICdqcy1ib29rLWRldGFpbHMtdGl0bGUgd3AtYWRtaW4tYm9vay1kZXRhaWxzLXRpdGxlJyxcbiAgICAgICAgdmFsdWU6IGF0dHJpYnV0ZXMudGl0bGUsXG4gICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgdGl0bGU6IHZhbHVlIH0pO1xuICAgICAgICB9LFxuICAgICAgICB0YWdOYW1lOiAnaDMnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ0Jvb2sgdGl0bGUnXG4gICAgICB9KSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuICAgICAgICBjbGFzc05hbWU6ICdqcy1ib29rLWRldGFpbHMtYXV0aG9yIHdwLWFkbWluLWJvb2stZGV0YWlscy1hdXRob3InLFxuICAgICAgICB2YWx1ZTogYXR0cmlidXRlcy5hdXRob3IsXG4gICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgYXV0aG9yOiB2YWx1ZSB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgdGFnTmFtZTogJ3NwYW4nLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ0Jvb2sgYXV0aG9yJ1xuICAgICAgfSksXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnanMtYm9vay1kZXRhaWxzLXN1bW1hcnkgd3AtYWRtaW4tYm9vay1kZXRhaWxzLXN1bW1hcnknLFxuICAgICAgICB2YWx1ZTogYXR0cmlidXRlcy5zdW1tYXJ5LFxuICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7IHN1bW1hcnk6IHZhbHVlIH0pO1xuICAgICAgICB9LFxuICAgICAgICB0YWdOYW1lOiAnZGl2JyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdCb29rIHN1bW1hcnknLFxuICAgICAgICBtdWx0aWxpbmU6ICdwJ1xuICAgICAgfSlcbiAgICApO1xuICB9LFxuXG4gIC8vIFRoZSBvdXRwdXQgb24gdGhlIGxpdmUgc2l0ZVxuICBzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuICAgICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XG5cblxuICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dC5Db250ZW50LCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Jvb2stZGV0YWlscy10aXRsZScsXG4gICAgICAgIHZhbHVlOiBhdHRyaWJ1dGVzLnRpdGxlLFxuICAgICAgICB0YWdOYW1lOiAnaDMnXG4gICAgICB9KSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dC5Db250ZW50LCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Jvb2stZGV0YWlscy1hdXRob3InLFxuICAgICAgICB2YWx1ZTogYXR0cmlidXRlcy5hdXRob3IsXG4gICAgICAgIHRhZ05hbWU6ICdzcGFuJ1xuICAgICAgfSksXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQuQ29udGVudCwge1xuICAgICAgICBjbGFzc05hbWU6ICdib29rLWRldGFpbHMtc3VtbWFyeScsXG4gICAgICAgIHZhbHVlOiBhdHRyaWJ1dGVzLnN1bW1hcnksXG4gICAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgICBtdWx0aWxpbmU6ICdwJ1xuICAgICAgfSlcbiAgICApO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Jsb2Nrcy9ib29rLWRldGFpbHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Jsb2Nrcy9ib29rLWRldGFpbHMvZWRpdG9yLmNzcz9hMWIwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ibG9ja3MvYm9vay1kZXRhaWxzL2VkaXRvci5jc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);