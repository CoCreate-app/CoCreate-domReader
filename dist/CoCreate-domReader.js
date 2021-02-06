(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["domReader"] = factory();
	else
		root["CoCreate"] = root["CoCreate"] || {}, root["CoCreate"]["domReader"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../CoCreate-components/CoCreate-domReader/src/CoCreate-domReader.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../CoCreate-components/CoCreate-domReader/src/CoCreate-domReader.js":
/*!***************************************************************************!*\
  !*** ../CoCreate-components/CoCreate-domReader/src/CoCreate-domReader.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"../node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"../node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n/*global Element*/\n\n/*global HTMLElement*/\nfunction context(state) {\n  var _this = this;\n\n  this.state = state;\n\n  this.removeAttribute = function (element, attName) {\n    if (_this.state.has(element)) delete _this.state.get(element)[\"attributes\"][attName];\n  };\n\n  this.hasAttribute = function (element, attName) {\n    if (_this.state.has(element)) return _this.state.get(element)[\"attributes\"][attName] ? true : false;\n  };\n\n  this.getAttribute = function (element, attName) {\n    if (_this.state.has(element)) return _this.state.get(element)[\"attributes\"][attName];\n  };\n\n  this.setAttribute = function (element, attName, value) {\n    if (_this.state.has(element)) _this.state.get(element).attributes[attName] = value;else _this.state.set(element, {\n      element: element,\n      attributes: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, attName, value)\n    });\n  };\n\n  this.getAllAttributes = function (element) {\n    if (_this.state.has(element)) return _this.state.get(element)[\"attributes\"];\n  };\n\n  this.getDataset = function (element) {\n    var dataset = {};\n\n    for (var _i = 0, _Object$entries = Object.entries(_this.state.get(element)[\"attributes\"]); _i < _Object$entries.length; _i++) {\n      var _Object$entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_Object$entries[_i], 2),\n          key = _Object$entries$_i[0],\n          value = _Object$entries$_i[1];\n\n      if (key.beginsWith(\"data-\")) dataset[key.substr(5)] = value;\n    }\n\n    return dataset;\n  };\n}\n\nvar domContext;\n\nfunction init() {\n  var state = new Map();\n  window.CoCreateDomReader = {\n    state: state\n  };\n  domContext = new context(state);\n  var domReader = {\n    splitBydelimiter: function splitBydelimiter(str, delimiter) {\n      return str.split(delimiter).map(function (s) {\n        return s.trim();\n      });\n    },\n    joinBydelimiter: function joinBydelimiter(str, delimiter) {\n      return str.map(function (s) {\n        return s.trim();\n      }).join(delimiter);\n    }\n  };\n  var allFrames = Array.from(window.frames);\n  allFrames.unshift(window);\n\n  for (var _i2 = 0, _allFrames = allFrames; _i2 < _allFrames.length; _i2++) {\n    var frame = _allFrames[_i2];\n    register(domContext, frame);\n  }\n}\n\nfunction register(domContext, frame) {\n  var htmlPrototype = frame.HTMLElement.prototype; // let nativeSetAttribute = htmlPrototype.setAttribute;\n  // htmlPrototype.setAttribute = function (attName, value) {\n  //   if(this.getAttribute(attName) !== value)\n  //   nativeSetAttribute.apply(this, [attName,value])\n  // };\n\n  var nativeSetAttribute = htmlPrototype.setAttribute;\n\n  htmlPrototype.setAttribute = function (attName, value) {\n    nativeSetAttribute.apply(this, [attName, value]);\n  };\n\n  htmlPrototype.setHiddenAttribute = function (attName, value) {\n    domContext.setAttribute(this, attName, value);\n  };\n\n  htmlPrototype.getHiddenAttribute = function (attName) {\n    return domContext.getAttribute(this, attName);\n  };\n\n  htmlPrototype.getAllHiddenAttribute = function (attName) {\n    return domContext.getAllAttributes(this);\n  };\n\n  htmlPrototype.getAnyAttribute = function (attName) {\n    if (this.hasAttribute(attName)) return this.getAttribute(attName);else if (domContext.hasAttribute(this, attName)) return domContext.getAttribute(this, attName);\n  };\n\n  htmlPrototype.setAnyAttribute = function (attName, value) {\n    this.setAttribute(attName, value);\n    domContext.setAttribute(this, attName, value);\n  };\n\n  htmlPrototype.removeAnyAttribute = function (attName) {\n    this.removeAnyAttribute(attName);\n    domContext.removeAttribute(this, attName);\n  };\n\n  htmlPrototype.hasAnyAttribute = function (attName, value) {\n    return this.hasAttribute(attName) || domContext.hasAttribute(this, attName);\n  }; // todo: should this cause mutation\n\n\n  htmlPrototype.hideAttribute = function (attName) {\n    if (this.hasAttribute(attName)) {\n      if (domContext.hasAttribute(this, attName)) return false;\n      domContext.setAttribute(this, attName, this.getAttribute(attName));\n      this.removeAttribute(attName);\n    }\n  };\n\n  htmlPrototype.unhideAttribute = function (attName) {\n    if (domContext.hasAttribute(this, attName)) {\n      if (this.hasAttribute(attName)) return false;\n      this.setAttribute(attName, domContext.getAttribute(this, attName));\n      domContext.removeAttribute(this, attName);\n    }\n  };\n}\n\ninit();\nvar domReader = {\n  register: register,\n  domContext: domContext\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (domReader);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5kb21SZWFkZXIvLi4vQ29DcmVhdGUtY29tcG9uZW50cy9Db0NyZWF0ZS1kb21SZWFkZXIvc3JjL0NvQ3JlYXRlLWRvbVJlYWRlci5qcz83MWUwIl0sIm5hbWVzIjpbImNvbnRleHQiLCJzdGF0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImVsZW1lbnQiLCJhdHROYW1lIiwiaGFzIiwiZ2V0IiwiaGFzQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwidmFsdWUiLCJhdHRyaWJ1dGVzIiwic2V0IiwiZ2V0QWxsQXR0cmlidXRlcyIsImdldERhdGFzZXQiLCJkYXRhc2V0IiwiT2JqZWN0IiwiZW50cmllcyIsImtleSIsImJlZ2luc1dpdGgiLCJzdWJzdHIiLCJkb21Db250ZXh0IiwiaW5pdCIsIk1hcCIsIndpbmRvdyIsIkNvQ3JlYXRlRG9tUmVhZGVyIiwiZG9tUmVhZGVyIiwic3BsaXRCeWRlbGltaXRlciIsInN0ciIsImRlbGltaXRlciIsInNwbGl0IiwibWFwIiwicyIsInRyaW0iLCJqb2luQnlkZWxpbWl0ZXIiLCJqb2luIiwiYWxsRnJhbWVzIiwiQXJyYXkiLCJmcm9tIiwiZnJhbWVzIiwidW5zaGlmdCIsImZyYW1lIiwicmVnaXN0ZXIiLCJodG1sUHJvdG90eXBlIiwiSFRNTEVsZW1lbnQiLCJwcm90b3R5cGUiLCJuYXRpdmVTZXRBdHRyaWJ1dGUiLCJhcHBseSIsInNldEhpZGRlbkF0dHJpYnV0ZSIsImdldEhpZGRlbkF0dHJpYnV0ZSIsImdldEFsbEhpZGRlbkF0dHJpYnV0ZSIsImdldEFueUF0dHJpYnV0ZSIsInNldEFueUF0dHJpYnV0ZSIsInJlbW92ZUFueUF0dHJpYnV0ZSIsImhhc0FueUF0dHJpYnV0ZSIsImhpZGVBdHRyaWJ1dGUiLCJ1bmhpZGVBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFHQSxTQUFTQSxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtB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SCxPQUFsQixLQUE4QmlCLFVBQVUsQ0FBQ2QsWUFBWCxDQUF3QixJQUF4QixFQUE4QkgsT0FBOUIsQ0FEaEM7QUFHRCxHQUpELENBM0NtQyxDQWlEbkM7OztBQUNBdUMsZUFBYSxDQUFDWSxhQUFkLEdBQThCLFVBQVNuRCxPQUFULEVBQWtCO0FBQzlDLFFBQUksS0FBS0csWUFBTCxDQUFrQkgsT0FBbEIsQ0FBSixFQUFnQztBQUM5QixVQUFJaUIsVUFBVSxDQUFDZCxZQUFYLENBQXdCLElBQXhCLEVBQThCSCxPQUE5QixDQUFKLEVBQTRDLE9BQU8sS0FBUDtBQUM1Q2lCLGdCQUFVLENBQUNaLFlBQVgsQ0FBd0IsSUFBeEIsRUFBOEJMLE9BQTlCLEVBQXVDLEtBQUtJLFlBQUwsQ0FBa0JKLE9BQWxCLENBQXZDO0FBQ0EsV0FBS0YsZUFBTCxDQUFxQkUsT0FBckI7QUFDRDtBQUNGLEdBTkQ7O0FBUUF1QyxlQUFhLENBQUNhLGVBQWQsR0FBZ0MsVUFBU3BELE9BQVQsRUFBa0I7QUFDaEQsUUFBSWlCLFVBQVUsQ0FBQ2QsWUFBWCxDQUF3QixJQUF4QixFQUE4QkgsT0FBOUIsQ0FBSixFQUE0QztBQUMxQyxVQUFJLEtBQUtHLFlBQUwsQ0FBa0JILE9BQWxCLENBQUosRUFBZ0MsT0FBTyxLQUFQO0FBRWhDLFdBQUtLLFlBQUwsQ0FBa0JMLE9BQWxCLEVBQTJCaUIsVUFBVSxDQUFDYixZQUFYLENBQXdCLElBQXhCLEVBQThCSixPQUE5QixDQUEzQjtBQUNBaUIsZ0JBQVUsQ0FBQ25CLGVBQVgsQ0FBMkIsSUFBM0IsRUFBaUNFLE9BQWpDO0FBQ0Q7QUFDRixHQVBEO0FBV0Q7O0FBRURrQixJQUFJO0FBRUosSUFBTUksU0FBUyxHQUFJO0FBQUNnQixVQUFRLEVBQVJBLFFBQUQ7QUFBV3JCLFlBQVUsRUFBVkE7QUFBWCxDQUFuQjtBQUNlSyx3RUFBZiIsImZpbGUiOiIuLi9Db0NyZWF0ZS1jb21wb25lbnRzL0NvQ3JlYXRlLWRvbVJlYWRlci9zcmMvQ29DcmVhdGUtZG9tUmVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypnbG9iYWwgRWxlbWVudCovXG4vKmdsb2JhbCBIVE1MRWxlbWVudCovXG5cblxuZnVuY3Rpb24gY29udGV4dChzdGF0ZSkge1xuICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUgPSAoZWxlbWVudCwgYXR0TmFtZSkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmhhcyhlbGVtZW50KSlcbiAgICAgIGRlbGV0ZSB0aGlzLnN0YXRlLmdldChlbGVtZW50KVtcImF0dHJpYnV0ZXNcIl1bYXR0TmFtZV07XG4gIH07XG5cbiAgdGhpcy5oYXNBdHRyaWJ1dGUgPSAoZWxlbWVudCwgYXR0TmFtZSkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmhhcyhlbGVtZW50KSlcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmdldChlbGVtZW50KVtcImF0dHJpYnV0ZXNcIl1bYXR0TmFtZV0gPyB0cnVlIDogZmFsc2U7XG4gIH07XG5cbiAgdGhpcy5nZXRBdHRyaWJ1dGUgPSAoZWxlbWVudCwgYXR0TmFtZSkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmhhcyhlbGVtZW50KSlcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmdldChlbGVtZW50KVtcImF0dHJpYnV0ZXNcIl1bYXR0TmFtZV07XG4gIH07XG5cbiAgdGhpcy5zZXRBdHRyaWJ1dGUgPSAoZWxlbWVudCwgYXR0TmFtZSwgdmFsdWUpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5oYXMoZWxlbWVudCkpXG4gICAgICB0aGlzLnN0YXRlLmdldChlbGVtZW50KS5hdHRyaWJ1dGVzW2F0dE5hbWVdID0gdmFsdWU7XG4gICAgZWxzZVxuICAgICAgdGhpcy5zdGF0ZS5zZXQoZWxlbWVudCwge1xuICAgICAgICBlbGVtZW50LFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgW2F0dE5hbWVdOiB2YWx1ZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgfTtcblxuICB0aGlzLmdldEFsbEF0dHJpYnV0ZXMgPSAoZWxlbWVudCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmhhcyhlbGVtZW50KSkgcmV0dXJuIHRoaXMuc3RhdGUuZ2V0KGVsZW1lbnQpW1wiYXR0cmlidXRlc1wiXTtcbiAgfTtcblxuICB0aGlzLmdldERhdGFzZXQgPSAoZWxlbWVudCkgPT4ge1xuICAgIGxldCBkYXRhc2V0ID0ge307XG4gICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKFxuICAgICAgICB0aGlzLnN0YXRlLmdldChlbGVtZW50KVtcImF0dHJpYnV0ZXNcIl1cbiAgICAgICkpXG4gICAgICBpZiAoa2V5LmJlZ2luc1dpdGgoXCJkYXRhLVwiKSkgZGF0YXNldFtrZXkuc3Vic3RyKDUpXSA9IHZhbHVlO1xuXG4gICAgcmV0dXJuIGRhdGFzZXQ7XG4gIH07XG59XG5cbmxldCBkb21Db250ZXh0O1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICBsZXQgc3RhdGUgPSBuZXcgTWFwKCk7XG4gIHdpbmRvdy5Db0NyZWF0ZURvbVJlYWRlciA9IHsgc3RhdGUgfTtcblxuICBkb21Db250ZXh0ID0gbmV3IGNvbnRleHQoc3RhdGUpO1xuXG4gIGNvbnN0IGRvbVJlYWRlciA9IHtcbiAgICBzcGxpdEJ5ZGVsaW1pdGVyOiAoc3RyLCBkZWxpbWl0ZXIpID0+IHtcbiAgICAgIHJldHVybiBzdHIuc3BsaXQoZGVsaW1pdGVyKS5tYXAoKHMpID0+IHMudHJpbSgpKTtcbiAgICB9LFxuICAgIGpvaW5CeWRlbGltaXRlcjogKHN0ciwgZGVsaW1pdGVyKSA9PiB7XG4gICAgICByZXR1cm4gc3RyLm1hcCgocykgPT4gcy50cmltKCkpLmpvaW4oZGVsaW1pdGVyKTtcbiAgICB9LFxuICB9O1xuXG4gIGxldCBhbGxGcmFtZXMgPSBBcnJheS5mcm9tKHdpbmRvdy5mcmFtZXMpO1xuICBhbGxGcmFtZXMudW5zaGlmdCh3aW5kb3cpO1xuXG4gIGZvciAobGV0IGZyYW1lIG9mIGFsbEZyYW1lcykgeyByZWdpc3Rlcihkb21Db250ZXh0LCBmcmFtZSkgfVxufVxuXG5cblxuZnVuY3Rpb24gcmVnaXN0ZXIoZG9tQ29udGV4dCwgZnJhbWUpIHtcblxuXG4gIGxldCBodG1sUHJvdG90eXBlID0gZnJhbWUuSFRNTEVsZW1lbnQucHJvdG90eXBlO1xuICAvLyBsZXQgbmF0aXZlU2V0QXR0cmlidXRlID0gaHRtbFByb3RvdHlwZS5zZXRBdHRyaWJ1dGU7XG4gIC8vIGh0bWxQcm90b3R5cGUuc2V0QXR0cmlidXRlID0gZnVuY3Rpb24gKGF0dE5hbWUsIHZhbHVlKSB7XG4gIC8vICAgaWYodGhpcy5nZXRBdHRyaWJ1dGUoYXR0TmFtZSkgIT09IHZhbHVlKVxuICAvLyAgIG5hdGl2ZVNldEF0dHJpYnV0ZS5hcHBseSh0aGlzLCBbYXR0TmFtZSx2YWx1ZV0pXG5cbiAgLy8gfTtcbiAgbGV0IG5hdGl2ZVNldEF0dHJpYnV0ZSA9IGh0bWxQcm90b3R5cGUuc2V0QXR0cmlidXRlO1xuICBodG1sUHJvdG90eXBlLnNldEF0dHJpYnV0ZSA9IGZ1bmN0aW9uKGF0dE5hbWUsIHZhbHVlKSB7XG4gICAgbmF0aXZlU2V0QXR0cmlidXRlLmFwcGx5KHRoaXMsIFthdHROYW1lLCB2YWx1ZV0pXG5cbiAgfTtcbiAgaHRtbFByb3RvdHlwZS5zZXRIaWRkZW5BdHRyaWJ1dGUgPSBmdW5jdGlvbihhdHROYW1lLCB2YWx1ZSkge1xuICAgIGRvbUNvbnRleHQuc2V0QXR0cmlidXRlKHRoaXMsIGF0dE5hbWUsIHZhbHVlKTtcbiAgfTtcblxuICBodG1sUHJvdG90eXBlLmdldEhpZGRlbkF0dHJpYnV0ZSA9IGZ1bmN0aW9uKGF0dE5hbWUpIHtcbiAgICByZXR1cm4gZG9tQ29udGV4dC5nZXRBdHRyaWJ1dGUodGhpcywgYXR0TmFtZSk7XG4gIH07XG5cbiAgaHRtbFByb3RvdHlwZS5nZXRBbGxIaWRkZW5BdHRyaWJ1dGUgPSBmdW5jdGlvbihhdHROYW1lKSB7XG4gICAgcmV0dXJuIGRvbUNvbnRleHQuZ2V0QWxsQXR0cmlidXRlcyh0aGlzKTtcbiAgfTtcblxuICBodG1sUHJvdG90eXBlLmdldEFueUF0dHJpYnV0ZSA9IGZ1bmN0aW9uKGF0dE5hbWUpIHtcbiAgICBpZiAodGhpcy5oYXNBdHRyaWJ1dGUoYXR0TmFtZSkpIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShhdHROYW1lKTtcbiAgICBlbHNlIGlmIChkb21Db250ZXh0Lmhhc0F0dHJpYnV0ZSh0aGlzLCBhdHROYW1lKSlcbiAgICAgIHJldHVybiBkb21Db250ZXh0LmdldEF0dHJpYnV0ZSh0aGlzLCBhdHROYW1lKTtcbiAgfTtcblxuICBodG1sUHJvdG90eXBlLnNldEFueUF0dHJpYnV0ZSA9IGZ1bmN0aW9uKGF0dE5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0TmFtZSwgdmFsdWUpO1xuICAgIGRvbUNvbnRleHQuc2V0QXR0cmlidXRlKHRoaXMsIGF0dE5hbWUsIHZhbHVlKTtcbiAgfTtcblxuICBodG1sUHJvdG90eXBlLnJlbW92ZUFueUF0dHJpYnV0ZSA9IGZ1bmN0aW9uKGF0dE5hbWUpIHtcbiAgICB0aGlzLnJlbW92ZUFueUF0dHJpYnV0ZShhdHROYW1lKTtcbiAgICBkb21Db250ZXh0LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLCBhdHROYW1lKTtcbiAgfTtcblxuICBodG1sUHJvdG90eXBlLmhhc0FueUF0dHJpYnV0ZSA9IGZ1bmN0aW9uKGF0dE5hbWUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuaGFzQXR0cmlidXRlKGF0dE5hbWUpIHx8IGRvbUNvbnRleHQuaGFzQXR0cmlidXRlKHRoaXMsIGF0dE5hbWUpXG4gICAgKTtcbiAgfTtcblxuICAvLyB0b2RvOiBzaG91bGQgdGhpcyBjYXVzZSBtdXRhdGlvblxuICBodG1sUHJvdG90eXBlLmhpZGVBdHRyaWJ1dGUgPSBmdW5jdGlvbihhdHROYW1lKSB7XG4gICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKGF0dE5hbWUpKSB7XG4gICAgICBpZiAoZG9tQ29udGV4dC5oYXNBdHRyaWJ1dGUodGhpcywgYXR0TmFtZSkpIHJldHVybiBmYWxzZTtcbiAgICAgIGRvbUNvbnRleHQuc2V0QXR0cmlidXRlKHRoaXMsIGF0dE5hbWUsIHRoaXMuZ2V0QXR0cmlidXRlKGF0dE5hbWUpKTtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKGF0dE5hbWUpO1xuICAgIH1cbiAgfTtcblxuICBodG1sUHJvdG90eXBlLnVuaGlkZUF0dHJpYnV0ZSA9IGZ1bmN0aW9uKGF0dE5hbWUpIHtcbiAgICBpZiAoZG9tQ29udGV4dC5oYXNBdHRyaWJ1dGUodGhpcywgYXR0TmFtZSkpIHtcbiAgICAgIGlmICh0aGlzLmhhc0F0dHJpYnV0ZShhdHROYW1lKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHROYW1lLCBkb21Db250ZXh0LmdldEF0dHJpYnV0ZSh0aGlzLCBhdHROYW1lKSk7XG4gICAgICBkb21Db250ZXh0LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLCBhdHROYW1lKTtcbiAgICB9XG4gIH07XG5cblxuXG59XG5cbmluaXQoKTtcblxuY29uc3QgZG9tUmVhZGVyICA9IHtyZWdpc3RlciwgZG9tQ29udGV4dH07IFxuZXhwb3J0IGRlZmF1bHQgZG9tUmVhZGVyO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../CoCreate-components/CoCreate-domReader/src/CoCreate-domReader.js\n");

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\nmodule.exports = _arrayLikeToArray;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5kb21SZWFkZXIvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcz9mOTJjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5TGlrZVRvQXJyYXkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../node_modules/@babel/runtime/helpers/arrayLikeToArray.js\n");

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\nmodule.exports = _arrayWithHoles;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5kb21SZWFkZXIvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanM/ZmI3NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../node_modules/@babel/runtime/helpers/arrayWithHoles.js\n");

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5kb21SZWFkZXIvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanM/M2FmMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../node_modules/@babel/runtime/helpers/defineProperty.js\n");

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArrayLimit(arr, i) {\n  if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return;\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nmodule.exports = _iterableToArrayLimit;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5kb21SZWFkZXIvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanM/NGI4ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsK0JBQStCO0FBQzVFOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\n");

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nmodule.exports = _nonIterableRest;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5kb21SZWFkZXIvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzP2Y5YjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../node_modules/@babel/runtime/helpers/nonIterableRest.js\n");

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ \"../node_modules/@babel/runtime/helpers/arrayWithHoles.js\");\n\nvar iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ \"../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\");\n\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ \"../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\");\n\nvar nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ \"../node_modules/@babel/runtime/helpers/nonIterableRest.js\");\n\nfunction _slicedToArray(arr, i) {\n  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();\n}\n\nmodule.exports = _slicedToArray;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5kb21SZWFkZXIvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcz85ZjE0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFxQixtQkFBTyxDQUFDLGtGQUFrQjs7QUFFL0MsMkJBQTJCLG1CQUFPLENBQUMsOEZBQXdCOztBQUUzRCxpQ0FBaUMsbUJBQU8sQ0FBQywwR0FBOEI7O0FBRXZFLHNCQUFzQixtQkFBTyxDQUFDLG9GQUFtQjs7QUFFakQ7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0XCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../node_modules/@babel/runtime/helpers/slicedToArray.js\n");

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ \"../node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);\n}\n\nmodule.exports = _unsupportedIterableToArray;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5kb21SZWFkZXIvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanM/NjYxYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1QkFBdUIsbUJBQU8sQ0FBQyxzRkFBb0I7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\n");

/***/ })

/******/ })["default"];
});