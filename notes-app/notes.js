const fs = require('fs')



const addNotes = function(title,body){
const notes = listNotes()

const duplicateNotes = notes.filter( function(note){
    return note.title == title
})

console.log(duplicateNotes)

if (duplicateNotes.length == 0 | notes.length == 0){
    notes.push({
        title : title,
        body : body
    })
      saveNote(notes)
      console.log('Note added!')
}
else{
    console.log('Title already exists')
}
}

const removeNotes = function(title){

    const notes = listNotes()
    console.log('Note with title to be removed :' + title)
    const filterNotes = notes.filter( function(note){
        return note.title != title

    }) 
    console.log(filterNotes)
    
    if( notes.length === filterNotes.length){
        console.log('Note with that tiltle does not exist')
    }
    else{
    if(notes!=null){
        saveNote(filterNotes)
    }
    else{
        console.log('Notes are Empty')
    }
} 
}

const listNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataString = dataBuffer.toString()
        const dataJSON = JSON.parse(dataString)
        return dataJSON
    }
    catch(e){
        return []
    }
    
}

const saveNote = function(notes){
    const noteJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',noteJSON)

}


module.exports = {
    addNotes : addNotes,
    listNotes : listNotes,
    removeNotes : removeNotes
}