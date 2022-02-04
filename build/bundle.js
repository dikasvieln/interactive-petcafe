(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.text = text;
exports.createElement = createElement;
exports.div = div;
exports.article = article;
exports.h1 = h1;
exports.h3 = h3;
exports.nav = nav;
exports.ul = ul;
exports.li = li;
exports.i = i;
exports.span = span;
exports.section = section;
exports.footer = footer;
exports.p = p;
exports.img = img;
exports.button = button;
exports.addId = addId;
exports.addClass = addClass;
function text(words) {
  return document.createTextNode(words);
}

function createElement(type) {
  var newElement = document.createElement(type);

  for (var _len = arguments.length, children = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    children[_key - 1] = arguments[_key];
  }

  children.forEach(function (child) {
    return newElement.appendChild(child);
  });
  return newElement;
}

function div() {
  for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    children[_key2] = arguments[_key2];
  }

  return createElement.apply(undefined, ['div'].concat(children));
}

function article() {
  for (var _len3 = arguments.length, children = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    children[_key3] = arguments[_key3];
  }

  return createElement.apply(undefined, ['article'].concat(children));
}

function h1() {
  for (var _len4 = arguments.length, children = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    children[_key4] = arguments[_key4];
  }

  return createElement.apply(undefined, ['h1'].concat(children));
}

function h3() {
  for (var _len5 = arguments.length, children = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    children[_key5] = arguments[_key5];
  }

  return createElement.apply(undefined, ['h3'].concat(children));
}

function nav() {
  for (var _len6 = arguments.length, children = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    children[_key6] = arguments[_key6];
  }

  return createElement.apply(undefined, ['nav'].concat(children));
}

function ul() {
  for (var _len7 = arguments.length, children = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    children[_key7] = arguments[_key7];
  }

  return createElement.apply(undefined, ['ul'].concat(children));
}

function li() {
  for (var _len8 = arguments.length, children = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    children[_key8] = arguments[_key8];
  }

  return createElement.apply(undefined, ['li'].concat(children));
}

function i() {
  for (var _len9 = arguments.length, children = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    children[_key9] = arguments[_key9];
  }

  return createElement.apply(undefined, ['i'].concat(children));
}

function span() {
  for (var _len10 = arguments.length, children = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    children[_key10] = arguments[_key10];
  }

  return createElement.apply(undefined, ['span'].concat(children));
}

function section() {
  for (var _len11 = arguments.length, children = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
    children[_key11] = arguments[_key11];
  }

  return createElement.apply(undefined, ['section'].concat(children));
}

function footer() {
  for (var _len12 = arguments.length, children = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
    children[_key12] = arguments[_key12];
  }

  return createElement.apply(undefined, ['footer'].concat(children));
}

function p() {
  for (var _len13 = arguments.length, children = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
    children[_key13] = arguments[_key13];
  }

  return createElement.apply(undefined, ['p'].concat(children));
}

function img(source) {
  var image = createElement('img');
  image.src = source;
  return image;
}

function button() {
  for (var _len14 = arguments.length, children = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
    children[_key14] = arguments[_key14];
  }

  return createElement.apply(undefined, ['button'].concat(children));
}

function addId(element, id) {
  var newElement = element.cloneNode(true);
  return Object.assign(newElement, { id: id });
}

function addClass(element) {
  var newElement = element.cloneNode(true);

  for (var _len15 = arguments.length, klasses = Array(_len15 > 1 ? _len15 - 1 : 0), _key15 = 1; _key15 < _len15; _key15++) {
    klasses[_key15 - 1] = arguments[_key15];
  }

  klasses.forEach(function (klass) {
    return newElement.classList.add(klass);
  });
  return newElement;
}

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = app;

var _builders = require('../builders');

var _modal = require('./modal');

var _modal2 = _interopRequireDefault(_modal);

var _navbar = require('./navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _hero = require('./hero');

var _hero2 = _interopRequireDefault(_hero);

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

var _bottom = require('./bottom');

var _bottom2 = _interopRequireDefault(_bottom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function app(store) {
  var modalEle = (0, _modal2.default)(store);
  var navbarEle = (0, _navbar2.default)();
  var heroEle = (0, _hero2.default)();
  var menuEle = (0, _menu2.default)(store);
  var bottomEle = (0, _bottom2.default)();
  var appEle = (0, _builders.addId)((0, _builders.div)(modalEle, navbarEle, heroEle, menuEle, bottomEle), 'app-container');

  return appEle;
}

},{"../builders":1,"./bottom":3,"./hero":4,"./menu":6,"./modal":9,"./navbar":11}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bottom;

var _builders = require('../builders');

function bottom() {
  var name = (0, _builders.p)((0, _builders.text)('Aulia Dikaa 2022'));
  var content = (0, _builders.addClass)((0, _builders.div)(name), 'content', 'is-centered');

  var container = (0, _builders.addClass)((0, _builders.div)(content), 'container');

  return (0, _builders.addClass)((0, _builders.footer)(container), 'footer');
}

},{"../builders":1}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hero;

var _builders = require('../builders');

function hero() {
  var logo = (0, _builders.addClass)((0, _builders.img)('static/logo-fudi.png'), 'logo');
  var the = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('The')), 'hero-text-light');
  var fancyFood = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('Fancy Food')), 'hero-text-bold');
  var eateries = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('Recipes')), 'hero-text-light');

  var container = (0, _builders.addClass)((0, _builders.div)(logo, the, fancyFood, eateries), 'container');

  var heroContent = (0, _builders.addClass)((0, _builders.div)(container), 'hero-content');

  return (0, _builders.addClass)((0, _builders.section)(heroContent), 'hero', 'splash');
}

},{"../builders":1}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = leftMenu;

var _builders = require('../builders');

var _helpers = require('../helpers');

var _menuList = require('./menuList');

var _menuList2 = _interopRequireDefault(_menuList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function leftMenu() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var appetizers = (0, _menuList2.default)('Appetizers', (0, _helpers.filterByType)(items, 'appetizer'));
  var burgers = (0, _menuList2.default)('Burgers', (0, _helpers.filterByType)(items, 'burger'));

  return (0, _builders.addClass)((0, _builders.div)(appetizers, burgers), 'column', 'is-6');
}

},{"../builders":1,"../helpers":13,"./menuList":8}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = menu;

var _builders = require('../builders');

var _helpers = require('../helpers');

var _leftMenu = require('./leftMenu');

var _leftMenu2 = _interopRequireDefault(_leftMenu);

var _rightMenu = require('./rightMenu');

var _rightMenu2 = _interopRequireDefault(_rightMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function menu(store) {
  var menuEle = (0, _builders.addId)((0, _builders.addClass)((0, _builders.div)(), 'container'), 'menu');

  store.on('SET_ITEMS', function (_ref) {
    var items = _ref.items;

    var leftSide = (0, _leftMenu2.default)(items);
    var rightSide = (0, _rightMenu2.default)(items);
    var columns = (0, _builders.addClass)((0, _builders.section)(leftSide, rightSide), 'columns');
    (0, _helpers.$)('#menu').children(columns);
  });

  store.on('ITEM_ADDED', function (_ref2) {
    var cart = _ref2.cart;

    var cartArray = [].concat(_toConsumableArray(cart));
    var articles = cartArray.map(function (id) {
      return 'article[data-key=\'' + id + '\']';
    });
    var buttons = cartArray.map(function (id) {
      return 'article[data-key=\'' + id + '\'] button.add-to-cart';
    });

    (0, _helpers.$)(articles.join(', ')).addClass('in-cart');
    (0, _helpers.$)(buttons.join(', ')).attr('disabled', 'disabled');
  });

  store.on('ITEM_REMOVED', function (_ref3) {
    var cart = _ref3.cart;

    var onPageKeys = (0, _helpers.$)('article.in-cart').map(function (ele) {
      return parseInt(ele.dataset.key, 10);
    });
    var inCartKeys = [].concat(_toConsumableArray(cart));
    var keysToRemove = onPageKeys.filter(function (key) {
      return !inCartKeys.includes(key);
    });

    keysToRemove.forEach(function (key) {
      (0, _helpers.$)('article[data-key=\'' + key + '\']').removeClass('in-cart');
      (0, _helpers.$)('article[data-key=\'' + key + '\'] button.add-to-cart').attr('disabled', false);
    });
  });

  return menuEle;
}

},{"../builders":1,"../helpers":13,"./leftMenu":5,"./rightMenu":12}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = menuItem;

var _builders = require('../builders');

var _helpers = require('../helpers');

function menuItem() {
  var itemData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var name = (0, _builders.addClass)((0, _builders.h3)((0, _builders.text)(itemData.name)), 'name');
  var price = (0, _builders.addClass)((0, _builders.span)((0, _builders.text)('$' + (0, _helpers.formatPrice)(itemData.price))), 'price', 'is-pulled-right');
  var description = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)(itemData.description)), 'desc');
  var addToCart = (0, _builders.addClass)((0, _builders.button)((0, _builders.text)('Add to Cart')), 'button', 'is-pulled-right', 'add-to-cart');

  var mediaContent = (0, _builders.addClass)((0, _builders.div)(name, price, description, addToCart), 'media-content');

  var item = (0, _builders.addClass)((0, _builders.article)(mediaContent), 'media', 'menu_item');
  item.dataset.key = itemData.id;

  return item;
}

},{"../builders":1,"../helpers":13}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = menuList;

var _builders = require('../builders');

var _menuItem = require('./menuItem');

var _menuItem2 = _interopRequireDefault(_menuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function menuList(headline) {
  var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var menuItems = items.map(_menuItem2.default);

  var title = (0, _builders.addClass)((0, _builders.h1)((0, _builders.text)(headline)), 'title');

  return (0, _builders.addClass)(_builders.div.apply(undefined, [title].concat(_toConsumableArray(menuItems))), 'collection');
}

},{"../builders":1,"./menuItem":7}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = modal;

var _builders = require('../builders');

var _helpers = require('../helpers');

var _modalItem = require('./modalItem');

var _modalItem2 = _interopRequireDefault(_modalItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function modal(store) {
  var close = (0, _builders.addId)((0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-times', 'close'), 'close');
  var title = (0, _builders.addClass)((0, _builders.h1)((0, _builders.text)('Cart')), 'title');

  var cartContainer = (0, _builders.addId)((0, _builders.div)((0, _builders.p)((0, _builders.text)('Your cart is empty.'))), 'cart-items');

  var checkoutButton = (0, _builders.addClass)((0, _builders.button)((0, _builders.text)('Checkout')), 'button', 'is-fullwidth');

  var modalContainer = (0, _builders.addClass)((0, _builders.div)(close, title, cartContainer, checkoutButton), 'modal-container');

  var modalEle = (0, _builders.addId)((0, _builders.addClass)((0, _builders.section)(modalContainer), 'modal'), 'modal');

  store.on('TOGGLE_SHOW_CART', function (_ref) {
    var cartVisible = _ref.cartVisible;

    var ele = (0, _helpers.$)('#modal');
    if (cartVisible) {
      ele.addClass('show');
    } else {
      ele.removeClass('show');
    }
  });

  store.on('ITEM_ADDED', function (_ref2) {
    var items = _ref2.items,
        cart = _ref2.cart;

    var cartArray = [].concat(_toConsumableArray(cart));
    var cartItems = cartArray.map(function (itemId) {
      return (0, _modalItem2.default)(items[itemId]);
    });
    var cartList = (0, _builders.addClass)(_builders.ul.apply(undefined, _toConsumableArray(cartItems)), 'menu');
    (0, _helpers.$)('#cart-items').children(cartList);
  });

  return modalEle;
}

},{"../builders":1,"../helpers":13,"./modalItem":10}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = modalItem;

var _builders = require('../builders');

var _helpers = require('../helpers');

function modalItem(itemData) {
  var name = (0, _builders.addClass)((0, _builders.span)((0, _builders.text)(itemData.name)), 'name');
  var price = (0, _builders.addClass)((0, _builders.span)((0, _builders.text)((0, _helpers.formatPrice)(itemData.price))), 'price', 'is-pulled-right');
  var removeButton = (0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-times', 'remove');

  var item = (0, _builders.addClass)((0, _builders.li)(name, price, removeButton), 'menu-item');
  item.dataset.key = itemData.id;

  return item;
}

},{"../builders":1,"../helpers":13}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = navbar;

var _builders = require('../builders');

function navbar() {
  var navLeft = (0, _builders.addClass)((0, _builders.div)(), 'navbar-left');

  var cartIcon = (0, _builders.addId)((0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-shopping-cart'), 'cart-icon');
  var cartItems = (0, _builders.addClass)((0, _builders.span)(), 'cart-items');
  var navbarItem = (0, _builders.addClass)((0, _builders.div)(cartIcon, cartItems), 'navbar-item');
  var navRight = (0, _builders.addClass)((0, _builders.div)(navbarItem), 'navbar-right', 'cart');

  return (0, _builders.addClass)((0, _builders.nav)(navLeft, navRight), 'navbar');
}

},{"../builders":1}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rightMenu;

var _builders = require('../builders');

var _helpers = require('../helpers');

var _menuList = require('./menuList');

var _menuList2 = _interopRequireDefault(_menuList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rightMenu() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var appetizers = (0, _menuList2.default)('Soups and Salads', (0, _helpers.filterByType)(items, 'soup_salad'));
  var desserts = (0, _menuList2.default)('Desserts', (0, _helpers.filterByType)(items, 'dessert'));

  return (0, _builders.addClass)((0, _builders.div)(appetizers, desserts), 'column', 'is-6');
}

},{"../builders":1,"../helpers":13,"./menuList":8}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatPrice = formatPrice;
exports.filterByType = filterByType;
exports.$ = $;
function formatPrice(price) {
  return parseFloat(price).toFixed(2);
}

function filterByType(map, type) {
  return Object.keys(map).filter(function (key) {
    return map[key].type === type;
  }).map(function (key) {
    return map[key];
  });
}

function $(query) {
  var elements = Array.prototype.slice.call(document.querySelectorAll(query));

  function on(event, cb) {
    elements.forEach(function (ele) {
      ele.addEventListener(event, cb);
    });
  }

  function children(toAdd) {
    elements.forEach(function (ele) {
      while (ele.firstChild) {
        ele.removeChild(ele.firstChild);
      }

      ele.appendChild(toAdd);
    });
  }

  function addClass(klass) {
    elements.forEach(function (ele) {
      ele.classList.add(klass);
    });
  }

  function removeClass(klass) {
    elements.forEach(function (ele) {
      ele.classList.remove(klass);
    });
  }

  function attr(attribute, value) {
    elements.forEach(function (ele) {
      if (value === false) {
        ele.removeAttribute(attribute);
      } else {
        ele.setAttribute(attribute, value);
      }
    });
  }

  function map(cb) {
    return elements.map(cb);
  }

  return {
    on: on,
    children: children,
    addClass: addClass,
    removeClass: removeClass,
    attr: attr,
    map: map
  };
}

},{}],14:[function(require,module,exports){
'use strict';

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

var _state = require('./state');

var _setup_listeners = require('./setup_listeners');

var _setup_listeners2 = _interopRequireDefault(_setup_listeners);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer(state, event, data) {
  switch (event) {
    case 'SET_ITEMS':
      return Object.assign({}, state, {
        items: data.items.reduce(function (total, item) {
          return Object.assign({}, total, _defineProperty({}, item.id, item));
        }, {})
      });
    case 'ITEM_ADDED':
      return Object.assign({}, state, {
        cart: new Set(state.cart).add(data.item)
      });
    case 'ITEM_REMOVED':
      var newCart = new Set(state.cart);
      newCart.delete(data.item);
      return Object.assign({}, state, {
        cart: newCart
      });
    case 'TOGGLE_SHOW_CART':
      return Object.assign({}, state, {
        cartVisible: !state.cartVisible
      });
    default:
      return state;
  }
}

var store = (0, _state.createStore)(reducer);

fetch('food.json').then(function (res) {
  return res.json();
}).then(function (resBody) {
  var body = document.querySelector('body');
  body.insertBefore((0, _app2.default)(store), body.childNodes[0]);
  store.trigger('SET_ITEMS', { items: resBody });
  (0, _setup_listeners2.default)(store);
});

},{"./components/app":2,"./setup_listeners":15,"./state":16}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (store) {
  (0, _helpers.$)('#cart-icon, #close').on('click', function () {
    store.trigger('TOGGLE_SHOW_CART');
  });

  function getParentWithKey(element) {
    var parent = element.parentElement;

    while (parent && !parent.dataset.key) {
      parent = parent.parentElement;
    }

    return parent;
  }

  (0, _helpers.$)('.add-to-cart').on('click', function (e) {
    var parent = getParentWithKey(e.currentTarget);

    var key = parseInt(parent.dataset.key, 10);
    store.trigger('ITEM_ADDED', { item: key });
  });

  (0, _helpers.$)('body').on('click', function (e) {
    if (e.target.classList.contains('remove')) {
      var element = e.target;
      var parent = getParentWithKey(element);
      var key = parseInt(parent.dataset.key, 10);

      parent.parentElement.removeChild(parent);
      store.trigger('ITEM_REMOVED', { item: key });
    }
  });
};

var _helpers = require('./helpers');

},{"./helpers":13}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = createStore;
var defaultState = {
  items: {},
  cart: new Set(),
  cartVisible: false
};

function createStore(reducer) {
  var listeners = {};
  var state = Object.assign({}, defaultState);

  function on(event, cb) {
    if (!listeners[event]) {
      listeners[event] = [];
    }

    listeners[event].push(cb);
  }

  function trigger(event) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    state = reducer(state, event, data);

    if (listeners[event]) {
      listeners[event].forEach(function (cb) {
        cb(state);
      });
    }
  }

  return {
    on: on,
    trigger: trigger
  };
}

},{}]},{},[14])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYnVpbGRlcnMuanMiLCJzcmMvanMvY29tcG9uZW50cy9hcHAuanMiLCJzcmMvanMvY29tcG9uZW50cy9ib3R0b20uanMiLCJzcmMvanMvY29tcG9uZW50cy9oZXJvLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbGVmdE1lbnUuanMiLCJzcmMvanMvY29tcG9uZW50cy9tZW51LmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbWVudUl0ZW0uanMiLCJzcmMvanMvY29tcG9uZW50cy9tZW51TGlzdC5qcyIsInNyYy9qcy9jb21wb25lbnRzL21vZGFsLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbW9kYWxJdGVtLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvcmlnaHRNZW51LmpzIiwic3JjL2pzL2hlbHBlcnMuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvc2V0dXBfbGlzdGVuZXJzLmpzIiwic3JjL2pzL3N0YXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7UUNBZ0IsSSxHQUFBLEk7UUFJQSxhLEdBQUEsYTtRQU1BLEcsR0FBQSxHO1FBSUEsTyxHQUFBLE87UUFJQSxFLEdBQUEsRTtRQUlBLEUsR0FBQSxFO1FBSUEsRyxHQUFBLEc7UUFJQSxFLEdBQUEsRTtRQUlBLEUsR0FBQSxFO1FBSUEsQyxHQUFBLEM7UUFJQSxJLEdBQUEsSTtRQUlBLE8sR0FBQSxPO1FBSUEsTSxHQUFBLE07UUFJQSxDLEdBQUEsQztRQUlBLEcsR0FBQSxHO1FBTUEsTSxHQUFBLE07UUFJQSxLLEdBQUEsSztRQUtBLFEsR0FBQSxRO0FBekVULFNBQVMsSUFBVCxDQUFjLEtBQWQsRUFBcUI7QUFDMUIsU0FBTyxTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBUDtBQUNEOztBQUVNLFNBQVMsYUFBVCxDQUF1QixJQUF2QixFQUEwQztBQUMvQyxNQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLElBQXZCLENBQW5COztBQUQrQyxvQ0FBVixRQUFVO0FBQVYsWUFBVTtBQUFBOztBQUUvQyxXQUFTLE9BQVQsQ0FBaUI7QUFBQSxXQUFTLFdBQVcsV0FBWCxDQUF1QixLQUF2QixDQUFUO0FBQUEsR0FBakI7QUFDQSxTQUFPLFVBQVA7QUFDRDs7QUFFTSxTQUFTLEdBQVQsR0FBMEI7QUFBQSxxQ0FBVixRQUFVO0FBQVYsWUFBVTtBQUFBOztBQUMvQixTQUFPLGdDQUFjLEtBQWQsU0FBd0IsUUFBeEIsRUFBUDtBQUNEOztBQUVNLFNBQVMsT0FBVCxHQUE4QjtBQUFBLHFDQUFWLFFBQVU7QUFBVixZQUFVO0FBQUE7O0FBQ25DLFNBQU8sZ0NBQWMsU0FBZCxTQUE0QixRQUE1QixFQUFQO0FBQ0Q7O0FBRU0sU0FBUyxFQUFULEdBQXlCO0FBQUEscUNBQVYsUUFBVTtBQUFWLFlBQVU7QUFBQTs7QUFDOUIsU0FBTyxnQ0FBYyxJQUFkLFNBQXVCLFFBQXZCLEVBQVA7QUFDRDs7QUFFTSxTQUFTLEVBQVQsR0FBeUI7QUFBQSxxQ0FBVixRQUFVO0FBQVYsWUFBVTtBQUFBOztBQUM5QixTQUFPLGdDQUFjLElBQWQsU0FBdUIsUUFBdkIsRUFBUDtBQUNEOztBQUVNLFNBQVMsR0FBVCxHQUEwQjtBQUFBLHFDQUFWLFFBQVU7QUFBVixZQUFVO0FBQUE7O0FBQy9CLFNBQU8sZ0NBQWMsS0FBZCxTQUF3QixRQUF4QixFQUFQO0FBQ0Q7O0FBRU0sU0FBUyxFQUFULEdBQXlCO0FBQUEscUNBQVYsUUFBVTtBQUFWLFlBQVU7QUFBQTs7QUFDOUIsU0FBTyxnQ0FBYyxJQUFkLFNBQXVCLFFBQXZCLEVBQVA7QUFDRDs7QUFFTSxTQUFTLEVBQVQsR0FBeUI7QUFBQSxxQ0FBVixRQUFVO0FBQVYsWUFBVTtBQUFBOztBQUM5QixTQUFPLGdDQUFjLElBQWQsU0FBdUIsUUFBdkIsRUFBUDtBQUNEOztBQUVNLFNBQVMsQ0FBVCxHQUF3QjtBQUFBLHFDQUFWLFFBQVU7QUFBVixZQUFVO0FBQUE7O0FBQzdCLFNBQU8sZ0NBQWMsR0FBZCxTQUFzQixRQUF0QixFQUFQO0FBQ0Q7O0FBRU0sU0FBUyxJQUFULEdBQTJCO0FBQUEsc0NBQVYsUUFBVTtBQUFWLFlBQVU7QUFBQTs7QUFDaEMsU0FBTyxnQ0FBYyxNQUFkLFNBQXlCLFFBQXpCLEVBQVA7QUFDRDs7QUFFTSxTQUFTLE9BQVQsR0FBOEI7QUFBQSxzQ0FBVixRQUFVO0FBQVYsWUFBVTtBQUFBOztBQUNuQyxTQUFPLGdDQUFjLFNBQWQsU0FBNEIsUUFBNUIsRUFBUDtBQUNEOztBQUVNLFNBQVMsTUFBVCxHQUE2QjtBQUFBLHNDQUFWLFFBQVU7QUFBVixZQUFVO0FBQUE7O0FBQ2xDLFNBQU8sZ0NBQWMsUUFBZCxTQUEyQixRQUEzQixFQUFQO0FBQ0Q7O0FBRU0sU0FBUyxDQUFULEdBQXdCO0FBQUEsc0NBQVYsUUFBVTtBQUFWLFlBQVU7QUFBQTs7QUFDN0IsU0FBTyxnQ0FBYyxHQUFkLFNBQXNCLFFBQXRCLEVBQVA7QUFDRDs7QUFFTSxTQUFTLEdBQVQsQ0FBYSxNQUFiLEVBQXFCO0FBQzFCLE1BQU0sUUFBUSxjQUFjLEtBQWQsQ0FBZDtBQUNBLFFBQU0sR0FBTixHQUFZLE1BQVo7QUFDQSxTQUFPLEtBQVA7QUFDRDs7QUFFTSxTQUFTLE1BQVQsR0FBNkI7QUFBQSxzQ0FBVixRQUFVO0FBQVYsWUFBVTtBQUFBOztBQUNsQyxTQUFPLGdDQUFjLFFBQWQsU0FBMkIsUUFBM0IsRUFBUDtBQUNEOztBQUVNLFNBQVMsS0FBVCxDQUFlLE9BQWYsRUFBd0IsRUFBeEIsRUFBNEI7QUFDakMsTUFBTSxhQUFhLFFBQVEsU0FBUixDQUFrQixJQUFsQixDQUFuQjtBQUNBLFNBQU8sT0FBTyxNQUFQLENBQWMsVUFBZCxFQUEwQixFQUFFLE1BQUYsRUFBMUIsQ0FBUDtBQUNEOztBQUVNLFNBQVMsUUFBVCxDQUFrQixPQUFsQixFQUF1QztBQUM1QyxNQUFNLGFBQWEsUUFBUSxTQUFSLENBQWtCLElBQWxCLENBQW5COztBQUQ0QyxzQ0FBVCxPQUFTO0FBQVQsV0FBUztBQUFBOztBQUU1QyxVQUFRLE9BQVIsQ0FBZ0I7QUFBQSxXQUFTLFdBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5QixLQUF6QixDQUFUO0FBQUEsR0FBaEI7QUFDQSxTQUFPLFVBQVA7QUFDRDs7Ozs7Ozs7a0JDdEV1QixHOztBQVB4Qjs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFZSxTQUFTLEdBQVQsQ0FBYSxLQUFiLEVBQW9CO0FBQ2pDLE1BQU0sV0FBVyxxQkFBTSxLQUFOLENBQWpCO0FBQ0EsTUFBTSxZQUFZLHVCQUFsQjtBQUNBLE1BQU0sVUFBVSxxQkFBaEI7QUFDQSxNQUFNLFVBQVUsb0JBQUssS0FBTCxDQUFoQjtBQUNBLE1BQU0sWUFBWSx1QkFBbEI7QUFDQSxNQUFNLFNBQVMscUJBQU0sbUJBQUksUUFBSixFQUFjLFNBQWQsRUFBeUIsT0FBekIsRUFBa0MsT0FBbEMsRUFBMkMsU0FBM0MsQ0FBTixFQUE2RCxlQUE3RCxDQUFmOztBQUVBLFNBQU8sTUFBUDtBQUNEOzs7Ozs7OztrQkNkdUIsTTs7QUFGeEI7O0FBRWUsU0FBUyxNQUFULEdBQWtCO0FBQy9CLE1BQU0sT0FBTyxpQkFBRSxvQkFBSyxrQkFBTCxDQUFGLENBQWI7QUFDQSxNQUFNLFVBQVUsd0JBQVMsbUJBQUksSUFBSixDQUFULEVBQW9CLFNBQXBCLEVBQStCLGFBQS9CLENBQWhCOztBQUVBLE1BQU0sWUFBWSx3QkFBUyxtQkFBSSxPQUFKLENBQVQsRUFBdUIsV0FBdkIsQ0FBbEI7O0FBRUEsU0FBTyx3QkFBUyxzQkFBTyxTQUFQLENBQVQsRUFBNEIsUUFBNUIsQ0FBUDtBQUNEOzs7Ozs7OztrQkNQdUIsSTs7QUFGeEI7O0FBRWUsU0FBUyxJQUFULEdBQWdCO0FBQzdCLE1BQU0sT0FBTyx3QkFBUyxtQkFBSSxzQkFBSixDQUFULEVBQXNDLE1BQXRDLENBQWI7QUFDQSxNQUFNLE1BQU0sd0JBQVMsaUJBQUUsb0JBQUssS0FBTCxDQUFGLENBQVQsRUFBeUIsaUJBQXpCLENBQVo7QUFDQSxNQUFNLFlBQVksd0JBQVMsaUJBQUUsb0JBQUssWUFBTCxDQUFGLENBQVQsRUFBZ0MsZ0JBQWhDLENBQWxCO0FBQ0EsTUFBTSxXQUFXLHdCQUFTLGlCQUFFLG9CQUFLLFNBQUwsQ0FBRixDQUFULEVBQTZCLGlCQUE3QixDQUFqQjs7QUFFQSxNQUFNLFlBQVksd0JBQVMsbUJBQUksSUFBSixFQUFVLEdBQVYsRUFBZSxTQUFmLEVBQTBCLFFBQTFCLENBQVQsRUFBOEMsV0FBOUMsQ0FBbEI7O0FBRUEsTUFBTSxjQUFjLHdCQUFTLG1CQUFJLFNBQUosQ0FBVCxFQUF5QixjQUF6QixDQUFwQjs7QUFFQSxTQUFPLHdCQUFTLHVCQUFRLFdBQVIsQ0FBVCxFQUErQixNQUEvQixFQUF1QyxRQUF2QyxDQUFQO0FBQ0Q7Ozs7Ozs7O2tCQ1R1QixROztBQUp4Qjs7QUFDQTs7QUFDQTs7Ozs7O0FBRWUsU0FBUyxRQUFULEdBQThCO0FBQUEsTUFBWixLQUFZLHVFQUFKLEVBQUk7O0FBQzNDLE1BQU0sYUFBYSx3QkFBUyxZQUFULEVBQXVCLDJCQUFhLEtBQWIsRUFBb0IsV0FBcEIsQ0FBdkIsQ0FBbkI7QUFDQSxNQUFNLFVBQVUsd0JBQVMsU0FBVCxFQUFvQiwyQkFBYSxLQUFiLEVBQW9CLFFBQXBCLENBQXBCLENBQWhCOztBQUVBLFNBQU8sd0JBQVMsbUJBQUksVUFBSixFQUFnQixPQUFoQixDQUFULEVBQW1DLFFBQW5DLEVBQTZDLE1BQTdDLENBQVA7QUFDRDs7Ozs7Ozs7a0JDSnVCLEk7O0FBTHhCOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRWUsU0FBUyxJQUFULENBQWMsS0FBZCxFQUFxQjtBQUNsQyxNQUFNLFVBQVUscUJBQU0sd0JBQVMsb0JBQVQsRUFBZ0IsV0FBaEIsQ0FBTixFQUFvQyxNQUFwQyxDQUFoQjs7QUFFQSxRQUFNLEVBQU4sQ0FBUyxXQUFULEVBQXNCLGdCQUFlO0FBQUEsUUFBWixLQUFZLFFBQVosS0FBWTs7QUFDbkMsUUFBTSxXQUFXLHdCQUFTLEtBQVQsQ0FBakI7QUFDQSxRQUFNLFlBQVkseUJBQVUsS0FBVixDQUFsQjtBQUNBLFFBQU0sVUFBVSx3QkFBUyx1QkFBUSxRQUFSLEVBQWtCLFNBQWxCLENBQVQsRUFBdUMsU0FBdkMsQ0FBaEI7QUFDQSxvQkFBRSxPQUFGLEVBQVcsUUFBWCxDQUFvQixPQUFwQjtBQUNELEdBTEQ7O0FBT0EsUUFBTSxFQUFOLENBQVMsWUFBVCxFQUF1QixpQkFBYztBQUFBLFFBQVgsSUFBVyxTQUFYLElBQVc7O0FBQ25DLFFBQU0seUNBQWdCLElBQWhCLEVBQU47QUFDQSxRQUFNLFdBQVcsVUFBVSxHQUFWLENBQWM7QUFBQSxxQ0FBMkIsRUFBM0I7QUFBQSxLQUFkLENBQWpCO0FBQ0EsUUFBTSxVQUFVLFVBQVUsR0FBVixDQUFjO0FBQUEscUNBQTJCLEVBQTNCO0FBQUEsS0FBZCxDQUFoQjs7QUFFQSxvQkFBRSxTQUFTLElBQVQsQ0FBYyxJQUFkLENBQUYsRUFBdUIsUUFBdkIsQ0FBZ0MsU0FBaEM7QUFDQSxvQkFBRSxRQUFRLElBQVIsQ0FBYSxJQUFiLENBQUYsRUFBc0IsSUFBdEIsQ0FBMkIsVUFBM0IsRUFBdUMsVUFBdkM7QUFDRCxHQVBEOztBQVNBLFFBQU0sRUFBTixDQUFTLGNBQVQsRUFBeUIsaUJBQWM7QUFBQSxRQUFYLElBQVcsU0FBWCxJQUFXOztBQUNyQyxRQUFNLGFBQWEsZ0JBQUUsaUJBQUYsRUFBcUIsR0FBckIsQ0FBeUI7QUFBQSxhQUFPLFNBQVMsSUFBSSxPQUFKLENBQVksR0FBckIsRUFBMEIsRUFBMUIsQ0FBUDtBQUFBLEtBQXpCLENBQW5CO0FBQ0EsUUFBTSwwQ0FBaUIsSUFBakIsRUFBTjtBQUNBLFFBQU0sZUFBZSxXQUFXLE1BQVgsQ0FBa0I7QUFBQSxhQUFPLENBQUMsV0FBVyxRQUFYLENBQW9CLEdBQXBCLENBQVI7QUFBQSxLQUFsQixDQUFyQjs7QUFFQSxpQkFBYSxPQUFiLENBQXFCLGVBQU87QUFDMUIsOENBQXVCLEdBQXZCLFVBQWdDLFdBQWhDLENBQTRDLFNBQTVDO0FBQ0EsOENBQXVCLEdBQXZCLDZCQUFtRCxJQUFuRCxDQUF3RCxVQUF4RCxFQUFvRSxLQUFwRTtBQUNELEtBSEQ7QUFJRCxHQVREOztBQVdBLFNBQU8sT0FBUDtBQUNEOzs7Ozs7OztrQkNqQ3VCLFE7O0FBSHhCOztBQUNBOztBQUVlLFNBQVMsUUFBVCxHQUFpQztBQUFBLE1BQWYsUUFBZSx1RUFBSixFQUFJOztBQUM5QyxNQUFNLE9BQU8sd0JBQVMsa0JBQUcsb0JBQUssU0FBUyxJQUFkLENBQUgsQ0FBVCxFQUFrQyxNQUFsQyxDQUFiO0FBQ0EsTUFBTSxRQUFRLHdCQUFTLG9CQUFLLDBCQUFTLDBCQUFZLFNBQVMsS0FBckIsQ0FBVCxDQUFMLENBQVQsRUFBd0QsT0FBeEQsRUFBaUUsaUJBQWpFLENBQWQ7QUFDQSxNQUFNLGNBQWMsd0JBQVMsaUJBQUUsb0JBQUssU0FBUyxXQUFkLENBQUYsQ0FBVCxFQUF3QyxNQUF4QyxDQUFwQjtBQUNBLE1BQU0sWUFBWSx3QkFBUyxzQkFBTyxvQkFBSyxhQUFMLENBQVAsQ0FBVCxFQUFzQyxRQUF0QyxFQUFnRCxpQkFBaEQsRUFBbUUsYUFBbkUsQ0FBbEI7O0FBRUEsTUFBTSxlQUFlLHdCQUFTLG1CQUFJLElBQUosRUFBVSxLQUFWLEVBQWlCLFdBQWpCLEVBQThCLFNBQTlCLENBQVQsRUFBbUQsZUFBbkQsQ0FBckI7O0FBRUEsTUFBTSxPQUFPLHdCQUFTLHVCQUFRLFlBQVIsQ0FBVCxFQUFnQyxPQUFoQyxFQUF5QyxXQUF6QyxDQUFiO0FBQ0EsT0FBSyxPQUFMLENBQWEsR0FBYixHQUFtQixTQUFTLEVBQTVCOztBQUVBLFNBQU8sSUFBUDtBQUNEOzs7Ozs7OztrQkNadUIsUTs7QUFIeEI7O0FBQ0E7Ozs7Ozs7O0FBRWUsU0FBUyxRQUFULENBQWtCLFFBQWxCLEVBQXdDO0FBQUEsTUFBWixLQUFZLHVFQUFKLEVBQUk7O0FBQ3JELE1BQU0sWUFBWSxNQUFNLEdBQU4sb0JBQWxCOztBQUVBLE1BQU0sUUFBUSx3QkFBUyxrQkFBRyxvQkFBSyxRQUFMLENBQUgsQ0FBVCxFQUE2QixPQUE3QixDQUFkOztBQUVBLFNBQU8sd0JBQVMsZ0NBQUksS0FBSiw0QkFBYyxTQUFkLEdBQVQsRUFBbUMsWUFBbkMsQ0FBUDtBQUNEOzs7Ozs7OztrQkNMdUIsSzs7QUFKeEI7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRWUsU0FBUyxLQUFULENBQWUsS0FBZixFQUFzQjtBQUNuQyxNQUFNLFFBQVEscUJBQU0sd0JBQVMsa0JBQVQsRUFBYyxJQUFkLEVBQW9CLFVBQXBCLEVBQWdDLE9BQWhDLENBQU4sRUFBZ0QsT0FBaEQsQ0FBZDtBQUNBLE1BQU0sUUFBUSx3QkFBUyxrQkFBRyxvQkFBSyxNQUFMLENBQUgsQ0FBVCxFQUEyQixPQUEzQixDQUFkOztBQUVBLE1BQU0sZ0JBQWdCLHFCQUFNLG1CQUFJLGlCQUFFLG9CQUFLLHFCQUFMLENBQUYsQ0FBSixDQUFOLEVBQTJDLFlBQTNDLENBQXRCOztBQUVBLE1BQU0saUJBQWlCLHdCQUFTLHNCQUFPLG9CQUFLLFVBQUwsQ0FBUCxDQUFULEVBQW1DLFFBQW5DLEVBQTZDLGNBQTdDLENBQXZCOztBQUVBLE1BQU0saUJBQWlCLHdCQUFTLG1CQUFJLEtBQUosRUFBVyxLQUFYLEVBQWtCLGFBQWxCLEVBQWlDLGNBQWpDLENBQVQsRUFBMkQsaUJBQTNELENBQXZCOztBQUVBLE1BQU0sV0FBVyxxQkFBTSx3QkFBUyx1QkFBUSxjQUFSLENBQVQsRUFBa0MsT0FBbEMsQ0FBTixFQUFrRCxPQUFsRCxDQUFqQjs7QUFFQSxRQUFNLEVBQU4sQ0FBUyxrQkFBVCxFQUE2QixnQkFBcUI7QUFBQSxRQUFsQixXQUFrQixRQUFsQixXQUFrQjs7QUFDaEQsUUFBTSxNQUFNLGdCQUFFLFFBQUYsQ0FBWjtBQUNBLFFBQUksV0FBSixFQUFpQjtBQUNmLFVBQUksUUFBSixDQUFhLE1BQWI7QUFDRCxLQUZELE1BRU87QUFDTCxVQUFJLFdBQUosQ0FBZ0IsTUFBaEI7QUFDRDtBQUNGLEdBUEQ7O0FBU0EsUUFBTSxFQUFOLENBQVMsWUFBVCxFQUF1QixpQkFBcUI7QUFBQSxRQUFsQixLQUFrQixTQUFsQixLQUFrQjtBQUFBLFFBQVgsSUFBVyxTQUFYLElBQVc7O0FBQzFDLFFBQU0seUNBQWdCLElBQWhCLEVBQU47QUFDQSxRQUFNLFlBQVksVUFBVSxHQUFWLENBQWM7QUFBQSxhQUFVLHlCQUFVLE1BQU0sTUFBTixDQUFWLENBQVY7QUFBQSxLQUFkLENBQWxCO0FBQ0EsUUFBTSxXQUFXLHdCQUFTLGlEQUFNLFNBQU4sRUFBVCxFQUEyQixNQUEzQixDQUFqQjtBQUNBLG9CQUFFLGFBQUYsRUFBaUIsUUFBakIsQ0FBMEIsUUFBMUI7QUFDRCxHQUxEOztBQU9BLFNBQU8sUUFBUDtBQUNEOzs7Ozs7OztrQkM5QnVCLFM7O0FBSHhCOztBQUNBOztBQUVlLFNBQVMsU0FBVCxDQUFtQixRQUFuQixFQUE2QjtBQUMxQyxNQUFNLE9BQU8sd0JBQVMsb0JBQUssb0JBQUssU0FBUyxJQUFkLENBQUwsQ0FBVCxFQUFvQyxNQUFwQyxDQUFiO0FBQ0EsTUFBTSxRQUFRLHdCQUFTLG9CQUFLLG9CQUFLLDBCQUFZLFNBQVMsS0FBckIsQ0FBTCxDQUFMLENBQVQsRUFBa0QsT0FBbEQsRUFBMkQsaUJBQTNELENBQWQ7QUFDQSxNQUFNLGVBQWUsd0JBQVMsa0JBQVQsRUFBYyxJQUFkLEVBQW9CLFVBQXBCLEVBQWdDLFFBQWhDLENBQXJCOztBQUVBLE1BQU0sT0FBTyx3QkFBUyxrQkFBRyxJQUFILEVBQVMsS0FBVCxFQUFnQixZQUFoQixDQUFULEVBQXdDLFdBQXhDLENBQWI7QUFDQSxPQUFLLE9BQUwsQ0FBYSxHQUFiLEdBQW1CLFNBQVMsRUFBNUI7O0FBRUEsU0FBTyxJQUFQO0FBQ0Q7Ozs7Ozs7O2tCQ1Z1QixNOztBQUZ4Qjs7QUFFZSxTQUFTLE1BQVQsR0FBa0I7QUFDL0IsTUFBTSxVQUFVLHdCQUFTLG9CQUFULEVBQWdCLGFBQWhCLENBQWhCOztBQUVBLE1BQU0sV0FBVyxxQkFBTSx3QkFBUyxrQkFBVCxFQUFjLElBQWQsRUFBb0Isa0JBQXBCLENBQU4sRUFBK0MsV0FBL0MsQ0FBakI7QUFDQSxNQUFNLFlBQVksd0JBQVMscUJBQVQsRUFBaUIsWUFBakIsQ0FBbEI7QUFDQSxNQUFNLGFBQWEsd0JBQVMsbUJBQUksUUFBSixFQUFjLFNBQWQsQ0FBVCxFQUFtQyxhQUFuQyxDQUFuQjtBQUNBLE1BQU0sV0FBVyx3QkFBUyxtQkFBSSxVQUFKLENBQVQsRUFBMEIsY0FBMUIsRUFBMEMsTUFBMUMsQ0FBakI7O0FBRUEsU0FBTyx3QkFBUyxtQkFBSSxPQUFKLEVBQWEsUUFBYixDQUFULEVBQWlDLFFBQWpDLENBQVA7QUFDRDs7Ozs7Ozs7a0JDUHVCLFM7O0FBSnhCOztBQUNBOztBQUNBOzs7Ozs7QUFFZSxTQUFTLFNBQVQsR0FBK0I7QUFBQSxNQUFaLEtBQVksdUVBQUosRUFBSTs7QUFDNUMsTUFBTSxhQUFhLHdCQUFTLGtCQUFULEVBQTZCLDJCQUFhLEtBQWIsRUFBb0IsWUFBcEIsQ0FBN0IsQ0FBbkI7QUFDQSxNQUFNLFdBQVcsd0JBQVMsVUFBVCxFQUFxQiwyQkFBYSxLQUFiLEVBQW9CLFNBQXBCLENBQXJCLENBQWpCOztBQUVBLFNBQU8sd0JBQVMsbUJBQUksVUFBSixFQUFnQixRQUFoQixDQUFULEVBQW9DLFFBQXBDLEVBQThDLE1BQTlDLENBQVA7QUFDRDs7Ozs7Ozs7UUNUZSxXLEdBQUEsVztRQUlBLFksR0FBQSxZO1FBTUEsQyxHQUFBLEM7QUFWVCxTQUFTLFdBQVQsQ0FBcUIsS0FBckIsRUFBNEI7QUFDakMsU0FBTyxXQUFXLEtBQVgsRUFBa0IsT0FBbEIsQ0FBMEIsQ0FBMUIsQ0FBUDtBQUNEOztBQUVNLFNBQVMsWUFBVCxDQUFzQixHQUF0QixFQUEyQixJQUEzQixFQUFpQztBQUN0QyxTQUFPLE9BQU8sSUFBUCxDQUFZLEdBQVosRUFDSixNQURJLENBQ0c7QUFBQSxXQUFPLElBQUksR0FBSixFQUFTLElBQVQsS0FBa0IsSUFBekI7QUFBQSxHQURILEVBRUosR0FGSSxDQUVBO0FBQUEsV0FBTyxJQUFJLEdBQUosQ0FBUDtBQUFBLEdBRkEsQ0FBUDtBQUdEOztBQUVNLFNBQVMsQ0FBVCxDQUFXLEtBQVgsRUFBa0I7QUFDdkIsTUFBTSxXQUFXLE1BQU0sU0FBTixDQUFnQixLQUFoQixDQUFzQixJQUF0QixDQUEyQixTQUFTLGdCQUFULENBQTBCLEtBQTFCLENBQTNCLENBQWpCOztBQUVBLFdBQVMsRUFBVCxDQUFZLEtBQVosRUFBbUIsRUFBbkIsRUFBdUI7QUFDckIsYUFBUyxPQUFULENBQWlCLGVBQU87QUFDdEIsVUFBSSxnQkFBSixDQUFxQixLQUFyQixFQUE0QixFQUE1QjtBQUNELEtBRkQ7QUFHRDs7QUFFRCxXQUFTLFFBQVQsQ0FBa0IsS0FBbEIsRUFBeUI7QUFDdkIsYUFBUyxPQUFULENBQWlCLGVBQU87QUFDdEIsYUFBTyxJQUFJLFVBQVgsRUFBdUI7QUFDckIsWUFBSSxXQUFKLENBQWdCLElBQUksVUFBcEI7QUFDRDs7QUFFRCxVQUFJLFdBQUosQ0FBZ0IsS0FBaEI7QUFDRCxLQU5EO0FBT0Q7O0FBRUQsV0FBUyxRQUFULENBQWtCLEtBQWxCLEVBQXlCO0FBQ3ZCLGFBQVMsT0FBVCxDQUFpQixlQUFPO0FBQ3RCLFVBQUksU0FBSixDQUFjLEdBQWQsQ0FBa0IsS0FBbEI7QUFDRCxLQUZEO0FBR0Q7O0FBRUQsV0FBUyxXQUFULENBQXFCLEtBQXJCLEVBQTRCO0FBQzFCLGFBQVMsT0FBVCxDQUFpQixlQUFPO0FBQ3RCLFVBQUksU0FBSixDQUFjLE1BQWQsQ0FBcUIsS0FBckI7QUFDRCxLQUZEO0FBR0Q7O0FBRUQsV0FBUyxJQUFULENBQWMsU0FBZCxFQUF5QixLQUF6QixFQUFnQztBQUM5QixhQUFTLE9BQVQsQ0FBaUIsZUFBTztBQUN0QixVQUFJLFVBQVUsS0FBZCxFQUFxQjtBQUNuQixZQUFJLGVBQUosQ0FBb0IsU0FBcEI7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFJLFlBQUosQ0FBaUIsU0FBakIsRUFBNEIsS0FBNUI7QUFDRDtBQUNGLEtBTkQ7QUFPRDs7QUFFRCxXQUFTLEdBQVQsQ0FBYSxFQUFiLEVBQWlCO0FBQ2YsV0FBTyxTQUFTLEdBQVQsQ0FBYSxFQUFiLENBQVA7QUFDRDs7QUFFRCxTQUFPO0FBQ0wsVUFESztBQUVMLHNCQUZLO0FBR0wsc0JBSEs7QUFJTCw0QkFKSztBQUtMLGNBTEs7QUFNTDtBQU5LLEdBQVA7QUFRRDs7Ozs7QUMvREQ7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxTQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0IsS0FBeEIsRUFBK0IsSUFBL0IsRUFBcUM7QUFDbkMsVUFBUSxLQUFSO0FBQ0UsU0FBSyxXQUFMO0FBQ0UsYUFBTyxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQWxCLEVBQXlCO0FBQzlCLGVBQU8sS0FBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixVQUFDLEtBQUQsRUFBUSxJQUFSO0FBQUEsaUJBQ3ZCLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBbEIsc0JBQTRCLEtBQUssRUFBakMsRUFBc0MsSUFBdEMsRUFEdUI7QUFBQSxTQUFsQixFQUVILEVBRkc7QUFEdUIsT0FBekIsQ0FBUDtBQUtGLFNBQUssWUFBTDtBQUNFLGFBQU8sT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFsQixFQUF5QjtBQUM5QixjQUFPLElBQUksR0FBSixDQUFRLE1BQU0sSUFBZCxDQUFELENBQXNCLEdBQXRCLENBQTBCLEtBQUssSUFBL0I7QUFEd0IsT0FBekIsQ0FBUDtBQUdGLFNBQUssY0FBTDtBQUNFLFVBQU0sVUFBVyxJQUFJLEdBQUosQ0FBUSxNQUFNLElBQWQsQ0FBakI7QUFDQSxjQUFRLE1BQVIsQ0FBZSxLQUFLLElBQXBCO0FBQ0EsYUFBTyxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQWxCLEVBQXlCO0FBQzlCLGNBQU07QUFEd0IsT0FBekIsQ0FBUDtBQUdGLFNBQUssa0JBQUw7QUFDRSxhQUFPLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBbEIsRUFBeUI7QUFDOUIscUJBQWEsQ0FBQyxNQUFNO0FBRFUsT0FBekIsQ0FBUDtBQUdGO0FBQ0UsYUFBTyxLQUFQO0FBdEJKO0FBd0JEOztBQUVELElBQU0sUUFBUSx3QkFBWSxPQUFaLENBQWQ7O0FBRUEsTUFBTSxXQUFOLEVBQ0csSUFESCxDQUNRO0FBQUEsU0FBTyxJQUFJLElBQUosRUFBUDtBQUFBLENBRFIsRUFFRyxJQUZILENBRVEsbUJBQVc7QUFDZixNQUFNLE9BQU8sU0FBUyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxPQUFLLFlBQUwsQ0FBa0IsbUJBQUksS0FBSixDQUFsQixFQUE4QixLQUFLLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBOUI7QUFDQSxRQUFNLE9BQU4sQ0FBYyxXQUFkLEVBQTJCLEVBQUUsT0FBTyxPQUFULEVBQTNCO0FBQ0EsaUNBQWUsS0FBZjtBQUNELENBUEg7Ozs7Ozs7OztrQkMvQmUsVUFBVSxLQUFWLEVBQWlCO0FBQzlCLGtCQUFFLG9CQUFGLEVBQXdCLEVBQXhCLENBQTJCLE9BQTNCLEVBQW9DLFlBQU07QUFDeEMsVUFBTSxPQUFOLENBQWMsa0JBQWQ7QUFDRCxHQUZEOztBQUlBLFdBQVMsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUM7QUFDakMsUUFBSSxTQUFTLFFBQVEsYUFBckI7O0FBRUEsV0FBTyxVQUFVLENBQUMsT0FBTyxPQUFQLENBQWUsR0FBakMsRUFBc0M7QUFDcEMsZUFBUyxPQUFPLGFBQWhCO0FBQ0Q7O0FBRUQsV0FBTyxNQUFQO0FBQ0Q7O0FBRUQsa0JBQUUsY0FBRixFQUFrQixFQUFsQixDQUFxQixPQUFyQixFQUE4QixhQUFLO0FBQ2pDLFFBQU0sU0FBUyxpQkFBaUIsRUFBRSxhQUFuQixDQUFmOztBQUVBLFFBQU0sTUFBTSxTQUFTLE9BQU8sT0FBUCxDQUFlLEdBQXhCLEVBQTZCLEVBQTdCLENBQVo7QUFDQSxVQUFNLE9BQU4sQ0FBYyxZQUFkLEVBQTRCLEVBQUUsTUFBTSxHQUFSLEVBQTVCO0FBQ0QsR0FMRDs7QUFPQSxrQkFBRSxNQUFGLEVBQVUsRUFBVixDQUFhLE9BQWIsRUFBc0IsYUFBSztBQUN6QixRQUFJLEVBQUUsTUFBRixDQUFTLFNBQVQsQ0FBbUIsUUFBbkIsQ0FBNEIsUUFBNUIsQ0FBSixFQUEyQztBQUN6QyxVQUFNLFVBQVUsRUFBRSxNQUFsQjtBQUNBLFVBQU0sU0FBUyxpQkFBaUIsT0FBakIsQ0FBZjtBQUNBLFVBQU0sTUFBTSxTQUFTLE9BQU8sT0FBUCxDQUFlLEdBQXhCLEVBQTZCLEVBQTdCLENBQVo7O0FBRUEsYUFBTyxhQUFQLENBQXFCLFdBQXJCLENBQWlDLE1BQWpDO0FBQ0EsWUFBTSxPQUFOLENBQWMsY0FBZCxFQUE4QixFQUFFLE1BQU0sR0FBUixFQUE5QjtBQUNEO0FBQ0YsR0FURDtBQVVELEM7O0FBbENEOzs7Ozs7OztRQ01nQixXLEdBQUEsVztBQU5oQixJQUFNLGVBQWU7QUFDbkIsU0FBTyxFQURZO0FBRW5CLFFBQU8sSUFBSSxHQUFKLEVBRlk7QUFHbkIsZUFBYTtBQUhNLENBQXJCOztBQU1PLFNBQVMsV0FBVCxDQUFxQixPQUFyQixFQUE4QjtBQUNuQyxNQUFNLFlBQVksRUFBbEI7QUFDQSxNQUFJLFFBQVEsT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixZQUFsQixDQUFaOztBQUVBLFdBQVMsRUFBVCxDQUFZLEtBQVosRUFBbUIsRUFBbkIsRUFBdUI7QUFDckIsUUFBSSxDQUFDLFVBQVUsS0FBVixDQUFMLEVBQXVCO0FBQ3JCLGdCQUFVLEtBQVYsSUFBbUIsRUFBbkI7QUFDRDs7QUFFRCxjQUFVLEtBQVYsRUFBaUIsSUFBakIsQ0FBc0IsRUFBdEI7QUFDRDs7QUFFRCxXQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFBbUM7QUFBQSxRQUFYLElBQVcsdUVBQUosRUFBSTs7QUFDakMsWUFBUSxRQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLElBQXRCLENBQVI7O0FBRUEsUUFBSSxVQUFVLEtBQVYsQ0FBSixFQUFzQjtBQUNwQixnQkFBVSxLQUFWLEVBQWlCLE9BQWpCLENBQXlCLGNBQU07QUFDN0IsV0FBRyxLQUFIO0FBQ0QsT0FGRDtBQUdEO0FBQ0Y7O0FBRUQsU0FBTztBQUNMLFVBREs7QUFFTDtBQUZLLEdBQVA7QUFJRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiZXhwb3J0IGZ1bmN0aW9uIHRleHQod29yZHMpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHdvcmRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgLi4uY2hpbGRyZW4pIHtcbiAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gbmV3RWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpdiguLi5jaGlsZHJlbikge1xuICByZXR1cm4gY3JlYXRlRWxlbWVudCgnZGl2JywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJ0aWNsZSguLi5jaGlsZHJlbikge1xuICByZXR1cm4gY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGgxKC4uLmNoaWxkcmVuKSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KCdoMScsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGgzKC4uLmNoaWxkcmVuKSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KCdoMycsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hdiguLi5jaGlsZHJlbikge1xuICByZXR1cm4gY3JlYXRlRWxlbWVudCgnbmF2JywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdWwoLi4uY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3VsJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGkoLi4uY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2xpJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaSguLi5jaGlsZHJlbikge1xuICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaScsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwYW4oLi4uY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN0aW9uKC4uLmNoaWxkcmVuKSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KCdzZWN0aW9uJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9vdGVyKC4uLmNoaWxkcmVuKSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KCdmb290ZXInLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwKC4uLmNoaWxkcmVuKSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KCdwJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW1nKHNvdXJjZSkge1xuICBjb25zdCBpbWFnZSA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWFnZS5zcmMgPSBzb3VyY2U7XG4gIHJldHVybiBpbWFnZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1dHRvbiguLi5jaGlsZHJlbikge1xuICByZXR1cm4gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSWQoZWxlbWVudCwgaWQpIHtcbiAgY29uc3QgbmV3RWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXdFbGVtZW50LCB7IGlkIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgLi4ua2xhc3Nlcykge1xuICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gIGtsYXNzZXMuZm9yRWFjaChrbGFzcyA9PiBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoa2xhc3MpKTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG4iLCJpbXBvcnQgeyBkaXYsIGFkZElkIH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuaW1wb3J0IG1vZGFsIGZyb20gJy4vbW9kYWwnO1xuaW1wb3J0IG5hdmJhciBmcm9tICcuL25hdmJhcic7XG5pbXBvcnQgaGVybyBmcm9tICcuL2hlcm8nO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBib3R0b20gZnJvbSAnLi9ib3R0b20nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHAoc3RvcmUpIHtcbiAgY29uc3QgbW9kYWxFbGUgPSBtb2RhbChzdG9yZSk7XG4gIGNvbnN0IG5hdmJhckVsZSA9IG5hdmJhcigpO1xuICBjb25zdCBoZXJvRWxlID0gaGVybygpO1xuICBjb25zdCBtZW51RWxlID0gbWVudShzdG9yZSk7XG4gIGNvbnN0IGJvdHRvbUVsZSA9IGJvdHRvbSgpO1xuICBjb25zdCBhcHBFbGUgPSBhZGRJZChkaXYobW9kYWxFbGUsIG5hdmJhckVsZSwgaGVyb0VsZSwgbWVudUVsZSwgYm90dG9tRWxlKSwgJ2FwcC1jb250YWluZXInKTtcblxuICByZXR1cm4gYXBwRWxlO1xufVxuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGRpdiwgZm9vdGVyLCB0ZXh0LCBwIH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBib3R0b20oKSB7XG4gIGNvbnN0IG5hbWUgPSBwKHRleHQoJ0F1bGlhIERpa2FhIDIwMjInKSAgKTtcbiAgY29uc3QgY29udGVudCA9IGFkZENsYXNzKGRpdihuYW1lKSwgJ2NvbnRlbnQnLCAnaXMtY2VudGVyZWQnKTtcblxuICBjb25zdCBjb250YWluZXIgPSBhZGRDbGFzcyhkaXYoY29udGVudCksICdjb250YWluZXInKTtcblxuICByZXR1cm4gYWRkQ2xhc3MoZm9vdGVyKGNvbnRhaW5lciksICdmb290ZXInKTtcbn1cbiIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYsIGltZywgcCwgc2VjdGlvbiwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVybygpIHtcbiAgY29uc3QgbG9nbyA9IGFkZENsYXNzKGltZygnc3RhdGljL2xvZ28tZnVkaS5wbmcnKSwgJ2xvZ28nKTtcbiAgY29uc3QgdGhlID0gYWRkQ2xhc3MocCh0ZXh0KCdUaGUnKSksICdoZXJvLXRleHQtbGlnaHQnKTtcbiAgY29uc3QgZmFuY3lGb29kID0gYWRkQ2xhc3MocCh0ZXh0KCdGYW5jeSBGb29kJykpLCAnaGVyby10ZXh0LWJvbGQnKTtcbiAgY29uc3QgZWF0ZXJpZXMgPSBhZGRDbGFzcyhwKHRleHQoJ1JlY2lwZXMnKSksICdoZXJvLXRleHQtbGlnaHQnKTtcblxuICBjb25zdCBjb250YWluZXIgPSBhZGRDbGFzcyhkaXYobG9nbywgdGhlLCBmYW5jeUZvb2QsIGVhdGVyaWVzKSwgJ2NvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGhlcm9Db250ZW50ID0gYWRkQ2xhc3MoZGl2KGNvbnRhaW5lciksICdoZXJvLWNvbnRlbnQnKTtcblxuICByZXR1cm4gYWRkQ2xhc3Moc2VjdGlvbihoZXJvQ29udGVudCksICdoZXJvJywgJ3NwbGFzaCcpO1xufVxuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGRpdiB9IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCB7IGZpbHRlckJ5VHlwZSB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IG1lbnVMaXN0IGZyb20gJy4vbWVudUxpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsZWZ0TWVudShpdGVtcyA9IFtdKSB7XG4gIGNvbnN0IGFwcGV0aXplcnMgPSBtZW51TGlzdCgnQXBwZXRpemVycycsIGZpbHRlckJ5VHlwZShpdGVtcywgJ2FwcGV0aXplcicpKTtcbiAgY29uc3QgYnVyZ2VycyA9IG1lbnVMaXN0KCdCdXJnZXJzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnYnVyZ2VyJykpO1xuXG4gIHJldHVybiBhZGRDbGFzcyhkaXYoYXBwZXRpemVycywgYnVyZ2VycyksICdjb2x1bW4nLCAnaXMtNicpO1xufVxuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGFkZElkLCBkaXYsIHNlY3Rpb24gfSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQgeyAkIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgbGVmdE1lbnUgZnJvbSAnLi9sZWZ0TWVudSc7XG5pbXBvcnQgcmlnaHRNZW51IGZyb20gJy4vcmlnaHRNZW51JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudShzdG9yZSkge1xuICBjb25zdCBtZW51RWxlID0gYWRkSWQoYWRkQ2xhc3MoZGl2KCksICdjb250YWluZXInKSwgJ21lbnUnKTtcblxuICBzdG9yZS5vbignU0VUX0lURU1TJywgKHsgaXRlbXMgfSkgPT4ge1xuICAgIGNvbnN0IGxlZnRTaWRlID0gbGVmdE1lbnUoaXRlbXMpO1xuICAgIGNvbnN0IHJpZ2h0U2lkZSA9IHJpZ2h0TWVudShpdGVtcyk7XG4gICAgY29uc3QgY29sdW1ucyA9IGFkZENsYXNzKHNlY3Rpb24obGVmdFNpZGUsIHJpZ2h0U2lkZSksICdjb2x1bW5zJyk7XG4gICAgJCgnI21lbnUnKS5jaGlsZHJlbihjb2x1bW5zKTtcbiAgfSk7XG5cbiAgc3RvcmUub24oJ0lURU1fQURERUQnLCAoeyBjYXJ0IH0pID0+IHtcbiAgICBjb25zdCBjYXJ0QXJyYXkgPSBbLi4uY2FydF07XG4gICAgY29uc3QgYXJ0aWNsZXMgPSBjYXJ0QXJyYXkubWFwKGlkID0+IGBhcnRpY2xlW2RhdGEta2V5PScke2lkfSddYCk7XG4gICAgY29uc3QgYnV0dG9ucyA9IGNhcnRBcnJheS5tYXAoaWQgPT4gYGFydGljbGVbZGF0YS1rZXk9JyR7aWR9J10gYnV0dG9uLmFkZC10by1jYXJ0YCk7XG5cbiAgICAkKGFydGljbGVzLmpvaW4oJywgJykpLmFkZENsYXNzKCdpbi1jYXJ0Jyk7XG4gICAgJChidXR0b25zLmpvaW4oJywgJykpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gIH0pO1xuXG4gIHN0b3JlLm9uKCdJVEVNX1JFTU9WRUQnLCAoeyBjYXJ0IH0pID0+IHtcbiAgICBjb25zdCBvblBhZ2VLZXlzID0gJCgnYXJ0aWNsZS5pbi1jYXJ0JykubWFwKGVsZSA9PiBwYXJzZUludChlbGUuZGF0YXNldC5rZXksIDEwKSk7XG4gICAgY29uc3QgaW5DYXJ0S2V5cyA9IFsuLi5jYXJ0XTtcbiAgICBjb25zdCBrZXlzVG9SZW1vdmUgPSBvblBhZ2VLZXlzLmZpbHRlcihrZXkgPT4gIWluQ2FydEtleXMuaW5jbHVkZXMoa2V5KSk7XG5cbiAgICBrZXlzVG9SZW1vdmUuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgJChgYXJ0aWNsZVtkYXRhLWtleT0nJHtrZXl9J11gKS5yZW1vdmVDbGFzcygnaW4tY2FydCcpO1xuICAgICAgJChgYXJ0aWNsZVtkYXRhLWtleT0nJHtrZXl9J10gYnV0dG9uLmFkZC10by1jYXJ0YCkuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBtZW51RWxlO1xufVxuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGFydGljbGUsIGJ1dHRvbiwgZGl2LCBoMywgcCwgc3BhbiwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCB7IGZvcm1hdFByaWNlIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVJdGVtKGl0ZW1EYXRhID0ge30pIHtcbiAgY29uc3QgbmFtZSA9IGFkZENsYXNzKGgzKHRleHQoaXRlbURhdGEubmFtZSkpLCAnbmFtZScpO1xuICBjb25zdCBwcmljZSA9IGFkZENsYXNzKHNwYW4odGV4dChgJCR7Zm9ybWF0UHJpY2UoaXRlbURhdGEucHJpY2UpfWApKSwgJ3ByaWNlJywgJ2lzLXB1bGxlZC1yaWdodCcpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGFkZENsYXNzKHAodGV4dChpdGVtRGF0YS5kZXNjcmlwdGlvbikpLCAnZGVzYycpO1xuICBjb25zdCBhZGRUb0NhcnQgPSBhZGRDbGFzcyhidXR0b24odGV4dCgnQWRkIHRvIENhcnQnKSksICdidXR0b24nLCAnaXMtcHVsbGVkLXJpZ2h0JywgJ2FkZC10by1jYXJ0Jyk7XG5cbiAgY29uc3QgbWVkaWFDb250ZW50ID0gYWRkQ2xhc3MoZGl2KG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbiwgYWRkVG9DYXJ0KSwgJ21lZGlhLWNvbnRlbnQnKTtcblxuICBjb25zdCBpdGVtID0gYWRkQ2xhc3MoYXJ0aWNsZShtZWRpYUNvbnRlbnQpLCAnbWVkaWEnLCAnbWVudV9pdGVtJyk7XG4gIGl0ZW0uZGF0YXNldC5rZXkgPSBpdGVtRGF0YS5pZDtcblxuICByZXR1cm4gaXRlbTtcbn1cbiIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYsIGgxLCB0ZXh0IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuaW1wb3J0IG1lbnVJdGVtIGZyb20gJy4vbWVudUl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51TGlzdChoZWFkbGluZSwgaXRlbXMgPSBbXSkge1xuICBjb25zdCBtZW51SXRlbXMgPSBpdGVtcy5tYXAobWVudUl0ZW0pO1xuXG4gIGNvbnN0IHRpdGxlID0gYWRkQ2xhc3MoaDEodGV4dChoZWFkbGluZSkpLCAndGl0bGUnKTtcblxuICByZXR1cm4gYWRkQ2xhc3MoZGl2KHRpdGxlLCAuLi5tZW51SXRlbXMpLCAnY29sbGVjdGlvbicpO1xufVxuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGFkZElkLCBidXR0b24sIGRpdiwgaDEsIGksIHAsIHNlY3Rpb24sIHRleHQsIHVsIH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuaW1wb3J0IHsgJCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IG1vZGFsSXRlbSBmcm9tICcuL21vZGFsSXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsKHN0b3JlKSB7XG4gIGNvbnN0IGNsb3NlID0gYWRkSWQoYWRkQ2xhc3MoaSgpLCAnZmEnLCAnZmEtdGltZXMnLCAnY2xvc2UnKSwgJ2Nsb3NlJyk7XG4gIGNvbnN0IHRpdGxlID0gYWRkQ2xhc3MoaDEodGV4dCgnQ2FydCcpKSwgJ3RpdGxlJyk7XG5cbiAgY29uc3QgY2FydENvbnRhaW5lciA9IGFkZElkKGRpdihwKHRleHQoJ1lvdXIgY2FydCBpcyBlbXB0eS4nKSkpLCAnY2FydC1pdGVtcycpO1xuXG4gIGNvbnN0IGNoZWNrb3V0QnV0dG9uID0gYWRkQ2xhc3MoYnV0dG9uKHRleHQoJ0NoZWNrb3V0JykpLCAnYnV0dG9uJywgJ2lzLWZ1bGx3aWR0aCcpO1xuXG4gIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gYWRkQ2xhc3MoZGl2KGNsb3NlLCB0aXRsZSwgY2FydENvbnRhaW5lciwgY2hlY2tvdXRCdXR0b24pLCAnbW9kYWwtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgbW9kYWxFbGUgPSBhZGRJZChhZGRDbGFzcyhzZWN0aW9uKG1vZGFsQ29udGFpbmVyKSwgJ21vZGFsJyksICdtb2RhbCcpO1xuXG4gIHN0b3JlLm9uKCdUT0dHTEVfU0hPV19DQVJUJywgKHsgY2FydFZpc2libGUgfSkgPT4ge1xuICAgIGNvbnN0IGVsZSA9ICQoJyNtb2RhbCcpO1xuICAgIGlmIChjYXJ0VmlzaWJsZSkge1xuICAgICAgZWxlLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgIH1cbiAgfSk7XG5cbiAgc3RvcmUub24oJ0lURU1fQURERUQnLCAoeyBpdGVtcywgY2FydCB9KSA9PiB7XG4gICAgY29uc3QgY2FydEFycmF5ID0gWy4uLmNhcnRdO1xuICAgIGNvbnN0IGNhcnRJdGVtcyA9IGNhcnRBcnJheS5tYXAoaXRlbUlkID0+IG1vZGFsSXRlbShpdGVtc1tpdGVtSWRdKSk7XG4gICAgY29uc3QgY2FydExpc3QgPSBhZGRDbGFzcyh1bCguLi5jYXJ0SXRlbXMpLCAnbWVudScpO1xuICAgICQoJyNjYXJ0LWl0ZW1zJykuY2hpbGRyZW4oY2FydExpc3QpO1xuICB9KTtcblxuICByZXR1cm4gbW9kYWxFbGU7XG59XG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgaSwgbGksIHNwYW4sIHRleHQgfSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbEl0ZW0oaXRlbURhdGEpIHtcbiAgY29uc3QgbmFtZSA9IGFkZENsYXNzKHNwYW4odGV4dChpdGVtRGF0YS5uYW1lKSksICduYW1lJyk7XG4gIGNvbnN0IHByaWNlID0gYWRkQ2xhc3Moc3Bhbih0ZXh0KGZvcm1hdFByaWNlKGl0ZW1EYXRhLnByaWNlKSkpLCAncHJpY2UnLCAnaXMtcHVsbGVkLXJpZ2h0Jyk7XG4gIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGFkZENsYXNzKGkoKSwgJ2ZhJywgJ2ZhLXRpbWVzJywgJ3JlbW92ZScpO1xuXG4gIGNvbnN0IGl0ZW0gPSBhZGRDbGFzcyhsaShuYW1lLCBwcmljZSwgcmVtb3ZlQnV0dG9uKSwgJ21lbnUtaXRlbScpO1xuICBpdGVtLmRhdGFzZXQua2V5ID0gaXRlbURhdGEuaWQ7XG5cbiAgcmV0dXJuIGl0ZW07XG59XG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgYWRkSWQsIGRpdiwgaSwgbmF2LCBzcGFuIH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZiYXIoKSB7XG4gIGNvbnN0IG5hdkxlZnQgPSBhZGRDbGFzcyhkaXYoKSwgJ25hdmJhci1sZWZ0Jyk7XG5cbiAgY29uc3QgY2FydEljb24gPSBhZGRJZChhZGRDbGFzcyhpKCksICdmYScsICdmYS1zaG9wcGluZy1jYXJ0JyksICdjYXJ0LWljb24nKTtcbiAgY29uc3QgY2FydEl0ZW1zID0gYWRkQ2xhc3Moc3BhbigpLCAnY2FydC1pdGVtcycpO1xuICBjb25zdCBuYXZiYXJJdGVtID0gYWRkQ2xhc3MoZGl2KGNhcnRJY29uLCBjYXJ0SXRlbXMpLCAnbmF2YmFyLWl0ZW0nKTtcbiAgY29uc3QgbmF2UmlnaHQgPSBhZGRDbGFzcyhkaXYobmF2YmFySXRlbSksICduYXZiYXItcmlnaHQnLCAnY2FydCcpO1xuXG4gIHJldHVybiBhZGRDbGFzcyhuYXYobmF2TGVmdCwgbmF2UmlnaHQpLCAnbmF2YmFyJyk7XG59XG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuaW1wb3J0IHsgZmlsdGVyQnlUeXBlIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgbWVudUxpc3QgZnJvbSAnLi9tZW51TGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJpZ2h0TWVudShpdGVtcyA9IFtdKSB7XG4gIGNvbnN0IGFwcGV0aXplcnMgPSBtZW51TGlzdCgnU291cHMgYW5kIFNhbGFkcycsIGZpbHRlckJ5VHlwZShpdGVtcywgJ3NvdXBfc2FsYWQnKSk7XG4gIGNvbnN0IGRlc3NlcnRzID0gbWVudUxpc3QoJ0Rlc3NlcnRzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnZGVzc2VydCcpKTtcblxuICByZXR1cm4gYWRkQ2xhc3MoZGl2KGFwcGV0aXplcnMsIGRlc3NlcnRzKSwgJ2NvbHVtbicsICdpcy02Jyk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZm9ybWF0UHJpY2UocHJpY2UpIHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQocHJpY2UpLnRvRml4ZWQoMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJCeVR5cGUobWFwLCB0eXBlKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhtYXApXG4gICAgLmZpbHRlcihrZXkgPT4gbWFwW2tleV0udHlwZSA9PT0gdHlwZSlcbiAgICAubWFwKGtleSA9PiBtYXBba2V5XSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAkKHF1ZXJ5KSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeSkpO1xuXG4gIGZ1bmN0aW9uIG9uKGV2ZW50LCBjYikge1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlID0+IHtcbiAgICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGlsZHJlbih0b0FkZCkge1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlID0+IHtcbiAgICAgIHdoaWxlIChlbGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBlbGUucmVtb3ZlQ2hpbGQoZWxlLmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuXG4gICAgICBlbGUuYXBwZW5kQ2hpbGQodG9BZGQpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQ2xhc3Moa2xhc3MpIHtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICBlbGUuY2xhc3NMaXN0LmFkZChrbGFzcyk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVDbGFzcyhrbGFzcykge1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlID0+IHtcbiAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGtsYXNzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0dHIoYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlID0+IHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWxlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hcChjYikge1xuICAgIHJldHVybiBlbGVtZW50cy5tYXAoY2IpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBvbixcbiAgICBjaGlsZHJlbixcbiAgICBhZGRDbGFzcyxcbiAgICByZW1vdmVDbGFzcyxcbiAgICBhdHRyLFxuICAgIG1hcCxcbiAgfTtcbn1cbiIsImltcG9ydCBhcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcCc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHNldHVwTGlzdGVuZXJzIGZyb20gJy4vc2V0dXBfbGlzdGVuZXJzJztcblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgZXZlbnQsIGRhdGEpIHtcbiAgc3dpdGNoIChldmVudCkge1xuICAgIGNhc2UgJ1NFVF9JVEVNUyc6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXRlbXM6IGRhdGEuaXRlbXMucmVkdWNlKCh0b3RhbCwgaXRlbSkgPT5cbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCB0b3RhbCwgeyBbaXRlbS5pZF06IGl0ZW0gfSlcbiAgICAgICAgICAsIHt9KSxcbiAgICAgIH0pO1xuICAgIGNhc2UgJ0lURU1fQURERUQnOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGNhcnQ6IChuZXcgU2V0KHN0YXRlLmNhcnQpKS5hZGQoZGF0YS5pdGVtKSxcbiAgICAgIH0pO1xuICAgIGNhc2UgJ0lURU1fUkVNT1ZFRCc6XG4gICAgICBjb25zdCBuZXdDYXJ0ID0gKG5ldyBTZXQoc3RhdGUuY2FydCkpO1xuICAgICAgbmV3Q2FydC5kZWxldGUoZGF0YS5pdGVtKTtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBjYXJ0OiBuZXdDYXJ0LFxuICAgICAgfSk7XG4gICAgY2FzZSAnVE9HR0xFX1NIT1dfQ0FSVCc6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgY2FydFZpc2libGU6ICFzdGF0ZS5jYXJ0VmlzaWJsZSxcbiAgICAgIH0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyKTtcblxuZmV0Y2goJ2Zvb2QuanNvbicpXG4gIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAudGhlbihyZXNCb2R5ID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGJvZHkuaW5zZXJ0QmVmb3JlKGFwcChzdG9yZSksIGJvZHkuY2hpbGROb2Rlc1swXSk7XG4gICAgc3RvcmUudHJpZ2dlcignU0VUX0lURU1TJywgeyBpdGVtczogcmVzQm9keSB9KTtcbiAgICBzZXR1cExpc3RlbmVycyhzdG9yZSk7XG4gIH0pO1xuIiwiaW1wb3J0IHsgJCB9IGZyb20gJy4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdG9yZSkge1xuICAkKCcjY2FydC1pY29uLCAjY2xvc2UnKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgc3RvcmUudHJpZ2dlcignVE9HR0xFX1NIT1dfQ0FSVCcpO1xuICB9KTtcblxuICBmdW5jdGlvbiBnZXRQYXJlbnRXaXRoS2V5KGVsZW1lbnQpIHtcbiAgICBsZXQgcGFyZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgd2hpbGUgKHBhcmVudCAmJiAhcGFyZW50LmRhdGFzZXQua2V5KSB7XG4gICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50O1xuICB9XG5cbiAgJCgnLmFkZC10by1jYXJ0Jykub24oJ2NsaWNrJywgZSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gZ2V0UGFyZW50V2l0aEtleShlLmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgY29uc3Qga2V5ID0gcGFyc2VJbnQocGFyZW50LmRhdGFzZXQua2V5LCAxMCk7XG4gICAgc3RvcmUudHJpZ2dlcignSVRFTV9BRERFRCcsIHsgaXRlbToga2V5IH0pO1xuICB9KTtcblxuICAkKCdib2R5Jykub24oJ2NsaWNrJywgZSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmVtb3ZlJykpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICAgIGNvbnN0IHBhcmVudCA9IGdldFBhcmVudFdpdGhLZXkoZWxlbWVudCk7XG4gICAgICBjb25zdCBrZXkgPSBwYXJzZUludChwYXJlbnQuZGF0YXNldC5rZXksIDEwKTtcblxuICAgICAgcGFyZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQocGFyZW50KTtcbiAgICAgIHN0b3JlLnRyaWdnZXIoJ0lURU1fUkVNT1ZFRCcsIHsgaXRlbToga2V5IH0pO1xuICAgIH1cbiAgfSk7XG59XG4iLCJjb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gIGl0ZW1zOiB7fSxcbiAgY2FydDogKG5ldyBTZXQoKSksXG4gIGNhcnRWaXNpYmxlOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdG9yZShyZWR1Y2VyKSB7XG4gIGNvbnN0IGxpc3RlbmVycyA9IHt9O1xuICBsZXQgc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0U3RhdGUpO1xuXG4gIGZ1bmN0aW9uIG9uKGV2ZW50LCBjYikge1xuICAgIGlmICghbGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgbGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xuICAgIH1cblxuICAgIGxpc3RlbmVyc1tldmVudF0ucHVzaChjYik7XG4gIH1cblxuICBmdW5jdGlvbiB0cmlnZ2VyKGV2ZW50LCBkYXRhID0ge30pIHtcbiAgICBzdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGV2ZW50LCBkYXRhKTtcblxuICAgIGlmIChsaXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICBsaXN0ZW5lcnNbZXZlbnRdLmZvckVhY2goY2IgPT4ge1xuICAgICAgICBjYihzdGF0ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9uLFxuICAgIHRyaWdnZXIsXG4gIH07XG59XG4iXX0=
