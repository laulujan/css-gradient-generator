const formatter = (style, direction, color1, color2) => {
    const css = style === 'radial-gradient' && direction !== 'at center center' ? `-webkit-${style}(${direction}, ${color1}, ${color2})` : `${style}(${direction}, ${color1}, ${color2})` 
    return css
}

export default formatter;