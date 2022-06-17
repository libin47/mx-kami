"use strict";
exports.id = 8081;
exports.ids = [8081];
exports.modules = {

/***/ 18081:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ lodash_es_omit)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayMap.js
var _arrayMap = __webpack_require__(28019);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseClone.js + 20 modules
var _baseClone = __webpack_require__(43261);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_castPath.js + 6 modules
var _castPath = __webpack_require__(3343);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/last.js
/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

/* harmony default export */ const lodash_es_last = (last);

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseGet.js
var _baseGet = __webpack_require__(49084);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseSlice.js
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/* harmony default export */ const _baseSlice = (baseSlice);

;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_parent.js



/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function _parent_parent(object, path) {
  return path.length < 2 ? object : (0,_baseGet/* default */.Z)(object, _baseSlice(path, 0, -1));
}

/* harmony default export */ const _parent = (_parent_parent);

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_toKey.js
var _toKey = __webpack_require__(13383);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseUnset.js





/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = (0,_castPath/* default */.Z)(path, object);
  object = _parent(object, path);
  return object == null || delete object[(0,_toKey/* default */.Z)(lodash_es_last(path))];
}

/* harmony default export */ const _baseUnset = (baseUnset);

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_copyObject.js
var _copyObject = __webpack_require__(52949);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isPlainObject.js
var isPlainObject = __webpack_require__(54098);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_customOmitClone.js


/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return (0,isPlainObject/* default */.Z)(value) ? undefined : value;
}

/* harmony default export */ const _customOmitClone = (customOmitClone);

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_flatRest.js + 3 modules
var _flatRest = __webpack_require__(19619);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getAllKeysIn.js
var _getAllKeysIn = __webpack_require__(96842);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js









/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = (0,_flatRest/* default */.Z)(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = (0,_arrayMap/* default */.Z)(paths, function(path) {
    path = (0,_castPath/* default */.Z)(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  (0,_copyObject/* default */.Z)(object, (0,_getAllKeysIn/* default */.Z)(object), result);
  if (isDeep) {
    result = (0,_baseClone/* default */.Z)(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, _customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    _baseUnset(result, paths[length]);
  }
  return result;
});

/* harmony default export */ const lodash_es_omit = (omit);


/***/ })

};
;