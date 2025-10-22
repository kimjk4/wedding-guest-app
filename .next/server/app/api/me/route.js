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
exports.id = "app/api/me/route";
exports.ids = ["app/api/me/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fme%2Froute&page=%2Fapi%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fme%2Froute.ts&appDir=%2FUsers%2Fjinkyukim%2FDocuments%2Fwedding-guest-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjinkyukim%2FDocuments%2Fwedding-guest-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fme%2Froute&page=%2Fapi%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fme%2Froute.ts&appDir=%2FUsers%2Fjinkyukim%2FDocuments%2Fwedding-guest-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjinkyukim%2FDocuments%2Fwedding-guest-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_jinkyukim_Documents_wedding_guest_app_app_api_me_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/me/route.ts */ \"(rsc)/./app/api/me/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/me/route\",\n        pathname: \"/api/me\",\n        filename: \"route\",\n        bundlePath: \"app/api/me/route\"\n    },\n    resolvedPagePath: \"/Users/jinkyukim/Documents/wedding-guest-app/app/api/me/route.ts\",\n    nextConfigOutput,\n    userland: _Users_jinkyukim_Documents_wedding_guest_app_app_api_me_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/me/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZtZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbWUlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZtZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmppbmt5dWtpbSUyRkRvY3VtZW50cyUyRndlZGRpbmctZ3Vlc3QtYXBwJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmppbmt5dWtpbSUyRkRvY3VtZW50cyUyRndlZGRpbmctZ3Vlc3QtYXBwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNnQjtBQUM3RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlZGRpbmctZ3Vlc3QtYXBwLz9kNWM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9qaW5reXVraW0vRG9jdW1lbnRzL3dlZGRpbmctZ3Vlc3QtYXBwL2FwcC9hcGkvbWUvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL21lL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbWVcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL21lL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2ppbmt5dWtpbS9Eb2N1bWVudHMvd2VkZGluZy1ndWVzdC1hcHAvYXBwL2FwaS9tZS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvbWUvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fme%2Froute&page=%2Fapi%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fme%2Froute.ts&appDir=%2FUsers%2Fjinkyukim%2FDocuments%2Fwedding-guest-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjinkyukim%2FDocuments%2Fwedding-guest-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/me/route.ts":
/*!*****************************!*\
  !*** ./app/api/me/route.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n\n\nasync function GET(req) {\n    const authHeader = req.headers.get(\"Authorization\");\n    const token = authHeader?.replace(\"Bearer \", \"\");\n    if (!token) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    const supabase = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.createServerSupabase)(token);\n    const { data: userData, error: userErr } = await supabase.auth.getUser(token);\n    if (userErr || !userData.user?.email) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Unauthorized\"\n        }, {\n            status: 401\n        });\n    }\n    const email = userData.user.email;\n    const { data: profile, error: profileError } = await supabase.from(\"v_guest_profile\").select(\"*\").eq(\"email\", email).single();\n    if (profileError || !profile) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"No profile\"\n        }, {\n            status: 404\n        });\n    }\n    const { data: photos, error: photosError } = await supabase.from(\"photos\").select(\"*\").eq(\"guest_id\", profile.guest_id).order(\"created_at\", {\n        ascending: true\n    });\n    if (photosError) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: photosError.message\n        }, {\n            status: 500\n        });\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        profile,\n        photos: photos ?? []\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL21lL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQztBQUNPO0FBRTFDLGVBQWVFLElBQUlDLEdBQVk7SUFDcEMsTUFBTUMsYUFBYUQsSUFBSUUsT0FBTyxDQUFDQyxHQUFHLENBQUM7SUFDbkMsTUFBTUMsUUFBUUgsWUFBWUksUUFBUSxXQUFXO0lBQzdDLElBQUksQ0FBQ0QsT0FBTyxPQUFPUCxxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1FBQUVDLE9BQU87SUFBZSxHQUFHO1FBQUVDLFFBQVE7SUFBSTtJQUU5RSxNQUFNQyxXQUFXWCwrREFBb0JBLENBQUNNO0lBRXRDLE1BQU0sRUFBRU0sTUFBTUMsUUFBUSxFQUFFSixPQUFPSyxPQUFPLEVBQUUsR0FBRyxNQUFNSCxTQUFTSSxJQUFJLENBQUNDLE9BQU8sQ0FBQ1Y7SUFDdkUsSUFBSVEsV0FBVyxDQUFDRCxTQUFTSSxJQUFJLEVBQUVDLE9BQU87UUFDcEMsT0FBT25CLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFlLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3BFO0lBRUEsTUFBTVEsUUFBUUwsU0FBU0ksSUFBSSxDQUFDQyxLQUFLO0lBQ2pDLE1BQU0sRUFBRU4sTUFBTU8sT0FBTyxFQUFFVixPQUFPVyxZQUFZLEVBQUUsR0FBRyxNQUFNVCxTQUNsRFUsSUFBSSxDQUFDLG1CQUNMQyxNQUFNLENBQUMsS0FDUEMsRUFBRSxDQUFDLFNBQVNMLE9BQ1pNLE1BQU07SUFFVCxJQUFJSixnQkFBZ0IsQ0FBQ0QsU0FBUztRQUM1QixPQUFPcEIscURBQVlBLENBQUNTLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQWEsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDbEU7SUFFQSxNQUFNLEVBQUVFLE1BQU1hLE1BQU0sRUFBRWhCLE9BQU9pQixXQUFXLEVBQUUsR0FBRyxNQUFNZixTQUNoRFUsSUFBSSxDQUFDLFVBQ0xDLE1BQU0sQ0FBQyxLQUNQQyxFQUFFLENBQUMsWUFBWUosUUFBUVEsUUFBUSxFQUMvQkMsS0FBSyxDQUFDLGNBQWM7UUFBRUMsV0FBVztJQUFLO0lBRXpDLElBQUlILGFBQWE7UUFDZixPQUFPM0IscURBQVlBLENBQUNTLElBQUksQ0FBQztZQUFFQyxPQUFPaUIsWUFBWUksT0FBTztRQUFDLEdBQUc7WUFBRXBCLFFBQVE7UUFBSTtJQUN6RTtJQUVBLE9BQU9YLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7UUFBRVc7UUFBU00sUUFBUUEsVUFBVSxFQUFFO0lBQUM7QUFDM0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWRkaW5nLWd1ZXN0LWFwcC8uL2FwcC9hcGkvbWUvcm91dGUudHM/NWZjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcbmltcG9ydCB7IGNyZWF0ZVNlcnZlclN1cGFiYXNlIH0gZnJvbSAnQC9saWIvYXV0aCdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXE6IFJlcXVlc3QpIHtcbiAgY29uc3QgYXV0aEhlYWRlciA9IHJlcS5oZWFkZXJzLmdldCgnQXV0aG9yaXphdGlvbicpXG4gIGNvbnN0IHRva2VuID0gYXV0aEhlYWRlcj8ucmVwbGFjZSgnQmVhcmVyICcsICcnKVxuICBpZiAoIXRva2VuKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1VuYXV0aG9yaXplZCcgfSwgeyBzdGF0dXM6IDQwMSB9KVxuXG4gIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlU2VydmVyU3VwYWJhc2UodG9rZW4pXG5cbiAgY29uc3QgeyBkYXRhOiB1c2VyRGF0YSwgZXJyb3I6IHVzZXJFcnIgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcih0b2tlbilcbiAgaWYgKHVzZXJFcnIgfHwgIXVzZXJEYXRhLnVzZXI/LmVtYWlsKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdVbmF1dGhvcml6ZWQnIH0sIHsgc3RhdHVzOiA0MDEgfSlcbiAgfVxuXG4gIGNvbnN0IGVtYWlsID0gdXNlckRhdGEudXNlci5lbWFpbFxuICBjb25zdCB7IGRhdGE6IHByb2ZpbGUsIGVycm9yOiBwcm9maWxlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ3ZfZ3Vlc3RfcHJvZmlsZScpXG4gICAgLnNlbGVjdCgnKicpXG4gICAgLmVxKCdlbWFpbCcsIGVtYWlsKVxuICAgIC5zaW5nbGUoKVxuXG4gIGlmIChwcm9maWxlRXJyb3IgfHwgIXByb2ZpbGUpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ05vIHByb2ZpbGUnIH0sIHsgc3RhdHVzOiA0MDQgfSlcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogcGhvdG9zLCBlcnJvcjogcGhvdG9zRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ3Bob3RvcycpXG4gICAgLnNlbGVjdCgnKicpXG4gICAgLmVxKCdndWVzdF9pZCcsIHByb2ZpbGUuZ3Vlc3RfaWQpXG4gICAgLm9yZGVyKCdjcmVhdGVkX2F0JywgeyBhc2NlbmRpbmc6IHRydWUgfSlcblxuICBpZiAocGhvdG9zRXJyb3IpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogcGhvdG9zRXJyb3IubWVzc2FnZSB9LCB7IHN0YXR1czogNTAwIH0pXG4gIH1cblxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBwcm9maWxlLCBwaG90b3M6IHBob3RvcyA/PyBbXSB9KVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImNyZWF0ZVNlcnZlclN1cGFiYXNlIiwiR0VUIiwicmVxIiwiYXV0aEhlYWRlciIsImhlYWRlcnMiLCJnZXQiLCJ0b2tlbiIsInJlcGxhY2UiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJzdXBhYmFzZSIsImRhdGEiLCJ1c2VyRGF0YSIsInVzZXJFcnIiLCJhdXRoIiwiZ2V0VXNlciIsInVzZXIiLCJlbWFpbCIsInByb2ZpbGUiLCJwcm9maWxlRXJyb3IiLCJmcm9tIiwic2VsZWN0IiwiZXEiLCJzaW5nbGUiLCJwaG90b3MiLCJwaG90b3NFcnJvciIsImd1ZXN0X2lkIiwib3JkZXIiLCJhc2NlbmRpbmciLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/me/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createServerSupabase: () => (/* binding */ createServerSupabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n\nfunction createServerSupabase(accessToken) {\n    const supabaseUrl = \"https://xqgifrimadzizkzouvie.supabase.co\";\n    const supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxZ2lmcmltYWR6aXprem91dmllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEwNjA4NDgsImV4cCI6MjA3NjYzNjg0OH0.d09AbcmIfADvIMnNSlWmvCmEemk0SbZRL2AuIz5y1CY\";\n    if (!supabaseUrl || !supabaseAnonKey) {\n        throw new Error(\"Missing Supabase environment variables\");\n    }\n    return (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey, {\n        auth: {\n            persistSession: false\n        },\n        global: accessToken ? {\n            headers: {\n                Authorization: `Bearer ${accessToken}`\n            }\n        } : undefined\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFvRDtBQUU3QyxTQUFTQyxxQkFBcUJDLFdBQW9CO0lBQ3ZELE1BQU1DLGNBQWNDLDBDQUFvQztJQUN4RCxNQUFNRyxrQkFBa0JILGtOQUF5QztJQUVqRSxJQUFJLENBQUNELGVBQWUsQ0FBQ0ksaUJBQWlCO1FBQ3BDLE1BQU0sSUFBSUUsTUFBTTtJQUNsQjtJQUVBLE9BQU9ULG1FQUFZQSxDQUFDRyxhQUFhSSxpQkFBaUI7UUFDaERHLE1BQU07WUFBRUMsZ0JBQWdCO1FBQU07UUFDOUJDLFFBQVFWLGNBQ0o7WUFDRVcsU0FBUztnQkFDUEMsZUFBZSxDQUFDLE9BQU8sRUFBRVosWUFBWSxDQUFDO1lBQ3hDO1FBQ0YsSUFDQWE7SUFDTjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VkZGluZy1ndWVzdC1hcHAvLi9saWIvYXV0aC50cz9iZjdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcydcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlcnZlclN1cGFiYXNlKGFjY2Vzc1Rva2VuPzogc3RyaW5nKSB7XG4gIGNvbnN0IHN1cGFiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMXG4gIGNvbnN0IHN1cGFiYXNlQW5vbktleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZXG5cbiAgaWYgKCFzdXBhYmFzZVVybCB8fCAhc3VwYWJhc2VBbm9uS2V5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFN1cGFiYXNlIGVudmlyb25tZW50IHZhcmlhYmxlcycpXG4gIH1cblxuICByZXR1cm4gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsLCBzdXBhYmFzZUFub25LZXksIHtcbiAgICBhdXRoOiB7IHBlcnNpc3RTZXNzaW9uOiBmYWxzZSB9LFxuICAgIGdsb2JhbDogYWNjZXNzVG9rZW5cbiAgICAgID8ge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIDogdW5kZWZpbmVkLFxuICB9KVxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsImNyZWF0ZVNlcnZlclN1cGFiYXNlIiwiYWNjZXNzVG9rZW4iLCJzdXBhYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJzdXBhYmFzZUFub25LZXkiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSIsIkVycm9yIiwiYXV0aCIsInBlcnNpc3RTZXNzaW9uIiwiZ2xvYmFsIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tr46","vendor-chunks/whatwg-url","vendor-chunks/tslib","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fme%2Froute&page=%2Fapi%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fme%2Froute.ts&appDir=%2FUsers%2Fjinkyukim%2FDocuments%2Fwedding-guest-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjinkyukim%2FDocuments%2Fwedding-guest-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();