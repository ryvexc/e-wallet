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
exports.id = "pages/api/addnote";
exports.ids = ["pages/api/addnote"];
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

/***/ "(api)/./pages/api/addnote.ts":
/*!******************************!*\
  !*** ./pages/api/addnote.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongodb */ \"(api)/./lib/mongodb.ts\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nasync function handler(request, response) {\n    try {\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        const db = client.db(process.env.DATABASE_NAME);\n        const data = await db.collection(\"notes\").insertOne({\n            title: request.body.title,\n            owner: request.body.owner,\n            description: request.body.description,\n            createdAt: new Date().toLocaleString(\"en-GB\", {\n                day: \"2-digit\",\n                month: \"2-digit\",\n                year: \"2-digit\",\n                hour: \"2-digit\",\n                minute: \"2-digit\"\n            }).replace(/\\//g, \"-\"),\n            updatedAt: new Date().toLocaleString(\"en-GB\", {\n                day: \"2-digit\",\n                month: \"2-digit\",\n                year: \"2-digit\",\n                hour: \"2-digit\",\n                minute: \"2-digit\"\n            }).replace(/\\//g, \"-\")\n        });\n        if (data.insertedId) return response.json(data);\n        else return response.status(200);\n    } catch (e) {\n        console.error(e);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkbm90ZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLDZFQUE2RTtBQUNuQztBQUczQixlQUFlQyxRQUM3QkMsT0FBdUIsRUFDdkJDLFFBQThCO0lBRTlCLElBQUk7UUFDSCxNQUFNQyxTQUFTLE1BQU1KLG9EQUFhQTtRQUNsQyxNQUFNSyxLQUFLRCxPQUFPQyxFQUFFLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsYUFBYTtRQUU5QyxNQUFNQyxPQUFPLE1BQU1KLEdBQUdLLFVBQVUsQ0FBQyxTQUFTQyxTQUFTLENBQUM7WUFDbkRDLE9BQU9WLFFBQVFXLElBQUksQ0FBQ0QsS0FBSztZQUN6QkUsT0FBT1osUUFBUVcsSUFBSSxDQUFDQyxLQUFLO1lBQ3pCQyxhQUFhYixRQUFRVyxJQUFJLENBQUNFLFdBQVc7WUFDckNDLFdBQVcsSUFBSUMsT0FDYkMsY0FBYyxDQUFDLFNBQVM7Z0JBQ3hCQyxLQUFLO2dCQUNMQyxPQUFPO2dCQUNQQyxNQUFNO2dCQUNOQyxNQUFNO2dCQUNOQyxRQUFRO1lBQ1QsR0FDQ0MsT0FBTyxDQUFDLE9BQU87WUFDakJDLFdBQVcsSUFBSVIsT0FDYkMsY0FBYyxDQUFDLFNBQVM7Z0JBQ3hCQyxLQUFLO2dCQUNMQyxPQUFPO2dCQUNQQyxNQUFNO2dCQUNOQyxNQUFNO2dCQUNOQyxRQUFRO1lBQ1QsR0FDQ0MsT0FBTyxDQUFDLE9BQU87UUFDbEI7UUFFQSxJQUFJZixLQUFLaUIsVUFBVSxFQUFFLE9BQU92QixTQUFTd0IsSUFBSSxDQUFDbEI7YUFDckMsT0FBT04sU0FBU3lCLE1BQU0sQ0FBQztJQUM3QixFQUFFLE9BQU9DLEdBQUc7UUFDWEMsUUFBUUMsS0FBSyxDQUFDRjtJQUNmO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90dWdhcy1ha2hpci8uL3BhZ2VzL2FwaS9hZGRub3RlLnRzPzNkZDgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCJAL2xpYi9tb25nb2RiXCI7XG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuXHRyZXF1ZXN0OiBOZXh0QXBpUmVxdWVzdCxcblx0cmVzcG9uc2U6IE5leHRBcGlSZXNwb25zZTxhbnk+LFxuKSB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcblx0XHRjb25zdCBkYiA9IGNsaWVudC5kYihwcm9jZXNzLmVudi5EQVRBQkFTRV9OQU1FKTtcblxuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwibm90ZXNcIikuaW5zZXJ0T25lKHtcblx0XHRcdHRpdGxlOiByZXF1ZXN0LmJvZHkudGl0bGUsXG5cdFx0XHRvd25lcjogcmVxdWVzdC5ib2R5Lm93bmVyLFxuXHRcdFx0ZGVzY3JpcHRpb246IHJlcXVlc3QuYm9keS5kZXNjcmlwdGlvbixcblx0XHRcdGNyZWF0ZWRBdDogbmV3IERhdGUoKVxuXHRcdFx0XHQudG9Mb2NhbGVTdHJpbmcoXCJlbi1HQlwiLCB7XG5cdFx0XHRcdFx0ZGF5OiBcIjItZGlnaXRcIixcblx0XHRcdFx0XHRtb250aDogXCIyLWRpZ2l0XCIsXG5cdFx0XHRcdFx0eWVhcjogXCIyLWRpZ2l0XCIsXG5cdFx0XHRcdFx0aG91cjogXCIyLWRpZ2l0XCIsXG5cdFx0XHRcdFx0bWludXRlOiBcIjItZGlnaXRcIixcblx0XHRcdFx0fSlcblx0XHRcdFx0LnJlcGxhY2UoL1xcLy9nLCBcIi1cIiksXG5cdFx0XHR1cGRhdGVkQXQ6IG5ldyBEYXRlKClcblx0XHRcdFx0LnRvTG9jYWxlU3RyaW5nKFwiZW4tR0JcIiwge1xuXHRcdFx0XHRcdGRheTogXCIyLWRpZ2l0XCIsXG5cdFx0XHRcdFx0bW9udGg6IFwiMi1kaWdpdFwiLFxuXHRcdFx0XHRcdHllYXI6IFwiMi1kaWdpdFwiLFxuXHRcdFx0XHRcdGhvdXI6IFwiMi1kaWdpdFwiLFxuXHRcdFx0XHRcdG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5yZXBsYWNlKC9cXC8vZywgXCItXCIpLFxuXHRcdH0pO1xuXG5cdFx0aWYgKGRhdGEuaW5zZXJ0ZWRJZCkgcmV0dXJuIHJlc3BvbnNlLmpzb24oZGF0YSk7XG5cdFx0ZWxzZSByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDIwMCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRjb25zb2xlLmVycm9yKGUpO1xuXHR9XG59XG4iXSwibmFtZXMiOlsiY2xpZW50UHJvbWlzZSIsImhhbmRsZXIiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJjbGllbnQiLCJkYiIsInByb2Nlc3MiLCJlbnYiLCJEQVRBQkFTRV9OQU1FIiwiZGF0YSIsImNvbGxlY3Rpb24iLCJpbnNlcnRPbmUiLCJ0aXRsZSIsImJvZHkiLCJvd25lciIsImRlc2NyaXB0aW9uIiwiY3JlYXRlZEF0IiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiaG91ciIsIm1pbnV0ZSIsInJlcGxhY2UiLCJ1cGRhdGVkQXQiLCJpbnNlcnRlZElkIiwianNvbiIsInN0YXR1cyIsImUiLCJjb25zb2xlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/addnote.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addnote.ts"));
module.exports = __webpack_exports__;

})();