const express = require('express');
const { 
    getHealthInstitutions,
    saveHealthInstitution,
    getHealthInstitutionsByCounty, 
    getHealthInstitutionByName, 
    getHealthInstitutionsByDistrict, 
    getHealthInstitutionsByTypePerCounty,
    getHealthInstitutionsByType
} = require('../controllers/health-institutions-controller');
const router = express.Router();

router.route('/').get(getHealthInstitutions).post(saveHealthInstitution);
router.route('/:county').get(getHealthInstitutionsByCounty);
router.route('/:county/:facilityType').get(getHealthInstitutionsByTypePerCounty);
router.route('/facilities/types/:facilityType').get(getHealthInstitutionsByType);
router.route('/facilities/district/:district').get(getHealthInstitutionsByDistrict);
router.route('/facility/name/:facilityName').get(getHealthInstitutionByName);


module.exports = router;