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
exports.id = "pages/api/notes";
exports.ids = ["pages/api/notes"];
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

/***/ "(api)/./pages/api/notes.ts":
/*!****************************!*\
  !*** ./pages/api/notes.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongodb */ \"(api)/./lib/mongodb.ts\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nasync function handler(request, response) {\n    try {\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        const db = client.db(process.env.DATABASE_NAME);\n        let data;\n        data = request.body?.getAll ? await db.collection(\"notes\").find({}).toArray() : await db.collection(\"notes\").find({\n            owner: request.body.owner\n        }).toArray();\n        return response.json(data);\n    } catch (e) {\n        console.error(e);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbm90ZXMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2RUFBNkU7QUFDbkM7QUFHM0IsZUFBZUMsUUFDN0JDLE9BQXVCLEVBQ3ZCQyxRQUE4QjtJQUU5QixJQUFJO1FBQ0gsTUFBTUMsU0FBUyxNQUFNSixvREFBYUE7UUFDbEMsTUFBTUssS0FBS0QsT0FBT0MsRUFBRSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLGFBQWE7UUFFOUMsSUFBSUM7UUFDSkEsT0FBT1AsUUFBUVEsSUFBSSxFQUFFQyxTQUNsQixNQUFNTixHQUFHTyxVQUFVLENBQUMsU0FBU0MsSUFBSSxDQUFDLENBQUMsR0FBR0MsT0FBTyxLQUM3QyxNQUFNVCxHQUNMTyxVQUFVLENBQUMsU0FDWEMsSUFBSSxDQUFDO1lBQ0xFLE9BQU9iLFFBQVFRLElBQUksQ0FBQ0ssS0FBSztRQUMxQixHQUNDRCxPQUFPO1FBRVgsT0FBT1gsU0FBU2EsSUFBSSxDQUFDUDtJQUN0QixFQUFFLE9BQU9RLEdBQUc7UUFDWEMsUUFBUUMsS0FBSyxDQUFDRjtJQUNmO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90dWdhcy1ha2hpci8uL3BhZ2VzL2FwaS9ub3Rlcy50cz8yNjEyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiQC9saWIvbW9uZ29kYlwiO1xuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcblx0cmVxdWVzdDogTmV4dEFwaVJlcXVlc3QsXG5cdHJlc3BvbnNlOiBOZXh0QXBpUmVzcG9uc2U8YW55Pixcbikge1xuXHR0cnkge1xuXHRcdGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2U7XG5cdFx0Y29uc3QgZGIgPSBjbGllbnQuZGIocHJvY2Vzcy5lbnYuREFUQUJBU0VfTkFNRSk7XG5cblx0XHRsZXQgZGF0YTtcblx0XHRkYXRhID0gcmVxdWVzdC5ib2R5Py5nZXRBbGxcblx0XHRcdD8gYXdhaXQgZGIuY29sbGVjdGlvbihcIm5vdGVzXCIpLmZpbmQoe30pLnRvQXJyYXkoKVxuXHRcdFx0OiBhd2FpdCBkYlxuXHRcdFx0XHRcdC5jb2xsZWN0aW9uKFwibm90ZXNcIilcblx0XHRcdFx0XHQuZmluZCh7XG5cdFx0XHRcdFx0XHRvd25lcjogcmVxdWVzdC5ib2R5Lm93bmVyLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnRvQXJyYXkoKTtcblxuXHRcdHJldHVybiByZXNwb25zZS5qc29uKGRhdGEpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlKTtcblx0fVxufVxuIl0sIm5hbWVzIjpbImNsaWVudFByb21pc2UiLCJoYW5kbGVyIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiY2xpZW50IiwiZGIiLCJwcm9jZXNzIiwiZW52IiwiREFUQUJBU0VfTkFNRSIsImRhdGEiLCJib2R5IiwiZ2V0QWxsIiwiY29sbGVjdGlvbiIsImZpbmQiLCJ0b0FycmF5Iiwib3duZXIiLCJqc29uIiwiZSIsImNvbnNvbGUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/notes.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/notes.ts"));
module.exports = __webpack_exports__;

})();