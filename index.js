(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("semantic-ui-react"));
	else if(typeof define === 'function' && define.amd)
		define("milkywayComponents", ["React", "SemanticUIReact"], factory);
	else if(typeof exports === 'object')
		exports["milkywayComponents"] = factory(require("react"), require("semantic-ui-react"));
	else
		root["milkywayComponents"] = factory(root["React"], root["SemanticUIReact"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

function Universe (props) {
    return React.createElement("svg",props,[React.createElement("defs",{"key":0},[React.createElement("path",{"d":"M68.507 3.04c-.396.71-.711 1.8-.711 3.458 0 3.46.079 8.097.079 8.255 0 .237.079.395.394.474.238.079.783.159 1.574.159.869 0 1.553-.08 1.792-.16.315-.158.297-.394.297-.394V6.736c0-1.572 1.344-2.39 2.927-2.169l.091.026c1.099.22 1.254.167 1.58-.308.316-.544.938-1.879 1.175-2.66.079-.237-.061-.421-.396-.544-.237-.08-.869-.317-1.73-.475A10.874 10.874 0 0 0 73.79.45c-2.16 0-4.114.738-5.282 2.59z","id":"a","key":0}),React.createElement("path",{"d":"M.8.597C.473.685.411.852.411 1.09c0 .078-.078 4.54-.079 7.907v.04c0 1.641.317 2.493.711 3.204 1.178 2.047 3.224 3.136 5.976 3.136h.078c2.759 0 4.875-1.098 6.044-3.136.396-.702.711-1.563.711-3.205 0-3.371-.079-7.807-.079-7.964a.479.479 0 0 0-.378-.475c-.227-.061-.808-.131-1.589-.131-.861 0-1.563.061-1.802.14-.315.07-.315.466-.315.466.079 2.748 0 7.332 0 7.727 0 1.65-1.178 2.511-2.67 2.511-1.495 0-2.672-.86-2.68-2.51 0-.388.008-5.04.008-7.79 0 0 0-.272-.395-.404C3.733.527 3.242.45 2.372.45 1.66.449 1.124.5.799.597z","id":"b","key":1}),React.createElement("path",{"d":"M48.266 1.238c-.23.317-2.504 6.21-3.127 7.859-.08.08-.318.08-.318 0-.473-1.255-2.82-7.463-2.977-7.859-.317-.623-.475-.78-2.118-.78-.781 0-1.88.07-1.88.544 0 .474 1.335 4.003 2.82 7.85 1.406 3.608 2.47 5.9 2.741 6.216.273.326 1.029.309 1.74.318.712 0 1.432.008 1.617-.309.246-.412 1.352-2.677 2.758-6.296 1.484-3.845 2.741-7.305 2.741-7.78 0-.543-1.099-.543-1.88-.543-1.643 0-1.802.148-2.117.78z","id":"c","key":2}),React.createElement("path",{"d":"M22.692.449c-2.663 0-4.77 1.062-6.097 3.187-.387.71-.703 1.616-.703 3.275 0 3.398.08 7.797.08 7.956 0 .159.184.35.385.395.202.044.862.115 1.643.115.86 0 1.352-.018 1.643-.097.28-.088.305-.457.305-.457-.079-2.766.008-7.508.008-7.903 0-1.65 1.26-2.68 2.744-2.68 1.564 0 2.672 1.02 2.672 2.68v7.912s.008.28.297.395c.3.105.854.141 1.714.141.781 0 1.326 0 1.565-.08.306-.078.385-.228.385-.465 0-.079.08-4.575.08-7.965 0-1.65-.317-2.502-.704-3.214C27.532 1.511 25.503.45 22.763.45h-.07z","id":"d","key":3}),React.createElement("path",{"d":"M32.426.536c-.308.08-.387.237-.387.474 0 .08-.079.95-.079 6.753 0 6.05.08 6.832.08 6.91 0 .23.07.501.386.58.194.045.922.124 1.705.124.781 0 1.335-.045 1.571-.124.29-.123.388-.236.388-.474 0-.08.078-.983.078-7.025 0-5.804-.078-6.673-.078-6.752 0-.238-.088-.431-.388-.475-.227-.035-.94-.078-1.713-.078-.781 0-1.326 0-1.563.087z","id":"e","key":4}),React.createElement("path",{"d":"M78.477 5.243c0 3.293 3.031 4.145 5.94 4.382l.272.026c1.099.079 2.284.15 2.284 1.247 0 .86-.482 1.335-1.818 1.335-1.573 0-3.462-.712-4.719-1.335-.632-.317-1.018-.632-1.176-.632-.159 0-.712.474-1.177 1.097-.396.633-.632 1.335-.475 1.572.396.475 1.652 1.098 2.908 1.572 1.02.395 2.672.861 4.401.861 3.927 0 6.519-1.8 6.519-4.874.159-3.767-3.698-4.39-6.528-4.47-.632 0-1.888-.158-1.888-1.246 0-1.098.8-1.177 1.66-1.177.545 0 1.652.158 3.146.545 1.018.315 1.73.632 1.968.71.236.158.71-.474 1.098-1.255.386-.782.473-1.493.237-1.573-.396-.236-3.461-1.57-6.677-1.57-2.829 0-5.975 1.255-5.975 4.785z","id":"f","key":5}),React.createElement("path",{"d":"M92.842 7.596c0-4.32 2.741-7.147 6.967-7.147 3.602 0 6.826 1.888 6.826 7.147 0 .553-.01.703.017 1.247-.008.35-.28.474-.624.474-.79 0-2.512.08-4.936.08-1.495 0-3.33-.08-4.033-.08-.105 0-.123.036-.114.114.07.474.923 2.485 3.347 2.485 1.018 0 2.74-.315 3.909-.86.387-.158.527-.097.624 0 .176.176.466.623.781 1.256.238.544.397.939.475 1.177.07.315 0 .395-.475.632-1.414.711-2.898 1.256-5.56 1.256-2.741 0-7.204-2.442-7.204-7.781zm4.067-1.29l5.93.017c.061 0 .185-.017.176-.176 0-1.493-1.396-2.66-3.119-2.66-1.722 0-3.145 1.167-3.145 2.66 0 0 0 .159.158.159z","id":"g","key":6}),React.createElement("path",{"d":"M52.254 7.684c0-4.32 2.742-7.148 6.966-7.148 3.602 0 6.827 1.888 6.827 7.148 0 .553-.009.702.018 1.247-.009.35-.282.474-.624.474-.79 0-2.513.079-4.938.079-1.493 0-3.33-.079-4.032-.079-.106 0-.123.035-.115.114.072.474.923 2.485 3.348 2.485 1.02 0 2.74-.316 3.91-.86.386-.158.526-.097.622 0 .176.175.466.623.784 1.256.236.544.394.939.473 1.176.07.316 0 .395-.473.633-1.416.711-2.9 1.255-5.562 1.255-2.742 0-7.204-2.44-7.204-7.78zm4.068-1.29l5.93.017c.06 0 .184-.017.184-.167 0-1.493-1.406-2.67-3.128-2.67-1.721 0-3.144 1.168-3.144 2.66 0 0 0 .16.158.16z","id":"h","key":7})]),React.createElement("g",{"fill":"#FFF","fillRule":"evenodd","key":1},[React.createElement("use",{"xlinkHref":"#a","key":0}),React.createElement("use",{"xlinkHref":"#b","key":1}),React.createElement("use",{"xlinkHref":"#c","key":2}),React.createElement("use",{"xlinkHref":"#d","key":3}),React.createElement("use",{"xlinkHref":"#e","key":4}),React.createElement("use",{"xlinkHref":"#f","key":5}),React.createElement("use",{"xlinkHref":"#g","key":6}),React.createElement("use",{"xlinkHref":"#h","key":7})])]);
}

Universe.defaultProps = {"width":"107","height":"16","viewBox":"0 0 107 16"};

module.exports = Universe;

Universe.default = Universe;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';
/** Used as references for various `Number` constants. */

var NAN = 0 / 0;
/** `Object#toString` result references. */

var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */

var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */

var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */

var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */

var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */

var freeParseInt = parseInt;
/** Detect free variable `global` from Node.js. */

var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Used for built-in method references. */

var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax = Math.max,
    nativeMin = Math.min;
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */

var now = function () {
  return root.Date.now();
};
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */


function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  wait = toNumber(wait) || 0;

  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time; // Start the timer for the trailing edge.

    timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;
    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.

    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    } // Restart the timer.


    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }

    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }

    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }

      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }

    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }

    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */


function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */


function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */


function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }

  if (isSymbol(value)) {
    return NAN;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }

  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = debounce;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Navbar", function() { return /* reexport */ Navbar_Navbar; });

// EXTERNAL MODULE: external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"}
var external_commonjs_react_commonjs2_react_amd_React_root_React_ = __webpack_require__(0);
var external_commonjs_react_commonjs2_react_amd_React_root_React_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_react_commonjs2_react_amd_React_root_React_);

// EXTERNAL MODULE: external {"commonjs":"semantic-ui-react","commonjs2":"semantic-ui-react","amd":"SemanticUIReact","root":"SemanticUIReact"}
var external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_ = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Navbar/EventSearcher/EventSearcher.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var debounce = __webpack_require__(3);

var EventSearcher_EventSearcher = function EventSearcher() {
  var _useState = Object(external_commonjs_react_commonjs2_react_amd_React_root_React_["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      address = _useState2[0],
      setAddress = _useState2[1]; // on change functions


  var onSearchChange = function onSearchChange(_ref) {
    var value = _ref.value,
        setAddress = _ref.setAddress;
    setAddress(value);
    debouncedRedirect(value);
  }; // helper functions


  var debouncedRedirect = debounce(function (loc) {
    if (loc) window.location.href = "/explore?query=".concat(loc.replace(/\s+/, '+'));
  }, 1000);
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Menu"].Item, null, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Input"], {
    onChange: function onChange(_, _ref2) {
      var value = _ref2.value;
      return onSearchChange({
        value: value,
        setAddress: setAddress
      });
    },
    placeholder: "Search for events",
    value: address,
    icon: external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Icon"], {
      color: "grey",
      className: "universe-search"
    }),
    iconPosition: "left"
  }));
};
// CONCATENATED MODULE: ./components/Navbar/EventSearcher/index.js

// EXTERNAL MODULE: ./assets/universe.svg
var universe = __webpack_require__(2);
var universe_default = /*#__PURE__*/__webpack_require__.n(universe);

// CONCATENATED MODULE: ./components/Navbar/NavbarComputer/NavbarComputer.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var NavbarComputer_module = ({"divider":"divider-1D2N2","menu":"menu-UrAZu"});
// CONCATENATED MODULE: ./components/Navbar/NavbarComputer/NavbarComputer.jsx





var NavbarComputer_NavbarComputer = function NavbarComputer(_ref) {
  var user = _ref.user,
      sticky = _ref.sticky,
      minWidth = _ref.minWidth;
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Responsive"], {
    minWidth: minWidth
  }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Menu"], {
    className: NavbarComputer_module.menu
  }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Menu"].Menu, {
    position: "left"
  }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(NavbarComputer_UniverseHome, null), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(EventSearcher_EventSearcher, null)), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Menu"].Menu, {
    position: "right"
  }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(NavbarComputer_Help, {
    loggedIn: !!user
  }), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(NavbarComputer_FindEvents, null), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(NavbarComputer_CreateOrHostEvent, {
    isHost: user && user.is_host
  }), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(NavbarComputer_LoginAndSignUp, {
    loggedIn: !!user
  }), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(NavbarComputer_Account, {
    user: user
  }))));
}; // private components

var NavbarComputer_CreateOrHostEvent = function CreateOrHostEvent(_ref2) {
  var isHost = _ref2.isHost;
  if (isHost) return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Menu"].Item, {
    href: "/create"
  }, "Create Events");
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Dropdown"], {
    item: true,
    pointing: true,
    text: "Host Events"
  }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Dropdown"].Menu, null, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Dropdown"].Item, {
    href: "/create"
  }, "Create Event"), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Dropdown"].Divider, {
    className: NavbarComputer_module.divider
  }), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Dropdown"].Item, {
    href: "/features"
  }, "Features"), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Dropdown"].Item, {
    href: "/customers"
  }, "Customers"), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Dropdown"].Item, {
    href: "/pricing"
  }, "Pricing")));
};

var NavbarComputer_LoginAndSignUp = function LoginAndSignUp(_ref3) {
  var loggedIn = _ref3.loggedIn;
  if (loggedIn) return null;
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.Fragment, null, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Menu"].Item, {
    href: "/sign-in?redirectTo=".concat(window.location.href)
  }, "Log In"), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Menu"].Item, {
    href: "/users/sign_up?redirectTo=".concat(window.location.href)
  }, "Sign Up"));
};

var NavbarComputer_FindEvents = function FindEvents() {
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Menu"].Item, {
    href: "/explore"
  }, "Find Events");
};

var NavbarComputer_Help = function Help(_ref4) {
  var loggedIn = _ref4.loggedIn;
  if (loggedIn) return null;
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Dropdown"], {
    item: true,
    pointing: true,
    text: "Help"
  }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Dropdown"].Menu, null, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Dropdown"].Item, {
    href: "/help"
  }, "Help Center"), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Dropdown"].Divider, {
    className: NavbarComputer_module.divider
  }), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Dropdown"].Item, {
    href: "/help/find_tickets"
  }, "Where are my tickets?"), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Dropdown"].Item, {
    href: "/help/contact_organizer"
  }, "Contact the event organizer"), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Dropdown"].Item, {
    href: "/help/get_refund"
  }, "Can I get a refund?")));
};

var NavbarComputer_Account = function Account(_ref5) {
  var user = _ref5.user;
  if (!user) return null;
  var trigger = external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("span", null, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Image"], {
    avatar: true,
    src: "https://picsum.photos/seed/picsum/50/50",
    verticalAlign: "middle"
  }), user.name);
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.Fragment, null, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Dropdown"], {
    item: true,
    pointing: true,
    trigger: trigger
  }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Dropdown"].Menu, null, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Dropdown"].Item, {
    href: "/dashboard"
  }, "Dashboard"), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Dropdown"].Item, {
    href: "/dashboard/tickets"
  }, "Your tickets"), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Dropdown"].Divider, {
    className: NavbarComputer_module.divider
  }), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Dropdown"].Item, {
    href: "/users/".concat(user.slug || user.id || '')
  }, "Profile"), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Dropdown"].Item, {
    href: "/dashboard/conversations"
  }, "Messages"), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Dropdown"].Item, {
    href: "/dashboard/settings"
  }, "Settings"), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Dropdown"].Item, {
    href: "/help"
  }, "Help"), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Dropdown"].Item, {
    href: "/users/sign_out"
  }, "Log Out"))));
};

var NavbarComputer_UniverseHome = function UniverseHome() {
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Menu"].Item, {
    href: "/"
  }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(universe_default.a, null));
};
// CONCATENATED MODULE: ./components/Navbar/NavbarComputer/index.js

// CONCATENATED MODULE: ./components/Navbar/NavbarTabletMobile/NavbarTabletMobile.jsx



var NavbarTabletMobile_NavbarTabletMobile = function NavbarTabletMobile(_ref) {
  var user = _ref.user,
      sticky = _ref.sticky,
      maxWidth = _ref.maxWidth;
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Responsive"], {
    maxWidth: maxWidth
  }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Menu"], {
    widths: 3
  }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Menu"].Item, null, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Icon"], {
    className: "universe-search",
    size: "big"
  })), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Menu"].Item, null, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(universe_default.a, null)), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Menu"].Item, null, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_semantic_ui_react_commonjs2_semantic_ui_react_amd_SemanticUIReact_root_SemanticUIReact_["Icon"], {
    className: "universe-basic-information",
    size: "big"
  }))));
};
// CONCATENATED MODULE: ./components/Navbar/NavbarTabletMobile/index.js

// CONCATENATED MODULE: ./lib/breakpoints.js
var mobile = 320;
var tablet = 768;
var computer = 992;
var largeMonitor = 1200;
var widescreen = 1920;
var breakpoints = {
  mobile: mobile,
  tablet: tablet,
  computer: computer,
  largeMonitor: largeMonitor,
  widescreen: widescreen,
  largestMobile: tablet - 1,
  largestTablet: computer - 1,
  largestComputer: largeMonitor - 1,
  largestLargeMonitor: widescreen - 1
};
// CONCATENATED MODULE: ./components/Navbar/Navbar.jsx
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var Navbar_Navbar = function Navbar(props) {
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.Fragment, null, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(NavbarComputer_NavbarComputer, _extends({}, props, {
    minWidth: breakpoints.computer
  })), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(NavbarTabletMobile_NavbarTabletMobile, _extends({}, props, {
    maxWidth: breakpoints.largestTablet
  })));
};
// CONCATENATED MODULE: ./components/Navbar/index.js

// CONCATENATED MODULE: ./webpack.index.js


/***/ })
/******/ ]);
});