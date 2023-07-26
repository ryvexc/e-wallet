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
exports.id = "pages/api/deletenote";
exports.ids = ["pages/api/deletenote"];
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

/***/ "(api)/./pages/api/deletenote.ts":
/*!*********************************!*\
  !*** ./pages/api/deletenote.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongodb */ \"(api)/./lib/mongodb.ts\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\nasync function handler(request, response) {\n    try {\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        const db = client.db(process.env.DATABASE_NAME);\n        const data = await db.collection(\"notes\").deleteOne({\n            _id: new mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId(request.body.id)\n        });\n        if (data.deletedCount > 0) response.json(data);\n        else return response.status(400);\n    } catch (e) {\n        console.error(e);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGVsZXRlbm90ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsNkVBQTZFO0FBR25DO0FBQ1A7QUFFcEIsZUFBZUUsUUFDN0JDLE9BQXVCLEVBQ3ZCQyxRQUE4QjtJQUU5QixJQUFJO1FBQ0gsTUFBTUMsU0FBUyxNQUFNTCxvREFBYUE7UUFDbEMsTUFBTU0sS0FBS0QsT0FBT0MsRUFBRSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLGFBQWE7UUFFOUMsTUFBTUMsT0FBTyxNQUFNSixHQUNqQkssVUFBVSxDQUFDLFNBQ1hDLFNBQVMsQ0FBQztZQUFFQyxLQUFLLElBQUlaLDZDQUFRQSxDQUFDRSxRQUFRVyxJQUFJLENBQUNDLEVBQUU7UUFBRTtRQUVqRCxJQUFJTCxLQUFLTSxZQUFZLEdBQUcsR0FBR1osU0FBU2EsSUFBSSxDQUFDUDthQUNwQyxPQUFPTixTQUFTYyxNQUFNLENBQUM7SUFDN0IsRUFBRSxPQUFPQyxHQUFHO1FBQ1hDLFFBQVFDLEtBQUssQ0FBQ0Y7SUFDZjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHVnYXMtYWtoaXIvLi9wYWdlcy9hcGkvZGVsZXRlbm90ZS50cz9jN2NjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgZ2V0Q29ubmVjdGlvbiB9IGZyb20gXCJAL2xpYi9kYlwiO1xuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIkAvbGliL21vbmdvZGJcIjtcbmltcG9ydCB7IE9iamVjdElkIH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcblx0cmVxdWVzdDogTmV4dEFwaVJlcXVlc3QsXG5cdHJlc3BvbnNlOiBOZXh0QXBpUmVzcG9uc2U8YW55Pixcbikge1xuXHR0cnkge1xuXHRcdGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2U7XG5cdFx0Y29uc3QgZGIgPSBjbGllbnQuZGIocHJvY2Vzcy5lbnYuREFUQUJBU0VfTkFNRSk7XG5cblx0XHRjb25zdCBkYXRhID0gYXdhaXQgZGJcblx0XHRcdC5jb2xsZWN0aW9uKFwibm90ZXNcIilcblx0XHRcdC5kZWxldGVPbmUoeyBfaWQ6IG5ldyBPYmplY3RJZChyZXF1ZXN0LmJvZHkuaWQpIH0pO1xuXG5cdFx0aWYgKGRhdGEuZGVsZXRlZENvdW50ID4gMCkgcmVzcG9uc2UuanNvbihkYXRhKTtcblx0XHRlbHNlIHJldHVybiByZXNwb25zZS5zdGF0dXMoNDAwKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGNvbnNvbGUuZXJyb3IoZSk7XG5cdH1cbn1cbiJdLCJuYW1lcyI6WyJjbGllbnRQcm9taXNlIiwiT2JqZWN0SWQiLCJoYW5kbGVyIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiY2xpZW50IiwiZGIiLCJwcm9jZXNzIiwiZW52IiwiREFUQUJBU0VfTkFNRSIsImRhdGEiLCJjb2xsZWN0aW9uIiwiZGVsZXRlT25lIiwiX2lkIiwiYm9keSIsImlkIiwiZGVsZXRlZENvdW50IiwianNvbiIsInN0YXR1cyIsImUiLCJjb25zb2xlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/deletenote.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/deletenote.ts"));
module.exports = __webpack_exports__;

})();