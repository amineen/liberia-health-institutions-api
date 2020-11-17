const HealthFacility = require('../models/HealthFacilities')

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
        console.log(error);
        res.status(500).json({error:'Server error'});
    }
}