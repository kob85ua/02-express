const { Router } = require('express');
const ContactController = require('../controllers/contact.controller')
const contactRouter = Router();
const contacts = require('../../contacts.js');
// console.log(contacts.listContacts());
contactRouter.get('/', ContactController.getContacts
);

module.exports = contactRouter;
