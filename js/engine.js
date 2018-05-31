/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener("DOMContentLoaded", function () {
	console.log("NIEWIERNE PSY RULEZ!!!!");

	$("input").hide();
	$(".main button").hide();
	$("#scoreTitle").hide();

	function showHidden() {
		$("input").show();
		$(".main button").show();
		$("#scoreTitle").show();
	}

	//zmienna o wartości jednego procenta dla szerokości 800, 1366 pikseli
	var onePercent1366 = 13.66;
	var onePercent800 = 8;

	//obsługa zdarzeń dla przycisku 800x600 pikseli
	$("#first").on("click", function () {
		showHidden();

		$("#pixelsToPercents").text("Konwersja szerokości z pikseli na procenty dla szerokości");
		$("#widthValue").text("800px");
		$("#subTitlePixels").text("Podaj liczbę (w pikselach)");

		$("#calculatePixelsWidth").on("click", function () {
			var widthPixels = $("#numberPixelsValue").val();
			$("#scoreWidth").text(widthPixels / onePercent800 + "%");
		});

		$("#subTitlePercents").text("Podaj liczbę (w procentach)");
		$("#calculatePercentsWidth").on("click", function () {
			var widthPercents = $("#numberPercentsValue").val();
			$("#scoreWidth").text(widthPercents * onePercent800 + "px");
		});
	});

	//obsługa zdarzeń dla przycisku dla rozdzielczości 1366x768 pikseli
	$("#fifth").on("click", function () {
		showHidden();

		$("#pixelsToPercents").text("Konwersja szerokości z pikseli na procenty dla szerokości");
		$("#widthValue").text("1366px");
		$("#subTitlePixels").text("Podaj liczbę (w pikselach)");

		$("#calculatePixelsWidth").on("click", function () {
			var widthPixels = $("#numberPixelsValue").val();
			$("#scoreWidth").text(widthPixels / onePercent1366 + "%");
		});

		$("#subTitlePercents").text("Podaj liczbę (w procentach)");
		$("#calculatePercentsWidth").on("click", function () {
			var widthPercents = $("#numberPercentsValue").val();
			$("#scoreWidth").text(widthPercents * onePercent1366 + "px");
		});
	});
});

/***/ })
/******/ ]);