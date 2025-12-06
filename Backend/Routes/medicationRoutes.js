const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

const {
    createMedication,
    getAllMedications,
    updateMedication,
    deleteMedication,
    recordMedicineTaken,
    getMedicineHistory
} = require('../controller/medicationController');

router.use(authMiddleware);

router.route('/')
    .post(createMedication)
    .get(getAllMedications);

router.route('/:id')
    .put(updateMedication)
    .delete(deleteMedication);

// New routes for medicine log
router.post('/take', recordMedicineTaken);
router.get('/history', getMedicineHistory);

module.exports = router;