const yargs = require('yargs');
const fileService = require('./services/file.service')

yargs.command({
    command: 'add',
    description: 'Add new note',
    builder: {
        title: {
            desctibe: 'note title',
            demandOption: true,
            type: 'string'
        },

        text: {
            desctibe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (args) => {
        const notesFilePath = 'notes.json';
        const fileContent = fileService.getFileContent(notesFilePath);
        let duplicatedTitle = false;

        if (fileContent.length > 0) {
            fileContent.forEach(note => {
                try {
                    if (note.title === args.title) {
                        throw '';
                    }
                } catch(e) {
                    duplicatedTitle = !duplicatedTitle
                }  
            });
        }

        duplicatedTitle ? console.log('title is dublicated') : fileContent.push({title: args.title, text: args.text}) && fileService.writeIntoFile(notesFilePath, fileContent)
        
    }
})

yargs.parse()
