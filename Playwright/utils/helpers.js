//Generate random email
function generateRandomEmail(){
    const char = "abcdefghijklmnopqrstuvwxyz0123456789";
    const domainNames = ["test.com","testing.com","abctest.com","xyztest.com","noexistingtest.com","123test.com","cdghtest.com","ahfsjtest.com"];
    function getRandomString(length){
        let result = "";
        for (let i=0;i < length; i++){
            result += char.charAt(Math.floor(Math.random()*char.length));
        }
        return result; 
    }
    const username = getRandomString(15);
    const domain = domainNames[Math.floor(Math.random() * domainNames.length)];
    return `${username}@${domain}`;
};

//Generate random address
function generateRandomAddress() {
    const streetNames = [
        "McBain Ave", "Shady Dale Ave", "Cameo Dr", "Campbell Ave", 
        "Denver Dr", "Rosalia Ave", "Cielo Vista Way", "Brookdale Dr", "Poplar Ave"
    ];
    // Tạo số địa chỉ từ 1 đến 4 chữ số
    const addressNumber = Math.floor(Math.random() * 9000) + 1; 

    // Chọn ngẫu nhiên một tên đường
    const streetName = streetNames[Math.floor(Math.random() * streetNames.length)];

    return `${addressNumber} ${streetName}`;
};
module.exports = {generateRandomEmail, generateRandomAddress}