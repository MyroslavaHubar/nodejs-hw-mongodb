import { ContactsCollection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const contact = await ContactsCollection.find();
  return contact;
};

export const getContactById = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  const contact = await ContactsCollection.create(payload);
  return contact;
};

export const updateContact = async (payload) => {
  const contact = await ContactsCollection.create(payload);
  return contact;
};

export const deleteContact = async (studentId) => {
  const student = await ContactsCollection.findOneAndDelete({
    _id: studentId,
  });

  return student;
};
