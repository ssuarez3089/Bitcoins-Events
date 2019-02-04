webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Components/Eventos.js":
/*!*******************************!*\
  !*** ./Components/Eventos.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Evento__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Evento */ "./Components/Evento.js");
var _jsxFileName = "/Users/willekeswaneveld/Desktop/proyecto/tutu/curso react espan\u0303ol/Bitcoins App/Components/Eventos.js";



var Eventos = function Eventos(props) {
  var eventosId = Object.keys(props.eventos);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, eventosId.map(function (key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Evento__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: key,
      info: props.eventos[key],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Eventos);

/***/ })

})
//# sourceMappingURL=index.js.39a6e493d9a75fe37589.hot-update.js.map