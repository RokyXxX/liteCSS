function applyClassToElements(attribute: string, classNameTemplate: string) {
    const elements = document.querySelectorAll(`[${attribute}]`);
    elements.forEach((element) => {
        const attributeValue = element.getAttribute(attribute);
        if (attributeValue) {
            const className = `${classNameTemplate}-${attributeValue}`;
            element.classList.add(className);
        }
    });
}

// apply styles wehn DOM ready...
document.addEventListener('DOMContentLoaded', () => {
    applyClassToElements('button-theme', 'button');
});