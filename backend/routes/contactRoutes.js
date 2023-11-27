import express from 'express'
import contactController from '../controllers/contactController.js';

const router= express.Router();

// ROUTES
// SUBMIT FORM
router.post("/submit-form", contactController.submitForm);

export default router
