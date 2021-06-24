
async function createTemplate (name, author, style, direction, firstColor, secondColor) {
    return await fetch('https://css-gradient-generator-api.herokuapp.com/api/templates', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        
        body: JSON.stringify({
            name: name,
            author: author,
            gradient_type: style,
            direction: direction,
            first_color: firstColor,
            second_color: secondColor

        })
      }).then((res) => {
        if (res.status === 201) {
            return true
        }

        return false
    });
      
}

export default createTemplate;