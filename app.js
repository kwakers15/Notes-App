const chalk = require('chalk')
const notes = require('./notes')
const yargs = require('yargs')

// add, remove, read, list

// add
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    },
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    }
})

// remove
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler(argv) {
        notes.removeNote(argv.title)
    },
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    }
})

// list
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        notes.listNotes()
    }
})

// read
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler(argv) {
        notes.readNote(argv.title)
    },
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'

        }
    }
})

yargs.parse()


