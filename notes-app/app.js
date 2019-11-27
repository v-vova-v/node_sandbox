const yargs = require('yargs');
const noteCommands = require('./services/note.commands.service');

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
        noteCommands.addNote('notes.json', args.title, args.text);
    }
})

yargs.parse();