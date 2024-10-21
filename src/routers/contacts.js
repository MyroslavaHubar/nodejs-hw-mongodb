import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getContactsByIdController,
  getContactsController,
  patchContactController,
} from '../controllers/contacts.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));

router.get('/contacts/:contactId', ctrlWrapper(getContactsByIdController));

router.get('/', (req, res) => {
  res.json({ message: 'Server is enable' });
});

router.post('/students', ctrlWrapper(createContactController));

router.patch('/students/:studentId', ctrlWrapper(patchContactController));

router.delete('/students/:studentId', ctrlWrapper(deleteContactController));

export default router;
