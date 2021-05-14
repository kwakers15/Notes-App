const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green.bold('New note added!'))
    } else {
        console.log(chalk.red.bold('Note title already taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    if (notes.length !== 0) {
        const newNotes = notes.filter(note => note.title !== title)

        if (newNotes.length < notes.length) {
            saveNotes(newNotes)
            console.log(chalk.green.bold('Note removed!'))
        }
        else {
            console.log(chalk.red.bold('Note not found!'))
        }
    }
    else {
        console.log(chalk.red.bold('No notes exist!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your Notes:'))
    notes.forEach(note => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find(note => note.title === title)
    if (noteToRead) {
        console.log(chalk.inverse(noteToRead.title + ':'), noteToRead.body)
    }
    else {
        console.log(chalk.red.bold('Note not found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e) {
        return []
    }
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}