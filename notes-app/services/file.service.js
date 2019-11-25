const fs = require('fs')

Buffer.prototype.bufferToForm = function bufferToForm() {
    return JSON.parse(this.toString());
} 

class FileService {
    getFileContent(filePath) {
        let bufferFileContent;
    
        try {
            bufferFileContent = fs.readFileSync(filePath).bufferToForm();
        } catch (error) {
            bufferFileContent = []
        } finally {
            return bufferFileContent
        }
    };

    writeIntoFile(filePath, data) {
        fs.writeFileSync(filePath, JSON.stringify(data));
    }
}

module.exports = new FileService()