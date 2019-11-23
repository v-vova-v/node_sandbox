const fs = require('fs');



Buffer.prototype.bufferToForm = function bufferToForm() {
    return JSON.parse(this.toString());
}

function getFileContent(filePath) {
    return fs.readFileSync(filePath).bufferToForm();
}

function writeIntoFile(filePath, data) {
    fs.writeFileSync(filePath, JSON.stringify(data));
}

const personInfo = getFileContent('1-json.json');
personInfo.name = 'Vova';
personInfo.age = 28;
//
writeIntoFile('1-json.json', personInfo);
console.log(getFileContent('1-json.json'));