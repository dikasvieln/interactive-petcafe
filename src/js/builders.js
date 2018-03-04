// method for a text
export function text(words) {
    return document.createTextNode(words);
}

// method for creating an element 
export function createElement(type, ...children) {
    // creating an element type
    const newElement = document.createElement(type);
    // inserting a new element
    children.forEach(child => {
        newElement.append(child)
    });
}

// method for div 
export function div(...children) {
    return createElement('child',...children);
}

// method for addId
export function addId(element, id) {
    const newElement = element.cloneNode(true);
    return Object.assign(newElement, {id})
}
