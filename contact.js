const fs = require('fs/promises');
const path = require('path');
const crypto = require('crypto');

const contactsPath = path.resolve('./db/contacts.json');

const readContent = async () => {
    const content = await fs.readFile(contactsPath, 'utf8')
    // const content = await fs.readFile(path.join(__dirname, 'db', 'contacts.json'), 'utf8')
    const result = JSON.parse(content)
    return result
}

const listContacts = async () => {
    return await readContent()
  }
  
  const getContactById = (contactId) => {
    // ...твой код
  }
  
  const removeContact = (contactId) => {
    // ...твой код
  }
  
  const addContact = (name, email, phone) => {
    // ...твой код
  }
  
  module.exports = {
    listContacts, getContactById, removeContact, addContact
  }