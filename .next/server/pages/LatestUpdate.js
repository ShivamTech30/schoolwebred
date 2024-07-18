/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/LatestUpdate";
exports.ids = ["pages/LatestUpdate"];
exports.modules = {

/***/ "./pages/LatestUpdate.js":
/*!*******************************!*\
  !*** ./pages/LatestUpdate.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layouts_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layouts/Layout */ \"./components/layouts/Layout.js\");\n/* harmony import */ var _material_ui_icons_PictureAsPdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/PictureAsPdf */ \"@material-ui/icons/PictureAsPdf\");\n/* harmony import */ var _material_ui_icons_PictureAsPdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PictureAsPdf__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/shivam/myProjects/StaticNextjsProject/rnsen-20240705T104423Z-001/rnsen/pages/LatestUpdate.js\";\n\n\n\n\n\n\nconst TransferCertificate = () => {\n  // const [allData, setAllData] = useState([]);\n  // const [filteredData, setFilteredData] = useState(allData);\n  // const [inputvalue, setinputvalue] = useState();\n  // const [none, sethide] = useState();\n  const filteredData = [{\n    id: 2,\n    created_on: \"2020-12-15T05:19:39+00:00\",\n    eventdate: \"2020-12-23\",\n    title: \"Books will be available on the specific date.\"\n  }, {\n    id: 3,\n    created_on: \"2020-12-15T08:52:50+00:00\",\n    eventdate: \"2020-12-21\",\n    title: \"Result has been declared\"\n  }, {\n    id: 4,\n    created_on: \"2020-12-15T09:29:56+00:00\",\n    eventdate: \"2020-12-14\",\n    title: \"Annual function data has been declared\"\n  }, {\n    id: 5,\n    created_on: \"2021-07-14T10:19:02+00:00\",\n    eventdate: \"2021-07-15\",\n    title: \"Tomorrow is holiday\"\n  }];\n  console.log(filteredData);\n\n  const handleSearch = event => {\n    var _event$target, _event$target$value, _allData;\n\n    let value = event === null || event === void 0 ? void 0 : (_event$target = event.target) === null || _event$target === void 0 ? void 0 : (_event$target$value = _event$target.value) === null || _event$target$value === void 0 ? void 0 : _event$target$value.toUpperCase();\n    let result = [];\n    let num1 = 100;\n    result = (_allData = allData) === null || _allData === void 0 ? void 0 : _allData.filter(data => {\n      if (isNaN(+value)) {\n        var _data$full_name;\n\n        return (data === null || data === void 0 ? void 0 : (_data$full_name = data.full_name) === null || _data$full_name === void 0 ? void 0 : _data$full_name.toUpperCase().search(value)) !== -1;\n      } else if (!isNaN(+value)) {\n        var _data$admission_numbe;\n\n        return (data === null || data === void 0 ? void 0 : (_data$admission_numbe = data.admission_number) === null || _data$admission_numbe === void 0 ? void 0 : _data$admission_numbe.search(value)) !== -1;\n      }\n    });\n    setFilteredData(result);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"page-container ltst_pdt\",\n      style: {\n        marginBottom: \"0px\"\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pt-5 row\",\n        style: {\n          margin: \"60px\"\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"col-sm-12\",\n          style: {},\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            style: {\n              width: \"100%\"\n            },\n            className: \"table_tc\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                className: \"r1\",\n                children: \"DATE\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 51,\n                columnNumber: 33\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                className: \"r2\",\n                children: \" HEADING\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 33\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                className: \"r3\",\n                children: \"INFO\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 54,\n                columnNumber: 33\n              }, undefined)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 29\n            }, undefined), filteredData.length !== 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n              children: filteredData === null || filteredData === void 0 ? void 0 : filteredData.map((ei, i) =>\n              /*#__PURE__*/\n              // console.log(ei)\n              (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                  children: ei === null || ei === void 0 ? void 0 : ei.eventdate\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 60,\n                  columnNumber: 49\n                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                  children: ei === null || ei === void 0 ? void 0 : ei.title\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 61,\n                  columnNumber: 41\n                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                  children: ei === null || ei === void 0 ? void 0 : ei.title\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 63,\n                  columnNumber: 41\n                }, undefined)]\n              }, i, true, {\n                fileName: _jsxFileName,\n                lineNumber: 60,\n                columnNumber: 37\n              }, undefined))\n            }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n              colSpan: \"4\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"my_box\",\n                style: {\n                  textAlign: \"center\"\n                },\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                  children: \"No Data Found!!\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 71,\n                  columnNumber: 41\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 37\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 33\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 25\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TransferCertificate);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waW5lZ3JvdmUvLi9wYWdlcy9MYXRlc3RVcGRhdGUuanM/MWNhMyJdLCJuYW1lcyI6WyJUcmFuc2ZlckNlcnRpZmljYXRlIiwiZmlsdGVyZWREYXRhIiwiaWQiLCJjcmVhdGVkX29uIiwiZXZlbnRkYXRlIiwidGl0bGUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU2VhcmNoIiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsInRvVXBwZXJDYXNlIiwicmVzdWx0IiwibnVtMSIsImFsbERhdGEiLCJmaWx0ZXIiLCJkYXRhIiwiaXNOYU4iLCJmdWxsX25hbWUiLCJzZWFyY2giLCJhZG1pc3Npb25fbnVtYmVyIiwic2V0RmlsdGVyZWREYXRhIiwibWFyZ2luQm90dG9tIiwibWFyZ2luIiwid2lkdGgiLCJsZW5ndGgiLCJtYXAiLCJlaSIsImkiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsbUJBQW1CLEdBQUcsTUFBTTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUdBLFFBQU1DLFlBQVksR0FBRyxDQUNqQjtBQUFFQyxNQUFFLEVBQUUsQ0FBTjtBQUFTQyxjQUFVLEVBQUUsMkJBQXJCO0FBQWtEQyxhQUFTLEVBQUUsWUFBN0Q7QUFBMkVDLFNBQUssRUFBRTtBQUFsRixHQURpQixFQUVqQjtBQUFFSCxNQUFFLEVBQUUsQ0FBTjtBQUFTQyxjQUFVLEVBQUUsMkJBQXJCO0FBQWtEQyxhQUFTLEVBQUUsWUFBN0Q7QUFBMkVDLFNBQUssRUFBRTtBQUFsRixHQUZpQixFQUdqQjtBQUFFSCxNQUFFLEVBQUUsQ0FBTjtBQUFTQyxjQUFVLEVBQUUsMkJBQXJCO0FBQWtEQyxhQUFTLEVBQUUsWUFBN0Q7QUFBMkVDLFNBQUssRUFBRTtBQUFsRixHQUhpQixFQUlqQjtBQUFFSCxNQUFFLEVBQUUsQ0FBTjtBQUFTQyxjQUFVLEVBQUUsMkJBQXJCO0FBQWtEQyxhQUFTLEVBQUUsWUFBN0Q7QUFBMkVDLFNBQUssRUFBRTtBQUFsRixHQUppQixDQUFyQjtBQVVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWU4sWUFBWjs7QUFFQSxRQUFNTyxZQUFZLEdBQUlDLEtBQUQsSUFBVztBQUFBOztBQUM1QixRQUFJQyxLQUFLLEdBQUdELEtBQUgsYUFBR0EsS0FBSCx3Q0FBR0EsS0FBSyxDQUFFRSxNQUFWLHlFQUFHLGNBQWVELEtBQWxCLHdEQUFHLG9CQUFzQkUsV0FBdEIsRUFBWjtBQUNBLFFBQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0EsUUFBSUMsSUFBSSxHQUFHLEdBQVg7QUFDQUQsVUFBTSxlQUFHRSxPQUFILDZDQUFHLFNBQVNDLE1BQVQsQ0FBaUJDLElBQUQsSUFBVTtBQUMvQixVQUFJQyxLQUFLLENBQUMsQ0FBQ1IsS0FBRixDQUFULEVBQW1CO0FBQUE7O0FBQ2YsZUFBTyxDQUFBTyxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLCtCQUFBQSxJQUFJLENBQUVFLFNBQU4sb0VBQWlCUCxXQUFqQixHQUErQlEsTUFBL0IsQ0FBc0NWLEtBQXRDLE9BQWlELENBQUMsQ0FBekQ7QUFDSCxPQUZELE1BR0ssSUFBSSxDQUFDUSxLQUFLLENBQUMsQ0FBQ1IsS0FBRixDQUFWLEVBQW9CO0FBQUE7O0FBQ3JCLGVBQU8sQ0FBQU8sSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixxQ0FBQUEsSUFBSSxDQUFFSSxnQkFBTixnRkFBd0JELE1BQXhCLENBQStCVixLQUEvQixPQUEwQyxDQUFDLENBQWxEO0FBQ0g7QUFDSixLQVBRLENBQVQ7QUFRQVksbUJBQWUsQ0FBQ1QsTUFBRCxDQUFmO0FBQ0gsR0FiRDs7QUFjQSxzQkFDSSw4REFBQywrREFBRDtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLHlCQUFmO0FBQXlDLFdBQUssRUFBRTtBQUFFVSxvQkFBWSxFQUFFO0FBQWhCLE9BQWhEO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUtJO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQTBCLGFBQUssRUFBRTtBQUFFQyxnQkFBTSxFQUFFO0FBQVYsU0FBakM7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUEyQixlQUFLLEVBQUUsRUFBbEM7QUFBQSxpQ0FDSTtBQUFPLGlCQUFLLEVBQUU7QUFBRUMsbUJBQUssRUFBRTtBQUFULGFBQWQ7QUFBaUMscUJBQVMsRUFBQyxVQUEzQztBQUFBLG9DQUNJO0FBQUEsc0NBQ0k7QUFBSSx5QkFBUyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREosZUFFSTtBQUFJLHlCQUFTLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGSixlQUlJO0FBQUkseUJBQVMsRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixFQU9LeEIsWUFBWSxDQUFDeUIsTUFBYixLQUF3QixDQUF4QixnQkFBNkI7QUFBQSx3QkFDekJ6QixZQUR5QixhQUN6QkEsWUFEeUIsdUJBQ3pCQSxZQUFZLENBQUUwQixHQUFkLENBQWtCLENBQUNDLEVBQUQsRUFBS0MsQ0FBTDtBQUFBO0FBRWY7QUFDQTtBQUFBLHdDQUFZO0FBQUEsNEJBQUtELEVBQUwsYUFBS0EsRUFBTCx1QkFBS0EsRUFBRSxDQUFFeEI7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUFaLGVBQ0k7QUFBQSw0QkFBS3dCLEVBQUwsYUFBS0EsRUFBTCx1QkFBS0EsRUFBRSxDQUFFdkI7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURKLGVBR0k7QUFBQSw0QkFBS3VCLEVBQUwsYUFBS0EsRUFBTCx1QkFBS0EsRUFBRSxDQUFFdkI7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUhKO0FBQUEsaUJBQVN3QixDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSEg7QUFEeUIsNkJBQTdCLGdCQWFHO0FBQUkscUJBQU8sRUFBQyxHQUFaO0FBQUEscUNBQ0k7QUFBSyxrQkFBRSxFQUFDLFFBQVI7QUFBaUIscUJBQUssRUFBRTtBQUFFQywyQkFBUyxFQUFFO0FBQWIsaUJBQXhCO0FBQUEsdUNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFwQlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBMkNILENBNUVEOztBQTZFQSwrREFBZTlCLG1CQUFmIiwiZmlsZSI6Ii4vcGFnZXMvTGF0ZXN0VXBkYXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRzL0xheW91dFwiO1xyXG5pbXBvcnQgUGljdHVyZUFzUGRmSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGljdHVyZUFzUGRmJztcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuIFxyXG5jb25zdCBUcmFuc2ZlckNlcnRpZmljYXRlID0gKCkgPT4ge1xyXG4gICAgLy8gY29uc3QgW2FsbERhdGEsIHNldEFsbERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgLy8gY29uc3QgW2ZpbHRlcmVkRGF0YSwgc2V0RmlsdGVyZWREYXRhXSA9IHVzZVN0YXRlKGFsbERhdGEpO1xyXG4gICAgLy8gY29uc3QgW2lucHV0dmFsdWUsIHNldGlucHV0dmFsdWVdID0gdXNlU3RhdGUoKTtcclxuICAgIC8vIGNvbnN0IFtub25lLCBzZXRoaWRlXSA9IHVzZVN0YXRlKCk7XHJcblxyXG5cclxuICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IFtcclxuICAgICAgICB7IGlkOiAyLCBjcmVhdGVkX29uOiBcIjIwMjAtMTItMTVUMDU6MTk6MzkrMDA6MDBcIiwgZXZlbnRkYXRlOiBcIjIwMjAtMTItMjNcIiwgdGl0bGU6IFwiQm9va3Mgd2lsbCBiZSBhdmFpbGFibGUgb24gdGhlIHNwZWNpZmljIGRhdGUuXCIgfSxcclxuICAgICAgICB7IGlkOiAzLCBjcmVhdGVkX29uOiBcIjIwMjAtMTItMTVUMDg6NTI6NTArMDA6MDBcIiwgZXZlbnRkYXRlOiBcIjIwMjAtMTItMjFcIiwgdGl0bGU6IFwiUmVzdWx0IGhhcyBiZWVuIGRlY2xhcmVkXCIgfSxcclxuICAgICAgICB7IGlkOiA0LCBjcmVhdGVkX29uOiBcIjIwMjAtMTItMTVUMDk6Mjk6NTYrMDA6MDBcIiwgZXZlbnRkYXRlOiBcIjIwMjAtMTItMTRcIiwgdGl0bGU6IFwiQW5udWFsIGZ1bmN0aW9uIGRhdGEgaGFzIGJlZW4gZGVjbGFyZWRcIiB9LFxyXG4gICAgICAgIHsgaWQ6IDUsIGNyZWF0ZWRfb246IFwiMjAyMS0wNy0xNFQxMDoxOTowMiswMDowMFwiLCBldmVudGRhdGU6IFwiMjAyMS0wNy0xNVwiLCB0aXRsZTogXCJUb21vcnJvdyBpcyBob2xpZGF5XCIgfSxcclxuICAgICAgICAgXHJcblxyXG4gICAgXVxyXG4gICAgIFxyXG5cclxuICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkRGF0YSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBldmVudD8udGFyZ2V0Py52YWx1ZT8udG9VcHBlckNhc2UoKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgbGV0IG51bTEgPSAxMDA7XHJcbiAgICAgICAgcmVzdWx0ID0gYWxsRGF0YT8uZmlsdGVyKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc05hTigrdmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YT8uZnVsbF9uYW1lPy50b1VwcGVyQ2FzZSgpLnNlYXJjaCh2YWx1ZSkgIT09IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCFpc05hTigrdmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YT8uYWRtaXNzaW9uX251bWJlcj8uc2VhcmNoKHZhbHVlKSAhPT0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRGaWx0ZXJlZERhdGEocmVzdWx0KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lciBsdHN0X3BkdFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIwcHhcIiwgIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCIgIEFkbWlzc2lvbiBOby4uLi5cIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVNlYXJjaChlKX0gc3R5bGU9e3sgYm9yZGVyOiBcIjJweCBzb2xpZCBibGFja1wiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGZsb2F0OiBcInJpZ2h0XCIsIGhlaWdodDogXCIzMHB4XCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMThweFwiLCBmbG9hdDogXCJyaWdodFwiIH19ICA+RW50ZXIgWW91IEFkbWlzc2lvbiBObyA6LSAgJmVuc3A7IDwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNSByb3dcIiBzdHlsZT17eyBtYXJnaW46IFwiNjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyXCIgc3R5bGU9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fSBjbGFzc05hbWU9XCJ0YWJsZV90Y1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJyMVwiPkRBVEU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJyMlwiPiBIRUFESU5HPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPCAgIHRoIGNsYXNzTmFtZT1cInIzXCI+QWRtaXNzaW9uIE5vPC90aD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInIzXCI+SU5GTzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpbHRlcmVkRGF0YS5sZW5ndGggIT09IDAgPyAoPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVyZWREYXRhPy5tYXAoKGVpLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZWkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9Pjx0ZD57ZWk/LmV2ZW50ZGF0ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntlaT8udGl0bGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8dGQ+e2VpLmFkbWlzc2lvbl9udW1iZXJ9PC90ZD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2VpPy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj0nNCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJteV9ib3hcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5ObyBEYXRhIEZvdW5kISE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBUcmFuc2ZlckNlcnRpZmljYXRlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/LatestUpdate.js\n");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");;

/***/ }),

/***/ "@material-ui/icons/Call":
/*!******************************************!*\
  !*** external "@material-ui/icons/Call" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Call");;

/***/ }),

/***/ "@material-ui/icons/Mail":
/*!******************************************!*\
  !*** external "@material-ui/icons/Mail" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Mail");;

/***/ }),

/***/ "@material-ui/icons/PictureAsPdf":
/*!**************************************************!*\
  !*** external "@material-ui/icons/PictureAsPdf" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/PictureAsPdf");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-toast-notifications":
/*!********************************************!*\
  !*** external "react-toast-notifications" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-toast-notifications");;

/***/ }),

/***/ "react-toast-notifications/dist/ToastProvider":
/*!***************************************************************!*\
  !*** external "react-toast-notifications/dist/ToastProvider" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-toast-notifications/dist/ToastProvider");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_layouts_Layout_js"], function() { return __webpack_exec__("./pages/LatestUpdate.js"); });
module.exports = __webpack_exports__;

})();