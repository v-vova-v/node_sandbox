const fileService = require('./file.service');

class NoteCommands {
    /**
     * Add new note into file. In case note title already exists in file
     * console log message.
     * 
     * @param {String} nPath   Notes file path.
     * @param {String} nTitle  Title for new note.
     * @param {String} nText   Text for new note.
     */
    addNote(nPath, nTitle, nText) {
        const fileContent = fileService.getFileContent(nPath);
        const duplicateTitles = fileContent.filter(item => item.title === nTitle);
        duplicateTitles.length > 0 ? console.log('title is duplicated') : fileContent.push({title: nTitle, text: nText}) && fileService.writeIntoFile(nPath, fileContent)
    }
}


module.exports = new NoteCommands();