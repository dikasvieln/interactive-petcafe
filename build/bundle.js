(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.text = text;
exports.createElement = createElement;
exports.div = div;
exports.i = i;
exports.nav = nav;
exports.span = span;
exports.addClass = addClass;
exports.addId = addId;
// method for a text
function text(words) {
    return document.createTextNode(words);
}

// method for creating an element 
function createElement(type) {
    // creating an element type
    var newElement = document.createElement(type);
    // inserting a new element

    for (var _len = arguments.length, children = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        children[_key - 1] = arguments[_key];
    }

    children.forEach(function (child) {
        newElement.append(child);
    });
}

// method for div 
function div() {
    for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        children[_key2] = arguments[_key2];
    }

    return createElement.apply(undefined, ['child'].concat(children));
}

// method for i
function i() {
    for (var _len3 = arguments.length, children = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        children[_key3] = arguments[_key3];
    }

    return createElement.apply(undefined, ['i'].concat(children));
}

// method for nav
function nav() {
    for (var _len4 = arguments.length, children = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        children[_key4] = arguments[_key4];
    }

    return createElement.apply(undefined, ['nav'].concat(children));
}

// method for span
function span() {
    for (var _len5 = arguments.length, children = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        children[_key5] = arguments[_key5];
    }

    return createElement.apply(undefined, ['span'].concat(children));
}

// method addClass
function addClass(element) {
    var newElement = element.cloneNode(true);

    for (var _len6 = arguments.length, klasses = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        klasses[_key6 - 1] = arguments[_key6];
    }

    klasses.forEach(function (klass) {
        newElement.classList.add(klass);
    });
    return newElement;
}

// method for addId
function addId(element, id) {
    var newElement = element.cloneNode(true);
    return Object.assign(newElement, { id: id });
}

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = app;

var _builders = require('../builders');

var _navbar = require('./navbar');

var _navbar2 = _interopRequireDefault(_navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function app() {
    var appElem = (0, _builders.addId)((0, _builders.div)((0, _builders.text)('Halo dunia')), 'app-container');
    var navbar = navbar();

    return appElem;
}

},{"../builders":1,"./navbar":3}],3:[function(require,module,exports){
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
    var navbarItem = (0, _builders.addClass)((0, _builders.div)(cartIcon, cartItems), 'navbar-items');
    var navRight = (0, _builders.addClass)((0, _builders.div)(navbarItem), 'navbar-right', 'cart');

    return (0, _builders.addClass)((0, _builders.nav)(navLeft, navRight), 'navbar');
}

},{"../builders":1}],4:[function(require,module,exports){
"use strict";

var _app = require("./components/app");

var body = document.querySelector('body');
body.insertBefore((0, _app.app)(), body.childNodes[0]);

},{"./components/app":2}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYnVpbGRlcnMuanMiLCJzcmMvanMvY29tcG9uZW50cy9hcHAuanMiLCJzcmMvanMvY29tcG9uZW50cy9uYXZiYXIuanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztRQ0NnQixJLEdBQUEsSTtRQUtBLGEsR0FBQSxhO1FBVUEsRyxHQUFBLEc7UUFLQSxDLEdBQUEsQztRQUtBLEcsR0FBQSxHO1FBS0EsSSxHQUFBLEk7UUFLQSxRLEdBQUEsUTtRQU9BLEssR0FBQSxLO0FBM0NoQjtBQUNPLFNBQVMsSUFBVCxDQUFjLEtBQWQsRUFBcUI7QUFDeEIsV0FBTyxTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBUDtBQUNIOztBQUVEO0FBQ08sU0FBUyxhQUFULENBQXVCLElBQXZCLEVBQTBDO0FBQzdDO0FBQ0EsUUFBTSxhQUFhLFNBQVMsYUFBVCxDQUF1QixJQUF2QixDQUFuQjtBQUNBOztBQUg2QyxzQ0FBVixRQUFVO0FBQVYsZ0JBQVU7QUFBQTs7QUFJN0MsYUFBUyxPQUFULENBQWlCLGlCQUFTO0FBQ3RCLG1CQUFXLE1BQVgsQ0FBa0IsS0FBbEI7QUFDSCxLQUZEO0FBR0g7O0FBRUQ7QUFDTyxTQUFTLEdBQVQsR0FBMEI7QUFBQSx1Q0FBVixRQUFVO0FBQVYsZ0JBQVU7QUFBQTs7QUFDN0IsV0FBTyxnQ0FBYyxPQUFkLFNBQTBCLFFBQTFCLEVBQVA7QUFDSDs7QUFFRDtBQUNPLFNBQVMsQ0FBVCxHQUF3QjtBQUFBLHVDQUFWLFFBQVU7QUFBVixnQkFBVTtBQUFBOztBQUMzQixXQUFPLGdDQUFjLEdBQWQsU0FBc0IsUUFBdEIsRUFBUDtBQUNIOztBQUVEO0FBQ08sU0FBUyxHQUFULEdBQTBCO0FBQUEsdUNBQVYsUUFBVTtBQUFWLGdCQUFVO0FBQUE7O0FBQzdCLFdBQU8sZ0NBQWMsS0FBZCxTQUF3QixRQUF4QixFQUFQO0FBQ0g7O0FBRUQ7QUFDTyxTQUFTLElBQVQsR0FBMkI7QUFBQSx1Q0FBVixRQUFVO0FBQVYsZ0JBQVU7QUFBQTs7QUFDOUIsV0FBTyxnQ0FBYyxNQUFkLFNBQXlCLFFBQXpCLEVBQVA7QUFDSDs7QUFFRDtBQUNPLFNBQVMsUUFBVCxDQUFrQixPQUFsQixFQUF1QztBQUMxQyxRQUFNLGFBQWEsUUFBUSxTQUFSLENBQWtCLElBQWxCLENBQW5COztBQUQwQyx1Q0FBVCxPQUFTO0FBQVQsZUFBUztBQUFBOztBQUUxQyxZQUFRLE9BQVIsQ0FBZ0IsaUJBQVM7QUFBRSxtQkFBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLEtBQXpCO0FBQWlDLEtBQTVEO0FBQ0EsV0FBTyxVQUFQO0FBQ0g7O0FBRUQ7QUFDTyxTQUFTLEtBQVQsQ0FBZSxPQUFmLEVBQXdCLEVBQXhCLEVBQTRCO0FBQy9CLFFBQU0sYUFBYSxRQUFRLFNBQVIsQ0FBa0IsSUFBbEIsQ0FBbkI7QUFDQSxXQUFPLE9BQU8sTUFBUCxDQUFjLFVBQWQsRUFBMEIsRUFBRSxNQUFGLEVBQTFCLENBQVA7QUFDSDs7Ozs7Ozs7a0JDM0N1QixHOztBQUh4Qjs7QUFDQTs7Ozs7O0FBRWUsU0FBUyxHQUFULEdBQWU7QUFDMUIsUUFBTSxVQUFVLHFCQUFNLG1CQUFJLG9CQUFLLFlBQUwsQ0FBSixDQUFOLEVBQStCLGVBQS9CLENBQWhCO0FBQ0EsUUFBTSxTQUFTLFFBQWY7O0FBRUEsV0FBTyxPQUFQO0FBQ0g7Ozs7Ozs7O2tCQ051QixNOztBQUZ4Qjs7QUFFZSxTQUFTLE1BQVQsR0FBa0I7QUFDN0IsUUFBTSxVQUFVLHdCQUFTLG9CQUFULEVBQWdCLGFBQWhCLENBQWhCOztBQUVBLFFBQU0sV0FBVyxxQkFBTSx3QkFBUyxrQkFBVCxFQUFjLElBQWQsRUFBb0Isa0JBQXBCLENBQU4sRUFBK0MsV0FBL0MsQ0FBakI7QUFDQSxRQUFNLFlBQVksd0JBQVMscUJBQVQsRUFBaUIsWUFBakIsQ0FBbEI7QUFDQSxRQUFNLGFBQWEsd0JBQVMsbUJBQUksUUFBSixFQUFjLFNBQWQsQ0FBVCxFQUFtQyxjQUFuQyxDQUFuQjtBQUNBLFFBQU0sV0FBVyx3QkFBUyxtQkFBSSxVQUFKLENBQVQsRUFBMEIsY0FBMUIsRUFBMEMsTUFBMUMsQ0FBakI7O0FBRUEsV0FBTyx3QkFBUyxtQkFBSSxPQUFKLEVBQWEsUUFBYixDQUFULEVBQWlDLFFBQWpDLENBQVA7QUFDSDs7Ozs7QUNYRDs7QUFFQSxJQUFNLE9BQU8sU0FBUyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxLQUFLLFlBQUwsQ0FBa0IsZUFBbEIsRUFBeUIsS0FBSyxVQUFMLENBQWdCLENBQWhCLENBQXpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc31yZXR1cm4gZX0pKCkiLCIvLyBtZXRob2QgZm9yIGEgdGV4dFxuZXhwb3J0IGZ1bmN0aW9uIHRleHQod29yZHMpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUod29yZHMpO1xufVxuXG4vLyBtZXRob2QgZm9yIGNyZWF0aW5nIGFuIGVsZW1lbnQgXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCAuLi5jaGlsZHJlbikge1xuICAgIC8vIGNyZWF0aW5nIGFuIGVsZW1lbnQgdHlwZVxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIC8vIGluc2VydGluZyBhIG5ldyBlbGVtZW50XG4gICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kKGNoaWxkKVxuICAgIH0pO1xufVxuXG4vLyBtZXRob2QgZm9yIGRpdiBcbmV4cG9ydCBmdW5jdGlvbiBkaXYoLi4uY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnY2hpbGQnLCAuLi5jaGlsZHJlbik7XG59XG5cbi8vIG1ldGhvZCBmb3IgaVxuZXhwb3J0IGZ1bmN0aW9uIGkoLi4uY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaScsIC4uLmNoaWxkcmVuKTtcbn1cblxuLy8gbWV0aG9kIGZvciBuYXZcbmV4cG9ydCBmdW5jdGlvbiBuYXYoLi4uY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnbmF2JywgLi4uY2hpbGRyZW4pO1xufVxuXG4vLyBtZXRob2QgZm9yIHNwYW5cbmV4cG9ydCBmdW5jdGlvbiBzcGFuKC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAuLi5jaGlsZHJlbik7XG59XG5cbi8vIG1ldGhvZCBhZGRDbGFzc1xuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIC4uLmtsYXNzZXMpIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAga2xhc3Nlcy5mb3JFYWNoKGtsYXNzID0+IHsgbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGtsYXNzKSB9KTtcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuLy8gbWV0aG9kIGZvciBhZGRJZFxuZXhwb3J0IGZ1bmN0aW9uIGFkZElkKGVsZW1lbnQsIGlkKSB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ld0VsZW1lbnQsIHsgaWQgfSlcbn1cbiIsImltcG9ydCB7IGRpdiwgYWRkSWQsIHRleHQgfSBmcm9tIFwiLi4vYnVpbGRlcnNcIjtcbmltcG9ydCBuYXZiYXIgZnJvbSAnLi9uYXZiYXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHAoKSB7XG4gICAgY29uc3QgYXBwRWxlbSA9IGFkZElkKGRpdih0ZXh0KCdIYWxvIGR1bmlhJykpLCAnYXBwLWNvbnRhaW5lcicpXG4gICAgY29uc3QgbmF2YmFyID0gbmF2YmFyKCk7XG5cbiAgICByZXR1cm4gYXBwRWxlbTtcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgYWRkSWQsIGRpdiwgaSwgbmF2LCBzcGFuIH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZiYXIoKSB7XG4gICAgY29uc3QgbmF2TGVmdCA9IGFkZENsYXNzKGRpdigpLCAnbmF2YmFyLWxlZnQnKTtcblxuICAgIGNvbnN0IGNhcnRJY29uID0gYWRkSWQoYWRkQ2xhc3MoaSgpLCAnZmEnLCAnZmEtc2hvcHBpbmctY2FydCcpLCAnY2FydC1pY29uJyk7XG4gICAgY29uc3QgY2FydEl0ZW1zID0gYWRkQ2xhc3Moc3BhbigpLCAnY2FydC1pdGVtcycpO1xuICAgIGNvbnN0IG5hdmJhckl0ZW0gPSBhZGRDbGFzcyhkaXYoY2FydEljb24sIGNhcnRJdGVtcyksICduYXZiYXItaXRlbXMnKTtcbiAgICBjb25zdCBuYXZSaWdodCA9IGFkZENsYXNzKGRpdihuYXZiYXJJdGVtKSwgJ25hdmJhci1yaWdodCcsICdjYXJ0Jyk7XG5cbiAgICByZXR1cm4gYWRkQ2xhc3MobmF2KG5hdkxlZnQsIG5hdlJpZ2h0KSwgJ25hdmJhcicpO1xufSIsImltcG9ydCB7IGFwcCB9IGZyb20gXCIuL2NvbXBvbmVudHMvYXBwXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5ib2R5Lmluc2VydEJlZm9yZShhcHAoKSwgYm9keS5jaGlsZE5vZGVzWzBdKTsiXX0=
