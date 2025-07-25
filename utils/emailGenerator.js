function generateRandomEmail() {
    const randomNumbers = Math.floor(Math.random() * 100000).toString();
    return `userviet18${randomNumbers}@test.com`;
}

module.exports = { generateRandomEmail };