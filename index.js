

// const argv = require('yargs').argv;
// const express = require('express');

// const contacts = require('./contacts');

// const app = express();

// PORT = process.env.PORT || 3000;

// app.use(express.json())

// app.get('/hello', (req, res, next) => {
//   console.log("req.body", req.body)
//   res.send("Hello world!")
// });

// app.listen(PORT, () => {
//   console.log('Started listening on port', PORT)
// })

// function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case 'list':
//       contacts.listContacts();
//       break;

//     case 'get':
//       contacts.getContactById(id);
//       break;

//     case 'add':
//       contacts.addContact(name, email, phone);
//       break;

//     case 'remove':
//       contacts.removeContact(id);
//       break;

//     default:
//       console.warn('\x1B[31m Unknown action type!');
//   }
// }

// invokeAction(argv);
