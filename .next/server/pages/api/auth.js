"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth";
exports.ids = ["pages/api/auth"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (true) {\n    let globalWithMongo = global;\n    if (!globalWithMongo._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        globalWithMongo._mongoClientPromise = client.connect();\n    }\n    clientPromise = globalWithMongo._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM3QixNQUFNLElBQUlDLE1BQU07QUFDakI7QUFFQSxNQUFNQyxNQUFNSixRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDbkMsTUFBTUcsVUFBVSxDQUFDO0FBRWpCLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJUCxJQUFzQyxFQUFFO0lBQzNDLElBQUlRLGtCQUFrQkM7SUFJdEIsSUFBSSxDQUFDRCxnQkFBZ0JFLG1CQUFtQixFQUFFO1FBQ3pDSixTQUFTLElBQUlQLGdEQUFXQSxDQUFDSyxLQUFLQztRQUM5QkcsZ0JBQWdCRSxtQkFBbUIsR0FBR0osT0FBT0ssT0FBTztJQUNyRDtJQUNBSixnQkFBZ0JDLGdCQUFnQkUsbUJBQW1CO0FBQ3BELE9BQU8sRUFHTjtBQUVELGlFQUFlSCxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHVnYXMtYWtoaXIvLi9saWIvbW9uZ29kYi50cz8wNWJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xuXHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQvTWlzc2luZyBlbnZpcm9ubWVudCB2YXJpYWJsZTogXCJNT05HT0RCX1VSSVwiJyk7XG59XG5cbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xuY29uc3Qgb3B0aW9ucyA9IHt9O1xuXG5sZXQgY2xpZW50O1xubGV0IGNsaWVudFByb21pc2U6IFByb21pc2U8TW9uZ29DbGllbnQ+O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuXHRsZXQgZ2xvYmFsV2l0aE1vbmdvID0gZ2xvYmFsIGFzIHR5cGVvZiBnbG9iYWxUaGlzICYge1xuXHRcdF9tb25nb0NsaWVudFByb21pc2U/OiBQcm9taXNlPE1vbmdvQ2xpZW50Pjtcblx0fTtcblxuXHRpZiAoIWdsb2JhbFdpdGhNb25nby5fbW9uZ29DbGllbnRQcm9taXNlKSB7XG5cdFx0Y2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XG5cdFx0Z2xvYmFsV2l0aE1vbmdvLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xuXHR9XG5cdGNsaWVudFByb21pc2UgPSBnbG9iYWxXaXRoTW9uZ28uX21vbmdvQ2xpZW50UHJvbWlzZTtcbn0gZWxzZSB7XG5cdGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xuXHRjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZTtcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIkVycm9yIiwidXJpIiwib3B0aW9ucyIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJnbG9iYWxXaXRoTW9uZ28iLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth.ts":
/*!***************************!*\
  !*** ./pages/api/auth.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongodb */ \"(api)/./lib/mongodb.ts\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nasync function handler(request, response) {\n    try {\n        const [email, password] = [\n            request.body.email,\n            request.body.password\n        ];\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        const db = client.db(process.env.DATABASE_NAME);\n        const data = await db.collection(\"users\").find({\n            email: email,\n            password: password\n        }).toArray();\n        let jwt = \"\";\n        if (data.length > 0) {\n            const passwordChars = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\";\n            for(let i = 0; i < 32; i++)jwt += passwordChars[Math.floor(Math.random() * passwordChars.length)];\n            return response.status(200).json({\n                jwt: jwt,\n                user: {\n                    _id: data[0]._id,\n                    email: data[0].email,\n                    name: data[0].name,\n                    lastModifiedId: data[0].lastModifiedId\n                }\n            });\n        }\n        return response.status(400).json({\n            error: {\n                status: 400\n            }\n        });\n    } catch (e) {\n        console.error(e);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLDZFQUE2RTtBQUNuQztBQUczQixlQUFlQyxRQUM3QkMsT0FBdUIsRUFDdkJDLFFBQThCO0lBRTlCLElBQUk7UUFDSCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBRztZQUFDSCxRQUFRSSxJQUFJLENBQUNGLEtBQUs7WUFBRUYsUUFBUUksSUFBSSxDQUFDRCxRQUFRO1NBQUM7UUFFckUsTUFBTUUsU0FBUyxNQUFNUCxvREFBYUE7UUFDbEMsTUFBTVEsS0FBS0QsT0FBT0MsRUFBRSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLGFBQWE7UUFFOUMsTUFBTUMsT0FBTyxNQUFNSixHQUNqQkssVUFBVSxDQUFDLFNBQ1hDLElBQUksQ0FBQztZQUNMVixPQUFPQTtZQUNQQyxVQUFVQTtRQUNYLEdBQ0NVLE9BQU87UUFFVCxJQUFJQyxNQUFNO1FBRVYsSUFBSUosS0FBS0ssTUFBTSxHQUFHLEdBQUc7WUFDcEIsTUFBTUMsZ0JBQ0w7WUFDRCxJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSSxJQUFJQSxJQUN2QkgsT0FBT0UsYUFBYSxDQUFDRSxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS0osY0FBY0QsTUFBTSxFQUFFO1lBRXZFLE9BQU9kLFNBQVNvQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUNoQ1IsS0FBS0E7Z0JBQ0xTLE1BQU07b0JBQ0xDLEtBQUtkLElBQUksQ0FBQyxFQUFFLENBQUNjLEdBQUc7b0JBQ2hCdEIsT0FBT1EsSUFBSSxDQUFDLEVBQUUsQ0FBQ1IsS0FBSztvQkFDcEJ1QixNQUFNZixJQUFJLENBQUMsRUFBRSxDQUFDZSxJQUFJO29CQUNsQkMsZ0JBQWdCaEIsSUFBSSxDQUFDLEVBQUUsQ0FBQ2dCLGNBQWM7Z0JBQ3ZDO1lBQ0Q7UUFDRDtRQUVBLE9BQU96QixTQUFTb0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNoQ0ssT0FBTztnQkFDTk4sUUFBUTtZQUNUO1FBQ0Q7SUFDRCxFQUFFLE9BQU9PLEdBQUc7UUFDWEMsUUFBUUYsS0FBSyxDQUFDQztJQUNmO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90dWdhcy1ha2hpci8uL3BhZ2VzL2FwaS9hdXRoLnRzP2ZiZWMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCJAL2xpYi9tb25nb2RiXCI7XG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuXHRyZXF1ZXN0OiBOZXh0QXBpUmVxdWVzdCxcblx0cmVzcG9uc2U6IE5leHRBcGlSZXNwb25zZTxhbnk+LFxuKSB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgW2VtYWlsLCBwYXNzd29yZF0gPSBbcmVxdWVzdC5ib2R5LmVtYWlsLCByZXF1ZXN0LmJvZHkucGFzc3dvcmRdO1xuXG5cdFx0Y29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcblx0XHRjb25zdCBkYiA9IGNsaWVudC5kYihwcm9jZXNzLmVudi5EQVRBQkFTRV9OQU1FKTtcblxuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBkYlxuXHRcdFx0LmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxuXHRcdFx0LmZpbmQoe1xuXHRcdFx0XHRlbWFpbDogZW1haWwsXG5cdFx0XHRcdHBhc3N3b3JkOiBwYXNzd29yZCxcblx0XHRcdH0pXG5cdFx0XHQudG9BcnJheSgpO1xuXG5cdFx0bGV0IGp3dCA9IFwiXCI7XG5cblx0XHRpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCBwYXNzd29yZENoYXJzID1cblx0XHRcdFx0XCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OVwiO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAzMjsgaSsrKVxuXHRcdFx0XHRqd3QgKz0gcGFzc3dvcmRDaGFyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwYXNzd29yZENoYXJzLmxlbmd0aCldO1xuXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDIwMCkuanNvbih7XG5cdFx0XHRcdGp3dDogand0LFxuXHRcdFx0XHR1c2VyOiB7XG5cdFx0XHRcdFx0X2lkOiBkYXRhWzBdLl9pZCxcblx0XHRcdFx0XHRlbWFpbDogZGF0YVswXS5lbWFpbCxcblx0XHRcdFx0XHRuYW1lOiBkYXRhWzBdLm5hbWUsXG5cdFx0XHRcdFx0bGFzdE1vZGlmaWVkSWQ6IGRhdGFbMF0ubGFzdE1vZGlmaWVkSWQsXG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDQwMCkuanNvbih7XG5cdFx0XHRlcnJvcjoge1xuXHRcdFx0XHRzdGF0dXM6IDQwMCxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRjb25zb2xlLmVycm9yKGUpO1xuXHR9XG59XG4iXSwibmFtZXMiOlsiY2xpZW50UHJvbWlzZSIsImhhbmRsZXIiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJlbWFpbCIsInBhc3N3b3JkIiwiYm9keSIsImNsaWVudCIsImRiIiwicHJvY2VzcyIsImVudiIsIkRBVEFCQVNFX05BTUUiLCJkYXRhIiwiY29sbGVjdGlvbiIsImZpbmQiLCJ0b0FycmF5Iiwiand0IiwibGVuZ3RoIiwicGFzc3dvcmRDaGFycyIsImkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzdGF0dXMiLCJqc29uIiwidXNlciIsIl9pZCIsIm5hbWUiLCJsYXN0TW9kaWZpZWRJZCIsImVycm9yIiwiZSIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth.ts"));
module.exports = __webpack_exports__;

})();