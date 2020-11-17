const express = require('express');
const { 
    getHealthInstitutions,
    saveHealthInstitution,
    getHealthInstitutionsByCounty, 
    getHealthInstitutionByName, 
    getHealthInstitutionsByDistrict } = require('../controllers/health-institutions-controller');
const router = express.Router();

router.route('/').get(getHealthInstitutions).post(saveHealthInstitution);
router.route('/:county').get(getHealthInstitutionsByCounty);
router.route('/facilities/:district').get(getHealthInstitutionsByDistrict);
router.route('/facility/:facilityName').get(getHealthInstitutionByName);


module.exports = router;