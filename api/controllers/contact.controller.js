// const users = [
//     {
//         id: 1,
//         name: "MIKE",
//         email: "dsd@gmail",
//         phone: "456-45-90"
//     }

// ]
const fs = require('fs');
// const { promises: fsPromises } = fs;
const path = require('path');

const contactsPath = path.join(__dirname, '../../db/contacts.json');
const contacts = require('../../contacts');
// const db = require("../../db/contacts.json")

module.exports = class ContactController {
  static  getContacts(req, res, next) {
      const users =  contacts.listContacts();
      console.log(users)
    return res.json(users);
  }
//   static getContacts() {
//     fsPromises
//       .readFile(contactsPath, 'utf-8')
//         .then(result => JSON.parse(result))
//         .then((req, res, next)=>{return res.json()})
//       .catch(error => console.log(error));
//   }
};