
async function getTemplates () {
    const response = await fetch(
        'https://css-gradient-generator-api.herokuapp.com/api/templates'
    )
    const data = await response.json();
    return data;
}

export default getTemplates;