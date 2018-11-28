'use strict';

const Path = require('path');
const Models = require('../models/');

module.exports = {
  create: (request, reply) => {
    Models.Note
      .create({
        date: new Date(),
        title: request.payload.noteTitle,
        slug: Slugify(request.payload.noteTitle, {lower: true}),
        description: request.payload.noteDescription,
        content: request.payload.noteContent
      })
      .then((result) => {
        // We're going to generate a view later, but for now lets just return the result.
        reply(result);
      });
  },
  readall: (request, reply) => {
    Models.Note.findAll({
      order: [['date', 'DESC']]
    })
    .then((result) => {
      reply({
        data: {
          notes: result
        },
        description: 'Welcome to my Notes Board'
      });
    });
  },
  read: (request, reply) => {
    Models.Note
      .findOne({
        where: {
          slug: request.params.slug
        }
      })
      .then((result) => {
        reply(result);
      });
  },
  update: (request, reply) => {
    const values = {
      title: request.payload.noteTitle,
      description: request.payload.noteDescription,
      content: request.payload.noteContent
    };
  
    const options = {
      where: {
        slug: request.params.slug
      }
    };
  
    Models.Note
      .update(values, options)
      .then(() => {
        Models.Note
          .findOne(options)
          .then((result) => {
            reply(result);
          });
      });
  },
  delete: (request, reply) => {
    Models.Note
      .destroy({
        where: {
          slug: request.params.slug
        }
      })
      .then(() => reply.redirect('/'));
  }
};