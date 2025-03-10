const { JSDOM } = require("jsdom");

async function getCheckboxesFromDiv(html, id) {
    let container = html.getElementById(id);
console.log(`container ${container}`)
    if (!container) {
        return []
    }

    let checkboxes = container.querySelectorAll('input[type="checkbox"]');
    return [...checkboxes].map(checkbox => checkbox.id);
};

const getHtml = async (page) => {
    return new JSDOM(await page.evaluate(() => document.documentElement.outerHTML)).window.document
}
function tickTheCheckBox(list){
    console.log(list);
    console.log(list[0]);

    for (let i=0; i<list.length; i++){
        console.log(list[i]);
    }
}
// Example HTML string
module.exports = { tickTheCheckBox, getCheckboxesFromDiv, getHtml};