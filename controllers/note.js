'use strict';

const Path = require('path');
const Models = require('../models/');

module.exports = {
  create: async (request) => {
    const note= {
      date: new Date(),
      title: request.payload.noteTitle,
      slug: Slugify(request.payload.noteTitle, {lower: true}),
      description: request.payload.noteDescription,
      content: request.payload.noteContent
    };

    const sq = Models.Note.build(note);
    return sq.save();
  },
  readall: (request, h) => {
   return  Models.Note.findAll({
      order: [['date', 'DESC']]
    });   
  },
  read: (request, h) => {
   return  Models.Note
      .findOne({
        where: {
          slug: request.params.slug
        }
      })
      .then((result) => {
        return result;
      });
  },
  update: async(request) => {
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
    const sq = await Article.findOne(options);
    sq.update(values)
    return sq.save()


  //  return Models.Note
  //     .update(values, options)
  //     .then(() => {
  //       Models.Note
  //         .findOne(options)
  //         .then((result) => {
  //           return result;
  //         });
  //     });
  },
  delete: async (request) => {
    const option ={
      where: {
        slug: request.params.slug
      }
    };
   const sq= await Models.Note.findOne(option);
   return sq.destroy();
     
  }
};