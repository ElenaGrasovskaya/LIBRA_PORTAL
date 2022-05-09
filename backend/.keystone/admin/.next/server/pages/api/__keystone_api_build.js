module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("u4g4");


/***/ }),

/***/ "3SxR":
/***/ (function(module, exports) {

module.exports = require("@keystone-next/auth");

/***/ }),

/***/ "99Vv":
/***/ (function(module, exports) {

module.exports = require("@keystone-next/fields");

/***/ }),

/***/ "DBBG":
/***/ (function(module, exports) {

module.exports = require("@keystone-next/keystone/schema");

/***/ }),

/***/ "Kfaf":
/***/ (function(module, exports) {

module.exports = require("@keystone-next/keystone/session");

/***/ }),

/***/ "VnZ6":
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),

/***/ "u4g4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "config", function() { return /* reexport */ keystone; });

// EXTERNAL MODULE: external "@keystone-next/keystone/schema"
var schema_ = __webpack_require__("DBBG");

// EXTERNAL MODULE: external "@keystone-next/fields"
var fields_ = __webpack_require__("99Vv");

// CONCATENATED MODULE: /home/elenagrasovskaya/Documents/GitHub/LIBRA_PORTAL/backend/schemas/User.ts


const User = Object(schema_["list"])({
  // access
  // ui
  fields: {
    name: Object(fields_["text"])({
      isRequired: true
    }),
    email: Object(fields_["text"])({
      isRequired: true,
      isUnique: true
    }),
    password: Object(fields_["password"])(),
    itemsCreated: Object(fields_["relationship"])({
      ref: 'Item.author'
    }),
    ordersCreated: Object(fields_["relationship"])({
      ref: 'Order.author'
    }) // add roles orders

  }
});
// CONCATENATED MODULE: /home/elenagrasovskaya/Documents/GitHub/LIBRA_PORTAL/backend/schemas/Item.ts


const Item = Object(schema_["list"])({
  // TODO
  // access:
  fields: {
    name: Object(fields_["text"])({
      isRequired: true
    }),
    author: Object(fields_["relationship"])({
      ref: 'User.itemsCreated',
      many: false
    }),
    order: Object(fields_["relationship"])({
      ref: 'Order.items',
      many: false
    }),
    description: Object(fields_["text"])({
      ui: {
        displayMode: 'textarea'
      }
    }),
    status: Object(fields_["select"])({
      options: [{
        label: 'Сергей',
        value: 'SERG'
      }, {
        label: 'Максим',
        value: 'MAX'
      }],
      defaultValue: 'MAX'
      /*ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'hidden' },
      },*/

    }),
    price: Object(fields_["integer"])(),
    dateCreated: Object(fields_["timestamp"])() // TODO: Photo

  }
});
// CONCATENATED MODULE: /home/elenagrasovskaya/Documents/GitHub/LIBRA_PORTAL/backend/schemas/Order.ts


const Order = Object(schema_["list"])({
  // TODO
  // access:
  fields: {
    name: Object(fields_["text"])({
      isRequired: true
    }),
    author: Object(fields_["relationship"])({
      ref: 'User.ordersCreated',
      many: false
    }),
    items: Object(fields_["relationship"])({
      ref: 'Item.order',
      many: true
    }),
    description: Object(fields_["text"])({
      ui: {
        displayMode: 'textarea'
      }
    }),
    dateCreated: Object(fields_["timestamp"])(),
    status: Object(fields_["select"])({
      options: [{
        label: 'В работе',
        value: 'PROGRESS'
      }, {
        label: 'Выполнен',
        value: 'DONE'
      }],
      defaultValue: 'PROGRESS'
      /*ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'hidden' },
      },*/

    }),
    clientPrice: Object(fields_["integer"])(),
    clientPrepay: Object(fields_["integer"])(),
    clientDept: Object(fields_["integer"])(),
    expence: Object(fields_["integer"])(),
    interest: Object(fields_["integer"])(),
    personalExpence: Object(fields_["integer"])() // TODO: Photo

  }
});
// EXTERNAL MODULE: external "dotenv/config"
var config_ = __webpack_require__("VnZ6");

// EXTERNAL MODULE: external "@keystone-next/auth"
var auth_ = __webpack_require__("3SxR");

// EXTERNAL MODULE: external "@keystone-next/keystone/session"
var session_ = __webpack_require__("Kfaf");

// CONCATENATED MODULE: /home/elenagrasovskaya/Documents/GitHub/LIBRA_PORTAL/backend/keystone.ts
/* eslint-disable import/order */







const databaseURL = process.env.DATABASE_URL || 'mongodb://localho st/libraportal';
const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  // How long should they stay signed in
  secret: process.env.COOKIE_SECRET
};
const {
  withAuth
} = Object(auth_["createAuth"])({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'] // TODO: Add in initial roles here

  }
});
/* harmony default export */ var keystone = (withAuth(Object(schema_["config"])({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL, process.env.FRONTEND_URL + "/signin", process.env.FRONTEND_URL + "/", "http://localhost:7777/"],
      credentials: true,
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE,FETCH,OPTION",
      preflightContinue: true,
      allowedHeaders: ['Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization, X-Request-With']
    }
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL // TODO: Add data seeding here

  },
  lists: Object(schema_["createSchema"])({
    // Schema items go in here
    User: User,
    Item: Item,
    Order: Order
  }),
  ui: {
    // TODO: change this for roles
    isAccessAllowed: ({
      session
    }) => // console.log(session);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    !!(session === null || session === void 0 ? void 0 : session.data)
  },
  session: Object(session_["withItemData"])(Object(session_["statelessSessions"])(sessionConfig), {
    // GraphQL query
    User: 'id name email'
  }) // TODO:Add session values here

})));
// CONCATENATED MODULE: ./pages/api/__keystone_api_build.js

/* harmony default export */ var _keystone_api_build = __webpack_exports__["default"] = (function (req, res) {
  return res.status(500);
});

/***/ })

/******/ });