export const setElementProperties = (element, properties) => {
    Object.keys(properties).forEach(key => {
        element[key] = properties[key];
    })
}

export const appendChildren = (element, children) => {
    children.forEach(child => element.appendChild(child));
}