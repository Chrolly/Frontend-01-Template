function getStyle(elenment) {
    if (!Element.style) {
        elenment.style = {};
    }

    //console.log("----style----")
    for (let prop in elenment.computedStyle) {
        //console.log(prop)
        var p = elenment.computedStyle.value;
        elenment.style[prop] = elenment.computedStyle[prop].value;

        if (elenment.style[prop].toString().match(/px$/)) {
            elenment.style[prop] = parseInt(elenment.style[prop]);
        }
        if (elenment.style[prop].toString().match(/^[0-9\.]+$/)) {
            elenment.style[prop] = parseInt(elenment.style[prop]);
        }
    }

    return elenment.style;
}

function layout(elenment) {
    if (!elenment.computedStyle) {
        return;
    }

    var elenmentStyle = getStyle(elenment);

    if (elenmentStyle.display !== 'flex') {
        return;
    }

    var items = element.children.filter(e => e.type === 'element');

    items.sort(function(a, b)) {
        return (a.order || 0) - (b.order || 0);
    }

    var style = elenmentStyle;

    ['width', 'height'].forEach(size => {
        if (style[size] === 'auto' || style[size] === '') {
            style[size] = null;
        }
    });

    if (!style.flexDirection || style.flexDirection === 'auto') {
        style.flexDirection = 'row';
    }
    if (!style.alignItems || style.alignItems === 'auto') {
        style.alignItems = 'stretch';
    }
    if (!style.justifyContent || style.justifyContent === 'auto') {
        style.justifyContent = 'flex-start';
    }
    if (!style.flexWrap || style.flexWrap === 'auto') {
        style.flexWrap = 'nowrap';
    }
    if (!style.alignContent || style.alignContent === 'auto') {
        style.alignContent = 'stretch';
    }

    var mainSize, mainStart, mainEnd, mainSign, mainBase, crossSize, crossStart, crossEnd, crossSign, crossBase;

    if (style.flexDirection === 'row') {
        mainSize = 'width';
        mainStart = 'left';
        mainEnd = 'right';
        mainSign = +1;
        mainBase = 0;

        crossSize = 'height';
        crossStart = 'top';
        crossEnd = 'bottom';
    }

    if (style.flexDirection === 'row-reverse') {
        mainSize = 'width';
        mainStart = 'left';
        mainEnd = 'right';
        mainSign = -1;
        mainBase = style.width;

        crossSize = 'height';
        crossStart = 'top';
        crossEnd = 'bottom';
    }

    if (style.flexDirection === 'column') {
        mainSize = 'width';
        mainStart = 'top';
        mainEnd = 'bottom';
        mainSign = +1;
        mainBase = 0;

        crossSize = 'width';
        crossStart = 'left';
        crossEnd = 'right';
    }

    if (style.flexDirection === 'column-reverse') {
        mainSize = 'height';
        mainStart = 'bottom';
        mainEnd = 'top';
        mainSign = -1;
        mainBase = style.height;

        crossSize = 'width';
        crossStart = 'left';
        crossEnd = 'right';
    }

    if (style.flexWrap === 'wrap-reverse') {
        var tmp = crossStart;
        crossStart = crossEnd;
        crossSign = -1;
    } else {
        crossBase = 0;
        crossSign = 1;
    }
}

module.exports = layout;