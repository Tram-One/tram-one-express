module.exports = function (domBuilder, h, components) {
    const eh = function (tagName, attrs, children) {
        const component = components[tagName];

        const node = component ? component(attrs, children) : h(tagName, attrs, children);

        return node;
    };

    const hx = domBuilder(eh);

    hx.h = eh;

    return hx;
};
