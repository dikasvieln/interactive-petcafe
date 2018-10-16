(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
    console.log(element, "ada ga");

    var newDom = element.cloneNode(true);
    console.log(newDom, 'checking aja');
    // klasses.forEach(klass => newDom.classList.add(klass));
    return newDom;
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

var _builders = require('./builders');

// import navbar from './components/navbar';

var body = document.querySelector('body'); // import { app } from './components/App';


function navbar() {
    console.log(_builders.div, "checking div element");

    var navLeft = (0, _builders.addClass)(_builders.div, 'navbar-left');

    console.log(navLeft, "checking navLeft");

    var cartIcon = (0, _builders.addId)((0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-shopping-cart'), 'cart-icon');
    var cartItems = (0, _builders.addClass)((0, _builders.span)(), 'cart-items');
    var navbarItem = (0, _builders.addClass)((0, _builders.div)(cartIcon, cartItems), 'navbar-items');
    var navRight = (0, _builders.addClass)((0, _builders.div)(navbarItem), 'navbar-right', 'cart');

    return (0, _builders.addClass)((0, _builders.nav)(navLeft, navRight), 'navbar');
}

function app() {
    console.log(_builders.div, "test");
    var navbarEle = navbar();
    console.log(navbar);
    var appEle = (0, _builders.addId)((0, _builders.div)(navbarEle), "app-container");
    return appEle;
}

body.insertBefore(app(), body.childNodes[0]);

// const lower = ["hey1", "hey2", "hey3"]
// const upper = lower.map(name => name.toUpperCase())

// upper.forEach(name => console.log(`Hello, ${name}`))

},{"./builders":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYnVpbGRlcnMuanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztRQ0NnQixJLEdBQUEsSTtRQUtBLGEsR0FBQSxhO1FBVUEsRyxHQUFBLEc7UUFLQSxDLEdBQUEsQztRQUtBLEcsR0FBQSxHO1FBS0EsSSxHQUFBLEk7UUFNQSxRLEdBQUEsUTtRQVVBLEssR0FBQSxLO0FBL0NoQjtBQUNPLFNBQVMsSUFBVCxDQUFjLEtBQWQsRUFBcUI7QUFDeEIsV0FBTyxTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBUDtBQUNIOztBQUVEO0FBQ08sU0FBUyxhQUFULENBQXVCLElBQXZCLEVBQTBDO0FBQzdDO0FBQ0EsUUFBTSxhQUFhLFNBQVMsYUFBVCxDQUF1QixJQUF2QixDQUFuQjtBQUNBOztBQUg2QyxzQ0FBVixRQUFVO0FBQVYsZ0JBQVU7QUFBQTs7QUFJN0MsYUFBUyxPQUFULENBQWlCLGlCQUFTO0FBQ3RCLG1CQUFXLE1BQVgsQ0FBa0IsS0FBbEI7QUFDSCxLQUZEO0FBR0g7O0FBRUQ7QUFDTyxTQUFTLEdBQVQsR0FBMEI7QUFBQSx1Q0FBVixRQUFVO0FBQVYsZ0JBQVU7QUFBQTs7QUFDN0IsV0FBTyxnQ0FBYyxPQUFkLFNBQTBCLFFBQTFCLEVBQVA7QUFDSDs7QUFFRDtBQUNPLFNBQVMsQ0FBVCxHQUF3QjtBQUFBLHVDQUFWLFFBQVU7QUFBVixnQkFBVTtBQUFBOztBQUMzQixXQUFPLGdDQUFjLEdBQWQsU0FBc0IsUUFBdEIsRUFBUDtBQUNIOztBQUVEO0FBQ08sU0FBUyxHQUFULEdBQTBCO0FBQUEsdUNBQVYsUUFBVTtBQUFWLGdCQUFVO0FBQUE7O0FBQzdCLFdBQU8sZ0NBQWMsS0FBZCxTQUF3QixRQUF4QixFQUFQO0FBQ0g7O0FBRUQ7QUFDTyxTQUFTLElBQVQsR0FBMkI7QUFBQSx1Q0FBVixRQUFVO0FBQVYsZ0JBQVU7QUFBQTs7QUFDOUIsV0FBTyxnQ0FBYyxNQUFkLFNBQXlCLFFBQXpCLEVBQVA7QUFDSDs7QUFFRDs7QUFFTyxTQUFTLFFBQVQsQ0FBa0IsT0FBbEIsRUFBdUM7QUFDMUMsWUFBUSxHQUFSLENBQVksT0FBWixFQUFxQixRQUFyQjs7QUFFQSxRQUFNLFNBQVMsUUFBUSxTQUFSLENBQWtCLElBQWxCLENBQWY7QUFDQSxZQUFRLEdBQVIsQ0FBWSxNQUFaLEVBQW9CLGNBQXBCO0FBQ0E7QUFDQSxXQUFPLE1BQVA7QUFDSDs7QUFFRDtBQUNPLFNBQVMsS0FBVCxDQUFlLE9BQWYsRUFBd0IsRUFBeEIsRUFBNEI7QUFDL0IsUUFBTSxhQUFhLFFBQVEsU0FBUixDQUFrQixJQUFsQixDQUFuQjtBQUNBLFdBQU8sT0FBTyxNQUFQLENBQWMsVUFBZCxFQUEwQixFQUFFLE1BQUYsRUFBMUIsQ0FBUDtBQUNIOzs7Ozs7OztrQkM3QnVCLEc7O0FBcEJ4Qjs7QUFDQTs7QUFFQSxJQUFNLE9BQU8sU0FBUyxhQUFULENBQXVCLE1BQXZCLENBQWIsQyxDQUpBOzs7QUFNQSxTQUFTLE1BQVQsR0FBa0I7QUFDZCxZQUFRLEdBQVIsQ0FBWSxhQUFaLEVBQWlCLHNCQUFqQjs7QUFFQSxRQUFNLFVBQVUsd0JBQVMsYUFBVCxFQUFjLGFBQWQsQ0FBaEI7O0FBRUEsWUFBUSxHQUFSLENBQVksT0FBWixFQUFxQixrQkFBckI7O0FBRUEsUUFBTSxXQUFXLHFCQUFNLHdCQUFTLGtCQUFULEVBQWMsSUFBZCxFQUFvQixrQkFBcEIsQ0FBTixFQUErQyxXQUEvQyxDQUFqQjtBQUNBLFFBQU0sWUFBWSx3QkFBUyxxQkFBVCxFQUFpQixZQUFqQixDQUFsQjtBQUNBLFFBQU0sYUFBYSx3QkFBUyxtQkFBSSxRQUFKLEVBQWMsU0FBZCxDQUFULEVBQW1DLGNBQW5DLENBQW5CO0FBQ0EsUUFBTSxXQUFXLHdCQUFTLG1CQUFJLFVBQUosQ0FBVCxFQUEwQixjQUExQixFQUEwQyxNQUExQyxDQUFqQjs7QUFFQSxXQUFPLHdCQUFTLG1CQUFJLE9BQUosRUFBYSxRQUFiLENBQVQsRUFBaUMsUUFBakMsQ0FBUDtBQUNIOztBQUVjLFNBQVMsR0FBVCxHQUFlO0FBQzFCLFlBQVEsR0FBUixDQUFZLGFBQVosRUFBaUIsTUFBakI7QUFDQSxRQUFNLFlBQVksUUFBbEI7QUFDQSxZQUFRLEdBQVIsQ0FBWSxNQUFaO0FBQ0EsUUFBTSxTQUFTLHFCQUFNLG1CQUFJLFNBQUosQ0FBTixFQUFzQixlQUF0QixDQUFmO0FBQ0EsV0FBTyxNQUFQO0FBQ0g7O0FBRUQsS0FBSyxZQUFMLENBQWtCLEtBQWxCLEVBQXlCLEtBQUssVUFBTCxDQUFnQixDQUFoQixDQUF6Qjs7QUFHQTtBQUNBOztBQUVBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gbWV0aG9kIGZvciBhIHRleHRcbmV4cG9ydCBmdW5jdGlvbiB0ZXh0KHdvcmRzKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHdvcmRzKTtcbn1cblxuLy8gbWV0aG9kIGZvciBjcmVhdGluZyBhbiBlbGVtZW50IFxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgLi4uY2hpbGRyZW4pIHtcbiAgICAvLyBjcmVhdGluZyBhbiBlbGVtZW50IHR5cGVcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAvLyBpbnNlcnRpbmcgYSBuZXcgZWxlbWVudFxuICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBuZXdFbGVtZW50LmFwcGVuZChjaGlsZClcbiAgICB9KTtcbn1cblxuLy8gbWV0aG9kIGZvciBkaXYgXG5leHBvcnQgZnVuY3Rpb24gZGl2KC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2NoaWxkJywgLi4uY2hpbGRyZW4pO1xufVxuXG4vLyBtZXRob2QgZm9yIGlcbmV4cG9ydCBmdW5jdGlvbiBpKC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2knLCAuLi5jaGlsZHJlbik7XG59XG5cbi8vIG1ldGhvZCBmb3IgbmF2XG5leHBvcnQgZnVuY3Rpb24gbmF2KC4uLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ25hdicsIC4uLmNoaWxkcmVuKTtcbn1cblxuLy8gbWV0aG9kIGZvciBzcGFuXG5leHBvcnQgZnVuY3Rpb24gc3BhbiguLi5jaGlsZHJlbikge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdzcGFuJywgLi4uY2hpbGRyZW4pO1xufVxuXG4vLyBtZXRob2QgYWRkQ2xhc3NcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIC4uLmtsYXNzZXMpIHtcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50LCBcImFkYSBnYVwiKVxuXG4gICAgY29uc3QgbmV3RG9tID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgY29uc29sZS5sb2cobmV3RG9tLCAnY2hlY2tpbmcgYWphJylcbiAgICAvLyBrbGFzc2VzLmZvckVhY2goa2xhc3MgPT4gbmV3RG9tLmNsYXNzTGlzdC5hZGQoa2xhc3MpKTtcbiAgICByZXR1cm4gbmV3RG9tO1xufVxuXG4vLyBtZXRob2QgZm9yIGFkZElkXG5leHBvcnQgZnVuY3Rpb24gYWRkSWQoZWxlbWVudCwgaWQpIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3RWxlbWVudCwgeyBpZCB9KVxufVxuIiwiLy8gaW1wb3J0IHsgYXBwIH0gZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5pbXBvcnQgeyBkaXYsIGFkZElkLCB0ZXh0LCBhZGRDbGFzcywgaSwgbmF2LCBzcGFuIH0gZnJvbSAnLi9idWlsZGVycyc7XG4vLyBpbXBvcnQgbmF2YmFyIGZyb20gJy4vY29tcG9uZW50cy9uYXZiYXInO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5mdW5jdGlvbiBuYXZiYXIoKSB7XG4gICAgY29uc29sZS5sb2coZGl2LCBcImNoZWNraW5nIGRpdiBlbGVtZW50XCIpXG5cbiAgICBjb25zdCBuYXZMZWZ0ID0gYWRkQ2xhc3MoZGl2LCAnbmF2YmFyLWxlZnQnKTtcblxuICAgIGNvbnNvbGUubG9nKG5hdkxlZnQsIFwiY2hlY2tpbmcgbmF2TGVmdFwiKTtcblxuICAgIGNvbnN0IGNhcnRJY29uID0gYWRkSWQoYWRkQ2xhc3MoaSgpLCAnZmEnLCAnZmEtc2hvcHBpbmctY2FydCcpLCAnY2FydC1pY29uJyk7XG4gICAgY29uc3QgY2FydEl0ZW1zID0gYWRkQ2xhc3Moc3BhbigpLCAnY2FydC1pdGVtcycpO1xuICAgIGNvbnN0IG5hdmJhckl0ZW0gPSBhZGRDbGFzcyhkaXYoY2FydEljb24sIGNhcnRJdGVtcyksICduYXZiYXItaXRlbXMnKTtcbiAgICBjb25zdCBuYXZSaWdodCA9IGFkZENsYXNzKGRpdihuYXZiYXJJdGVtKSwgJ25hdmJhci1yaWdodCcsICdjYXJ0Jyk7XG5cbiAgICByZXR1cm4gYWRkQ2xhc3MobmF2KG5hdkxlZnQsIG5hdlJpZ2h0KSwgJ25hdmJhcicpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHAoKSB7XG4gICAgY29uc29sZS5sb2coZGl2LCBcInRlc3RcIilcbiAgICBjb25zdCBuYXZiYXJFbGUgPSBuYXZiYXIoKTtcbiAgICBjb25zb2xlLmxvZyhuYXZiYXIpXG4gICAgY29uc3QgYXBwRWxlID0gYWRkSWQoZGl2KG5hdmJhckVsZSksIFwiYXBwLWNvbnRhaW5lclwiKVxuICAgIHJldHVybiBhcHBFbGVcbn1cblxuYm9keS5pbnNlcnRCZWZvcmUoYXBwKCksIGJvZHkuY2hpbGROb2Rlc1swXSlcblxuXG4vLyBjb25zdCBsb3dlciA9IFtcImhleTFcIiwgXCJoZXkyXCIsIFwiaGV5M1wiXVxuLy8gY29uc3QgdXBwZXIgPSBsb3dlci5tYXAobmFtZSA9PiBuYW1lLnRvVXBwZXJDYXNlKCkpXG5cbi8vIHVwcGVyLmZvckVhY2gobmFtZSA9PiBjb25zb2xlLmxvZyhgSGVsbG8sICR7bmFtZX1gKSkiXX0=
