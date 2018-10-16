import { addClass, addId, div, i, nav, span } from '../builders';

export default function navbar() {
    console.log(div(), "checking div element")

    const navLeft = addClass(div(), 'navbar-left');

    console.log(navLeft, "checking navLeft");

    const cartIcon = addId(addClass(i(), 'fa', 'fa-shopping-cart'), 'cart-icon');
    const cartItems = addClass(span(), 'cart-items');
    const navbarItem = addClass(div(cartIcon, cartItems), 'navbar-items');
    const navRight = addClass(div(navbarItem), 'navbar-right', 'cart');

    return addClass(nav(navLeft, navRight), 'navbar');
}