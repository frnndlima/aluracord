"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ChatPage() {\n    var _this = this;\n    var handleNovaMensagem = function handleNovaMensagem(novaMensagem) {\n        var mensagem = {\n            id: listaDeMensagens.length + 1,\n            de: 'vanessametonini',\n            texto: novaMensagem\n        };\n        setListaDeMensagens([\n            mensagem, \n        ].concat(_toConsumableArray(listaDeMensagens)));\n        setMensagem('');\n    };\n    _s();\n    var ref = react__WEBPACK_IMPORTED_MODULE_2___default().useState(''), mensagem1 = ref.mensagem, setMensagem = ref.setMensagem;\n    var ref1 = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]), listaDeMensagens = ref1.listaDeMensagens, setListaDeMensagens = ref1.setListaDeMensagens;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n            backgroundImage: \"url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)\",\n            backgroundRepeat: 'no-repeat',\n            backgroundSize: 'cover',\n            backgroundBlendMode: 'multiply',\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: 'flex',\n                flexDirection: 'column',\n                flex: 1,\n                boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                borderRadius: '5px',\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: '100%',\n                maxWidth: '95%',\n                maxHeight: '95vh',\n                padding: '32px'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Fernanda Lima\\\\Desktop\\\\AluraCord\\\\pages\\\\chat.js\",\n                    lineNumber: 47,\n                    columnNumber: 15\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: 'relative',\n                        display: 'flex',\n                        flex: 1,\n                        height: '80%',\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: 'column',\n                        borderRadius: '5px',\n                        padding: '16px'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Fernanda Lima\\\\Desktop\\\\AluraCord\\\\pages\\\\chat.js\",\n                            lineNumber: 60,\n                            columnNumber: 19\n                        }, this),\n                        listaDeMensagens.map(function(mensagemAtual) {\n                            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    mensagemAtual.de,\n                                    \": \",\n                                    mensagemAtual.texto\n                                ]\n                            }, mensagemAtual.id, true, {\n                                fileName: \"C:\\\\Users\\\\Fernanda Lima\\\\Desktop\\\\AluraCord\\\\pages\\\\chat.js\",\n                                lineNumber: 63,\n                                columnNumber: 27\n                            }, _this));\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: 'flex',\n                                alignItems: 'center'\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                value: mensagem1,\n                                onChange: function(event) {\n                                    var valor = event.target.value;\n                                    setMensagem(valor);\n                                },\n                                onKeyPress: function(event) {\n                                    if (event.key === 'Enter') {\n                                        event.preventDefault();\n                                        handleNovaMensagem(mensagem1);\n                                    }\n                                },\n                                placeholder: \"Insira sua mensagem aqui...\",\n                                type: \"textarea\",\n                                styleSheet: {\n                                    width: '100%',\n                                    border: '0',\n                                    resize: 'none',\n                                    borderRadius: '5px',\n                                    padding: '6px 8px',\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                    marginRight: '12px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Fernanda Lima\\\\Desktop\\\\AluraCord\\\\pages\\\\chat.js\",\n                                lineNumber: 75,\n                                columnNumber: 23\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Fernanda Lima\\\\Desktop\\\\AluraCord\\\\pages\\\\chat.js\",\n                            lineNumber: 68,\n                            columnNumber: 19\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Fernanda Lima\\\\Desktop\\\\AluraCord\\\\pages\\\\chat.js\",\n                    lineNumber: 48,\n                    columnNumber: 15\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Fernanda Lima\\\\Desktop\\\\AluraCord\\\\pages\\\\chat.js\",\n            lineNumber: 33,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Fernanda Lima\\\\Desktop\\\\AluraCord\\\\pages\\\\chat.js\",\n        lineNumber: 24,\n        columnNumber: 7\n    }, this));\n};\n_s(ChatPage, \"F34Dlww9gZ/3dANz1So9zrhXlxI=\");\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: '100%',\n                marginBottom: '16px',\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'space-between'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Fernanda Lima\\\\Desktop\\\\AluraCord\\\\pages\\\\chat.js\",\n                    lineNumber: 111,\n                    columnNumber: 15\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Fernanda Lima\\\\Desktop\\\\AluraCord\\\\pages\\\\chat.js\",\n                    lineNumber: 114,\n                    columnNumber: 15\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Fernanda Lima\\\\Desktop\\\\AluraCord\\\\pages\\\\chat.js\",\n            lineNumber: 110,\n            columnNumber: 11\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList(props) {\n    var _this = this;\n    console.log(props);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: 'scroll',\n            display: 'flex',\n            flexDirection: 'column-reverse',\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: '16px'\n        },\n        children: props.mensagens.map(function(mensagem) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: '5px',\n                    padding: '6px',\n                    marginBottom: '12px',\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            marginBottom: '8px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                styleSheet: {\n                                    width: '20px',\n                                    height: '20px',\n                                    borderRadius: '50%',\n                                    display: 'inline-block',\n                                    marginRight: '8px'\n                                },\n                                src: \"https://github.com/vanessametonini.png\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Fernanda Lima\\\\Desktop\\\\AluraCord\\\\pages\\\\chat.js\",\n                                lineNumber: 158,\n                                columnNumber: 27\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                tag: \"strong\",\n                                children: mensagem.de\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Fernanda Lima\\\\Desktop\\\\AluraCord\\\\pages\\\\chat.js\",\n                                lineNumber: 168,\n                                columnNumber: 27\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                styleSheet: {\n                                    fontSize: '10px',\n                                    marginLeft: '8px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Fernanda Lima\\\\Desktop\\\\AluraCord\\\\pages\\\\chat.js\",\n                                lineNumber: 171,\n                                columnNumber: 27\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Fernanda Lima\\\\Desktop\\\\AluraCord\\\\pages\\\\chat.js\",\n                        lineNumber: 153,\n                        columnNumber: 23\n                    }, _this),\n                    mensagem.texto\n                ]\n            }, mensagem.id, true, {\n                fileName: \"C:\\\\Users\\\\Fernanda Lima\\\\Desktop\\\\AluraCord\\\\pages\\\\chat.js\",\n                lineNumber: 141,\n                columnNumber: 19\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Fernanda Lima\\\\Desktop\\\\AluraCord\\\\pages\\\\chat.js\",\n        lineNumber: 128,\n        columnNumber: 7\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDZEQsWUFBWSxFQUFFLENBQUs7b0NBQ25CaEIsT0FBTyxFQUFFLENBQWM7b0NBQ3ZCeUMsV0FBVyxFQUFFLENBQUs7Z0NBQ3RCLENBQUM7Z0NBQ0RhLEdBQUcsRUFBRyxDQUFzQzs7Ozs7O3dHQUUvQ3pFLHNEQUFJO2dDQUFDcUUsR0FBRyxFQUFDLENBQVE7MENBQ2I1RCxRQUFRLENBQUNJLEVBQUU7Ozs7Ozt3R0FFZmIsc0RBQUk7Z0NBQ0RrQixVQUFVLEVBQUUsQ0FBQztvQ0FDVHdELFFBQVEsRUFBRSxDQUFNO29DQUNoQkMsVUFBVSxFQUFFLENBQUs7b0NBQ2pCN0MsS0FBSyxFQUFFekIsb0VBQW9DO2dDQUMvQyxDQUFDO2dDQUNEZ0UsR0FBRyxFQUFDLENBQU07MENBRVIsR0FBRyxDQUFDTyxJQUFJLEdBQUdDLGtCQUFrQjs7Ozs7Ozs7Ozs7O29CQUd0Q3BFLFFBQVEsQ0FBQ0ssS0FBSzs7ZUF4Q1ZMLFFBQVEsQ0FBQ0MsRUFBRTs7Ozs7UUEyQzVCLENBQUM7Ozs7OztBQUdYLENBQUM7TUEvRFFnQyxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NoYXQuanM/NGNjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIFRleHQsIFRleHRGaWVsZCwgSW1hZ2UsIEJ1dHRvbiB9IGZyb20gJ0Bza3luZXh1aS9jb21wb25lbnRzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0UGFnZSgpIHtcclxuICAgIGNvbnN0IHttZW5zYWdlbSwgc2V0TWVuc2FnZW19ID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3Qge2xpc3RhRGVNZW5zYWdlbnMsIHNldExpc3RhRGVNZW5zYWdlbnN9ID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU5vdmFNZW5zYWdlbShub3ZhTWVuc2FnZW0pIHtcclxuICAgICAgY29uc3QgbWVuc2FnZW0gPSB7XHJcbiAgICAgICAgICBpZDogbGlzdGFEZU1lbnNhZ2Vucy5sZW5ndGggKyAxLFxyXG4gICAgICAgICAgZGU6ICd2YW5lc3NhbWV0b25pbmknLFxyXG4gICAgICAgICAgdGV4dG86IG5vdmFNZW5zYWdlbSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHNldExpc3RhRGVNZW5zYWdlbnMoW1xyXG4gICAgICAgICAgbWVuc2FnZW0sXHJcbiAgICAgICAgICAuLi5saXN0YURlTWVuc2FnZW5zLFxyXG4gICAgICBdKTtcclxuICAgICAgc2V0TWVuc2FnZW0oJycpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPEJveFxyXG4gICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChodHRwczovL3ZpcnR1YWxiYWNrZ3JvdW5kcy5zaXRlL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA4L3RoZS1tYXRyaXgtZGlnaXRhbC1yYWluLmpwZylgLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJywgYmFja2dyb3VuZEJsZW5kTW9kZTogJ211bHRpcGx5JyxcclxuICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1snMDAwJ11cclxuICAgICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogJzAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAyMCUpJyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzk1JScsXHJcbiAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzk1dmgnLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMzJweCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc4MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzYwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TWVzc2FnZUxpc3QgIC8+XHJcbiAgICAgICAgICAgICAgICAgIHtsaXN0YURlTWVuc2FnZW5zLm1hcCgobWVuc2FnZW1BdHVhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXttZW5zYWdlbUF0dWFsLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbnNhZ2VtQXR1YWwuZGV9OiB7bWVuc2FnZW1BdHVhbC50ZXh0b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgYXM9XCJmb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lbnNhZ2VtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsb3IgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1lbnNhZ2VtKHZhbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTm92YU1lbnNhZ2VtKG1lbnNhZ2VtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNpcmEgc3VhIG1lbnNhZ2VtIGFxdWkuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc2cHggOHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgICA8Qm94IHN0eWxlU2hlZXQ9e3sgd2lkdGg6ICcxMDAlJywgbWFyZ2luQm90dG9tOiAnMTZweCcsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicgfX0gPlxyXG4gICAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9J2hlYWRpbmc1Jz5cclxuICAgICAgICAgICAgICAgICAgQ2hhdFxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J3RlcnRpYXJ5J1xyXG4gICAgICAgICAgICAgICAgICBjb2xvclZhcmlhbnQ9J25ldXRyYWwnXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPSdMb2dvdXQnXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gTWVzc2FnZUxpc3QocHJvcHMpIHtcclxuICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcbiAgcmV0dXJuIChcclxuICAgICAgPEJveFxyXG4gICAgICAgICAgdGFnPVwidWxcIlxyXG4gICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiAnc2Nyb2xsJyxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbi1yZXZlcnNlJyxcclxuICAgICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdLFxyXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgICAge3Byb3BzLm1lbnNhZ2Vucy5tYXAoKG1lbnNhZ2VtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17bWVuc2FnZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0YWc9XCJsaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICc4cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnOHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tL3ZhbmVzc2FtZXRvbmluaS5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgdGFnPVwic3Ryb25nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW5zYWdlbS5kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICc4cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMzAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnPVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAge21lbnNhZ2VtLnRleHRvfVxyXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICA8L0JveD5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiQm94IiwiVGV4dCIsIlRleHRGaWVsZCIsIkltYWdlIiwiQnV0dG9uIiwiUmVhY3QiLCJhcHBDb25maWciLCJDaGF0UGFnZSIsImhhbmRsZU5vdmFNZW5zYWdlbSIsIm5vdmFNZW5zYWdlbSIsIm1lbnNhZ2VtIiwiaWQiLCJsaXN0YURlTWVuc2FnZW5zIiwibGVuZ3RoIiwiZGUiLCJ0ZXh0byIsInNldExpc3RhRGVNZW5zYWdlbnMiLCJzZXRNZW5zYWdlbSIsInVzZVN0YXRlIiwic3R5bGVTaGVldCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiY29sb3IiLCJuZXV0cmFscyIsImZsZXhEaXJlY3Rpb24iLCJmbGV4IiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJwYWRkaW5nIiwiSGVhZGVyIiwicG9zaXRpb24iLCJNZXNzYWdlTGlzdCIsIm1hcCIsIm1lbnNhZ2VtQXR1YWwiLCJsaSIsImFzIiwidmFsdWUiLCJvbkNoYW5nZSIsImV2ZW50IiwidmFsb3IiLCJ0YXJnZXQiLCJvbktleVByZXNzIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJ3aWR0aCIsImJvcmRlciIsInJlc2l6ZSIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwidmFyaWFudCIsImNvbG9yVmFyaWFudCIsImxhYmVsIiwiaHJlZiIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInRhZyIsIm92ZXJmbG93IiwibWVuc2FnZW5zIiwiaG92ZXIiLCJzcmMiLCJmb250U2l6ZSIsIm1hcmdpbkxlZnQiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});