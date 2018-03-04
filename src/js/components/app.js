import { div, addId, text } from "../builders";

export default function app() {
    const appElem = addId(div(text('Halo dunia')), 'app-container')

    return appElem;
}