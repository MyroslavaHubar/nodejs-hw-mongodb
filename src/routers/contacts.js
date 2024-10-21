import { Router } from 'express';
import {
  getContactsByIdController,
  getContactsController,
} from '../controllers/contacts.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));

router.get('/contacts/:contactId', ctrlWrapper(getContactsByIdController));

router.get('/', (req, res) => {
  res.json({ message: 'Server is enable' });
});

router.use('*', (req, res, next) => {
  res.status(404).json({
    message: 'Not found',
  });
});

export default router;
