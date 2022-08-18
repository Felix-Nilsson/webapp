"use strict";
(() => {
var exports = {};
exports.id = 743;
exports.ids = [743];
exports.modules = {

/***/ 6596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7985);



function Chakra({ cookies , children  }) {
    const colorModeManager = typeof cookies === "string" ? cookieStorageManager(cookies) : localStorageManager;
    return /*#__PURE__*/ _jsx(ChakraProvider, {
        theme: theme,
        colorModeManager: colorModeManager,
        children: children
    });
};
async function getServerSideProps({ req  }) {
    return {
        props: {
            cookies: req.headers.cookie ?? ""
        }
    };
}


/***/ }),

/***/ 3562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);

const Paragraph = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().p)`
  text-align: justify;
  font-size: 16px;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Paragraph);


/***/ }),

/***/ 3922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dx": () => (/* binding */ Title),
/* harmony export */   "WZ": () => (/* binding */ WorkImage),
/* harmony export */   "h_": () => (/* binding */ Meta)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4513);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__);




const Title = ({ children  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/works",
                passHref: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                    children: "Works"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                children: [
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.ChevronRightIcon, {}),
                    " "
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
                display: "inline-block",
                as: "h3",
                fontSize: 20,
                mb: 4,
                children: children
            })
        ]
    });
const WorkImage = ({ src , alt  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
        borderRadius: "lg",
        w: "full",
        src: src,
        alt: alt,
        mb: 4
    });
const Meta = ({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Badge, {
        colorScheme: "green",
        mr: 2,
        children: children
    });


/***/ }),

/***/ 7081:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ _components_chakra__WEBPACK_IMPORTED_MODULE_6__.N)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4513);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_work__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3922);
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3562);
/* harmony import */ var _components_layouts_article__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2857);
/* harmony import */ var _components_chakra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6596);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_article__WEBPACK_IMPORTED_MODULE_5__]);
_components_layouts_article__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Work = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_article__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        title: "BA-thesis",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_work__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .Dx, {
                    children: [
                        "Bachelors thesis ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                            children: "2022"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    children: "My bachelors thesis in computer science, which centered around generating multilingual wikipedia articles. It involved functional programming, getting a good understanding of linguistics as well as using databases to generate facts which can be understood by a human."
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {
                    ml: 4,
                    my: 4,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_work__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .h_, {
                                    children: "PDF"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                    children: [
                                        "Multilingual text robots for abstract wikipedia",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.ExternalLinkIcon, {
                                            mx: "2px"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_work__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .h_, {
                                    children: "Languages"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Python/Grammatical Framework/SPARQL"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_work__WEBPACK_IMPORTED_MODULE_3__/* .WorkImage */ .WZ, {
                    src: "/images/works/ba-thesis-thumbnail.jpg",
                    alt: "Inkdrop"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_work__WEBPACK_IMPORTED_MODULE_3__/* .WorkImage */ .WZ, {
                    src: "/images/works/ba-thesis-thumbnail2.jpg",
                    alt: "Inkdrop"
                })
            ]
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Work);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 429:
/***/ ((module) => {

module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 1480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,675,857,985], () => (__webpack_exec__(7081)));
module.exports = __webpack_exports__;

})();