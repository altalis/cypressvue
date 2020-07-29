/**
 * ==============================================================================
 * MONGO DB CONFIGURATION FILE
 * This is the configuration file for everything related to MONGO DB
 * Search: Mongo config
 * @version 1.3
 * Please keep this file as clean as posible
 * ==============================================================================
 */

// We are requirent the MongoDB library here to define the schema once

const mongoose = require('mongoose'); // The mongoose library (FROM: http://mongoosejs.com/docs/index.html)
const Schema = mongoose.Schema; // This is the class to create schemas
const modelDefaults = {
  toJSON: {
    transform: function (doc, ret) {
      //Exactly the same as the toObject option but only applies when the documents toJSON method is called.
      // remove the _id and __v of every document before returning the result
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    }
  },
  toObject: {
    transform: function (doc, ret) {
      // Documents have a toObject method which converts the mongoose document into a plain javascript object. This method accepts a few options. Instead of applying these options on a per-document basis we may declare the options here and have it applied to all of this schemas documents by default.
      // remove the _id and __v of every document before returning the result
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    }
  }
};

/*
  =========================================
  |                                       |
  |   GENERAL CONFIGURATION INFORMATION   |
  |                                       |
  =========================================
 */
exports.CONNECTION = {
  host: 'localhost',       //The host of the connection (default: localhost)
  port: '27017',                    // The port of the connection (default: 27017)
  username: "cypressAdmin",                       // The username of the authentication (default null)
  password: "admin123",                       // The password of the authentication (default null)
  auth_type: null,                       // The authentication type. (default null) [options: SCRAM-SHA-1 , MONGODB-CR]
  database: 'Cypress',              // The database name (from MONGODB)
};
