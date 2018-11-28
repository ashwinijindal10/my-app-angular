'use strict';
const Note = require('./controllers/note');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler:Note.readall,
    config: {
      description: 'Gets all the notes available'
    }
  },{
    method: 'POST',
    path: '/note',
    handler: Note.create,
    config: {
      description: 'Adds a new note'
    }
  },
  {
    method: 'GET',
    path: '/note/{slug}',
    handler: Note.read,
    config: {
      description: 'Gets the content of a note'
    }
  },
  {
    method: 'PUT',
    path: '/note/{slug}',
    handler: Note.update,
    config: {
      description: 'Updates the selected note'
    }
  },
  {
    method: 'DELETE',//GET
    path: '/note/{slug}/delete',
    handler: Note.delete,
    config: {
      description: 'Deletes the selected note'
    }
  },

];