// import { app } from './components/App';
import { div, addId, text, addClass, i, nav, span } from './builders';
// import navbar from './components/navbar';

const body = document.querySelector('body');

function navbar() {
    console.log(div, "checking div element")

    const navLeft = addClass(div, 'navbar-left');

    console.log(navLeft, "checking navLeft");

    const cartIcon = addId(addClass(i(), 'fa', 'fa-shopping-cart'), 'cart-icon');
    const cartItems = addClass(span(), 'cart-items');
    const navbarItem = addClass(div(cartIcon, cartItems), 'navbar-items');
    const navRight = addClass(div(navbarItem), 'navbar-right', 'cart');

    return addClass(nav(navLeft, navRight), 'navbar');
}

export default function app() {
    console.log(div, "test")
    const navbarEle = navbar();
    console.log(navbar)
    const appEle = addId(div(navbarEle), "app-container")
    return appEle
}

body.insertBefore(app(), body.childNodes[0])


// const lower = ["hey1", "hey2", "hey3"]
// const upper = lower.map(name => name.toUpperCase())

// upper.forEach(name => console.log(`Hello, ${name}`))