/******/ ;(() => {
    // webpackBootstrap
    /******/ var __webpack_modules__ = {
        /***/ './cards.js':
            /*!******************!*\
  !*** ./cards.js ***!
  \******************/
            /***/ () => {
                const cardArr = [
                    {
                        suit: 'peaks',
                        rang: '6',
                        src: 'img/6 пики.svg',
                    },

                    {
                        suit: 'peaks',
                        rang: '7',
                        src: 'img/7 пики.svg',
                    },

                    {
                        suit: 'peaks',
                        rang: '8',
                        src: 'img/8 пики.svg',
                    },

                    {
                        suit: 'peaks',
                        rang: '9',
                        src: 'img/9 пики.svg',
                    },

                    {
                        suit: 'peaks',
                        rang: '10',
                        src: 'img/10 пики.svg',
                    },

                    {
                        suit: 'peaks',
                        rang: 'j',
                        src: 'img/валет пики.svg',
                    },

                    {
                        suit: 'peaks',
                        rang: 'q',
                        src: 'img/дама пики.svg',
                    },

                    {
                        suit: 'peaks',
                        rang: 'k',
                        src: 'img/король пики.svg',
                    },

                    {
                        suit: 'peaks',
                        rang: 'a',
                        src: 'img/туз пики.svg',
                    },

                    {
                        suit: 'hearts',
                        rang: '6',
                        src: 'img/6 черви.svg',
                    },

                    {
                        suit: 'hearts',
                        rang: '7',
                        src: 'img/7 черви.svg',
                    },

                    {
                        suit: 'hearts',
                        rang: '8',
                        src: 'img/8 черви.svg',
                    },

                    {
                        suit: 'hearts',
                        rang: '9',
                        src: 'img/9 черви.svg',
                    },

                    {
                        suit: 'hearts',
                        rang: '10',
                        src: 'img/10 черви.svg',
                    },

                    {
                        suit: 'hearts',
                        rang: 'j',
                        src: 'img/валет черви.svg',
                    },

                    {
                        suit: 'hearts',
                        rang: 'q',
                        src: 'img/дама черви.svg',
                    },

                    {
                        suit: 'hearts',
                        rang: 'k',
                        src: 'img/король черви.svg',
                    },

                    {
                        suit: 'hearts',
                        rang: 'a',
                        src: 'img/туз черви.svg',
                    },

                    {
                        suit: 'diamonds',
                        rang: '6',
                        src: 'img/6 бубны.svg',
                    },

                    {
                        suit: 'diamonds',
                        rang: '7',
                        src: 'img/7 бубны.svg',
                    },

                    {
                        suit: 'diamonds',
                        rang: '8',
                        src: 'img/8 бубны.svg',
                    },

                    {
                        suit: 'diamonds',
                        rang: '9',
                        src: 'img/9 бубны.svg',
                    },

                    {
                        suit: 'diamonds',
                        rang: '10',
                        src: 'img/10 бубны.svg',
                    },

                    {
                        suit: 'diamonds',
                        rang: 'j',
                        src: 'img/валет бубны.svg',
                    },

                    {
                        suit: 'diamonds',
                        rang: 'q',
                        src: 'img/дама бубны.svg',
                    },

                    {
                        suit: 'diamonds',
                        rang: 'k',
                        src: 'img/король бубны.svg',
                    },

                    {
                        suit: 'diamonds',
                        rang: 'a',
                        src: 'img/туз бубны.svg',
                    },

                    {
                        suit: 'diamonds',
                        rang: '6',
                        src: 'img/6 бубны.svg',
                    },

                    {
                        suit: 'clubs',
                        rang: '6',
                        src: 'img/6 крести.svg',
                    },

                    {
                        suit: 'clubs',
                        rang: '7',
                        src: 'img/7 крести.svg',
                    },

                    {
                        suit: 'clubs',
                        rang: '8',
                        src: 'img/8 крести.svg',
                    },

                    {
                        suit: 'clubs',
                        rang: '9',
                        src: 'img/9 крести.svg',
                    },

                    {
                        suit: 'clubs',
                        rang: '9',
                        src: 'img/9 крести.svg',
                    },

                    {
                        suit: 'clubs',
                        rang: '10',
                        src: 'img/10 крести.svg',
                    },

                    {
                        suit: 'clubs',
                        rang: 'j',
                        src: 'img/валет крести.svg',
                    },

                    {
                        suit: 'clubs',
                        rang: 'q',
                        src: 'img/дама крести.svg',
                    },

                    {
                        suit: 'clubs',
                        rang: 'k',
                        src: 'img/король крести.svg',
                    },

                    {
                        suit: 'clubs',
                        rang: 'a',
                        src: 'img/туз крести.svg',
                    },
                ]

                /***/
            },

        /***/ './difficulty.js':
            /*!***********************!*\
  !*** ./difficulty.js ***!
  \***********************/
            /***/ () => {
                document.querySelector('.b1').addEventListener('click', () => {
                    window.difficulty = 1
                    localStorage.setItem('difficulty', window.difficulty)
                    console.log(window.difficulty)
                })

                document.querySelector('.b2').addEventListener('click', () => {
                    window.difficulty = 2
                    localStorage.setItem('difficulty', window.difficulty)
                    console.log(window.difficulty)
                })

                document.querySelector('.b3').addEventListener('click', () => {
                    window.difficulty = 3
                    localStorage.setItem('difficulty', window.difficulty)
                    console.log(window.difficulty)
                })

                /***/
            },

        /***/ './index.js':
            /*!******************!*\
  !*** ./index.js ***!
  \******************/
            /***/ () => {
                /* eslint-disable prettier/prettier */

                window = {
                    difficulty: 0,
                }

                /***/
            },

        /***/ './node_modules/css-loader/dist/cjs.js!./index.css':
            /*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./index.css ***!
  \*********************************************************/
            /***/ (module, __webpack_exports__, __webpack_require__) => {
                'use strict'
                __webpack_require__.r(__webpack_exports__)
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                )
                /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ./node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js'
                    )
                /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
                    )
                /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ./node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js'
                    )
                /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
                    )
                /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ./node_modules/css-loader/dist/runtime/getUrl.js */ './node_modules/css-loader/dist/runtime/getUrl.js'
                    )
                /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__
                    )
                // Imports

                var ___CSS_LOADER_URL_IMPORT_0___ = new URL(
                    /* asset import */ __webpack_require__(
                        /*! Stratos/Web fonts/stratosskyengweb-black.woff2 */ './Stratos/Web fonts/stratosskyengweb-black.woff2'
                    ),
                    __webpack_require__.b
                )
                var ___CSS_LOADER_URL_IMPORT_1___ = new URL(
                    /* asset import */ __webpack_require__(
                        /*! Stratos/Web Fonts/stratosskyengweb-black.woff */ './Stratos/Web Fonts/stratosskyengweb-black.woff'
                    ),
                    __webpack_require__.b
                )
                var ___CSS_LOADER_EXPORT___ =
                    _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
                    )
                var ___CSS_LOADER_URL_REPLACEMENT_0___ =
                    _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
                        ___CSS_LOADER_URL_IMPORT_0___
                    )
                var ___CSS_LOADER_URL_REPLACEMENT_1___ =
                    _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
                        ___CSS_LOADER_URL_IMPORT_1___
                    )
                // Module
                ___CSS_LOADER_EXPORT___.push([
                    module.id,
                    "* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n@font-face {\r\n    font-family: Stratos;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: local('Stratos'),\r\n        url(" +
                        ___CSS_LOADER_URL_REPLACEMENT_0___ +
                        ") format('woff2'),\r\n        url(" +
                        ___CSS_LOADER_URL_REPLACEMENT_1___ +
                        ") format('woff');\r\n}\r\n\r\nbody {\r\n    font-family: Stratos, sans-serif;\r\n    background-color: #004980;\r\n}\r\n\r\n.win-img {\r\n    padding-top: 30px;\r\n    padding-left: 184px;\r\n}\r\n\r\n.win-text {\r\n    color: #004980;\r\n    font-size: 40px;\r\n    line-height: 48px;\r\n    padding-top: 4px;\r\n    padding-left: 112px;\r\n}\r\n\r\n.div-lose {\r\n    position: fixed;\r\n    z-index: 9;\r\n    margin: 20px;\r\n    background-color: #c2f5ff;\r\n    height: 459px;\r\n    width: 480px;\r\n    border-radius: 12px;\r\n    margin-left: calc(50% - 240px);\r\n    margin-top: 229px;\r\n}\r\n\r\n.lose-img {\r\n    padding-top: 30px;\r\n    padding-left: 184px;\r\n}\r\n\r\n.lose-text {\r\n    color: #004980;\r\n    font-size: 40px;\r\n    line-height: 48px;\r\n    padding-top: 4px;\r\n    padding-left: 112px;\r\n}\r\n\r\n.time-spent-title {\r\n    color: #000;\r\n    font-size: 24px;\r\n    line-height: 32px;\r\n    padding-top: 28px;\r\n    padding-left: 125px;\r\n}\r\n\r\n.time-spent {\r\n    color: #000;\r\n    font-size: 64px;\r\n    line-height: 72px;\r\n    padding-top: 10px;\r\n    padding-left: 163px;\r\n}\r\n\r\n.screen2-hat {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.timer-name {\r\n    font-weight: 28px;\r\n    font-size: 16px;\r\n    line-height: 32px;\r\n    color: #fff;\r\n}\r\n\r\n.timer-name-div {\r\n    display: flex;\r\n}\r\n\r\n.button-again-win {\r\n    box-sizing: border-box;\r\n    background-color: #7ac100;\r\n    color: #fff;\r\n    width: 246px;\r\n    height: 50px;\r\n    border: none;\r\n    border-radius: 12px;\r\n    font-size: 24px;\r\n    line-height: 32px;\r\n    margin-top: 40px;\r\n    margin-left: 117px;\r\n}\r\n\r\n.div-win {\r\n    position: fixed;\r\n    z-index: 9;\r\n    margin: 20px;\r\n    background-color: #c2f5ff;\r\n    height: 459px;\r\n    width: 480px;\r\n    border-radius: 12px;\r\n    margin-left: calc(50% - 240px);\r\n    margin-top: 229px;\r\n}\r\n\r\n.body-center {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n}\r\n\r\n.main {\r\n    background-color: #c2f5ff;\r\n    height: 459px;\r\n    width: 480px;\r\n    border-radius: 12px;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    margin-top: 158px;\r\n}\r\n\r\n.h1 {\r\n    color: #004980;\r\n    text-align: center;\r\n    font-weight: 400;\r\n    font-size: 40px;\r\n    line-height: 48px;\r\n    margin-top: 52px;\r\n}\r\n\r\n.d123 {\r\n    display: flex;\r\n    gap: 24px;\r\n}\r\n\r\n.button {\r\n    box-sizing: border-box;\r\n    width: 98px;\r\n    height: 98px;\r\n    background-color: #fff;\r\n    border-radius: 12px;\r\n    border: none;\r\n    margin-top: 48px;\r\n    color: #0080c1;\r\n    font-weight: 97px;\r\n    font-size: 64px;\r\n    line-height: 72px;\r\n}\r\n\r\n.button-start {\r\n    box-sizing: border-box;\r\n    background-color: #7ac100;\r\n    width: 246px;\r\n    height: 50px;\r\n    border-radius: 12px;\r\n    border: none;\r\n    color: #fff;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 32px;\r\n    margin-top: 67px;\r\n}\r\n\r\n.screen2-hat {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.timer-name {\r\n    font-weight: 28px;\r\n    font-size: 16px;\r\n    line-height: 32px;\r\n    color: #fff;\r\n}\r\n\r\n.timer-name-div {\r\n    display: flex;\r\n}\r\n\r\n.min {\r\n    margin-top: 22px;\r\n    margin-left: 61px;\r\n}\r\n\r\n.sec {\r\n    margin-top: 22px;\r\n    margin-left: 57px;\r\n}\r\n\r\n.timer {\r\n    color: #fff;\r\n    font-weight: 400;\r\n    font-size: 64px;\r\n    line-height: 72px;\r\n    margin-left: 35px;\r\n}\r\n\r\n.button-again {\r\n    box-sizing: border-box;\r\n    background-color: #7ac100;\r\n    color: #fff;\r\n    width: 246px;\r\n    height: 50px;\r\n    border: none;\r\n    border-radius: 12px;\r\n    font-size: 24px;\r\n    line-height: 32px;\r\n    margin-right: 23px;\r\n    margin-top: 52px;\r\n}\r\n\r\n.cards-first {\r\n    margin: 35px 23px 15px 26px;\r\n}\r\n\r\n.cards {\r\n    margin: 15px 23px 15px 26px;\r\n}\r\n\r\n.card-row {\r\n    display: flex;\r\n    gap: 15px;\r\n}\r\n\r\n.cards-div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n",
                    '',
                    {
                        version: 3,
                        sources: ['webpack://./index.css'],
                        names: [],
                        mappings:
                            'AAAA;IACI,SAAS;IACT,UAAU;AACd;AACA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB;;8DAEuE;AAC3E;;AAEA;IACI,gCAAgC;IAChC,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,UAAU;IACV,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,8BAA8B;IAC9B,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,sBAAsB;IACtB,yBAAyB;IACzB,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,UAAU;IACV,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,8BAA8B;IAC9B,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;IAChB,cAAc;IACd,iBAAiB;IACjB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;IACtB,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;IACtB,yBAAyB;IACzB,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB',
                        sourcesContent: [
                            "* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n@font-face {\r\n    font-family: Stratos;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: local('Stratos'),\r\n        url('Stratos/Web fonts/stratosskyengweb-black.woff2') format('woff2'),\r\n        url('Stratos/Web Fonts/stratosskyengweb-black.woff') format('woff');\r\n}\r\n\r\nbody {\r\n    font-family: Stratos, sans-serif;\r\n    background-color: #004980;\r\n}\r\n\r\n.win-img {\r\n    padding-top: 30px;\r\n    padding-left: 184px;\r\n}\r\n\r\n.win-text {\r\n    color: #004980;\r\n    font-size: 40px;\r\n    line-height: 48px;\r\n    padding-top: 4px;\r\n    padding-left: 112px;\r\n}\r\n\r\n.div-lose {\r\n    position: fixed;\r\n    z-index: 9;\r\n    margin: 20px;\r\n    background-color: #c2f5ff;\r\n    height: 459px;\r\n    width: 480px;\r\n    border-radius: 12px;\r\n    margin-left: calc(50% - 240px);\r\n    margin-top: 229px;\r\n}\r\n\r\n.lose-img {\r\n    padding-top: 30px;\r\n    padding-left: 184px;\r\n}\r\n\r\n.lose-text {\r\n    color: #004980;\r\n    font-size: 40px;\r\n    line-height: 48px;\r\n    padding-top: 4px;\r\n    padding-left: 112px;\r\n}\r\n\r\n.time-spent-title {\r\n    color: #000;\r\n    font-size: 24px;\r\n    line-height: 32px;\r\n    padding-top: 28px;\r\n    padding-left: 125px;\r\n}\r\n\r\n.time-spent {\r\n    color: #000;\r\n    font-size: 64px;\r\n    line-height: 72px;\r\n    padding-top: 10px;\r\n    padding-left: 163px;\r\n}\r\n\r\n.screen2-hat {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.timer-name {\r\n    font-weight: 28px;\r\n    font-size: 16px;\r\n    line-height: 32px;\r\n    color: #fff;\r\n}\r\n\r\n.timer-name-div {\r\n    display: flex;\r\n}\r\n\r\n.button-again-win {\r\n    box-sizing: border-box;\r\n    background-color: #7ac100;\r\n    color: #fff;\r\n    width: 246px;\r\n    height: 50px;\r\n    border: none;\r\n    border-radius: 12px;\r\n    font-size: 24px;\r\n    line-height: 32px;\r\n    margin-top: 40px;\r\n    margin-left: 117px;\r\n}\r\n\r\n.div-win {\r\n    position: fixed;\r\n    z-index: 9;\r\n    margin: 20px;\r\n    background-color: #c2f5ff;\r\n    height: 459px;\r\n    width: 480px;\r\n    border-radius: 12px;\r\n    margin-left: calc(50% - 240px);\r\n    margin-top: 229px;\r\n}\r\n\r\n.body-center {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n}\r\n\r\n.main {\r\n    background-color: #c2f5ff;\r\n    height: 459px;\r\n    width: 480px;\r\n    border-radius: 12px;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    margin-top: 158px;\r\n}\r\n\r\n.h1 {\r\n    color: #004980;\r\n    text-align: center;\r\n    font-weight: 400;\r\n    font-size: 40px;\r\n    line-height: 48px;\r\n    margin-top: 52px;\r\n}\r\n\r\n.d123 {\r\n    display: flex;\r\n    gap: 24px;\r\n}\r\n\r\n.button {\r\n    box-sizing: border-box;\r\n    width: 98px;\r\n    height: 98px;\r\n    background-color: #fff;\r\n    border-radius: 12px;\r\n    border: none;\r\n    margin-top: 48px;\r\n    color: #0080c1;\r\n    font-weight: 97px;\r\n    font-size: 64px;\r\n    line-height: 72px;\r\n}\r\n\r\n.button-start {\r\n    box-sizing: border-box;\r\n    background-color: #7ac100;\r\n    width: 246px;\r\n    height: 50px;\r\n    border-radius: 12px;\r\n    border: none;\r\n    color: #fff;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 32px;\r\n    margin-top: 67px;\r\n}\r\n\r\n.screen2-hat {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.timer-name {\r\n    font-weight: 28px;\r\n    font-size: 16px;\r\n    line-height: 32px;\r\n    color: #fff;\r\n}\r\n\r\n.timer-name-div {\r\n    display: flex;\r\n}\r\n\r\n.min {\r\n    margin-top: 22px;\r\n    margin-left: 61px;\r\n}\r\n\r\n.sec {\r\n    margin-top: 22px;\r\n    margin-left: 57px;\r\n}\r\n\r\n.timer {\r\n    color: #fff;\r\n    font-weight: 400;\r\n    font-size: 64px;\r\n    line-height: 72px;\r\n    margin-left: 35px;\r\n}\r\n\r\n.button-again {\r\n    box-sizing: border-box;\r\n    background-color: #7ac100;\r\n    color: #fff;\r\n    width: 246px;\r\n    height: 50px;\r\n    border: none;\r\n    border-radius: 12px;\r\n    font-size: 24px;\r\n    line-height: 32px;\r\n    margin-right: 23px;\r\n    margin-top: 52px;\r\n}\r\n\r\n.cards-first {\r\n    margin: 35px 23px 15px 26px;\r\n}\r\n\r\n.cards {\r\n    margin: 15px 23px 15px 26px;\r\n}\r\n\r\n.card-row {\r\n    display: flex;\r\n    gap: 15px;\r\n}\r\n\r\n.cards-div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n",
                        ],
                        sourceRoot: '',
                    },
                ])
                // Exports
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    ___CSS_LOADER_EXPORT___

                /***/
            },

        /***/ './node_modules/css-loader/dist/runtime/api.js':
            /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
            /***/ (module) => {
                'use strict'

                /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
                module.exports = function (cssWithMappingToString) {
                    var list = []

                    // return the list of modules as css string
                    list.toString = function toString() {
                        return this.map(function (item) {
                            var content = ''
                            var needLayer = typeof item[5] !== 'undefined'
                            if (item[4]) {
                                content += '@supports ('.concat(item[4], ') {')
                            }
                            if (item[2]) {
                                content += '@media '.concat(item[2], ' {')
                            }
                            if (needLayer) {
                                content += '@layer'.concat(
                                    item[5].length > 0
                                        ? ' '.concat(item[5])
                                        : '',
                                    ' {'
                                )
                            }
                            content += cssWithMappingToString(item)
                            if (needLayer) {
                                content += '}'
                            }
                            if (item[2]) {
                                content += '}'
                            }
                            if (item[4]) {
                                content += '}'
                            }
                            return content
                        }).join('')
                    }

                    // import a list of modules into the list
                    list.i = function i(
                        modules,
                        media,
                        dedupe,
                        supports,
                        layer
                    ) {
                        if (typeof modules === 'string') {
                            modules = [[null, modules, undefined]]
                        }
                        var alreadyImportedModules = {}
                        if (dedupe) {
                            for (var k = 0; k < this.length; k++) {
                                var id = this[k][0]
                                if (id != null) {
                                    alreadyImportedModules[id] = true
                                }
                            }
                        }
                        for (var _k = 0; _k < modules.length; _k++) {
                            var item = [].concat(modules[_k])
                            if (dedupe && alreadyImportedModules[item[0]]) {
                                continue
                            }
                            if (typeof layer !== 'undefined') {
                                if (typeof item[5] === 'undefined') {
                                    item[5] = layer
                                } else {
                                    item[1] = '@layer'
                                        .concat(
                                            item[5].length > 0
                                                ? ' '.concat(item[5])
                                                : '',
                                            ' {'
                                        )
                                        .concat(item[1], '}')
                                    item[5] = layer
                                }
                            }
                            if (media) {
                                if (!item[2]) {
                                    item[2] = media
                                } else {
                                    item[1] = '@media '
                                        .concat(item[2], ' {')
                                        .concat(item[1], '}')
                                    item[2] = media
                                }
                            }
                            if (supports) {
                                if (!item[4]) {
                                    item[4] = ''.concat(supports)
                                } else {
                                    item[1] = '@supports ('
                                        .concat(item[4], ') {')
                                        .concat(item[1], '}')
                                    item[4] = supports
                                }
                            }
                            list.push(item)
                        }
                    }
                    return list
                }

                /***/
            },

        /***/ './node_modules/css-loader/dist/runtime/getUrl.js':
            /*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
            /***/ (module) => {
                'use strict'

                module.exports = function (url, options) {
                    if (!options) {
                        options = {}
                    }
                    if (!url) {
                        return url
                    }
                    url = String(url.__esModule ? url.default : url)

                    // If url is already wrapped in quotes, remove them
                    if (/^['"].*['"]$/.test(url)) {
                        url = url.slice(1, -1)
                    }
                    if (options.hash) {
                        url += options.hash
                    }

                    // Should url be wrapped?
                    // See https://drafts.csswg.org/css-values-3/#urls
                    if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
                        return '"'.concat(
                            url.replace(/"/g, '\\"').replace(/\n/g, '\\n'),
                            '"'
                        )
                    }
                    return url
                }

                /***/
            },

        /***/ './node_modules/css-loader/dist/runtime/sourceMaps.js':
            /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
            /***/ (module) => {
                'use strict'

                module.exports = function (item) {
                    var content = item[1]
                    var cssMapping = item[3]
                    if (!cssMapping) {
                        return content
                    }
                    if (typeof btoa === 'function') {
                        var base64 = btoa(
                            unescape(
                                encodeURIComponent(JSON.stringify(cssMapping))
                            )
                        )
                        var data =
                            'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                                base64
                            )
                        var sourceMapping = '/*# '.concat(data, ' */')
                        return [content].concat([sourceMapping]).join('\n')
                    }
                    return [content].join('\n')
                }

                /***/
            },

        /***/ './index.css':
            /*!*******************!*\
  !*** ./index.css ***!
  \*******************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                'use strict'
                __webpack_require__.r(__webpack_exports__)
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                )
                /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
                    )
                /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
                    )
                /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js'
                    )
                /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
                    )
                /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js'
                    )
                /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
                    )
                /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        /*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'
                    )
                /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
                    )
                /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        /*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js'
                    )
                /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
                    )
                /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
                    __webpack_require__(
                        /*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js'
                    )
                /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
                    )
                /* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ =
                    __webpack_require__(
                        /*! !!./node_modules/css-loader/dist/cjs.js!./index.css */ './node_modules/css-loader/dist/cjs.js!./index.css'
                    )

                var options = {}

                options.styleTagTransform =
                    _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default()
                options.setAttributes =
                    _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default()

                options.insert =
                    _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
                        null,
                        'head'
                    )

                options.domAPI =
                    _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default()
                options.insertStyleElement =
                    _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default()

                var update =
                    _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
                        _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[
                            'default'
                        ],
                        options
                    )

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[
                        'default'
                    ] &&
                    _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[
                        'default'
                    ].locals
                        ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[
                              'default'
                          ].locals
                        : undefined

                /***/
            },

        /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
            /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
            /***/ (module) => {
                'use strict'

                var stylesInDOM = []

                function getIndexByIdentifier(identifier) {
                    var result = -1

                    for (var i = 0; i < stylesInDOM.length; i++) {
                        if (stylesInDOM[i].identifier === identifier) {
                            result = i
                            break
                        }
                    }

                    return result
                }

                function modulesToDom(list, options) {
                    var idCountMap = {}
                    var identifiers = []

                    for (var i = 0; i < list.length; i++) {
                        var item = list[i]
                        var id = options.base ? item[0] + options.base : item[0]
                        var count = idCountMap[id] || 0
                        var identifier = ''.concat(id, ' ').concat(count)
                        idCountMap[id] = count + 1
                        var indexByIdentifier = getIndexByIdentifier(identifier)
                        var obj = {
                            css: item[1],
                            media: item[2],
                            sourceMap: item[3],
                            supports: item[4],
                            layer: item[5],
                        }

                        if (indexByIdentifier !== -1) {
                            stylesInDOM[indexByIdentifier].references++
                            stylesInDOM[indexByIdentifier].updater(obj)
                        } else {
                            var updater = addElementStyle(obj, options)
                            options.byIndex = i
                            stylesInDOM.splice(i, 0, {
                                identifier: identifier,
                                updater: updater,
                                references: 1,
                            })
                        }

                        identifiers.push(identifier)
                    }

                    return identifiers
                }

                function addElementStyle(obj, options) {
                    var api = options.domAPI(options)
                    api.update(obj)

                    var updater = function updater(newObj) {
                        if (newObj) {
                            if (
                                newObj.css === obj.css &&
                                newObj.media === obj.media &&
                                newObj.sourceMap === obj.sourceMap &&
                                newObj.supports === obj.supports &&
                                newObj.layer === obj.layer
                            ) {
                                return
                            }

                            api.update((obj = newObj))
                        } else {
                            api.remove()
                        }
                    }

                    return updater
                }

                module.exports = function (list, options) {
                    options = options || {}
                    list = list || []
                    var lastIdentifiers = modulesToDom(list, options)
                    return function update(newList) {
                        newList = newList || []

                        for (var i = 0; i < lastIdentifiers.length; i++) {
                            var identifier = lastIdentifiers[i]
                            var index = getIndexByIdentifier(identifier)
                            stylesInDOM[index].references--
                        }

                        var newLastIdentifiers = modulesToDom(newList, options)

                        for (var _i = 0; _i < lastIdentifiers.length; _i++) {
                            var _identifier = lastIdentifiers[_i]

                            var _index = getIndexByIdentifier(_identifier)

                            if (stylesInDOM[_index].references === 0) {
                                stylesInDOM[_index].updater()

                                stylesInDOM.splice(_index, 1)
                            }
                        }

                        lastIdentifiers = newLastIdentifiers
                    }
                }

                /***/
            },

        /***/ './node_modules/style-loader/dist/runtime/insertBySelector.js':
            /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
            /***/ (module) => {
                'use strict'

                var memo = {}
                /* istanbul ignore next  */

                function getTarget(target) {
                    if (typeof memo[target] === 'undefined') {
                        var styleTarget = document.querySelector(target) // Special case to return head of iframe instead of iframe itself

                        if (
                            window.HTMLIFrameElement &&
                            styleTarget instanceof window.HTMLIFrameElement
                        ) {
                            try {
                                // This will throw an exception if access to iframe is blocked
                                // due to cross-origin restrictions
                                styleTarget = styleTarget.contentDocument.head
                            } catch (e) {
                                // istanbul ignore next
                                styleTarget = null
                            }
                        }

                        memo[target] = styleTarget
                    }

                    return memo[target]
                }
                /* istanbul ignore next  */

                function insertBySelector(insert, style) {
                    var target = getTarget(insert)

                    if (!target) {
                        throw new Error(
                            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                        )
                    }

                    target.appendChild(style)
                }

                module.exports = insertBySelector

                /***/
            },

        /***/ './node_modules/style-loader/dist/runtime/insertStyleElement.js':
            /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
            /***/ (module) => {
                'use strict'

                /* istanbul ignore next  */
                function insertStyleElement(options) {
                    var element = document.createElement('style')
                    options.setAttributes(element, options.attributes)
                    options.insert(element, options.options)
                    return element
                }

                module.exports = insertStyleElement

                /***/
            },

        /***/ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
            /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
            /***/ (module, __unused_webpack_exports, __webpack_require__) => {
                'use strict'

                /* istanbul ignore next  */
                function setAttributesWithoutAttributes(styleElement) {
                    var nonce = true ? __webpack_require__.nc : 0

                    if (nonce) {
                        styleElement.setAttribute('nonce', nonce)
                    }
                }

                module.exports = setAttributesWithoutAttributes

                /***/
            },

        /***/ './node_modules/style-loader/dist/runtime/styleDomAPI.js':
            /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
            /***/ (module) => {
                'use strict'

                /* istanbul ignore next  */
                function apply(styleElement, options, obj) {
                    var css = ''

                    if (obj.supports) {
                        css += '@supports ('.concat(obj.supports, ') {')
                    }

                    if (obj.media) {
                        css += '@media '.concat(obj.media, ' {')
                    }

                    var needLayer = typeof obj.layer !== 'undefined'

                    if (needLayer) {
                        css += '@layer'.concat(
                            obj.layer.length > 0 ? ' '.concat(obj.layer) : '',
                            ' {'
                        )
                    }

                    css += obj.css

                    if (needLayer) {
                        css += '}'
                    }

                    if (obj.media) {
                        css += '}'
                    }

                    if (obj.supports) {
                        css += '}'
                    }

                    var sourceMap = obj.sourceMap

                    if (sourceMap && typeof btoa !== 'undefined') {
                        css +=
                            '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                btoa(
                                    unescape(
                                        encodeURIComponent(
                                            JSON.stringify(sourceMap)
                                        )
                                    )
                                ),
                                ' */'
                            )
                    } // For old IE

                    /* istanbul ignore if  */

                    options.styleTagTransform(
                        css,
                        styleElement,
                        options.options
                    )
                }

                function removeStyleElement(styleElement) {
                    // istanbul ignore if
                    if (styleElement.parentNode === null) {
                        return false
                    }

                    styleElement.parentNode.removeChild(styleElement)
                }
                /* istanbul ignore next  */

                function domAPI(options) {
                    var styleElement = options.insertStyleElement(options)
                    return {
                        update: function update(obj) {
                            apply(styleElement, options, obj)
                        },
                        remove: function remove() {
                            removeStyleElement(styleElement)
                        },
                    }
                }

                module.exports = domAPI

                /***/
            },

        /***/ './node_modules/style-loader/dist/runtime/styleTagTransform.js':
            /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
            /***/ (module) => {
                'use strict'

                /* istanbul ignore next  */
                function styleTagTransform(css, styleElement) {
                    if (styleElement.styleSheet) {
                        styleElement.styleSheet.cssText = css
                    } else {
                        while (styleElement.firstChild) {
                            styleElement.removeChild(styleElement.firstChild)
                        }

                        styleElement.appendChild(document.createTextNode(css))
                    }
                }

                module.exports = styleTagTransform

                /***/
            },

        /***/ './Stratos/Web Fonts/stratosskyengweb-black.woff':
            /*!*******************************************************!*\
  !*** ./Stratos/Web Fonts/stratosskyengweb-black.woff ***!
  \*******************************************************/
            /***/ (module, __unused_webpack_exports, __webpack_require__) => {
                'use strict'
                module.exports =
                    __webpack_require__.p + 'e23eaa28311b694d782e.woff'

                /***/
            },

        /***/ './Stratos/Web fonts/stratosskyengweb-black.woff2':
            /*!********************************************************!*\
  !*** ./Stratos/Web fonts/stratosskyengweb-black.woff2 ***!
  \********************************************************/
            /***/ (module, __unused_webpack_exports, __webpack_require__) => {
                'use strict'
                module.exports =
                    __webpack_require__.p + '3e7fbd1c96136268b439.woff2'

                /***/
            },

        /******/
    }
    /************************************************************************/
    /******/ // The module cache
    /******/ var __webpack_module_cache__ = {}
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ var cachedModule = __webpack_module_cache__[moduleId]
        /******/ if (cachedModule !== undefined) {
            /******/ return cachedModule.exports
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = (__webpack_module_cache__[moduleId] = {
            /******/ id: moduleId,
            /******/ // no module.loaded needed
            /******/ exports: {},
            /******/
        })
        /******/
        /******/ // Execute the module function
        /******/ __webpack_modules__[moduleId](
            module,
            module.exports,
            __webpack_require__
        )
        /******/
        /******/ // Return the exports of the module
        /******/ return module.exports
        /******/
    }
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/ __webpack_require__.m =
        __webpack_modules__ /* webpack/runtime/compat get default export */
    /******/
    /************************************************************************/
    /******/
    /******/
    ;(() => {
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = (module) => {
            /******/ var getter =
                module && module.__esModule
                    ? /******/ () => module['default']
                    : /******/ () => module
            /******/ __webpack_require__.d(getter, { a: getter })
            /******/ return getter
            /******/
        }
        /******/
    })() /* webpack/runtime/define property getters */
    /******/
    /******/
    /******/
    ;(() => {
        /******/ // define getter functions for harmony exports
        /******/ __webpack_require__.d = (exports, definition) => {
            /******/ for (var key in definition) {
                /******/ if (
                    __webpack_require__.o(definition, key) &&
                    !__webpack_require__.o(exports, key)
                ) {
                    /******/ Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: definition[key],
                    })
                    /******/
                }
                /******/
            }
            /******/
        }
        /******/
    })() /* webpack/runtime/global */
    /******/
    /******/
    /******/
    ;(() => {
        /******/ __webpack_require__.g = (function () {
            /******/ if (typeof globalThis === 'object') return globalThis
            /******/ try {
                /******/ return this || new Function('return this')()
                /******/
            } catch (e) {
                /******/ if (typeof window === 'object') return window
                /******/
            }
            /******/
        })()
        /******/
    })() /* webpack/runtime/hasOwnProperty shorthand */
    /******/
    /******/
    /******/
    ;(() => {
        /******/ __webpack_require__.o = (obj, prop) =>
            Object.prototype.hasOwnProperty.call(obj, prop)
        /******/
    })() /* webpack/runtime/make namespace object */
    /******/
    /******/
    /******/
    ;(() => {
        /******/ // define __esModule on exports
        /******/ __webpack_require__.r = (exports) => {
            /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module',
                })
                /******/
            }
            /******/ Object.defineProperty(exports, '__esModule', {
                value: true,
            })
            /******/
        }
        /******/
    })() /* webpack/runtime/publicPath */
    /******/
    /******/
    /******/
    ;(() => {
        /******/ var scriptUrl
        /******/ if (__webpack_require__.g.importScripts)
            scriptUrl = __webpack_require__.g.location + ''
        /******/ var document = __webpack_require__.g.document
        /******/ if (!scriptUrl && document) {
            /******/ if (document.currentScript)
                /******/ scriptUrl = document.currentScript.src
            /******/ if (!scriptUrl) {
                /******/ var scripts = document.getElementsByTagName('script')
                /******/ if (scripts.length)
                    scriptUrl = scripts[scripts.length - 1].src
                /******/
            }
            /******/
        }
        /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
        /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
        /******/ if (!scriptUrl)
            throw new Error(
                'Automatic publicPath is not supported in this browser'
            )
        /******/ scriptUrl = scriptUrl
            .replace(/#.*$/, '')
            .replace(/\?.*$/, '')
            .replace(/\/[^\/]+$/, '/')
        /******/ __webpack_require__.p = scriptUrl
        /******/
    })() /* webpack/runtime/jsonp chunk loading */
    /******/
    /******/
    /******/
    ;(() => {
        /******/ __webpack_require__.b = document.baseURI || self.location.href
        /******/
        /******/ // object to store loaded and loading chunks
        /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
        /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
        /******/ var installedChunks = {
            /******/ main: 0,
            /******/
        }
        /******/
        /******/ // no chunk on demand loading
        /******/
        /******/ // no prefetching
        /******/
        /******/ // no preloaded
        /******/
        /******/ // no HMR
        /******/
        /******/ // no HMR manifest
        /******/
        /******/ // no on chunks loaded
        /******/
        /******/ // no jsonp function
        /******/
    })() /* webpack/runtime/nonce */
    /******/
    /******/
    /******/
    ;(() => {
        /******/ __webpack_require__.nc = undefined
        /******/
    })()
    /******/
    /************************************************************************/
    var __webpack_exports__ = {}
    // This entry need to be wrapped in an IIFE because it need to be in strict mode.
    ;(() => {
        'use strict'
        /*!*****************!*\
  !*** ./game.js ***!
  \*****************/
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! ./index.css */ './index.css')
        /* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! ./cards.js */ './cards.js')
        /* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
                _cards_js__WEBPACK_IMPORTED_MODULE_1__
            )
        /* harmony import */ var _difficulty_js__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! ./difficulty.js */ './difficulty.js')
        /* harmony import */ var _difficulty_js__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
                _difficulty_js__WEBPACK_IMPORTED_MODULE_2__
            )
        /* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! ./index.js */ './index.js')
        /* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
                _index_js__WEBPACK_IMPORTED_MODULE_3__
            )

        var row = document.querySelector('.row1')
        var size = 0
        var rowsize = 0
        const shuffledcards = cardArr.sort(() => 0.5 - Math.random())
        switch (localStorage.getItem('difficulty')) {
            case '1':
                size = 6
                rowsize = 2
                break
            case '2':
                size = 12
                rowsize = 4
                break
            case '3':
                size = 18
                rowsize = 6
                break
        }

        let selected = shuffledcards.slice(38 - size / 2)
        selected = selected.concat(selected.slice(0))
        selected.sort(() => 0.5 - Math.random())
        var i = 1
        var currow = '1'
        selected.forEach((element) => {
            const div = document.createElement('div')
            const backimg = document.createElement('img')
            backimg.src = element.src
            div.classList.add('card')
            div.setAttribute('data-rang', element.rang)
            div.setAttribute('data-suit', element.suit)
            div.appendChild(backimg)
            row.appendChild(div)

            i++
            if (i === rowsize + 1) {
                i = 1
                currow++
                row = document.querySelector('.row' + currow)
            }
        })
        const cards = document.querySelectorAll('.card')
        var card1 = null
        var card2 = null
        var opened_cards = 0

        var seconds = 0
        var minutes = 0
        var appendMinutes = document.getElementById('minutes')
        var appendSeconds = document.getElementById('seconds')
        var Interval

        function startTimer() {
            seconds++

            if (seconds <= 9) {
                appendSeconds.innerHTML = '0' + seconds
            }

            if (seconds > 9) {
                appendSeconds.innerHTML = seconds
            }

            if (seconds > 59) {
                console.log('minutes')
                minutes++
                appendMinutes.innerHTML = '0' + minutes
                seconds = 0
                appendSeconds.innerHTML = '0' + 0
            }
            if (minutes > 9) {
                appendMinutes.innerHTML = minutes
            }
        }

        setTimeout(function () {
            cards.forEach((card) => {
                card.querySelector('img').src = 'img/рубашка.svg'
            })
            clearInterval(Interval)
            Interval = setInterval(startTimer, 1000)
            cards.forEach((card) => {
                card.addEventListener('click', function (event) {
                    console.log(card.querySelector('img').src)
                    card.querySelector('img').src = cardArr.find(
                        (element) =>
                            element.rang === card.dataset.rang &&
                            element.suit === card.dataset.suit
                    ).src
                    console.log(card.src)
                    if (card1 === null) card1 = card
                    else {
                        card2 = card
                        console.log(card1)
                        console.log(card2)
                        if (
                            card1.dataset.rang !== card2.dataset.rang ||
                            card1.dataset.suit !== card2.dataset.suit
                        ) {
                            setTimeout(function () {
                                alert('Вы проиграли')
                            }, 10)
                            clearInterval(Interval)
                        }
                        opened_cards += 2
                        if (opened_cards == size)
                            setTimeout(function () {
                                alert('Вы выиграли!')
                            }, 10)
                        card1 = null
                        card2 = null
                    }
                })
            })
        }, 5000)
    })()

    /******/
})()
//# sourceMappingURL=bundle.js.map
