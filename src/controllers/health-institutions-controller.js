const HealthFacility = require('../models/HealthFacilities');
//const data = require('../data/health-institutions.json');

//@desc Get all health institutions
//@route GET /api/v1/health-institutions
//@access Public
exports.getHealthInstitutions = async (req, res, next)=>{
    try {
        const facilities = await HealthFacility.find().lean();
        return res.status(200).json({
            success:true,
            count:facilities.length,
            data:facilities
        })
    } catch (error) {
        res.status(500).json({error:'Server error'});
    }
}

//@desc Get all health institutions from a given county
//@route GET /api/v1/health-institutions/:county
//@access Public
exports.getHealthInstitutionsByCounty = async (req, res, next)=>{
    try {
        const {county} = req.params;
        const facilities = await HealthFacility.find({countyName:county}).lean();
        return res.status(200).json({
            success:true,
            count:facilities.length,
            data:facilities
        });
    } catch (error) {
        res.status(500).json({error:'Server error'});
    }
}

//@desc Get all health institutions by facility type from a given county
//@route GET /api/v1/health-institutions/:county/:facilityType
//@access Public
exports.getHealthInstitutionsByTypePerCounty = async (req, res, next)=>{
    try {
        const {county, facilityType} = req.params;
        const facilities = await HealthFacility.find({countyName:county, facilityType: facilityType}).lean();
        return res.status(200).json({
            success:true,
            count:facilities.length,
            data:facilities
        });
    } catch (error) {
        res.status(500).json({error:'Server error'});
    }
}

//@desc Get all health institutions by facility type
//@route GET /api/v1/health-institutions/types/:facilityType
//@access Public
exports.getHealthInstitutionsByType = async (req, res, next)=>{
    try {
        const {facilityType} = req.params;
        const facilities = await HealthFacility.find({facilityType: facilityType}).lean();
        return res.status(200).json({
            success:true,
            count:facilities.length,
            data:facilities
        });
    } catch (error) {
        res.status(500).json({error:'Server error'});
    }
}

//@desc Get all health institutions from a given district
//@route GET /api/v1/health-institutions/facilities/:district
//@access Public
exports.getHealthInstitutionsByDistrict = async (req, res, next)=>{
    try {
        const {district} = req.params;
        const facilities = await HealthFacility.find({districtName:district}).lean();
        return res.status(200).json({
            success:true,
            count:facilities.length,
            data:facilities
        });
    } catch (error) {
        res.status(500).json({error:'Server error'});
    }
}

//@desc Get health institutions by name
//@route GET /api/v1/health-institutions/facility/:facilityName
//@access Public
exports.getHealthInstitutionByName = async (req, res, next)=>{
    try {
        const {facilityName} = req.params;
        const facility = await HealthFacility.findOne({facilityName:facilityName}).lean();
        return res.status(200).json({
            success:true,
            data:facility
        });
    } catch (error) {
        res.status(500).json({error:'Server error'});
    }
}


//@desc Create an health institution
//@route PUT /api/v1/health-institutions
//@access Public
exports.saveHealthInstitution = async (req, res, next)=>{
    try {
        const facility = await(req.body)
        const result = await HealthFacility.create(facility);
        return res.status(200).json({
            success:true,
            data:result
        });
    } catch (error) {
        if(error.code ===11000)
         return res.status(400).json({error:'Health facility already exist.'});
        res.status(500).json({error:'Server error'});
    }
}