const name = require('./utils')
const notes = require('./notes')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const { string } = require('yargs')
const { argv } = require('process')


yargs.version('1.0.1')


yargs.command({
    command:'add',
    describe: 'add a note',
    builder:{
      title: {
          describe:'this is the Title',
          type: string,
          demandOption: true
      },
      body:{
          describe:'Body for note1...!',
          demandOption: true,
          type: string
      }
      
    },
    handler: function(argv){
        
        notes.addNotes(argv.title,argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'delete a note',
    builder:{
        title:{
            describe:'title of note',
            type: string,
            demandOption : true
        }
    },
    handler: function(argv){
        
        notes.removeNotes(argv.title)
        
    }
})

yargs.command({
    command : 'List',
    describe: 'List the notes',
    handler: function(){
        const data = notes.listNotes()
        console.log(data)
    }
})

yargs.command({
    command: 'read',
    describe:'read all notes',
    handler: function(){
        console.log('reading all notes..!!')
    }
})

yargs.parse()