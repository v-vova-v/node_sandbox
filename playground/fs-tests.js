const fileService = require('../notes-app/services/file.service')

function rewriteFile() {
    const personInfo = fileService.getFileContent('1-json.json');
    personInfo['name'] = 'Vova';
    personInfo['age'] = 29;

    fileService.writeIntoFile('1-json.json', personInfo);
}
rewriteFile()


console.log(fileService.getFileContent('1-json.json'));
