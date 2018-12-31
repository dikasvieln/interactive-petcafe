(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
  var name = (0, _builders.p)((0, _builders.text)('Alex Sears'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYnVpbGRlcnMuanMiLCJzcmMvanMvY29tcG9uZW50cy9hcHAuanMiLCJzcmMvanMvY29tcG9uZW50cy9ib3R0b20uanMiLCJzcmMvanMvY29tcG9uZW50cy9oZXJvLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbGVmdE1lbnUuanMiLCJzcmMvanMvY29tcG9uZW50cy9tZW51LmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbWVudUl0ZW0uanMiLCJzcmMvanMvY29tcG9uZW50cy9tZW51TGlzdC5qcyIsInNyYy9qcy9jb21wb25lbnRzL21vZGFsLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbW9kYWxJdGVtLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvcmlnaHRNZW51LmpzIiwic3JjL2pzL2hlbHBlcnMuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvc2V0dXBfbGlzdGVuZXJzLmpzIiwic3JjL2pzL3N0YXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7UUNBZ0IsSSxHQUFBLEk7UUFJQSxhLEdBQUEsYTtRQU1BLEcsR0FBQSxHO1FBSUEsTyxHQUFBLE87UUFJQSxFLEdBQUEsRTtRQUlBLEUsR0FBQSxFO1FBSUEsRyxHQUFBLEc7UUFJQSxFLEdBQUEsRTtRQUlBLEUsR0FBQSxFO1FBSUEsQyxHQUFBLEM7UUFJQSxJLEdBQUEsSTtRQUlBLE8sR0FBQSxPO1FBSUEsTSxHQUFBLE07UUFJQSxDLEdBQUEsQztRQUlBLEcsR0FBQSxHO1FBTUEsTSxHQUFBLE07UUFJQSxLLEdBQUEsSztRQUtBLFEsR0FBQSxRO0FBekVULFNBQVMsSUFBVCxDQUFjLEtBQWQsRUFBcUI7QUFDMUIsU0FBTyxTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBUDtBQUNEOztBQUVNLFNBQVMsYUFBVCxDQUF1QixJQUF2QixFQUEwQztB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aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBmdW5jdGlvbiB0ZXh0KHdvcmRzKSB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh3b3Jkcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIC4uLmNoaWxkcmVuKSB7XG4gIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXYoLi4uY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFydGljbGUoLi4uY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoMSguLi5jaGlsZHJlbikge1xuICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaDEnLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoMyguLi5jaGlsZHJlbikge1xuICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaDMnLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXYoLi4uY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ25hdicsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVsKC4uLmNoaWxkcmVuKSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KCd1bCcsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpKC4uLmNoaWxkcmVuKSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KCdsaScsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGkoLi4uY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2knLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGFuKC4uLmNoaWxkcmVuKSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KCdzcGFuJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdGlvbiguLi5jaGlsZHJlbikge1xuICByZXR1cm4gY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvb3RlciguLi5jaGlsZHJlbikge1xuICByZXR1cm4gY3JlYXRlRWxlbWVudCgnZm9vdGVyJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcCguLi5jaGlsZHJlbikge1xuICByZXR1cm4gY3JlYXRlRWxlbWVudCgncCcsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGltZyhzb3VyY2UpIHtcbiAgY29uc3QgaW1hZ2UgPSBjcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1hZ2Uuc3JjID0gc291cmNlO1xuICByZXR1cm4gaW1hZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidXR0b24oLi4uY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZElkKGVsZW1lbnQsIGlkKSB7XG4gIGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3RWxlbWVudCwgeyBpZCB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIC4uLmtsYXNzZXMpIHtcbiAgY29uc3QgbmV3RWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICBrbGFzc2VzLmZvckVhY2goa2xhc3MgPT4gbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGtsYXNzKSk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuIiwiaW1wb3J0IHsgZGl2LCBhZGRJZCB9IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCBtb2RhbCBmcm9tICcuL21vZGFsJztcbmltcG9ydCBuYXZiYXIgZnJvbSAnLi9uYXZiYXInO1xuaW1wb3J0IGhlcm8gZnJvbSAnLi9oZXJvJztcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgYm90dG9tIGZyb20gJy4vYm90dG9tJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwKHN0b3JlKSB7XG4gIGNvbnN0IG1vZGFsRWxlID0gbW9kYWwoc3RvcmUpO1xuICBjb25zdCBuYXZiYXJFbGUgPSBuYXZiYXIoKTtcbiAgY29uc3QgaGVyb0VsZSA9IGhlcm8oKTtcbiAgY29uc3QgbWVudUVsZSA9IG1lbnUoc3RvcmUpO1xuICBjb25zdCBib3R0b21FbGUgPSBib3R0b20oKTtcbiAgY29uc3QgYXBwRWxlID0gYWRkSWQoZGl2KG1vZGFsRWxlLCBuYXZiYXJFbGUsIGhlcm9FbGUsIG1lbnVFbGUsIGJvdHRvbUVsZSksICdhcHAtY29udGFpbmVyJyk7XG5cbiAgcmV0dXJuIGFwcEVsZTtcbn1cbiIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYsIGZvb3RlciwgdGV4dCwgcCB9IGZyb20gJy4uL2J1aWxkZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYm90dG9tKCkge1xuICBjb25zdCBuYW1lID0gcCh0ZXh0KCdBbGV4IFNlYXJzJykpO1xuICBjb25zdCBjb250ZW50ID0gYWRkQ2xhc3MoZGl2KG5hbWUpLCAnY29udGVudCcsICdpcy1jZW50ZXJlZCcpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGFkZENsYXNzKGRpdihjb250ZW50KSwgJ2NvbnRhaW5lcicpO1xuXG4gIHJldHVybiBhZGRDbGFzcyhmb290ZXIoY29udGFpbmVyKSwgJ2Zvb3RlcicpO1xufVxuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGRpdiwgaW1nLCBwLCBzZWN0aW9uLCB0ZXh0IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZXJvKCkge1xuICBjb25zdCBsb2dvID0gYWRkQ2xhc3MoaW1nKCdzdGF0aWMvbG9nby1mdWRpLnBuZycpLCAnbG9nbycpO1xuICBjb25zdCB0aGUgPSBhZGRDbGFzcyhwKHRleHQoJ1RoZScpKSwgJ2hlcm8tdGV4dC1saWdodCcpO1xuICBjb25zdCBmYW5jeUZvb2QgPSBhZGRDbGFzcyhwKHRleHQoJ0ZhbmN5IEZvb2QnKSksICdoZXJvLXRleHQtYm9sZCcpO1xuICBjb25zdCBlYXRlcmllcyA9IGFkZENsYXNzKHAodGV4dCgnUmVjaXBlcycpKSwgJ2hlcm8tdGV4dC1saWdodCcpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGFkZENsYXNzKGRpdihsb2dvLCB0aGUsIGZhbmN5Rm9vZCwgZWF0ZXJpZXMpLCAnY29udGFpbmVyJyk7XG5cbiAgY29uc3QgaGVyb0NvbnRlbnQgPSBhZGRDbGFzcyhkaXYoY29udGFpbmVyKSwgJ2hlcm8tY29udGVudCcpO1xuXG4gIHJldHVybiBhZGRDbGFzcyhzZWN0aW9uKGhlcm9Db250ZW50KSwgJ2hlcm8nLCAnc3BsYXNoJyk7XG59XG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuaW1wb3J0IHsgZmlsdGVyQnlUeXBlIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgbWVudUxpc3QgZnJvbSAnLi9tZW51TGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxlZnRNZW51KGl0ZW1zID0gW10pIHtcbiAgY29uc3QgYXBwZXRpemVycyA9IG1lbnVMaXN0KCdBcHBldGl6ZXJzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnYXBwZXRpemVyJykpO1xuICBjb25zdCBidXJnZXJzID0gbWVudUxpc3QoJ0J1cmdlcnMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdidXJnZXInKSk7XG5cbiAgcmV0dXJuIGFkZENsYXNzKGRpdihhcHBldGl6ZXJzLCBidXJnZXJzKSwgJ2NvbHVtbicsICdpcy02Jyk7XG59XG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgYWRkSWQsIGRpdiwgc2VjdGlvbiB9IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCB7ICQgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCBsZWZ0TWVudSBmcm9tICcuL2xlZnRNZW51JztcbmltcG9ydCByaWdodE1lbnUgZnJvbSAnLi9yaWdodE1lbnUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KHN0b3JlKSB7XG4gIGNvbnN0IG1lbnVFbGUgPSBhZGRJZChhZGRDbGFzcyhkaXYoKSwgJ2NvbnRhaW5lcicpLCAnbWVudScpO1xuXG4gIHN0b3JlLm9uKCdTRVRfSVRFTVMnLCAoeyBpdGVtcyB9KSA9PiB7XG4gICAgY29uc3QgbGVmdFNpZGUgPSBsZWZ0TWVudShpdGVtcyk7XG4gICAgY29uc3QgcmlnaHRTaWRlID0gcmlnaHRNZW51KGl0ZW1zKTtcbiAgICBjb25zdCBjb2x1bW5zID0gYWRkQ2xhc3Moc2VjdGlvbihsZWZ0U2lkZSwgcmlnaHRTaWRlKSwgJ2NvbHVtbnMnKTtcbiAgICAkKCcjbWVudScpLmNoaWxkcmVuKGNvbHVtbnMpO1xuICB9KTtcblxuICBzdG9yZS5vbignSVRFTV9BRERFRCcsICh7IGNhcnQgfSkgPT4ge1xuICAgIGNvbnN0IGNhcnRBcnJheSA9IFsuLi5jYXJ0XTtcbiAgICBjb25zdCBhcnRpY2xlcyA9IGNhcnRBcnJheS5tYXAoaWQgPT4gYGFydGljbGVbZGF0YS1rZXk9JyR7aWR9J11gKTtcbiAgICBjb25zdCBidXR0b25zID0gY2FydEFycmF5Lm1hcChpZCA9PiBgYXJ0aWNsZVtkYXRhLWtleT0nJHtpZH0nXSBidXR0b24uYWRkLXRvLWNhcnRgKTtcblxuICAgICQoYXJ0aWNsZXMuam9pbignLCAnKSkuYWRkQ2xhc3MoJ2luLWNhcnQnKTtcbiAgICAkKGJ1dHRvbnMuam9pbignLCAnKSkuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgfSk7XG5cbiAgc3RvcmUub24oJ0lURU1fUkVNT1ZFRCcsICh7IGNhcnQgfSkgPT4ge1xuICAgIGNvbnN0IG9uUGFnZUtleXMgPSAkKCdhcnRpY2xlLmluLWNhcnQnKS5tYXAoZWxlID0+IHBhcnNlSW50KGVsZS5kYXRhc2V0LmtleSwgMTApKTtcbiAgICBjb25zdCBpbkNhcnRLZXlzID0gWy4uLmNhcnRdO1xuICAgIGNvbnN0IGtleXNUb1JlbW92ZSA9IG9uUGFnZUtleXMuZmlsdGVyKGtleSA9PiAhaW5DYXJ0S2V5cy5pbmNsdWRlcyhrZXkpKTtcblxuICAgIGtleXNUb1JlbW92ZS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAkKGBhcnRpY2xlW2RhdGEta2V5PScke2tleX0nXWApLnJlbW92ZUNsYXNzKCdpbi1jYXJ0Jyk7XG4gICAgICAkKGBhcnRpY2xlW2RhdGEta2V5PScke2tleX0nXSBidXR0b24uYWRkLXRvLWNhcnRgKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1lbnVFbGU7XG59XG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgYXJ0aWNsZSwgYnV0dG9uLCBkaXYsIGgzLCBwLCBzcGFuLCB0ZXh0IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuaW1wb3J0IHsgZm9ybWF0UHJpY2UgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUl0ZW0oaXRlbURhdGEgPSB7fSkge1xuICBjb25zdCBuYW1lID0gYWRkQ2xhc3MoaDModGV4dChpdGVtRGF0YS5uYW1lKSksICduYW1lJyk7XG4gIGNvbnN0IHByaWNlID0gYWRkQ2xhc3Moc3Bhbih0ZXh0KGAkJHtmb3JtYXRQcmljZShpdGVtRGF0YS5wcmljZSl9YCkpLCAncHJpY2UnLCAnaXMtcHVsbGVkLXJpZ2h0Jyk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gYWRkQ2xhc3MocCh0ZXh0KGl0ZW1EYXRhLmRlc2NyaXB0aW9uKSksICdkZXNjJyk7XG4gIGNvbnN0IGFkZFRvQ2FydCA9IGFkZENsYXNzKGJ1dHRvbih0ZXh0KCdBZGQgdG8gQ2FydCcpKSwgJ2J1dHRvbicsICdpcy1wdWxsZWQtcmlnaHQnLCAnYWRkLXRvLWNhcnQnKTtcblxuICBjb25zdCBtZWRpYUNvbnRlbnQgPSBhZGRDbGFzcyhkaXYobmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBhZGRUb0NhcnQpLCAnbWVkaWEtY29udGVudCcpO1xuXG4gIGNvbnN0IGl0ZW0gPSBhZGRDbGFzcyhhcnRpY2xlKG1lZGlhQ29udGVudCksICdtZWRpYScsICdtZW51X2l0ZW0nKTtcbiAgaXRlbS5kYXRhc2V0LmtleSA9IGl0ZW1EYXRhLmlkO1xuXG4gIHJldHVybiBpdGVtO1xufVxuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGRpdiwgaDEsIHRleHQgfSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQgbWVudUl0ZW0gZnJvbSAnLi9tZW51SXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVMaXN0KGhlYWRsaW5lLCBpdGVtcyA9IFtdKSB7XG4gIGNvbnN0IG1lbnVJdGVtcyA9IGl0ZW1zLm1hcChtZW51SXRlbSk7XG5cbiAgY29uc3QgdGl0bGUgPSBhZGRDbGFzcyhoMSh0ZXh0KGhlYWRsaW5lKSksICd0aXRsZScpO1xuXG4gIHJldHVybiBhZGRDbGFzcyhkaXYodGl0bGUsIC4uLm1lbnVJdGVtcyksICdjb2xsZWN0aW9uJyk7XG59XG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgYWRkSWQsIGJ1dHRvbiwgZGl2LCBoMSwgaSwgcCwgc2VjdGlvbiwgdGV4dCwgdWwgfSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQgeyAkIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgbW9kYWxJdGVtIGZyb20gJy4vbW9kYWxJdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWwoc3RvcmUpIHtcbiAgY29uc3QgY2xvc2UgPSBhZGRJZChhZGRDbGFzcyhpKCksICdmYScsICdmYS10aW1lcycsICdjbG9zZScpLCAnY2xvc2UnKTtcbiAgY29uc3QgdGl0bGUgPSBhZGRDbGFzcyhoMSh0ZXh0KCdDYXJ0JykpLCAndGl0bGUnKTtcblxuICBjb25zdCBjYXJ0Q29udGFpbmVyID0gYWRkSWQoZGl2KHAodGV4dCgnWW91ciBjYXJ0IGlzIGVtcHR5LicpKSksICdjYXJ0LWl0ZW1zJyk7XG5cbiAgY29uc3QgY2hlY2tvdXRCdXR0b24gPSBhZGRDbGFzcyhidXR0b24odGV4dCgnQ2hlY2tvdXQnKSksICdidXR0b24nLCAnaXMtZnVsbHdpZHRoJyk7XG5cbiAgY29uc3QgbW9kYWxDb250YWluZXIgPSBhZGRDbGFzcyhkaXYoY2xvc2UsIHRpdGxlLCBjYXJ0Q29udGFpbmVyLCBjaGVja291dEJ1dHRvbiksICdtb2RhbC1jb250YWluZXInKTtcblxuICBjb25zdCBtb2RhbEVsZSA9IGFkZElkKGFkZENsYXNzKHNlY3Rpb24obW9kYWxDb250YWluZXIpLCAnbW9kYWwnKSwgJ21vZGFsJyk7XG5cbiAgc3RvcmUub24oJ1RPR0dMRV9TSE9XX0NBUlQnLCAoeyBjYXJ0VmlzaWJsZSB9KSA9PiB7XG4gICAgY29uc3QgZWxlID0gJCgnI21vZGFsJyk7XG4gICAgaWYgKGNhcnRWaXNpYmxlKSB7XG4gICAgICBlbGUuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgfVxuICB9KTtcblxuICBzdG9yZS5vbignSVRFTV9BRERFRCcsICh7IGl0ZW1zLCBjYXJ0IH0pID0+IHtcbiAgICBjb25zdCBjYXJ0QXJyYXkgPSBbLi4uY2FydF07XG4gICAgY29uc3QgY2FydEl0ZW1zID0gY2FydEFycmF5Lm1hcChpdGVtSWQgPT4gbW9kYWxJdGVtKGl0ZW1zW2l0ZW1JZF0pKTtcbiAgICBjb25zdCBjYXJ0TGlzdCA9IGFkZENsYXNzKHVsKC4uLmNhcnRJdGVtcyksICdtZW51Jyk7XG4gICAgJCgnI2NhcnQtaXRlbXMnKS5jaGlsZHJlbihjYXJ0TGlzdCk7XG4gIH0pO1xuXG4gIHJldHVybiBtb2RhbEVsZTtcbn1cbiIsImltcG9ydCB7IGFkZENsYXNzLCBpLCBsaSwgc3BhbiwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCB7IGZvcm1hdFByaWNlIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsSXRlbShpdGVtRGF0YSkge1xuICBjb25zdCBuYW1lID0gYWRkQ2xhc3Moc3Bhbih0ZXh0KGl0ZW1EYXRhLm5hbWUpKSwgJ25hbWUnKTtcbiAgY29uc3QgcHJpY2UgPSBhZGRDbGFzcyhzcGFuKHRleHQoZm9ybWF0UHJpY2UoaXRlbURhdGEucHJpY2UpKSksICdwcmljZScsICdpcy1wdWxsZWQtcmlnaHQnKTtcbiAgY29uc3QgcmVtb3ZlQnV0dG9uID0gYWRkQ2xhc3MoaSgpLCAnZmEnLCAnZmEtdGltZXMnLCAncmVtb3ZlJyk7XG5cbiAgY29uc3QgaXRlbSA9IGFkZENsYXNzKGxpKG5hbWUsIHByaWNlLCByZW1vdmVCdXR0b24pLCAnbWVudS1pdGVtJyk7XG4gIGl0ZW0uZGF0YXNldC5rZXkgPSBpdGVtRGF0YS5pZDtcblxuICByZXR1cm4gaXRlbTtcbn1cbiIsImltcG9ydCB7IGFkZENsYXNzLCBhZGRJZCwgZGl2LCBpLCBuYXYsIHNwYW4gfSBmcm9tICcuLi9idWlsZGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdmJhcigpIHtcbiAgY29uc3QgbmF2TGVmdCA9IGFkZENsYXNzKGRpdigpLCAnbmF2YmFyLWxlZnQnKTtcblxuICBjb25zdCBjYXJ0SWNvbiA9IGFkZElkKGFkZENsYXNzKGkoKSwgJ2ZhJywgJ2ZhLXNob3BwaW5nLWNhcnQnKSwgJ2NhcnQtaWNvbicpO1xuICBjb25zdCBjYXJ0SXRlbXMgPSBhZGRDbGFzcyhzcGFuKCksICdjYXJ0LWl0ZW1zJyk7XG4gIGNvbnN0IG5hdmJhckl0ZW0gPSBhZGRDbGFzcyhkaXYoY2FydEljb24sIGNhcnRJdGVtcyksICduYXZiYXItaXRlbScpO1xuICBjb25zdCBuYXZSaWdodCA9IGFkZENsYXNzKGRpdihuYXZiYXJJdGVtKSwgJ25hdmJhci1yaWdodCcsICdjYXJ0Jyk7XG5cbiAgcmV0dXJuIGFkZENsYXNzKG5hdihuYXZMZWZ0LCBuYXZSaWdodCksICduYXZiYXInKTtcbn1cbiIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYgfSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQgeyBmaWx0ZXJCeVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCBtZW51TGlzdCBmcm9tICcuL21lbnVMaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmlnaHRNZW51KGl0ZW1zID0gW10pIHtcbiAgY29uc3QgYXBwZXRpemVycyA9IG1lbnVMaXN0KCdTb3VwcyBhbmQgU2FsYWRzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnc291cF9zYWxhZCcpKTtcbiAgY29uc3QgZGVzc2VydHMgPSBtZW51TGlzdCgnRGVzc2VydHMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdkZXNzZXJ0JykpO1xuXG4gIHJldHVybiBhZGRDbGFzcyhkaXYoYXBwZXRpemVycywgZGVzc2VydHMpLCAnY29sdW1uJywgJ2lzLTYnKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQcmljZShwcmljZSkge1xuICByZXR1cm4gcGFyc2VGbG9hdChwcmljZSkudG9GaXhlZCgyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckJ5VHlwZShtYXAsIHR5cGUpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG1hcClcbiAgICAuZmlsdGVyKGtleSA9PiBtYXBba2V5XS50eXBlID09PSB0eXBlKVxuICAgIC5tYXAoa2V5ID0+IG1hcFtrZXldKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uICQocXVlcnkpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KSk7XG5cbiAgZnVuY3Rpb24gb24oZXZlbnQsIGNiKSB7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoaWxkcmVuKHRvQWRkKSB7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgd2hpbGUgKGVsZS5maXJzdENoaWxkKSB7XG4gICAgICAgIGVsZS5yZW1vdmVDaGlsZChlbGUuZmlyc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIGVsZS5hcHBlbmRDaGlsZCh0b0FkZCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRDbGFzcyhrbGFzcykge1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlID0+IHtcbiAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGtsYXNzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGtsYXNzKSB7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoa2xhc3MpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYXR0cihhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICBlbGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFwKGNiKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRzLm1hcChjYik7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9uLFxuICAgIGNoaWxkcmVuLFxuICAgIGFkZENsYXNzLFxuICAgIHJlbW92ZUNsYXNzLFxuICAgIGF0dHIsXG4gICAgbWFwLFxuICB9O1xufVxuIiwiaW1wb3J0IGFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgc2V0dXBMaXN0ZW5lcnMgZnJvbSAnLi9zZXR1cF9saXN0ZW5lcnMnO1xuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBldmVudCwgZGF0YSkge1xuICBzd2l0Y2ggKGV2ZW50KSB7XG4gICAgY2FzZSAnU0VUX0lURU1TJzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpdGVtczogZGF0YS5pdGVtcy5yZWR1Y2UoKHRvdGFsLCBpdGVtKSA9PlxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHRvdGFsLCB7IFtpdGVtLmlkXTogaXRlbSB9KVxuICAgICAgICAgICwge30pLFxuICAgICAgfSk7XG4gICAgY2FzZSAnSVRFTV9BRERFRCc6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgY2FydDogKG5ldyBTZXQoc3RhdGUuY2FydCkpLmFkZChkYXRhLml0ZW0pLFxuICAgICAgfSk7XG4gICAgY2FzZSAnSVRFTV9SRU1PVkVEJzpcbiAgICAgIGNvbnN0IG5ld0NhcnQgPSAobmV3IFNldChzdGF0ZS5jYXJ0KSk7XG4gICAgICBuZXdDYXJ0LmRlbGV0ZShkYXRhLml0ZW0pO1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGNhcnQ6IG5ld0NhcnQsXG4gICAgICB9KTtcbiAgICBjYXNlICdUT0dHTEVfU0hPV19DQVJUJzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBjYXJ0VmlzaWJsZTogIXN0YXRlLmNhcnRWaXNpYmxlLFxuICAgICAgfSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpO1xuXG5mZXRjaCgnZm9vZC5qc29uJylcbiAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gIC50aGVuKHJlc0JvZHkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgYm9keS5pbnNlcnRCZWZvcmUoYXBwKHN0b3JlKSwgYm9keS5jaGlsZE5vZGVzWzBdKTtcbiAgICBzdG9yZS50cmlnZ2VyKCdTRVRfSVRFTVMnLCB7IGl0ZW1zOiByZXNCb2R5IH0pO1xuICAgIHNldHVwTGlzdGVuZXJzKHN0b3JlKTtcbiAgfSk7XG4iLCJpbXBvcnQgeyAkIH0gZnJvbSAnLi9oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0b3JlKSB7XG4gICQoJyNjYXJ0LWljb24sICNjbG9zZScpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICBzdG9yZS50cmlnZ2VyKCdUT0dHTEVfU0hPV19DQVJUJyk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGdldFBhcmVudFdpdGhLZXkoZWxlbWVudCkge1xuICAgIGxldCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICB3aGlsZSAocGFyZW50ICYmICFwYXJlbnQuZGF0YXNldC5rZXkpIHtcbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnQ7XG4gIH1cblxuICAkKCcuYWRkLXRvLWNhcnQnKS5vbignY2xpY2snLCBlID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSBnZXRQYXJlbnRXaXRoS2V5KGUuY3VycmVudFRhcmdldCk7XG5cbiAgICBjb25zdCBrZXkgPSBwYXJzZUludChwYXJlbnQuZGF0YXNldC5rZXksIDEwKTtcbiAgICBzdG9yZS50cmlnZ2VyKCdJVEVNX0FEREVEJywgeyBpdGVtOiBrZXkgfSk7XG4gIH0pO1xuXG4gICQoJ2JvZHknKS5vbignY2xpY2snLCBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZW1vdmUnKSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0O1xuICAgICAgY29uc3QgcGFyZW50ID0gZ2V0UGFyZW50V2l0aEtleShlbGVtZW50KTtcbiAgICAgIGNvbnN0IGtleSA9IHBhcnNlSW50KHBhcmVudC5kYXRhc2V0LmtleSwgMTApO1xuXG4gICAgICBwYXJlbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChwYXJlbnQpO1xuICAgICAgc3RvcmUudHJpZ2dlcignSVRFTV9SRU1PVkVEJywgeyBpdGVtOiBrZXkgfSk7XG4gICAgfVxuICB9KTtcbn1cbiIsImNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcbiAgaXRlbXM6IHt9LFxuICBjYXJ0OiAobmV3IFNldCgpKSxcbiAgY2FydFZpc2libGU6IGZhbHNlLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIpIHtcbiAgY29uc3QgbGlzdGVuZXJzID0ge307XG4gIGxldCBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRTdGF0ZSk7XG5cbiAgZnVuY3Rpb24gb24oZXZlbnQsIGNiKSB7XG4gICAgaWYgKCFsaXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICBsaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzW2V2ZW50XS5wdXNoKGNiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyaWdnZXIoZXZlbnQsIGRhdGEgPSB7fSkge1xuICAgIHN0YXRlID0gcmVkdWNlcihzdGF0ZSwgZXZlbnQsIGRhdGEpO1xuXG4gICAgaWYgKGxpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgIGxpc3RlbmVyc1tldmVudF0uZm9yRWFjaChjYiA9PiB7XG4gICAgICAgIGNiKHN0YXRlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb24sXG4gICAgdHJpZ2dlcixcbiAgfTtcbn1cbiJdfQ==
