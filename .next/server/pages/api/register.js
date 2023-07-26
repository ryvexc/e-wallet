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
exports.id = "pages/api/register";
exports.ids = ["pages/api/register"];
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

/***/ "(api)/./pages/api/register.ts":
/*!*******************************!*\
  !*** ./pages/api/register.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongodb */ \"(api)/./lib/mongodb.ts\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nasync function handler(request, response) {\n    try {\n        const [email, password, name] = [\n            request.body.email,\n            request.body.password,\n            request.body.name\n        ];\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        const db = client.db(process.env.DATABASE_NAME);\n        const data = await db.collection(\"users\").insertOne({\n            email: email,\n            name: name,\n            password: password\n        });\n        if (data.insertedId) return response.status(200).json({});\n        return response.status(400).json({\n            error: {\n                status: 400\n            }\n        });\n    } catch (e) {\n        console.error(e);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVnaXN0ZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2RUFBNkU7QUFDbkM7QUFHM0IsZUFBZUMsUUFDN0JDLE9BQXVCLEVBQ3ZCQyxRQUE4QjtJQUU5QixJQUFJO1FBQ0gsTUFBTSxDQUFDQyxPQUFPQyxVQUFVQyxLQUFLLEdBQUc7WUFDL0JKLFFBQVFLLElBQUksQ0FBQ0gsS0FBSztZQUNsQkYsUUFBUUssSUFBSSxDQUFDRixRQUFRO1lBQ3JCSCxRQUFRSyxJQUFJLENBQUNELElBQUk7U0FDakI7UUFFRCxNQUFNRSxTQUFTLE1BQU1SLG9EQUFhQTtRQUNsQyxNQUFNUyxLQUFLRCxPQUFPQyxFQUFFLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsYUFBYTtRQUU5QyxNQUFNQyxPQUFPLE1BQU1KLEdBQUdLLFVBQVUsQ0FBQyxTQUFTQyxTQUFTLENBQUM7WUFDbkRYLE9BQU9BO1lBQ1BFLE1BQU1BO1lBQ05ELFVBQVVBO1FBQ1g7UUFFQSxJQUFJUSxLQUFLRyxVQUFVLEVBQUUsT0FBT2IsU0FBU2MsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQyxDQUFDO1FBRXZELE9BQU9mLFNBQVNjLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFDaENDLE9BQU87Z0JBQ05GLFFBQVE7WUFDVDtRQUNEO0lBQ0QsRUFBRSxPQUFPRyxHQUFHO1FBQ1hDLFFBQVFGLEtBQUssQ0FBQ0M7SUFDZjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHVnYXMtYWtoaXIvLi9wYWdlcy9hcGkvcmVnaXN0ZXIudHM/N2RhNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIkAvbGliL21vbmdvZGJcIjtcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG5cdHJlcXVlc3Q6IE5leHRBcGlSZXF1ZXN0LFxuXHRyZXNwb25zZTogTmV4dEFwaVJlc3BvbnNlPGFueT4sXG4pIHtcblx0dHJ5IHtcblx0XHRjb25zdCBbZW1haWwsIHBhc3N3b3JkLCBuYW1lXSA9IFtcblx0XHRcdHJlcXVlc3QuYm9keS5lbWFpbCxcblx0XHRcdHJlcXVlc3QuYm9keS5wYXNzd29yZCxcblx0XHRcdHJlcXVlc3QuYm9keS5uYW1lLFxuXHRcdF07XG5cblx0XHRjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xuXHRcdGNvbnN0IGRiID0gY2xpZW50LmRiKHByb2Nlc3MuZW52LkRBVEFCQVNFX05BTUUpO1xuXG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5pbnNlcnRPbmUoe1xuXHRcdFx0ZW1haWw6IGVtYWlsLFxuXHRcdFx0bmFtZTogbmFtZSxcblx0XHRcdHBhc3N3b3JkOiBwYXNzd29yZCxcblx0XHR9KTtcblxuXHRcdGlmIChkYXRhLmluc2VydGVkSWQpIHJldHVybiByZXNwb25zZS5zdGF0dXMoMjAwKS5qc29uKHt9KTtcblxuXHRcdHJldHVybiByZXNwb25zZS5zdGF0dXMoNDAwKS5qc29uKHtcblx0XHRcdGVycm9yOiB7XG5cdFx0XHRcdHN0YXR1czogNDAwLFxuXHRcdFx0fSxcblx0XHR9KTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGNvbnNvbGUuZXJyb3IoZSk7XG5cdH1cbn1cbiJdLCJuYW1lcyI6WyJjbGllbnRQcm9taXNlIiwiaGFuZGxlciIsInJlcXVlc3QiLCJyZXNwb25zZSIsImVtYWlsIiwicGFzc3dvcmQiLCJuYW1lIiwiYm9keSIsImNsaWVudCIsImRiIiwicHJvY2VzcyIsImVudiIsIkRBVEFCQVNFX05BTUUiLCJkYXRhIiwiY29sbGVjdGlvbiIsImluc2VydE9uZSIsImluc2VydGVkSWQiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJlIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/register.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/register.ts"));
module.exports = __webpack_exports__;

})();